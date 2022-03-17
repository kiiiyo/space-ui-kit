import { FC, useEffect } from 'react'
import { Outlet, Navigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
//
import { TLocale } from '@/types/locale'
import { Context } from '@/features'
import { findLocale } from '@/utils/locale'

const LocaleContainer: FC = () => {
  const { locale } = useParams()
  const { i18n } = useTranslation()

  useEffect(() => {
    if (findLocale(locale) !== undefined) {
      i18n.changeLanguage(locale)
    }
  }, [i18n, locale])

  return findLocale(locale) === undefined ? (
    <Navigate to="/404" replace={false} />
  ) : (
    <Context.LocaleContext.Provider value={{ locale: locale as TLocale }}>
      <Outlet />
    </Context.LocaleContext.Provider>
  )
}
export default LocaleContainer
