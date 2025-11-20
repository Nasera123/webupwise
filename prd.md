# Landing Page Download APK

## Ringkasan

Halaman statis sederhana untuk mengunduh file APK Android. Hanya menampilkan satu gambar aplikasi, nama, deskripsi singkat, dan tombol Download. Ditujukan untuk distribusi langsung file APK.

## Tujuan

* Sediakan halaman yang cepat dan responsif untuk mengunduh APK.
* Minimalis: satu gambar, satu tombol unduh.
* Mudah di-deploy pada hosting statis.

## Sasaran Pengguna

* Pengguna Android yang ingin mengunduh file APK langsung.
* Pengguna yang mengakses lewat mobile dan desktop.

## Fitur Utama

* Judul aplikasi.
* Gambar tunggal aplikasi (preview). Nama file: `app-preview.png`.
* Deskripsi singkat maksimal 2 kalimat.
* Tombol Download yang mengarah ke file APK. Nama file: `app-release.apk`.
* Informasi versi dan ukuran file yang terlihat di bawah tombol.
* Responsif pada layar mobile.

## Persyaratan Teknis

* Teknologi: HTML5 dan CSS3. Tidak ada framework backend.
  File APK disimpan di root hosting atau folder assets.
  Tidak perlu routing server.
  MIME type APK: application/vnd.android.package-archive.

## Struktur File (direkomendasikan)

* index.html
* assets/

  * app-preview.png
  * styles.css
  * script.js (opsional)
* app-release.apk

## Konten Halaman

* Title tag: nama aplikasi.
* `<img>` menggunakan `alt` yang deskriptif.
* Tombol `<a href="/app-release.apk" download>` untuk memicu unduhan.
* Teks versi: `Versi: 1.0.0`.
* Teks ukuran: `Ukuran: 12 MB`.

## Alur Pengguna

1. Buka halaman.
2. Lihat gambar aplikasi dan nama.
3. Tekan tombol Download.
4. Browser mulai mengunduh file APK.

## Acceptance Criteria (Kriteria Selesai)

* Halaman memuat gambar dan tombol.
* Klik tombol memulai unduhan file APK pada Chrome dan Firefox Android.
* Halaman tampil rapi pada layar 360x800 (mobile) dan 1366x768 (desktop).
* Waktu muat awal di bawah 2 detik pada koneksi 4G umum.

## Keamanan dan Privasi

* Jangan menyimpan data pengguna pada halaman ini.
* Jika melacak klik, gunakan analytics yang anonim.
* Tampilkan peringatan singkat bila pengguna mengunduh dari luar Play Store (opsional).

## Hosting dan Deployment

* Opsi cepat: Netlify, Vercel, GitHub Pages.
* Jika menggunakan S3/CloudFront, pastikan CORS dan MIME type benar.
* Proses deploy: push repo → build (tidak perlu) → publikasi file statis.

## QA Checklist

* [ ] Gambar `app-preview.png` muncul dan tidak terdistorsi.
* [ ] Tombol Download memulai unduhan di Android.
* [ ] Metadata versi dan ukuran sesuai file APK sebenarnya.
* [ ] Responsif: elemen terpusat dan dapat dijangkau jempol.

## Notes untuk AI Coding

* Gunakan komponen statis saja. Jangan tambahkan backend kecuali diminta.
* Sertakan fallback text untuk kasus file tidak tersedia.
* Berikan komentar singkat di HTML untuk lokasi file APK.

---

Version: 1.0.0
Tanggal: 2025-11-20
Penanggung jawab: Anda
