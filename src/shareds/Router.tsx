import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
//
import { HomeContainer } from '@/containers'

export const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeContainer />} />
      <Route path="/404" element={<div>Not Found</div>} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  )
}

export default Router
