import { FC } from 'react'
//
import { Template, Organisms } from '@/components'

// Interface

// Presenter

export const HomePage: FC = () => {
  return (
    <Template.GeneralTemplate
      headerBar={<Organisms.GeneralHeaderBar />}
      footer={<Organisms.GeneralFooter />}
    >
      <Organisms.HomeHero
        state={{
          title: 'title',
          description: 'adaffasd'
        }}
      />
    </Template.GeneralTemplate>
  )
}
