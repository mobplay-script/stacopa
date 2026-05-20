# Stacopa — Website Statis

Website resmi [stacopa.com](https://stacopa.com), dikonversi dari WordPress menjadi static HTML. Dihosting di Proxmox LXC dan diakses publik via Cloudflare Tunnel.

## Tech Stack

- **Format:** Static HTML (WordPress export)
- **Server:** `serve` (Node.js static file server)
- **Deployment:** Proxmox LXC + Cloudflare Tunnel

## Struktur

```
/
├── index.html              # Halaman utama
├── company/                # Profil perusahaan (history, vision, CSR, dll)
├── products/               # Halaman produk & layanan
├── casestudy/              # Case study
├── clients/                # Daftar klien
├── contact-us/             # Halaman kontak
├── serve.json              # Konfigurasi server (clean URLs, no directory listing)
└── wp-content/             # Assets: gambar, CSS, JS, font
    ├── uploads/            # Gambar konten
    ├── themes/stacopa/     # CSS, JS, font, favicon
    └── plugins/            # Plugin assets (slider, form, dll)
```

## Struktur Server

- **App directory:** `/var/www/stacopa`
- **Service:** `stacopa-static.service` (systemd)
- **Port:** 8080 (diakses via Cloudflare Tunnel)

## Update Konten

### Mengedit halaman
Edit langsung file `index.html` atau file di folder terkait, lalu upload ke server:

```bash
scp -r . root@192.168.18.102:/var/www/stacopa/
```

### Mengganti gambar slider (beranda)
Buka `index.html`, cari `<ul class="slides">`, sesuaikan tag `<li><img src="..."></li>`.

### Form kontak
Form bawaan tidak berfungsi (butuh backend PHP). Gunakan layanan eksternal seperti [Formspree](https://formspree.io) atau [Getform](https://getform.io) dengan memodifikasi `contact-us/index.html`.

## Optimalisasi yang Sudah Dilakukan

- Hapus file `xmlrpc` dan folder `feed/` & `comments/` (residu WordPress)
- Hapus meta tag generator WordPress dari seluruh HTML (menyembunyikan versi lama dari bot)
- Ganti link jQuery ke CDN resmi agar slider berfungsi
- Tambah `serve.json` dengan clean URLs dan directory listing dinonaktifkan

## Hak Cipta

Copyright &copy; 2013 - Stacopa Raya. All Rights Reserved.
