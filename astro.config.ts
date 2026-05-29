// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai

import mdx from '@astrojs/mdx'
import { unified } from '@astrojs/markdown-remark'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import rehypeExternalLinks from 'rehype-external-links'
import config from './blog.config'
import { LANGUAGES } from './src/i18n/config'
import { resolveConfig } from './src/lib/config'

const resolved = resolveConfig(config)
const defaultLang = resolved.blog.defaultLanguage
const allLangs = Object.keys(LANGUAGES)
const site = resolved.seo?.canonicalUrl ?? 'http://localhost:4321'

export default defineConfig({
  output: 'static',
  site,
  trailingSlash: 'ignore',
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },

  i18n: {
    defaultLocale: defaultLang,
    locales: allLangs,
    routing: {
      prefixDefaultLocale: false, // /blog not /en/blog
    },
  },

  image: {
    remotePatterns: [{ protocol: 'https' }],
  },

  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: defaultLang,
        locales: Object.fromEntries(allLangs.map((l) => [l, l])),
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    processor: unified({
      rehypePlugins: [
        [
          rehypeExternalLinks,
          { target: '_blank', rel: ['noopener', 'noreferrer'], content: { type: 'text', value: '' } },
        ],
      ],
    }),
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: false,
    },
  },
})
