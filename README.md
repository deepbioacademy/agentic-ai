# Agentic AI for Computational Biology (AAI4CB) Hackathon 2027

Website for the AAI4CB Hackathon 2027. Theme: **using AI agents in computational biology to take on antimicrobial resistance**, in Bangladesh, through four One Health areas: Health, Food, Agriculture, Livestock (these names are fixed). Every team uses one agent, Google Antigravity with the Science Skills plugin from Google DeepMind, to work on real research questions and check how far the answers can be trusted. Nobody builds an agent, a benchmark or software.

Built with Next.js 16 (App Router), React 19, Tailwind CSS v4.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Design

A Material 3 style tonal system (tokens at the top of `src/app/globals.css`): tonal surface steps instead of borders, 28px card corners, pill buttons, scalloped shape badges (`Shape.tsx`), Commissioner for headings and Roboto Flex for text, with a palette built from the host brands: DeepBio blue as primary, CHIRAL green as secondary, CHIRAL red as a sparing accent. Component classes live in `@layer components` so Tailwind utilities can override them.

Logos for the agent and every data source are in `public/tools/` and are referenced from `src/resources.ts`. They were taken from each source's own site and are shown only to identify it. The area icons (stethoscope, nutrition, agriculture, pets, microbiology, water drop) are Material Symbols by Google, Apache License 2.0.

## Writing rule

The structure follows a reference hackathon site, but every sentence is written for this event and framed on Bangladesh. Do not paste text from other sites.

## Edit content

Copy lives in three files. Fields marked `TODO` must be filled before launch: final event date, milestone dates, venue, Luma URL, prize amounts, contact email, fee, committee members, mentors.

- `src/content.ts` — event details, the four thematic areas and their connections, steps, milestones, prizes, judging criteria, committees, mentors, hosts, partners, home-page FAQ
- `src/resources.ts` — agent guide steps, toolbox entries and links, all FAQ entries
- `src/legal.ts` — terms of participation (18 articles) and privacy notice (both drafts; review before registration opens)

## Registration (Luma)

Registration is not handled on this site. Set `event.lumaUrl` in `src/content.ts` to the Luma event URL. Until it is set, every Register button points to the on-page "opens soon" notice; once set, the buttons open Luma in a new tab and the registration deadline is shown.

Suggested registration questions to add on the Luma event:

- Status (undergraduate, graduate, PhD candidate, researcher, clinician, professional, other)
- Institution
- Field (biology, bioinformatics, computing and AI, medicine and pharmacy, other)
- Experience with AI agents or computational biology tools (none, basic, moderate, good)
- Team name (only if the team already exists; all members enter the same name)
- Preferred area (Health, Food, Agriculture, Livestock)
- Acceptance of the terms of participation
- Consent to photos and video at the final event (yes or no)

Mentor sign-up uses `event.mentorUrl` (a second Luma event or a form). While empty it falls back to email.

## Structure

Pages (the home page section order is deliberate; keep it):

- `/` — hero, the idea, challenges (four areas and the One Health diagram), participation, timeline, judging, resources, contact, organizers, terms, committees, register
- `/register/` — participants, mentors, before you register (links out to Luma)
- `/resources/` — agent guide (stepper), final presentation, toolbox (stage filter), searchable FAQ
- `/committees/` — the three committees and the mentor list (filter by category)
- `/terms/` and `/privacy/`

Code: pages in `src/app/`, shared pieces in `src/components/`, design tokens (flag green/red palette) in `src/app/globals.css`.

## Deploy

The site is a static export (`out/`), so it can be hosted anywhere. Two targets are set up.

### Netlify

`netlify.toml` holds the settings: build with `npm run build`, publish `out/`, Node 22, no sub-path. To go live:

1. In Netlify choose **Add new site → Import an existing project** and pick this GitHub repository.
2. Leave the build settings as detected (they come from `netlify.toml`) and deploy.
3. Every push to the production branch redeploys; pull requests get preview URLs.

### GitHub Pages

Pushing to `main` deploys the site to GitHub Pages via `.github/workflows/deploy.yml`
(lint, static export to `out/`, publish). Live at https://deepbioacademy.github.io/agentic-ai/.

The site is a static export, so image paths go through `asset()` in `src/content.ts`,
which adds the Pages sub-path (`NEXT_PUBLIC_BASE_PATH`) at build time.

To preview the production build locally:

```bash
NEXT_PUBLIC_BASE_PATH= npm run build   # writes out/
npx serve out
```
