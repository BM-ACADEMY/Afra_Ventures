import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Root-absolute asset paths, so every page (including 404.html served at a
  // deep missing URL) loads /assets/… correctly.
  base: '/',
})
