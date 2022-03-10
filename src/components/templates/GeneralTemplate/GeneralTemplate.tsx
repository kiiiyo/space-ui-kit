import React, { FC } from 'react'
import { css, Theme } from '@emotion/react'
//

// Interface

export type TGeneralTemplateProps = {
  headerBar?: React.ReactNode
  children: React.ReactNode
  footer?: React.ReactNode
}

// Style

const headerBarStyle = (theme: Theme) =>
  css({
    position: 'fixed',
    zIndex: theme.zIndex.drawer + 1
  })

export const GeneralTemplate: FC<TGeneralTemplateProps> = ({
  children,
  headerBar,
  footer
}) => {
  return (
    <>
      {headerBar && <div css={headerBarStyle}>{headerBar}</div>}
      <main>{children}</main>
      {footer && <>{footer}</>}
    </>
  )
}
