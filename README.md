# Upwise - Landing Page Download APK

Landing page bergaya gaming/modern untuk mengunduh APK Upwise dengan desain yang terinspirasi dari Valorant.

## Struktur File

```
├── index.html              # Halaman utama
├── assets/
│   ├── styles.css         # Styling dengan tema gaming
│   ├── script.js          # JavaScript untuk interaktivitas
│   └── background.jpg     # Background image (perlu ditambahkan)
├── app-release.apk        # File APK Upwise (perlu ditambahkan)
└── README.md              # Dokumentasi ini
```

## Setup

1. **Tambahkan file yang diperlukan:**
   - Letakkan gambar background di `assets/background.jpg` (minimal 1920x1080px)
   - Letakkan file APK di `app-release.apk`

2. **Deploy ke hosting statis:**
   - Netlify: Drag & drop folder ke dashboard
   - Vercel: Connect repository dan deploy
   - GitHub Pages: Push ke repository dan aktifkan Pages

## Fitur

✅ **Desain Gaming Style:**
- Background image dengan overlay gelap
- Typography menggunakan font Rajdhani (gaming style)
- Tombol download merah dengan efek hover
- Animasi fade-in dan parallax
- Efek mouse movement untuk interaktivitas

✅ **Responsif & Performance:**
- Responsif untuk mobile (360x800) dan desktop (1366x768)
- Animasi loading yang smooth
- Preload APK untuk performa lebih baik
- Fallback jika background image gagal dimuat

✅ **User Experience:**
- Error notification jika APK tidak tersedia
- Click tracking untuk analytics
- Smooth transitions dan hover effects
- Mobile-optimized touch interactions

## Kustomisasi

### Mengubah Informasi Aplikasi

Edit di `index.html`:
```html
<title>Upwise - Download APK</title>
<h1 class="hero-title">UPWISE</h1>
<p class="hero-description">UPWISE — APLIKASI PEMBELAJARAN...</p>
```

### Mengubah Warna Tombol

Edit di `assets/styles.css`:
```css
/* Download button - saat ini merah */
background: linear-gradient(135deg, #ff4757, #ff3742);

/* Untuk warna lain, contoh biru: */
background: linear-gradient(135deg, #3742fa, #2f3542);
```

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance

- Optimized CSS dengan minimal dependencies
- Lazy loading untuk gambar
- Preload APK file
- Compressed assets

## Security

- Tidak menyimpan data pengguna
- HTTPS recommended untuk production
- Content Security Policy ready

## QA Checklist

- [ ] Gambar `app-preview.png` ditambahkan dan muncul dengan benar
- [ ] File `app-release.apk` ditambahkan dan dapat diunduh
- [ ] Tombol download berfungsi di Chrome dan Firefox Android
- [ ] Halaman responsif di berbagai ukuran layar
- [ ] Metadata versi dan ukuran sesuai file APK
- [ ] Peringatan keamanan muncul dengan jelas

## Deployment

### Netlify
```bash
# Drag & drop folder ke netlify.com
# Atau gunakan Netlify CLI
npm install -g netlify-cli
netlify deploy --prod --dir .
```

### Vercel
```bash
npm install -g vercel
vercel --prod
```

### GitHub Pages
1. Push ke repository GitHub
2. Settings → Pages → Source: Deploy from branch
3. Pilih branch main/master

---

**Version:** 1.0.0  
**Created:** 2025-11-20  
**Sesuai PRD:** ✅