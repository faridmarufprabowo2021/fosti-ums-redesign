# DESIGN SPECIFICATION: LEGO NEO-BRUTALISM // FOSTI UMS REBORN
> **Single Source of Truth (SSOT) Semantic Design System & Architectural Extraction**
> Generated via Stitch Design Taste & Hallmark DNA Extraction Disciplines

---

## 1. Visual Theme & Atmosphere (Design DNA)

### 1.1 Filosofi Inti: "Lego Neo-Brutalism + High-Tech Tactile Immersion"
Desain ini mengadopsi DNA visual dari website portofolio **Farid Ma'ruf Prabowo** (`faridmarufprabowo2021/portofolio`) dan mentransformasikannya menjadi identitas digital resmi **FOSTI UMS** (Forum Open Source Teknik Informatika Universitas Muhammadiyah Surakarta).

- **Lego Modularity**: Pendekatan desain di mana setiap elemen antarmuka diperlakukan sebagai "balok" yang kokoh, berbatas tegas (*defined boundary*), dan memiliki keterikatan struktural yang jelas.
- **Neo-Brutalist Tactility**: Menolak tren desain datar yang monoton atau efek *glassmorphism* lembut yang generik. Elemen antarmuka menggunakan border solid 2px hitam, bayangan *hard offset* tanpa blur, aksen badge miring (*slanted highlights*), dan sudut rounded `rounded-xl` yang ramah disentuh (*tactile feel*).
- **Physical 3D Immersion**: Mengintegrasikan simulasi fisika 3D WebGL mutakhir (Three.js, `@react-three/fiber`, `@react-three/rapier`, dan `meshline`) untuk kartu tanda pengenal pengurus (3D Lanyard ID Card) yang dapat ditarik, diayunkan, dan berinteraksi sesuai hukum gravitasi inersia.
- **Cyber-Terminal Aesthetic**: Sentuhan konsol hacker Linux/CLI interaktif yang merepresentasikan budaya sejati komunitas *Open Source*.

### 1.2 Skala Atribut Desain (Taste Spectrum)
- **Density (Kerapatan UI):** `6 / 10` — *Daily App Balanced*. Memberikan ruang bernapas yang cukup antar seksi (`py-16` hingga `py-24`) namun tetap padat informasi pada kartu grid bento.
- **Variance (Variasi Struktural):** `8 / 10` — *Offset Asymmetric*. Menghindari ritme repetitif (Hero → 3 Kartu Sama → Footer). Menggunakan grid bento asimetris, kartu divisi bertema warna unik, dan showcase 3D interaktif.
- **Motion (Intensitas Gerak):** `7 / 10` — *Fluid Tactile & Physical Spring*. Animasi berbasis pegas (*spring physics*), pergerakan magnetik kursor (*magnetic pull*), dekripsi teks *cyber*, dan simulasi tali lanyard inersial.

---

## 2. Palet Warna & Token Sistem (Color Calibration)

Setiap token warna memiliki peran semantik fungsional yang ketat. Menggunakan prinsip **Lego Quad-Core** yang mencerminkan identitas divisi dan status sistem.

### 2.1 Lego Quad-Core Tokens
| Token Name | Light HEX | Dark HEX | Peran Semantik & Divisi |
|:---|:---|:---|:---|
| `--lego-red` | `#AF101A` / `#EF4444` | `#DC2626` | **Divisi Keorganisasian (Keor)**, Tombol Primer/CTA Perekrutan (Join Oprec), Badge Urgensi/Error, Tombol Tutup |
| `--lego-yellow` | `#FFD700` / `#F59E0B` | `#FBBF24` | **Divisi Hubungan Publik (Hubpub)**, Highlight Teks Display, Badge Bintang/Prestasi, Kutipan Blok |
| `--lego-blue` | `#0055A4` / `#2563EB` | `#3B82F6` | **Divisi Riset & Teknologi (Ristek)**, Tautan Aktif, Badge Sains & Rekayasa Perangkat Lunak |
| `--lego-green` | `#00852B` / `#16A34A` | `#22C55E` | **Indikator Live / Aktif**, Badge Open Source, Stempel Verifikasi ID Card, Status Terminal Sukses |

