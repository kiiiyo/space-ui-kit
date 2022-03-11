import { FC } from 'react'
import { css, Theme } from '@emotion/react'
//
import { Constant } from '@/configs'
import { Atoms } from '@/components'

// Interface
export type State = {
  colorMode: 'light' | 'dark'
}

export type Actions = {
  onToggleColorModeClick: () => void
}

export type THeaderBarPresenterProps = {
  state: State
  actions: Actions
}

//  Style
const innerStyle = (theme: Theme) =>
  css({
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(8)
  })

const footerDescriptionStyle = (theme: Theme) =>
  css({
    marginTop: theme.spacing(2),
    lineHeight: 1.8
  })

const footerMenuContainerStyle = (theme: Theme) =>
  css({
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      display: 'block'
    }
  })

const footerMenuStyle = (theme: Theme) =>
  css({
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(4)
    }
  })

const footerMenuTitleStyle = () =>
  css({
    margin: 0,
    fontWeight: 700,
    fontSize: '0.75rem',
    lineHeight: 1.5
  })

const footerMenuLinkStyle = (theme: Theme) =>
  css({
    margin: 0,
    marginTop: theme.spacing(2),
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: 1.5,
    display: 'block'
  })

// Presenter

export const GeneralFooterPresenter: FC = () => {
  return (
    <Atoms.Box>
      <Atoms.Container>
        <Atoms.Box css={innerStyle}>
          <Atoms.Grid container spacing={2}>
            <Atoms.Grid item xs={12} md={4}>
              {/* BrandLogo */}
              <Atoms.BrandLogo
                state={{
                  symbol: Constant.BRAND_SYMBOL,
                  typography: Constant.BRAND_TYPOGRAPHY
                }}
              />
              <Atoms.Typography css={footerDescriptionStyle} component="p">
                {Constant.SITE_DESCRIPTION}
              </Atoms.Typography>
            </Atoms.Grid>
            <Atoms.Grid item xs={12} md={6}>
              <Atoms.Box css={footerMenuContainerStyle}>
                <Atoms.Box css={footerMenuStyle}>
                  <Atoms.Typography
                    css={footerMenuTitleStyle}
                    component="p"
                    variant="overline"
                  >
                    メニュー
                  </Atoms.Typography>
                  <Atoms.Typography
                    css={footerMenuLinkStyle}
                    component="a"
                    variant="body2"
                    href="#"
                  >
                    テキストリンク
                  </Atoms.Typography>
                  <Atoms.Typography
                    css={footerMenuLinkStyle}
                    component="a"
                    variant="body2"
                    href="#"
                  >
                    テキストリンク
                  </Atoms.Typography>
                  <Atoms.Typography
                    css={footerMenuLinkStyle}
                    component="a"
                    variant="body2"
                    href="#"
                  >
                    テキストリンク
                  </Atoms.Typography>
                </Atoms.Box>
                <Atoms.Box css={footerMenuStyle}>
                  <Atoms.Typography
                    css={footerMenuTitleStyle}
                    component="p"
                    variant="overline"
                  >
                    メニュー
                  </Atoms.Typography>
                  <Atoms.Typography
                    css={footerMenuLinkStyle}
                    component="a"
                    variant="body2"
                    href="#"
                  >
                    テキストリンク
                  </Atoms.Typography>
                  <Atoms.Typography
                    css={footerMenuLinkStyle}
                    component="a"
                    variant="body2"
                    href="#"
                  >
                    テキストリンク
                  </Atoms.Typography>
                  <Atoms.Typography
                    css={footerMenuLinkStyle}
                    component="a"
                    variant="body2"
                    href="#"
                  >
                    テキストリンク
                  </Atoms.Typography>
                </Atoms.Box>
                <Atoms.Box css={footerMenuStyle}>
                  <Atoms.Typography
                    css={footerMenuTitleStyle}
                    component="p"
                    variant="overline"
                  >
                    メニュー
                  </Atoms.Typography>
                  <Atoms.Typography
                    css={footerMenuLinkStyle}
                    component="a"
                    variant="body2"
                    href="#"
                  >
                    テキストリンク
                  </Atoms.Typography>
                  <Atoms.Typography
                    css={footerMenuLinkStyle}
                    component="a"
                    variant="body2"
                    href="#"
                  >
                    テキストリンク
                  </Atoms.Typography>
                  <Atoms.Typography
                    css={footerMenuLinkStyle}
                    component="a"
                    variant="body2"
                    href="#"
                  >
                    テキストリンク
                  </Atoms.Typography>
                </Atoms.Box>
              </Atoms.Box>
            </Atoms.Grid>
          </Atoms.Grid>

          <Atoms.Divider sx={{ my: 4 }} />
          <Atoms.Copyright />
        </Atoms.Box>
      </Atoms.Container>
    </Atoms.Box>
  )
}

// Container
export const GeneralFooter: FC = () => {
  return <GeneralFooterPresenter />
}
