// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai

// Dev mode: generates the URL list from content so [lang] route doesn't catch this path.
// Production: @astrojs/sitemap overwrites dist/sitemap-0.xml with the real (complete) content.

import { type CollectionEntry, getCollection } from 'astro:content'
import type { APIContext } from 'astro'

export const prerender = true

import { resolveConfig } from '@/lib/config'
import { getContentLangs, postSlug } from '@/lib/content'
import config from '../../blog.config'

const resolved = resolveConfig(config)
const defaultLang = resolved.blog.defaultLanguage

const url = (base: string, path: string) => `${base}${path}`

export const GET = async ({ site }: APIContext) => {
  const base = site ? site.href.replace(/\/$/, '') : ''
  const langs = await getContentLangs()
  const locs: string[] = []

  for (const lang of langs) {
    const prefix = lang === defaultLang ? '' : `/${lang}`

    locs.push(url(base, `${prefix}/`))
    locs.push(url(base, `${prefix}/blog/`))
    locs.push(url(base, `${prefix}/tag/`))

    const posts = await getCollection(
      'blog',
      (e: CollectionEntry<'blog'>) => !e.data.draft && e.id.startsWith(`${lang}/`),
    )

    const tags = new Set<string>()
    for (const post of posts) {
      locs.push(url(base, `${prefix}/blog/${postSlug(post.id, lang)}/`))
      for (const tag of post.data.tags) tags.add(tag)
    }
    for (const tag of tags) {
      locs.push(url(base, `${prefix}/tag/${tag}/`))
    }
  }

  const entries = locs.map((loc) => `  <url><loc>${loc}</loc></url>`).join('\n')
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    entries,
    '</urlset>',
  ].join('\n')

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}
