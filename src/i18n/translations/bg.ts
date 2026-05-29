// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai
import type { Translations } from './en'

export const bg: Translations = {
  nav: { home: 'Начало', blog: 'Блог', tags: 'Тагове' },
  blog: {
    title: 'Блог',
    subtitle: 'Мисли, статии и идеи.',
    readingTime: (min) => `${min} мин четене`,
    updatedOn: 'Обновено',
    noPosts: 'Все още няма публикации.',
    previousPost: 'Предишна',
    nextPost: 'Следваща',
    posts: (n) => `${n} публикация${n !== 1 ? 'и' : ''}`,
    share: 'Сподели',
    copyLink: 'Копирай линк',
  },
  tags: {
    title: 'Тагове',
    allTags: 'Всички тагове',
    backToPosts: '← Всички публикации',
    backToTags: '← Всички тагове',
    noTags: 'Все още няма тагове.',
    viewAllPosts: 'Виж всички публикации',
    taggedWith: (tag) => `Публикации с таг „${tag}"`,
    tags: (n) => `${n} таг${n !== 1 ? 'а' : ''}`,
  },
  toc: { title: 'На тази страница' },
  breadcrumb: { home: 'Начало', blog: 'Блог' },
  pagination: {
    page: (n, total) => `Страница ${n} от ${total}`,
    previous: '← Предишна',
    next: 'Следваща →',
  },
  home: {
    recentPosts: 'Последни публикации',
    viewAll: 'Виж всички →',
    noPosts: 'Все още няма публикации.',
  },
  notFound: {
    title: '404 – Не е намерено',
    message: 'Страницата, която търсите, не съществува.',
    home: 'Към началото',
    viewBlog: 'Към блога',
  },
  ui: {
    preview: 'Преглед на изображение',
    lightboxHint: 'Превъртете за мащабиране · Плъзнете за преместване · Esc',
    zoomIn: 'Увеличи',
    zoomOut: 'Намали',
    resetZoom: 'Нулиране на мащаба',
    close: 'Затвори',
    switchLanguage: 'Смяна на език',
    toggleMenu: 'Превключи менюто',
    madeBy: 'Създадено от',
  },
}
