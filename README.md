# Zain Allateef — Personal Space

A custom **Retro Y2K + Neo-Brutalist** portfolio built with React, Vite, and Tailwind CSS. Cream paper, electric blue, lime accents, thick outlines, and original SVG project illustrations.

## Run locally

Use Node.js 22.12+ (Node.js 24 works too). Open a terminal in this folder:

```sh
npm install
npm run dev
```

Open the local address printed in the terminal (usually `http://127.0.0.1:5173`). Keep that terminal running while you use the preview. Press **Ctrl+C** to stop it.

Dependencies are already installed in the workspace. After cloning the project elsewhere, use `npm ci` to install the versions in `package-lock.json`.

## Your content

Edit **`src/data/portfolio.js`** to change your bio, skills, project descriptions and links, internship, certificates, or contact information. Your five GitHub projects, four credentials, internship, GitHub, LinkedIn, and email are included.

- `src/App.jsx` — page sections, project filters, dialogs, navigation, theme, contact.
- `src/index.css` — Tailwind import, theme tokens, custom design, responsive styles.
- `src/components/Artwork.jsx` — original SVG and CSS project covers and hero illustration.
- `src/main.jsx` — React entry point and locally bundled fonts.
- `index.html` — page title, search description, and social metadata. Update these if your branding changes.
- `public/favicon.svg` — custom Z favicon.

To add a résumé, place `resume.pdf` in `public/` and set `profile.resume` to `'./resume.pdf'`. A download link will appear automatically.

The project covers are illustrated interpretations, not screenshots of live applications. Project details link to the real source repositories; an optional `liveUrl` enables a live-demo button if you deploy a project later. Credential names were supplied by Zain and link to the original verification pages.

## Included interactions

- Filters for AI & NLP, data & dashboards, and machine learning.
- Native project dialogs with Escape/backdrop dismissal.
- Mobile navigation with keyboard Escape support.
- Light/dark theme saved locally in the visitor’s browser.
- Email link and copy-email button with error feedback.
- Keyboard focus styles, skip link, and reduced-motion support.

The email button opens the visitor’s email app. No backend, contact-form service, API keys, analytics, or database is required. Fonts are bundled locally.

## Production build

```sh
npm run build
npm run preview
```

The optimized site is written to **`dist/`**. `npm run preview` serves that build locally (usually port 4173).

## Publishing later

Nothing has been published or uploaded yet. The project is ready for a GitHub repository and static hosting.

For a host with Git integration, the build command is **`npm run build`** and the output directory is **`dist`**. For manual static hosting, upload the contents of `dist/`. Keep source files and `package-lock.json` in Git; `.gitignore` excludes dependencies and generated output.

Vite uses relative asset paths (`base: './'`) so the built site can also be served under a GitHub Pages repository path. The portfolio is one page with section anchors, so it needs no route-rewrite configuration. We can connect the repository and configure deployment in a later step.

## Verification

The production build, React server rendering, project and credential content, section anchors, email link, and a local HTTP response were checked during setup. Browser automation was unavailable in the creation session, so visual layout and browser interactions still need a desktop and mobile check before publishing.

Build configuration follows the [Vite guide](https://vite.dev/guide/) and [Tailwind’s Vite integration](https://tailwindcss.com/docs/installation/using-vite).
