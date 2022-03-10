import { useContext } from 'react'
//
import { Context } from '@/features'

export const useColorMode = () => {
  return useContext(Context.ColorModeContext.Context)
}
