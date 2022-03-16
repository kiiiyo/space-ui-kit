import { FC, ReactNode } from 'react'
import { css, Theme } from '@emotion/react'
//
import { Hooks } from '@/features'
import { Organisms, Atoms } from '@/components'

// Interface
export type DashboardTemplatePresenterProps = {
  state: {
    isMobile: boolean
  }
}

export type TDashboardTemplateProps = {
  headerBar?: ReactNode
}

//  Style
const containerStyle = (theme: Theme) =>
  css({
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      minHeight: '100%',
      overflow: 'hidden'
    }
  })

const mainStyle = () =>
  css({
    paddingTop: 88,
    paddingBottom: 88
  })

export const DashboardTemplatePresenter: FC<
  DashboardTemplatePresenterProps
> = ({ children, state: { isMobile } }) => {
  return (
    <Atoms.Box css={containerStyle}>
      <Organisms.DashboardHeaderBar />
      {!isMobile && <Organisms.DashboardSidebar />}
      {isMobile && <Organisms.DashboardDrawer />}
      <Atoms.Box component="div">
        <Atoms.Box css={mainStyle} component="main">
          <Atoms.Container>{children}</Atoms.Container>
        </Atoms.Box>
      </Atoms.Box>
    </Atoms.Box>
  )
}

// Container
export const DashboardTemplate: FC<TDashboardTemplateProps> = ({
  children
}) => {
  const {
    state: { isMobile }
  } = Hooks.App.useApp()

  return (
    <DashboardTemplatePresenter state={{ isMobile }}>
      {children}
    </DashboardTemplatePresenter>
  )
}
