// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai

import { describe, expect, it } from 'bun:test'
import { deriveMainDomain } from '@/lib/seo'

describe('deriveMainDomain', () => {
  it('strips first subdomain', () => {
    expect(deriveMainDomain('https://blog.germondai.com')).toBe('https://germondai.com')
  })

  it('strips www', () => {
    expect(deriveMainDomain('https://www.example.com')).toBe('https://example.com')
  })

  it('leaves bare domain unchanged', () => {
    expect(deriveMainDomain('https://example.com')).toBe('https://example.com')
  })

  it('returns null for invalid URL', () => {
    expect(deriveMainDomain('not-a-url')).toBeNull()
  })

  it('preserves http', () => {
    expect(deriveMainDomain('http://sub.example.com')).toBe('http://example.com')
  })
})
