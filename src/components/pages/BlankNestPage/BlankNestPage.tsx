import { FC } from 'react'
//
import { Template, Atoms } from '@/components'

// Interface

//  Style

// Presenter

export const BlankNestPage: FC = () => {
  return (
    <Template.DashboardTemplate
      state={{ currentMenu: 'PAGES', currentNestMenu: 'PAGES_BLANK_NEST' }}
    >
      <Atoms.Box sx={{ height: 960, background: '#ddd' }}>
        BlankNestPage
      </Atoms.Box>
    </Template.DashboardTemplate>
  )
}
