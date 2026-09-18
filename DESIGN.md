# DESIGN SPECIFICATION: LEGO NEO-BRUTALISM // FOSTI UMS REBORN

> *"Membangun perangkat lunak dan portal organisasi dengan pendekatan modular, presisi, dan taktil seperti balok LEGO. Estetika yang berani, fungsional, dan sarat interaktivitas 3D tingkat lanjut."*

---

## 1. Filosofi & Metafora Desain (Design Metaphor)

Portal FOSTI UMS ini didesain ulang dengan mengadopsi DNA visual utama dari portofolio **Farid Ma'ruf Prabowo** (`faridmarufprabowo2021/portofolio`):
* **Lego Neo-Brutalism**: Menggabungkan kesederhanaan geometris balok LEGO dengan ketegasan *neo-brutalism* modern (border tebal 2px hitam, hard offset shadows tanpa blur, dan sudut rounded taktil `rounded-xl`).
* **Tactile Stud Accents**: Menggunakan aksen balok modular 4-warna khas LEGO:
  `🔴 #AF101A (Red) • 🟡 #FFD700 (Yellow) • 🔵 #0055A4 (Blue) • 🟢 #00852B (Green)`
* **High-Tech Physics Immersion**: Mengintegrasikan WebGL 3D mutakhir (Three.js, React Three Fiber, dan Rapier Physics) untuk menciptakan kartu tanda pengenal pengurus (3D Lanyard ID Card) yang dapat ditarik, diayunkan, dan berinteraksi secara fisik di dalam browser.

---

## 2. Palet Warna & Token Sistem (Design Tokens)

### 2.1 Palet Utama (Lego Quad-Core)
| Token | HEX (Light) | HEX (Dark / Glow) | Penggunaan Semantik |
|:---|:---|:---|:---|
| `--lego-red` | `#AF101A` / `#EF4444` | `#DC2626` | Divisi Keorganisasian (Keor), Tombol Primer / CTA Join, Badge Error/Urgent |
| `--lego-yellow` | `#FFD700` / `#F59E0B` | `#FBBF24` | Divisi Hubungan Publik (Hubpub), Highlight Teks Hero, Badge Peringatan/Bintang |
| `--lego-blue` | `#0055A4` / `#2563EB` | `#3B82F6` | Divisi Riset & Teknologi (Ristek), Tautan, Badge Sains & Teknologi |
| `--lego-green` | `#00852B` / `#16A34A` | `#22C55E` | Status Aktif (Live Indicator), Badge Prestasi / Open Source |

### 2.2 Bidang Latar & Permukaan (Surfaces & Backgrounds)
```css
/* Light Mode (Tactile Clean Paper) */
--bg-primary: #F8F9FA;
--surface-card: #FFFFFF;
--surface-elevated: #F1F3F5;
--border-strong: #000000;
--text-main: #111827;
--text-muted: #4B5563;

/* Dark Mode (Obsidian Hacker Terminal) */
--bg-primary: #090A0C;
--surface-card: #121417;
--surface-elevated: #1A1D24;
--border-strong: #272A32;
--border-contrast: #3F4450;
--text-main: #F3F4F6;
--text-muted: #9CA3AF;
```

---

## 3. Aturan Taktil: Border & Offset Shadow

Tidak ada bayangan blur halus (soft drop-shadow) yang membuat elemen tampak "murahan" atau generik. Semua bayangan adalah **Hard Offset Shadow**:

```css
/* Standar Kartu Neo-Brutalist (Rest State) */
.lego-card {
  border: 2px solid #000000;
  box-shadow: 4px 4px 0px 0px #000000;
  border-radius: 0.75rem; /* rounded-xl */
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Hover State (Floating Upwards) */
.lego-card:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px 0px #000000;
}

/* Active / Click State (Tactile Press) */
.lego-card:active {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0px 0px #000000;
}

/* Dark Mode Override */
.dark .lego-card {
  border-color: #3F4450;
  box-shadow: 4px 4px 0px 0px rgba(255, 255, 255, 0.12);
}
.dark .lego-card:hover {
  box-shadow: 6px 6px 0px 0px rgba(255, 255, 255, 0.22);
}
```

---

## 4. Tipografi & Hirarki Teks

* **Display & Heading**: Menggunakan sans-serif bold geometris (Inter/Geist) dengan `font-extrabold` atau `font-black`, `tracking-tight` atau `tracking-tighter`.
* **Badge Header Highlight**: Teks penting di dalam heading dibungkus badge miring tipis (`-rotate-2`) dengan border 2px dan background warna kontras (misal: `<span className="inline-block -rotate-2 bg-amber-300 border-2 border-black px-2 py-0.5">Boost</span>`).
* **Technical & Code Font**: Monospace (`JetBrains Mono`, `DM Mono`, atau `font-mono`) untuk:
  * Indikator status (`🔴 🟡 🔵 🟢 // MODULAR SYSTEM //`).
  * Angka statistik tabular (`tabular-nums`).
  * Terminal CLI widget dan NIM anggota.

---

## 5. Komponen Interaktif Unggulan (3D Highlights)

