// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai
import type { Translations } from './en'

export const zh: Translations = {
  nav: { home: '首页', blog: '博客', tags: '标签' },
  blog: {
    title: '博客',
    subtitle: '想法、文章与创意。',
    readingTime: (min) => `${min} 分钟阅读`,
    updatedOn: '更新于',
    noPosts: '暂无文章。',
    previousPost: '上一篇',
    nextPost: '下一篇',
    posts: (n) => `${n} 篇文章`,
    share: '分享',
    copyLink: '复制链接',
  },
  tags: {
    title: '标签',
    allTags: '所有标签',
    backToPosts: '← 所有文章',
    backToTags: '← 所有标签',
    noTags: '暂无标签。',
    viewAllPosts: '查看所有文章',
    taggedWith: (tag) => `标签"${tag}"下的文章`,
    tags: (n) => `${n} 个标签`,
  },
  toc: { title: '本页目录' },
  breadcrumb: { home: '首页', blog: '博客' },
  pagination: {
    page: (n, total) => `第 ${n} 页，共 ${total} 页`,
    previous: '← 上一页',
    next: '下一页 →',
  },
  home: {
    recentPosts: '最新文章',
    viewAll: '查看全部 →',
    noPosts: '暂无文章。',
  },
  notFound: {
    title: '404 – 页面未找到',
    message: '您访问的页面不存在。',
    home: '返回首页',
    viewBlog: '查看博客',
  },
  ui: {
    preview: '图片预览',
    lightboxHint: '滚动缩放 · 拖拽平移 · Esc',
    zoomIn: '放大',
    zoomOut: '缩小',
    resetZoom: '重置缩放',
    close: '关闭',
    switchLanguage: '切换语言',
    toggleMenu: '切换菜单',
    madeBy: '制作',
  },
}
