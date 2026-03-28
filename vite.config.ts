import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true
  },
  optimizeDeps: {
    force: true,  // Force re-bundle deps (needed after React 18 → 19 upgrade)
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split Three.js into its own chunk so it doesn't block initial paint
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          // Vendor chunk for React core
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
})
