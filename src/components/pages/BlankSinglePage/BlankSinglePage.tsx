import { FC } from 'react'
//
import { Template, Molecules, Atoms } from '@/components'

// Interface

//  Style

// Presenter

export const BlankSinglePage: FC = () => {
  return (
    <Template.DashboardTemplate
      state={{ currentMenu: 'PAGES', currentNestMenu: 'PAGES_BLANK_SINGLE' }}
    >
      <Molecules.DashboardPageHeader
        state={{
          breadcrumbs: [
            {
              localeKeyPrefix: 'breadcrumbs.dashboard',
              path: '/dashboard'
            },
            {
              localeKeyPrefix: 'breadcrumbs.blankSingle',
              path: '/dashboard/pages/blank-single',
              current: true
            }
          ]
        }}
      />

      <Atoms.Box component="section">
        <Atoms.Paper elevation={3}>
          <Atoms.Box sx={{ padding: 3 }}>
            <Atoms.Typography component="h3" variant="h6">
              Empty Section Header
            </Atoms.Typography>
          </Atoms.Box>
          <Atoms.Divider />
          <Atoms.Box sx={{ padding: 3 }}>Empty Section Body</Atoms.Box>
          <Atoms.Divider />
          <Atoms.Box sx={{ padding: 3 }}>Empty Section Footer</Atoms.Box>
        </Atoms.Paper>
      </Atoms.Box>
    </Template.DashboardTemplate>
  )
}
