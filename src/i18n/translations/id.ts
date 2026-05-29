// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai
import type { Translations } from './en'

export const id: Translations = {
  nav: { home: 'Beranda', blog: 'Blog', tags: 'Tag' },
  blog: {
    title: 'Blog',
    subtitle: 'Pikiran, artikel, dan ide.',
    readingTime: (min) => `${min} mnt membaca`,
    updatedOn: 'Diperbarui',
    noPosts: 'Belum ada postingan.',
    previousPost: 'Sebelumnya',
    nextPost: 'Berikutnya',
    posts: (n) => `${n} postingan`,
    share: 'Bagikan',
    copyLink: 'Salin tautan',
  },
  tags: {
    title: 'Tag',
    allTags: 'Semua tag',
    backToPosts: '← Semua postingan',
    backToTags: '← Semua tag',
    noTags: 'Belum ada tag.',
    viewAllPosts: 'Lihat semua postingan',
    taggedWith: (tag) => `Postingan bertag "${tag}"`,
    tags: (n) => `${n} tag`,
  },
  toc: { title: 'Di halaman ini' },
  breadcrumb: { home: 'Beranda', blog: 'Blog' },
  pagination: {
    page: (n, total) => `Halaman ${n} dari ${total}`,
    previous: '← Sebelumnya',
    next: 'Berikutnya →',
  },
  home: {
    recentPosts: 'Postingan terbaru',
    viewAll: 'Lihat semua →',
    noPosts: 'Belum ada postingan.',
  },
  notFound: {
    title: '404 – Tidak ditemukan',
    message: 'Halaman yang Anda cari tidak ada.',
    home: 'Ke beranda',
    viewBlog: 'Lihat blog',
  },
  ui: {
    preview: 'Pratinjau gambar',
    lightboxHint: 'Gulir untuk zoom · Seret untuk geser · Esc',
    zoomIn: 'Perbesar',
    zoomOut: 'Perkecil',
    resetZoom: 'Setel ulang zoom',
    close: 'Tutup',
    switchLanguage: 'Ganti bahasa',
    toggleMenu: 'Aktifkan menu',
    madeBy: 'Dibuat oleh',
  },
}
