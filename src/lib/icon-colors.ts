// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai

import { THEMES } from '@/lib/themes'
import type { Theme } from '@/types/config'

export const ICON_ACCENTS: Record<string, string> = Object.fromEntries(
  (Object.keys(THEMES) as Theme[]).map((k) => [k, THEMES[k].accent]),
)

export const ICON_BG_COLORS: Record<string, string> = Object.fromEntries(
  (Object.keys(THEMES) as Theme[]).map((k) => [k, THEMES[k].from]),
)

export const circleSvg = (size: number, accentHex: string, bgHex: string): Buffer => {
  const cx = size / 2
  const r = Math.round(size * 0.42)
  return Buffer.from(
    `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="g" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${accentHex}"/>
      <stop offset="80%" stop-color="${accentHex}" stop-opacity="0.7"/>
      <stop offset="100%" stop-color="${bgHex}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${size}" height="${size}" fill="${bgHex}"/>
  <circle cx="${cx}" cy="${cx}" r="${r}" fill="url(#g)"/>
</svg>`,
  )
}
