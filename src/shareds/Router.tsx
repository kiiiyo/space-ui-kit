import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
//
import {
  RouteContainer,
  LocaleContainer,
  HomeContainer,
  SignInContainer,
  DashboardContainer,
  BlankSingleContainer,
  BlankNestContainer
} from '@/containers'

export const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<RouteContainer redirect="/en/" />} />
      <Route path="/:locale/" element={<LocaleContainer />}>
        <Route path="/:locale/" element={<HomeContainer />} />
        <Route path="/:locale/auth/sign-in" element={<SignInContainer />} />
        <Route path="/:locale/dashboard" element={<DashboardContainer />} />
        <Route
          path="/:locale/dashboard/pages/blank-single"
          element={<BlankSingleContainer />}
        />
        <Route
          path="/:locale/dashboard/pages/blank-nest"
          element={<BlankNestContainer />}
        />
      </Route>
      <Route path="/404" element={<div>Not Found</div>} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  )
}

export default Router
