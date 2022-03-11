import { FC, useCallback } from 'react'
import { css, Theme } from '@emotion/react'
//import { grey } from '@mui/material/colors'
//
import { Hooks } from '@/features'
import { Atoms } from '@/components'

// Interface

export type SignInSectionPresenterProps = {
  actions: {
    onSignInButtonClick: () => void
  }
}

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

export const SignInSectionPresenter: FC<SignInSectionPresenterProps> = ({
  actions: { onSignInButtonClick }
}) => {
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
          onClick={onSignInButtonClick}
        >
          Sign in
        </Atoms.Button>
      </Atoms.Box>
    </Atoms.Paper>
  )
}

// Container
export const SignInSection: FC = () => {
  const {
    actions: { loginWithRedirect }
  } = Hooks.Auth.useAuth()

  const onSignInButtonClick = useCallback(() => {
    loginWithRedirect({ ui_locales: 'ja' })
  }, [loginWithRedirect])

  return <SignInSectionPresenter actions={{ onSignInButtonClick }} />
}
