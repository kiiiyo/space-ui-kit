import { FC } from 'react'
//
import { Template, Organisms, Atoms } from '@/components'

// Interface

// Presenter

export const SystemErrorPage: FC = () => {
  return (
    <Template.ErrorTemplate>
      <Atoms.Container>
        <Organisms.SystemErrorSection />
      </Atoms.Container>
    </Template.ErrorTemplate>
  )
}