### 5.1 🪪 3D Interactive Physics Lanyard Card (`InteractiveLanyardCard.tsx`)
Mengadopsi implementasi dari portofolio Farid:
1. **Engine Fisika**: `@react-three/rapier` dengan komponen `RigidBody` bertipe *dynamic* untuk kartu dan beberapa sendi tali lanyard (*spherical/revolute joints*).
2. **Dynamic Canvas Texture**: Fungsi `generateLanyardTexture(member)` menggambar kanvas 2D secara *on-the-fly* pada resolusi 1024x1536:
   * Header: Logo FOSTI UMS + Stempel "VERIFIED MEMBER 2026".
   * Foto profil asli anggota (dari Cloudinary FOSTI).
   * Nama Lengkap, Jabatan, Divisi, dan NIM resmi.
   * Barcode Code-128 dan QR Code autentikasi yang mengarah ke portal FOSTI.
3. **Interaktivitas Pengguna**: Pengunjung dapat mengarahkan kursor, mengklik, menarik (*drag*), dan memutar kartu ID 3D. Saat dilepas, kartu akan berayun secara gravitasi dan redaman inersia (*spring physics*).

### 5.2 🌌 Hero Kinetic 3D Canvas (`HeroCanvas.tsx`)
1. Menggunakan `@react-three/fiber` dengan latar belakang partikel grid dan elemen balok 3D kinetik yang berotasi perlahan mengikuti koordinat kursor mouse (*mouse parallax*).
2. Dioptimalkan untuk performa tinggi dengan *dampened lerp* dan *frameloop demand/always*.

### 5.3 💻 Hacker Terminal Console Widget (`TerminalWidget.tsx`)
1. Jendela terminal bergaya macOS/Linux dengan 3 bulatan kontrol Lego (`🔴 🟡 🟢`).
2. Menerima interaksi command nyata:
   * `help`: Menampilkan daftar perintah.
   * `divisi`: Menampilkan ringkasan divisi (Ristek, Keor, Hubpub) dengan tautan navigasi.
   * `proker`: Menampilkan program kerja utama FOSTI.
   * `prestasi`: Menampilkan daftar medali internasional (GYIIF, IPITEx, IID).
   * `clear`: Membersihkan layar konsol.

---

## 6. Tata Letak & Struktur Halaman (Page Layouts)

### 6.1 Layout Beranda (`/`)
1. **Navbar Taktil**: Fixed top dengan blur backdrop, logo badge, link menu, switch dark mode, dan tombol CTA.
2. **Hero Block**: Grid 2-kolom:
   * Kiri: Headline besar "We Help You Boost Your Creativity" + Stat counter bento (Work Programs, Members, Achievements) + CTA ganda.
   * Kanan: Hero 3D interactive showcase atau photo slider masonry kegiatan FOSTI.
3. **About Section**: Profil non-profit independen sejak 2008, 3 kartu nilai utama.
4. **Divisions Bento**: 3 kartu asimetris dengan identitas warna Lego (Ristek Biru, Keor Merah, Hubpub Kuning).
5. **BPHI & Executive Showcase**: Tampilan pimpinan organisasi dilengkapi opsi melihat kartu 3D Lanyard.
6. **Achievements**: Kartu medali kompetisi internasional dengan badge penghargaan emas & perak.
7. **Life at FOSTI Gallery**: Galeri masonry interaktif foto kegiatan Cloudinary asli.
8. **Supported By / Partners**: Logo mitra pendukung.
9. **Terminal Section**: Konsol CLI interaktif.
10. **CTA Oprec & Footer**: Banner ajakan bergabung dan peta situs lengkap.

### 6.2 Layout Halaman Divisi (`/divisi/[slug]`)
1. **Header Banner Divisi**: Banner besar dengan visual identitas divisi, judul besar, dan deskripsi tujuan divisi.
2. **3 Core Pillars Matrix**: Grid 3 kartu tebal menjelaskan fokus kerja divisi.
3. **Program Kerja Unggulan**: Kartu detail setiap program kerja beserta foto kegiatan Cloudinary.
4. **Member & Executive Directory**: Grid foto pengurus divisi dengan badge peran, NIM, dan tombol pop-up 3D Lanyard Card.

### 6.3 Layout Halaman Blog (`/blogs`) & Detail (`/blogs/[slug]`)
1. **Indeks (`/blogs`)**:
   * Search input dengan ikon kaca pembesar dan border tebal.
   * Tag filter pills untuk navigasi instan.
   * Featured article banner + Grid 2 atau 3 kolom kartu artikel.
2. **Detail (`/blogs/[slug]`)**:
   * Reader view lebar maksimal `max-w-4xl`.
   * Banner gambar Cloudinary dengan caption taktil.
   * Blockquote berbingkai tebal warna kuning Lego untuk kutipan ketua pelaksana dan ketua bidang.
   * Tombol kembali dan grid artikel rekomendasi di bagian bawah.

---

## 7. Standar Micro-Interactions & Animasi

* **Hover Button Lift**: `hover:-translate-y-1 hover:-translate-x-0.5 hover:shadow-[6px_6px_0px_0px_#000]`.
* **Motion Stagger**: Setiap section memanfaatkan Framer Motion (`motion.div`) dengan `initial={{ opacity: 0, y: 20 }}`, `whileInView={{ opacity: 1, y: 0 }}`, dan `viewport={{ once: true }}`.
* **Sound / Haptic Readiness**: Tombol disiapkan untuk respons tactile visual instan.
