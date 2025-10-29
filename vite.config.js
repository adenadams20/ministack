import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/ministack/', // 👈 Remplace par le nom exact de ton repo


  plugins: [
        tailwindcss(),

    react()],
})
