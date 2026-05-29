// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai

export interface Translations {
  nav: { home: string; blog: string; tags: string }
  blog: {
    title: string
    subtitle: string
    readingTime: (min: number) => string
    updatedOn: string
    noPosts: string
    previousPost: string
    nextPost: string
    posts: (n: number) => string
    share: string
    copyLink: string
  }
  tags: {
    title: string
    allTags: string
    backToPosts: string
    backToTags: string
    noTags: string
    viewAllPosts: string
    taggedWith: (tag: string) => string
    tags: (n: number) => string
  }
  toc: { title: string }
  breadcrumb: { home: string; blog: string }
  pagination: {
    page: (n: number, total: number) => string
    previous: string
    next: string
  }
  home: {
    recentPosts: string
    viewAll: string
    noPosts: string
  }
  notFound: { title: string; message: string; home: string; viewBlog: string }
  ui: {
    preview: string
    lightboxHint: string
    zoomIn: string
    zoomOut: string
    resetZoom: string
    close: string
    switchLanguage: string
    toggleMenu: string
    madeBy: string
  }
}

export const en: Translations = {
  nav: { home: 'Home', blog: 'Blog', tags: 'Tags' },
  blog: {
    title: 'Blog',
    subtitle: 'Thoughts, articles and ideas.',
    readingTime: (min) => `${min} min read`,
    updatedOn: 'Updated',
    noPosts: 'No posts yet.',
    previousPost: 'Previous',
    nextPost: 'Next',
    posts: (n) => `${n} post${n !== 1 ? 's' : ''}`,
    share: 'Share',
    copyLink: 'Copy link',
  },
  tags: {
    title: 'Tags',
    allTags: 'All tags',
    backToPosts: '← All posts',
    backToTags: '← All tags',
    noTags: 'No tags yet.',
    viewAllPosts: 'View all posts',
    taggedWith: (tag) => `Posts tagged "${tag}"`,
    tags: (n) => `${n} tag${n !== 1 ? 's' : ''}`,
  },
  toc: { title: 'On this page' },
  breadcrumb: { home: 'Home', blog: 'Blog' },
  pagination: {
    page: (n, total) => `Page ${n} of ${total}`,
    previous: '← Previous',
    next: 'Next →',
  },
  home: {
    recentPosts: 'Recent Posts',
    viewAll: 'View all →',
    noPosts: 'No posts yet.',
  },
  notFound: {
    title: '404 – Not Found',
    message: "The page you're looking for doesn't exist.",
    home: 'Go home',
    viewBlog: 'View blog',
  },
  ui: {
    preview: 'Image preview',
    lightboxHint: 'Scroll to zoom · Drag to pan · Esc',
    zoomIn: 'Zoom in',
    zoomOut: 'Zoom out',
    resetZoom: 'Reset zoom',
    close: 'Close',
    switchLanguage: 'Switch language',
    toggleMenu: 'Toggle menu',
    madeBy: 'Made by',
  },
}
