---
inclusion: manual
---

# Project Setup Guide - Best Practices

## Ketika Membuat Project Baru (React + Vite)

### 1. **Gunakan Template yang Terupdate**
Selalu gunakan template resmi dengan versi terbaru:
```bash
npm create vite@latest my-project -- --template react
```

### 2. **Dependency Versions yang Compatible**
Pastikan versi dependencies compatible sebelum install:
- **Vite**: Gunakan versi 5.x atau terbaru (hindari downgrade dari yang lebih baru)
- **@vitejs/plugin-react**: Pastikan support versi Vite yang digunakan
- **React Router**: Update ke versi terbaru untuk security patches

Contoh `package.json` yang aman:
```json
{
  "devDependencies": {
    "vite": "^5.4.0",
    "@vitejs/plugin-react": "^4.3.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0"
  }
}
```

### 3. **Jangan Gunakan --force pada npm audit fix**
Hindari `npm audit fix --force` karena bisa mengupgrade major versions:
```bash
# ❌ JANGAN
npm audit fix --force

# ✅ GUNAKAN
npm audit fix
npm install --legacy-peer-deps  # jika ada peer dependency conflict
```

### 4. **Cek Security Sebelum Commit**
Sebelum push ke repository:
```bash
npm audit
# Jika ada vulnerability yang tidak bisa diperbaiki, dokumentasikan di README
```

### 5. **Update package.json Secara Regular**
Setiap bulan, jalankan:
```bash
npm outdated  # Lihat package yang perlu update
npm update    # Update minor & patch versions
```

### 6. **Setup npm Configuration**
Buat `.npmrc` di root project untuk konsistensi:
```
legacy-peer-deps=true
audit-level=moderate
```

### 7. **Dokumentasi di README**
Tambahkan section untuk setup di README:
```markdown
## Installation

```bash
npm install
npm run dev
```

### Requirements
- Node.js 18+ 
- npm 9+
```

## Checklist untuk Project Baru

- [ ] Gunakan template Vite resmi terbaru
- [ ] Cek `package.json` - pastikan semua dependencies compatible
- [ ] Jalankan `npm install` tanpa --force
- [ ] Jalankan `npm audit` - catat vulnerability yang ada
- [ ] Test `npm run dev` sebelum commit pertama
- [ ] Tambahkan `.npmrc` jika diperlukan
- [ ] Update README dengan setup instructions
- [ ] Commit `.npmrc` dan `package-lock.json` ke git

## Referensi
- [Vite Official Docs](https://vitejs.dev/)
- [NPM Audit Documentation](https://docs.npmjs.com/cli/v10/commands/npm-audit)
