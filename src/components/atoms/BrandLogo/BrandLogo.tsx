import { FC, ReactNode } from 'react'
import { css, Theme } from '@emotion/react'
//
import { Atoms } from '@/components'

// Interface
export type State = {
  symbol?: ReactNode | string
  typography: ReactNode | string
}

export type TBrandLogoProps = {
  state: State
}

//  Style

const brandLogoSymbolStyle = (theme: Theme) =>
  css({
    fontSize: '1.75rem',
    marginRight: theme.spacing(1)
  })

const brandLogoTypeStyle = () =>
  css({
    fontSize: '1.5rem',
    fontWeight: 'bold'
  })

export const BrandLogo: FC<TBrandLogoProps> = ({
  state: { symbol, typography }
}) => {
  return (
    <Atoms.Box display="flex" alignItems="center">
      <Atoms.Typography css={brandLogoSymbolStyle}>{symbol}</Atoms.Typography>
      <Atoms.Typography css={brandLogoTypeStyle}>{typography}</Atoms.Typography>
    </Atoms.Box>
  )
}
