# Build instructions

This site uses a small build step for **Tailwind CSS** (purged bundle) and **shared nav/footer** (injected from partials).

## Prerequisites

- Node.js (v18 or later)
- npm

## One-time setup

```bash
npm install
```

## Build (before deploy or local preview)

```bash
npm run build
```

This runs:

1. **`npm run build:css`** — Builds Tailwind from `src/input.css` into `style.css` (minified, purged). Edit `src/input.css` and `tailwind.config.js` for styles.
2. **`npm run build:html`** — Injects `partials/nav.html` and `partials/footer.html` into each page at `<!-- INJECT:nav -->` and `<!-- INJECT:footer -->`. Edit the partials to change nav/footer everywhere.

## Optional: run only one step

- **CSS only:** `npm run build:css`
- **HTML only:** `npm run build:html`

## Workflow

- **Nav/footer:** Edit `partials/nav.html` or `partials/footer.html`, then run `npm run build:html`.
- **Styles:** Edit `src/input.css` or `tailwind.config.js`, then run `npm run build:css`.
- **Page content:** Edit the HTML files (e.g. `index.html`) as usual. Do not remove the `<!-- INJECT:nav -->` / `<!-- INJECT:footer -->` markers.

## Fonts

Fonts are loaded via **preconnect + `<link>`** in each page’s `<head>` (no `@import` in CSS), so rendering is not blocked by a CSS import.

## Deploy (e.g. GitHub Pages)

1. Run `npm run build`.
2. Commit the updated `*.html` and `style.css`.
3. Push; your host will serve the built files.
