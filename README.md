# FOSTI UMS — Interactive 3D Lego Neo-Brutalist Redesign 🧱⚡

> Redesign resmi website **FOSTI UMS** (Forum Open Source Teknik Informatika Universitas Muhammadiyah Surakarta) mengadopsi estetika **Interactive 3D Lego Neo-Brutalism**, animasi fisika Three.js & Rapier, komponen React Bits, serta Next.js 16 App Router.

[![Live Demo](https://img.shields.io/badge/Live_Demo-fosti--ums.pages.dev-FFD700?style=for-the-badge&logo=cloudflare&logoColor=black)](https://fosti-ums.pages.dev)
[![Next.js 16](https://img.shields.io/badge/Next.js-16.3.4-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![React 19](https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Three.js](https://img.shields.io/badge/Three.js-R3F-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-Deployed-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com)

---

## 🌟 Fitur Utama & Visual Highlights

### 1. 🧱 Interactive 3D Lego Neo-Brutalism
- **Karakter Visual**: Kontras tinggi dengan border tebal (`border-2 border-black` / `dark:border-zinc-700`), bayangan jatuh keras (*hard drop shadow* `shadow-[4px_4px_0px_0px_#000]`), dan palet warna Lego Quad:
  - 🔴 **Lego Red** (`#AF101A`)
  - 🟡 **Lego Yellow** (`#FFD700`)
  - 🔵 **Lego Blue** (`#0055A4`)
  - 🟢 **Lego Green** (`#00852B`)
- **Aksen Stud Lego**: Barisan stud Lego timbul (`🔴 🟡 🔵 🟢`) pada header, kartu, navbar, dan badge.

### 2. 🪪 3D Physics Lanyard Card (React Bits x Rapier Engine)
- **Simulasi Fisik Nyata**: Lanyard 3D interaktif yang menggabungkan `@react-three/fiber`, `@react-three/drei`, dan simulasi fisika tali `@react-three/rapier` (*multi-segment rigid bodies + rope joints*).
- **Tali Gantungan Pita Kain Kinetik**: Tali pita kain 3D dengan sablon `★ FOSTI UMS ★ OPEN SOURCE ★ FKI UMS ★` yang meliuk lentur mengikuti inersia ayunan.
- **Klip Logam & Selongsong Akrilik**: Jepitan swivel clasp perak krom dan casing akrilik transparan dengan pantulan specular.
- **Desain Kartu Identitas Eksklusif**: Kanvas dinamis 1024x1536 merender foto profil, emas chip pintar EMV, segel hologram pelangi iridescent, barcode unik, dan cap verifikasi resmi `VERIFIED ID FOSTI 2026/2027`.
- **Dapat Ditarik (*Draggable*)**: Pengguna dapat menarik, melempar, dan mengayunkan ID Card anggota manapun secara langsung.

### 3. ✨ Komponen React Bits Terintegrasi
- **`TiltedCard`**: Efek kemiringan 3D interaktif dengan pelacakan kursor mouse dan pantulan kilau cahaya pada kartu anggota dan medali prestasi.
- **`SpotlightCard`**: Sorotan lampu gradien radial dinamis yang mengikuti kursor mouse dengan kalibrasi warna divisi (Lego Blue, Lego Red, Lego Yellow).
- **`DecryptedText`**: Efek animasi teks dekripsi cyberpunk/hacker pada badge Lego dan header.
- **`Magnet`**: Efek tarikan magnetik taktil pada tombol utama Call-to-Action (CTA).

### 4. 💻 Embedded Interactive Hacker CLI Terminal
- Terminal konsol interaktif bertema Lego Neo-brutalism yang mendukung navigasi perintah:
  `help`, `about`, `divisions`, `members`, `achievements`, `contact`, `theme`, `clear`, `sudo`.

---

## 🗺️ Paritas 100% Rute Resmi FOSTI UMS

| Rute | Tipe | Deskripsi Halaman |
| :--- | :--- | :--- |
| `/` | `Static (○)` | **Home / Landing Page** — Hero 3D, About & CLI, Bento Divisi, BPHI Directory dengan 3D Lanyard, Prestasi, Galeri, Mitra, Blog, dan Oprec CTA. |
| `/divisi/ristek` | `Static (○)` | **Divisi Riset dan Teknologi** — Tema Lego Blue, 3 Pilar Riset, Program Kerja (Fostech Camp, Sandbox, Fostifest), dan direktori developer Ristek. |
| `/divisi/keor` | `Static (○)` | **Divisi Keorganisasian** — Tema Lego Red, 3 Pilar Kaderisasi, Program Kerja (Oprec, FOSTISIDA, Musker, TOT, Ifosti, Pleno), dan direktori pengurus Keor. |
| `/divisi/hubpub` | `Static (○)` | **Divisi Hubungan Publik** — Tema Lego Yellow, 3 Pilar Komunikasi, Program Kerja (Company Visit, Media Partner, Sosmed), dan direktori anggota Hubpub. |
| `/blogs` | `Static (○)` | **Arsip Blog & Warta** — Pencarian live, filter tag (`Prestasi`, `Program`, `Ristek`), dan featured banner warta. |
| `/blogs/[slug]` | `SSG (●)` | **Dynamic Blog Reader** — 5 artikel otentik dari web resmi FOSTI dengan Cloudinary header, kutipan narasumber resmi, dan share button. |

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org) + [React 19](https://react.dev)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **3D & Physics**: [Three.js](https://threejs.org/), [@react-three/fiber](https://r3f.docs.pmnd.rs/), [@react-three/drei](https://github.com/pmndrs/drei), [@react-three/rapier](https://github.com/pmndrs/react-three-rapier)
- **Animations**: [Motion (Framer Motion v13)](https://motion.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes) (Light & Dark Mode)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com) via Wrangler

---

## 🚀 Menjalankan Proyek Lokal

1. **Clone repository**:
   ```bash
   git clone https://github.com/faridmarufprabowo2021/fosti-ums-redesign.git
   cd fosti-ums-redesign
   ```

2. **Install dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Jalankan development server**:
   ```bash
   npm run dev
   ```

4. Buka browser di [http://localhost:3000](http://localhost:3000).

---

## 📦 Build Produksi & Deploy ke Cloudflare Pages

1. **Build Static Export**:
   ```bash
   npm run build
   ```

2. **Deploy ke Cloudflare Pages**:
   ```bash
   npx wrangler pages deploy out --project-name fosti-ums
   ```

---

## 📄 Lisensi
Hak Cipta © 2026 **FOSTI UMS** (Forum Open Source Teknik Informatika Universitas Muhammadiyah Surakarta).
Dilisensikan di bawah [MIT License](LICENSE).
