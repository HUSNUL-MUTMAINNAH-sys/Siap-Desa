# SIAP DESA
### Sistem Informasi Administrasi dan Pelayanan Desa — Kabupaten Bantaeng, Sulawesi Selatan

Website frontend modern untuk pelayanan administrasi desa. Dibangun tanpa backend
Node.js maupun database MySQL — seluruh data layanan berasal dari file JSON statis,
dan data Buku Tamu dikirim langsung ke Google Spreadsheet melalui Google Apps Script.

---

## ✨ Fitur

- Beranda dengan hero fullscreen, jam operasional, dan ringkasan layanan
- Persyaratan Surat (6 jenis surat) lengkap dengan syarat, estimasi waktu, biaya, dan unduh template
- Pelayanan — alur/flow pelayanan dalam bentuk stepper timeline modern
- Buku Tamu digital — terkirim otomatis ke Google Spreadsheet
- FAQ dalam bentuk accordion
- Kontak — peta lokasi, WhatsApp, email, jam pelayanan, dan QR Code menuju Buku Tamu
- Dark mode, loading screen, scroll reveal animation, glassmorphism, sticky navbar, back to top
- Responsive 100% dan siap deploy ke GitHub Pages

## 🧱 Tech Stack

- React 18 + Vite
- Tailwind CSS
- Framer Motion (animasi)
- Lucide React (ikon)
- Swiper.js
- React Router DOM

## 📁 Struktur Folder

```
siap-desa/
├── public/
│   ├── templates/         # Template surat (.txt) yang bisa diunduh warga
│   ├── 404.html            # Trik SPA routing untuk GitHub Pages
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/         # Navbar, Footer, LoadingScreen, BackToTop
│   │   └── ui/              # Reveal, Timeline, Accordion, SectionTitle, VillageSeal
│   ├── data/                # suratData.json, pelayananData.json, faqData.json
│   ├── hooks/                # useDarkMode
│   ├── pages/                # Beranda, PersyaratanSurat, Pelayanan, BukuTamu, FAQ, Kontak
│   ├── utils/                 # googleScript.js (integrasi Google Apps Script)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🚀 Menjalankan Secara Lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:5173` di browser.

## 🔗 Setup Google Apps Script untuk Buku Tamu

1. Buat **Google Spreadsheet** baru. Pada baris pertama (header), isi kolom:
   `Timestamp | Nama | Alamat | Nomor HP | Keperluan`
2. Buka menu **Extensions → Apps Script**, hapus kode default, lalu tempel:

   ```javascript
   function doPost(e) {
     const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     const data = JSON.parse(e.postData.contents);
     sheet.appendRow([
       new Date(),
       data.nama,
       data.alamat,
       data.noHp,
       data.keperluan,
     ]);
     return ContentService.createTextOutput(
       JSON.stringify({ status: 'success' })
     ).setMimeType(ContentService.MimeType.JSON);
   }
   ```

3. Klik **Deploy → New deployment**, pilih tipe **Web app**.
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Salin URL Web App yang dihasilkan (diakhiri `/exec`).
5. Salin `.env.example` menjadi `.env`, lalu isi:

   ```
   VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/xxxxxxx/exec
   ```

6. Jalankan ulang `npm run dev`. Form Buku Tamu kini akan mengirim data langsung
   ke Google Spreadsheet Anda.

> Catatan: permintaan menggunakan mode `no-cors` karena keterbatasan CORS pada
> Google Apps Script Web App, sehingga aplikasi tidak dapat membaca isi respons
> secara detail — namun data tetap tersimpan di spreadsheet selama URL benar
> dan deployment diatur "Anyone" dapat mengakses.

## 🌐 Deploy ke GitHub Pages

1. Buat repository baru di GitHub, misalnya bernama `siap-desa`.
2. Sesuaikan `base` di `vite.config.js` dan `homepage` di `package.json` agar
   sesuai dengan nama repository Anda, misal `/siap-desa/`.
3. Sesuaikan juga `basename` pada `src/main.jsx` dan `pathSegmentsToKeep` pada
   `public/404.html` bila nama repo berbeda.
4. Install dependency deploy (sudah termasuk di `devDependencies`):

   ```bash
   npm install
   ```

5. Build dan deploy:

   ```bash
   npm run deploy
   ```

6. Aktifkan GitHub Pages di **Settings → Pages**, pilih branch `gh-pages`.
7. Website akan tersedia di `https://<username>.github.io/siap-desa/`.

## 📝 Mengelola Konten

Semua konten layanan dapat diubah tanpa menyentuh kode komponen:

- `src/data/suratData.json` — daftar jenis surat, persyaratan, biaya, estimasi
- `src/data/pelayananData.json` — tahapan alur pelayanan & jam operasional
- `src/data/faqData.json` — daftar pertanyaan & jawaban FAQ
- `public/templates/` — file template surat yang dapat diunduh warga

## 📄 Lisensi

Dibuat untuk keperluan pelayanan publik Pemerintah Desa, Kabupaten Bantaeng,
Sulawesi Selatan. Bebas dimodifikasi sesuai kebutuhan desa masing-masing.
