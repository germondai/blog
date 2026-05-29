// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai

export type FontName =
  // sans-serif - geometric / grotesque
  | 'Inter'
  | 'Geist'
  | 'Roboto'
  | 'Montserrat'
  | 'Urbanist'
  | 'Hanken_Grotesk'
  | 'Bricolage_Grotesque'
  // sans-serif - humanist / friendly
  | 'Poppins'
  | 'Nunito'
  | 'Nunito_Sans'
  | 'Raleway'
  | 'Lato'
  | 'Open_Sans'
  | 'Cabin'
  | 'Work_Sans'
  | 'Mulish'
  | 'Quicksand'
  | 'Josefin_Sans'
  | 'Figtree'
  | 'Manrope'
  // sans-serif - professional / neutral
  | 'DM_Sans'
  | 'Outfit'
  | 'Plus_Jakarta_Sans'
  | 'Rubik'
  | 'Lexend'
  // sans-serif - techy / display sans
  | 'Space_Grotesk'
  | 'Syne'
  | 'Barlow'
  | 'Oxanium'
  // monospace
  | 'JetBrains_Mono'
  | 'Fira_Code'
  | 'IBM_Plex_Mono'
  | 'Source_Code_Pro'
  // serif
  | 'Playfair_Display'
  | 'Merriweather'
  | 'Lora'
  | 'EB_Garamond'
  | 'Cormorant_Garamond'
  | 'DM_Serif_Display'
  // display
  | 'Bebas_Neue'
  | 'Anton'

export type Theme =
  | 'phantom'
  | 'aurora'
  | 'midnight'
  | 'rose'
  | 'emerald'
  | 'sunset'
  | 'obsidian'
  | 'neon'
  | 'ocean'
  | 'forest'
  | 'crimson'
  | 'golden'
  | 'arctic'
  | 'candy'
  | 'cosmic'

export type SocialPlatform =
  // social
  | 'github'
  | 'twitter'
  | 'bluesky'
  | 'threads'
  | 'instagram'
  | 'facebook'
  | 'youtube'
  | 'tiktok'
  | 'twitch'
  | 'linkedin'
  | 'discord'
  | 'telegram'
  | 'whatsapp'
  | 'reddit'
  | 'spotify'
  // creator / portfolio
  | 'patreon'
  | 'kofi'
  | 'producthunt'
  | 'dribbble'
  | 'behance'
  // dev
  | 'devto'
  | 'hashnode'
  | 'medium'
  | 'steam'
  // generic
  | 'website'
  | 'email'

export interface SocialLink {
  platform: SocialPlatform
  url: string
}

export interface Effects {
  beams: boolean
  particles: boolean
  lensFlares: boolean
  noiseTexture: boolean
}

export interface Appearance {
  theme: Theme
  font?: FontName
  accentColor?: string
  glassOpacity?: number
  blur?: number
}

export interface BlogConfig {
  profile: {
    name: string
    username: string
    bio?: string
    avatar?: string
    socials?: SocialLink[]
  }
  appearance?: Appearance
  effects?: Partial<Effects>
  blog?: {
    postsPerPage?: number
    defaultLanguage?: string
    showReadingTime?: boolean
    showTags?: boolean
  }
  seo?: {
    title?: string
    description?: string
    ogImage?: string
    twitterHandle?: string
    keywords?: string[]
    locale?: string
    canonicalUrl?: string
    mainSiteUrl?: string
  }
}
