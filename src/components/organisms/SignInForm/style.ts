import { css, Theme } from '@emotion/react'
import { blue } from '@mui/material/colors'

export const containerStyle = (theme: Theme) =>
  css({
    padding: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    }
  })

export const innerStyle = (theme: Theme) =>
  css({
    width: 460,
    [theme.breakpoints.down('md')]: {
      width: 512
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  })

export const headerStyle = (theme: Theme) =>
  css({
    marginBottom: theme.spacing(5)
  })

export const titleStyle = (theme: Theme) =>
  css({
    fontSize: '1.5rem',
    marginBottom: '1rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem'
    }
  })

export const alertStyle = (theme: Theme) =>
  css({
    marginBottom: theme.spacing(2)
  })

export const textFieldStyle = () =>
  css({
    display: 'block',
    width: '100%'
  })

export const formConfigStyle = (theme: Theme) =>
  css({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  })

export const forgotPasswordLinkStyle = () =>
  css({
    marginLeft: 'auto',
    textDecoration: 'underline',
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: 1.5,
    display: 'block',
    '&:link': {
      color: blue['600']
    },
    '&:visited': {
      color: blue['600']
    },
    '&:hover': {
      color: blue['500']
    },
    '&:active': {
      color: blue['800']
    }
  })
