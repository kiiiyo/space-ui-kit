import { FC, useState, useCallback } from 'react'
import { css, Theme } from '@emotion/react'
import Fade from '@mui/material/Fade'
import { useNavigate } from 'react-router-dom'
//
import { Atoms } from '@/components'

// Interface

export type ProfileMenuPresenterProps = {
  state: {
    isMenuOpen: boolean
    anchorEl: null | HTMLElement
  }
  actions: {
    onShowMenuClick: (event: React.MouseEvent<HTMLElement>) => void
    onHideMenuClick: () => void
    onLinkClick: (path: string) => void
  }
}

// Style

const accountStyle = (theme: Theme) =>
  css({
    minWidth: 200,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  })

const accountNameStyle = () =>
  css({
    lineHeight: 1.5,
    fontSize: '0.875rem'
  })

const accountDescriptionStyle = (theme: Theme) =>
  css({
    lineHeight: 1.5,
    fontSize: '0.875rem',
    color: theme.palette.grey['500']
  })

// Presenter

export const ProfileMenuPresenter: FC<ProfileMenuPresenterProps> = ({
  state: { isMenuOpen, anchorEl },
  actions: { onShowMenuClick, onHideMenuClick, onLinkClick }
}) => {
  return (
    <>
      <Atoms.Tooltip title="Profile" placement="bottom">
        <Atoms.IconButton
          size="large"
          aria-controls={isMenuOpen ? 'fade-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={isMenuOpen ? 'true' : undefined}
          onClick={onShowMenuClick}
        >
          <Atoms.PersonIcon />
        </Atoms.IconButton>
      </Atoms.Tooltip>
      <Atoms.Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={onHideMenuClick}
        TransitionComponent={Fade}
      >
        <Atoms.Box css={accountStyle}>
          <Atoms.Typography css={accountNameStyle} component="h6">
            Space UI Kit
          </Atoms.Typography>
          <Atoms.Typography css={accountDescriptionStyle} component="p">
            demo@space.ui.kit
          </Atoms.Typography>
        </Atoms.Box>
        <Atoms.Divider />
        <Atoms.MenuItem
          onClick={() => {
            onLinkClick('/')
          }}
        >
          <Atoms.ListItemIcon>
            <Atoms.LogoutIcon fontSize="small" />
          </Atoms.ListItemIcon>
          <Atoms.ListItemText>Sign out</Atoms.ListItemText>
        </Atoms.MenuItem>
      </Atoms.Menu>
    </>
  )
}

// Container
export const ProfileMenu: FC = () => {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const isMenuOpen = Boolean(anchorEl)

  const onShowMenuClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget)
    },
    [setAnchorEl]
  )
  const onHideMenuClick = useCallback(() => {
    setAnchorEl(null)
  }, [setAnchorEl])

  const onLinkClick = useCallback(
    (path: string) => {
      navigate(path)
    },
    [navigate]
  )

  return (
    <ProfileMenuPresenter
      state={{ isMenuOpen, anchorEl }}
      actions={{
        onShowMenuClick,
        onHideMenuClick,
        onLinkClick
      }}
    />
  )
}
