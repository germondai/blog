// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai
import type { Translations } from './en'

export const pt: Translations = {
  nav: { home: 'Início', blog: 'Blog', tags: 'Tags' },
  blog: {
    title: 'Blog',
    subtitle: 'Pensamentos, artigos e ideias.',
    readingTime: (min) => `${min} min de leitura`,
    updatedOn: 'Atualizado',
    noPosts: 'Ainda sem publicações.',
    previousPost: 'Anterior',
    nextPost: 'Próximo',
    posts: (n) => `${n} publicação${n !== 1 ? 'ões' : ''}`,
    share: 'Partilhar',
    copyLink: 'Copiar link',
  },
  tags: {
    title: 'Tags',
    allTags: 'Todas as tags',
    backToPosts: '← Todas as publicações',
    backToTags: '← Todas as tags',
    noTags: 'Ainda sem tags.',
    viewAllPosts: 'Ver todas as publicações',
    taggedWith: (tag) => `Publicações com a tag "${tag}"`,
    tags: (n) => `${n} tag${n !== 1 ? 's' : ''}`,
  },
  toc: { title: 'Nesta página' },
  breadcrumb: { home: 'Início', blog: 'Blog' },
  pagination: {
    page: (n, total) => `Página ${n} de ${total}`,
    previous: '← Anterior',
    next: 'Próxima →',
  },
  home: {
    recentPosts: 'Publicações recentes',
    viewAll: 'Ver tudo →',
    noPosts: 'Ainda sem publicações.',
  },
  notFound: {
    title: '404 – Não encontrado',
    message: 'A página que procura não existe.',
    home: 'Ir ao início',
    viewBlog: 'Ver o blog',
  },
  ui: {
    preview: 'Pré-visualização de imagem',
    lightboxHint: 'Rolar para zoom · Arrastar para mover · Esc',
    zoomIn: 'Ampliar',
    zoomOut: 'Reduzir',
    resetZoom: 'Repor zoom',
    close: 'Fechar',
    switchLanguage: 'Mudar idioma',
    toggleMenu: 'Alternar menu',
    madeBy: 'Feito por',
  },
}
