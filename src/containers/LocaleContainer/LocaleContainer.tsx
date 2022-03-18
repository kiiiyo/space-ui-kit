import { FC, useEffect } from 'react'
import { Outlet, Navigate, useParams } from 'react-router-dom'
//
import { TLocale } from '@/types/locale'
import { Context } from '@/features'
import { findLocale } from '@/utils/locale'
import i18n from '@/utils/i18n'

const LocaleContainer: FC = () => {
  const { locale } = useParams()

  useEffect(() => {
    if (findLocale(locale) !== undefined) {
      i18n.changeLanguage(locale as string)
    }
  }, [locale])

  return findLocale(locale) === undefined ? (
    <Navigate to="/404" replace={false} />
  ) : (
    <Context.LocaleContext.Provider value={{ locale: locale as TLocale }}>
      <Outlet />
    </Context.LocaleContext.Provider>
  )
}

export default LocaleContainer
