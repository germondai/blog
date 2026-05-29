// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 germondai - https://github.com/germondai

import { bg } from './translations/bg'
import { cs } from './translations/cs'
import { da } from './translations/da'
import { de } from './translations/de'
import { en, type Translations } from './translations/en'
import { es } from './translations/es'
import { fi } from './translations/fi'
import { fr } from './translations/fr'
import { hi } from './translations/hi'
import { hu } from './translations/hu'
import { id } from './translations/id'
import { it } from './translations/it'
import { ja } from './translations/ja'
import { ko } from './translations/ko'
import { nl } from './translations/nl'
import { no } from './translations/no'
import { pl } from './translations/pl'
import { pt } from './translations/pt'
import { ro } from './translations/ro'
import { ru } from './translations/ru'
import { sk } from './translations/sk'
import { sv } from './translations/sv'
import { tr } from './translations/tr'
import { uk } from './translations/uk'
import { vi } from './translations/vi'
import { zh } from './translations/zh'

export type { Translations }

const translations: Record<string, Translations> = {
  en,
  cs,
  sk,
  pl,
  de,
  fr,
  es,
  pt,
  it,
  nl,
  sv,
  no,
  da,
  fi,
  hu,
  ro,
  bg,
  ru,
  uk,
  zh,
  ja,
  ko,
  id,
  vi,
  hi,
  tr,
}

export const t = (lang: string): Translations => translations[lang] ?? en
