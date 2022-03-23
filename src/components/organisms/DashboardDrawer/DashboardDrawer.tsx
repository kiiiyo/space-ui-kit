import { FC, useCallback } from 'react'
import { alpha } from '@mui/material/styles'
import { css, Theme } from '@emotion/react'
import SimpleBarReact from 'simplebar-react'
//
import type { TMenuGroup, TMenuGroupKey } from '@/types/dashboard-menu'
import { Constant } from '@/configs'
import { Hooks } from '@/features'
import { Molecules, Atoms } from '@/components'

// Interface
export type DashboardDrawerProps = {
  state: {
    currentMenu: TMenuGroupKey
    currentNestMenu?: string
  }
}

export type DashboardDrawerPresenterProps = {
  state: {
    isDrawerDisplayOpen: boolean
    currentMenu: TMenuGroupKey
    currentNestMenu?: string
    menuGroup: Array<TMenuGroup>
  }
  actions: {
    onDrawrCloseClick: () => void
  }
}

//  Style
const scrollbarStyle = () =>
  css({
    height: '100%',
    overflow: 'hidden'
  })

const simpleBarStyle = (theme: Theme) =>
  css({
    maxHeight: '100%',

    '& .simplebar-scrollbar': {
      '&:before': {
        backgroundColor: alpha(theme.palette.grey[600], 0.48)
      },
      '&.simplebar-visible:before': {
        opacity: 1
      }
    },
    '& .simplebar-track.simplebar-vertical': {
      width: 10
    },
    '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
      height: 6
    },
    '& .simplebar-mask': {
      zIndex: 'inherit'
    }
  })

const brandLogoStyle = (theme: Theme) =>
  css({
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  })

// Container
export const DashboardDrawer: FC<DashboardDrawerProps> = ({
  state: { currentMenu, currentNestMenu }
}) => {
  const menuGroup = Constant.DASHBOARD_MENU

  const {
    state: { dashboardDrawerDisplayMode },
    actions: { handleSetDashboardDrawerDisplay }
  } = Hooks.App.useApp()

  const onDrawrCloseClick = useCallback(() => {
    handleSetDashboardDrawerDisplay('hide')
  }, [handleSetDashboardDrawerDisplay])

  return (
    <DashboardDrawerPresenter
      state={{
        currentMenu,
        currentNestMenu,
        menuGroup,
        isDrawerDisplayOpen:
          dashboardDrawerDisplayMode === 'show' ? true : false
      }}
      actions={{ onDrawrCloseClick }}
    />
  )
}

// Presenter
export const DashboardDrawerPresenter: FC<DashboardDrawerPresenterProps> = ({
  state: { currentMenu, currentNestMenu, menuGroup, isDrawerDisplayOpen },
  actions: { onDrawrCloseClick }
}) => {
  return (
    <Atoms.Drawer
      open={isDrawerDisplayOpen}
      onClose={onDrawrCloseClick}
      PaperProps={{
        sx: {
          width: Constant.DASHBOARD_SIDEBAR_WIDTH,
          bgcolor: 'background.default'
        }
      }}
    >
      <Atoms.Box component="div" css={scrollbarStyle}>
        <SimpleBarReact css={simpleBarStyle}>
          <Atoms.Box component="div">
            {/* BrandLogo */}
            <Atoms.Box css={brandLogoStyle}>
              <Atoms.BrandLogo
                state={{
                  symbol: Constant.BRAND_SYMBOL,
                  typography: Constant.BRAND_TYPOGRAPHY
                }}
              />
            </Atoms.Box>
            <Molecules.DashboardMenu
              state={{ currentMenu, currentNestMenu, menuGroup }}
            />
          </Atoms.Box>
        </SimpleBarReact>
      </Atoms.Box>
    </Atoms.Drawer>
  )
}
