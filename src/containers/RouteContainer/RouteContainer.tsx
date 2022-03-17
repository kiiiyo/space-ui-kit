import { FC } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
//

type TRouteContainerProps = {
  redirect: string
}

const RouteContainer: FC<TRouteContainerProps> = ({ redirect }) => {
  return (
    <Navigate to={redirect} state={{ from: useLocation() }} replace={false} />
  )
}
export default RouteContainer
