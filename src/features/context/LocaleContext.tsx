import { FC, createContext } from 'react'
//
import { TLocale } from '@/types/locale'

export type State = {
  locale: TLocale
}

export type LocaleContextValueType = {
  state: State
}

const initContextValue: LocaleContextValueType = {
  state: {
    locale: 'ja'
  }
}

export const Context = createContext<LocaleContextValueType>(initContextValue)

interface LocaleProviderProps {
  value: {
    locale: TLocale
  }
}

export const useLocaleContext = (
  props: LocaleProviderProps
): LocaleContextValueType => {
  const {
    value: { locale }
  } = props

  return {
    state: {
      locale
    }
  }
}

export const Provider: FC<LocaleProviderProps> = ({ value, children }) => {
  const { state } = useLocaleContext({ value })
  return <Context.Provider value={{ state }}>{children}</Context.Provider>
}

export const Consumer = Context.Consumer
