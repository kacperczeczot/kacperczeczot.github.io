[Strona główna](../../README.md) > [src](../README.md) > [utils](README.md)

---

# `src/utils/` (Moduły Pomocnicze)


W tym katalogu znajdują się uniwersalne funkcje pomocnicze i narzędzia wykorzystywane w projekcie.

## 📄 Pliki

### `cms.ts`
* **`base`:** Zmienna zawierająca oczyszczony prefiks ścieżki bazowej witryny (`import.meta.env.BASE_URL.replace(/\/$/, '')`), niezbędny do prawidłowego działania odnośników i zasobów statycznych na GitHub Pages.
* **`cmsImage(path?: string | null, fallback?: string): string`:** Bezpieczna funkcja rozwiązująca adresy URL do grafik z Pages CMS, zasobów lokalnych (`/images/...`) oraz zewnętrznych odnośników `http(s)://`.
