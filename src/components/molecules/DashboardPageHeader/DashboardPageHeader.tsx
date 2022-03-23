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
    pageLocaleKey: string
    breadcrumbs?: Array<TBreadcrumb>
  }
}

export type TDashboardPageHeaderPresenterProps = {
  state: {
    pageLocaleKey: string
    breadcrumbs?: Array<TBreadcrumb>
  }
}

// Style

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

// Container
export const DashboardPageHeader: FC<TDashboardPageHeaderProps> = ({
  state: { pageLocaleKey, breadcrumbs }
}) => {
  return <DashboardPageHeaderPresenter state={{ pageLocaleKey, breadcrumbs }} />
}

// Presenter
export const DashboardPageHeaderPresenter: FC<
  TDashboardPageHeaderPresenterProps
> = ({ state: { pageLocaleKey, breadcrumbs } }) => {
  const { t } = useTranslation('translation', {
    keyPrefix: pageLocaleKey
  })

  return (
    <>
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
    </>
  )
}
