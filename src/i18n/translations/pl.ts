// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai

import type { Translations } from './en'

export const pl: Translations = {
  nav: { home: 'Strona główna', blog: 'Blog', tags: 'Tagi' },
  blog: {
    title: 'Blog',
    subtitle: 'Myśli, artykuły i pomysły.',
    readingTime: (min) => `${min} min czytania`,
    updatedOn: 'Zaktualizowano',
    noPosts: 'Brak wpisów.',
    previousPost: 'Poprzedni',
    nextPost: 'Następny',
    posts: (n) => `${n} wpi${n === 1 ? 's' : 'sów'}`,
    share: 'Udostępnij',
    copyLink: 'Kopiuj link',
  },
  tags: {
    title: 'Tagi',
    allTags: 'Wszystkie tagi',
    backToPosts: '← Wszystkie wpisy',
    backToTags: '← Wszystkie tagi',
    noTags: 'Brak tagów.',
    viewAllPosts: 'Zobacz wpisy',
    taggedWith: (tag) => `Wpisy oznaczone „${tag}"`,
    tags: (n) => `${n} tag${n === 1 ? '' : 'ów'}`,
  },
  toc: { title: 'Na tej stronie' },
  breadcrumb: { home: 'Strona główna', blog: 'Blog' },
  pagination: {
    page: (n, total) => `Strona ${n} z ${total}`,
    previous: '← Poprzednia',
    next: 'Następna →',
  },
  home: {
    recentPosts: 'Najnowsze wpisy',
    viewAll: 'Zobacz wszystkie →',
    noPosts: 'Brak wpisów.',
  },
  notFound: {
    title: '404 – Nie znaleziono',
    message: 'Strona, której szukasz, nie istnieje.',
    home: 'Strona główna',
    viewBlog: 'Zobacz blog',
  },
  ui: {
    preview: 'Podgląd obrazu',
    lightboxHint: 'Przewiń aby powiększyć · Przeciągnij aby przesunąć · Esc',
    zoomIn: 'Powiększ',
    zoomOut: 'Pomniejsz',
    resetZoom: 'Resetuj zoom',
    close: 'Zamknij',
    switchLanguage: 'Zmień język',
    toggleMenu: 'Przełącz menu',
    madeBy: 'Stworzone przez',
  },
}
