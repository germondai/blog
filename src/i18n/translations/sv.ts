// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai
import type { Translations } from './en'

export const sv: Translations = {
  nav: { home: 'Hem', blog: 'Blogg', tags: 'Taggar' },
  blog: {
    title: 'Blogg',
    subtitle: 'Tankar, artiklar och idéer.',
    readingTime: (min) => `${min} min läsning`,
    updatedOn: 'Uppdaterad',
    noPosts: 'Inga inlägg än.',
    previousPost: 'Föregående',
    nextPost: 'Nästa',
    posts: (n) => `${n} inlägg`,
    share: 'Dela',
    copyLink: 'Kopiera länk',
  },
  tags: {
    title: 'Taggar',
    allTags: 'Alla taggar',
    backToPosts: '← Alla inlägg',
    backToTags: '← Alla taggar',
    noTags: 'Inga taggar än.',
    viewAllPosts: 'Visa alla inlägg',
    taggedWith: (tag) => `Inlägg taggade med "${tag}"`,
    tags: (n) => `${n} tagg${n !== 1 ? 'ar' : ''}`,
  },
  toc: { title: 'På den här sidan' },
  breadcrumb: { home: 'Hem', blog: 'Blogg' },
  pagination: {
    page: (n, total) => `Sida ${n} av ${total}`,
    previous: '← Föregående',
    next: 'Nästa →',
  },
  home: {
    recentPosts: 'Senaste inlägg',
    viewAll: 'Visa alla →',
    noPosts: 'Inga inlägg än.',
  },
  notFound: {
    title: '404 – Hittades inte',
    message: 'Sidan du letar efter finns inte.',
    home: 'Gå hem',
    viewBlog: 'Visa blogg',
  },
  ui: {
    preview: 'Bildförhandsvisning',
    lightboxHint: 'Scrolla för att zooma · Dra för att panorera · Esc',
    zoomIn: 'Zooma in',
    zoomOut: 'Zooma ut',
    resetZoom: 'Återställ zoom',
    close: 'Stäng',
    switchLanguage: 'Byt språk',
    toggleMenu: 'Växla meny',
    madeBy: 'Skapad av',
  },
}
