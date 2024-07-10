import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ApiProvider } from './common/context/api-context'
import { GlobalStyled } from './common/global/globalStyled'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<>
    <GlobalStyled/>
    <ApiProvider>
    <App />
    </ApiProvider>
  </>
  </React.StrictMode>,
)
