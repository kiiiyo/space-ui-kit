import { FC } from 'react'
import { Outlet, Navigate, useParams } from 'react-router-dom'
//
import { TLocale } from '@/types/locale'
import { Context } from '@/features'
import { findLocale } from '@/utils/locale'

const LocaleContainer: FC = () => {
  const { local } = useParams()

  if (findLocale(local) === undefined) {
    return <Navigate to="/404" replace={false} />
  }

  return (
    <Context.LocaleContext.Provider value={{ locale: local as TLocale }}>
      <Outlet />
    </Context.LocaleContext.Provider>
  )
}
export default LocaleContainer
