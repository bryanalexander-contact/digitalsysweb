import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Cambiado a la versión estándar actual
import path from 'path'
import { fileURLToPath } from 'url'
import prerender from 'vite-plugin-prerender'

// --- ESTO SOLUCIONA EL ERROR DE __DIRNAME ---
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// --------------------------------------------

export default defineConfig({
  plugins: [
    react(),
    prerender({
      // 1. Ahora __dirname funcionará correctamente
      staticDir: path.join(__dirname, 'dist'),
      
      // 2. Tus rutas
      routes: ['/', '/quote', '/contact', '/services'], 
      
      // 3. Opciones del navegador invisible
      rendererOptions: {
        maxConcurrentRoutes: 1,
        renderAfterTime: 500, 
      },
    }),
  ],
})