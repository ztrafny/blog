# zac-blog

Source for [ztrafny.github.io/blog](https://ztrafny.github.io/blog/) — Zac Trafny's blog on software, knowledge, and building things.

Built with [Astro](https://astro.build/) and [Starlight](https://starlight.astro.build/), deployed to GitHub Pages on every push to `main`.

## Structure

This repo is the **public, render-ready** half of a two-repo setup. Authoring lives in a separate private repo (`ztrafny/writing`), which holds raw ideas, in-progress drafts, and voice references. Posts move into this repo's `src/content/docs/` once they're ready to be public; in-progress posts can sit here with `draft: true` in frontmatter to stay out of production builds.

```
src/content/docs/
├── index.md                            # splash hero homepage
└── <series-slug>/<NN>-<post>.md        # individual posts, grouped by series
```

The sidebar is configured in `astro.config.mjs` and autogenerates from each series directory.

## Local development

Requires Node ≥ 22.12.

```bash
npm install
npm run dev       # http://localhost:4321/blog/
npm run build     # static build to ./dist
npm run preview
```

## Deploy

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site and publishes via `actions/deploy-pages`. No manual deploy step.
