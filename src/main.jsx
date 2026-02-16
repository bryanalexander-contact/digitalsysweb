```
import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
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

// If the container has children, it means it was prerendered (production/build)
// If it's empty, it's local development (dev server)
if (container.hasChildNodes()) {
  hydrateRoot(container, rootElement);
} else {
  createRoot(container).render(rootElement);
}
```