// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai
import type { Translations } from './en'

export const da: Translations = {
  nav: { home: 'Hjem', blog: 'Blog', tags: 'Tags' },
  blog: {
    title: 'Blog',
    subtitle: 'Tanker, artikler og idéer.',
    readingTime: (min) => `${min} min læsning`,
    updatedOn: 'Opdateret',
    noPosts: 'Ingen indlæg endnu.',
    previousPost: 'Forrige',
    nextPost: 'Næste',
    posts: (n) => `${n} indlæg`,
    share: 'Del',
    copyLink: 'Kopiér link',
  },
  tags: {
    title: 'Tags',
    allTags: 'Alle tags',
    backToPosts: '← Alle indlæg',
    backToTags: '← Alle tags',
    noTags: 'Ingen tags endnu.',
    viewAllPosts: 'Se alle indlæg',
    taggedWith: (tag) => `Indlæg tagget med "${tag}"`,
    tags: (n) => `${n} tag${n !== 1 ? 's' : ''}`,
  },
  toc: { title: 'På denne side' },
  breadcrumb: { home: 'Hjem', blog: 'Blog' },
  pagination: {
    page: (n, total) => `Side ${n} af ${total}`,
    previous: '← Forrige',
    next: 'Næste →',
  },
  home: {
    recentPosts: 'Seneste indlæg',
    viewAll: 'Se alle →',
    noPosts: 'Ingen indlæg endnu.',
  },
  notFound: {
    title: '404 – Ikke fundet',
    message: 'Siden du leder efter eksisterer ikke.',
    home: 'Gå hjem',
    viewBlog: 'Se blog',
  },
  ui: {
    preview: 'Billedforhåndsvisning',
    lightboxHint: 'Rul for at zoome · Træk for at panorere · Esc',
    zoomIn: 'Zoom ind',
    zoomOut: 'Zoom ud',
    resetZoom: 'Nulstil zoom',
    close: 'Luk',
    switchLanguage: 'Skift sprog',
    toggleMenu: 'Slå menu til/fra',
    madeBy: 'Lavet af',
  },
}
