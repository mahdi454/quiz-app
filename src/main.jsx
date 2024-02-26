import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { QuezProvider } from './context/QuezContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuezProvider>
    <App />
    </QuezProvider>
  </React.StrictMode>,
)
