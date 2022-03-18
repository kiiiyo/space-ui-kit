import { FC } from 'react'
import { useTranslation } from 'react-i18next'
//
import { Constant } from '@/configs'
import { Atoms } from '@/components'
//
import {
  innerStyle,
  footerDescriptionStyle,
  footerMenuContainerStyle,
  footerMenuStyle,
  footerMenuTitleStyle,
  footerMenuLinkStyle,
  dividerStyle,
  copyrightStyle
} from './style'

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

// Presenter

export const GeneralFooterPresenter: FC = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'common.generalFooter'
  })
  return (
    <Atoms.Paper elevation={0}>
      <Atoms.Container>
        <Atoms.Box css={innerStyle}>
          <Atoms.Grid container spacing={2}>
            {/* Brand Start */}
            <Atoms.Grid item xs={12} md={4}>
              <Atoms.BrandLogo
                state={{
                  symbol: Constant.BRAND_SYMBOL,
                  typography: Constant.BRAND_TYPOGRAPHY
                }}
              />
              <Atoms.Typography css={footerDescriptionStyle} component="p">
                {t('siteDescription')}
              </Atoms.Typography>
              {/* Brand End */}
            </Atoms.Grid>
            <Atoms.Grid item xs={12} md={6}>
              {/* Footer Menu Start */}
              <Atoms.Box css={footerMenuContainerStyle}>
                <Atoms.Box css={footerMenuStyle}>
                  <Atoms.Typography
                    css={footerMenuTitleStyle}
                    component="p"
                    variant="overline"
                  >
                    {t('aboutMenu.title')}
                  </Atoms.Typography>
                  <Atoms.Typography
                    css={footerMenuLinkStyle}
                    component="a"
                    variant="body2"
                    href="#"
                  >
                    {t('aboutMenu.aboutUs')}
                  </Atoms.Typography>
                  <Atoms.Typography
                    css={footerMenuLinkStyle}
                    component="a"
                    variant="body2"
                    href="#"
                  >
                    {t('aboutMenu.contactUs')}
                  </Atoms.Typography>
                  <Atoms.Typography
                    css={footerMenuLinkStyle}
                    component="a"
                    variant="body2"
                    href="#"
                  >
                    {t('aboutMenu.faq')}
                  </Atoms.Typography>
                </Atoms.Box>
                <Atoms.Box css={footerMenuStyle}>
                  <Atoms.Typography
                    css={footerMenuTitleStyle}
                    component="p"
                    variant="overline"
                  >
                    {t('legalMenu.title')}
                  </Atoms.Typography>
                  <Atoms.Typography
                    css={footerMenuLinkStyle}
                    component="a"
                    variant="body2"
                    href="#"
                  >
                    {t('legalMenu.terms')}
                  </Atoms.Typography>
                  <Atoms.Typography
                    css={footerMenuLinkStyle}
                    component="a"
                    variant="body2"
                    href="#"
                  >
                    {t('legalMenu.privacyPolicy')}
                  </Atoms.Typography>
                </Atoms.Box>
                <Atoms.Box css={footerMenuStyle}>
                  <Atoms.Typography
                    css={footerMenuTitleStyle}
                    component="p"
                    variant="overline"
                  >
                    {t('linksMenu.title')}
                  </Atoms.Typography>
                  <Atoms.Typography
                    css={footerMenuLinkStyle}
                    component="a"
                    variant="body2"
                    href="#"
                  >
                    {t('linksMenu.github')}
                  </Atoms.Typography>
                </Atoms.Box>
              </Atoms.Box>
              {/* Footer Menu Ens */}
            </Atoms.Grid>
          </Atoms.Grid>

          <Atoms.Divider css={dividerStyle} />

          <Atoms.Box css={copyrightStyle}>
            <Atoms.Copyright />
          </Atoms.Box>
        </Atoms.Box>
      </Atoms.Container>
    </Atoms.Paper>
  )
}

// Container
export const GeneralFooter: FC = () => {
  return <GeneralFooterPresenter />
}
