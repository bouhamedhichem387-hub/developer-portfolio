# Developer Portfolio — Bouhamed Hichem

A responsive, dark editorial-style personal portfolio for **Bouhamed Hichem**, a Licence GLSI student at ESPIN Sfax. The site introduces my learning journey, current skills, education, and selected GitHub projects.

## Features

- Responsive layout with mobile navigation and smooth section navigation.
- Accessible landmarks, skip link, visible keyboard focus, and reduced-motion support.
- About, skills and programming languages, selected projects, education, training, contact, and footer sections.
- Functional project category filters and direct links to the three public project repositories.
- Verified education details supplied for this portfolio: Licence GLSI, 2nd year, ESPIN Sfax.
- No unverified certifications, personal email, phone number, work experience, or social profiles are claimed.
- Static client application; no API, backend, or environment configuration required.

## Technology

React 18, TypeScript, Vite 6, CSS, Lucide React, Vitest, and Testing Library.

## Requirements

Node.js 20+ and npm.

## Install and run

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (typically `http://localhost:5173`). Create and preview a production build with:

```bash
npm run build
npm run preview
```

## Tests and lint

```bash
npm test
npm run lint
```

Tests cover key profile content, project repository links, project category filtering, and mobile navigation.

## Configuration and API

No environment variables are required; see `.env.example`. There is no API or server-side data. Project information is maintained in `src/App.tsx`. Do not put secrets in frontend source code: bundled Vite values are public.

## Structure

```text
.
├── docs/screenshots/       # instructions for recording genuine screenshots
├── src/
│   ├── test/setup.ts       # Testing Library setup
│   ├── App.tsx             # content, sections, and reusable UI components
│   ├── App.test.tsx        # rendering and interaction tests
│   ├── main.tsx            # React entry point
│   └── styles.css          # responsive visual system
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Screenshots

No application screenshots have been captured or committed. See [`docs/screenshots/README.md`](docs/screenshots/README.md) for instructions to capture genuine desktop and mobile images from a running site.

## Deployment

No deployment has been configured or published. Build with `npm run build`, then publish the generated `dist/` directory using a static host of your choice. Configure an SPA fallback to `index.html` if needed. Deployment is left to the repository owner.

## License

MIT. See [LICENSE](LICENSE).
