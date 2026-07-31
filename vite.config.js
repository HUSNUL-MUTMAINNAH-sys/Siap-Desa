import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Ganti '/siap-desa/' sesuai nama repository GitHub Pages Anda.
// Jika deploy ke root domain (username.github.io), gunakan base: '/'
export default defineConfig({
  plugins: [react()],
  base: '/siap-desa/',
  build: {
    outDir: 'dist',
  },
});
