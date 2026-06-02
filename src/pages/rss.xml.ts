// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai

import { type CollectionEntry, getCollection } from 'astro:content'
import rss from '@astrojs/rss'
import type { APIContext } from 'astro'
import { resolveConfig } from '@/lib/config'
import { getContentLangs, postSlug } from '@/lib/content'
import config from '../../blog.config'

export const prerender = true

export const GET = async (context: APIContext) => {
  const resolved = resolveConfig(config)
  const defaultLang = resolved.blog.defaultLanguage
  const langs = await getContentLangs()

  const allItems: Array<{ post: CollectionEntry<'blog'>; lang: string }> = []
  for (const lang of langs) {
    const posts = await getCollection(
      'blog',
      (e: CollectionEntry<'blog'>) => !e.data.draft && e.id.startsWith(`${lang}/`),
    )
    for (const post of posts) allItems.push({ post, lang })
  }

  allItems.sort((a, b) => b.post.data.publishDate.valueOf() - a.post.data.publishDate.valueOf())

  return rss({
    title: resolved.seo?.title ?? `${resolved.profile.name}'s Blog`,
    description: resolved.seo?.description ?? resolved.profile.bio ?? '',
    site: context.site ?? resolved.seo?.canonicalUrl ?? 'http://localhost:4321',
    items: allItems.map(({ post, lang }) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link:
        lang === defaultLang
          ? `/blog/${postSlug(post.id, lang)}`
          : `/${lang}/blog/${postSlug(post.id, lang)}`,
      categories: post.data.tags,
      customData: `<language>${lang}</language>`,
    })),
  })
}
