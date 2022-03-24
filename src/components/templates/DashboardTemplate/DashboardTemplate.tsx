import { FC } from 'react'
import { css, Theme } from '@emotion/react'
//
import type { TMenuGroupKey, TNestMenuKey } from '@/types/dashboard-menu'
import { Hooks } from '@/features'
import { Organisms, Atoms } from '@/components'

// Interface
export type DashboardTemplatePresenterProps = {
  state: {
    isMobile: boolean
    currentMenu: TMenuGroupKey
    currentNestMenu?: string
  }
}

export type TDashboardTemplateProps = {
  state: {
    currentMenu: TMenuGroupKey
    currentNestMenu?: TNestMenuKey
  }
}

//  Style
const containerStyle = (theme: Theme) =>
  css({
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      minHeight: '100%',
      overflow: 'hidden'
    }
  })

const wrapperStyle = (theme: Theme) =>
  css({
    [theme.breakpoints.up('md')]: {
      width: 'calc(100% - 280px)'
    }
  })

const mainStyle = (theme: Theme) =>
  css({
    paddingTop: 88,
    paddingBottom: 64,
    [theme.breakpoints.up('md')]: {
      paddingTop: 116,
      paddingBottom: 88
    }
  })

// Container
export const DashboardTemplate: FC<TDashboardTemplateProps> = ({
  state: { currentMenu, currentNestMenu },
  children
}) => {
  const {
    state: { isMobile }
  } = Hooks.App.useApp()

  return (
    <DashboardTemplatePresenter
      state={{ isMobile, currentMenu, currentNestMenu }}
    >
      {children}
    </DashboardTemplatePresenter>
  )
}

// Presenter
export const DashboardTemplatePresenter: FC<
  DashboardTemplatePresenterProps
> = ({ children, state: { isMobile, currentMenu, currentNestMenu } }) => {
  return (
    <Atoms.Box css={containerStyle}>
      <Organisms.DashboardHeaderBar />
      {!isMobile && (
        <Organisms.DashboardSidebar state={{ currentMenu, currentNestMenu }} />
      )}
      {isMobile && (
        <Organisms.DashboardDrawer state={{ currentMenu, currentNestMenu }} />
      )}
      <Organisms.SettingPanel />
      <Atoms.Box css={wrapperStyle} component="div">
        <Atoms.Box css={mainStyle} component="main">
          <Atoms.Container>{children}</Atoms.Container>
        </Atoms.Box>
      </Atoms.Box>
    </Atoms.Box>
  )
}
