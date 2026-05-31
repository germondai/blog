// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai

import { atom } from 'nanostores'

export interface FlareEvent {
  x: number
  y: number
  id: number
}

export const $flares = atom<FlareEvent[]>([])

export const triggerFlare = (x: number, y: number) =>
  $flares.set([...$flares.get(), { x, y, id: Date.now() }])

export const clearFlare = (id: number) => $flares.set($flares.get().filter((e) => e.id !== id))
