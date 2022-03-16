import { FC, useState, useCallback } from 'react'
import { css, Theme } from '@emotion/react'
import { alpha, ClickAwayListener, Slide } from '@mui/material'
// //
// import { Hooks } from '@/features'
import { Atoms } from '@/components'

// Interface

export type SearchbarPresenterProps = {
  state: {
    isSearchbarDisplay: boolean
  }
  actions: {
    handleToggleSearchbarDisplay: () => void
    handleCloseSearchbarDisplay: () => void
  }
}

const SEARCH_BAR_MOBILE = 64
const SEARCH_BAR_DESKTOP = 92

//  Style

const searchbarStyle = (theme: Theme) =>
  css({
    top: 0,
    left: 0,
    zIndex: 99,
    width: '100%',
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    height: SEARCH_BAR_MOBILE,
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
    padding: theme.spacing(0, 3),
    backgroundColor: `${alpha(theme.palette.background.default, 0.72)}`,
    [theme.breakpoints.up('md')]: {
      height: SEARCH_BAR_DESKTOP,
      padding: theme.spacing(0, 5)
    }
  })

const searchbarButtonStyle = () =>
  css({
    textTransform: 'none'
  })

// Presenter

export const SearchbarPresenter: FC<SearchbarPresenterProps> = ({
  state: { isSearchbarDisplay },
  actions: { handleToggleSearchbarDisplay, handleCloseSearchbarDisplay }
}) => {
  return (
    <ClickAwayListener onClickAway={handleCloseSearchbarDisplay}>
      <Atoms.Box>
        {!isSearchbarDisplay && (
          <Atoms.Tooltip title="Search" placement="bottom">
            <Atoms.IconButton
              size="medium"
              onClick={handleToggleSearchbarDisplay}
            >
              <Atoms.SearchIcon fontSize="medium" />
            </Atoms.IconButton>
          </Atoms.Tooltip>
        )}
        <Slide
          direction="down"
          in={isSearchbarDisplay}
          mountOnEnter
          unmountOnExit
        >
          <Atoms.Box css={searchbarStyle}>
            <Atoms.Input
              autoFocus
              fullWidth
              disableUnderline
              placeholder="Search…"
              startAdornment={
                <Atoms.InputAdornment position="start">
                  <Atoms.SearchIcon fontSize="medium" />
                </Atoms.InputAdornment>
              }
              sx={{ mr: 1, fontWeight: 'fontWeightBold' }}
            />
            <Atoms.Button
              variant="contained"
              onClick={handleCloseSearchbarDisplay}
              css={searchbarButtonStyle}
            >
              Search
            </Atoms.Button>
          </Atoms.Box>
        </Slide>
      </Atoms.Box>
    </ClickAwayListener>
  )
}

// Container
export const Searchbar: FC = () => {
  const [isSearchbarDisplay, setSearchbarDisplay] = useState(false)

  const handleToggleSearchbarDisplay = useCallback(() => {
    setSearchbarDisplay((prev: boolean) => !prev)
  }, [setSearchbarDisplay])

  const handleCloseSearchbarDisplay = useCallback(() => {
    setSearchbarDisplay(false)
  }, [setSearchbarDisplay])

  return (
    <SearchbarPresenter
      state={{ isSearchbarDisplay }}
      actions={{
        handleToggleSearchbarDisplay,
        handleCloseSearchbarDisplay
      }}
    />
  )
}