### 2.2 Bidang Latar Belakang & Permukaan (Surfaces)
```css
/* Light Mode (Tactile Clean Paper) */
:root {
  --background: #FAFAFA;          /* Kanvas dasar terang, bersih */
  --foreground: #09090B;          /* Teks utama Charcoal Ink (Zinc-950) */
  --card: #FFFFFF;                /* Kartu dan kontainer permukaan */
  --card-foreground: #09090B;
  --primary: #EF4444;             /* Aksen utama (Lego Red) */
  --primary-foreground: #FFFFFF;
  --muted: #F4F4F5;               /* Permukaan sekunder (Zinc-100) */
  --muted-foreground: #71717A;    /* Teks sekunder/deskripsi (Zinc-500) */
  --border: #E4E4E7;              /* Garis batas pembagi */
  --ring: #EF4444;                /* Focus ring */
}

/* Dark Mode (Obsidian Hacker Terminal) */
.dark {
  --background: #09090B;          /* Hitam obsidian (bukan #000000 murni) */
  --foreground: #F4F4F5;          /* Teks utama Off-White (Zinc-100) */
  --card: #121215;                /* Permukaan kartu gelap dengan kedalaman */
  --card-foreground: #F4F4F5;
  --primary: #EF4444;             /* Aksen utama kontras tinggi */
  --primary-foreground: #FFFFFF;
  --muted: #18181B;               /* Permukaan sekunder gelap (Zinc-900) */
  --muted-foreground: #A1A1AA;    /* Teks sekunder (Zinc-400) */
  --border: #27272A;              /* Garis batas permukaan gelap */
  --ring: #EF4444;
}
```

### 2.3 Aturan Bayangan Taktil (Hard Offset Shadows)
Semua bayangan adalah proyeksi keras (*hard offset*) tanpa blur `blur-0`:
```css
/* Standar Kartu Neo-Brutalist */
.lego-shadow {
  box-shadow: 4px 4px 0px 0px #000000;
}
.dark .lego-shadow {
  box-shadow: 4px 4px 0px 0px rgba(255, 255, 255, 0.15);
}

/* Kartu Menonjol / Modal */
.lego-shadow-lg {
  box-shadow: 6px 6px 0px 0px #000000;
}
.dark .lego-shadow-lg {
  box-shadow: 6px 6px 0px 0px rgba(255, 255, 255, 0.25);
}

/* Badge / Tombol Kecil */
.lego-shadow-sm {
  box-shadow: 2px 2px 0px 0px #000000;
}
.dark .lego-shadow-sm {
  box-shadow: 2px 2px 0px 0px rgba(255, 255, 255, 0.1);
}
```

---

## 3. Tipografi & Hirarki Teks (Typographic Architecture)

### 3.1 Font Stacks
- **Display & Headings**: `Inter`, `Geist Sans`, atau `sans-serif` dengan bobot `font-extrabold` (800) atau `font-black` (900), `tracking-tight` (`-0.025em`) hingga `tracking-tighter` (`-0.05em`).
- **Body & Paragraphs**: Sans-serif bersih dengan `leading-relaxed` (1.625), ukuran `text-base` atau `text-sm`, batas maksimal pembacaan 65 karakter per baris (`max-w-prose`).
- **Technical, Badges & Code**: `JetBrains Mono`, `Geist Mono`, atau `font-mono` untuk indikator status sistem, stempel tanggal, NIM anggota, parameter terminal, dan angka tabular (`tabular-nums`).

### 3.2 Signature Styling: Slanted Highlight Badges
Untuk kata-kata penting di dalam judul display, teks dibungkus dalam badge miring taktil dengan rotasi asimetris:
```tsx
// Contoh Highlight Display
<span className="inline-block -rotate-2 bg-amber-300 dark:bg-amber-400 text-black border-2 border-black px-2 py-0.5 shadow-[2px_2px_0px_0px_#000]">
  Boost
</span>
```

