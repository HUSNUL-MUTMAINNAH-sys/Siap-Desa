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

## 🌐 Siap Deploy ke GitHub Pages (Otomatis)

Project ini sudah dilengkapi **GitHub Actions workflow** (`.github/workflows/deploy.yml`)
yang otomatis build & publish setiap kali Anda `git push` ke branch `main`.
Base path juga terdeteksi otomatis dari nama repository — **tidak perlu edit
`vite.config.js` atau `main.jsx` secara manual**.

**Langkah-langkah:**

1. Buat repository baru di GitHub (bebas nama apapun, misal `siap-desa`).
2. Push project ini ke repository tersebut:

   ```bash
   git init
   git add .
   git commit -m "Initial commit - SIAP DESA"
   git branch -M main
   git remote add origin https://github.com/USERNAME/NAMA-REPO.git
   git push -u origin main
   ```

3. Di GitHub, buka repo → **Settings → Pages**.
4. Pada **Build and deployment → Source**, pilih **GitHub Actions** (bukan
   "Deploy from a branch").
5. Tunggu tab **Actions** selesai berjalan (ikon centang hijau ✅), lalu buka
   URL yang ditampilkan di situ / di Settings → Pages, biasanya:

   ```
   https://USERNAME.github.io/NAMA-REPO/
   ```

6. Selesai! Setiap perubahan berikutnya yang di-`push` ke `main` akan otomatis
   ter-deploy ulang tanpa perintah tambahan.

> Jika nama repo Anda adalah `USERNAME.github.io` (Pages tipe User/Organization),
> situs otomatis terdeteksi tayang di root domain (`https://USERNAME.github.io/`)
> tanpa sub-path. Untuk kasus ini, ubah juga `pathSegmentsToKeep = 1` menjadi
> `pathSegmentsToKeep = 0` di `public/404.html` agar navigasi langsung ke
> halaman seperti `/buku-tamu` tetap berfungsi.

### Alternatif: Deploy Manual via Branch `gh-pages`

Jika lebih suka metode manual (tanpa GitHub Actions):

```bash
npm install
npm run deploy
```

Lalu di **Settings → Pages**, pilih **Source: Deploy from a branch**, branch
`gh-pages`, folder `/ (root)`. Karena base path dideteksi dari environment
variable `GITHUB_REPOSITORY` (hanya tersedia di GitHub Actions), untuk metode
manual ini set base secara manual di `vite.config.js`:

```js
base: '/NAMA-REPO/', // atau '/' jika deploy ke root domain
```

dan `basename` di `src/main.jsx` akan otomatis mengikuti nilai tersebut
karena sudah membaca `import.meta.env.BASE_URL`.

## 📝 Mengelola Konten

Semua konten layanan dapat diubah tanpa menyentuh kode komponen:

- `src/data/suratData.json` — daftar jenis surat, persyaratan, biaya, estimasi
- `src/data/pelayananData.json` — tahapan alur pelayanan & jam operasional
- `src/data/faqData.json` — daftar pertanyaan & jawaban FAQ
- `public/templates/` — file template surat yang dapat diunduh warga

## 📄 Lisensi

Dibuat untuk keperluan pelayanan publik Pemerintah Desa, Kabupaten Bantaeng,
Sulawesi Selatan. Bebas dimodifikasi sesuai kebutuhan desa masing-masing.
