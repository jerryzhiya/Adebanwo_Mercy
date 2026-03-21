import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Detect environment: Vercel sets process.env.VERCEL = "1"
export default defineConfig({
  plugins: [react()],
  base: process.env.VERCEL ? './' : '/Adebanwo_Mercy/',
})