import { FC } from 'react'
//
import { Constant } from '@/configs'
import { Atoms } from '@/components'

export const Copyright: FC = () => {
  return (
    <Atoms.Typography
      component="small"
      sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}
    >
      <Atoms.Typography component="span" sx={{ marginRight: '0.25rem' }}>
        &copy;
      </Atoms.Typography>
      <Atoms.Typography component="span" sx={{ marginRight: '0.5rem' }}>
        {Constant.COPYRIGHT_YEAR}
      </Atoms.Typography>
      <Atoms.Typography component="span">
        {Constant.COPYRIGHT_OWNER_NAME}
      </Atoms.Typography>
    </Atoms.Typography>
  )
}
