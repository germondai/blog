// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai
import type { Translations } from './en'

export const ko: Translations = {
  nav: { home: '홈', blog: '블로그', tags: '태그' },
  blog: {
    title: '블로그',
    subtitle: '생각, 글, 아이디어.',
    readingTime: (min) => `${min}분 읽기`,
    updatedOn: '수정일',
    noPosts: '아직 게시물이 없습니다.',
    previousPost: '이전',
    nextPost: '다음',
    posts: (n) => `게시물 ${n}개`,
    share: '공유',
    copyLink: '링크 복사',
  },
  tags: {
    title: '태그',
    allTags: '모든 태그',
    backToPosts: '← 모든 게시물',
    backToTags: '← 모든 태그',
    noTags: '아직 태그가 없습니다.',
    viewAllPosts: '모든 게시물 보기',
    taggedWith: (tag) => `"${tag}" 태그 게시물`,
    tags: (n) => `태그 ${n}개`,
  },
  toc: { title: '이 페이지의 내용' },
  breadcrumb: { home: '홈', blog: '블로그' },
  pagination: {
    page: (n, total) => `${total}페이지 중 ${n}페이지`,
    previous: '← 이전',
    next: '다음 →',
  },
  home: {
    recentPosts: '최근 게시물',
    viewAll: '전체 보기 →',
    noPosts: '아직 게시물이 없습니다.',
  },
  notFound: {
    title: '404 – 페이지를 찾을 수 없음',
    message: '찾으시는 페이지가 존재하지 않습니다.',
    home: '홈으로 이동',
    viewBlog: '블로그 보기',
  },
  ui: {
    preview: '이미지 미리보기',
    lightboxHint: '스크롤하여 확대 · 드래그하여 이동 · Esc',
    zoomIn: '확대',
    zoomOut: '축소',
    resetZoom: '확대/축소 초기화',
    close: '닫기',
    switchLanguage: '언어 변경',
    toggleMenu: '메뉴 전환',
    madeBy: '제작',
  },
}
