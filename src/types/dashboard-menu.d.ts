export type TMenuGroupKey = 'DASHBOARD' | 'PAGES'

export type TNestMenuKey = 'PAGES_BLANK_SINGLE' | 'PAGES_BLANK_NEST'

import type { TIconKind } from '@/types/icon'
export type TMenuSingle = {
  kind: 'single'
  iconKind: TIconKind
  localeKeyPrefix: string
  path: string
}

export type TMenuNestItems = {
  nestMenuKey: string
  localeKeyPrefix: string
  path: string
}

export type TMenuNest = {
  kind: 'nest'
  localeKeyPrefix: string
  iconKind: TIconKind
  nestMenu: Array<TMenuNestItems>
}

export type TMenuGroup = {
  localeKeyPrefix: string
  menuGroupKey: TMenuGroupKey
  menuItems: Array<TMenuSingle | TMenuNest>
}
