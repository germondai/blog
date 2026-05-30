// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai

export interface TocEntry {
  depth: number
  slug: string
  text: string
  children: TocEntry[]
}

export interface MarkdownHeading {
  depth: number
  slug: string
  text: string
}

export const buildToc = (headings: MarkdownHeading[]): TocEntry[] => {
  const root: TocEntry[] = []
  const stack: TocEntry[] = []

  for (const h of headings) {
    const entry: TocEntry = { depth: h.depth, slug: h.slug, text: h.text, children: [] }

    while (stack.length > 0 && (stack[stack.length - 1]?.depth ?? 0) >= h.depth) {
      stack.pop()
    }

    if (stack.length === 0) {
      root.push(entry)
    } else {
      stack[stack.length - 1]?.children.push(entry)
    }

    stack.push(entry)
  }

  return root
}