### 3.3 Aturan Tipografi Ketat
- **Tanpa Italic Display**: Judul dan subjudul display selalu tegak lurus (*roman/normal*). Larangan keras menggunakan *italic* pada heading (salah satu ciri khas klise AI).
- **Format Numerik**: Semua angka pencapaian, tahun kepengurusan, dan tanggal wajib menggunakan font monospace atau `tabular-nums`.

---

## 4. Ekstraksi Spesifikasi Halaman (Page-by-Page Architectural Extraction)

Website FOSTI UMS Reborn terdiri dari 6 rute produksi utama yang telah dibangun dan diuji secara komprehensif:

```
src/app/
├── page.tsx                  // 1. Beranda (Home Page)
├── divisi/
│   ├── ristek/page.tsx       // 2. Halaman Divisi Riset & Teknologi
│   ├── keor/page.tsx         // 3. Halaman Divisi Keorganisasian
│   └── hubpub/page.tsx       // 4. Halaman Divisi Hubungan Publik
└── blogs/
    ├── page.tsx              // 5. Portal Indeks Artikel & Riset
    └── [slug]/page.tsx       // 6. Reader Detail Artikel Blog
```

---

### 4.1 Halaman Beranda (`/`)

Struktur beranda dirancang dengan ritme 10 seksi yang dinamis:

#### 1. Navbar Taktil (`Navbar.tsx`)
- **Struktur**: Posisi `fixed top-0`, `z-40`, backdrop blur dengan latar belakang semi-transparan `bg-background/85`.
- **Elemen**:
  - Logo FOSTI UMS dengan 4 titik stud Lego (`🔴 🟡 🔵 🟢`).
  - Menu Navigasi: *Beranda*, *Divisi* (dropdown: Ristek, Keor, Hubpub), *Blog*, *Prestasi*, *Galeri*.
  - Indikator Status: Kapsul hijau berkedip `● RECRUITMENT OPEN 2026`.
  - Kontrol: `ThemeToggle.tsx` (Light/Dark mode) bergaya sakelar taktil + Tombol CTA "Gabung FOSTI" dengan `Magnet.tsx`.

#### 2. Hero Section (`Hero.tsx`)
- **Struktur**: Grid 2-kolom asimetris (`lg:grid-cols-12`).
- **Kolom Kiri (7 Kolom)**:
  - Micro-badge: `[ FORUM OPEN SOURCE TEKNIK INFORMATIKA // EST. 2008 ]`.
  - Judul Display: *"We Help You <span class="-rotate-2 bg-yellow-300">Boost</span> Your Creativity in Technology"*.
  - Animasi `DecryptedText.tsx` pada sub-heading teknikal.
  - Bento Metrik Langsung: 3 pil statistik (`12+ Proker Aktif`, `45+ Anggota Pengurus`, `15+ Medali Kompetisi`).
  - CTA Ganda: Tombol primer merah neo-brutalist "Jelajahi Divisi" + tombol sekunder transparan "Baca Riset & Blog".
- **Kolom Kanan (5 Kolom)**:
  - Kanvas 3D Interaktif `HeroCanvas.tsx` yang menampilkan balok-balok Lego 3D melayang kinetik yang merespons pergerakan mouse (*mouse parallax*).

#### 3. Seksi Tentang Kami (`AboutSection.tsx`)
- **Struktur**: Layout editorial 2-kolom.
- **Poin Utama**: Sejarah FOSTI UMS sebagai organisasi mahasiswa non-profit independen Fakultas Komunikasi dan Informatika sejak 2008.
- **3 Kartu Nilai (Value Pillars)**:
  - *Open Source Culture*: Kebebasan bereksplorasi dengan Linux dan FOSS.
  - *Collaborative Innovation*: Kolaborasi lintas angkatan dalam rekayasa perangkat lunak.
  - *Competition Ready*: Pembinaan intensif kompetisi inovasi tingkat nasional dan internasional.

