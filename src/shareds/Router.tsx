import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
//
import {
  RouteContainer,
  LocalContainer,
  HomeContainer,
  SignInContainer,
  DashboardContainer
} from '@/containers'

export const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<RouteContainer redirect="/ja/" />} />
      <Route path="/:local/" element={<LocalContainer />}>
        <Route path="/:local/" element={<HomeContainer />} />
        <Route path="/:local/auth/login" element={<SignInContainer />} />
        <Route path="/:local/dashboard" element={<DashboardContainer />} />
      </Route>
      <Route path="/404" element={<div>Not Found</div>} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  )
}

export default Router
