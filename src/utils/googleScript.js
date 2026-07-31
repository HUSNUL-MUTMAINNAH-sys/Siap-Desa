/**
 * Integrasi Buku Tamu -> Google Spreadsheet via Google Apps Script.
 *
 * CARA SETUP:
 * 1. Buat Google Spreadsheet baru, beri nama kolom pada baris pertama:
 *    Timestamp | Nama | Alamat | Nomor HP | Keperluan
 * 2. Buka Extensions > Apps Script, lalu tempel kode berikut:
 *
 *    function doPost(e) {
 *      const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *      const data = JSON.parse(e.postData.contents);
 *      sheet.appendRow([
 *        new Date(),
 *        data.nama,
 *        data.alamat,
 *        data.noHp,
 *        data.keperluan,
 *      ]);
 *      return ContentService.createTextOutput(
 *        JSON.stringify({ status: 'success' })
 *      ).setMimeType(ContentService.MimeType.JSON);
 *    }
 *
 * 3. Deploy > New deployment > Web app.
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Salin URL Web App yang dihasilkan, tempel ke GOOGLE_SCRIPT_URL di bawah.
 */

export const GOOGLE_SCRIPT_URL =
  import.meta.env.VITE_GOOGLE_SCRIPT_URL ||
  'https://script.google.com/macros/s/GANTI_DENGAN_ID_DEPLOYMENT_ANDA/exec';

export async function submitBukuTamu(payload) {
  // Google Apps Script web apps do not return CORS headers for JSON responses
  // when called with a simple fetch, so we use 'no-cors' and treat the
  // request as fire-and-forget, relying on network success/failure only.
  const response = await fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify(payload),
  });

  return response;
}
