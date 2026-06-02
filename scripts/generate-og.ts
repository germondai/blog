// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai

// prebuild: generates 1200×630 WebP OG image from blog.config.ts → public/og.webp

import sharp from 'sharp'
import { THEMES } from '@/lib/themes'
import config from '../blog.config'

const { profile, appearance, seo } = config
const theme = appearance?.theme ?? 'phantom'
const tokens = THEMES[theme]
const accent = appearance?.accentColor ?? tokens.accent
const { from, via, to } = tokens

const W = 1200
const H = 630
const BAR = 4
const AVATAR_SIZE = 172
const AVATAR_X = 72
const AVATAR_Y = Math.round((H - AVATAR_SIZE) / 2)

const truncate = (s: string, n: number) => (s.length > n ? `${s.slice(0, n - 1)}…` : s)
const escXml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const name = escXml(truncate(profile.name ?? '', 28))
const handle = escXml(`@${profile.username ?? ''}`)
const bio = profile.bio ? escXml(truncate(profile.bio, 68)) : ''
const siteUrl = seo?.canonicalUrl ? escXml(seo.canonicalUrl.replace(/^https?:\/\//, '')) : ''

let avatarDefs = ''
let avatarTag = ''
const avatarUrl = profile.avatar?.startsWith('http') ? profile.avatar : null
if (avatarUrl) {
  try {
    const res = await fetch(avatarUrl)
    if (res.ok) {
      const buf = Buffer.from(await res.arrayBuffer())
      const resized = await sharp(buf)
        .resize(AVATAR_SIZE, AVATAR_SIZE, { fit: 'cover' })
        .png()
        .toBuffer()
      const b64 = resized.toString('base64')
      const cx = AVATAR_X + AVATAR_SIZE / 2
      const cy = AVATAR_Y + AVATAR_SIZE / 2
      const r = AVATAR_SIZE / 2
      avatarDefs = `<clipPath id="av"><circle cx="${cx}" cy="${cy}" r="${r}"/></clipPath>`
      avatarTag = `
  <image href="data:image/png;base64,${b64}" x="${AVATAR_X}" y="${AVATAR_Y}" width="${AVATAR_SIZE}" height="${AVATAR_SIZE}" clip-path="url(#av)" preserveAspectRatio="xMidYMid slice"/>
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${accent}" stroke-opacity="0.4" stroke-width="2"/>`
    }
  } catch {
    // fetch failed - render without avatar
  }
}

const hasAvatar = avatarTag !== ''
const CONTENT_X = hasAvatar ? AVATAR_X + AVATAR_SIZE + 52 : 80
const centerY = H / 2

const NAME_Y = centerY - 60
const HANDLE_Y = NAME_Y + 56
const BIO_Y = HANDLE_Y + 44
const URL_Y = H - 38

const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   stop-color="${from}"/>
      <stop offset="50%"  stop-color="${via}"/>
      <stop offset="100%" stop-color="${to}"/>
    </linearGradient>
    ${avatarDefs}
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  ${avatarTag}

  <rect width="${W}" height="${BAR}" fill="${accent}"/>
  <rect y="${H - BAR}" width="${W}" height="${BAR}" fill="${accent}"/>

  <text x="${CONTENT_X}" y="${NAME_Y}"
    font-family="system-ui,-apple-system,sans-serif"
    font-size="50" font-weight="700" fill="white">${name}</text>

  <text x="${CONTENT_X}" y="${HANDLE_Y}"
    font-family="system-ui,-apple-system,sans-serif"
    font-size="25" font-weight="400" fill="${accent}" opacity="0.9">${handle}</text>

  ${bio ? `<text x="${CONTENT_X}" y="${BIO_Y}" font-family="system-ui,-apple-system,sans-serif" font-size="20" font-weight="300" fill="rgba(255,255,255,0.52)">${bio}</text>` : ''}
  ${siteUrl ? `<text x="${CONTENT_X}" y="${URL_Y}" font-family="system-ui,-apple-system,sans-serif" font-size="17" font-weight="400" fill="rgba(255,255,255,0.28)">${siteUrl}</text>` : ''}
</svg>`

const dst = 'public/og.webp'
try {
  await sharp(Buffer.from(svg)).webp({ quality: 90 }).toFile(dst)
  const { size } = await import('node:fs').then((m) => m.promises.stat(dst))
  console.log(`\n🖼  OG image → ${dst}  (${Math.round(size / 1024)}KB)\n`)
} catch (e) {
  if (e instanceof Error) console.warn(`⚠️  Could not generate OG image: ${e.message}`)
}
