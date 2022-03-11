import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
//
import App from './App'
import { Auth0 } from '@/configs'
import { Context } from '@/features'
import { applyGlobalStyle } from '@/styles'

//import reportWebVitals from './reportWebVitals'

applyGlobalStyle()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain={Auth0.auth0Config.domain}
        clientId={Auth0.auth0Config.clientId}
        redirectUri={window.location.origin}
      >
        <Context.AppContext.Provider>
          <App />
        </Context.AppContext.Provider>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals()
