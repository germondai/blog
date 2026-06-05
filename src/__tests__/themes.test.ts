// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai

import { describe, expect, it } from 'bun:test'
import { getThemeTokens, THEMES } from '@/lib/themes'
import type { Theme } from '@/types/config'

const THEME_NAMES: Theme[] = [
  'phantom',
  'aurora',
  'midnight',
  'rose',
  'emerald',
  'sunset',
  'obsidian',
  'neon',
  'ocean',
  'forest',
  'crimson',
  'golden',
  'arctic',
  'candy',
  'cosmic',
]

describe('THEMES', () => {
  it('has all 15 themes', () => {
    expect(Object.keys(THEMES).length).toBe(15)
  })

  it.each(THEME_NAMES)('%s has required color fields', (name) => {
    const t = THEMES[name]
    expect(t.from).toMatch(/^#[0-9a-f]{6}$/i)
    expect(t.via).toMatch(/^#[0-9a-f]{6}$/i)
    expect(t.to).toMatch(/^#[0-9a-f]{6}$/i)
    expect(t.accent).toMatch(/^#[0-9a-f]{6}$/i)
    expect(t.beam).toMatch(/^#[0-9a-f]{6}$/i)
    expect(t.particle).toMatch(/^#[0-9a-f]{6}$/i)
  })
})

describe('getThemeTokens', () => {
  it('returns CSS variable names for phantom', () => {
    const tokens = getThemeTokens('phantom')
    expect(tokens['--bg-from']).toBe('#09090f')
    expect(tokens['--accent']).toBe('#5535d8')
    expect(tokens['--beam-color']).toBe('#7055ef')
    expect(tokens['--particle-color']).toBe('#9580f8')
  })

  it('falls back to phantom for unknown theme', () => {
    const tokens = getThemeTokens('unknown' as Theme)
    expect(tokens['--bg-from']).toBe('#09090f')
  })

  it('returns all required CSS vars', () => {
    const tokens = getThemeTokens('aurora')
    const required = [
      '--bg-from',
      '--bg-via',
      '--bg-to',
      '--accent',
      '--beam-color',
      '--particle-color',
    ]
    for (const key of required) {
      expect(tokens).toHaveProperty(key)
    }
  })
})
