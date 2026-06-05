// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai

import { describe, expect, it } from 'bun:test'
import { FONT_FAMILY, FONT_NAMES, fontLabel } from '@/lib/font-meta'

describe('FONT_FAMILY', () => {
  it('has 41 fonts', () => {
    expect(Object.keys(FONT_FAMILY).length).toBe(41)
  })

  it('includes key fonts', () => {
    expect(FONT_FAMILY.Inter).toBe('Inter')
    expect(FONT_FAMILY.Poppins).toBe('Poppins')
    expect(FONT_FAMILY.JetBrains_Mono).toBe('JetBrains Mono')
  })

  it('uses underscores for multi-word keys', () => {
    expect(FONT_FAMILY.Hanken_Grotesk).toBe('Hanken Grotesk')
    expect(FONT_FAMILY.DM_Sans).toBe('DM Sans')
  })
})

describe('FONT_NAMES', () => {
  it('has same length as FONT_FAMILY', () => {
    expect(FONT_NAMES.length).toBe(Object.keys(FONT_FAMILY).length)
  })

  it('contains Inter', () => {
    expect(FONT_NAMES).toContain('Inter')
  })
})

describe('fontLabel', () => {
  it('returns the display name', () => {
    expect(fontLabel('Poppins')).toBe('Poppins')
    expect(fontLabel('JetBrains_Mono')).toBe('JetBrains Mono')
    expect(fontLabel('Plus_Jakarta_Sans')).toBe('Plus Jakarta Sans')
  })
})
