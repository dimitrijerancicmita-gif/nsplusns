import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // ovo omogućava pristup sa drugih uređaja u LAN-u
    port: 5173, // po želji, default je 5173
  },
  base: "/nsplusns/"
})