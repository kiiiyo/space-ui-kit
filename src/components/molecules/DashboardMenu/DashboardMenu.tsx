import React, { FC, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
//
import type {
  TMenuGroup,
  TMenuGroupKey,
  TMenuSingle,
  TMenuNest
} from '@/types/dashboard-menu'
import { Hooks } from '@/features'
import { getIconComponent } from '@/utils/icon'
import { Atoms, Molecules } from '@/components'

// Interface
export type DashboardMenuProps = {
  state: {
    currentMenu: TMenuGroupKey
    currentNestMenu?: string
    menuGroup: Array<TMenuGroup>
  }
}

export type DashboardMenuPresenterProps = {
  state: {
    currentMenu: TMenuGroupKey
    currentNestMenu?: string
    menuGroup: Array<TMenuGroup>
  }
  actions: {
    onMenuClick: (path: string) => void
  }
}

export const DashboardMenuPresenter: FC<DashboardMenuPresenterProps> = ({
  state: { currentMenu, currentNestMenu, menuGroup },
  actions: { onMenuClick }
}) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'common.dashboardMenu'
  })

  return (
    <>
      {menuGroup.map((menu: TMenuGroup, index: number) => {
        const { menuGroupKey } = menu
        return (
          <Atoms.List
            key={index}
            disablePadding
            component="nav"
            subheader={
              <Atoms.ListSubheader component="div">
                {t(menu.localeKeyPrefix)}
              </Atoms.ListSubheader>
            }
          >
            {menu.menuItems.map(
              (menuItem: TMenuSingle | TMenuNest, index: number) => {
                const { kind, iconKind, localeKeyPrefix } = menuItem
                const menuLabel = t(localeKeyPrefix) as string

                const isMenuGroupSelected =
                  currentMenu === menuGroupKey ? true : false

                if (kind === 'single') {
                  const { path } = menuItem
                  return (
                    <Atoms.ListItemButton
                      key={index}
                      selected={isMenuGroupSelected}
                      onClick={() => onMenuClick(path)}
                    >
                      <Atoms.ListItemIcon sx={{ minWidth: 40 }}>
                        {getIconComponent(iconKind)}
                      </Atoms.ListItemIcon>
                      <Atoms.ListItemText primary={menuLabel} />
                    </Atoms.ListItemButton>
                  )
                } else if (kind === 'nest') {
                  const { nestMenu } = menuItem

                  return (
                    <Molecules.DashboardNestMenu
                      key={index}
                      state={{
                        isMenuGroupSelected,
                        currentNestMenu,
                        nestMenu,
                        iconKind,
                        menuLabel
                      }}
                    />
                  )
                } else {
                  return null
                }
              }
            )}
          </Atoms.List>
        )
      })}
    </>
  )
}

// Container
export const DashboardMenu: FC<DashboardMenuProps> = ({
  state: { currentMenu, currentNestMenu, menuGroup }
}) => {
  // TODO:
  const navigate = useNavigate()
  const {
    state: { locale }
  } = Hooks.Locale.useLocale()

  const onMenuClick = useCallback(
    (path: string) => {
      navigate(`/${locale}${path}`)
    },
    [locale, navigate]
  )

  return (
    <DashboardMenuPresenter
      state={{
        currentMenu,
        currentNestMenu,
        menuGroup
      }}
      actions={{
        onMenuClick
      }}
    />
  )
}
