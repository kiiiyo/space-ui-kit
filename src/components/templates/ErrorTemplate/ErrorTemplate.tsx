import { FC, useCallback } from 'react'
import { css, Theme } from '@emotion/react'
import { useNavigate } from 'react-router-dom'
//
import { Constant } from '@/configs'
import { Hooks } from '@/features'
import { Atoms, Organisms } from '@/components'

// Interface
export type TErrorTemplatePresenterProps = {
  actions: {
    onGoToHomeClick: () => void
  }
}

//  Style
const containerStyle = (theme: Theme) =>
  css({
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    backgroundColor: theme.palette.background.default
  })

const brandLogoPosStyle = () =>
  css({
    position: 'absolute',
    top: 16,
    left: 24
  })

const brandLinkStyle = (theme: Theme) =>
  css({
    textDecoration: 'none',
    cursor: 'pointer',
    color:
      theme.palette.mode === 'dark'
        ? theme.palette.common.white
        : theme.palette.common.black,
    '&:link': {
      textDecoration: 'none'
    },
    '&:visited': {
      textDecoration: 'none'
    },
    '&:hover': {
      textDecoration: 'none'
    },
    '&:active': {
      textDecoration: 'none'
    }
  })

// Container
export const ErrorTemplate: FC = ({ children }) => {
  // TODO: Refactoring
  const navigate = useNavigate()
  const {
    state: { locale }
  } = Hooks.Locale.useLocale()

  const onGoToHomeClick = useCallback(() => {
    navigate(`/${locale}/`)
  }, [locale, navigate])

  return (
    <ErrorTemplatePresenter actions={{ onGoToHomeClick }}>
      {children}
    </ErrorTemplatePresenter>
  )
}

// Presenter
export const ErrorTemplatePresenter: FC<TErrorTemplatePresenterProps> = ({
  actions: { onGoToHomeClick },
  children
}) => {
  return (
    <Atoms.Box css={containerStyle}>
      <Atoms.Box css={brandLogoPosStyle}>
        <Atoms.Box component="a" css={brandLinkStyle} onClick={onGoToHomeClick}>
          <Atoms.BrandLogo
            state={{
              symbol: Constant.BRAND_SYMBOL,
              typography: <span>{Constant.BRAND_TYPOGRAPHY}</span>
            }}
          />
        </Atoms.Box>
      </Atoms.Box>
      <Organisms.SettingPanel />
      {children}
    </Atoms.Box>
  )
}
