import { FC, ReactNode } from 'react' //
//
import { Atoms } from '@/components'

type THomeHeroProps = {
  state: {
    title?: ReactNode
    description?: string
    image?: ReactNode
  }
}

export const HomeHero: FC<THomeHeroProps> = ({
  state: { title, description, image }
}) => {
  return (
    <Atoms.SpaceContainer>
      <Atoms.Container>
        <div className="py-12 text-center md:py-20">
          <Atoms.Typography component="h1" sx={{ color: '#fff' }}>
            {title}
          </Atoms.Typography>
          {description && (
            <div className="mx-auto max-w-3xl">
              <p className="px-12 text-xl text-white">{description}</p>
            </div>
          )}
          {image}
        </div>
      </Atoms.Container>
    </Atoms.SpaceContainer>
  )
}
