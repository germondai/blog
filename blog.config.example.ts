// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai
//
// ─────────────────────────────────────────────────────────────────────────────
//  blog.config.example.ts - fully documented reference
//
//  1. Copy this file to blog.config.ts
//  2. Replace the values with your own
//  3. Run `bun dev` - that's it.
// ─────────────────────────────────────────────────────────────────────────────

import type { BlogConfig } from './src/types/config'

const config: BlogConfig = {
  // ── Profile ───────────────────────────────────────────────────────────────
  profile: {
    // Your display name - shown on the homepage and in SEO metadata
    name: 'Your Name',

    // Your @handle - shown below the name (without the @)
    username: 'yourusername',

    // Short one-liner bio shown on the homepage (optional)
    bio: 'What you do in one sentence.',

    // Avatar image - any public HTTPS URL or a path inside /public.
    // If omitted, falls back to initials derived from `name`.
    // The build script downloads and resizes this into favicon sizes automatically.
    avatar: 'https://github.com/yourusername.png',

    // Social icon row rendered beneath the bio (optional).
    // Supported platforms (25):
    //   Social:      twitter | bluesky | threads | instagram | facebook | reddit
    //   Video/Music: youtube | tiktok | twitch | spotify
    //   Professional:linkedin | github
    //   Messaging:   discord | telegram | whatsapp
    //   Creator:     patreon | kofi | producthunt
    //   Design:      dribbble | behance
    //   Dev:         devto | hashnode | medium | steam
    //   Generic:     website | email
    socials: [
      { platform: 'website', url: 'https://yoursite.com' },
      { platform: 'github', url: 'https://github.com/yourusername' },
      { platform: 'twitter', url: 'https://twitter.com/yourusername' },
      { platform: 'email', url: 'mailto:you@example.com' },
    ],
  },

  // ── Appearance ────────────────────────────────────────────────────────────
  appearance: {
    // Color theme - sets the background gradient and accent color.
    // 15 built-in options:
    //   Dark:     phantom |
    //             aurora | midnight | obsidian | cosmic | neon
    //   Warm:     rose | sunset | crimson | golden | candy
    //   Cool:     emerald | forest | ocean | arctic
    theme: 'phantom',

    // Font family (optional, default: 'Inter').
    // Downloaded at build time, self-hosted with CLS-safe fallback metrics.
    // No Google CDN requests at runtime.
    //
    // Available (41 fonts):
    //   Geometric sans:     Inter | Geist | Roboto | Montserrat | Urbanist |
    //                       Hanken_Grotesk | Bricolage_Grotesque
    //   Humanist sans:      Poppins | Nunito | Nunito_Sans | Raleway | Lato |
    //                       Open_Sans | Cabin | Work_Sans | Mulish | Quicksand |
    //                       Josefin_Sans | Figtree | Manrope
    //   Professional sans:  DM_Sans | Outfit | Plus_Jakarta_Sans | Rubik | Lexend
    //   Techy / disp. sans: Space_Grotesk | Syne | Barlow | Oxanium
    //   Monospace:          JetBrains_Mono | Fira_Code | IBM_Plex_Mono | Source_Code_Pro
    //   Serif:              Playfair_Display | Merriweather | Lora | EB_Garamond |
    //                       Cormorant_Garamond | DM_Serif_Display
    //   Display:            Bebas_Neue | Anton
    font: 'Inter',

    // Hex override for the accent color (optional).
    // Replaces the theme's default accent everywhere.
    // accentColor: '#ff6b6b',

    // Glass card background opacity - 0 (transparent) to 1 (opaque). Default: 0.08
    glassOpacity: 0.08,

    // Backdrop blur strength in px. Default: 20
    blur: 20,
  },

  // ── Effects ───────────────────────────────────────────────────────────────
  // Toggle each visual effect independently. All default to true.
  effects: {
    beams: true,        // sweeping light beams across the background (CSS only)
    particles: true,    // floating particle dots that drift upward (CSS only)
    lensFlares: true,   // radial light burst triggered on click (minimal JS)
    noiseTexture: true, // subtle SVG film-grain overlay
  },

  // ── Blog Settings ─────────────────────────────────────────────────────────
  blog: {
    // Number of posts per page on the blog list. Default: 10
    postsPerPage: 10,

    // Default/primary language. Default: 'en'
    defaultLanguage: 'en',

    // All supported languages. Add a language here then create
    // content in src/content/blog/<lang>/ to enable it.
    // Default: ['en']
    languages: ['en'],

    // Show estimated reading time on post cards and post pages. Default: true
    showReadingTime: true,

    // Show tag badges on post cards. Default: true
    showTags: true,
  },

  // ── SEO & GEO ─────────────────────────────────────────────────────────────
  seo: {
    // Browser tab <title> + OG/Twitter title.
    // Default: "{profile.name}'s Blog"
    title: "Your Name's Blog",

    // Meta description + OG/Twitter description.
    // Default: profile.bio
    description: 'Thoughts on whatever you write about.',

    // Optional static OG image URL.
    // Leave unset to use the auto-generated one from scripts/generate-icons.ts.
    // ogImage: 'https://example.com/custom-og.png',

    // Twitter/X @handle for twitter:creator meta tag (include the @)
    twitterHandle: '@yourusername',

    // Meta keywords array
    keywords: ['yourusername', 'blog', 'your topics'],

    // BCP 47 locale tag - sets OG locale and <html lang>. Default: 'en_US'
    locale: 'en_US',

    // Full canonical URL of your deployed site.
    // Used for sitemap, robots.txt, canonical <link>, JSON-LD, and RSS feed.
    canonicalUrl: 'https://blog.yourdomain.com',

    // Your PRIMARY website URL - tells search engines which domain is your main entity.
    // Auto-derived from canonicalUrl by stripping the first subdomain:
    //   blog.yourdomain.com → yourdomain.com
    // Set explicitly for country TLDs like .co.uk or .com.au.
    mainSiteUrl: 'https://yourdomain.com',
  },
}

export default config
