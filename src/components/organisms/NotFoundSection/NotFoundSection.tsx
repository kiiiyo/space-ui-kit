import { FC } from 'react' //
import { css, Theme } from '@emotion/react'
import { useTranslation } from 'react-i18next'
//
import { Atoms } from '@/components'

const titleStyle = (theme: Theme) =>
  css({
    margin: 0,
    lineHeight: 1.5,
    fontSize: '2rem',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem'
    },
    fontWeight: 'bold',
    textAlign: 'center'
  })

const descriptionStyle = (theme: Theme) =>
  css({
    margin: 0,
    lineHeight: 1.5,
    fontSize: '1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.875rem'
    },
    textAlign: 'center'
  })

const imageContainerStyle = (theme: Theme) =>
  css({
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    },
    height: 260
  })

const imageStyle = () =>
  css({
    width: '100%',
    height: '100%'
  })

export const NotFoundSection: FC = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'page.errorNotFoundPage'
  })

  return (
    <Atoms.Box>
      <Atoms.Typography css={titleStyle} component="p">
        {t('title')}
      </Atoms.Typography>
      <Atoms.Typography css={descriptionStyle} component="p">
        {t('description')}
      </Atoms.Typography>
      <Atoms.Box css={imageContainerStyle}>
        <img css={imageStyle} src="/assets/error-not-found.svg" />
      </Atoms.Box>
      <Atoms.Box sx={{ textAlign: 'center' }}>
        <Atoms.Button
          sx={{ textTransform: 'none' }}
          variant="contained"
          size="large"
          href="/"
        >
          {t('buttonLabel')}
        </Atoms.Button>
      </Atoms.Box>
    </Atoms.Box>
  )
}
