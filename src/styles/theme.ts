import { ThemeOptions } from '@mui/material/styles'

export const defaultDesignTokens: ThemeOptions = {
  spacing: 8,
  typography: {
    htmlFontSize: 16
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 769,
      md: 1025,
      lg: 1440,
      xl: 2560
    }
  }
}