#### 4. Seksi Divisi Organisasi (`DivisionsSection.tsx`)
- **Struktur**: Grid bento asimetris 3 kartu divisi menggunakan `SpotlightCard.tsx`.
- **Kartu Ristek**: Aksen border dan bayangan Lego Biru (`#0055A4`), tag Riset & Pengembangan Perangkat Lunak.
- **Kartu Keorganisasian**: Aksen border dan bayangan Lego Merah (`#AF101A`), tag Tata Kelola & Pengembangan SDM.
- **Kartu Hubungan Publik**: Aksen border dan bayangan Lego Kuning (`#FFD700`), tag Branding, Media & Kemitraan.

#### 5. Seksi Pengurus & BPHI (`MembersSection.tsx`)
- **Struktur**: Showcase kepemimpinan organisasi menampilkan Ketua Umum, Sekretaris, Bendahara, dan Koordinator Divisi.
- **Komponen Interaktif**: Kartu anggota menggunakan `TiltedCard.tsx` dengan efek kemiringan 3D dan tombol pemicu *"Buka Kartu ID 3D Lanyard"*.

#### 6. Seksi Prestasi & Kompetisi Internasional (`AchievementsSection.tsx`)
- **Struktur**: Grid kartu penghargaan neo-brutalist dengan pita medali emas dan perak.
- **Data Resmi yang Dimuat**:
  - *Silver Medal — GYIIF 2026* (Aplikasi Brainlyt).
  - *Silver Medal — IPITEx Thailand 2026* (Inovasi QRyptoPay).
  - *Gold Medal — Indonesia Inventors Day (IID) 2025*.

#### 7. Galeri Aktivitas FOSTI (`GallerySection.tsx`)
- **Struktur**: Galeri foto *masonry* responsif menampilkan momen nyata kegiatan FOSTI (FOSTECH Camp, Workshop, Makrab, Musyawarah).
- **Efek**: Hover zoom foto dengan filter taktil dan kartu keterangan (*caption tag*) dengan font monospace.

#### 8. Mitra & Pendukung (`PartnersSection.tsx`)
- **Struktur**: Logo bar lembaga dan universitas mitra pendukung (Universitas Muhammadiyah Surakarta, FKI UMS, Komunitas Open Source Regional).

#### 9. Terminal Hacker CLI Widget (`TerminalWidget.tsx`)
- **Struktur**: Kotak konsol Linux interaktif dengan 3 tombol kontrol window (`🔴 🟡 🟢`).
- **Fungsi Eksekutif**: Menerima perintah nyata: `help`, `divisi`, `proker`, `prestasi`, `clear`, `about`.

#### 10. Banner Ajakan Rekrutmen (`OprecCTA.tsx`) & Footer (`Footer.tsx`)
- **OprecCTA**: Kotak banner besar merah Lego dengan aksen pita warning, teks ajakan bergabung, dan tombol magnetik CTA pendaftaran.
- **Footer**: Peta situs komprehensif, tautan media sosial (GitHub, Instagram, LinkedIn, YouTube), alamat sekretariat Gedung FKI Kampus 2 UMS, dan hak cipta.

---

### 4.2 Halaman Divisi: Riset & Teknologi (`/divisi/ristek`)

- **Identitas Warna**: **Lego Blue** (`#0055A4` / `#2563EB`).
- **Hero Banner Divisi**:
  - Judul: *"DIVISI RISET & TEKNOLOGI // RISTEK FOSTI"*.
  - Slogan: *"Pusat inkubasi inovasi perangkat lunak, sains data, dan kontribusi Open Source."*
- **3 Pilar Utama Ristek**:
  1. *Web & Mobile App Development*: Next.js, Flutter, Cloud Native.
  2. *Artificial Intelligence & Data*: Machine learning, NLP, computer vision.
  3. *Competitive Programming & Research*: Algoritma dan paper ilmiah mahasiswa.
- **Program Kerja Unggulan**:
  - *FOSTECH Camp*: Pelatihan intensif teknologi terkini untuk anggota.
  - *Internal Tech Talk*: Diskusi berkala riset teknologi open-source.
  - *Software Showcase*: Pameran karya aplikasi tahunan.
