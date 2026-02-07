import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import prerender from '@prerenderer/rollup-plugin'
import Sitemap from 'vite-plugin-sitemap'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Definimos todas las rutas que mencionaste
const routes = [
  '/', 
  '/services', 
  '/about', 
  '/quotepage', 
  '/cookies', 
  '/terms', 
  '/privacy'
]

export default defineConfig({
  plugins: [
    react(),
    // Configuración del Sitemap y Robots.txt
    Sitemap({
      hostname: 'https://digitalsysweb.com', 
      dynamicRoutes: routes,
      generateRobotsTxt: true,
      robots: [{
        userAgent: '*',
        allow: '/',
        sitemap: 'https://digitalsysweb.com/sitemap.xml'
      }]
    }),
    // Configuración de Prerender mejorada
    prerender({
      routes: routes,
      renderer: '@prerenderer/renderer-puppeteer',
      staticDir: path.join(__dirname, 'dist'),
      rendererOptions: {
        maxConcurrentRoutes: 1,
        renderAfterTime: 500, // Espera medio segundo para asegurar que React cargue el contenido
        headless: true // Ejecuta el navegador en segundo plano
      },
    }),
  ],
})