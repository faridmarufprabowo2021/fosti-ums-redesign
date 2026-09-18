# Product Requirements Document (PRD)
## Redesign Website Resmi FOSTI UMS — Lego Neo-Brutalist 3D Edition

---

### 1. Ringkasan Eksekutif (Executive Summary)
Website resmi **FOSTI UMS (Forum Open Source Teknik Informatika Universitas Muhammadiyah Surakarta)** (`https://www.fostiums.org/`) diredesain secara total dengan memadukan identitas organisasi mahasiswa open-source modern dan gaya desain khas dari portofolio **Farid Ma'ruf Prabowo** (`faridmarufprabowo2021/portofolio`).

Arah redesain ini mengusung estetika **Interactive 3D Lego Neo-Brutalism**:
- Elemen tactile modular dengan aksen stud Lego (`🔴 🟡 🔵 🟢`).
- Border tebal hitam kontras tinggi (`border-2 border-black` / `dark:border-zinc-700`).
- Hard offset shadows (`shadow-[4px_4px_0px_0px_#000]`).
- Efek WebGL 3D mutakhir: **3D Physics Interactive Lanyard Card** ditenagai oleh `@react-three/rapier` dan `@react-three/fiber`, kanvas kinetik hero, serta konsol terminal developer interaktif.
- Struktur dan jumlah halaman dibuat **persis 100% sama dengan website resmi saat ini** (6 rute), dengan seluruh data teks, metadata, struktur kepengurusan, dan 5 artikel blog asli yang diekstrak langsung dari web resmi.

---

### 2. Tujuan & Indikator Keberhasilan (Goals & Success Metrics)
1. **Pembaruan Visual Ekstrem**: Mengubah tampilan standar menjadi portal berbasis Lego Neo-Brutalist yang playful, berani, teknikal, dan sangat berkesan bagi audiens tech.
2. **Kesesuaian Fitur & Efek dengan Portofolio**: Membawa fitur signature portofolio Farid (kartu lanyard fisika 3D interaktif, widget terminal CLI, aksen warna Lego stud, micro-animations) ke dalam portal resmi organisasi.
3. **Integritas Konten 100%**: Menjaga seluruh data riil FOSTI (data divisi Ristek, Keor, Hubpub, program kerja, prestasi nasional/internasional, dan artikel blog) tetap utuh menggunakan URL gambar Cloudinary resmi.
4. **Performa & SEO**: Skor Core Web Vitals optimal dengan Static Site Generation (SSG) untuk semua halaman artikel dan divisi, serta *client-side dynamic loading* (`next/dynamic` dengan `ssr: false`) untuk modul Three.js & Rapier.

---

### 3. Peta Halaman & Inventaris Rute Resmi (Exact Page Inventory)

Situs ini mempertahankan **persis 6 jenis rute** yang ada di `fostiums.org`:

| No | Rute Halaman | Tipe Halaman | Deskripsi Konten & Fitur Khusus |
|:---|:---|:---|:---|
| **1** | `/` | Beranda (Landing Page) | Hero kinetik 3D, Bento matrix divisi, BPHI 3D Lanyard Card showcase, Prestasi, Galeri aktivitas, Mitra, CTA Oprec, Terminal CLI |
| **2** | `/divisi/ristek` | Sub-page Divisi | Divisi Riset & Teknologi: 3 Fokus Utama, Program Kerja (Fostech Camp, Sandbox, Fostifest), Direktori Anggota |
| **3** | `/divisi/keor` | Sub-page Divisi | Divisi Keorganisasian: 3 Fokus Utama, Program Kerja (Oprec, FOSTISIDA, Musker, TOT, Ifosti, Pleno), Direktori Anggota |
| **4** | `/divisi/hubpub` | Sub-page Divisi | Divisi Hubungan Publik: 3 Fokus Utama, Program Kerja (Company Visit, Media Partner, Sosmed), Direktori Anggota |
| **5** | `/blogs` | Indeks Blog | Portal artikel resmi FOSTI: Filter kategori/tag, pencarian langsung, kartu artikel Neo-Brutalist |
| **6** | `/blogs/[slug]` | Detail Blog (Dinamis) | Pembaca artikel lengkap (5 artikel resmi), tipografi naratif, callout quote, share bar, related articles |

---

### 4. Rincian Fitur per Halaman

#### 4.1 Halaman Beranda (`/`)
* **Header & Navbar Global**:
  * Logo FOSTI UMS berbingkai Neo-Brutalist dengan status badge live ("Open Source Community").
  * Menu navigasi: *Tentang, Divisi, Program, Prestasi, Pengurus, Galeri, Blog*.
  * Dark/Light Mode Theme Toggle dengan efek tactile switch.
  * CTA Button "Gabung FOSTI" (link ke `https://oprec.fostiums.org/`).