- **Direktori Pengurus Divisi**: Grid foto dan peran staf Ristek dengan tombol kartu Lanyard 3D interaktif.

---

### 4.3 Halaman Divisi: Keorganisasian (`/divisi/keor`)

- **Identitas Warna**: **Lego Red** (`#AF101A` / `#EF4444`).
- **Hero Banner Divisi**:
  - Judul: *"DIVISI KEORGANISASIAN // KEOR FOSTI"*.
  - Slogan: *"Fondasi tata kelola organisasi, kaderisasi terstruktur, dan soliditas internal anggota."*
- **3 Pilar Utama Keor**:
  1. *Kaderisasi & Leadership*: Pembentukan karakter pemimpin open-source yang berintegritas.
  2. *Internal Bonding & Welcoming*: Membangun rasa kekeluargaan dan loyalitas antar generasi.
  3. *Organizational Governance (SOP)*: Standarisasi operasional dan manajemen administrasi.
- **Program Kerja Unggulan**:
  - *Malam Keakraban (Makrab)*: Kegiatan bonding alam terbuka anggota baru.
  - *Musyawarah Besar (Mubes)*: Evaluasi dan regenerasi estafet kepemimpinan.
  - *Upgrading Pengurus*: Workshop manajemen tim dan kepemimpinan.
- **Direktori Pengurus Divisi**: Grid pengurus Keor dengan integrasi kartu Lanyard 3D.

---

### 4.4 Halaman Divisi: Hubungan Publik (`/divisi/hubpub`)

- **Identitas Warna**: **Lego Yellow** (`#FFD700` / `#F59E0B`).
- **Hero Banner Divisi**:
  - Judul: *"DIVISI HUBUNGAN PUBLIK // HUBPUB FOSTI"*.
  - Slogan: *"Jembatan komunikasi eksternal, branding media kreatif, dan sinergi kemitraan strategis."*
- **3 Pilar Utama Hubpub**:
  1. *Creative Media & Visual Identity*: Desain grafis, videografi, dan kurasi konten sosial media.
  2. *Public Relations & Networking*: Hubungan antar-lembaga kampus dan komunitas open-source nasional.
  3. *Media Partnership & Sponsorship*: Pengelolaan kerjasama strategis acara dan konferensi.
- **Program Kerja Unggulan**:
  - *Podcast / Konten Kreatif FOSTI*: Edukasi open source di platform publik.
  - *Company & Community Visit*: Studi banding ke perusahaan teknologi dan komunitas industri.
  - *Social Media Campaigns*: Kampanye kesadaran teknologi FOSS di media sosial.
- **Direktori Pengurus Divisi**: Grid pengurus Hubpub dengan integrasi kartu Lanyard 3D.

---

### 4.5 Portal Indeks Artikel & Blog (`/blogs`)

- **Bilah Pencarian & Filter Instan**:
  - Kotak pencarian dengan ikon search dan border tebal 2px.
  - Kapsul filter kategori divisi: `Semua`, `Riset & Teknologi`, `Prestasi`, `Keorganisasian`, `Kegiatan`.
- **Banner Artikel Utama (Featured Hero Article)**:
  - Banner besar kartu horizontal dengan label `FEATURED ARTICLE`.
  - Menampilkan artikel terpopuler (misal: *Keberhasilan Tim Mahasiswa UMS Meraih Medali Perak di GYIIF 2026*).
- **Grid Artikel Responsif**:
  - Tata letak grid 3 kolom (`md:grid-cols-2 lg:grid-cols-3`).
  - Metadata kartu: Thumbnail Cloudinary, tag divisi warna Lego, estimasi waktu baca (`5 menit baca`), nama penulis, tanggal terbit, dan ringkasan cuplikan (*excerpt*).

---

### 4.6 Reader Detail Artikel (`/blogs/[slug]`)

