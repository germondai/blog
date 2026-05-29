// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai
import type { Translations } from './en'

export const de: Translations = {
  nav: { home: 'Startseite', blog: 'Blog', tags: 'Tags' },
  blog: {
    title: 'Blog',
    subtitle: 'Gedanken, Artikel und Ideen.',
    readingTime: (min) => `${min} Min. Lesezeit`,
    updatedOn: 'Aktualisiert',
    noPosts: 'Noch keine Beiträge.',
    previousPost: 'Vorherige',
    nextPost: 'Nächste',
    posts: (n) => `${n} Beitrag${n !== 1 ? 'e' : ''}`,
    share: 'Teilen',
    copyLink: 'Link kopieren',
  },
  tags: {
    title: 'Tags',
    allTags: 'Alle Tags',
    backToPosts: '← Alle Beiträge',
    backToTags: '← Alle Tags',
    noTags: 'Noch keine Tags.',
    viewAllPosts: 'Alle Beiträge anzeigen',
    taggedWith: (tag) => `Beiträge mit Tag „${tag}"`,
    tags: (n) => `${n} Tag${n !== 1 ? 's' : ''}`,
  },
  toc: { title: 'Inhalt' },
  breadcrumb: { home: 'Startseite', blog: 'Blog' },
  pagination: {
    page: (n, total) => `Seite ${n} von ${total}`,
    previous: '← Vorherige',
    next: 'Nächste →',
  },
  home: {
    recentPosts: 'Neueste Beiträge',
    viewAll: 'Alle anzeigen →',
    noPosts: 'Noch keine Beiträge.',
  },
  notFound: {
    title: '404 – Nicht gefunden',
    message: 'Die gesuchte Seite existiert nicht.',
    home: 'Zur Startseite',
    viewBlog: 'Blog anzeigen',
  },
  ui: {
    preview: 'Bildvorschau',
    lightboxHint: 'Scrollen zum Zoomen · Ziehen zum Verschieben · Esc',
    zoomIn: 'Vergrößern',
    zoomOut: 'Verkleinern',
    resetZoom: 'Zoom zurücksetzen',
    close: 'Schließen',
    switchLanguage: 'Sprache wechseln',
    toggleMenu: 'Menü umschalten',
    madeBy: 'Erstellt von',
  },
}
