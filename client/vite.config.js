import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Root-absolute asset paths, so every page (including 404.html served at a
  // deep missing URL) loads /assets/… correctly.
  base: '/',
  // Vitest: unit tests only. Playwright's tests/*.spec.js run with `npm run test:e2e`.
  test: {
    include: ['src/**/*.test.{js,jsx}'],
  },
})
