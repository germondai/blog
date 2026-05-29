// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai

import type { Translations } from './en'

export const cs: Translations = {
  nav: { home: 'Domů', blog: 'Blog', tags: 'Štítky' },
  blog: {
    title: 'Blog',
    subtitle: 'Myšlenky, články a nápady.',
    readingTime: (min) => `${min} min čtení`,
    updatedOn: 'Aktualizováno',
    noPosts: 'Zatím žádné příspěvky.',
    previousPost: 'Předchozí',
    nextPost: 'Další',
    posts: (n) => `${n} ${n === 1 ? 'příspěvek' : n >= 2 && n <= 4 ? 'příspěvky' : 'příspěvků'}`,
    share: 'Sdílet',
    copyLink: 'Kopírovat odkaz',
  },
  tags: {
    title: 'Štítky',
    allTags: 'Všechny štítky',
    backToPosts: '← Všechny příspěvky',
    backToTags: '← Všechny štítky',
    noTags: 'Zatím žádné štítky.',
    viewAllPosts: 'Zobrazit příspěvky',
    taggedWith: (tag) => `Příspěvky označené „${tag}"`,
    tags: (n) => `${n} ${n === 1 ? 'štítek' : n >= 2 && n <= 4 ? 'štítky' : 'štítků'}`,
  },
  toc: { title: 'Na této stránce' },
  breadcrumb: { home: 'Domů', blog: 'Blog' },
  pagination: {
    page: (n, total) => `Stránka ${n} z ${total}`,
    previous: '← Předchozí',
    next: 'Další →',
  },
  home: {
    recentPosts: 'Nejnovější příspěvky',
    viewAll: 'Zobrazit vše →',
    noPosts: 'Zatím žádné příspěvky.',
  },
  notFound: {
    title: '404 – Nenalezeno',
    message: 'Stránka, kterou hledáte, neexistuje.',
    home: 'Domů',
    viewBlog: 'Zobrazit blog',
  },
  ui: {
    preview: 'Náhled obrázku',
    lightboxHint: 'Přiblížení scrollem · Přetažení pro posun · Esc',
    zoomIn: 'Přiblížit',
    zoomOut: 'Oddálit',
    resetZoom: 'Obnovit přiblížení',
    close: 'Zavřít',
    switchLanguage: 'Změnit jazyk',
    toggleMenu: 'Přepnout menu',
    madeBy: 'Vytvořil',
  },
}
