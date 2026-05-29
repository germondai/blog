// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai
import type { Translations } from './en'

export const fi: Translations = {
  nav: { home: 'Etusivu', blog: 'Blogi', tags: 'Tunnisteet' },
  blog: {
    title: 'Blogi',
    subtitle: 'Ajatuksia, artikkeleita ja ideoita.',
    readingTime: (min) => `${min} min lukuaika`,
    updatedOn: 'Päivitetty',
    noPosts: 'Ei vielä julkaisuja.',
    previousPost: 'Edellinen',
    nextPost: 'Seuraava',
    posts: (n) => `${n} julkaisu${n !== 1 ? 'a' : ''}`,
    share: 'Jaa',
    copyLink: 'Kopioi linkki',
  },
  tags: {
    title: 'Tunnisteet',
    allTags: 'Kaikki tunnisteet',
    backToPosts: '← Kaikki julkaisut',
    backToTags: '← Kaikki tunnisteet',
    noTags: 'Ei vielä tunnisteita.',
    viewAllPosts: 'Näytä kaikki julkaisut',
    taggedWith: (tag) => `Julkaisut tunnisteella "${tag}"`,
    tags: (n) => `${n} tunniste${n !== 1 ? 'tta' : ''}`,
  },
  toc: { title: 'Tällä sivulla' },
  breadcrumb: { home: 'Etusivu', blog: 'Blogi' },
  pagination: {
    page: (n, total) => `Sivu ${n} / ${total}`,
    previous: '← Edellinen',
    next: 'Seuraava →',
  },
  home: {
    recentPosts: 'Viimeisimmät julkaisut',
    viewAll: 'Näytä kaikki →',
    noPosts: 'Ei vielä julkaisuja.',
  },
  notFound: {
    title: '404 – Sivua ei löydy',
    message: 'Etsimääsi sivua ei ole olemassa.',
    home: 'Etusivulle',
    viewBlog: 'Näytä blogi',
  },
  ui: {
    preview: 'Kuvan esikatselu',
    lightboxHint: 'Vieritä zoomaamiseen · Vedä liikkumiseen · Esc',
    zoomIn: 'Lähennä',
    zoomOut: 'Loitonna',
    resetZoom: 'Palauta zoom',
    close: 'Sulje',
    switchLanguage: 'Vaihda kieltä',
    toggleMenu: 'Vaihda valikko',
    madeBy: 'Tekijä',
  },
}
