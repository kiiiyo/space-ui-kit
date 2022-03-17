import { FC, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { css, Theme } from '@emotion/react'
//
import { Constant } from '@/configs'
import { Hooks } from '@/features'
import { Atoms } from '@/components'

// Interface
export type TGeneralHeaderBarPresenterProps = {
  actions: {
    onSignInClick: () => void
  }
}

//  Style
const appBarStyle = (theme: Theme) =>
  css({
    color: theme.palette.mode === 'dark' ? '#fff' : theme.palette.grey['900'],
    boxShadow: 'none',
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.background.default : '#fff'
  })

const innerStyle = () =>
  css({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 64
  })

const actionStyle = () =>
  css({
    marginLeft: 'auto'
  })

const buttonStyle = () =>
  css({
    textTransform: 'none'
  })

// Presenter

export const GeneralHeaderBarPresenter: FC<TGeneralHeaderBarPresenterProps> = ({
  actions: { onSignInClick }
}) => {
  return (
    <Atoms.AppBar css={appBarStyle} position="static">
      <Atoms.Container>
        <Atoms.Box css={innerStyle}>
          <Atoms.BrandLogo
            state={{
              symbol: Constant.BRAND_SYMBOL,
              typography: Constant.BRAND_TYPOGRAPHY
            }}
          />

          <Atoms.Box css={actionStyle}>
            <Atoms.Button
              variant="contained"
              endIcon={<Atoms.LoginIcon />}
              size="large"
              css={buttonStyle}
              onClick={onSignInClick}
            >
              Sign in
            </Atoms.Button>
          </Atoms.Box>
        </Atoms.Box>
      </Atoms.Container>
    </Atoms.AppBar>
  )
}

// Container
export const GeneralHeaderBar: FC = () => {
  const navigate = useNavigate()
  const {
    state: { locale }
  } = Hooks.Locale.useLocale()

  const onSignInClick = useCallback(() => {
    navigate(`/${locale}/auth/login`)
  }, [navigate, locale])

  return <GeneralHeaderBarPresenter actions={{ onSignInClick }} />
}
