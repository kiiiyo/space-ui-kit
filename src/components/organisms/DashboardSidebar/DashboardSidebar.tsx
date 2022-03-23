import { FC } from 'react'
import SimpleBarReact from 'simplebar-react'
//
import type { TMenuGroup, TMenuGroupKey } from '@/types/dashboard-menu'
import { Constant } from '@/configs'
import { Molecules, Atoms } from '@/components'
//
import {
  containerStyle,
  scrollbarStyle,
  simpleBarStyle,
  brandLogoStyle
} from './style'

// Interface

//currentMenu

export type TDashboardSidebarProps = {
  state: {
    currentMenu: TMenuGroupKey
    currentNestMenu?: string
  }
}

export type TDashboardSidebarPresenterProps = {
  state: {
    currentMenu: TMenuGroupKey
    currentNestMenu?: string
    menuGroup: Array<TMenuGroup>
  }
}

// Presenter
export const DashboardSidebarPresenter: FC<TDashboardSidebarPresenterProps> = ({
  state: { currentMenu, currentNestMenu, menuGroup }
}) => {
  return (
    <Atoms.Box component="div" css={containerStyle}>
      <Atoms.Drawer
        variant="persistent"
        open={true}
        PaperProps={{
          sx: {
            width: Constant.DASHBOARD_SIDEBAR_WIDTH,
            bgcolor: 'background.default',
            borderRightStyle: 'dashed'
          }
        }}
      >
        <Atoms.Box component="div" css={scrollbarStyle}>
          <SimpleBarReact css={simpleBarStyle}>
            <Atoms.Box component="div">
              {/* BrandLogo */}
              <Atoms.Box css={brandLogoStyle}>
                <Atoms.BrandLogo
                  state={{
                    symbol: Constant.BRAND_SYMBOL,
                    typography: Constant.BRAND_TYPOGRAPHY
                  }}
                />
              </Atoms.Box>
              <Molecules.DashboardMenu
                state={{ currentMenu, currentNestMenu, menuGroup }}
              />
            </Atoms.Box>
          </SimpleBarReact>
        </Atoms.Box>
      </Atoms.Drawer>
    </Atoms.Box>
  )
}

// Container
export const DashboardSidebar: FC<TDashboardSidebarProps> = ({
  state: { currentMenu, currentNestMenu }
}) => {
  //const [open] = useState(true)

  const menuGroup = Constant.DASHBOARD_MENU
  return (
    <DashboardSidebarPresenter
      state={{
        currentMenu,
        currentNestMenu,
        menuGroup
      }}
    />
  )
}
