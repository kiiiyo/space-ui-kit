import { FC } from 'react'
import { css, Theme } from '@emotion/react'
//
import { Template, Atoms } from '@/components'

// Interface

//  Style
const contentsStyle = () =>
  css({
    display: 'flex',
    height: 480,
    borderRadius: 16,
    backgroundImage:
      'linear-gradient( 114.2deg,  rgba(121,194,243,1) 22.6%, rgba(255,180,239,1) 67.7% )'
  })

const titleStyle = (theme: Theme) =>
  css({
    fontWeight: 'bold',
    fontSize: '2rem',
    color: theme.palette.common.white
  })

// Presenter
export const DashboardPage: FC = () => {
  return (
    <Template.DashboardTemplate state={{ currentMenu: 'DASHBOARD' }}>
      <Atoms.Box
        alignItems="center"
        justifyContent="center"
        css={contentsStyle}
      >
        <Atoms.Typography component="h1" css={titleStyle}>
          Dashboard Contents
        </Atoms.Typography>
      </Atoms.Box>
    </Template.DashboardTemplate>
  )
}
