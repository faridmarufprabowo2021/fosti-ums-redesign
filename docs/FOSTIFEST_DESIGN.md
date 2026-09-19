# DOKUMEN ANALISIS & SPESIFIKASI REDESIGN: FOSTIFEST 2025
> **Portal Resmi:** https://fostifest.fostiums.org/  
> **Penyelenggara:** FOSTI UMS (Forum Open Source Teknik Informatika Universitas Muhammadiyah Surakarta)  
> **Tema Acara:** *"Beyond Codes: Creativity in the Digital Age"*  
> **Disusun Dengan Disiplin:** Hallmark (Design Audit & DNA Extraction) & Stitch Design Taste (Semantic Design System)

---

## BAGIAN 1: ANALISIS & AUDIT DESAIN SITUS FOSTIFEST SAAT INI

### 1.1 Diagnosa Visual & Masalah Desain Saat Ini (*As-Is Analysis*)
Berdasarkan hasil ekstraksi dan inspeksi langsung terhadap berkas *production bundle* (`index-CWykmbrE.js` & `index-C7f1yzg4.css`) serta tampilan langsung `https://fostifest.fostiums.org/`:

1. **Monoton dan Berpotensi Terlihat Seperti Template AI (*AI Slop Tells*)**:
   - Seluruh website didominasi oleh gradasi *Emerald/Teal* standar (`from-emerald-500 to-teal-600`, `bg-teal-700`, `text-teal-300`) dengan efek *blurry radial glow* (`bg-emerald-500/20 blur-3xl`).
   - Pendekatan ini adalah salah satu pola paling klise pada *landing page* teknologi yang dihasilkan oleh generator AI generik.
2. **Ketiadaan Keselarasan Brand dengan Induk Organisasi (FOSTI UMS)**:
   - FOSTI UMS memiliki identitas visual yang sangat kuat: **Lego Neo-Brutalism** dengan 4 warna stud balok legendaris (**🔴 Merah, 🟡 Kuning, 🔵 Biru, 🟢 Hijau**).
   - Website FOSTIFEST saat ini sama sekali tidak mencerminkan identitas balok Lego ataupun sifat keterbukaan *Open Source* yang taktil, melainkan terasa seperti kompetisi komersial terpisah.
3. **Hirarki Tipografi Datar**:
   - Judul-judul seksi hanya mengandalkan teks bergradasi transparan (*bg-clip-text*), tanpa adanya penekanan bobot (*weight contrast*), badge miring (*slanted highlights*), atau ritme asimetris.
4. **Tata Letak Repetitif & Simetris**:
   - Menggunakan susunan standar: Hero → Countdown → 3 Kolom Kategori → Timeline Vertikal Biasa → Speaker → Sponsor → FAQ.
   - Tidak ada elemen interaktif unik (seperti *3D physics*, *hacker terminal simulator*, *spotlight hover*, atau *tilted cards*).
5. **Kelebihan yang Layak Dipertahankan**:
   - Struktur informasinya sangat lengkap: 4 cabang lomba (Software Dev, UI/UX, Line Follower, Sumobot), 1 workshop AI nasional, timeline 4 fase, panduan guidebook Google Drive, grup WhatsApp komunitas, dan kontak narahubung aktif.

---

## BAGIAN 2: VISI & KONSEP REDESIGN (*To-Be Architecture*)

### 2.1 Konsep Utama: "Cyber Arena & Lego Neo-Brutalism Festival"
Redesign FOSTIFEST akan membawa energi kompetisi teknologi tingkat nasional dengan menggabungkan:
- **Lego Neo-Brutalism FOSTI**: Border hitam solid 2px/3px, bayangan *hard offset* tanpa blur, aksen stud Lego 4 warna, dan tombol taktil yang memberikan sensasi seperti menekan tombol mekanik.
- **Cyber Competition Arena**: Nuansa panggung festival digital berlatar belakang *Obsidian Dark* (`#09090B`) dengan aksen warna khusus untuk tiap cabang lomba:
  - 🔵 **Lego Blue (`#0055A4`)** → Cabang *Software Development*.
  - 🟡 **Lego Yellow (`#FFD700`)** → Cabang *UI/UX Design*.
  - 🔴 **Lego Red (`#AF101A`)** → Cabang *Robotika (Line Follower & Sumobot)*.
  - 🟢 **Lego Green (`#00852B`)** → Cabang *National AI Workshop (LangGraph)*.

