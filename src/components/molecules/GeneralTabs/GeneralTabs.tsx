import { FC, useState, useCallback, SyntheticEvent } from 'react'
//import { useTranslation } from 'react-i18next'
//
//import { Constant } from '@/configs'
import { Atoms } from '@/components'

export type TTabSingle = {
  value: string
  label: string
}

// Interface
export type TGeneralTabsProps = {
  state: {
    defaultTab: string
    tabsCollection: Array<TTabSingle>
  }
  actions: {
    handleTabsChange: (value: string) => void
  }
}

export type TGeneralTabsPresenterProps = {
  state: {
    currentTab: string
    tabsCollection: Array<TTabSingle>
  }
  actions: {
    onTabsChange: (event: SyntheticEvent, newValue: string) => void
  }
}

// Container
export const GeneralTabs: FC<TGeneralTabsProps> = ({
  state: { defaultTab, tabsCollection },
  actions: { handleTabsChange }
}) => {
  const [currentTab, setCurrentTab] = useState(defaultTab)

  const onTabsChange = useCallback(
    (event: SyntheticEvent, newValue: string) => {
      handleTabsChange(newValue)
      setCurrentTab(newValue)
    },
    [handleTabsChange, setCurrentTab]
  )

  return (
    <GeneralTabsPresenter
      state={{ currentTab, tabsCollection }}
      actions={{ onTabsChange }}
    />
  )
}

// Presenter
export const GeneralTabsPresenter: FC<TGeneralTabsPresenterProps> = ({
  state: { currentTab, tabsCollection },
  actions: { onTabsChange }
}) => {
  return (
    <Atoms.Box sx={{ width: '100%' }}>
      <Atoms.Tabs value={currentTab} onChange={onTabsChange}>
        {tabsCollection.map((tab: TTabSingle, index: number) => {
          const { value, label } = tab
          return (
            <Atoms.Tab
              key={index}
              sx={{ textTransform: 'none' }}
              value={value}
              label={label}
            />
          )
        })}
      </Atoms.Tabs>
    </Atoms.Box>
  )
}
