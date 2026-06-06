# Contributing to @germondai/blog

## Prerequisites

- [Bun](https://bun.sh) installed (latest stable)
- Git

## Local setup

```sh
git clone https://github.com/germondai/blog
cd blog
bun install
cp blog.config.example.ts blog.config.ts
# edit blog.config.ts with your info, then:
bun dev
```

`bun dev` triggers the `predev` hook which runs `scripts/setup.ts` - this downloads your font, generates icons, manifest, and OG image if they don't already exist (or if your config has changed). Open [http://localhost:4321](http://localhost:4321).

## Build pipeline

```sh
bun run build      # full build: prebuild → astro build
bun run setup      # regenerate only missing/stale assets (smart check)
bun run icons      # regenerate favicon + PWA icons only
bun run font       # regenerate font CSS only
bun run manifest   # regenerate PWA manifest only
bun run og         # regenerate OG image only
```

`prebuild` runs four scripts in sequence before every build:

1. `scripts/generate-icons.ts` - downloads `profile.avatar` (or generates a themed circle) → four WebP icon sizes in `public/`
2. `scripts/generate-font.ts` - fetches the selected Google Font, downloads all `.woff2` files to `public/fonts/`, writes `src/styles/font.css`
3. `scripts/generate-manifest.ts` - derives `public/manifest.json` from config (name, description, theme colors)
4. `scripts/generate-og.ts` - renders a 1200×630 WebP OG image from config → `public/og.webp`

All four outputs are gitignored and regenerated on every build. `scripts/setup.ts` is the smart version used for dev: it skips each generator if its output is already up to date.

## Code style

**Biome** for linting and formatting - no ESLint, no Prettier.

```sh
bun run check:write   # auto-fix everything
bun run check         # check only (CI mode)
```

Husky runs `check:write` + `bun test` automatically on every commit.

## Commit messages

Follow [Conventional Commits](https://conventionalcommits.org):

| Prefix      | Use for                               |
| ----------- | ------------------------------------- |
| `feat:`     | New feature                           |
| `fix:`      | Bug fix                               |
| `docs:`     | Documentation only                    |
| `chore:`    | Maintenance / deps                    |
| `refactor:` | Code restructure, no behaviour change |

## Branch naming

| Prefix   | Use for       |
| -------- | ------------- |
| `feat/`  | New features  |
| `fix/`   | Bug fixes     |
| `docs/`  | Documentation |
| `chore/` | Maintenance   |

## PR process

1. Fork the repo
2. Create a branch from `dev` (not `main`)
3. Make your changes
4. Run `bun run check:write && bun test && bun run astro:check`
5. Open a PR targeting the `dev` branch
6. Fill in the PR template

## Adding a new theme

1. Add the key to the `Theme` union in `src/types/config.ts`
2. Add a `ThemeTokens` entry in `src/lib/themes.ts` (from, via, to, accent, beam, particle)
3. Verify with `bun test` (themes test validates all fields)
4. Update the themes table in `README.md`

## Adding a new font

1. Add the key to the `FontName` union in `src/types/config.ts` (use `_` for spaces)
2. Add a `FONT_FAMILY` entry in `src/lib/font-meta.ts`
3. If non-variable, add its weights to `WEIGHTS` in `scripts/generate-font.ts`
4. Run `bun run font` to verify the download works
5. Update the fonts section in `README.md`

## Adding new social platforms

1. Add the platform key to the `SocialPlatform` union in `src/types/config.ts`
2. Add a slug to `ICON_SLUGS` in `src/components/profile/SocialIcons.astro` if it has a brand icon on icons.germondai.com, otherwise add an inline SVG path to `SVG_ICONS`
3. Add a label to `LABEL` in the same file
4. Mirror the change in `src/components/dev/DevPanel.astro` (`SOCIAL_ICON_SLUGS`, `SOCIAL_SVG_ICONS`, `SOCIAL_LABELS`)
5. Update the platforms table in `README.md`

## AGPL-3.0

All contributions are licensed under AGPL-3.0. Every new source file must include the SPDX header:

```typescript
// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai
```
