<h1 align="center">
  <a href="https://github.com/germondai/blog" target="_blank">
    <img align="center" src="https://icons.germondai.com/icons?i=astro" /><br/><br/>
    <span>Germond's Blog</span>
  </a>
</h1>

## **Welcome** to <a href="https://github.com/germondai/blog" target="_blank">**Germond's Blog**</a>! 👋

> Your words, your way.

A beautiful, performant, self-hostable personal blog - FOSS, Astro 6, single-file config.  
Fork it, fill in `blog.config.ts`, and it's yours. No database, no auth, no dashboard.

**Inspired by [@germondai/links](https://github.com/germondai/links)** - same tooling philosophy, same visual system, built for blogging.

[![CI](https://github.com/germondai/blog/actions/workflows/ci.yml/badge.svg)](https://github.com/germondai/blog/actions/workflows/ci.yml)
[![License: AGPL-3.0](https://img.shields.io/badge/License-AGPL--3.0-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![Bun](https://img.shields.io/badge/runtime-Bun-orange)](https://bun.sh)
[![Astro](https://img.shields.io/badge/Astro-6-blueviolet)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178c6)](https://www.typescriptlang.org)

---

## Features

- **Astro 6 SSG** - zero JavaScript by default, perfect Core Web Vitals
- **Single config file** - edit `blog.config.ts` and nothing else
- **Live dev panel** - edit config visually in-browser and export to `blog.config.ts`
- **15 themes** - phantom, aurora, midnight, rose, and 11 more
- **41 self-hosted fonts** - zero Google CDN at runtime, CLS-safe fallback metrics
- **Glassmorphism UI** - glass cards, backdrop blur, accent glow
- **CSS-only effects** - beams, particles, noise texture (no JS)
- **Lens flare** - click effect via minimal JS island
- **MDX blog posts** - with Shiki code highlighting
- **Multilingual** - 26 languages, auto-detected from content (EN + CS + SK + PL out of the box)
- **Table of contents** - with IntersectionObserver active highlight
- **Auto-generated favicon, PWA icons, manifest & OG image** - all built from your config at every build
- **Social icons** - 25 platforms with branded icons or SVG fallbacks
- **Full SEO/GEO** - OpenGraph, Twitter Cards, JSON-LD, hreflang, sitemap
- **RSS feed** - `/rss.xml`
- **Docker ready** - multi-stage build → nginx:alpine static serve
- **FOSS** - AGPL-3.0-or-later

---

## Quick start

```sh
git clone https://github.com/germondai/blog.git my-blog
cd my-blog
bun install
cp blog.config.example.ts blog.config.ts
# edit blog.config.ts with your info, then:
bun dev  # → http://localhost:4321
```

`bun dev` automatically runs a one-time setup on first launch - downloading your font, generating icons, manifest, and OG image from your config. Subsequent starts skip this and launch instantly.

In dev mode a **⚙ gear button** appears in the bottom-right corner. Click it to open the live config panel - edit everything visually and hit **Copy blog.config.ts** to export your settings.

---

## Configuration

Edit `blog.config.ts` - it's the only file you need to touch.

### Profile

```ts
profile: {
  name: string        // display name
  username: string    // @handle shown below name
  bio?: string        // short one-liner bio
  avatar?: string     // public HTTPS URL or /public path
  socials?: SocialLink[]
}
```

### Appearance

```ts
appearance: {
  theme: Theme         // one of 15 built-in themes (default: 'phantom')
  font?: FontName      // one of 41 Google Fonts, self-hosted at build time (default: 'Inter')
  accentColor?: string // hex override - replaces the theme's default accent
  glassOpacity?: number // 0–1, default 0.08
  blur?: number         // backdrop-blur px, default 20
}
```

### Effects

```ts
effects: {
  beams: boolean        // sweeping light beams (CSS only)
  particles: boolean    // floating particle dots (CSS only)
  lensFlares: boolean   // radial burst on click (minimal JS)
  noiseTexture: boolean // subtle film grain overlay
}
```

### Blog settings

```ts
blog: {
  postsPerPage?: number     // posts per page, default 10
  defaultLanguage?: string  // primary locale, default 'en'
  showReadingTime?: boolean  // estimated read time badge, default true
  showTags?: boolean         // tag badges on post cards, default true
}
```

### SEO

```ts
seo: {
  title?: string         // browser tab + OG title
  description?: string   // meta description + OG description
  ogImage?: string       // custom static OG image URL (overrides auto-generated)
  twitterHandle?: string // @handle for twitter:creator
  keywords?: string[]    // meta keywords
  locale?: string        // BCP-47, default 'en_US'
  canonicalUrl?: string  // full deployed URL - used in sitemap, RSS, JSON-LD
  mainSiteUrl?: string   // your primary website (auto-derived from canonicalUrl)
}
```

---

## Dev Panel

In dev mode (`bun dev`) a **⚙ gear button** appears in the bottom-right corner. Click it to open the live config panel.

The panel is split into collapsible sections:

| Section           | What you can change                                              |
| ----------------- | ---------------------------------------------------------------- |
| **Profile**       | Name, username, bio, avatar URL                                  |
| **Socials**       | Add / remove / reorder social links                              |
| **Appearance**    | Theme, font, accent color, glass opacity, backdrop blur          |
| **Effects**       | Toggle beams, particles, noise texture, lens flares              |
| **Blog settings** | Posts per page, reading time, tags                               |
| **SEO**           | Title, description, Twitter handle, canonical URL, main site URL |

All changes apply to the page instantly - no page reload needed. Theme and font switches update in real time.

When you're happy with the result, click **Copy blog.config.ts** at the bottom of the panel. The full config is serialized and copied to your clipboard, ready to paste into `blog.config.ts`.

> **Note:** the dev panel is **only rendered in dev mode**. It is stripped from production builds entirely.

---

## Themes

15 built-in themes, each with a distinct gradient background and accent colour:

| Theme      | Accent               | Vibe          |
| ---------- | -------------------- | ------------- |
| `phantom`  | indigo `#5535d8`     | dark phantom  |
| `aurora`   | violet `#7c3aed`     | purple nebula |
| `midnight` | blue `#3b82f6`       | deep navy     |
| `rose`     | pink `#f43f5e`       | soft rose     |
| `emerald`  | teal-green `#10b981` | tropical      |
| `sunset`   | orange `#f97316`     | warm dusk     |
| `obsidian` | slate `#a1a1aa`      | pure dark     |
| `neon`     | cyan `#22d3ee`       | cyberpunk     |
| `ocean`    | azure `#0891b2`      | deep sea      |
| `forest`   | green `#16a34a`      | dark woodland |
| `crimson`  | red `#b91c1c`        | blood red     |
| `golden`   | amber `#d97706`      | warm gold     |
| `arctic`   | teal `#0d9488`       | icy cool      |
| `candy`    | fuchsia `#c026d3`    | vivid magenta |
| `cosmic`   | indigo `#4338ca`     | deep space    |

Override any theme's accent in `appearance.accentColor`, or use the dev panel's accent color picker.

---

## Typography

Set `appearance.font` in your config to choose a font family:

```ts
appearance: {
  font: 'Poppins', // default: 'Inter'
}
```

**41 available fonts:**

| Key                   | Family              | Category             |
| --------------------- | ------------------- | -------------------- |
| `Inter`               | Inter               | Geometric sans       |
| `Geist`               | Geist               | Geometric sans       |
| `Roboto`              | Roboto              | Geometric sans       |
| `Montserrat`          | Montserrat          | Geometric sans       |
| `Urbanist`            | Urbanist            | Geometric sans       |
| `Hanken_Grotesk`      | Hanken Grotesk      | Geometric sans       |
| `Bricolage_Grotesque` | Bricolage Grotesque | Geometric sans       |
| `Poppins`             | Poppins             | Humanist sans        |
| `Nunito`              | Nunito              | Humanist sans        |
| `Nunito_Sans`         | Nunito Sans         | Humanist sans        |
| `Raleway`             | Raleway             | Humanist sans        |
| `Lato`                | Lato                | Humanist sans        |
| `Open_Sans`           | Open Sans           | Humanist sans        |
| `Cabin`               | Cabin               | Humanist sans        |
| `Work_Sans`           | Work Sans           | Humanist sans        |
| `Mulish`              | Mulish              | Humanist sans        |
| `Quicksand`           | Quicksand           | Humanist sans        |
| `Josefin_Sans`        | Josefin Sans        | Humanist sans        |
| `Figtree`             | Figtree             | Humanist sans        |
| `Manrope`             | Manrope             | Humanist sans        |
| `DM_Sans`             | DM Sans             | Professional sans    |
| `Outfit`              | Outfit              | Professional sans    |
| `Plus_Jakarta_Sans`   | Plus Jakarta Sans   | Professional sans    |
| `Rubik`               | Rubik               | Professional sans    |
| `Lexend`              | Lexend              | Professional sans    |
| `Space_Grotesk`       | Space Grotesk       | Techy / display sans |
| `Syne`                | Syne                | Techy / display sans |
| `Barlow`              | Barlow              | Techy / display sans |
| `Oxanium`             | Oxanium             | Techy / display sans |
| `JetBrains_Mono`      | JetBrains Mono      | Monospace            |
| `Fira_Code`           | Fira Code           | Monospace            |
| `IBM_Plex_Mono`       | IBM Plex Mono       | Monospace            |
| `Source_Code_Pro`     | Source Code Pro     | Monospace            |
| `Playfair_Display`    | Playfair Display    | Serif                |
| `Merriweather`        | Merriweather        | Serif                |
| `Lora`                | Lora                | Serif                |
| `EB_Garamond`         | EB Garamond         | Serif                |
| `Cormorant_Garamond`  | Cormorant Garamond  | Serif                |
| `DM_Serif_Display`    | DM Serif Display    | Serif                |
| `Bebas_Neue`          | Bebas Neue          | Display              |
| `Anton`               | Anton               | Display              |

### How it works

`scripts/generate-font.ts` runs as part of `prebuild` before every build. It reads `appearance.font` and downloads the font from Google Fonts **once**, self-hosting it under `public/fonts/` and writing `src/styles/font.css` with:

- `@font-face` rules pointing to the local WOFF2 files - **no Google CDN requests at runtime**
- Fontaine-style fallback metrics (`ascent-override`, `descent-override`, `size-adjust`) for Arial, eliminating layout shift before the font loads

Run `bun run font` to regenerate without a full build (useful after switching fonts mid-development).

> **Note:** `src/styles/font.css` is auto-generated - never edit it manually.

---

## Social icons

The social icon row beneath the bio renders a branded icon for each configured platform.

**25 supported platforms:**

| Group         | Platforms                                                               |
| ------------- | ----------------------------------------------------------------------- |
| Social        | `twitter` · `bluesky` · `threads` · `instagram` · `facebook` · `reddit` |
| Video / Music | `youtube` · `tiktok` · `twitch` · `spotify`                             |
| Professional  | `linkedin` · `github`                                                   |
| Messaging     | `discord` · `telegram` · `whatsapp`                                     |
| Creator       | `patreon` · `kofi` · `producthunt`                                      |
| Design        | `dribbble` · `behance`                                                  |
| Dev           | `devto` · `hashnode` · `medium` · `steam`                               |
| Generic       | `website` · `email`                                                     |

Branded icons are served by **[icons.germondai.com](https://icons.germondai.com)** - an open-source icon API by [@germondai](https://github.com/germondai). Platforms without a dedicated brand icon fall back to an inline SVG from Lucide.

```ts
profile: {
  socials: [
    { platform: 'github',  url: 'https://github.com/yourusername' },
    { platform: 'twitter', url: 'https://twitter.com/yourusername' },
    { platform: 'email',   url: 'mailto:you@example.com' },
  ],
}
```

---

## Favicon, PWA icons & manifest

Icons and the web app manifest are generated automatically from your config every time you run `bun run build`. No manual steps, no static files to maintain.

### How it works

`scripts/generate-icons.ts` and `scripts/generate-manifest.ts` run as `prebuild` hooks.

**Icons** - four WebP sizes:

| File                           | Size      | Used for                 |
| ------------------------------ | --------- | ------------------------ |
| `public/icon.webp`             | 32 × 32   | Browser tab favicon      |
| `public/apple-touch-icon.webp` | 180 × 180 | iOS home screen          |
| `public/icon-192.webp`         | 192 × 192 | Android PWA install      |
| `public/icon-512.webp`         | 512 × 512 | Splash screen / maskable |

**`profile.avatar` is set (HTTP URL)** - downloads the image and resizes it to all four sizes.  
**No avatar configured** - generates a circular icon using the theme's accent and background colours.

**Manifest** - `public/manifest.json` is derived from your config:

| Manifest field     | Source                                   |
| ------------------ | ---------------------------------------- |
| `name`             | `seo.title`                              |
| `short_name`       | `profile.name`                           |
| `description`      | `seo.description`                        |
| `theme_color`      | `appearance.accentColor` or theme accent |
| `background_color` | theme background                         |

Run `bun run icons` or `bun run manifest` to regenerate individually without a full build.

---

## Open Graph image

The OG image is generated automatically every time you run `bun run build`. No design tools, no static files to maintain.

### How it works

The full `prebuild` pipeline runs four generators in sequence, then `astro build` copies everything to `dist/`:

```
prebuild  →  scripts/generate-icons.ts    # downloads avatar → 4 WebP icon sizes
             scripts/generate-font.ts     # downloads font WOFF2 → public/fonts/ + font.css
             scripts/generate-manifest.ts # derives manifest.json from config
             scripts/generate-og.ts      # generates 1200×630 WebP → public/og.webp
build     →  astro build                  # SSG - pre-renders all pages, copies public/
```

`scripts/generate-og.ts` reads your config and renders a 1200 × 630 WebP using sharp + SVG.

### What's rendered

| Element             | Source                                        |
| ------------------- | --------------------------------------------- |
| Background gradient | `appearance.theme` + `appearance.accentColor` |
| Avatar (circular)   | `profile.avatar`                              |
| Name                | `profile.name`                                |
| Handle              | `profile.username`                            |
| Bio                 | `profile.bio`                                 |
| URL                 | `seo.canonicalUrl` (stripped of `https://`)   |
| Accent bars         | top + bottom edge in the theme accent colour  |

### Custom OG image

Set `seo.ogImage` in your config to use a custom static image instead:

```ts
seo: {
  ogImage: 'https://example.com/my-custom-og.png',
}
```

Run `bun run og` to regenerate the OG image without a full build.

---

## Multilingual (i18n)

The blog is fully multilingual out of the box. 26 languages have pre-written UI translations - you activate a language simply by creating content in the right directory.

### How it works

**Content detection** - at build time, Astro scans `src/content/blog/` and discovers which language sub-directories contain `.mdx` files. Pages are generated only for those locales - no config changes needed.

**Routing** - the default language gets no URL prefix:

```
/blog               → EN post list
/blog/my-post       → EN post
/tag/astro          → EN tag page
```

All other active locales get a `/<lang>/` prefix:

```
/cs/blog            → CS post list
/cs/blog/muj-clanek → CS post
/pl/tag/astro       → PL tag page
```

**Language switcher** - the navigation automatically shows a language selector whenever more than one locale has content.

### Adding a new language

1. Create the content directory: `src/content/blog/<lang>/`
2. Add at least one `.mdx` file
3. Run `bun dev` - the new locale is live automatically

The UI translation for that locale already exists in `src/i18n/translations/<lang>.ts` (all 26 are pre-written). No code changes needed.

### Supported locales

**26 built-in locales** (all with complete UI translations):

| Code | Language         | Code | Language   |
| ---- | ---------------- | ---- | ---------- |
| `en` | English          | `de` | Deutsch    |
| `cs` | Čeština          | `fr` | Français   |
| `sk` | Slovenčina       | `es` | Español    |
| `pl` | Polski           | `pt` | Português  |
| `hu` | Magyar           | `it` | Italiano   |
| `ro` | Română           | `nl` | Nederlands |
| `bg` | Български        | `sv` | Svenska    |
| `ru` | Русский          | `no` | Norsk      |
| `uk` | Українська       | `da` | Dansk      |
| `zh` | 中文             | `fi` | Suomi      |
| `ja` | 日本語           | `tr` | Türkçe     |
| `ko` | 한국어           | `hi` | हिन्दी        |
| `id` | Bahasa Indonesia | `vi` | Tiếng Việt |

### Default language

Set `blog.defaultLanguage` to control which locale gets the no-prefix routes:

```ts
blog: {
  defaultLanguage: 'en',  // /blog → EN, /cs/blog → CS
}
```

---

## Blog posts

Create `.mdx` files in `src/content/blog/<lang>/`:

```mdx
---
title: 'My Post'
description: 'Short description for SEO and post cards'
publishDate: 2026-01-01
tags: ['web', 'astro']
# draft: true        # hide from list
# updatedDate: 2026-02-01
# coverImage: 'https://...'
---

# My Post

Write **markdown** here with full MDX support.
```

Full schema:

```ts
{
  title: string             // required
  description: string       // required - used in SEO and post cards
  publishDate: Date         // required
  updatedDate?: Date
  tags?: string[]           // default []
  draft?: boolean           // default false - draft posts are excluded from all pages
  coverImage?: string       // HTTPS URL - shown as hero image on the post page
}
```

---

## Self-hosting

### Docker

```sh
docker build -t my-blog .
docker run -p 8080:80 my-blog
# → http://localhost:8080
```

Or with Docker Compose:

```yaml
services:
  blog:
    build: .
    ports:
      - '8080:80'
    restart: unless-stopped
```

The container runs as a multi-stage build: Bun builds the static files, then `nginx:alpine` serves them. No Node.js or Bun at runtime.

### Vercel / Netlify

No environment variables required - all config is in `blog.config.ts`. Just connect the repo.

---

## Development

```sh
bun dev              # dev server - runs setup automatically on first launch
bun run build        # full build: icons → font → manifest → og → astro
bun run preview      # preview built site
bun run setup        # manually regenerate any missing or stale assets
bun run check        # Biome lint + format (CI mode)
bun run check:write  # lint + format + auto-fix
bun run astro:check  # Astro/TypeScript type check
bun test             # run test suite
bun test --coverage  # with coverage report
bun run icons        # regenerate favicons only
bun run font         # regenerate self-hosted font only
bun run manifest     # regenerate PWA manifest only
bun run og           # regenerate OG image only
```

---

## Testing

Tests live in `src/__tests__/` and run with Bun's built-in test runner.

```sh
bun test
```

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

---

## Security

See [SECURITY.md](./SECURITY.md) for vulnerability reporting.

---

## License

[AGPL-3.0-or-later](./LICENSE) - free to use, modify, and distribute. Modifications to network-served software must be made available as source.

Copyright (C) 2025 [germondai](https://github.com/germondai)

---

<p align="center">
    <span>Made with ❤️ by</span>
    <a href="https://github.com/germondai" target="_blank">@germondai</a>
</p>
