// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai

// prebuild: generates public/manifest.json from blog.config.ts
// run manually: bun scripts/generate-manifest.ts

import { writeFileSync } from 'node:fs'
import config from '../blog.config'
import { resolveConfig } from '@/lib/config'
import { THEMES } from '@/lib/themes'

const resolved = resolveConfig(config)
const tokens = THEMES[resolved.appearance.theme]
const accent = resolved.appearance.accentColor ?? tokens.accent

const manifest = {
  name: resolved.seo?.title ?? `${resolved.profile.name}'s Blog`,
  short_name: resolved.profile.name,
  description: resolved.seo?.description ?? resolved.profile.bio ?? '',
  start_url: '/',
  display: 'standalone',
  background_color: tokens.from,
  theme_color: accent,
  icons: [
    { src: '/icon-192.webp', sizes: '192x192', type: 'image/webp', purpose: 'any maskable' },
    { src: '/icon-512.webp', sizes: '512x512', type: 'image/webp', purpose: 'any maskable' },
  ],
}

writeFileSync('public/manifest.json', JSON.stringify(manifest, null, 2))
console.log('📱  manifest.json generated\n')
