# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2026-06-06

### Added

- Astro 6 SSG project with full static output
- Single-file configuration via `blog.config.ts`
- 15 built-in themes (phantom, aurora, midnight, rose, emerald, sunset, obsidian, neon, ocean, forest, crimson, golden, arctic, candy, cosmic)
- 41 self-hosted Google Fonts with zero runtime CDN requests and CLS-safe fallback metrics
- Glassmorphism card components with configurable opacity and blur
- CSS-only beam effects and particle field animations (zero JavaScript)
- Lens flare click effect (minimal JS island via `motion` + nanostores)
- SVG noise texture overlay
- Astro Content Collections with MDX and Zod schema validation
- Shiki syntax highlighting for code blocks
- Built-in Astro i18n routing (default: English, secondary: Czech)
- Table of contents with IntersectionObserver active-highlight
- Previous/next post navigation (ContentSurround)
- Paginated blog list with configurable posts per page
- Tag-based filtering pages
- RSS feed
- Full SEO and GEO: OpenGraph, Twitter Cards, JSON-LD (WebSite + Person + BlogPosting + BreadcrumbList), hreflang alternates
- Auto-generated sitemap via `@astrojs/sitemap`
- Social icons row (25 supported platforms)
- Avatar with glow ring and initials fallback
- `scripts/generate-icons.ts` - downloads avatar → 4 WebP icon sizes in `public/`
- `scripts/generate-font.ts` - downloads font WOFF2 files → `public/fonts/` + writes `src/styles/font.css`
- `scripts/generate-manifest.ts` - derives `public/manifest.json` from `blog.config.ts` at build time (name, description, theme_color, background_color)
- `scripts/generate-og.ts` - generates a 1200×630 WebP OG image from config using Sharp + SVG
- `scripts/setup.ts` - smart predev setup runner; checks each generated asset against the current config and regenerates only what is missing or stale
- `predev` lifecycle hook - `scripts/setup.ts` runs automatically before `bun dev` so a fresh clone works with just `bun dev`
- `bun run setup` / `bun run manifest` / `bun run og` / `bun run icons` / `bun run font` convenience scripts
- `src/pages/sitemap.xml.ts`, `src/pages/sitemap-index.xml.ts`, `src/pages/sitemap-0.xml.ts` - proper static endpoints
- Font preload hint in `<head>` - primary Latin regular-400 woff2 resolved dynamically from `font.css` at build time
- `fetchpriority="high"` on navigation avatar (LCP element)
- `loading="lazy"` on social icon images
- `width`/`height` on YouTube embed thumbnail (prevents CLS)
- `aria-hidden` on lightbox dialog (toggled by open/close JS)
- `prefers-reduced-motion` override for view transition animations
- Docker support: multi-stage Bun build → nginx:alpine static serve
- Biome linting and formatting
- Husky pre-commit hooks
- GitHub Actions CI (lint, typecheck, test, build) and release workflows
- GitHub issue templates and PR template
- FOSS community files (README, SECURITY, CONTRIBUTING, CODE_OF_CONDUCT, CODEOWNERS)
