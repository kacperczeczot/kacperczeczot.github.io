[Strona główna](../README.md) > [Dokumentacja](README.md) > [Standardy](STANDARDS.md)

---

# Standardy Inżynieryjne Projektu

Niniejszy projekt został zainicjalizowany na bazie szablonu **[template-single-app](https://github.com/kacperczeczot/template-single-app)** i bezwzględnie przestrzega globalnych reguł zdefiniowanych w centralnej Konstytucji **[devex-standards](https://github.com/kacperczeczot/devex-standards)**.

---

## 1. Zgodność ze Standardami Zewnętrznymi

| Standard | Implementacja w Projekcie | Oficjalna Specyfikacja |
| :--- | :--- | :--- |
| **Conventional Commits** | Commitlint + Husky (język angielski w commitach) | [conventionalcommits.org](https://www.conventionalcommits.org/pl/v1.0.0/) |
| **Semantic Versioning** | SemVer (`MAJOR.MINOR.PATCH`) + tagi `vX.Y.Z` | [semver.org](https://semver.org/lang/pl/) |
| **ADR** | Rejestr w [`docs/adr/`](adr/README.md) na podstawie wzorca `0000-*.md` | [adr.github.io](https://adr.github.io/) |
| **EditorConfig** | [`.editorconfig`](../.editorconfig) w root dla spójności IDE | [editorconfig.org](https://editorconfig.org/) |
| **TSDoc / JSDoc** | Dokumentacja narzędzi w `src/utils/` i komponentów | [tsdoc.org](https://tsdoc.org/) |

---

## 2. Bramki Jakościowe i Pokrycie Testami (Pragmatic Coverage)

Projekt stosuje zasadę pragmatycznego pokrycia per warstwa:
- **Logika narzędziowa i parsery (`src/utils/`):** docelowo ≥ 85%
- **Struktury danych i kolekcje (`src/content/`):** schematy walidowane przez `astro:content` (Zod)
- **Komponenty widokowe (`src/pages/`, `src/components/`):** weryfikowane przez kompilację statyczną Astro (`pnpm build`)

---

## 3. Nadrzędne Źródło Prawdy (SSOT)
Szczegółowe zasady kodu (Zod, Result Object, CSS Modules, Czystość Root, Reguły AI) dziedziczone są z:
👉 **[devex-standards / Architecture Rules](https://github.com/kacperczeczot/devex-standards/blob/main/docs/architecture/RULES.md)**
👉 **[devex-standards / Tooling Rules](https://github.com/kacperczeczot/devex-standards/blob/main/docs/tooling/RULES.md)**
