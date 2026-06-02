// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai

// predev: regenerates only assets that are missing or stale vs blog.config.ts

import { existsSync, readFileSync } from 'node:fs'

const run = (script: string) =>
  Bun.spawnSync(['bun', script], { stdio: ['inherit', 'inherit', 'inherit'] })

const { default: config } = await import('../blog.config')
const { THEMES } = await import('@/lib/themes')
const { resolveConfig } = await import('@/lib/config')
const resolved = resolveConfig(config)

const fontName = (resolved.appearance.font ?? 'Inter').replace(/_/g, ' ')
const needsFont =
  !existsSync('src/styles/font.css') ||
  !readFileSync('src/styles/font.css', 'utf-8').includes(`'${fontName}'`)

const needsIcons = !existsSync('public/icon.webp')

const accent = resolved.appearance.accentColor ?? THEMES[resolved.appearance.theme].accent
const needsManifest =
  !existsSync('public/manifest.json') ||
  JSON.parse(readFileSync('public/manifest.json', 'utf-8')).theme_color !== accent

const needsOg = !existsSync('public/og.webp')

if (needsFont) run('scripts/generate-font.ts')
if (needsIcons) run('scripts/generate-icons.ts')
if (needsManifest) run('scripts/generate-manifest.ts')
if (needsOg) run('scripts/generate-og.ts')
