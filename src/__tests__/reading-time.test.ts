// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai

import { describe, expect, it } from 'bun:test'
import { calculateReadingTime } from '@/lib/reading-time'

describe('calculateReadingTime', () => {
  it('returns 1 for very short content', () => {
    expect(calculateReadingTime('Hello world')).toBe(1)
  })

  it('returns 1 for empty string', () => {
    expect(calculateReadingTime('')).toBe(1)
  })

  it('calculates correctly for 400-word content at 200wpm', () => {
    const text = 'word '.repeat(400)
    expect(calculateReadingTime(text)).toBe(2)
  })

  it('uses custom WPM', () => {
    const text = 'word '.repeat(500)
    expect(calculateReadingTime(text, 250)).toBe(2)
  })

  it('rounds up partial minutes', () => {
    const text = 'word '.repeat(201)
    expect(calculateReadingTime(text)).toBe(2)
  })

  it('handles 200 words at 200wpm as 1 min', () => {
    const text = 'word '.repeat(200)
    expect(calculateReadingTime(text)).toBe(1)
  })
})
