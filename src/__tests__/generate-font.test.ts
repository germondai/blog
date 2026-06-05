// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai

import { describe, expect, it } from 'bun:test'
import { buildGoogleFontsUrl, WEIGHTS } from '../../scripts/generate-font'

describe('WEIGHTS', () => {
  it('defines weights for non-variable fonts', () => {
    expect(WEIGHTS.Roboto).toContain('400')
    expect(WEIGHTS.Poppins).toContain('400')
    expect(WEIGHTS.Bebas_Neue).toEqual(['400'])
  })

  it('does not define weights for variable fonts (Inter, Geist)', () => {
    expect(WEIGHTS.Inter).toBeUndefined()
    expect(WEIGHTS.Geist).toBeUndefined()
  })
})

describe('buildGoogleFontsUrl', () => {
  it('builds URL for variable font', () => {
    const url = buildGoogleFontsUrl('Inter')
    expect(url).toContain('fonts.googleapis.com')
    expect(url).toContain('Inter')
    expect(url).toContain('wght@100..900')
    expect(url).toContain('display=swap')
  })

  it('builds URL for non-variable font', () => {
    const url = buildGoogleFontsUrl('Poppins')
    expect(url).toContain('Poppins')
    expect(url).toContain('400')
    expect(url).not.toContain('100..900')
  })

  it('replaces underscores with + for multi-word fonts', () => {
    const url = buildGoogleFontsUrl('Hanken_Grotesk')
    expect(url).toContain('Hanken+Grotesk')
  })
})
