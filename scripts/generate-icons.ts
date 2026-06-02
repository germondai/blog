// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai

// prebuild: downloads avatar (or generates a themed circle) → 4 WebP icon sizes
// run manually: bun scripts/generate-icons.ts

import sharp from 'sharp'
import config from '../blog.config'
import { circleSvg, ICON_ACCENTS, ICON_BG_COLORS } from '@/lib/icon-colors'

const { profile, appearance } = config
const avatarUrl = profile.avatar?.startsWith('http') ? profile.avatar : null
const theme = appearance?.theme ?? 'phantom'
const accentHex = appearance?.accentColor ?? ICON_ACCENTS[theme] ?? '#5535d8'
const bgHex = ICON_BG_COLORS[theme] ?? '#09090f'

const TARGETS: [number, string][] = [
  [32, 'public/icon.webp'],
  [180, 'public/apple-touch-icon.webp'],
  [192, 'public/icon-192.webp'],
  [512, 'public/icon-512.webp'],
]

const write = async (img: sharp.Sharp, path: string) => {
  await img.webp({ quality: 80 }).toFile(path)
  const { size } = await import('node:fs').then((m) => m.promises.stat(path))
  console.log(`  ✓ ${path}  (${Math.round(size / 1024)}KB)`)
}

const run = async () => {
  if (avatarUrl) {
    console.log(`\n🖼  Downloading avatar: ${avatarUrl}`)
    const res = await fetch(avatarUrl)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const buf = Buffer.from(await res.arrayBuffer())
    for (const [size, path] of TARGETS)
      await write(sharp(buf).resize(size, size, { fit: 'cover' }), path)
  } else {
    console.log(`\n🎨  Generating icon from theme (${accentHex})`)
    for (const [size, path] of TARGETS) await write(sharp(circleSvg(size, accentHex, bgHex)), path)
  }
  console.log('✅  Icons ready\n')
}

run().catch((err) => {
  console.error('⚠️  Icon generation failed:', err.message)
  console.error('   Skipping - existing icons will be used.')
})
