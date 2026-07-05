import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // GitHub Pages project sites are served from /RepoName/. If you later map
  // a custom domain at the root instead, change this back to '/'.
  base: '/FInancialSevaIndia/',
})
