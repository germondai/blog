// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai
import type { Translations } from './en'

export const no: Translations = {
  nav: { home: 'Hjem', blog: 'Blogg', tags: 'Tagger' },
  blog: {
    title: 'Blogg',
    subtitle: 'Tanker, artikler og ideer.',
    readingTime: (min) => `${min} min lesing`,
    updatedOn: 'Oppdatert',
    noPosts: 'Ingen innlegg ennå.',
    previousPost: 'Forrige',
    nextPost: 'Neste',
    posts: (n) => `${n} innlegg`,
    share: 'Del',
    copyLink: 'Kopier lenke',
  },
  tags: {
    title: 'Tagger',
    allTags: 'Alle tagger',
    backToPosts: '← Alle innlegg',
    backToTags: '← Alle tagger',
    noTags: 'Ingen tagger ennå.',
    viewAllPosts: 'Vis alle innlegg',
    taggedWith: (tag) => `Innlegg merket med "${tag}"`,
    tags: (n) => `${n} tagg${n !== 1 ? 'er' : ''}`,
  },
  toc: { title: 'På denne siden' },
  breadcrumb: { home: 'Hjem', blog: 'Blogg' },
  pagination: {
    page: (n, total) => `Side ${n} av ${total}`,
    previous: '← Forrige',
    next: 'Neste →',
  },
  home: {
    recentPosts: 'Siste innlegg',
    viewAll: 'Vis alle →',
    noPosts: 'Ingen innlegg ennå.',
  },
  notFound: {
    title: '404 – Ikke funnet',
    message: 'Siden du leter etter finnes ikke.',
    home: 'Gå hjem',
    viewBlog: 'Vis blogg',
  },
  ui: {
    preview: 'Bildeforhåndsvisning',
    lightboxHint: 'Rull for å zoome · Dra for å panorere · Esc',
    zoomIn: 'Zoom inn',
    zoomOut: 'Zoom ut',
    resetZoom: 'Tilbakestill zoom',
    close: 'Lukk',
    switchLanguage: 'Bytt språk',
    toggleMenu: 'Veksle meny',
    madeBy: 'Laget av',
  },
}
