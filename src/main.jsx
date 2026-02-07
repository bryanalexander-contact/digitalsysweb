import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { CookiesProvider } from 'react-cookie' // 1. Importamos el proveedor de cookies
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CookiesProvider> {/* 2. Envolvemos todo con Cookies */}
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </CookiesProvider>
  </StrictMode>,
)