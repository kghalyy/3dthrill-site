import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') }
  },
  // IMPORTANT: this makes assets load correctly on https://<user>.github.io/3dthrill-site/
  base: '/3dthrill-site/',
})
