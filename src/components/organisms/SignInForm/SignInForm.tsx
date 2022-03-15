import { FC } from 'react'
import { css, Theme } from '@emotion/react'
import { blue } from '@mui/material/colors'
//
import { Atoms } from '@/components'

// Interface

//  Style

const containerStyle = (theme: Theme) =>
  css({
    padding: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
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

const headerStyle = (theme: Theme) =>
  css({
    marginBottom: theme.spacing(5)
  })

const titleStyle = (theme: Theme) =>
  css({
    fontSize: '1.5rem',
    marginBottom: '1rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem'
    }
  })

const alertStyle = (theme: Theme) =>
  css({
    marginBottom: theme.spacing(2)
  })

const textFieldStyle = () =>
  css({
    display: 'block',
    width: '100%'
  })

const formConfigStyle = (theme: Theme) =>
  css({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  })

const forgotPasswordLinkStyle = () =>
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

// Presenter

export const SignInFormPresenter: FC = () => {
  return (
    <Atoms.Paper css={containerStyle} elevation={0}>
      <Atoms.Box component="form" noValidate autoComplete="off">
        <Atoms.Box css={innerStyle}>
          <Atoms.Box css={headerStyle}>
            <Atoms.Typography css={titleStyle} component="h1">
              Sign in to 🚀 Space UI Kit
            </Atoms.Typography>
            <Atoms.Typography component="p">
              Enter your details below.
            </Atoms.Typography>
          </Atoms.Box>
          <Atoms.Box>
            <Atoms.Alert severity="info" css={alertStyle}>
              ID : demo@spaceui.kit / Password : demo1234
            </Atoms.Alert>
            <Atoms.Box css={textFieldStyle}>
              <Atoms.TextField
                label="ID"
                variant="outlined"
                margin="normal"
                fullWidth
              />
            </Atoms.Box>
            <Atoms.Box css={textFieldStyle}>
              <Atoms.TextField
                label="Password"
                variant="outlined"
                margin="normal"
                fullWidth
              />
            </Atoms.Box>
            <Atoms.Box>
              <Atoms.Box css={formConfigStyle}>
                <Atoms.FormControlLabel
                  control={<Atoms.Checkbox defaultChecked />}
                  label="Remember me"
                />
                <Atoms.Typography
                  component="a"
                  href="#"
                  css={forgotPasswordLinkStyle}
                >
                  Forgot password?
                </Atoms.Typography>
              </Atoms.Box>

              <Atoms.Button size="large" variant="contained" fullWidth>
                Login
              </Atoms.Button>
            </Atoms.Box>
          </Atoms.Box>
        </Atoms.Box>
      </Atoms.Box>
    </Atoms.Paper>
  )
}

// Container
export const SignInForm: FC = () => {
  return <SignInFormPresenter />
}
