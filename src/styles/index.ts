import { createTheme, Theme, ThemeOptions } from '@mui/material/styles'
import { grey } from '@mui/material/colors'

export { applyGlobalStyle } from './globalStyle'

import { defaultDesignTokens } from './theme'

export const getDesignTokens = (mode: 'light' | 'dark'): ThemeOptions => ({
  ...defaultDesignTokens,
  ...{
    palette: {
      mode,
      ...(mode === 'dark'
        ? // Dark mode
          {
            typography: {
              h1: {
                color: '#fff'
              },
              h6: {
                color: '#fff'
              }
            },
            text: {
              primary: '#fff',
              secondary: grey[500]
            },
            palette: {
              primary: grey[50],
              background: {
                default: '#010101',
                paper: '#010101'
              }
            }
          }
        : // Light mode
          {
            typography: {
              h1: {
                color: grey[900]
              },
              h6: {
                color: grey[900]
              }
            },
            text: {
              primary: grey[900],
              secondary: grey[800]
            }
          })
    }
  }
})

export const createCustomTheme = (designTokens: ThemeOptions): Theme =>
  createTheme(designTokens)
