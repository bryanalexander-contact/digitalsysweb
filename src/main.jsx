import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { CookiesProvider } from 'react-cookie' // 1. Importamos el proveedor de cookies
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import './index.css'
import App from './App.jsx'

const container = document.getElementById('root');
const rootElement = (
  <StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}>
      <CookiesProvider> {/* 2. Envolvemos todo con Cookies */}
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </CookiesProvider>
    </GoogleReCaptchaProvider>
  </StrictMode>
);

hydrateRoot(container, rootElement);