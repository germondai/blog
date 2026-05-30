// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai

import { type CollectionEntry, getCollection } from 'astro:content'
import type { GetStaticPathsOptions } from 'astro'
import { resolveConfig } from '@/lib/config'
import { getContentLangs, postSlug } from '@/lib/content'
import config from '../../blog.config'

const resolved = resolveConfig(config)
export const defaultLang = resolved.blog.defaultLanguage

const getOtherLangs = async () => (await getContentLangs()).filter((l) => l !== defaultLang)

const sortPosts = (posts: CollectionEntry<'blog'>[]) =>
  posts.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf())

const getLangPosts = async (lang: string) =>
  sortPosts(
    await getCollection(
      'blog',
      (e: CollectionEntry<'blog'>) => !e.data.draft && e.id.startsWith(`${lang}/`),
    ),
  )

export const homeLocalizedPaths = async () =>
  (await getOtherLangs()).map((lang) => ({ params: { lang } }))

export const blogListDefaultPaths = async ({ paginate }: GetStaticPathsOptions) =>
  paginate(await getLangPosts(defaultLang), { pageSize: resolved.blog.postsPerPage })

export const blogListLocalizedPaths = async ({ paginate }: GetStaticPathsOptions) =>
  (
    await Promise.all(
      (
        await getOtherLangs()
      ).map(async (lang) =>
        paginate(await getLangPosts(lang), {
          params: { lang },
          pageSize: resolved.blog.postsPerPage,
        }),
      ),
    )
  ).flat()

type PostPaths = { params: Record<string, string>; props: Record<string, unknown> }[]

const buildPostPaths = (
  posts: CollectionEntry<'blog'>[],
  lang: string,
  params: (slug: string) => Record<string, string>,
): PostPaths =>
  sortPosts([...posts]).map((post, idx, arr) => ({
    params: params(postSlug(post.id, lang)),
    props: { post, prev: arr[idx + 1], next: arr[idx - 1] },
  }))

export const blogPostDefaultPaths = async (): Promise<PostPaths> =>
  buildPostPaths(await getLangPosts(defaultLang), defaultLang, (slug) => ({ slug }))

export const blogPostLocalizedPaths = async (): Promise<PostPaths> =>
  (
    await Promise.all(
      (
        await getOtherLangs()
      ).map(async (lang) =>
        buildPostPaths(await getLangPosts(lang), lang, (slug) => ({ lang, slug })),
      ),
    )
  ).flat()

export const tagIndexDefaultPaths = () => [{ params: {} }]
export const tagIndexLocalizedPaths = async () =>
  (await getOtherLangs()).map((lang) => ({ params: { lang } }))

const buildTagPaths = async (lang: string, makeParams: (tag: string) => Record<string, string>) => {
  const posts = await getLangPosts(lang)
  const tags = [...new Set(posts.flatMap((p) => p.data.tags))]
  return tags.map((tag) => ({
    params: makeParams(tag),
    props: { tag, posts: posts.filter((p) => p.data.tags.includes(tag)) },
  }))
}

export const tagPostsDefaultPaths = async () => buildTagPaths(defaultLang, (tag) => ({ tag }))

export const tagPostsLocalizedPaths = async () =>
  (
    await Promise.all(
      (await getOtherLangs()).map((lang) => buildTagPaths(lang, (tag) => ({ lang, tag }))),
    )
  ).flat()
