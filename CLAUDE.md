# Blog repo — operational context

Public source for Zac's blog at **https://ztrafny.github.io/blog/**.

## Stack

- Astro 6 + Starlight 0.38
- Static site, deployed to GitHub Pages via `.github/workflows/deploy.yml` on every push to `main`
- Hosted as a project page (`base: '/blog'` in `astro.config.mjs`)

## Two-repo setup

This repo contains only **render-ready** content. The authoring workspace
(raw ideas, in-progress drafts, voice references) lives in a separate
private repo:

- **`ztrafny/writing`** — cloned at `/Users/ztrafny/workspace/writing/`
  - `voice-model/` — writing samples + voice profile (reference for AI-drafted content)
  - `notes/ideas/` — pre-shaping concepts and series specs
  - `notes/drafts/` — in-progress drafts not yet ready for the public repo

When content is ready for the blog, it moves out of the writing repo
and into this repo's `src/content/docs/`.

## Publishing flow

1. Idea matures in `writing/notes/ideas/` → draft is shaped in `writing/notes/drafts/`
2. Move the file to `src/content/docs/<series-slug>/<NN>-<post-slug>.md`
3. Ensure Starlight frontmatter: `title`, `description`, `sidebar.label`, `sidebar.order`
4. Set `draft: false` (or remove the field) — Starlight excludes `draft: true` from production
5. If it's a new series, add a `sidebar` block in `astro.config.mjs` referencing the directory
6. Commit + push to `main`; the workflow deploys

## Local commands

- `npm install` — install deps (Node ≥22.12 required by Astro 6)
- `npm run dev` — dev server at `localhost:4321/blog/` (drafts visible)
- `npm run build` — static build to `dist/`
- `npm run preview` — serve the production build locally

## Known quirks (worth remembering on upgrades)

- **Starlight `social` shape changed at 0.33.** 0.32 wanted an object keyed by icon name; 0.33+ wants an array of `{ icon, label, href }` objects. Schema validation fails loudly if you mismatch.
- **Astro 6 requires Node ≥22.12.** The deploy workflow pins `node-version: 22` on `withastro/action@v3` for that reason. If you bump Astro, recheck the engine field.
- **Docs collection needs an explicit loader.** `src/content.config.ts` uses `loader: docsLoader()` from `@astrojs/starlight/loaders`; without it the collection resolves empty at build time and only the 404 page renders.
- **`base: '/blog'` is load-bearing.** This is a project page, not a user page. All internal links and asset URLs depend on it. If the repo is ever renamed or moved to `ztrafny.github.io`, update or remove `base`.

## Things that are NOT in this repo

- Voice samples / voice profile → `ztrafny/writing` repo
- Blog ideas, specs, in-progress drafts → `ztrafny/writing` repo
- The retired `ztrafny/voice-model-archived` repo is a defunct stub from a pre-consolidation setup; can be deleted once the GH token has `delete_repo` scope
