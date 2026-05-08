import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
  ],
  // base: '/portfolio/', // Set the base path for GitHub Pages
  base: '/', // Set the base path for development
})
