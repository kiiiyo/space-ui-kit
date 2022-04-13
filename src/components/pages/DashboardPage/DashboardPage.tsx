import { FC } from 'react'
//
import { Template, Atoms } from '@/components'

// Interface

//  Style

// Presenter

export const DashboardPage: FC = () => {
  return (
    <Template.DashboardTemplate state={{ currentMenu: 'DASHBOARD' }}>
      <Atoms.Box sx={{ height: 960, background: '#ddd' }}>
        DashboardPage
      </Atoms.Box>
    </Template.DashboardTemplate>
  )
}
