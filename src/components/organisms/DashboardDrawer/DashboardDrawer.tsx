import { FC, useCallback } from 'react'
import { alpha } from '@mui/material/styles'
import { css, Theme } from '@emotion/react'
import SimpleBarReact from 'simplebar-react'
//
import { Constant } from '@/configs'
import { Hooks } from '@/features'
import { Atoms } from '@/components'

// Interface

export type DashboardDrawerPresenterProps = {
  state: {
    isDrawerDisplayOpen: boolean
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

const innerStyle = () => css({})

const brandLogoStyle = (theme: Theme) =>
  css({
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  })

// Presenter

export const DashboardDrawerPresenter: FC<DashboardDrawerPresenterProps> = ({
  state: { isDrawerDisplayOpen },
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
          <Atoms.Box component="div" css={innerStyle}>
            {/* BrandLogo */}
            <Atoms.Box css={brandLogoStyle}>
              <Atoms.BrandLogo
                state={{
                  symbol: Constant.BRAND_SYMBOL,
                  typography: Constant.BRAND_TYPOGRAPHY
                }}
              />
            </Atoms.Box>
            <Atoms.List
              disablePadding
              component="nav"
              subheader={
                <Atoms.ListSubheader component="div">Menue</Atoms.ListSubheader>
              }
            >
              <Atoms.ListItemButton selected={true}>
                <Atoms.ListItemIcon>
                  <Atoms.LoginIcon />
                </Atoms.ListItemIcon>
                <Atoms.ListItemText primary="Inbox" />
              </Atoms.ListItemButton>
            </Atoms.List>
          </Atoms.Box>
        </SimpleBarReact>
      </Atoms.Box>
    </Atoms.Drawer>
  )
}

// Container
export const DashboardDrawer: FC = () => {
  const {
    state: { dashboardDrawerDisplayMode },
    actions: { handleSetDashboardDrawerDisplay }
  } = Hooks.App.useApp()

  const onDrawrCloseClick = useCallback(() => {
    handleSetDashboardDrawerDisplay('hide')
  }, [handleSetDashboardDrawerDisplay])
  // //

  return (
    <DashboardDrawerPresenter
      state={{
        isDrawerDisplayOpen:
          dashboardDrawerDisplayMode === 'show' ? true : false
      }}
      actions={{ onDrawrCloseClick }}
    />
  )
}
