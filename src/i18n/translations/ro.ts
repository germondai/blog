// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai
import type { Translations } from './en'

export const ro: Translations = {
  nav: { home: 'Acasă', blog: 'Blog', tags: 'Etichete' },
  blog: {
    title: 'Blog',
    subtitle: 'Gânduri, articole și idei.',
    readingTime: (min) => `${min} min citire`,
    updatedOn: 'Actualizat',
    noPosts: 'Nicio postare deocamdată.',
    previousPost: 'Anterior',
    nextPost: 'Următor',
    posts: (n) => `${n} postare${n !== 1 ? 'i' : ''}`,
    share: 'Distribuie',
    copyLink: 'Copiază link',
  },
  tags: {
    title: 'Etichete',
    allTags: 'Toate etichetele',
    backToPosts: '← Toate postările',
    backToTags: '← Toate etichetele',
    noTags: 'Nicio etichetă deocamdată.',
    viewAllPosts: 'Vezi toate postările',
    taggedWith: (tag) => `Postări cu eticheta "${tag}"`,
    tags: (n) => `${n} etichetă${n !== 1 ? 'e' : ''}`,
  },
  toc: { title: 'Pe această pagină' },
  breadcrumb: { home: 'Acasă', blog: 'Blog' },
  pagination: {
    page: (n, total) => `Pagina ${n} din ${total}`,
    previous: '← Anterior',
    next: 'Următor →',
  },
  home: {
    recentPosts: 'Postări recente',
    viewAll: 'Vezi tot →',
    noPosts: 'Nicio postare deocamdată.',
  },
  notFound: {
    title: '404 – Negăsit',
    message: 'Pagina căutată nu există.',
    home: 'Mergi acasă',
    viewBlog: 'Vezi blogul',
  },
  ui: {
    preview: 'Previzualizare imagine',
    lightboxHint: 'Derulează pentru zoom · Trage pentru deplasare · Esc',
    zoomIn: 'Mărire',
    zoomOut: 'Micșorare',
    resetZoom: 'Resetare zoom',
    close: 'Închide',
    switchLanguage: 'Schimbă limba',
    toggleMenu: 'Comutare meniu',
    madeBy: 'Creat de',
  },
}
