import { FC } from 'react'
import { css, Theme } from '@emotion/react'
//import { grey } from '@mui/material/colors'
//
//import { Constant } from '@/configs'
import { Atoms } from '@/components'

// Interface

//  Style

const containerStyle = (theme: Theme) =>
  css({
    padding: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2)
    }
  })

const innerStyle = (theme: Theme) =>
  css({
    width: 460,
    [theme.breakpoints.down('md')]: {
      width: 512
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  })

const titleStyle = (theme: Theme) =>
  css({
    fontSize: '1.5rem',
    marginBottom: '1rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem'
    }
  })

const buttonStyle = (theme: Theme) =>
  css({
    width: '100%',
    textTransform: 'none',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  })

// Presenter

export const SignInSectionPresenter: FC = () => {
  return (
    <Atoms.Paper css={containerStyle} elevation={0}>
      <Atoms.Box css={innerStyle}>
        <Atoms.Typography css={titleStyle} component="h1">
          Sign in to 🚀 Space UI Kit
        </Atoms.Typography>
        <Atoms.Button
          variant="contained"
          endIcon={<Atoms.LoginIcon />}
          size="large"
          css={buttonStyle}
        >
          Sign in
        </Atoms.Button>
      </Atoms.Box>
    </Atoms.Paper>
  )
}

// Container
export const SignInSection: FC = () => {
  return <SignInSectionPresenter />
}
