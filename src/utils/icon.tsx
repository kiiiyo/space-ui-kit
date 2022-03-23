import type { TIconKind } from '@/types/icon'
import { Atoms } from '@/components'

export const getIconComponent = (kind: TIconKind) => {
  switch (kind) {
    case 'LoginIcon':
      return <Atoms.LoginIcon />
    case 'SearchIcon':
      return <Atoms.SearchIcon />
    case 'MenuIcon':
      return <Atoms.MenuIcon />
    case 'NotificationsIcon':
      return <Atoms.NotificationsIcon />
    case 'PersonIcon':
      return <Atoms.PersonIcon />
    case 'LogoutIcon':
      return <Atoms.LogoutIcon />
    case 'TuneIcon':
      return <Atoms.TuneIcon />
    case 'ReplayIcon':
      return <Atoms.ReplayIcon />
    case 'CloseIcon':
      return <Atoms.CloseIcon />
    case 'LightModeIcon':
      return <Atoms.LightModeIcon />
    case 'DarkModeIcon':
      return <Atoms.DarkModeIcon />
    case 'StarBorderIcon':
      return <Atoms.StarBorderIcon />
    case 'ExpandLessIcon':
      return <Atoms.ExpandLessIcon />
    case 'ExpandMoreIcon':
      return <Atoms.ExpandMoreIcon />
    case 'WebIcon':
      return <Atoms.WebIcon />
    case 'DashboardIcon':
      return <Atoms.DashboardIcon />
    default:
      return null
  }
}
