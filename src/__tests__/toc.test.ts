// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai

import { describe, expect, it } from 'bun:test'
import { buildToc } from '@/lib/toc'

describe('buildToc', () => {
  it('returns empty array for no headings', () => {
    expect(buildToc([])).toEqual([])
  })

  it('handles flat h2 headings', () => {
    const toc = buildToc([
      { depth: 2, slug: 'a', text: 'A' },
      { depth: 2, slug: 'b', text: 'B' },
    ])
    expect(toc).toHaveLength(2)
    expect(toc[0]?.slug).toBe('a')
    expect(toc[1]?.slug).toBe('b')
    expect(toc[0]?.children).toHaveLength(0)
  })

  it('nests h3 under h2', () => {
    const toc = buildToc([
      { depth: 2, slug: 'intro', text: 'Intro' },
      { depth: 3, slug: 'sub', text: 'Sub' },
    ])
    expect(toc).toHaveLength(1)
    expect(toc[0]?.children).toHaveLength(1)
    expect(toc[0]?.children[0]?.slug).toBe('sub')
  })

  it('handles multiple levels', () => {
    const toc = buildToc([
      { depth: 2, slug: 'a', text: 'A' },
      { depth: 3, slug: 'a1', text: 'A1' },
      { depth: 3, slug: 'a2', text: 'A2' },
      { depth: 2, slug: 'b', text: 'B' },
    ])
    expect(toc).toHaveLength(2)
    expect(toc[0]?.children).toHaveLength(2)
    expect(toc[1]?.children).toHaveLength(0)
  })

  it('preserves text and slug', () => {
    const toc = buildToc([{ depth: 2, slug: 'my-section', text: 'My Section' }])
    expect(toc[0]?.text).toBe('My Section')
    expect(toc[0]?.slug).toBe('my-section')
    expect(toc[0]?.depth).toBe(2)
  })
})
