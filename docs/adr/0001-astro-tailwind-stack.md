[Strona główna](../../README.md) > [Dokumentacja](../README.md) > [ADR](README.md) > [ADR 0001](0001-astro-tailwind-stack.md)

---

# ADR 0001: Wybór Astro 5, Tailwind CSS oraz Pages CMS dla Portfolio Artystycznego

* **Status:** Zaakceptowany
* **Data:** 2026-08-18
* **Autorzy:** Kacper Czeczot

---

## Kontekst
Projekt wymagał stworzenia ultraszybkiej, w 100% responsywnej i eleganckiej strony portfolio dyrygenta i multiinstrumentalisty z interaktywnym diagramem radialnym oraz bezserwerowym panelem do edycji treści przez przeglądarkę.

## Decyzja
1. **Astro 5 (SSG):** Generowanie czystego statycznego HTML (Zero-JS domyślnie, wysoka wydajność i idealne SEO).
2. **Tailwind CSS + CSS Modules/Vanilla:** Zapewnienie precyzyjnej kontroli typografii, ciemnego motywu i animacji.
3. **Pages CMS:** Bezserwerowy panel CMS zintegrowany z GitHub API, umożliwiający edycję treści w formacie Markdown bez konieczności stawiania dedykowanego backendu.

## Konsekwencje
### Pozytywne (Zyski):
- Maksymalna wydajność (Lighthouse 100/100) dzięki SSG.
- Darmowy hosting i automatyczny deployment za pośrednictwem GitHub Pages.
- Bezpieczeństwo — brak bazy danych i serwera backendowego podatnego na ataki.

### Negatywne (Kompromisy):
- Aktualizacje treści wymagają uruchomienia pipeline'u GitHub Actions w celu przebudowania strony.
