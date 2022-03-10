import { FC } from 'react'
import { css, Theme } from '@emotion/react'
//
import { Atoms } from '@/components'

// Presenter

// Style

//  Style
const appBarStyle = (theme: Theme) =>
  css({
    color: theme.palette.mode === 'dark' ? '#fff' : theme.palette.grey['900'],
    boxShadow: 'none',
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.background.default : '#fff'
  })

const appBarEmojiStyle = (theme: Theme) =>
  css({
    fontSize: '1.75rem',
    marginRight: theme.spacing(1)
  })

export const GeneralHeaderBarPresenter: FC = () => {
  return (
    <Atoms.AppBar css={appBarStyle} position="static">
      <Atoms.Container>
        <Atoms.Toolbar>
          <Atoms.Typography css={appBarEmojiStyle} component="div">
            <span>🚀</span>
          </Atoms.Typography>
          <Atoms.Typography
            variant="h6"
            sx={{ fontWeight: 'bold' }}
            component="div"
          >
            Space UI Kit
          </Atoms.Typography>
        </Atoms.Toolbar>
      </Atoms.Container>
    </Atoms.AppBar>
  )
}

// Container
export const GeneralHeaderBar: FC = () => {
  return <GeneralHeaderBarPresenter />
}
