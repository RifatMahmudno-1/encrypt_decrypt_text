import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import tailwindConfig from './tailwind.config.js'

const clientDir = dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  root: join(clientDir, './src'),
  server: {
    port: 3000
  },
  plugins: [react()],
  build: {
    assetsInlineLimit: 0
  },
  resolve: {
    alias: [{ find: '@', replacement: join(clientDir, './src') }]
  },
  css: {
    postcss: {
      plugins: [tailwindcss({ config: tailwindConfig }), autoprefixer()]
    }
  }
})
