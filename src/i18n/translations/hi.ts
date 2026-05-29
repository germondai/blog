// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai
import type { Translations } from './en'

export const hi: Translations = {
  nav: { home: 'होम', blog: 'ब्लॉग', tags: 'टैग' },
  blog: {
    title: 'ब्लॉग',
    subtitle: 'विचार, लेख और आइडिया।',
    readingTime: (min) => `${min} मिनट पढ़ना`,
    updatedOn: 'अपडेट किया गया',
    noPosts: 'अभी तक कोई पोस्ट नहीं।',
    previousPost: 'पिछला',
    nextPost: 'अगला',
    posts: (n) => `${n} पोस्ट`,
    share: 'शेयर करें',
    copyLink: 'लिंक कॉपी करें',
  },
  tags: {
    title: 'टैग',
    allTags: 'सभी टैग',
    backToPosts: '← सभी पोस्ट',
    backToTags: '← सभी टैग',
    noTags: 'अभी तक कोई टैग नहीं।',
    viewAllPosts: 'सभी पोस्ट देखें',
    taggedWith: (tag) => `"${tag}" टैग वाली पोस्ट`,
    tags: (n) => `${n} टैग`,
  },
  toc: { title: 'इस पेज पर' },
  breadcrumb: { home: 'होम', blog: 'ब्लॉग' },
  pagination: {
    page: (n, total) => `पेज ${n} / ${total}`,
    previous: '← पिछला',
    next: 'अगला →',
  },
  home: {
    recentPosts: 'हाल की पोस्ट',
    viewAll: 'सभी देखें →',
    noPosts: 'अभी तक कोई पोस्ट नहीं।',
  },
  notFound: {
    title: '404 – नहीं मिला',
    message: 'जो पेज आप ढूंढ रहे हैं वह मौजूद नहीं है।',
    home: 'होम पर जाएं',
    viewBlog: 'ब्लॉग देखें',
  },
  ui: {
    preview: 'छवि पूर्वावलोकन',
    lightboxHint: 'ज़ूम के लिए स्क्रॉल करें · पैन के लिए खींचें · Esc',
    zoomIn: 'ज़ूम इन',
    zoomOut: 'ज़ूम आउट',
    resetZoom: 'ज़ूम रीसेट करें',
    close: 'बंद करें',
    switchLanguage: 'भाषा बदलें',
    toggleMenu: 'मेनू टॉगल करें',
    madeBy: 'द्वारा बनाया गया',
  },
}
