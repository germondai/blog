// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai
import type { Translations } from './en'

export const es: Translations = {
  nav: { home: 'Inicio', blog: 'Blog', tags: 'Etiquetas' },
  blog: {
    title: 'Blog',
    subtitle: 'Pensamientos, artículos e ideas.',
    readingTime: (min) => `${min} min de lectura`,
    updatedOn: 'Actualizado',
    noPosts: 'Aún no hay publicaciones.',
    previousPost: 'Anterior',
    nextPost: 'Siguiente',
    posts: (n) => `${n} publicación${n !== 1 ? 'es' : ''}`,
    share: 'Compartir',
    copyLink: 'Copiar enlace',
  },
  tags: {
    title: 'Etiquetas',
    allTags: 'Todas las etiquetas',
    backToPosts: '← Todas las publicaciones',
    backToTags: '← Todas las etiquetas',
    noTags: 'Aún no hay etiquetas.',
    viewAllPosts: 'Ver todas las publicaciones',
    taggedWith: (tag) => `Publicaciones con la etiqueta "${tag}"`,
    tags: (n) => `${n} etiqueta${n !== 1 ? 's' : ''}`,
  },
  toc: { title: 'En esta página' },
  breadcrumb: { home: 'Inicio', blog: 'Blog' },
  pagination: {
    page: (n, total) => `Página ${n} de ${total}`,
    previous: '← Anterior',
    next: 'Siguiente →',
  },
  home: {
    recentPosts: 'Publicaciones recientes',
    viewAll: 'Ver todo →',
    noPosts: 'Aún no hay publicaciones.',
  },
  notFound: {
    title: '404 – No encontrado',
    message: 'La página que buscas no existe.',
    home: 'Ir al inicio',
    viewBlog: 'Ver el blog',
  },
  ui: {
    preview: 'Vista previa de imagen',
    lightboxHint: 'Desplazar para zoom · Arrastrar para mover · Esc',
    zoomIn: 'Acercar',
    zoomOut: 'Alejar',
    resetZoom: 'Restablecer zoom',
    close: 'Cerrar',
    switchLanguage: 'Cambiar idioma',
    toggleMenu: 'Alternar menú',
    madeBy: 'Hecho por',
  },
}
