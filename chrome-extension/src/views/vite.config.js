import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import * as path from "node:path"

function way(name){
  return path.resolve(__dirname, name)
}

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  base: './', 
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': way('src'),
      '@pages': way('src/pages/index'),
    }
  }
})
