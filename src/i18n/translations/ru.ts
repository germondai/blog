// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai
import type { Translations } from './en'

export const ru: Translations = {
  nav: { home: 'Главная', blog: 'Блог', tags: 'Теги' },
  blog: {
    title: 'Блог',
    subtitle: 'Мысли, статьи и идеи.',
    readingTime: (min) => `${min} мин чтения`,
    updatedOn: 'Обновлено',
    noPosts: 'Пока нет записей.',
    previousPost: 'Предыдущая',
    nextPost: 'Следующая',
    posts: (n) => {
      const mod10 = n % 10
      const mod100 = n % 100
      if (mod10 === 1 && mod100 !== 11) return `${n} запись`
      if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return `${n} записи`
      return `${n} записей`
    },
    share: 'Поделиться',
    copyLink: 'Копировать ссылку',
  },
  tags: {
    title: 'Теги',
    allTags: 'Все теги',
    backToPosts: '← Все записи',
    backToTags: '← Все теги',
    noTags: 'Пока нет тегов.',
    viewAllPosts: 'Смотреть все записи',
    taggedWith: (tag) => `Записи с тегом «${tag}»`,
    tags: (n) => {
      const mod10 = n % 10
      const mod100 = n % 100
      if (mod10 === 1 && mod100 !== 11) return `${n} тег`
      if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return `${n} тега`
      return `${n} тегов`
    },
  },
  toc: { title: 'На этой странице' },
  breadcrumb: { home: 'Главная', blog: 'Блог' },
  pagination: {
    page: (n, total) => `Страница ${n} из ${total}`,
    previous: '← Предыдущая',
    next: 'Следующая →',
  },
  home: {
    recentPosts: 'Последние записи',
    viewAll: 'Смотреть все →',
    noPosts: 'Пока нет записей.',
  },
  notFound: {
    title: '404 – Не найдено',
    message: 'Запрашиваемая страница не существует.',
    home: 'На главную',
    viewBlog: 'Перейти в блог',
  },
  ui: {
    preview: 'Предварительный просмотр изображения',
    lightboxHint: 'Прокрутка для масштаба · Перетащите для перемещения · Esc',
    zoomIn: 'Увеличить',
    zoomOut: 'Уменьшить',
    resetZoom: 'Сбросить масштаб',
    close: 'Закрыть',
    switchLanguage: 'Сменить язык',
    toggleMenu: 'Переключить меню',
    madeBy: 'Создано',
  },
}
