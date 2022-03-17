import { FC, useState, useCallback } from 'react'
import { css, Theme } from '@emotion/react'
import { alpha, ClickAwayListener, Slide } from '@mui/material'
//
import { Hooks } from '@/features'
import type { ColorMode } from '@/features/context/AppContext'
import { Atoms } from '@/components'

// Interface
export type SettingPanelPresenterProps = {
  state: {
    isSettingPanelDisplay: boolean
  }
  actions: {
    handleToggleSearchbarDisplay: () => void
    handleCloseSearchbarDisplay: () => void
    onSetColorModeClick: (mode: ColorMode) => void
  }
}

//  Style
const posStyle = (theme: Theme) =>
  css({
    position: 'fixed',
    top: '50%',
    right: 0,
    marginTop: -28,
    backgroundColor: `${alpha(theme.palette.background.default, 0.8)}`,
    zIndex: 12001,
    borderRadius: '28px 0px 0px 28px',
    boxShadow: 'rgb(99 115 129 / 36%) -12px 12px 32px -4px'
  })

const buttonStyle = (theme: Theme) =>
  css({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    padding: theme.spacing(2)
  })

const panelContainerStyle = (theme: Theme) =>
  css({
    backdropFilter: 'blur(6px)',
    backgroundColor: `${alpha(theme.palette.background.default, 0.8)}`,
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    width: 260,
    zIndex: 1203,
    borderRadius: 12,
    boxShadow: 'rgb(145 158 171 / 16%) -24px 12px 32px -4px',
    margin: theme.spacing(2)
  })

const panelHeaderStyle = (theme: Theme) =>
  css({
    display: 'flex',

    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `${theme.spacing(2)} ${theme.spacing(1)} ${theme.spacing(
      2
    )} ${theme.spacing(3)}`
  })

const panelBodyStyle = (theme: Theme) =>
  css({
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(3)
  })

const panelSectionStyle = (theme: Theme) =>
  css({
    marginTop: theme.spacing(2)
  })

const panelRowStyle = () =>
  css({
    display: 'flex',
    boxSizing: 'border-box',
    flexFlow: 'row wrap',
    marginTop: '-24px',
    marginLeft: '-24px',
    width: 'calc(100% + 24px)'
  })
const panelRowItemStyle = () =>
  css({
    paddingTop: 24,
    paddingLeft: 24,
    flexBasis: '50%',
    flexGrow: 0,
    maxWidth: '50%'
  })

const buttonLightModeStyle = (theme: Theme) =>
  css({
    position: 'relative',
    boxSizing: 'border-box',
    outline: 0,
    margin: 0,
    padding: 0,
    cursor: 'pointer',
    verticalAlign: 'middle',
    textDecoration: 'none',
    display: 'flex',
    width: '100%',
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(32, 101, 209)'
        : 'rgb(99, 115, 129)',
    backgroundColor: '#fff',
    border: '1px solid rgba(145, 158, 171, 0.12)'
  })

const buttonDarkModeStyle = (theme: Theme) =>
  css({
    position: 'relative',
    boxSizing: 'border-box',
    outline: 0,
    margin: 0,
    padding: 0,
    cursor: 'pointer',
    verticalAlign: 'middle',
    textDecoration: 'none',
    display: 'flex',
    width: '100%',
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(99, 115, 129)'
        : 'rgb(32, 101, 209)',
    backgroundColor: 'rgb(33, 43, 54)',
    border: '1px solid rgba(145, 158, 171, 0.12)'
  })

// Presenter
export const SettingPanelPresenter: FC<SettingPanelPresenterProps> = ({
  state: { isSettingPanelDisplay },
  actions: {
    handleToggleSearchbarDisplay,
    handleCloseSearchbarDisplay,
    onSetColorModeClick
  }
}) => {
  return (
    <ClickAwayListener onClickAway={handleCloseSearchbarDisplay}>
      <Atoms.Box>
        {!isSettingPanelDisplay && (
          <Atoms.Box css={posStyle}>
            <Atoms.Tooltip title="Setting" placement="left">
              <Atoms.IconButton
                css={buttonStyle}
                size="medium"
                onClick={handleToggleSearchbarDisplay}
              >
                <Atoms.TuneIcon fontSize="medium" />
              </Atoms.IconButton>
            </Atoms.Tooltip>
          </Atoms.Box>
        )}
        <Slide
          direction="left"
          in={isSettingPanelDisplay}
          mountOnEnter
          unmountOnExit
        >
          <Atoms.Box css={panelContainerStyle}>
            <Atoms.Box css={panelHeaderStyle}>
              <Atoms.Typography component="h6">Settings</Atoms.Typography>
              <Atoms.Box>
                {/*
                <Atoms.IconButton size="small">
                  <Atoms.ReplayIcon fontSize="small" />
                </Atoms.IconButton>
                */}
                <Atoms.IconButton
                  size="small"
                  onClick={handleCloseSearchbarDisplay}
                >
                  <Atoms.CloseIcon fontSize="small" />
                </Atoms.IconButton>
              </Atoms.Box>
            </Atoms.Box>
            <Atoms.Divider />
            <Atoms.Box css={panelBodyStyle}>
              <Atoms.Box>
                <Atoms.Typography component="h6">Mode</Atoms.Typography>
                <Atoms.Box css={panelSectionStyle}>
                  <Atoms.Box css={panelRowStyle}>
                    <Atoms.Box css={panelRowItemStyle}>
                      <Atoms.CardActionArea
                        css={buttonLightModeStyle}
                        onClick={() => {
                          onSetColorModeClick('light')
                        }}
                      >
                        <Atoms.LightModeIcon />
                      </Atoms.CardActionArea>
                    </Atoms.Box>
                    <Atoms.Box css={panelRowItemStyle}>
                      <Atoms.CardActionArea
                        css={buttonDarkModeStyle}
                        onClick={() => {
                          onSetColorModeClick('dark')
                        }}
                      >
                        <Atoms.DarkModeIcon />
                      </Atoms.CardActionArea>
                    </Atoms.Box>
                  </Atoms.Box>
                </Atoms.Box>
              </Atoms.Box>
            </Atoms.Box>
          </Atoms.Box>
        </Slide>
      </Atoms.Box>
    </ClickAwayListener>
  )
}

// Container
export const SettingPanel: FC = () => {
  const {
    actions: { handleSetColorMode }
  } = Hooks.App.useApp()

  const [isSettingPanelDisplay, setSettingPanelDisplay] = useState(false)

  const handleToggleSearchbarDisplay = useCallback(() => {
    setSettingPanelDisplay((prev: boolean) => !prev)
  }, [setSettingPanelDisplay])

  const handleCloseSearchbarDisplay = useCallback(() => {
    setSettingPanelDisplay(false)
  }, [setSettingPanelDisplay])

  const onSetColorModeClick = useCallback(
    (mode: ColorMode) => {
      handleSetColorMode(mode)
    },
    [handleSetColorMode]
  )

  return (
    <SettingPanelPresenter
      state={{ isSettingPanelDisplay }}
      actions={{
        handleToggleSearchbarDisplay,
        handleCloseSearchbarDisplay,
        onSetColorModeClick
      }}
    />
  )
}
