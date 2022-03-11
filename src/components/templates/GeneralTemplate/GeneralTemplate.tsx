import React, { FC } from 'react'
//import { css, Theme } from '@emotion/react'
//

// Interface

export type TGeneralTemplateProps = {
  headerBar?: React.ReactNode
  children: React.ReactNode
  footer?: React.ReactNode
}

// Style

export const GeneralTemplate: FC<TGeneralTemplateProps> = ({
  children,
  headerBar,
  footer
}) => {
  return (
    <>
      {headerBar && <>{headerBar}</>}
      <main>{children}</main>
      {footer && <>{footer}</>}
    </>
  )
}
