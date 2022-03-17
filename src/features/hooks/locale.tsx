import { useContext } from 'react'
//
import { Context } from '@/features'

export const useLocale = () => {
  return useContext(Context.LocaleContext.Context)
}
