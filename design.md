# Blog visual design

Theme: **Forest Letterpress** — Ammonite's typographic restraint as the chassis,
Logit's sage→forest greens as the single color move.

## Influences

- **Ammonite** (`~/workspace/ammonite/web`) — minimal, type-forward, OKLch greys, no color, 10px radius, ring-based focus. The "natural" comes from restraint, not ornament.
- **Logit** (`~/workspace/logit/src/frontend`) — sage→forest gradients on warm beige neutrals. Burnt-orange counterpoint (which we are *not* using — too noisy on a writing-focused blog).

## Palette

| Token | Light | Dark |
|---|---|---|
| Background | `#fafaf8` (warm beige, not pure white) | `#1a2620` (deep forest-charcoal) |
| Foreground | `#252525` | `#f5f4f0` |
| Muted foreground | `~#6b6b66` | `~#a8b0a8` |
| Accent | `#5ab389` (sage) | `#8dcfae` (lighter sage for contrast) |
| Code / muted bg | `#f5f4f0` | `#22332a` |
| Border / divider | `~#e8e6df` | `~#2a3a32` |

## Gradient

Full-bleed top band on every page (header strip).

- Light: `linear-gradient(135deg, #8dcfae, #5ab389)`
- Dark: `linear-gradient(135deg, #236247, #2a7a57)`

Body stays flat. Gradient is seasoning, not the meal.

## Typography

- **Body / UI**: Geist Sans (Google Fonts)
- **Code**: Geist Mono
- **Post titles only**: a warm serif — first pick **Fraunces**, fallback **Newsreader**. Serif is the second lever for "natural" warmth; everything else stays Geist.

## Shape & motion

- Border radius: `0.625rem` (10px) — Ammonite default
- Shadows: minimal; prefer rings on focus
- Motion: subtle fade/slide on page enter (Logit-style), nothing flashy

## What we're explicitly *not* doing

- No orange accent (Logit has it; too loud here)
- No gradients in body content — only the header band and possibly link underlines
- No noise textures or background imagery

## Implementation notes

Starlight exposes CSS custom properties for theming. Plan:

1. Add `src/styles/theme.css` with `:root` and `[data-theme='dark']` overrides for Starlight's `--sl-color-*` and `--sl-font*` vars.
2. Register the stylesheet via `customCss` in the Starlight config (`astro.config.mjs`).
3. Load Geist + Fraunces from Google Fonts in `Head.astro` (component override) or via `@import` at top of `theme.css`.
4. Header gradient band — likely a Starlight `Header` component override, or a global `::before` on the layout.

Iterate with `npm run dev` (drafts visible) before committing.
