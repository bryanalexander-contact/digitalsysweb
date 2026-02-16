import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { CookiesProvider } from 'react-cookie'
import './index.css'
import App from './App.jsx'

const container = document.getElementById('root');
const rootElement = (
  <StrictMode>
    <CookiesProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </CookiesProvider>
  </StrictMode>
);

hydrateRoot(container, rootElement);