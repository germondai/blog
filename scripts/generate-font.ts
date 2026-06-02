// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai

// prebuild: downloads Google Font woff2 files → public/fonts/ + writes src/styles/font.css
// run manually: bun scripts/generate-font.ts

import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import type { FontName } from '@/types/config'

// non-variable fonts need an explicit weight array
export const WEIGHTS: Partial<Record<FontName, string[]>> = {
  Roboto: ['300', '400', '500', '700'],
  Poppins: ['400', '500', '600', '700'],
  Lato: ['300', '400', '700'],
  Barlow: ['300', '400', '500', '600', '700'],
  IBM_Plex_Mono: ['300', '400', '500', '700'],
  Bebas_Neue: ['400'],
  Anton: ['400'],
  DM_Serif_Display: ['400'],
  Merriweather: ['300', '400', '700'],
  Playfair_Display: ['400', '500', '700'],
  EB_Garamond: ['400', '500', '700'],
  Cormorant_Garamond: ['300', '400', '500', '700'],
}

// Fontaine-style fallback metrics (capsize analysis) - eliminates CLS before the font loads.
interface FontMetrics {
  ascent: string
  descent: string
  lineGap: string
  sizeAdjust: string
}

const FONT_METRICS: Partial<Record<FontName, FontMetrics>> = {
  Inter: { ascent: '91%', descent: '22%', lineGap: '9%', sizeAdjust: '107%' },
  Geist: { ascent: '90%', descent: '22%', lineGap: '8%', sizeAdjust: '108%' },
  Poppins: { ascent: '105%', descent: '35%', lineGap: '0%', sizeAdjust: '100%' },
  Roboto: { ascent: '105%', descent: '35%', lineGap: '0%', sizeAdjust: '100%' },
  Montserrat: { ascent: '96%', descent: '27%', lineGap: '0%', sizeAdjust: '100%' },
  DM_Sans: { ascent: '92%', descent: '24%', lineGap: '0%', sizeAdjust: '106%' },
  Nunito: { ascent: '103%', descent: '35%', lineGap: '0%', sizeAdjust: '99%' },
  Lato: { ascent: '101%', descent: '31%', lineGap: '0%', sizeAdjust: '100%' },
  Raleway: { ascent: '96%', descent: '27%', lineGap: '0%', sizeAdjust: '101%' },
  Outfit: { ascent: '100%', descent: '30%', lineGap: '0%', sizeAdjust: '100%' },
  Space_Grotesk: { ascent: '96%', descent: '28%', lineGap: '0%', sizeAdjust: '101%' },
  Syne: { ascent: '98%', descent: '27%', lineGap: '0%', sizeAdjust: '100%' },
  JetBrains_Mono: { ascent: '97%', descent: '25%', lineGap: '0%', sizeAdjust: '99%' },
  Fira_Code: { ascent: '92%', descent: '25%', lineGap: '0%', sizeAdjust: '102%' },
  Playfair_Display: { ascent: '120%', descent: '35%', lineGap: '0%', sizeAdjust: '92%' },
  Merriweather: { ascent: '107%', descent: '35%', lineGap: '13%', sizeAdjust: '96%' },
  Lora: { ascent: '105%', descent: '30%', lineGap: '0%', sizeAdjust: '98%' },
}

const FONT_FAMILY_NAMES: Partial<Record<FontName, string>> = {
  Hanken_Grotesk: 'Hanken Grotesk',
  Bricolage_Grotesque: 'Bricolage Grotesque',
  Nunito_Sans: 'Nunito Sans',
  Open_Sans: 'Open Sans',
  Work_Sans: 'Work Sans',
  Josefin_Sans: 'Josefin Sans',
  DM_Sans: 'DM Sans',
  Plus_Jakarta_Sans: 'Plus Jakarta Sans',
  Space_Grotesk: 'Space Grotesk',
  JetBrains_Mono: 'JetBrains Mono',
  Fira_Code: 'Fira Code',
  IBM_Plex_Mono: 'IBM Plex Mono',
  Source_Code_Pro: 'Source Code Pro',
  Playfair_Display: 'Playfair Display',
  EB_Garamond: 'EB Garamond',
  Cormorant_Garamond: 'Cormorant Garamond',
  DM_Serif_Display: 'DM Serif Display',
  Bebas_Neue: 'Bebas Neue',
}

const CHROME_UA =
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'

export const buildGoogleFontsUrl = (name: FontName): string => {
  const family = name.replace(/_/g, '+')
  const ws = WEIGHTS[name]
  const axis = ws ? `wght@${ws.join(';')}` : 'wght@100..900'
  return `https://fonts.googleapis.com/css2?family=${family}:${axis}&display=swap`
}

const downloadWoff2 = async (url: string, dest: string) => {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Failed to download ${url}: HTTP ${res.status}`)
  const buf = Buffer.from(await res.arrayBuffer())
  mkdirSync(dirname(dest), { recursive: true })
  writeFileSync(dest, buf)
}

if (import.meta.main) {
  const { default: config } = await import('../blog.config')
  const name = (config.appearance?.font ?? 'Inter') as FontName
  const cssUrl = buildGoogleFontsUrl(name)

  console.log(`\n🔤  Fetching font CSS: ${name}`)
  const cssRes = await fetch(cssUrl, { headers: { 'User-Agent': CHROME_UA } })
  if (!cssRes.ok) throw new Error(`CSS fetch failed: HTTP ${cssRes.status}`)
  let css = await cssRes.text()

  const urlPattern = /url\((https:\/\/fonts\.gstatic\.com\/[^)]+\.woff2)\)/g
  const woff2Urls: string[] = []
  let m: RegExpExecArray | null
  while ((m = urlPattern.exec(css)) !== null) {
    if (m[1]) woff2Urls.push(m[1])
  }

  const fontDir = join('public', 'fonts', name)
  mkdirSync(fontDir, { recursive: true })

  for (let i = 0; i < woff2Urls.length; i++) {
    const url = woff2Urls[i]
    if (!url) continue
    const filename = `${String(i).padStart(2, '0')}.woff2`
    const dest = join(fontDir, filename)
    await downloadWoff2(url, dest)
    css = css.replace(url, `/fonts/${name}/${filename}`)
    console.log(`  ✓ ${dest}`)
  }

  const familyName = FONT_FAMILY_NAMES[name] ?? name.replace(/_/g, ' ')
  const metrics = FONT_METRICS[name]
  const fallbackFace = metrics
    ? [
        `@font-face {`,
        `  font-family: '${familyName} Fallback';`,
        `  src: local('Arial'), local('Helvetica Neue'), local('sans-serif');`,
        `  ascent-override: ${metrics.ascent};`,
        `  descent-override: ${metrics.descent};`,
        `  line-gap-override: ${metrics.lineGap};`,
        `  size-adjust: ${metrics.sizeAdjust};`,
        `}`,
      ].join('\n')
    : ''

  const fontStack = metrics
    ? `'${familyName}', '${familyName} Fallback', ui-sans-serif, system-ui, sans-serif`
    : `'${familyName}', ui-sans-serif, system-ui, sans-serif`

  const fontCss = [
    `/* auto-generated by scripts/generate-font.ts - do not edit manually */`,
    `:root { --font-base: ${fontStack}; }`,
    ...(fallbackFace ? [fallbackFace] : []),
    css,
  ].join('\n')
  writeFileSync('src/styles/font.css', fontCss)
  console.log('  ✓ src/styles/font.css')
  console.log('✅  Font ready\n')
}
