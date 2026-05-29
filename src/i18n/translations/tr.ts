// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai
import type { Translations } from './en'

export const tr: Translations = {
  nav: { home: 'Ana Sayfa', blog: 'Blog', tags: 'Etiketler' },
  blog: {
    title: 'Blog',
    subtitle: 'Düşünceler, makaleler ve fikirler.',
    readingTime: (min) => `${min} dk okuma`,
    updatedOn: 'Güncellendi',
    noPosts: 'Henüz yazı yok.',
    previousPost: 'Önceki',
    nextPost: 'Sonraki',
    posts: (n) => `${n} yazı`,
    share: 'Paylaş',
    copyLink: 'Bağlantıyı kopyala',
  },
  tags: {
    title: 'Etiketler',
    allTags: 'Tüm etiketler',
    backToPosts: '← Tüm yazılar',
    backToTags: '← Tüm etiketler',
    noTags: 'Henüz etiket yok.',
    viewAllPosts: 'Tüm yazıları görüntüle',
    taggedWith: (tag) => `"${tag}" etiketli yazılar`,
    tags: (n) => `${n} etiket`,
  },
  toc: { title: 'Bu sayfada' },
  breadcrumb: { home: 'Ana Sayfa', blog: 'Blog' },
  pagination: {
    page: (n, total) => `${total} sayfadan ${n}. sayfa`,
    previous: '← Önceki',
    next: 'Sonraki →',
  },
  home: {
    recentPosts: 'Son yazılar',
    viewAll: 'Tümünü gör →',
    noPosts: 'Henüz yazı yok.',
  },
  notFound: {
    title: '404 – Bulunamadı',
    message: 'Aradığınız sayfa mevcut değil.',
    home: 'Ana sayfaya git',
    viewBlog: 'Blogu görüntüle',
  },
  ui: {
    preview: 'Resim önizlemesi',
    lightboxHint: 'Yakınlaştırmak için kaydır · Kaydırmak için sürükle · Esc',
    zoomIn: 'Yakınlaştır',
    zoomOut: 'Uzaklaştır',
    resetZoom: 'Yakınlaştırmayı sıfırla',
    close: 'Kapat',
    switchLanguage: 'Dili değiştir',
    toggleMenu: 'Menüyü aç/kapat',
    madeBy: 'Yapımcı',
  },
}
