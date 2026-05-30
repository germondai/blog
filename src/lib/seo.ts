// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai

import type { ResolvedConfig } from '@/lib/config'

export const deriveMainDomain = (url: string): string | null => {
  try {
    const { protocol, hostname } = new URL(url)
    const parts = hostname.split('.')
    const root = parts.length > 2 ? parts.slice(-2).join('.') : hostname
    return `${protocol}//${root}`
  } catch {
    return null
  }
}

export const buildPersonJsonLd = (config: ResolvedConfig, canonicalUrl: string) => {
  const mainSiteUrl =
    config.seo?.mainSiteUrl ?? (config.seo?.canonicalUrl ? deriveMainDomain(canonicalUrl) : null)

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${canonicalUrl}/#website`,
        name: config.seo?.title ?? `${config.profile.name}'s Blog`,
        url: canonicalUrl,
        description: config.seo?.description ?? config.profile.bio,
        inLanguage: config.seo?.locale?.replace('_', '-') ?? 'en',
        author: { '@id': `${canonicalUrl}/#person` },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${canonicalUrl}/blog?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'Person',
        '@id': `${canonicalUrl}/#person`,
        name: config.profile.name,
        alternateName: `@${config.profile.username}`,
        ...(mainSiteUrl ? { url: mainSiteUrl } : {}),
        ...(config.profile.avatar ? { image: config.profile.avatar } : {}),
        sameAs: (config.profile.socials ?? [])
          .filter((s) => s.url.startsWith('http'))
          .map((s) => s.url),
      },
    ],
  }
}

export const buildBlogPostingJsonLd = (
  post: {
    title: string
    description: string
    publishDate: Date
    updatedDate?: Date
    tags?: string[]
    coverImage?: string
  },
  config: ResolvedConfig,
  postUrl: string,
  lang: string,
) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.description,
  datePublished: post.publishDate.toISOString(),
  dateModified: (post.updatedDate ?? post.publishDate).toISOString(),
  author: {
    '@type': 'Person',
    name: config.profile.name,
    alternateName: `@${config.profile.username}`,
    ...(config.profile.avatar ? { image: config.profile.avatar } : {}),
  },
  publisher: {
    '@type': 'Person',
    name: config.profile.name,
    ...(config.profile.avatar ? { image: config.profile.avatar } : {}),
  },
  url: postUrl,
  mainEntityOfPage: { '@type': 'WebPage', '@id': postUrl },
  ...(post.coverImage ? { image: post.coverImage } : {}),
  ...(post.tags?.length ? { keywords: post.tags.join(', ') } : {}),
  inLanguage: lang,
  isPartOf: {
    '@type': 'Blog',
    name: config.seo?.title ?? `${config.profile.name}'s Blog`,
    url: config.seo?.canonicalUrl ?? postUrl.split('/blog')[0],
  },
})
