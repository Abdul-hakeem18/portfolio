# Abdul Hakeem: Portfolio

Personal portfolio of Abdul Hakeem, a full-stack and mobile software engineer (Laravel, Node.js, React, React Native and Flutter). Built with React, TypeScript and Vite and deployed to GitHub Pages with GitHub Actions.

## Run locally

Requires Node.js 22.

```sh
npm ci
npm run dev
```

## Build and test

```sh
npm run build        # type check + production build
npx playwright install chromium
npm test             # desktop and mobile browser tests
```

## Deploy

Pushing to `main` runs `.github/workflows/pages.yml`. The workflow builds and tests the site, then deploys `dist/` to GitHub Pages. In the repository settings, set Pages → Source to **GitHub Actions**.

## Editing content

- `src/projects.ts`: projects, in display order. The first four are featured.
- `src/App.tsx`: profile text, skills, experience, education and contact links.
- `public/Abdul-Hakeem-CV.pdf`: the CV offered by the "Download CV" button.
- `public/projects/*.webp`: project screenshots, with private client data hidden.
