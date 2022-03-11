import { FC } from 'react'
import { Navigate } from 'react-router-dom'
//
import { Hooks } from '@/features'

const CallbackContainer: FC = () => {
  const {
    state: { error, isLoading, isAuthenticated }
  } = Hooks.Auth.useAuth()

  if (isLoading) {
    return <div>Loading</div>
  }
  if (error) {
    return <Navigate to="/auth/login" />
  }

  console.log('CallbackContainer', isAuthenticated)

  if (isAuthenticated) {
    return <Navigate to="/" />
  } else {
    return <Navigate to="/auth/login" />
  }
}
export default CallbackContainer
