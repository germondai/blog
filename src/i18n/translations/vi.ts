// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai
import type { Translations } from './en'

export const vi: Translations = {
  nav: { home: 'Trang chủ', blog: 'Blog', tags: 'Thẻ' },
  blog: {
    title: 'Blog',
    subtitle: 'Suy nghĩ, bài viết và ý tưởng.',
    readingTime: (min) => `${min} phút đọc`,
    updatedOn: 'Cập nhật',
    noPosts: 'Chưa có bài viết.',
    previousPost: 'Trước',
    nextPost: 'Tiếp theo',
    posts: (n) => `${n} bài viết`,
    share: 'Chia sẻ',
    copyLink: 'Sao chép liên kết',
  },
  tags: {
    title: 'Thẻ',
    allTags: 'Tất cả thẻ',
    backToPosts: '← Tất cả bài viết',
    backToTags: '← Tất cả thẻ',
    noTags: 'Chưa có thẻ.',
    viewAllPosts: 'Xem tất cả bài viết',
    taggedWith: (tag) => `Bài viết có thẻ "${tag}"`,
    tags: (n) => `${n} thẻ`,
  },
  toc: { title: 'Trên trang này' },
  breadcrumb: { home: 'Trang chủ', blog: 'Blog' },
  pagination: {
    page: (n, total) => `Trang ${n} / ${total}`,
    previous: '← Trước',
    next: 'Tiếp theo →',
  },
  home: {
    recentPosts: 'Bài viết gần đây',
    viewAll: 'Xem tất cả →',
    noPosts: 'Chưa có bài viết.',
  },
  notFound: {
    title: '404 – Không tìm thấy',
    message: 'Trang bạn đang tìm kiếm không tồn tại.',
    home: 'Về trang chủ',
    viewBlog: 'Xem blog',
  },
  ui: {
    preview: 'Xem trước hình ảnh',
    lightboxHint: 'Cuộn để zoom · Kéo để di chuyển · Esc',
    zoomIn: 'Phóng to',
    zoomOut: 'Thu nhỏ',
    resetZoom: 'Đặt lại zoom',
    close: 'Đóng',
    switchLanguage: 'Chuyển ngôn ngữ',
    toggleMenu: 'Bật/tắt menu',
    madeBy: 'Tạo bởi',
  },
}
