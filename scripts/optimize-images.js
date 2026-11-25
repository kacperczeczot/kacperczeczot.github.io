import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = process.cwd();
const IMAGES_DIR = path.join(ROOT, 'public', 'images');
const SRC_DIR = path.join(ROOT, 'src');

const RASTER_EXTS = new Set(['.jpg', '.jpeg', '.png']);
const SKIP_FILES = new Set(['og-cover.png']);
const MAX_DIMENSION = 1600;
const WEBP_QUALITY = 82;

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else {
      files.push(full);
    }
  }
  return files;
}

async function optimizeImages() {
  const allImages = await walk(IMAGES_DIR);
  const replacements = new Map();
  let totalBefore = 0;
  let totalAfter = 0;
  let convertedCount = 0;

  for (const filePath of allImages) {
    const ext = path.extname(filePath).toLowerCase();
    const baseName = path.basename(filePath);
    if (!RASTER_EXTS.has(ext) || SKIP_FILES.has(baseName)) continue;

    const beforeStat = await fs.stat(filePath);
    totalBefore += beforeStat.size;

    const targetPath = filePath.slice(0, -ext.length) + '.webp';
    await sharp(filePath)
      .rotate()
      .resize({
        width: MAX_DIMENSION,
        height: MAX_DIMENSION,
        fit: 'inside',
        withoutEnlargement: true,
      })
      .webp({ quality: WEBP_QUALITY, effort: 5 })
      .toFile(targetPath);

    const afterStat = await fs.stat(targetPath);
    totalAfter += afterStat.size;

    const oldUrl = '/' + path.relative(path.join(ROOT, 'public'), filePath).replaceAll(path.sep, '/');
    const newUrl = '/' + path.relative(path.join(ROOT, 'public'), targetPath).replaceAll(path.sep, '/');
    replacements.set(oldUrl, newUrl);

    await fs.unlink(filePath);
    convertedCount++;
    console.log(
      `✓ ${oldUrl} (${(beforeStat.size / 1024).toFixed(0)} KB) -> ${newUrl} (${(afterStat.size / 1024).toFixed(0)} KB)`
    );
  }

  if (replacements.size > 0) {
    const srcFiles = await walk(SRC_DIR);
    let updatedFiles = 0;
    for (const srcFile of srcFiles) {
      const ext = path.extname(srcFile).toLowerCase();
      if (!['.md', '.json', '.astro', '.ts', '.js'].includes(ext)) continue;
      let content = await fs.readFile(srcFile, 'utf8');
      let changed = false;
      for (const [oldUrl, newUrl] of replacements.entries()) {
        if (content.includes(oldUrl)) {
          content = content.replaceAll(oldUrl, newUrl);
          changed = true;
        }
      }
      if (changed) {
        await fs.writeFile(srcFile, content, 'utf8');
        updatedFiles++;
      }
    }
    console.log(`\nZaktualizowano referencje w ${updatedFiles} plikach źródłowych.`);
  }

  if (convertedCount === 0) {
    console.log('Wszystkie obrazy w public/images są już zoptymalizowane.');
  } else {
    const savedPct = (((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1);
    console.log(
      `\nPodsumowanie: ${convertedCount} plików | ${(totalBefore / 1024 / 1024).toFixed(2)} MB -> ${(totalAfter / 1024 / 1024).toFixed(2)} MB (-${savedPct}%)`
    );
  }
}

optimizeImages().catch((err) => {
  console.error('Błąd optymalizacji obrazów:', err);
  process.exit(1);
});
