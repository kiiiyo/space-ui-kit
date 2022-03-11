import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
//
import { HomeContainer, SignInContainer, CallbackContainer } from '@/containers'

export const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeContainer />} />
      <Route path="/callback" element={<CallbackContainer />} />
      <Route path="/auth/login" element={<SignInContainer />} />
      <Route path="/404" element={<div>Not Found</div>} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  )
}

export default Router
