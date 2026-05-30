// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai

import type { BlogConfig, Effects, FontName, Theme } from '@/types/config'

type ResolvedAppearance = {
  theme: Theme
  font: FontName
  accentColor?: string
  glassOpacity: number
  blur: number
}

export const DEFAULT_EFFECTS: Required<Effects> = {
  beams: true,
  particles: true,
  lensFlares: true,
  noiseTexture: true,
}

export const DEFAULT_APPEARANCE: ResolvedAppearance = {
  theme: 'phantom',
  font: 'Inter',
  glassOpacity: 0.08,
  blur: 20,
}

export const DEFAULT_BLOG = {
  postsPerPage: 10,
  defaultLanguage: 'en',
  showReadingTime: true,
  showTags: true,
}

export type ResolvedConfig = Omit<BlogConfig, 'appearance' | 'effects' | 'blog'> & {
  appearance: ResolvedAppearance
  effects: Required<Effects>
  blog: Required<NonNullable<BlogConfig['blog']>>
}

export const resolveConfig = (raw: BlogConfig): ResolvedConfig => ({
  ...raw,
  appearance: { ...DEFAULT_APPEARANCE, ...raw.appearance },
  effects: { ...DEFAULT_EFFECTS, ...raw.effects },
  blog: { ...DEFAULT_BLOG, ...raw.blog },
})
