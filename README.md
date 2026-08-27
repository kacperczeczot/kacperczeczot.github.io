[Strona główna](README.md)

---

# Kacper Czeczot — Oficjalne Portfolio Artystyczne

> **Dyrygent · Multiinstrumentalista · Aranżer**  
> Nowoczesne, responsywne portfolio artystyczne zrealizowane w technologii **Astro 5** i **Tailwind CSS**, wyposażone w interaktywny diagram radialny z fizyką przyciągania magnetycznego (*Magnetic Parallax*) oraz system Content Collections.

---

## 1. Dokumentacja i Standardy

Projekt został zbudowany w oparciu o model architektoniczny **Single-App** ([`template-single-app`](https://github.com/kacperczeczot/template-single-app)) i przestrzega standardów inżynieryjnych ekosystemu:

| Dokument / Sekcja | Opis |
| :--- | :--- |
| [Standardy Projektu (`docs/STANDARDS.md`)](docs/STANDARDS.md) | Deklaracja zgodności ze standardami DevEx i progi testów |
| [Dokumentacja Projektu (`docs/README.md`)](docs/README.md) | Centralny hub dokumentacji technicznej i instrukcji CMS |
| [Rejestr Decyzji ADR (`docs/adr/`)](docs/adr/README.md) | Rejestr Decyzji Architektonicznych (wybór Astro, Tailwind, CMS) |
| [Zarządzanie Treścią Pages CMS (`docs/CMS.md`)](docs/CMS.md) | Instrukcja obsługi bezserwerowego panelu redakcyjnego CMS |
| [Globalne Standardy DevEx (`devex-standards`)](https://github.com/kacperczeczot/devex-standards) | Nadrzędna Konstytucja inżynieryjna ekosystemu |
| [Reguły AI Projektu (`.agents/rules/project.md`)](.agents/rules/project.md) | Wytyczne domenowe dla asystentów AI |

---

## 2. Mapa Repozytorium

* 📁 [**`src/components/`**](src/components/README.md) — Komponenty interfejsu (Hero, diagram radialny, nawigacja, stopka)
* 📁 [**`src/content/`**](src/content/README.md) — Baza danych Markdown i Content Collections (formacje, dzieła)
* 📁 [**`src/layouts/`**](src/layouts/README.md) — Szablony bazowe, struktura HTML i tagi SEO
* 📁 [**`src/pages/`**](src/pages/_README.md) — Trasy i podstrony serwisu (`/`, `/scena-i-zespoly`, `/projekty-autorskie`, `/bio`)
* 📁 [**`src/utils/`**](src/utils/README.md) — Narzędzia pomocnicze (`cms.ts` – zarządzanie base URL i zasobami CMS)
* 📁 [**`public/`**](public/README.md) — Statyczne zasoby graficzne, wektory SVG i portrety
* 📁 [**`scripts/`**](scripts/README.md) — Skrypty pomocnicze i generatory assetów

---

## 3. Stos Technologiczny

* **Framework:** [Astro 5](https://astro.build/) (Static Site Generation / SSG)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) + Vanilla CSS
* **Typografia:** `Plus Jakarta Sans` (Google Fonts)
* **Ikony:** [lucide-astro](https://lucide.dev/)
* **Fizyka ruchu:** Natywny silnik interpolacji sprężystości (*Spring Lerp*) i przyciągania magnetycznego (*Magnetic Parallax*)
* **Zarządzanie treścią:** [Pages CMS](https://pagescms.org) — edycja w przeglądarce ([app.pagescms.org](https://app.pagescms.org)), logowanie GitHub, zapis do repozytorium bez lokalnego klona. Instrukcja: [`docs/CMS.md`](docs/CMS.md)

---

## 4. Uruchomienie i Budowanie

### Wymagania
* Node.js `>= 18.17.0`
* pnpm `>= 9.0.0` (lub npm)

### Komendy

```bash
# Instalacja zależności
pnpm install

# Uruchomienie serwera deweloperskiego (http://localhost:4321)
pnpm run dev

# Kompilacja produkcyjna (katalog dist/)
pnpm run build

# Podgląd zbudowanej wersji
pnpm run preview
```

---

## 5. Prawa autorskie

© 2026 Kacper Czeczot. Wszelkie prawa zastrzeżone.
