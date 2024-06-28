import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GlobalStyled } from './common/globals/globalStyled.js'
import { ApiProvider } from './context/api-context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <GlobalStyled/>
      <ApiProvider>
        <App/>
      </ApiProvider>
    </>
  </React.StrictMode>,
)
