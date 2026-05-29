// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai
import type { Translations } from './en'

export const nl: Translations = {
  nav: { home: 'Home', blog: 'Blog', tags: 'Tags' },
  blog: {
    title: 'Blog',
    subtitle: 'Gedachten, artikelen en ideeën.',
    readingTime: (min) => `${min} min lezen`,
    updatedOn: 'Bijgewerkt',
    noPosts: 'Nog geen berichten.',
    previousPost: 'Vorige',
    nextPost: 'Volgende',
    posts: (n) => `${n} bericht${n !== 1 ? 'en' : ''}`,
    share: 'Delen',
    copyLink: 'Link kopiëren',
  },
  tags: {
    title: 'Tags',
    allTags: 'Alle tags',
    backToPosts: '← Alle berichten',
    backToTags: '← Alle tags',
    noTags: 'Nog geen tags.',
    viewAllPosts: 'Alle berichten bekijken',
    taggedWith: (tag) => `Berichten met tag "${tag}"`,
    tags: (n) => `${n} tag${n !== 1 ? 's' : ''}`,
  },
  toc: { title: 'Op deze pagina' },
  breadcrumb: { home: 'Home', blog: 'Blog' },
  pagination: {
    page: (n, total) => `Pagina ${n} van ${total}`,
    previous: '← Vorige',
    next: 'Volgende →',
  },
  home: {
    recentPosts: 'Recente berichten',
    viewAll: 'Alles bekijken →',
    noPosts: 'Nog geen berichten.',
  },
  notFound: {
    title: '404 – Niet gevonden',
    message: 'De pagina die je zoekt bestaat niet.',
    home: 'Naar home',
    viewBlog: 'Blog bekijken',
  },
  ui: {
    preview: 'Afbeeldingsvoorvertoning',
    lightboxHint: 'Scrollen om te zoomen · Slepen om te pannen · Esc',
    zoomIn: 'Inzoomen',
    zoomOut: 'Uitzoomen',
    resetZoom: 'Zoom resetten',
    close: 'Sluiten',
    switchLanguage: 'Taal wisselen',
    toggleMenu: 'Menu wisselen',
    madeBy: 'Gemaakt door',
  },
}
