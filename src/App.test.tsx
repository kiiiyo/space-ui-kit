import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import App from './App'

describe('App Component', () => {
  test('renders main page correctly', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
  })
})
