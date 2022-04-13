import { FC } from 'react'
//
import { Page } from '@/components'
//
import { useBlankNestContainer } from './hooks'

const BlankNestContainer: FC = () => {
  const { state, actions } = useBlankNestContainer()
  return <Page.BlankNestPage state={state} actions={actions} />
}
export default BlankNestContainer
