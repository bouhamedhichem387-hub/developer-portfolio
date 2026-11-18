# Developer Portfolio

A responsive, dark-themed personal portfolio for Hichem Bouhamed, a Computer Science student exploring software engineering. The site presents a professional introduction, areas of learning, linked projects, education context, and a verified public contact channel.

## Features

- Responsive layout with mobile navigation and smooth section navigation.
- Accessible landmarks, skip link, visible keyboard focus, and reduced-motion support.
- About, skills, projects, education, training, contact, and footer sections.
- Working project category filters and direct GitHub repository links.
- Portfolio and project details use only known information; no unverified education dates, certifications, contact details, or experience are claimed.
- Client-rendered React application built with Vite.

## Technology

React, TypeScript, Vite, CSS, Lucide React, Vitest, and Testing Library.

## Requirements

Node.js 20+ and npm.

## Install and run

```bash
npm install
npm run dev
```

Vite prints a local URL (usually `http://localhost:5173`). To create and preview a production build:

```bash
npm run build
npm run preview
```

## Quality checks

```bash
npm test
npm run lint
```

## Configuration

This static portfolio does not require environment variables or a backend. `.env.example` is intentionally not required. Do not put secrets in frontend source code: Vite-exposed values are public in the built client.

## API

There is no API or server-side data in this project. Project cards are maintained in `src/App.tsx` and link to public GitHub repositories.

## Structure

```text
.
├── docs/screenshots/     # instructions for capturing genuine screenshots
├── src/
│   ├── test/             # test setup
│   ├── App.tsx            # page sections and reusable UI components
│   ├── App.test.tsx       # rendering and project-filter tests
│   ├── main.tsx           # React entry point
│   └── styles.css         # responsive design system and page styles
├── index.html
├── package.json
└── vite.config.ts
```

## Screenshots

No screenshots are included because none have been captured from a running application. Follow [`docs/screenshots/README.md`](docs/screenshots/README.md) to record authentic desktop and mobile views.

## Deployment

No deployment has been configured or published. Build with `npm run build`, then deploy the generated `dist/` directory to a static hosting provider of your choice. Configure the provider's SPA fallback to serve `index.html` for client-side paths. Verify the deployment yourself; no external service is required by this project.

## License

MIT. See [LICENSE](LICENSE).