- **Kanvas Bacaan Terfokus**: Lebar maksimal `max-w-4xl` terpusat untuk kenyamanan membaca optimal.
- **Breadcrumb Navigation**: `Beranda > Blog > [Judul Artikel]`.
- **Header Metadata**:
  - Judul besar `text-3xl` hingga `text-5xl` font extrabold.
  - Avatar penulis, nama, badge divisi, tanggal rilis, dan tombol bagikan (*share to Twitter/LinkedIn/WhatsApp*).
- **Banner Gambar Utama**: Gambar beresolusi tinggi dengan caption teknikal taktil di bawahnya.
- **Format Konten Khusus**:
  - *Blockquote Taktil*: Kutipan narasumber dengan border kiri 6px tebal warna kuning Lego (`#FFD700`) dan background kontras gelap.
  - *Sub-heading*: Bergaris bawah neo-brutalist dengan badge nomor bagian.
- **Author Bio Card**: Kartu profil penulis artikel di akhir bacaan.
- **Rekomendasi Artikel Terkait**: Grid 2 kartu artikel relevan untuk retensi pembaca.

---

## 5. Spesifikasi Komponen 3D Lanyard & React Bits

### 5.1 3D Interactive Lanyard Card (`Lanyard.tsx` & `InteractiveLanyardCard.tsx`)
Mengikuti standar resmi **React Bits Lanyard** (`https://reactbits.dev/components/lanyard`):

1. **Model Fisik & Aset 3D**:
   - Model `public/card.glb` (2.45 MB) yang memuat node geometri presisi:
     - `nodes.card.geometry` (badan kartu ID).
     - `nodes.clip.geometry` (penjepit metalik dengan material peredam `roughness: 0.3`).
     - `nodes.clamp.geometry` (klem penjepit pengait tali).
   - Tekstur tali `public/lanyard.png` beresolusi tinggi dengan tenunan merah gelap dan jahitan emas bertuliskan `★ FOSTI UMS ★ OPEN SOURCE ★`.
2. **Physics Engine (`@react-three/rapier`)**:
   - Rigid body `fixed` pada posisi `[0, 4, 0]`.
   - 3 segmen rantai tali dinamis (`j1`, `j2`, `j3`) yang dihubungkan dengan `useRopeJoint(distance: 1.0)`.
   - `useSphericalJoint` menghubungkan `j3` ke kartu pada titik jangkar `[0, 1.45, 0]`.
   - Gravitasi disetel pada `gravity={[0, -40, 0]}` dengan redaman inersial `angularDamping: 4, linearDamping: 4`.
3. **Pita Halus (`meshline`)**:
   - Menggunakan `MeshLineGeometry` dan `MeshLineMaterial` yang titik-titiknya diperbarui setiap frame melalui kurva `THREE.CatmullRomCurve3`.
   - Menggunakan peredaman lerp:
     ```ts
     lerped.lerp(ref.current.translation(), delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)));
     ```
4. **Interaktivitas Pointer 3D Dragging**:
   - Menggunakan proyeksi balik kursor kamera (*pointer unprojection*):
     ```ts
     vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
     dir.copy(vec).sub(state.camera.position).normalize();
     vec.add(dir.multiplyScalar(state.camera.position.length()));
     card.current?.setNextKinematicTranslation({
       x: vec.x - dragged.x,
       y: vec.y - dragged.y,
       z: vec.z - dragged.z
     });
     ```
5. **Lighting Studio & Specular Highlights**:
   - 4 unit `<Lightformer>` yang diposisikan secara strategis di ruang 3D dengan rotasi `Math.PI / 3` dan intensitas hingga 10 untuk menghasilkan pantulan kilau kaca fotorealistik pada permukaan kartu ID.

### 5.2 Desain Tekstur Kartu FOSTI UMS (`generateLanyardTexture.ts`)

