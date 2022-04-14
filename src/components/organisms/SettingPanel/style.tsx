import { css, Theme } from '@emotion/react'
import { alpha } from '@mui/material'

export const typographyStyle = (theme: Theme) =>
  css({
    color:
      theme.palette.mode === 'light'
        ? theme.palette.grey[800]
        : theme.palette.grey[100]
  })

export const posStyle = (theme: Theme) =>
  css({
    position: 'fixed',
    top: '50%',
    right: 0,
    marginTop: -28,
    backgroundColor: `${alpha(theme.palette.background.default, 0.8)}`,
    zIndex: 12001,
    borderRadius: '28px 0px 0px 28px',
    boxShadow: 'rgb(99 115 129 / 36%) -12px 12px 32px -4px'
  })

export const buttonStyle = (theme: Theme) =>
  css({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    padding: theme.spacing(2)
  })

export const panelContainerStyle = (theme: Theme) =>
  css({
    backdropFilter: 'blur(6px)',
    backgroundColor: `${alpha(theme.palette.background.default, 0.8)}`,
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    width: 260,
    zIndex: 1203,
    borderRadius: 12,
    boxShadow: 'rgb(145 158 171 / 16%) -24px 12px 32px -4px',
    margin: theme.spacing(2)
  })

export const panelHeaderStyle = (theme: Theme) =>
  css({
    display: 'flex',

    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `${theme.spacing(2)} ${theme.spacing(1)} ${theme.spacing(
      2
    )} ${theme.spacing(3)}`
  })

export const panelBodyStyle = (theme: Theme) =>
  css({
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(3)
  })

export const panelSectionStyle = (theme: Theme) =>
  css({
    marginTop: theme.spacing(2)
  })

export const panelRowStyle = () =>
  css({
    display: 'flex',
    boxSizing: 'border-box',
    flexFlow: 'row wrap',
    marginTop: '-24px',
    marginLeft: '-24px',
    width: 'calc(100% + 24px)'
  })

export const panelRowItemStyle = () =>
  css({
    paddingTop: 24,
    paddingLeft: 24,
    flexBasis: '50%',
    flexGrow: 0,
    maxWidth: '50%'
  })

export const buttonLightModeStyle = (theme: Theme) =>
  css({
    position: 'relative',
    boxSizing: 'border-box',
    outline: 0,
    margin: 0,
    padding: 0,
    cursor: 'pointer',
    verticalAlign: 'middle',
    textDecoration: 'none',
    display: 'flex',
    width: '100%',
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(32, 101, 209)'
        : 'rgb(99, 115, 129)',
    backgroundColor: '#fff',
    border: '1px solid rgba(145, 158, 171, 0.12)'
  })

export const buttonDarkModeStyle = (theme: Theme) =>
  css({
    position: 'relative',
    boxSizing: 'border-box',
    outline: 0,
    margin: 0,
    padding: 0,
    cursor: 'pointer',
    verticalAlign: 'middle',
    textDecoration: 'none',
    display: 'flex',
    width: '100%',
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(99, 115, 129)'
        : 'rgb(32, 101, 209)',
    backgroundColor: 'rgb(33, 43, 54)',
    border: '1px solid rgba(145, 158, 171, 0.12)'
  })
