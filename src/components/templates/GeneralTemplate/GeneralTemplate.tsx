import React, { FC } from 'react'
//
import { Organisms } from '@/components'

// Interface
export type TGeneralTemplateProps = {
  headerBar?: React.ReactNode
  children: React.ReactNode
  footer?: React.ReactNode
}

export const GeneralTemplate: FC<TGeneralTemplateProps> = ({
  children,
  headerBar,
  footer
}) => {
  return (
    <>
      {headerBar && <>{headerBar}</>}
      <Organisms.SettingPanel />
      <main>{children}</main>
      {footer && <>{footer}</>}
    </>
  )
}