* **Hero Section**:
  * Lego Stud Accent Bar: `🔴 🟡 🔵 🟢 // MODULAR OPEN SOURCE SYSTEM • FOSTI UMS // 🟢 🔵 🟡 🔴`.
  * Headline tipografi tebal: *"We Help You Boost Your Creativity"*.
  * Latar belakang 3D Interactive Canvas kinetik berbasis Three.js yang merespon kursor.
  * Stat Counter Tactile Bento:
    * `10+` Work Programs
    * `100+` Active Members
    * `20+` Prestasi & Medali
  * CTA Ganda: "Daftar Sekarang (Oprec)" dan "Jelajahi Divisi".
* **About Us Section (`#about`)**:
  * Judul: *"Who We Are & What We Do"*.
  * Narasi profil organisasi non-profit independen mahasiswa Informatika UMS (sejak 2008).
  * 3 Poin Keunggulan Utama dengan bullet icon Lego brick tactile.
* **Divisions Bento Matrix (`#divisi`)**:
  * 3 Kartu Divisi (Ristek, Keor, Hubpub) dengan aksen warna Lego:
    * **Ristek**: Aksen Biru (`#0055A4` / `#2563EB`), icon Code/Cpu.
    * **Keor**: Aksen Merah (`#AF101A` / `#EF4444`), icon Users/Shield.
    * **Hubpub**: Aksen Kuning/Amber (`#FFD700` / `#F59E0B`), icon Share2/Megaphone.
  * Tombol navigasi langsung ke rute `/divisi/[slug]`.
* **Pengurus & BPHI Showcase (`#executives`)**:
  * **3D Physics Lanyard Card Viewer**: Showcase interaktif kartu ID pimpinan/pengurus FOSTI (Ketua Umum, Sekretaris, Bendahara, Kadiv) yang dapat ditarik, diputar, dan bergoyang dengan fisika Rapier asli.
  * Generator tekstur ID card beresolusi tinggi (nama, foto Cloudinary, NIM, barcode FOSTI, stempel verifikasi).
* **Prestasi & Hall of Fame (`#achievements`)**:
  * Highlight medali internasional FOSTI UMS:
    * *GYIIF 2026* (Perak — Aplikasi Brainlyt)
    * *IPITEx Thailand 2026* (Perak — QryptoPay)
    * *Indonesia Inventors Day 2025* (5 Medali Bergengsi)
* **Galeri Aktivitas ("Life at FOSTI") (`#gallery`)**:
  * Masonry layout foto kegiatan asli: *FOSTISIDA*, *Community Event*, *Fostech Camp*, *Ifosti*, *Pleno*, *Open Recruitment*.
* **Supported By & Partners (`#partners`)**:
  * Grid logo mitra, media partner, dan institusi pendukung.
* **Terminal CLI Widget**:
  * Widget interaktif konsol hacker bergaya command-line (bisa menjalankan perintah `help`, `about`, `divisi`, `proker`, `achievements`, `clear`).
* **Footer Global**:
  * Peta situs lengkap, kontak email (`fostiums@gmail.com`), alamat sekretariat UMS, tautan media sosial (Instagram, YouTube, LinkedIn), dan copyright.

#### 4.2 Halaman Divisi Ristek (`/divisi/ristek`)
* **Hero Banner**: Tema *Cyber Research* dengan palet biru Lego (`#0055A4`), foto header angkatan/divisi Cloudinary.
* **3 Pilar Ristek**:
  1. *Open-Source Culture & Training*
  2. *Collaborative R&D & Prototyping*
  3. *Inclusive Talent Empowerment*
* **Program Kerja Ristek**:
  * *Fostech Camp* (Web Development Blueprint, UI/UX).
  * *Sandbox* (Ruang riset & coding proyek inovatif).
  * *Fostifest* (Festival teknologi open-source tahunan).
* **Direktori Pengurus & Anggota Ristek**:
  * Kartu pengurus Ristek (Airlangga Pradana, Verrell Alfareza, Afifah Nur Hidayah, Farid Ahmad Fakih, dkk.) dengan foto Cloudinary dan tombol preview 3D Lanyard.

#### 4.3 Halaman Divisi Keorganisasian (`/divisi/keor`)
* **Hero Banner**: Tema *Organizational Architecture* dengan palet merah Lego (`#AF101A`), foto header divisi Cloudinary.
* **3 Pilar Keor**:
  1. *Kaderisasi Berkelanjutan*
  2. *Leadership & Capacity Building*
  3. *Internal Bonding & Soliditas*
* **Program Kerja Keor**:
  * *Open Recruitment* (Perekrutan anggota baru FOSTI).
  * *FOSTISIDA* (Malam keakraban dan orientasi).
  * *Musker & TOT* (Musyawarah kerja & Training of Trainers).
  * *Ifosti & Sidang Pleno* (Buka bersama & evaluasi berkala).
* **Direktori Pengurus & Anggota Keor**:
  * Profil anggota (Eko Wahyu Nugroho, dkk.) lengkap dengan foto Cloudinary dan detail jabatan.

