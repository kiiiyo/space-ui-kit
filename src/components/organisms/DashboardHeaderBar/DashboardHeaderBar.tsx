import { FC, useCallback } from 'react'
import { css, Theme } from '@emotion/react'
import { alpha } from '@mui/material/styles'
//
import { Hooks } from '@/features'
import { Atoms } from '@/components'

// Interface

export type DashboardHeaderBarPresenterProps = {
  actions: {
    onDrawrOpenClick: () => void
  }
}

//  Style

const containerStyle = (theme: Theme) =>
  css({
    backgroundImage: 'none',
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 'auto',
    right: 0,
    backdropFilter: 'blur(6px)',
    backgroundColor: alpha(theme.palette.background.default, 0.8),
    height: 64,
    zIndex: 1101,
    transition:
      'width 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, height 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    [theme.breakpoints.up('md')]: {
      height: 92,
      width: 'calc(100% - 281px)'
    }
  })

const innerStyle = () =>
  css({
    alignItems: 'center'
  })

const menuIconButtonStyle = (theme: Theme) =>
  css({
    marginRight: theme.spacing(1),
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'block'
    }
  })

// Presenter

export const DashboardHeaderBarPresenter: FC<
  DashboardHeaderBarPresenterProps
> = ({ actions: { onDrawrOpenClick } }) => {
  return (
    <Atoms.Paper component="header" css={containerStyle} elevation={0}>
      <Atoms.Toolbar css={innerStyle}>
        <Atoms.IconButton
          onClick={onDrawrOpenClick}
          css={menuIconButtonStyle}
          size="medium"
        >
          <Atoms.MenuIcon fontSize="medium" />
        </Atoms.IconButton>

        <Atoms.IconButton size="medium">
          <Atoms.SearchIcon fontSize="medium" />
        </Atoms.IconButton>
      </Atoms.Toolbar>
    </Atoms.Paper>
  )
}

// Container
export const DashboardHeaderBar: FC = () => {
  const {
    actions: { handleSetDashboardDrawerDisplay }
  } = Hooks.App.useApp()

  const onDrawrOpenClick = useCallback(() => {
    handleSetDashboardDrawerDisplay('show')
  }, [handleSetDashboardDrawerDisplay])

  return <DashboardHeaderBarPresenter actions={{ onDrawrOpenClick }} />
}
