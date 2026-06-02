// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai

// Dev mode: serves a sitemapindex so [lang] route doesn't catch this path.
// Production: @astrojs/sitemap overwrites dist/sitemap-index.xml with the real content.

import type { APIContext } from 'astro'

export const prerender = true

export const GET = ({ site }: APIContext) => {
  const base = site ? site.href.replace(/\/$/, '') : ''
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    `  <sitemap><loc>${base}/sitemap-0.xml</loc></sitemap>`,
    '</sitemapindex>',
  ].join('\n')
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}
