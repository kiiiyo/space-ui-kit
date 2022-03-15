import { FC, ReactNode } from 'react'
import { css } from '@emotion/react'
//
import { Organisms, Atoms } from '@/components'
//

// Interface
export type TDashboardTemplateProps = {
  headerBar?: ReactNode
}

//  Style
const containerStyle = () =>
  css({
    display: 'flex',
    minHeight: '100%',
    overflow: 'hidden'
  })

export const DashboardTemplate: FC<TDashboardTemplateProps> = ({
  headerBar,
  children
}) => {
  return (
    <Atoms.Box css={containerStyle}>
      {headerBar && { headerBar }}
      <Organisms.DashboardSidebar />
      <Atoms.Box component="div">
        <Atoms.Box component="main">{children}</Atoms.Box>
      </Atoms.Box>
    </Atoms.Box>
  )
}
