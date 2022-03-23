import { alpha } from '@mui/material/styles'
import { css, Theme } from '@emotion/react'
//
import { Constant } from '@/configs'

export const containerStyle = (theme: Theme) =>
  css({
    [theme.breakpoints.up('md')]: {
      flexShrink: 1,
      width: Constant.DASHBOARD_SIDEBAR_WIDTH
    }
  })

export const scrollbarStyle = () =>
  css({
    height: '100%',
    overflow: 'hidden'
  })

export const simpleBarStyle = (theme: Theme) =>
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

export const brandLogoStyle = (theme: Theme) =>
  css({
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  })
