# UI/UX testing across devices

Quick guide to test the site at different viewport sizes.

## Run a local server

From the project root:

```bash
npx serve .
# or
python3 -m http.server 3000
```

Then open:

- **Single view:** `http://localhost:3000` (resize the browser to test)
- **Multi-view:** `http://localhost:3000/test-responsive.html` (mobile, tablet, desktop side by side)

## Breakpoints (Tailwind)

| Breakpoint | Width   | Target devices        |
|------------|---------|------------------------|
| (default)  | &lt; 768px | Phones                 |
| `md`       | ≥ 768px | Tablets, small laptops |
| `lg`       | ≥ 1024px| Desktops               |

## What to check

### Mobile (&lt; 768px)

- [ ] Hamburger menu opens/closes; all nav links and CV are reachable
- [ ] No horizontal scroll; content fits viewport
- [ ] Tap targets ≥ 44px (menu items, links, CV button)
- [ ] Text readable without zoom (body ~16px)
- [ ] Skip link appears on keyboard focus
- [ ] Profile image and bio section stack and look good

### Tablet (768px–1023px)

- [ ] Full nav bar visible; links on one line (no wrapping)
- [ ] Name “Renata Loureiro Frade, PhD” on one line
- [ ] Comfortable spacing; no cramped nav
- [ ] Main content max-width and padding look good

### Desktop (≥ 1024px)

- [ ] Nav bar single row; all items visible
- [ ] Comfortable line length for paragraphs (~70ch in bio)
- [ ] Hover states on nav and links
- [ ] Footer and sections align with max-width container

### All viewports

- [ ] No layout shift (CLS); images have dimensions
- [ ] Focus visible for keyboard users (outline on focus)
- [ ] Print: nav/footer reasonable (no-print where intended)

## Browser DevTools

1. **Chrome/Edge:** F12 → device toolbar (Ctrl+Shift+M) → pick device or set custom size
2. **Firefox:** F12 → Responsive Design Mode (Ctrl+Shift+M)
3. **Safari:** Develop → Enter Responsive Design Mode

Test at least: 320px, 375px, 768px, 1024px, 1280px.

## Optional: test-responsive.html

`test-responsive.html` shows the homepage in three iframes (mobile 375px, tablet 768px, desktop). Open it **via the same origin as the site** (e.g. `http://localhost:3000/test-responsive.html`) so iframes load `index.html` correctly.
