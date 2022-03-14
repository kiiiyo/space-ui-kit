import { FC, ReactNode } from 'react'
//
import { Atoms } from '@/components'
//

// Interface

export type TDashboardTemplateProps = {
  headerBar?: ReactNode
}

//  Style

export const DashboardTemplate: FC<TDashboardTemplateProps> = ({
  headerBar,
  children
}) => {
  return (
    <Atoms.Box>
      {headerBar && { headerBar }}
      {children}
    </Atoms.Box>
  )
}
