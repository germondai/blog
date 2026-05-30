// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai

const WORDS_PER_MINUTE = 200

export const calculateReadingTime = (text: string, wpm = WORDS_PER_MINUTE): number => {
  const words = text.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / wpm))
}
