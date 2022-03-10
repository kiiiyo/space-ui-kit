import { useState, useEffect } from 'react'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
//
import { Router } from '@/shareds/Router'
import { Hooks } from '@/features'
import { createCustomTheme, getDesignTokens } from '@/styles'

function App() {
  const {
    state: { colorMode }
  } = Hooks.App.useApp()

  const [theme, setTheme] = useState(
    createCustomTheme(getDesignTokens(colorMode))
  )

  useEffect(() => {
    setTheme(createCustomTheme(getDesignTokens(colorMode)))
  }, [colorMode])

  return (
    <MuiThemeProvider theme={theme}>
      <EmotionThemeProvider theme={theme}>
        <Router />
      </EmotionThemeProvider>
    </MuiThemeProvider>
  )
}

export default App
