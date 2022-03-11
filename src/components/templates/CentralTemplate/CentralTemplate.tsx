import { FC } from 'react'
import { css } from '@emotion/react'
//
import { Atoms } from '@/components'
//

// Interface

//  Style
const innerStyle = () =>
  css({
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  })

export const CentralTemplate: FC = ({ children }) => {
  return <Atoms.Box css={innerStyle}>{children}</Atoms.Box>
}
