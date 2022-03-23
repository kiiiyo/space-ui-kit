import { FC } from 'react'
//
import { Template, Molecules } from '@/components'

// Interface

//  Style

// Presenter

export const BlankNestPage: FC = () => {
  return (
    <Template.DashboardTemplate
      state={{ currentMenu: 'PAGES', currentNestMenu: 'PAGES_BLANK_NEST' }}
    >
      <Molecules.DashboardPageHeader
        state={{
          breadcrumbs: [
            {
              localeKeyPrefix: 'dashboard',
              path: '/dashboard'
            },
            {
              localeKeyPrefix: 'blankNest',
              path: '/dashboard/pages/blank-nest'
            }
          ]
        }}
      />
    </Template.DashboardTemplate>
  )
}
