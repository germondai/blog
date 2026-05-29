// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai
import type { Translations } from './en'

export const ja: Translations = {
  nav: { home: 'ホーム', blog: 'ブログ', tags: 'タグ' },
  blog: {
    title: 'ブログ',
    subtitle: '考え、記事、アイデア。',
    readingTime: (min) => `${min}分で読める`,
    updatedOn: '更新日',
    noPosts: 'まだ投稿がありません。',
    previousPost: '前の記事',
    nextPost: '次の記事',
    posts: (n) => `${n}件の投稿`,
    share: '共有',
    copyLink: 'リンクをコピー',
  },
  tags: {
    title: 'タグ',
    allTags: 'すべてのタグ',
    backToPosts: '← すべての投稿',
    backToTags: '← すべてのタグ',
    noTags: 'まだタグがありません。',
    viewAllPosts: 'すべての投稿を見る',
    taggedWith: (tag) => `タグ「${tag}」の投稿`,
    tags: (n) => `${n}件のタグ`,
  },
  toc: { title: 'このページの内容' },
  breadcrumb: { home: 'ホーム', blog: 'ブログ' },
  pagination: {
    page: (n, total) => `${total}ページ中${n}ページ目`,
    previous: '← 前のページ',
    next: '次のページ →',
  },
  home: {
    recentPosts: '最近の投稿',
    viewAll: 'すべて見る →',
    noPosts: 'まだ投稿がありません。',
  },
  notFound: {
    title: '404 – ページが見つかりません',
    message: 'お探しのページは存在しません。',
    home: 'ホームへ',
    viewBlog: 'ブログを見る',
  },
  ui: {
    preview: '画像プレビュー',
    lightboxHint: 'スクロールでズーム · ドラッグで移動 · Esc',
    zoomIn: '拡大',
    zoomOut: '縮小',
    resetZoom: 'ズームをリセット',
    close: '閉じる',
    switchLanguage: '言語を切り替え',
    toggleMenu: 'メニューを切り替え',
    madeBy: '制作',
  },
}