---

## BAGIAN 3: SISTEM TOKEN & PALET WARNA (COLOR CALIBRATION)

### 3.1 Palet Utama (Lego Festival Arena)
| Token | HEX Code | Peran Fungsional & Cabang Lomba |
|:---|:---|:---|
| `--arena-bg` | `#09090B` | Latar belakang kanvas festival (Obsidian Dark) |
| `--arena-card` | `#12141A` | Permukaan kartu kompetisi dan bento |
| `--arena-border` | `#272A32` (Dark) / `#000000` (Light) | Border solid 2px penegak struktur taktil |
| `--arena-red` | `#AF101A` / `#EF4444` | Robotika (Sumobot & Line Follower), Tombol Daftar Utama |
| `--arena-yellow` | `#FFD700` / `#F59E0B` | UI/UX Design, Highlight Teks, Hadiah & Penghargaan |
| `--arena-blue` | `#0055A4` / `#2563EB` | Software Development, Tautan Guidebook, Sains & Riset |
| `--arena-green` | `#00852B` / `#16A34A` | AI Workshop (LangGraph), Status Registrasi Aktif, WhatsApp |

### 3.2 Bayangan Taktil (Hard Offset Shadows)
```css
/* Kartu Kompetisi & Bento */
.fostifest-card {
  border: 2px solid #000000;
  box-shadow: 4px 4px 0px 0px #000000;
  border-radius: 0.75rem; /* rounded-xl */
}
.dark .fostifest-card {
  border-color: #3F4450;
  box-shadow: 4px 4px 0px 0px rgba(255, 255, 255, 0.15);
}

/* Tombol Taktil Interaktif */
.fostifest-btn {
  border: 2px solid #000000;
  box-shadow: 3px 3px 0px 0px #000000;
  transition: all 0.15s cubic-bezier(0.16, 1, 0.3, 1);
}
.fostifest-btn:hover {
  transform: translate(-1.5px, -1.5px);
  box-shadow: 5px 5px 0px 0px #000000;
}
.fostifest-btn:active {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0px 0px #000000;
}
```

---

## BAGIAN 4: STRUKTUR SEKSI & TATA LETAK HALAMAN REDESIGN

### 1. Sticky Festival Navbar
- **Brand Left**: Logo FOSTIFEST 2025 dengan 4 titik stud Lego (`🔴 🟡 🔵 🟢`) + label *FOSTI UMS*.
- **Center Nav**: *Tentang*, *Cabang Lomba*, *Workshop AI*, *Timeline*, *FAQ*, *Kontak*.
- **Right Action**: Countdown Chip Mini (`⏱ H-XX`), Switch Mode Gelap/Terang, dan tombol taktil *"Masuk / Daftar"*.

### 2. Kinetic Hero Section (Asymmetric 12-Column Grid)
- **Kolom Kiri (7 Kolom)**:
  - Micro-tag: `[ FESTIVAL TEKNOLOGI NASIONAL // FOSTI UMS 2025 ]`.
  - Headline Utama:  
    *"Beyond Codes: <span class="-rotate-2 bg-yellow-300 text-black border-2 border-black px-2 py-0.5">Creativity</span> in the Digital Age"*.
  - Subteks deskriptif ajang kompetisi bergengsi tahunan.
  - **Live Countdown Timer Taktil**: 4 kotak neo-brutalist (Hari, Jam, Menit, Detik) dengan font monospace tabular.
  - Quick CTA Ganda: Tombol primer merah *"Pilih Cabang Lomba"* + tombol hijau WhatsApp *"Gabung Komunitas"*.
