import { FC } from 'react'
//
import { Template, Atoms } from '@/components'

// Interface

//  Style

// Presenter

export const BlankSinglePage: FC = () => {
  return (
    <Template.DashboardTemplate
      state={{ currentMenu: 'PAGES', currentNestMenu: 'PAGES_BLANK_SINGLE' }}
    >
      <Atoms.Box sx={{ height: 960, background: '#ddd' }}>
        BlankSinglePage
      </Atoms.Box>
    </Template.DashboardTemplate>
  )
}
