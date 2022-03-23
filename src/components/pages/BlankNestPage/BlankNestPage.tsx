import { FC } from 'react'
//
import { Template, Molecules, Atoms } from '@/components'

// Interface

export type BlankNestPageProps = {
  state: {
    currentPanel: string
  }
  actions: {
    handleCurrentPanel: (value: string) => void
  }
}

// Presenter

export const BlankNestPage: FC<BlankNestPageProps> = ({
  state: { currentPanel },
  actions: { handleCurrentPanel }
}) => {
  return (
    <Template.DashboardTemplate
      state={{ currentMenu: 'PAGES', currentNestMenu: 'PAGES_BLANK_NEST' }}
    >
      <Atoms.Box sx={{ marginBottom: 3 }}>
        <Molecules.DashboardPageHeader
          state={{
            pageLocaleKey: 'page.blankNestPage',
            breadcrumbs: [
              {
                localeKeyPrefix: 'breadcrumbs.dashboard',
                path: '/dashboard'
              },
              {
                localeKeyPrefix: 'breadcrumbs.blankNest',
                path: '/dashboard/pages/blank-nest',
                current: true
              }
            ]
          }}
        />
      </Atoms.Box>
      <>
        <Atoms.Box sx={{ marginBottom: 4 }}>
          <Molecules.GeneralTabs
            state={{
              defaultTab: 'tab1',
              tabsCollection: [
                {
                  value: 'tab1',
                  label: 'Tab1'
                },
                {
                  value: 'tab2',
                  label: 'Tab2'
                },
                {
                  value: 'tab3',
                  label: 'Tab3'
                }
              ]
            }}
            actions={{
              handleTabsChange: (value) => {
                handleCurrentPanel(value)
              }
            }}
          />
          <Atoms.Divider />
        </Atoms.Box>
        {currentPanel === 'tab1' && (
          <Atoms.Box component="section">
            <Atoms.Paper elevation={3}>
              <Atoms.Box sx={{ padding: 3 }}>
                <Atoms.Typography component="h3" variant="h6">
                  Tab1 Section Header
                </Atoms.Typography>
              </Atoms.Box>
              <Atoms.Divider />
              <Atoms.Box sx={{ padding: 3 }}>Tab1 Section Body</Atoms.Box>
              <Atoms.Divider />
              <Atoms.Box sx={{ padding: 3 }}>Tab1 Section Footer</Atoms.Box>
            </Atoms.Paper>
          </Atoms.Box>
        )}
        {currentPanel === 'tab2' && (
          <Atoms.Box component="section">
            <Atoms.Paper elevation={3}>
              <Atoms.Box sx={{ padding: 3 }}>
                <Atoms.Typography component="h3" variant="h6">
                  Tab2 Section Header
                </Atoms.Typography>
              </Atoms.Box>
              <Atoms.Divider />
              <Atoms.Box sx={{ padding: 3 }}>Tab2 Section Body</Atoms.Box>
              <Atoms.Divider />
              <Atoms.Box sx={{ padding: 3 }}>Tab2 Section Footer</Atoms.Box>
            </Atoms.Paper>
          </Atoms.Box>
        )}
        {currentPanel === 'tab3' && (
          <Atoms.Box component="section">
            <Atoms.Paper elevation={3}>
              <Atoms.Box sx={{ padding: 3 }}>
                <Atoms.Typography component="h3" variant="h6">
                  Tab3 Section Header
                </Atoms.Typography>
              </Atoms.Box>
              <Atoms.Divider />
              <Atoms.Box sx={{ padding: 3 }}>Tab3 Section Body</Atoms.Box>
              <Atoms.Divider />
              <Atoms.Box sx={{ padding: 3 }}>Tab3 Section Footer</Atoms.Box>
            </Atoms.Paper>
          </Atoms.Box>
        )}
      </>
    </Template.DashboardTemplate>
  )
}
