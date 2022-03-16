import { FC, createContext, useState, useEffect, useCallback } from 'react'
//
import { Constant } from '@/configs'

export type ColorMode = 'light' | 'dark'

export type DisplayMode = 'show' | 'hide'

export type ScreenSize = {
  width: number
  height: number
}

export type State = {
  colorMode: ColorMode
  dashboardDrawerDisplayMode: DisplayMode
  screenSize: ScreenSize
  isMobile: boolean
}

export type Actions = {
  handleToggleColorMode: () => void
  handleToggleDashboardDrawerDisplay: () => void
  handleSetDashboardDrawerDisplay: (mode: DisplayMode) => void
}

export type TAppContextValue = {
  state: State
  actions: Actions
}

// Context

const initContextValue: TAppContextValue = {
  state: {
    colorMode: 'light',
    dashboardDrawerDisplayMode: 'hide',
    screenSize: {
      width: 0,
      height: 0
    },
    isMobile: false
  },
  actions: {
    handleToggleColorMode: () => {},
    handleToggleDashboardDrawerDisplay: () => {},
    handleSetDashboardDrawerDisplay: () => {}
  }
}

// Hooks

export const useAppContext = (): TAppContextValue => {
  const [mode, setMode] = useState<'light' | 'dark'>('light')
  const [dashboardDrawerDisplayMode, setDashboardDrawerDisplayMode] = useState<
    'show' | 'hide'
  >('hide')

  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0
  })

  const handleToggleColorMode = useCallback(() => {
    setMode((prevMode: ColorMode) => (prevMode === 'light' ? 'light' : 'dark'))
  }, [setMode])

  const handleToggleDashboardDrawerDisplay = useCallback(() => {
    setDashboardDrawerDisplayMode((prevMode: DisplayMode) =>
      prevMode === 'hide' ? 'hide' : 'show'
    )
  }, [setDashboardDrawerDisplayMode])

  const handleSetDashboardDrawerDisplay = useCallback(
    (mode: DisplayMode) => {
      setDashboardDrawerDisplayMode(mode)
    },
    [setDashboardDrawerDisplayMode]
  )

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight
        })
      }
      window.addEventListener('resize', handleResize)
      handleResize()
      return () => window.removeEventListener('resize', handleResize)
    } else {
      return
    }
  }, [])

  return {
    state: {
      screenSize,
      dashboardDrawerDisplayMode,
      isMobile: screenSize.width <= Constant.MOBILE_BREAK_POINT_SIZE,
      colorMode: mode
    },
    actions: {
      handleToggleColorMode,
      handleToggleDashboardDrawerDisplay,
      handleSetDashboardDrawerDisplay
    }
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
