// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai
import type { Translations } from './en'

export const it: Translations = {
  nav: { home: 'Home', blog: 'Blog', tags: 'Tag' },
  blog: {
    title: 'Blog',
    subtitle: 'Pensieri, articoli e idee.',
    readingTime: (min) => `${min} min di lettura`,
    updatedOn: 'Aggiornato',
    noPosts: 'Ancora nessun articolo.',
    previousPost: 'Precedente',
    nextPost: 'Successivo',
    posts: (n) => `${n} articolo${n !== 1 ? 'i' : ''}`,
    share: 'Condividi',
    copyLink: 'Copia link',
  },
  tags: {
    title: 'Tag',
    allTags: 'Tutti i tag',
    backToPosts: '← Tutti gli articoli',
    backToTags: '← Tutti i tag',
    noTags: 'Ancora nessun tag.',
    viewAllPosts: 'Vedi tutti gli articoli',
    taggedWith: (tag) => `Articoli con il tag "${tag}"`,
    tags: (n) => `${n} tag`,
  },
  toc: { title: 'In questa pagina' },
  breadcrumb: { home: 'Home', blog: 'Blog' },
  pagination: {
    page: (n, total) => `Pagina ${n} di ${total}`,
    previous: '← Precedente',
    next: 'Successiva →',
  },
  home: {
    recentPosts: 'Articoli recenti',
    viewAll: 'Vedi tutto →',
    noPosts: 'Ancora nessun articolo.',
  },
  notFound: {
    title: '404 – Non trovato',
    message: 'La pagina che cerchi non esiste.',
    home: 'Vai alla home',
    viewBlog: 'Vedi il blog',
  },
  ui: {
    preview: 'Anteprima immagine',
    lightboxHint: 'Scorri per zoom · Trascina per spostare · Esc',
    zoomIn: 'Ingrandisci',
    zoomOut: 'Riduci',
    resetZoom: 'Reimposta zoom',
    close: 'Chiudi',
    switchLanguage: 'Cambia lingua',
    toggleMenu: 'Attiva/disattiva menu',
    madeBy: 'Creato da',
  },
}
