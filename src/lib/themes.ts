// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai

import type { Theme } from '@/types/config'

export interface ThemeTokens {
  from: string
  via: string
  to: string
  accent: string
  beam: string
  particle: string
}

export const THEMES: Record<Theme, ThemeTokens> = {
  phantom: {
    from: '#09090f',
    via: '#0e0c22',
    to: '#130f2c',
    accent: '#5535d8',
    beam: '#7055ef',
    particle: '#9580f8',
  },
  aurora: {
    from: '#0f0a2e',
    via: '#1a0a3e',
    to: '#0a1a2e',
    accent: '#7c3aed',
    beam: '#8b5cf6',
    particle: '#a78bfa',
  },
  midnight: {
    from: '#020617',
    via: '#0f172a',
    to: '#020617',
    accent: '#3b82f6',
    beam: '#60a5fa',
    particle: '#93c5fd',
  },
  rose: {
    from: '#1a0a12',
    via: '#2d0a1e',
    to: '#1a0a12',
    accent: '#f43f5e',
    beam: '#fb7185',
    particle: '#fda4af',
  },
  emerald: {
    from: '#031a0e',
    via: '#052e16',
    to: '#031a0e',
    accent: '#10b981',
    beam: '#34d399',
    particle: '#6ee7b7',
  },
  sunset: {
    from: '#1a0a00',
    via: '#2d1500',
    to: '#1a0008',
    accent: '#f97316',
    beam: '#fb923c',
    particle: '#fdba74',
  },
  obsidian: {
    from: '#09090b',
    via: '#18181b',
    to: '#09090b',
    accent: '#a1a1aa',
    beam: '#d4d4d8',
    particle: '#e4e4e7',
  },
  neon: {
    from: '#03040d',
    via: '#060920',
    to: '#03040d',
    accent: '#22d3ee',
    beam: '#06b6d4',
    particle: '#67e8f9',
  },
  ocean: {
    from: '#021820',
    via: '#032a35',
    to: '#021820',
    accent: '#0891b2',
    beam: '#06b6d4',
    particle: '#22d3ee',
  },
  forest: {
    from: '#011c0a',
    via: '#022d12',
    to: '#011c0a',
    accent: '#16a34a',
    beam: '#22c55e',
    particle: '#4ade80',
  },
  crimson: {
    from: '#1a0306',
    via: '#2e050a',
    to: '#1a0306',
    accent: '#b91c1c',
    beam: '#dc2626',
    particle: '#f87171',
  },
  golden: {
    from: '#180e02',
    via: '#2c1a03',
    to: '#180e02',
    accent: '#d97706',
    beam: '#f59e0b',
    particle: '#fcd34d',
  },
  arctic: {
    from: '#02151a',
    via: '#042632',
    to: '#02151a',
    accent: '#0d9488',
    beam: '#14b8a6',
    particle: '#2dd4bf',
  },
  candy: {
    from: '#1a0211',
    via: '#2e031e',
    to: '#1a0211',
    accent: '#c026d3',
    beam: '#d946ef',
    particle: '#e879f9',
  },
  cosmic: {
    from: '#060419',
    via: '#0d072c',
    to: '#060419',
    accent: '#4338ca',
    beam: '#6366f1',
    particle: '#a5b4fc',
  },
}

export const getThemeTokens = (theme: Theme): Record<string, string> => {
  const t = THEMES[theme] ?? THEMES.phantom
  return {
    '--bg-from': t.from,
    '--bg-via': t.via,
    '--bg-to': t.to,
    '--accent': t.accent,
    '--beam-color': t.beam,
    '--particle-color': t.particle,
  }
}
