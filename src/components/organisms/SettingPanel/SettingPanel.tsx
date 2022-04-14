import { FC, useState, useCallback } from 'react'
import { ClickAwayListener, Slide } from '@mui/material'
import { useNavigate } from 'react-router-dom'
//
import { Hooks } from '@/features'
import type { ColorMode } from '@/features/context/AppContext'
import type { TLocale } from '@/types/locale'
import { Atoms } from '@/components'
//
import {
  typographyStyle,
  posStyle,
  buttonStyle,
  panelContainerStyle,
  panelHeaderStyle,
  panelBodyStyle,
  panelSectionStyle,
  panelRowStyle,
  panelRowItemStyle,
  buttonLightModeStyle,
  buttonDarkModeStyle
} from './style'

// Interface
export type SettingPanelPresenterProps = {
  state: {
    isSettingPanelDisplay: boolean
    language: TLocale
  }
  actions: {
    handleToggleSearchbarDisplay: () => void
    handleCloseSearchbarDisplay: () => void
    onSetColorModeClick: (mode: ColorMode) => void
    onLanguageChange: (
      event: React.MouseEvent<HTMLElement>,
      nextValue: TLocale
    ) => void
  }
}

//  Style

// Presenter
export const SettingPanelPresenter: FC<SettingPanelPresenterProps> = ({
  state: { isSettingPanelDisplay, language },
  actions: {
    handleToggleSearchbarDisplay,
    handleCloseSearchbarDisplay,
    onSetColorModeClick,
    onLanguageChange
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
              <Atoms.Typography css={typographyStyle} component="h5">
                Settings
              </Atoms.Typography>
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
              {/* Color Mode Block  */}
              <Atoms.Box>
                <Atoms.Typography css={typographyStyle} component="h6">
                  Mode
                </Atoms.Typography>
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
              {/* Color Mode Block */}
              {/* Language Block */}
              <Atoms.Box sx={{ marginTop: '16px' }}>
                <Atoms.Typography css={typographyStyle} component="h6">
                  Language
                </Atoms.Typography>
                <Atoms.Box css={panelSectionStyle}>
                  <Atoms.ToggleButtonGroup
                    value={language}
                    orientation="vertical"
                    fullWidth
                    size="large"
                    exclusive
                    onChange={onLanguageChange}
                  >
                    <Atoms.ToggleButton value="en">English</Atoms.ToggleButton>
                    <Atoms.ToggleButton value="ja">日本語</Atoms.ToggleButton>
                  </Atoms.ToggleButtonGroup>
                </Atoms.Box>
              </Atoms.Box>
              {/* Language Block */}
            </Atoms.Box>
          </Atoms.Box>
        </Slide>
      </Atoms.Box>
    </ClickAwayListener>
  )
}

// Container
export const SettingPanel: FC = () => {
  const navigate = useNavigate()

  const {
    actions: { handleSetColorMode }
  } = Hooks.App.useApp()

  const {
    state: { locale }
  } = Hooks.Locale.useLocale()

  // State
  const [language, setLanguage] = useState<TLocale>(locale)
  const [isSettingPanelDisplay, setSettingPanelDisplay] = useState(false)

  // Actions
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

  const onLanguageChange = useCallback(
    (event: React.MouseEvent<HTMLElement>, nextValue: TLocale) => {
      const pathname = location.pathname
      setLanguage(nextValue)
      navigate(pathname.replace(locale, nextValue))
    },
    [locale, navigate, setLanguage]
  )

  return (
    <SettingPanelPresenter
      state={{ isSettingPanelDisplay, language }}
      actions={{
        handleToggleSearchbarDisplay,
        handleCloseSearchbarDisplay,
        onSetColorModeClick,
        onLanguageChange
      }}
    />
  )
}
