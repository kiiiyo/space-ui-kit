import { css, Theme } from '@emotion/react'
import { grey } from '@mui/material/colors'

export const innerStyle = (theme: Theme) =>
  css({
    paddingTop: theme.spacing(10),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(5)
    }
  })

export const footerDescriptionStyle = (theme: Theme) =>
  css({
    marginTop: theme.spacing(2),
    lineHeight: 1.8
  })

export const footerMenuContainerStyle = (theme: Theme) =>
  css({
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'flex-start'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
  })

export const footerMenuStyle = (theme: Theme) =>
  css({
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(4),
      minWidth: '30%'
    }
  })

export const footerMenuTitleStyle = () =>
  css({
    margin: 0,
    fontWeight: 700,
    fontSize: '0.75rem',
    lineHeight: 1.5,
    textTransform: 'none'
  })

export const footerMenuLinkStyle = (theme: Theme) =>
  css({
    margin: 0,
    marginTop: theme.spacing(2),
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: 1.5,
    display: 'block',
    '&:link': {
      color: grey['700']
    },
    '&:visited': {
      color: grey['700']
    },
    '&:hover': {
      color: grey['600']
    },
    '&:active': {
      color: grey['800']
    }
  })

export const dividerStyle = (theme: Theme) =>
  css({
    marginTop: theme.spacing(5)
  })

export const copyrightStyle = (theme: Theme) =>
  css({
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(4)
  })
