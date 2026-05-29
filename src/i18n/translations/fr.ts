// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai
import type { Translations } from './en'

export const fr: Translations = {
  nav: { home: 'Accueil', blog: 'Blog', tags: 'Tags' },
  blog: {
    title: 'Blog',
    subtitle: `Pensées, articles et idées.`,
    readingTime: (min) => `${min} min de lecture`,
    updatedOn: 'Mis à jour',
    noPosts: `Aucun article pour l'instant.`,
    previousPost: 'Précédent',
    nextPost: 'Suivant',
    posts: (n) => `${n} article${n !== 1 ? 's' : ''}`,
    share: 'Partager',
    copyLink: 'Copier le lien',
  },
  tags: {
    title: 'Tags',
    allTags: 'Tous les tags',
    backToPosts: '← Tous les articles',
    backToTags: '← Tous les tags',
    noTags: `Aucun tag pour l'instant.`,
    viewAllPosts: 'Voir tous les articles',
    taggedWith: (tag) => `Articles avec le tag « ${tag} »`,
    tags: (n) => `${n} tag${n !== 1 ? 's' : ''}`,
  },
  toc: { title: 'Sur cette page' },
  breadcrumb: { home: 'Accueil', blog: 'Blog' },
  pagination: {
    page: (n, total) => `Page ${n} sur ${total}`,
    previous: '← Précédente',
    next: 'Suivante →',
  },
  home: {
    recentPosts: 'Articles récents',
    viewAll: 'Voir tout →',
    noPosts: `Aucun article pour l'instant.`,
  },
  notFound: {
    title: '404 – Introuvable',
    message: `La page que vous recherchez n'existe pas.`,
    home: 'Accueil',
    viewBlog: 'Voir le blog',
  },
  ui: {
    preview: `Aperçu de l'image`,
    lightboxHint: 'Défiler pour zoomer · Glisser pour déplacer · Échap',
    zoomIn: 'Zoom avant',
    zoomOut: 'Zoom arrière',
    resetZoom: 'Réinitialiser le zoom',
    close: 'Fermer',
    switchLanguage: 'Changer de langue',
    toggleMenu: 'Basculer le menu',
    madeBy: 'Créé par',
  },
}
