# Agentic AI for Computational Biology (AAI4CB) Hackathon 2027

Landing page for the AAI4CB Hackathon 2027, which invites participants to explore and evaluate AI agents in bioinformatics and computational biology: how well they reason, explain and generalize.

Built with Next.js 16 (App Router), React 19, Tailwind CSS v4.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Edit content

All copy lives in `src/content.ts`: event details, tracks, timeline, judging criteria, audiences, FAQ, and the hero agent trace. Fields marked `TODO` (dates, venue, registration URL, contact email, fee) must be filled before launch.

## Structure

- `src/app/page.tsx` — page sections
- `src/app/globals.css` — design tokens (flag green/red palette) and component styles
- `src/components/AgentTrace.tsx` — animated agent run in the hero (respects reduced motion)

## Deploy

Pushing to `main` deploys the site to GitHub Pages via `.github/workflows/deploy.yml`
(lint, static export to `out/`, publish). Live at https://deepbioacademy.github.io/agentic-ai/.

The site is a static export, so image paths go through `asset()` in `src/content.ts`,
which adds the Pages sub-path (`NEXT_PUBLIC_BASE_PATH`) at build time.

To preview the production build locally:

```bash
NEXT_PUBLIC_BASE_PATH= npm run build   # writes out/
npx serve out
```
