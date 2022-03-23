// UI_KIT version
export const UI_KIT_VERSION = '0.0.1'

// Brand
export const BRAND_SYMBOL = '🚀'
export const BRAND_TYPOGRAPHY = 'Space UI Kit'
// Copyright

export const COPYRIGHT_YEAR = '2022'
export const COPYRIGHT_OWNER_NAME = '🚀 Space UI Kit.'

export const DASHBOARD_SIDEBAR_WIDTH = 280

export const MOBILE_BREAK_POINT_SIZE = 1024

import type { TMenuGroup } from '@/types/dashboard-menu'

export const DASHBOARD_MENU: Array<TMenuGroup> = [
  {
    menuGroupKey: 'DASHBOARD',
    localeKeyPrefix: 'dashboard.title',
    menuItems: [
      {
        kind: 'single',
        iconKind: 'DashboardIcon',
        localeKeyPrefix: 'dashboard.defaultLabel',
        path: '/dashboard'
      }
    ]
  },
  {
    menuGroupKey: 'PAGES',
    localeKeyPrefix: 'pages.title',
    menuItems: [
      {
        kind: 'nest',
        iconKind: 'WebIcon',
        localeKeyPrefix: 'pages.blankLabel',
        nestMenu: [
          {
            nestMenuKey: 'PAGES_BLANK_SINGLE',
            localeKeyPrefix: 'pages.blankSingleLabel',
            path: '/dashboard/pages/blank-single'
          },
          {
            nestMenuKey: 'PAGES_BLANK_NEST',
            localeKeyPrefix: 'pages.blankNestLabel',
            path: '/dashboard/pages/blank-nest'
          }
        ]
      }
    ]
  }
]
