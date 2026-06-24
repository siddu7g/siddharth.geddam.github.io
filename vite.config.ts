import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages user site (siddu7g.github.io repo): base stays '/'
// For project site (siddu7g.github.io/repo-name): set base to '/repo-name/'
export default defineConfig({
  base: '/',
  plugins: [react()],
})
