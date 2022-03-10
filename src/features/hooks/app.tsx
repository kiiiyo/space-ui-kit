import { useContext } from 'react'
//
import { Context } from '@/features'

export const useApp = () => {
  return useContext(Context.AppContext.Context)
}
