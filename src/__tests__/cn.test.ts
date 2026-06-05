// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai

import { describe, expect, it } from 'bun:test'
import { cn } from '@/lib/cn'

describe('cn', () => {
  it('merges class names', () => {
    expect(cn('a', 'b')).toBe('a b')
  })

  it('deduplicates tailwind classes', () => {
    expect(cn('p-4', 'p-8')).toBe('p-8')
  })

  it('handles conditional classes', () => {
    expect(cn('base', true && 'active', false && 'hidden')).toBe('base active')
  })

  it('handles undefined and null', () => {
    expect(cn('a', undefined, null, 'b')).toBe('a b')
  })

  it('handles arrays', () => {
    expect(cn(['a', 'b'], 'c')).toBe('a b c')
  })
})
