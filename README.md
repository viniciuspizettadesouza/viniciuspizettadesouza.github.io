# Vinicius Souza Portfolio

Personal portfolio for [Vinicius Souza](https://viniciuspizettadesouza.github.io/), a Senior Full-Stack Engineer with a strong background in frontend architecture, React, and TypeScript.

The site presents my professional experience, technical focus, and contact links in a focused single-page format.

**Live website:** [viniciuspizettadesouza.github.io](https://viniciuspizettadesouza.github.io/)

[![Vinicius Souza portfolio preview](docs/portfolio-preview.png)](https://viniciuspizettadesouza.github.io/)

## Technology

| Area | Tools |
| --- | --- |
| Interface | React 19, TypeScript 6, Tailwind CSS 4 |
| Build | Vite 6, SWC |
| Quality | ESLint 9, TypeScript strict mode |
| Delivery | pnpm, GitHub Actions, GitHub Pages |
| Maintenance | Dependabot |

## Project structure

```text
.
├── .github/
│   ├── dependabot.yml
│   └── workflows/
│       ├── dependabot-automerge.yml
│       ├── deploy-pages.yml
│       └── pull-request-checks.yml
├── docs/
│   └── portfolio-preview.png
├── public/
│   ├── apple-touch-icon.png
│   ├── monogram.png
│   ├── og-image.png
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
└── vite.config.ts
```

## Local development

Use Node.js 24 and pnpm 10.13.1, which match the deployment workflow.

```bash
corepack enable
pnpm install
pnpm dev
```

Vite will print the local development URL in the terminal.

### Commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the Vite development server |
| `pnpm lint` | Run ESLint across the project |
| `pnpm build` | Type-check and create the production build |
| `pnpm preview` | Preview the production build locally |

## Design decisions

- A single page keeps the portfolio focused and makes the most important information easy to scan.
- The deep navy and restrained gold palette draws from the VS monogram and gives the site a distinct visual identity.
- React and Vite provide a small, fast static build without introducing routing or server-side complexity that the content does not need.
- Professional experience appears before the skills list so evidence and outcomes provide context for the technology choices.
- Responsive layouts preserve the editorial structure across desktop and mobile screens.
- Canonical metadata, Open Graph images, JSON-LD, robots.txt, and sitemap.xml support search engines and professional sharing previews.

## Accessibility

The interface includes:

- Semantic landmarks and a consistent heading hierarchy.
- Accessible labels for icon-only contact links.
- Visible keyboard focus styles.
- Decorative artwork hidden from assistive technology.
- High-contrast text and controls against the navy background.
- Responsive layouts that work from small mobile screens upward.
- Reduced-motion handling for users who request it in their system settings.

## Deployment

The website is deployed to GitHub Pages through GitHub Actions.

1. A push to `main` starts the `Deploy to GitHub Pages` workflow.
2. The workflow installs the frozen pnpm lockfile using Node.js 24.
3. ESLint and the production build must pass.
4. The generated `dist` directory is uploaded as a Pages artifact.
5. GitHub deploys the artifact to the `github-pages` environment.

Pull requests run the same lint and build checks before merge. Dependabot checks npm packages and GitHub Actions weekly. Grouped patch and minor dependency updates can merge automatically after the pull request checks pass. Major updates remain open for manual review.