- **Kolom Kanan (5 Kolom)**:
  - Showcase visual kinetik 3D / Interactive Badge yang menampilkan trofi dan balok Lego melayang.

### 3. Overview & Festival Pillars
- Penjelasan singkat visi FOSTIFEST 2025 sebagai panggung kolaborasi, uji kompetensi, dan batu loncatan karier mahasiswa di dunia digital.
- 3 Kartu Nilai:
  1. *National Stage*: Bersaing dengan talenta terbaik dari kampus se-Indonesia.
  2. *Industry Standard*: Penjurian langsung oleh praktisi & akademisi profesional.
  3. *Real Impact*: Menghasilkan prototipe dan karya yang dapat diimplementasikan.

### 4. Competitions Arena (Bento Grid 4 Cabang Lomba)
Grid asimetris interaktif dengan warna khas tiap cabang:
1. **Software Development Card (Lego Blue)**:
   - Hadiah / Biaya: Rp 55.000 / Tim (maks. 3 orang).
   - Tag: *Web, Mobile, Cloud, Full-Stack*.
   - Aksi: Tombol Unduh Guidebook (Google Drive) + Tombol Masuk Grup WA Khusus.
2. **UI/UX Design Card (Lego Yellow)**:
   - Hadiah / Biaya: Rp 55.000 / Tim (maks. 3 orang).
   - Tag: *User Research, Figma, High-Fidelity Prototype*.
   - Aksi: Tombol Unduh Guidebook + Grup WA Desain.
3. **Robot Line Follower Card (Lego Red)**:
   - Hadiah / Biaya: Rp 70.000 / Tim.
   - Tag: *Autonomous Hardware, Sensor Navigasi, High Speed Track*.
   - Aksi: Tombol Unduh Guidebook + Grup WA Robotika.
4. **Sumobot Card (Lego Red)**:
   - Hadiah / Biaya: Rp 70.000 / Tim.
   - Tag: *Dohyo Arena, Mechanical Push, Battle Robot*.
   - Aksi: Tombol Unduh Guidebook + Grup WA Robotika.

### 5. National Workshop: "Build Your Own AI Agent"
- **Highlight Card Berukuran Besar (Lego Green)**:
  - Judul: *"Build Your Own AI Agent: LangGraph & Agentic Intelligence"*.
  - Narasumber: **Firania Putri Harsanti** (Software & DevOps Engineer, Founder & CEO Neutrack AI Glove).
  - Profil Keahlian: *Artificial Intelligence, IoT & Embedded Systems, Tech Entrepreneurship*.
  - Biaya Registrasi: Rp 20.000 (Sangat terjangkau untuk mahasiswa).
  - Waktu Pelaksanaan: 07 Desember 2025.

### 6. Interactive 4-Phase Timeline Stepper
Format *horizontal stepper* atau kartu vertikal bertingkat:
- **Phase 1: Registration & Submission** (18 Okt - 25 Nov 2025).
- **Phase 2: Judging Days** (16 - 17 Nov 2025).
- **Phase 3: Technical Meeting & Finalist Announcement** (14 & 18 Nov 2025).
- **Phase 4: Final Competition D-Day & Awarding** (30 Nov 2025 di Kampus UMS).

### 7. FAQ Taktil Accordion
- 9 pertanyaan umum dengan ekspansi interaktif tanpa jeda, mencakup syarat peserta (KTM aktif), izin ikut lebih dari 1 lomba, mekanisme transfer hadiah (e-wallet/bank), dan bantuan teknis online.

### 8. Direct Helpdesk & WhatsApp Contact Persons
- Dua kartu narahubung cepat:
  - **Najla**: `+62 821-3774-8602` (Tombol langsung chat WA).
  - **Paramesti**: `+62 857-1304-1829` (Tombol langsung chat WA).

### 9. Sponsor, Media Partner & Footer
- Logo sponsor dan mitra media dalam kotak berbingkai border rapi.
- Footer resmi FOSTI UMS dengan tautan kembali ke portal induk `fostiums.org`.
