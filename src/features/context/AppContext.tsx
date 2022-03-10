import { FC, createContext, useState, useCallback } from 'react'

export type ColorMode = 'light' | 'dark'

export type State = {
  colorMode: ColorMode
}

export type Actions = {
  handleToggleColorMode: () => void
}

export type TAppContextValue = {
  state: State
  actions: Actions
}

// Context

const initContextValue: TAppContextValue = {
  state: {
    colorMode: 'light'
  },
  actions: {
    handleToggleColorMode: () => {}
  }
}

// Hooks

export const useAppContext = (): TAppContextValue => {
  const [mode, setMode] = useState<'light' | 'dark'>('light')

  const handleToggleColorMode = useCallback(() => {
    setMode((prevMode: ColorMode) => (prevMode === 'light' ? 'light' : 'dark'))
  }, [setMode])

  return {
    state: {
      colorMode: mode
    },
    actions: { handleToggleColorMode }
  }
}

// Context

export const Context = createContext<TAppContextValue>(initContextValue)

// Provider

export const Provider: FC = ({ children }) => {
  const { state, actions } = useAppContext()
  return (
    <Context.Provider value={{ state, actions }}>{children}</Context.Provider>
  )
}

export const Consumer = Context.Consumer
