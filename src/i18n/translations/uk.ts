// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai
import type { Translations } from './en'

export const uk: Translations = {
  nav: { home: 'Головна', blog: 'Блог', tags: 'Теги' },
  blog: {
    title: 'Блог',
    subtitle: 'Думки, статті та ідеї.',
    readingTime: (min) => `${min} хв читання`,
    updatedOn: 'Оновлено',
    noPosts: 'Поки немає записів.',
    previousPost: 'Попередня',
    nextPost: 'Наступна',
    posts: (n) => {
      const mod10 = n % 10
      const mod100 = n % 100
      if (mod10 === 1 && mod100 !== 11) return `${n} запис`
      if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return `${n} записи`
      return `${n} записів`
    },
    share: 'Поділитися',
    copyLink: 'Копіювати посилання',
  },
  tags: {
    title: 'Теги',
    allTags: 'Всі теги',
    backToPosts: '← Всі записи',
    backToTags: '← Всі теги',
    noTags: 'Поки немає тегів.',
    viewAllPosts: 'Переглянути всі записи',
    taggedWith: (tag) => `Записи з тегом «${tag}»`,
    tags: (n) => {
      const mod10 = n % 10
      const mod100 = n % 100
      if (mod10 === 1 && mod100 !== 11) return `${n} тег`
      if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return `${n} теги`
      return `${n} тегів`
    },
  },
  toc: { title: 'На цій сторінці' },
  breadcrumb: { home: 'Головна', blog: 'Блог' },
  pagination: {
    page: (n, total) => `Сторінка ${n} з ${total}`,
    previous: '← Попередня',
    next: 'Наступна →',
  },
  home: {
    recentPosts: 'Останні записи',
    viewAll: 'Переглянути всі →',
    noPosts: 'Поки немає записів.',
  },
  notFound: {
    title: '404 – Не знайдено',
    message: 'Сторінка, яку ви шукаєте, не існує.',
    home: 'На головну',
    viewBlog: 'Перейти до блогу',
  },
  ui: {
    preview: 'Попередній перегляд зображення',
    lightboxHint: 'Прокрутка для масштабу · Перетягніть для переміщення · Esc',
    zoomIn: 'Збільшити',
    zoomOut: 'Зменшити',
    resetZoom: 'Скинути масштаб',
    close: 'Закрити',
    switchLanguage: 'Змінити мову',
    toggleMenu: 'Перемкнути меню',
    madeBy: 'Створено',
  },
}
