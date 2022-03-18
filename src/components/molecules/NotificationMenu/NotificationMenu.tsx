import { FC, useState, useCallback } from 'react'
import { css, Theme } from '@emotion/react'
import { blue } from '@mui/material/colors'
import Fade from '@mui/material/Fade'
import { useTranslation } from 'react-i18next'
//
import { Atoms } from '@/components'

// Interface

export type NotificationMenuPresenterProps = {
  state: {
    isMenuOpen: boolean
    anchorEl: null | HTMLElement
  }
  actions: {
    onShowMenuClick: (event: React.MouseEvent<HTMLElement>) => void
    onHideMenuClick: () => void
  }
}

// Style

const innerStyle = () =>
  css({
    width: 298
  })

const headerStyle = (theme: Theme) =>
  css({
    padding: theme.spacing(1),
    textAlign: 'center'
  })

const headerTextStyle = () =>
  css({
    fontSize: '0.975rem',
    lineHeight: 1.75
  })

const footerStyle = (theme: Theme) =>
  css({
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center'
  })

const linkTextStyle = () =>
  css({
    textDecoration: 'underline',
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: 1.5,
    display: 'block',
    '&:link': {
      color: blue['600']
    },
    '&:visited': {
      color: blue['600']
    },
    '&:hover': {
      color: blue['500']
    },
    '&:active': {
      color: blue['800']
    }
  })

// Presenter

export const NotificationMenuPresenter: FC<NotificationMenuPresenterProps> = ({
  state: { isMenuOpen, anchorEl },
  actions: { onShowMenuClick, onHideMenuClick }
}) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'common.dashboardHeaderBar.NotificationMenu'
  })
  return (
    <>
      <Atoms.Tooltip title={t('tooltip') as string} placement="bottom">
        <Atoms.IconButton
          size="large"
          aria-controls={isMenuOpen ? 'fade-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={isMenuOpen ? 'true' : undefined}
          onClick={onShowMenuClick}
        >
          <Atoms.Badge variant="dot">
            <Atoms.NotificationsIcon />
          </Atoms.Badge>
        </Atoms.IconButton>
      </Atoms.Tooltip>
      <Atoms.Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={onHideMenuClick}
        TransitionComponent={Fade}
      >
        <Atoms.Box css={innerStyle}>
          <Atoms.Box css={headerStyle}>
            <Atoms.Typography css={headerTextStyle} component="h6">
              {t('recently')}
            </Atoms.Typography>
          </Atoms.Box>
          <Atoms.Divider />
          <Atoms.List>
            <Atoms.ListItem>
              <Atoms.ListItemAvatar>
                <Atoms.Avatar>
                  <Atoms.NotificationsIcon />
                </Atoms.Avatar>
              </Atoms.ListItemAvatar>
              <Atoms.ListItemText primary="Title" secondary="text" />
            </Atoms.ListItem>
            <Atoms.ListItem>
              <Atoms.ListItemAvatar>
                <Atoms.Avatar>
                  <Atoms.NotificationsIcon />
                </Atoms.Avatar>
              </Atoms.ListItemAvatar>
              <Atoms.ListItemText primary="Title" secondary="text" />
            </Atoms.ListItem>
            <Atoms.ListItem>
              <Atoms.ListItemAvatar>
                <Atoms.Avatar>
                  <Atoms.NotificationsIcon />
                </Atoms.Avatar>
              </Atoms.ListItemAvatar>
              <Atoms.ListItemText primary="Title" secondary="text" />
            </Atoms.ListItem>
          </Atoms.List>
          <Atoms.Divider />
          <Atoms.Box css={footerStyle}>
            <Atoms.Typography css={linkTextStyle} component="a" href="#">
              {t('showAll')}
            </Atoms.Typography>
          </Atoms.Box>
        </Atoms.Box>
      </Atoms.Menu>
    </>
  )
}

// Container
export const NotificationMenu: FC = () => {
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

  return (
    <NotificationMenuPresenter
      state={{ isMenuOpen, anchorEl }}
      actions={{
        onShowMenuClick,
        onHideMenuClick
      }}
    />
  )
}
