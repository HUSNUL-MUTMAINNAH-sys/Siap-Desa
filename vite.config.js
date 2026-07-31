import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Base path dideteksi otomatis saat build berjalan di GitHub Actions,
// berdasarkan nama repository (GITHUB_REPOSITORY = "owner/repo").
// - Jika repo bernama "owner.github.io" (Pages tipe User/Organization),
//   base otomatis "/" (root domain).
// - Jika repo project biasa (mis. "siap-desa"), base otomatis "/siap-desa/".
// - Saat dijalankan lokal (npm run dev / build manual), base default "/".
function resolveBase() {
  const repo = process.env.GITHUB_REPOSITORY; // contoh: "username/siap-desa"
  if (!repo) return '/';
  const name = repo.split('/')[1] || '';
  if (name.endsWith('.github.io')) return '/';
  return `/${name}/`;
}

export default defineConfig({
  plugins: [react()],
  base: resolveBase(),
  build: {
    outDir: 'dist',
  },
});
