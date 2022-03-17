import { FC } from 'react'
import { Outlet, Navigate, useParams } from 'react-router-dom'
//
import { TLocale } from '@/types/locale'
import { Context } from '@/features'
import { findLocale } from '@/utils/locale'

const LocaleContainer: FC = () => {
  const { locale } = useParams()

  if (findLocale(locale) === undefined) {
    return <Navigate to="/404" replace={false} />
  }

  return (
    <Context.LocaleContext.Provider value={{ locale: locale as TLocale }}>
      <Outlet />
    </Context.LocaleContext.Provider>
  )
}
export default LocaleContainer
