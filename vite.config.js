import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/tierheim-demo",
  plugins: [react()],
})
