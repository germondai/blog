// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai

import { describe, expect, it } from 'bun:test'
import { DEFAULT_APPEARANCE, DEFAULT_BLOG, DEFAULT_EFFECTS, resolveConfig } from '@/lib/config'
import type { BlogConfig } from '@/types/config'

const minimal: BlogConfig = {
  profile: { name: 'Test', username: 'test' },
}

describe('DEFAULT_EFFECTS', () => {
  it('all effects default to true', () => {
    expect(DEFAULT_EFFECTS.beams).toBe(true)
    expect(DEFAULT_EFFECTS.particles).toBe(true)
    expect(DEFAULT_EFFECTS.lensFlares).toBe(true)
    expect(DEFAULT_EFFECTS.noiseTexture).toBe(true)
  })
})

describe('DEFAULT_APPEARANCE', () => {
  it('default theme is phantom', () => {
    expect(DEFAULT_APPEARANCE.theme).toBe('phantom')
  })

  it('default font is Inter', () => {
    expect(DEFAULT_APPEARANCE.font).toBe('Inter')
  })

  it('default glassOpacity is 0.08', () => {
    expect(DEFAULT_APPEARANCE.glassOpacity).toBe(0.08)
  })
})

describe('DEFAULT_BLOG', () => {
  it('default postsPerPage is 10', () => {
    expect(DEFAULT_BLOG.postsPerPage).toBe(10)
  })

  it('default language is en', () => {
    expect(DEFAULT_BLOG.defaultLanguage).toBe('en')
  })

  it('showReadingTime defaults to true', () => {
    expect(DEFAULT_BLOG.showReadingTime).toBe(true)
  })
})

describe('resolveConfig', () => {
  it('merges defaults when fields are missing', () => {
    const resolved = resolveConfig(minimal)
    expect(resolved.appearance.theme).toBe('phantom')
    expect(resolved.effects.beams).toBe(true)
    expect(resolved.blog.postsPerPage).toBe(10)
  })

  it('preserves explicitly set values', () => {
    const resolved = resolveConfig({
      ...minimal,
      appearance: { theme: 'rose' },
      effects: { beams: false },
      blog: { postsPerPage: 5 },
    })
    expect(resolved.appearance.theme).toBe('rose')
    expect(resolved.effects.beams).toBe(false)
    expect(resolved.blog.postsPerPage).toBe(5)
  })

  it('passes through profile unchanged', () => {
    const resolved = resolveConfig(minimal)
    expect(resolved.profile.name).toBe('Test')
    expect(resolved.profile.username).toBe('test')
  })
})
