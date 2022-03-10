import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
//
export const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/404" element={<div>Not Found</div>} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  )
}

export default Router
