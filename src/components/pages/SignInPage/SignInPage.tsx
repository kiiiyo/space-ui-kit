import { FC } from 'react'
import { css } from '@emotion/react'
//
import { Constant } from '@/configs'
import { Template, Organisms, Atoms } from '@/components'

// Interface

//  Style
const innerStyle = () =>
  css({
    display: 'flex',
    alignItems: 'center',
    height: '100vh'
  })

const brandLogoPosStyle = () =>
  css({
    position: 'absolute',
    top: 8,
    left: 16
  })

// Presenter

export const SignInPage: FC = () => {
  return (
    <Atoms.SpaceContainer>
      <Template.CentralTemplate>
        <Atoms.Box css={brandLogoPosStyle}>
          <Atoms.BrandLogo
            state={{
              symbol: Constant.BRAND_SYMBOL,
              typography: (
                <span css={{ color: '#fff' }}>{Constant.BRAND_TYPOGRAPHY}</span>
              )
            }}
          />
        </Atoms.Box>
        <Atoms.Box css={innerStyle}>
          <Organisms.SignInSection />
        </Atoms.Box>
      </Template.CentralTemplate>
    </Atoms.SpaceContainer>
  )
}
