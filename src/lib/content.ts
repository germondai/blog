// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai

import { type CollectionEntry, getCollection } from 'astro:content'

export const postSlug = (id: string, lang: string): string =>
  id.replace(`${lang}/`, '').replace(/\.mdx?$/, '')

export const getContentLangs = async (): Promise<string[]> => {
  const all = await getCollection('blog', (e: CollectionEntry<'blog'>) => !e.data.draft)
  const langs: string[] = []
  for (const e of all) {
    const prefix = e.id.split('/')[0]
    if (prefix) langs.push(prefix)
  }
  return [...new Set(langs)]
}
