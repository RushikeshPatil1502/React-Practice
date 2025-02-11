import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GlobalState from './Context/index.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalState>
      <BrowserRouter basename="/React-Practice">
        <App />
      </BrowserRouter>
    </GlobalState>
  </StrictMode>,
)
