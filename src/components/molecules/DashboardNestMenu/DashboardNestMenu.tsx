import React, { FC, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
//
import type { TMenuNestItems } from '@/types/dashboard-menu'
import { Hooks } from '@/features'
import { TIconKind } from '@/types/icon'
import { getIconComponent } from '@/utils/icon'
import { Atoms } from '@/components'

// Interface
export type TDashboardNestMenuProps = {
  state: {
    isMenuGroupSelected: boolean
    currentNestMenu?: string
    iconKind: TIconKind
    nestMenu: Array<TMenuNestItems>
    menuLabel: string
  }
}

export type TDashboardNestMenuPresenterProps = {
  state: {
    isMenuGroupSelected: boolean
    isCollapseDisplay: boolean
    currentNestMenu?: string
    iconKind: TIconKind
    nestMenu: Array<TMenuNestItems>
    menuLabel: string
  }
  actions: {
    handleCollapseDisplay: (condition: boolean) => void
    handleToggleCollapseDisplay: () => void
    onMenuClick: (path: string) => void
  }
}

export const DashboardNestMenuPresenter: FC<
  TDashboardNestMenuPresenterProps
> = ({
  state: {
    isMenuGroupSelected,
    isCollapseDisplay,
    iconKind,
    currentNestMenu,
    nestMenu,
    menuLabel
  },
  actions: { handleToggleCollapseDisplay, onMenuClick }
}) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'common.dashboardMenu'
  })

  return (
    <>
      <React.Fragment>
        <Atoms.ListItemButton
          selected={isMenuGroupSelected}
          onClick={handleToggleCollapseDisplay}
        >
          <Atoms.ListItemIcon sx={{ minWidth: 40 }}>
            {getIconComponent(iconKind)}
          </Atoms.ListItemIcon>
          <Atoms.ListItemText primary={menuLabel} />
          {isCollapseDisplay ? (
            <Atoms.ExpandLessIcon />
          ) : (
            <Atoms.ExpandMoreIcon />
          )}
        </Atoms.ListItemButton>

        <Atoms.Collapse in={isCollapseDisplay} timeout="auto" unmountOnExit>
          <Atoms.List component="div" disablePadding>
            {nestMenu.map((menuNestItems: TMenuNestItems, index: number) => {
              const { nestMenuKey, path, localeKeyPrefix } = menuNestItems
              const menuLabel = t(localeKeyPrefix) as string
              const isCurrentNestMenu =
                currentNestMenu === nestMenuKey ? true : false

              return (
                <Atoms.ListItemButton
                  key={index}
                  sx={{ pl: 6 }}
                  selected={isCurrentNestMenu}
                  onClick={() => onMenuClick(path)}
                >
                  <Atoms.ListItemText primary={menuLabel} />
                </Atoms.ListItemButton>
              )
            })}
          </Atoms.List>
        </Atoms.Collapse>
      </React.Fragment>
    </>
  )
}

// Container
export const DashboardNestMenu: FC<TDashboardNestMenuProps> = ({
  state: { isMenuGroupSelected, currentNestMenu, nestMenu, iconKind, menuLabel }
}) => {
  // TODO:
  const navigate = useNavigate()
  const {
    state: { locale }
  } = Hooks.Locale.useLocale()

  // state
  const [isCollapseDisplay, setCollapseDisplay] = useState(isMenuGroupSelected)

  // actions
  const handleCollapseDisplay = useCallback(
    (condition: boolean) => {
      setCollapseDisplay(condition)
    },
    [setCollapseDisplay]
  )

  const handleToggleCollapseDisplay = useCallback(() => {
    setCollapseDisplay((prevCondition: boolean) =>
      prevCondition ? false : true
    )
  }, [setCollapseDisplay])

  const onMenuClick = useCallback(
    (path: string) => {
      navigate(`/${locale}${path}`)
    },
    [locale, navigate]
  )

  return (
    <DashboardNestMenuPresenter
      state={{
        isMenuGroupSelected,
        isCollapseDisplay,
        currentNestMenu,
        iconKind,
        nestMenu,
        menuLabel
      }}
      actions={{
        handleCollapseDisplay,
        handleToggleCollapseDisplay,
        onMenuClick
      }}
    />
  )
}
