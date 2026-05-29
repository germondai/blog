// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai

import type { BlogConfig } from './src/types/config'

const config: BlogConfig = {
  profile: {
    name: 'Germond',
    username: 'germondai',
    bio: 'Aspiring Full-Stack Web Developer',
    avatar: 'https://github.com/germondai.png',
    socials: [
      { platform: 'website', url: 'https://germondai.com' },
      { platform: 'github', url: 'https://github.com/germondai' },
      { platform: 'instagram', url: 'https://instagram.com/germondai' },
      { platform: 'discord', url: 'https://discord.gg/6xU897X' },
      { platform: 'youtube', url: 'https://youtube.com/@germondai?sub_confirmation=1' },
      { platform: 'email', url: 'mailto:germondai@gmail.com' },
    ],
  },

  appearance: {
    theme: 'phantom',
    font: 'Poppins',
    glassOpacity: 0.08,
    blur: 20,
  },

  effects: {
    beams: true,
    particles: true,
    lensFlares: true,
    noiseTexture: true,
  },

  blog: {
    postsPerPage: 10,
    defaultLanguage: 'en',
    showReadingTime: true,
    showTags: true,
  },

  seo: {
    title: "Germond's Blog",
    description: 'Thoughts on web development, open source, and building things.',
    twitterHandle: '@germondai',
    keywords: ['germondai', 'blog', 'web development', 'open source', 'full-stack'],
    locale: 'en_US',
    canonicalUrl: 'https://blog.germondai.com',
    mainSiteUrl: 'https://germondai.com',
  },
}

export default config
