// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai
import type { Translations } from './en'

export const hu: Translations = {
  nav: { home: 'Főoldal', blog: 'Blog', tags: 'Címkék' },
  blog: {
    title: 'Blog',
    subtitle: 'Gondolatok, cikkek és ötletek.',
    readingTime: (min) => `${min} perc olvasás`,
    updatedOn: 'Frissítve',
    noPosts: 'Még nincsenek bejegyzések.',
    previousPost: 'Előző',
    nextPost: 'Következő',
    posts: (n) => `${n} bejegyzés`,
    share: 'Megosztás',
    copyLink: 'Hivatkozás másolása',
  },
  tags: {
    title: 'Címkék',
    allTags: 'Összes címke',
    backToPosts: '← Összes bejegyzés',
    backToTags: '← Összes címke',
    noTags: 'Még nincsenek címkék.',
    viewAllPosts: 'Összes bejegyzés megtekintése',
    taggedWith: (tag) => `„${tag}" címkéjű bejegyzések`,
    tags: (n) => `${n} címke`,
  },
  toc: { title: 'Ezen az oldalon' },
  breadcrumb: { home: 'Főoldal', blog: 'Blog' },
  pagination: {
    page: (n, total) => `${n}. oldal / ${total}`,
    previous: '← Előző',
    next: 'Következő →',
  },
  home: {
    recentPosts: 'Legújabb bejegyzések',
    viewAll: 'Összes megtekintése →',
    noPosts: 'Még nincsenek bejegyzések.',
  },
  notFound: {
    title: '404 – Nem található',
    message: 'A keresett oldal nem létezik.',
    home: 'Főoldalra',
    viewBlog: 'Blog megtekintése',
  },
  ui: {
    preview: 'Képelőnézet',
    lightboxHint: 'Görgetés a nagyításhoz · Húzás az eltoláshoz · Esc',
    zoomIn: 'Nagyítás',
    zoomOut: 'Kicsinyítés',
    resetZoom: 'Nagyítás alaphelyzetbe',
    close: 'Bezárás',
    switchLanguage: 'Nyelv váltása',
    toggleMenu: 'Menü váltása',
    madeBy: 'Készítette',
  },
}
