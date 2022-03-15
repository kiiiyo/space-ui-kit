import { FC } from 'react'
import { alpha } from '@mui/material/styles'
import { css, Theme } from '@emotion/react'
import SimpleBarReact from 'simplebar-react'
//
import { Constant } from '@/configs'
import { Atoms } from '@/components'

// Interface

//  Style

const DRAWER_WIDTH = 280

const containerStyle = (theme: Theme) =>
  css({
    [theme.breakpoints.up('lg')]: {
      flexShrink: 1,
      width: DRAWER_WIDTH
    }
  })

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

export const DashboardSidebarPresenter: FC = () => {
  return (
    <Atoms.Box component="div" css={containerStyle}>
      <Atoms.Drawer
        variant="persistent"
        open={true}
        PaperProps={{
          sx: {
            width: DRAWER_WIDTH,
            bgcolor: 'background.default',
            borderRightStyle: 'dashed'
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
                  <Atoms.ListSubheader component="div">
                    Menue
                  </Atoms.ListSubheader>
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
    </Atoms.Box>
  )
}

// Container
export const DashboardSidebar: FC = () => {
  return <DashboardSidebarPresenter />
}