Tekstur disintesis secara dinamis melalui HTML5 Canvas pada rasio aspek UV atlas `card.glb`:
- **Sisi Depan (`FRONT_UV_RECT = { x: 0, y: 0, w: 0.5, h: 0.755 }`)**:
  - Ukuran: `840 x 1270 px`.
  - Header resmi universitas: "UNIVERSITAS MUHAMMADIYAH SURAKARTA" dan "FOSTI UMS".
  - 4 stud balok Lego timbul (`🔴 🟡 🔵 🟢`) dengan bayangan dan sorotan glossy.
  - **EMV Gold Smart Chip**: Cip emas cerdas dengan jalur sirkuit konduktor tembaga.
  - **Hologram Optical Seal**: Stiker hologram pelangi melingkar dengan teks "OFFICIAL FOSTI".
  - Bingkai foto profil dengan braket sudut berwarna divisi.
  - Nama anggota, badge pil divisi, jabatan, ID anggota (`ID: 2026-FST-XXX`).
  - Barcode tajam, nomor seri SN autentikasi, dan stempel stempel hijau miring: `VERIFIED ID // FOSTI 2026/2027`.
- **Sisi Belakang (`BACK_UV_RECT = { x: 0.5, y: 0, w: 0.5, h: 0.757 }`)**:
  - Garis pita magnetik hitam (*magnetic stripe*) di sisi atas.
  - Pernyataan visi & tujuan organisasi open source.
  - Tabel izin keamanan: `ACCESS CLEARANCE: TIER 4 (LABS & WORKSPACE)`, RFID identifier, masa berlaku hingga 2027.
  - QR Code verifikasi digital beresolusi tinggi yang mengarah ke `https://fostiums.org`.
  - Tanda tangan digital resmi Ketua Umum FOSTI UMS.

### 5.3 Komponen React Bits Lainnya
- **`TiltedCard.tsx`**: Menghitung koordinat relatif mouse untuk menghasilkan rotasi matriks 3D `rotateX` dan `rotateY` dengan overlay kilauan reflektif pada kartu pengurus.
- **`SpotlightCard.tsx`**: Efek pencahayaan senter radial (`radial-gradient`) yang mengikuti posisi kursor pada kartu divisi di mode gelap.
- **`DecryptedText.tsx`**: Efek transisi teks yang mendekripsi karakter acak secara bertahap (*matrix cyber cipher*) saat komponen masuk ke viewport.
- **`Magnet.tsx`**: Efek tarikan magnetik pegas (*spring pull*) pada tombol CTA yang bergerak mendekati kursor mouse dalam radius aktif.

---

## 6. Prinsip Tata Letak & Strategi Responsif (Layout & Responsive Rules)

Setiap halaman dijamin lulus uji responsif pada 4 lebar viewport standar: `320px`, `375px`, `414px`, dan `768px+`:

1. **Mobile-First Single Column Collapse (< 768px)**:
   - Semua tata letak multi-kolom (grid 2-kolom, bento 3-kolom) secara otomatis runtuh menjadi satu kolom vertikal yang rapi.
2. **Bebas Overflow Horizontal**:
   - Elemen `html` dan `body` menerapkan `overflow-x: clip` atau `overflow-x: hidden` untuk mencegah pergeseran layar samping.
3. **Sentuhan Aman (Touch Target Safety)**:
   - Semua elemen interaktif (tombol, link, toggle, chip) memiliki target sentuh minimal `44px x 44px`.
4. **Penskalaan Tipografi Fluid**:
   - Judul utama menggunakan `clamp()` (misal: `clamp(2rem, 5vw, 4.5rem)`) sehingga tidak pernah terpotong atau memicu pembungkusan kata yang canggung pada layar ponsel kecil.
5. **Kamera 3D Adaptif**:
   - Komponen `Lanyard.tsx` secara otomatis mendeteksi status mobile (`window.innerWidth < 768`) untuk menyesuaikan DPR `[1, 1.5]`, langkah fisika `1/30` detik, resolusi meshline `[1000, 2000]`, dan sudut kamera untuk menjaga kartu tetap berada di tengah layar.

---

## 7. Filosofi Motion & Interaksi (Motion & States)