#### 4.4 Halaman Divisi Hubungan Publik (`/divisi/hubpub`)
* **Hero Banner**: Tema *Transmission & Outreach* dengan palet amber/kuning Lego (`#FFD700`), foto header divisi Cloudinary.
* **3 Pilar Hubpub**:
  1. *Connecting the Unconnected*
  2. *Strategic Media Partnerships*
  3. *The Voice of FOSTI UMS*
* **Program Kerja Hubpub**:
  * *Company Visit & Study Banding* (Kunjungan industri tech).
  * *Media Partnership & Sponsorship* (Kolaborasi eksternal).
  * *Social Media & Creative Branding* (Pengelolaan Instagram/YouTube/LinkedIn).
* **Direktori Pengurus & Anggota Hubpub**:
  * Profil anggota (Lathifa Yayang, Alif Farros, Audy Halyn, Brilliana Safaresti, Daania, dkk.).

#### 4.5 Halaman Indeks Blog (`/blogs`)
* **Header & Filter Kategori**:
  * Search bar interaktif dengan debounced search.
  * Filter tag pills: `Semua`, `Prestasi (Achievement)`, `Event`, `Teknologi`.
* **Featured Article**:
  * Satu artikel pilihan dengan ukuran bento besar, thumbnail penuh, dan ringkasan lengkap.
* **Grid Artikel**:
  * Kartu Neo-Brutalist untuk setiap artikel: thumbnail Cloudinary ber-border hitam, tag kategori berlatar warna Lego, tanggal publikasi, nama penulis, estimasi waktu baca, dan tombol "Baca Selengkapnya".

#### 4.6 Halaman Detail Blog Dinamis (`/blogs/[slug]`)
* **5 Rute Artikel Eksisting**:
  1. `/blogs/aplikasi-brainlyt-karya-mahasiswa-ums-raih-perak-gyiif-2026`
  2. `/blogs/fostech-camp`
  3. `/blogs/indonesia-inventors-tim-mahasiswa-ums-bawa-pulang-5-medali-bergengsi`
  4. `/blogs/inovasi-mahasiswa-ums-diakui-dunia-5-tim-berprestasi-di-ipitex-thailand-2026`
  5. `/blogs/mahasiswa-ums-raih-silver-medal-ipitex-thailand-lewat-inovasi-qryptopay`
* **Elemen Pembaca (Reader View)**:
  * Breadcrumb navigasi (`Beranda > Blog > Judul Artikel`).
  * Headline tebal dengan badge tanggal, kategori, dan waktu baca.
  * Banner foto Cloudinary utama beresolusi tinggi dengan bingkai shadow neo-brutalis.
  * Paragraf artikel yang kaya dengan gaya tipografi monospace/serif modern, kutipan tokoh (blockquote bersanding garis kuning Lego), serta quote box.
  * Share Bar (Bagikan ke WhatsApp, LinkedIn, X, atau Salin Tautan).
  * Bagian Rekomendasi Artikel Terkait.

---

### 5. Arsitektur Teknis & Dependensi

#### 5.1 Tech Stack
* **Framework**: Next.js 16 (App Router)
* **Library UI**: React 19, TypeScript 5
* **Styling**: Tailwind CSS v4 + PostCSS
* **3D Physics & WebGL**:
  * `three`
  * `@react-three/fiber`
  * `@react-three/drei`
  * `@react-three/rapier`
* **Animasi & Interaksi**: `motion` (Framer Motion)
* **Icons**: `lucide-react`, `react-icons`
* **Theme Manager**: `next-themes` (Dark/Light mode)

#### 5.2 Strategi Rendering & Optimasi
* Semua halaman divisi dan artikel blog di-generate secara statis via `generateStaticParams()` (SSG) agar loading mendekati 0ms dan SEO terindeks maksimal oleh Google.
* Komponen 3D Physics Lanyard dan Three.js Canvas diimpor secara dinamis (`next/dynamic` dengan opsi `{ ssr: false }`) agar tidak memberatkan Initial Server Render dan mencegah hidrasi error WebGL di server.
* Gambar dioptimalkan menggunakan komponen `<Image />` Next.js dengan domain `res.cloudinary.com` yang sudah terdaftar di `next.config.ts`.

---

### 6. Rencana Verifikasi & Uji Kualitas
1. **Verifikasi Build**: Menjalankan `npm run build` tanpa error TypeScript atau ESLint.
2. **Verifikasi Rute**: Memastikan seluruh 6 rute halaman dapat diakses langsung via URL bar dan tautan internal.
3. **Verifikasi 3D Physics**: Memastikan kartu ID BPHI dapat di-drag, berayun secara gravitasi/inersia, dan kembali stabil tanpa drop FPS (60 FPS di layar standar).
4. **Verifikasi Responsif**: Pengujian layout pada breakpoint mobile (375px), tablet (768px), dan desktop (1280px+).
