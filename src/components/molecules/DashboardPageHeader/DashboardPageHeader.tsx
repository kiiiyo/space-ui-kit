//import { FC, useState, useCallback } from 'react'

import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { css, Theme } from '@emotion/react'
// import Fade from '@mui/material/Fade'
// import { useNavigate } from 'react-router-dom'
// import { useTranslation } from 'react-i18next'
// //
// import { Hooks } from '@/features'
import { Atoms } from '@/components'

// Interface

export type TBreadcrumb = {
  localeKeyPrefix: string
  path: string
  current?: boolean
}

export type TDashboardPageHeaderProps = {
  state: {
    breadcrumbs?: Array<TBreadcrumb>
  }
}

export type TDashboardPageHeaderPresenterProps = {
  state: {
    breadcrumbs?: Array<TBreadcrumb>
  }
}

// Style
const containerStyle = (theme: Theme) =>
  css({
    marginBottom: theme.spacing(5)
  })

const titleStyle = (theme: Theme) =>
  css({
    fontSize: '1.5rem',
    lineHeight: 1.5,
    color: theme.palette.mode === 'dark' ? '#fff' : theme.palette.text.primary,
    marginBottom: theme.spacing(2)
  })

const breadcrumbsStyle = (theme: Theme) =>
  css({
    margin: 0,
    color: theme.palette.mode === 'dark' ? '#fff' : theme.palette.text.primary,
    lineHeight: 1.5,
    fontSize: '0.875rem'
  })

// const accountNameStyle = () =>
//   css({
//     lineHeight: 1.5,
//     fontSize: '0.875rem'
//   })

// const accountDescriptionStyle = (theme: Theme) =>
//   css({
//     lineHeight: 1.5,
//     fontSize: '0.875rem',
//     color: theme.palette.grey['500']
//   })

// Container
export const DashboardPageHeader: FC<TDashboardPageHeaderProps> = ({
  state: { breadcrumbs }
}) => {
  // const navigate = useNavigate()
  // const {
  //   state: { locale }
  // } = Hooks.Locale.useLocale()

  // const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  // const isMenuOpen = Boolean(anchorEl)

  // const onShowMenuClick = useCallback(
  //   (event: React.MouseEvent<HTMLElement>) => {
  //     setAnchorEl(event.currentTarget)
  //   },
  //   [setAnchorEl]
  // )
  // const onHideMenuClick = useCallback(() => {
  //   setAnchorEl(null)
  // }, [setAnchorEl])

  // const onSignOutClick = useCallback(() => {
  //   navigate(`/${locale}/`)
  // }, [locale, navigate])

  return <DashboardPageHeaderPresenter state={{ breadcrumbs }} />
}

// Presenter
export const DashboardPageHeaderPresenter: FC<
  TDashboardPageHeaderPresenterProps
> = ({ state: { breadcrumbs } }) => {
  // const { t } = useTranslation('translation', {
  //   keyPrefix: 'common.dashboardHeaderBar.ProfileMenu'
  // })
  const { t } = useTranslation('translation', {
    keyPrefix: 'page.blankSinglePage'
  })
  console.log(breadcrumbs)
  return (
    <Atoms.Box css={containerStyle}>
      <Atoms.Box component="header">
        <Atoms.Typography component="h2" css={titleStyle}>
          {t('title')}
        </Atoms.Typography>
      </Atoms.Box>
      <Atoms.Breadcrumbs css={breadcrumbsStyle}>
        {breadcrumbs?.map((item: TBreadcrumb, index: number) => {
          const { path, localeKeyPrefix, current } = item
          return (
            <Atoms.Link
              key={index}
              underline="hover"
              color="inherit"
              href={path}
              sx={{ fontWeight: current ? 'bold' : '' }}
            >
              {t(localeKeyPrefix)}
            </Atoms.Link>
          )
        })}
      </Atoms.Breadcrumbs>
    </Atoms.Box>
  )
}
