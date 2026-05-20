# QtrShoe Docs — Delivery App User Guides

A documentation website for the **QtrShoe Delivery App**. Visitors first pick their
role, then open a clean, sectioned, step-by-step guide illustrated with real app
screenshots.

Built with plain **HTML, CSS and JavaScript** — no build step, no dependencies.

## Roles

| Role | Sections | 
|------|----------|
| Driver | 12 |
| Driver Manager | 8 |
| Store Manager | 9 |
| Accountant | 11 |

## How to view it

**Easiest:** double-click `index.html` to open it in your browser.

**Recommended (a local server, avoids any browser file-access limits):**

```bash
python -m http.server 8753
```

Then open <http://localhost:8753>.

## How it works

- `index.html` — landing page. The visitor chooses a role.
- `guide.html?role=<id>` — one template that renders any role's guide:
  a sticky section sidebar on the left, the content on the right.
- Role IDs: `driver`, `driver-manager`, `store-manager`, `accountant`.

## Project structure

```
index.html            Landing page (role selection)
guide.html            Guide template (renders any role)
assets/
  css/styles.css      All styling
  js/data.js          All documentation content (text + image refs)
  js/dims.js          Image dimensions (prevents layout shift)
  js/app.js           Rendering, search, sidebar, lightbox
  img/<role>/         Screenshots for each role
```

## Editing the content

All wording, sections and image references live in **`assets/js/data.js`**.
Each role has an ordered list of `sections`; each section has `blocks`:

| Block | Purpose |
|-------|---------|
| `text` | A paragraph |
| `sub` | A sub-heading |
| `list` | A bullet list (use ` — ` to bold a leading term) |
| `steps` | A numbered step list |
| `note` | A callout — `v: "info" | "warn" | "tip"` |
| `img` | A single screenshot |
| `gallery` | Several screenshots side by side |

Add a new screenshot by dropping the file into `assets/img/<role>/`, referencing
it in `data.js`, then re-running the dimension script (or just add its
`[width, height]` to `assets/js/dims.js`).

## Features

- Role-based landing page with instant search
- Per-role guide with a live, scroll-tracking section sidebar
- Search across every section **and sub-heading** of every role
- Click any screenshot to view it full-size (lightbox)
- Fully responsive — the sidebar becomes a slide-in menu on mobile
