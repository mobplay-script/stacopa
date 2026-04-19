# Stacopa.com - Static HTML Website

Proyek ini adalah *backup* / konversi statis HTML dari website perusahaan Stacopa (sebelumnya berbasis WordPress). Karena sudah berformat statis, situs ini siap untuk dihosting di platform seperti GitHub Pages, Netlify, atau web server standar apa pun (Apache, Nginx) tanpa memerlukan PHP atau database.

## Perubahan dan Optimalisasi Terbaru

Proyek ini telah dibersihkan dan dioptimalkan dari sisa-sisa (residu) sistem WordPress lama agar lebih aman, ringan, dan fungsional:

1. **Pembersihan File Sistem WordPress:**
   - Menghapus file `xmlrpc0db00db0.html` (sering menjadi target eksploitasi bot).
   - Menghapus folder `feed/` dan `comments/` beserta isinya karena fitur RSS dinamis sudah tidak digunakan pada web statis.

2. **Penghapusan Meta Tag WordPress (Keamanan & Kerapian):**
   - Menghapus seluruh tag `generator` WordPress, link RSD, Windows Live Writer (wlwmanifest), dan link `alternate` RSS Feed dari bagian `<head>` pada **seluruh 14 file HTML**. Hal ini bertujuan untuk menyembunyikan jejak versi WordPress lawas dari bot peretas.

3. **Perbaikan Fungsionalitas jQuery & Slider (Carousel):**
   - Memperbaiki tautan (link) library jQuery (`jquery.js` dan `jquery-migrate.js`) yang sebelumnya rusak/hilang (karena mengarah ke folder internal sistem `wp-includes` yang tidak ikut diekspor).
   - Mengganti tautan-tautan tersebut dengan **CDN Resmi jQuery** (`https://code.jquery.com/`) di seluruh file HTML.
   - Hasilnya, fitur animasi FlexSlider (banner bergambar di halaman beranda) kini berfungsi kembali dengan normal dan lancar secara statis.

## Catatan Pengembangan (Development)

- **Menambah/Mengganti Gambar Slider Beranda:** Buka `index.html`, cari struktur `<ul class="slides">`, dan sesuaikan tag `<li><img src="..."></li>` dengan lokasi gambar Anda (contoh di `wp-content/uploads/`).
- **Fitur Formulir Kontak:** Sistem form bawaan (yang menggunakan AJAX dan Contact Form plugin WordPress) tidak lagi berfungsi karena ketiadaan backend PHP. Sangat disarankan untuk memodifikasi ulang form HTML di `contact-us/index.html` dan mengarahkannya ke layanan eksternal gratis (seperti Formspree atau Getform) agar email tetap dapat terkirim.

## Hak Cipta
Copyright &copy; 2013 - Stacopa Raya. All Rights Reserved.