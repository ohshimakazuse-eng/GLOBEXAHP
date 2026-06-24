import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' keeps asset paths relative so the built site works from any
// subpath (e.g. GitHub Pages) or a local static server.
export default defineConfig({
  base: './',
  plugins: [react()],
})
