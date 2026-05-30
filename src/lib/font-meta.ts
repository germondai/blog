// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai

import type { FontName } from '@/types/config'

export const FONT_FAMILY: Record<FontName, string> = {
  // geometric / grotesque
  Inter: 'Inter',
  Geist: 'Geist',
  Roboto: 'Roboto',
  Montserrat: 'Montserrat',
  Urbanist: 'Urbanist',
  Hanken_Grotesk: 'Hanken Grotesk',
  Bricolage_Grotesque: 'Bricolage Grotesque',
  // humanist / friendly
  Poppins: 'Poppins',
  Nunito: 'Nunito',
  Nunito_Sans: 'Nunito Sans',
  Raleway: 'Raleway',
  Lato: 'Lato',
  Open_Sans: 'Open Sans',
  Cabin: 'Cabin',
  Work_Sans: 'Work Sans',
  Mulish: 'Mulish',
  Quicksand: 'Quicksand',
  Josefin_Sans: 'Josefin Sans',
  Figtree: 'Figtree',
  Manrope: 'Manrope',
  // professional / neutral
  DM_Sans: 'DM Sans',
  Outfit: 'Outfit',
  Plus_Jakarta_Sans: 'Plus Jakarta Sans',
  Rubik: 'Rubik',
  Lexend: 'Lexend',
  // techy / display sans
  Space_Grotesk: 'Space Grotesk',
  Syne: 'Syne',
  Barlow: 'Barlow',
  Oxanium: 'Oxanium',
  // monospace
  JetBrains_Mono: 'JetBrains Mono',
  Fira_Code: 'Fira Code',
  IBM_Plex_Mono: 'IBM Plex Mono',
  Source_Code_Pro: 'Source Code Pro',
  // serif
  Playfair_Display: 'Playfair Display',
  Merriweather: 'Merriweather',
  Lora: 'Lora',
  EB_Garamond: 'EB Garamond',
  Cormorant_Garamond: 'Cormorant Garamond',
  DM_Serif_Display: 'DM Serif Display',
  // display
  Bebas_Neue: 'Bebas Neue',
  Anton: 'Anton',
}

export const FONT_NAMES = Object.keys(FONT_FAMILY) as FontName[]
export const fontLabel = (name: FontName) => FONT_FAMILY[name]
