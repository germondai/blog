// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai

import type { Translations } from './en'

export const sk: Translations = {
  nav: { home: 'Domov', blog: 'Blog', tags: 'Štítky' },
  blog: {
    title: 'Blog',
    subtitle: 'Myšlienky, články a nápady.',
    readingTime: (min) => `${min} min čítania`,
    updatedOn: 'Aktualizované',
    noPosts: 'Zatiaľ žiadne príspevky.',
    previousPost: 'Predchádzajúci',
    nextPost: 'Ďalší',
    posts: (n) => `${n} ${n === 1 ? 'príspevok' : n >= 2 && n <= 4 ? 'príspevky' : 'príspevkov'}`,
    share: 'Zdieľať',
    copyLink: 'Kopírovať odkaz',
  },
  tags: {
    title: 'Štítky',
    allTags: 'Všetky štítky',
    backToPosts: '← Všetky príspevky',
    backToTags: '← Všetky štítky',
    noTags: 'Zatiaľ žiadne štítky.',
    viewAllPosts: 'Zobraziť príspevky',
    taggedWith: (tag) => `Príspevky označené „${tag}"`,
    tags: (n) => `${n} ${n === 1 ? 'štítok' : n >= 2 && n <= 4 ? 'štítky' : 'štítkov'}`,
  },
  toc: { title: 'Na tejto stránke' },
  breadcrumb: { home: 'Domov', blog: 'Blog' },
  pagination: {
    page: (n, total) => `Strana ${n} z ${total}`,
    previous: '← Predchádzajúca',
    next: 'Ďalšia →',
  },
  home: {
    recentPosts: 'Najnovšie príspevky',
    viewAll: 'Zobraziť všetko →',
    noPosts: 'Zatiaľ žiadne príspevky.',
  },
  notFound: {
    title: '404 – Nenájdené',
    message: 'Stránka, ktorú hľadáte, neexistuje.',
    home: 'Domov',
    viewBlog: 'Zobraziť blog',
  },
  ui: {
    preview: 'Náhľad obrázka',
    lightboxHint: 'Priblíženie scrollom · Ťahanie pre posun · Esc',
    zoomIn: 'Priblížiť',
    zoomOut: 'Oddialiť',
    resetZoom: 'Obnoviť priblíženie',
    close: 'Zavrieť',
    switchLanguage: 'Zmeniť jazyk',
    toggleMenu: 'Prepnúť menu',
    madeBy: 'Vytvoril',
  },
}
