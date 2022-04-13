// Presenter
import { useState, useCallback } from 'react'

export type TPanel = string

export type TUseBlankNestContainer = {
  state: {
    currentPanel: TPanel
  }
  actions: {
    handleCurrentPanel: (value: string) => void
  }
}

export const useBlankNestContainer = () => {
  const [currentPanel, setCurrentPanel] = useState('tab1')

  const handleCurrentPanel = useCallback(
    (value: string) => {
      setCurrentPanel(value)
    },
    [setCurrentPanel]
  )

  return {
    state: {
      currentPanel
    },
    actions: {
      handleCurrentPanel
    }
  } as TUseBlankNestContainer
}
