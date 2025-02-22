import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GlobalState from './Context/index.jsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const getQuery = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalState>
      <BrowserRouter basename="/React-Practice">
       <QueryClientProvider client={getQuery}>
         <App />
       </QueryClientProvider>
      </BrowserRouter>
    </GlobalState>
  </StrictMode>,
)
