# Code review: flaws, red flags & fixes

Review date: 2026-02-01. The issues below were identified and **fixed** unless marked as “Optional” or “Accepted”.

---

## Critical / fixed

### 1. **CSS conflict: bio section line length**
- **Issue:** On `index.html`, the bio block had both `class="bio-text ... max-w-none"`. Tailwind’s `max-w-none` overrode the intended `.bio-text { max-width: 70ch }` from `style.css`, so the “readable line length” was disabled.
- **Fix:** Removed `max-w-none` from the bio div so `.bio-text` applies and line length is ~70ch.

### 2. **Mixed content / insecure links (http)**
- **Issue:** Several external links used `http://` instead of `https://`, which can trigger mixed-content warnings and is less secure.
- **Locations:**  
  - `index.html`: ORCID link  
  - `publications.html`: Henry Jenkins blog, IEA-USP, ORCID  
- **Fix:** All updated to `https://`.

### 3. **Malformed HTML in publications**
- **Issue:** In `publications.html`, “O Livro Delas” had `</p> <span>(Editor)</span>` so “(Editor)” was a loose span between two block elements.
- **Fix:** Wrapped “(Editor)” inside the same `<p>` as the title:  
  `O Livro Delas <span class="text-slate-500 text-sm font-normal">(Editor)</span></p>`.

### 4. **Menu toggle logic and accessibility**
- **Issue:** Variable `isOpen` was used with the *opposite* meaning (it was `false` when the dropdown was visible), because `classList.toggle('hidden')` returns the new state after toggling. That made the code hard to follow and maintain.
- **Fix:** Introduced a single `setMenuState(open)` helper and use it for:
  - Click on toggle
  - Click on a dropdown link
  - **Escape** key to close the menu (accessibility improvement).

### 5. **Profile image: layout shift and loading**
- **Issue:** The profile image had no `width`/`height`, which can cause layout shift (CLS), and no `loading` hint.
- **Fix:** Added `width="208" height="208"` (matches `md:w-52 md:h-52`) and `loading="lazy"`.

### 6. **External links: `rel` for security and privacy**
- **Issue:** Some `target="_blank"` links had only `rel="noopener"`. Adding `noreferrer` improves privacy and is good practice.
- **Fix:** Added `rel="noopener noreferrer"` on the updated http→https links (ORCID, Henry Jenkins, IEA).

---

## Minor / optional

### 7. **SVG attributes in HTML**
- **Status:** Accepted.
- **Note:** SVG uses `stroke-width`, `stroke-linecap`, etc. In HTML5 these are valid; the DOM uses camelCase (`strokeWidth`), but the markup is correct as-is.

### 8. **Tailwind from CDN**
- **Issue:** Using the full Tailwind script from CDN (no purge) increases payload. For a small static site it’s acceptable; for stricter performance you could build a purged CSS bundle.
- **Action:** Optional optimization; no change made.

### 9. **Font loading**
- **Issue:** `style.css` uses `@import url('https://fonts.googleapis.com/...')`, which can block rendering. Preconnect + `<link>` in HTML would be slightly better.
- **Action:** Optional; no change made.

### 10. **Duplicate nav/footer**
- **Issue:** Nav and footer are repeated in six HTML files. Any change must be done in all six. For future refactors, a small build step or SSI could include a shared partial.
- **Action:** Documented; no structural change.

### 11. **`rel="noreferrer"` on all external links**
- **Issue:** Many external links have only `rel="noopener"`. Adding `noreferrer` everywhere would be more consistent and privacy-friendly.
- **Action:** Optional; applied only where links were already being edited (http→https).

---

## What’s in good shape

- **Semantics:** One `<h1>` per page, clear section headings, `main`, `nav`, `footer`, `role` where useful.
- **Accessibility:** Skip link, `aria-label`, `aria-expanded`, `aria-current="page"`, focus styles, reduced-motion respected.
- **Security:** No user input or dynamic injection; no XSS surface. External links use `rel="noopener"` (and `noreferrer` where updated).
- **SEO:** Canonical URLs, meta descriptions, Open Graph, Twitter Card, JSON-LD Person, sitemap, robots.txt.
- **Validation:** No duplicate IDs; `#main-content` exists for the skip link; links and buttons are used correctly.

---

## Files changed

| File            | Changes |
|-----------------|--------|
| `index.html`    | Bio `max-w-none` removed; ORCID → https + noreferrer; img dimensions + `loading="lazy"`; menu script refactor + Escape key. |
| `publications.html` | Henry Jenkins + IEA + ORCID → https + noreferrer; O Livro Delas HTML; menu script refactor + Escape. |
| `projects.html` | Menu script refactor + Escape. |
| `outreach.html` | Menu script refactor + Escape. |
| `teaching.html` | Menu script refactor + Escape. |
| `service.html`  | Menu script refactor + Escape. |

No changes were made to `style.css`, `sitemap.xml`, or `robots.txt`.
