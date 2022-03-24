import { FC } from 'react'
//
import { Template, Organisms, Atoms } from '@/components'

// Interface

// Presenter

export const NotFoundErrorPage: FC = () => {
  return (
    <Template.ErrorTemplate>
      <Atoms.Container>
        <Organisms.NotFoundSection />
      </Atoms.Container>
    </Template.ErrorTemplate>
  )
}
