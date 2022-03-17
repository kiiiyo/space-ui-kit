import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'

//
import App from './App'
import { Context } from '@/features'
import i18n from '@/utils/i18n'
//
import 'simplebar/src/simplebar.css'
import { applyGlobalStyle } from '@/styles'

//import reportWebVitals from './reportWebVitals'

applyGlobalStyle()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <Context.AppContext.Provider>
          <App />
        </Context.AppContext.Provider>
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals()
