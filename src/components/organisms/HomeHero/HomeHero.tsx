import { FC, ReactNode } from 'react' //
import { css, Theme } from '@emotion/react'
//
import { Constant } from '@/configs'
import { Atoms } from '@/components'

type THomeHeroProps = {
  state: {
    title?: ReactNode
  }
}

//  Style
const containerStyle = (theme: Theme) =>
  css({
    position: 'relative',
    textAlign: 'center',
    zIndex: 1201,
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4)
    }
  })

const versionLabelStyle = (theme: Theme) =>
  css({
    display: 'inline-block',
    fontWeight: 600,
    textAlign: 'center',
    color: '#fff',
    borderRadius: 4,
    backgroundImage:
      'linear-gradient( 114.2deg,  rgba(121,194,243,1) 22.6%, rgba(255,180,239,1) 67.7% )',
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    marginBottom: theme.spacing(2)
  })

const titleStyle = (theme: Theme) =>
  css({
    color: '#fff',
    fontSize: '2.5rem',
    lineHeight: 1.5,
    fontWeight: 400,
    margin: '0 auto',
    width: 560,
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      fontSize: '2rem'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      fontSize: '1.5rem'
    }
  })

const emojiStyle = (theme: Theme) =>
  css({
    fontSize: '6rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '4rem'
    }
  })

export const HomeHero: FC<THomeHeroProps> = ({ state: { title } }) => {
  return (
    <Atoms.SpaceContainer>
      <Atoms.Container css={containerStyle}>
        <div className="py-12 text-center md:py-20">
          <Atoms.Typography component="p" css={versionLabelStyle}>
            v{Constant.UI_KIT_VERSION}
          </Atoms.Typography>
          <Atoms.Typography component="h1" css={titleStyle}>
            {title}
          </Atoms.Typography>
          <Atoms.Typography component="span" css={emojiStyle}>
            👨‍🚀
          </Atoms.Typography>
        </div>
      </Atoms.Container>
    </Atoms.SpaceContainer>
  )
}