### 7.1 Standar 8-State Komponen Interaktif
Setiap tombol dan kartu interaktif mengimplementasikan perilaku 8-state yang jelas:
1. **Default (Rest)**: Border hitam 2px, bayangan keras 3px/4px, posisi normal.
2. **Hover**: Naik `-1.5px` secara diagonal, bayangan memanjang menjadi `5px` atau `6px`.
3. **Active (Click / Press)**: Turun `+2px` ke arah bayangan, bayangan mengecil menjadi `1px` (memberikan sensasi taktil seperti menekan tombol mekanik asli).
4. **Focus-Visible**: Garis luar kontras tinggi `2px solid var(--ring)` dengan offset 2px.
5. **Disabled**: Opasitas 50%, kursor `not-allowed`, tanpa efek translasi.
6. **Loading**: Animasi spinner berputar atau skeleton loader berkedip dengan font monospace.
7. **Error**: Border merah menyala dengan bayangan warna merah.
8. **Success**: Border hijau menyala dengan ikon centang verifikasi.

### 7.2 Spesifikasi Spring Physics
- Nilai default pegas: `stiffness: 100, damping: 20` — memberikan bobot visual yang kokoh dan berwibawa, bukan pergerakan linier yang kaku.
- **Hardware Acceleration**: Semua animasi elemen UI digerakkan secara eksklusif oleh GPU melalui properti `transform` dan `opacity`. Tidak ada animasi yang mengubah nilai layout berat seperti `top`, `left`, `width`, atau `height`.

---

## 8. Daftar Pola Terlarang (Anti-Patterns / Banned AI Clichés)

Untuk memastikan website tetap memiliki standar agensi premium dan tidak terlihat seperti template generik AI:
- ❌ **Dilarang menggunakan soft blurry drop-shadows** — Selalu gunakan *hard offset shadow* taktil.
- ❌ **Dilarang menggunakan efek "AI Neon Purple/Blue Glow"** — Dilarang menggunakan tombol berpenjepit cahaya ungu neon atau gradasi biru-ungu klise.
- ❌ **Dilarang menggunakan font Inter untuk heading display** — Gunakan sans-serif bold berkarakter atau monospace untuk metadata.
- ❌ **Dilarang menggunakan font serif generik pada antarmuka software**.
- ❌ **Dilarang menggunakan italic pada teks judul display**.
- ❌ **Dilarang menggunakan warna hitam pekat `#000000` sebagai background penuh** — Gunakan warna Obsidian / Zinc-950 (`#09090B`).
- ❌ **Dilarang menggunakan teks pengisi klise AI** (seperti *"Elevate your workflow"*, *"Seamless integration"*, *"Next-Gen experience"*).
- ❌ **Dilarang mengarang metrik palsu tanpa data resmi**.
- ❌ **Dilarang menggunakan layout 3 kartu berukuran sama secara membosankan** — Gunakan variasi bento grid asimetris.
- ❌ **Dilarang menggunakan teks instruksi murahan** seperti *"Scroll to explore"* dengan panah melompat.

---

## 9. Verifikasi Produksi & Tautan Repositori

- **Build Status**: Verified `0 errors` via `npx tsc --noEmit` & `npm run build` (Next.js 16.3.4 Turbopack).
- **Semua 13 Halaman & Rute Statis Berhasil Digenerate**:
  - `○ /`
  - `○ /_not-found`
  - `○ /blogs`
  - `● /blogs/fostech-camp`
  - `● /blogs/aplikasi-brainlyt-karya-mahasiswa-ums-raih-perak-gyiif-2026`
  - `● /blogs/mahasiswa-ums-raih-silver-medal-ipitex-thailand-lewat-inovasi-qryptopay`
  - `● /blogs/open-source-software-di-era-kecerdasan-buatan`
  - `● /blogs/musyawarah-besar-fosti-ums-2026`
  - `○ /divisi/hubpub`
  - `○ /divisi/keor`
  - `○ /divisi/ristek`
- **Cloudflare Pages Live URL**: [https://fosti-ums.pages.dev](https://fosti-ums.pages.dev)
- **GitHub Repository**: [https://github.com/faridmarufprabowo2021/fosti-ums-redesign](https://github.com/faridmarufprabowo2021/fosti-ums-redesign)
