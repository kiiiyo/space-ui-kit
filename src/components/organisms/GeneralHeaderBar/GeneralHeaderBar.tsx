import { FC } from 'react'
import { css, Theme } from '@emotion/react'
//
import { Constant } from '@/configs'
import { Atoms } from '@/components'

// Presenter

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

export const GeneralHeaderBarPresenter: FC = () => {
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
        </Atoms.Box>
      </Atoms.Container>
    </Atoms.AppBar>
  )
}

// Container
export const GeneralHeaderBar: FC = () => {
  return <GeneralHeaderBarPresenter />
}
