# DESIGN SPECIFICATION: FOSTIFEST 2025 PORTAL
### *Auth Flow, Participant Cockpit, Admin Command Center & Judge Scoring Engine*

> **Portal Event:** FOSTIFEST 2025 (Forum Open Source of Informatics Engineering Festival)  
> **Gaya Desain:** Lego Neo-Brutalism (Border Solid 2px, Hard Offset Shadow 4px, Aksen Stud 4-Warna, Taktil, Responsif)  
> **Density:** `7/10` (*Cockpit Balanced*) | **Variance:** `6/10` (*Structured Bento*) | **Motion:** `6/10` (*Tactile Spring Physics*)

---

## 1. Arsitektur Peran Pengguna (Role-Based Access Control)

Sistem portal FOSTIFEST melayani 3 tipe pengguna dengan kebutuhan fungsional yang berbeda:

```
                  ┌──────────────┐
                  │ Halaman Auth │
                  │ Login / Reg  │
                  └──────┬───────┘
                         │
       ┌─────────────────┼─────────────────┐
       ▼                 ▼                 ▼
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│   PESERTA    │  │    ADMIN     │  │     JURI     │
│ (PARTICIPANT)│  │   (PANITIA)  │  │   (JUDGE)    │
└──────┬───────┘  └──────┬───────┘  └──────┬───────┘
       │                 │                 │
       ▼                 ▼                 ▼
• Status Lomba    • Verifikasi Bayar• Penilaian Karya
• Upload Karya    • Kurasi Lomba    • Rubrik Berbobot
• Invoice & TM    • Export Data     • Leaderboard
```

---

## 2. Spesifikasi Halaman 1: Login Multi-Role (`/login` / `/fostifest/login`)

### 2.1 Konsep Tata Letak (Split Screen Neo-Brutalism)
- **Desktop (`>= 1024px`)**: Split 2-kolom seimbang (`50/50`):
  - **Sisi Kiri (Brand & Visual Atmosphere)**:
    - Background Obsidian Dark (`#09090B`) dengan grid matrix teknikal.
    - Logo FOSTIFEST 2025 dengan 4 stud Lego timbul (`🔴 🟡 🔵 🟢`).
    - Headline: *"Selamat Datang di Panggung Inovasi Digital Mahasiswa Nasional."*
    - Badge berjalan (*ticker*): Informasi batas akhir pendaftaran dan total hadiah.
  - **Sisi Kanan (Formulir Autentikasi)**:
    - Kartu taktil terpusat dengan border solid 2px hitam dan `shadow-[6px_6px_0px_0px_#000]`.
- **Mobile (`< 1024px`)**: Kolom tunggal dengan kartu login penuh yang ramah sentuhan.

### 2.2 Komponen Antarmuka Login
1. **Quick Role Switcher Pills (Fitur Demo / Kemudahan Pengguna)**:
   - Kapsul tombol cepat di bagian atas formulir untuk mempermudah pengujian:
     - `[👤 Peserta]` → Mengisi akun demo `peserta@fostifest.id`.
     - `[⚡ Admin]` → Mengisi akun demo `admin@fosti.org`.
     - `[⚖️ Juri]` → Mengisi akun demo `juri@fosti.org`.
2. **Field Input**:
   - **Email / ID Pengguna**: Label monospace di atas input, border hitam 2px, focus ring merah Lego.
   - **Password**: Dilengkapi tombol ikon mata untuk melihat/menyembunyikan sandi.
   - **Ingat Saya & Lupa Password**: Checkbox neo-brutalist kotak tegas (tanpa rounded lembut) dan tautan bantuan WhatsApp.
3. **Tombol Masuk (Primary CTA)**:
   - Tombol merah Lego (`#AF101A` / `#EF4444`) berbayangan keras 4px.
   - Efek klik: `active:translate-x-0.5 active:translate-y-0.5` dengan reduksi bayangan menjadi 1px.
4. **Footer Form**:
   - Tautan: *"Belum punya akun? Daftar sekarang"*.

---

## 3. Spesifikasi Halaman 2: Registrasi Peserta (`/register` / `/fostifest/register`)

### 3.1 Alur & Validasi Pendaftaran
1. **Formulir Terstruktur 1-Layar (Single-Page Form)**:
   - **Nama Lengkap**: Sesuai kartu identitas mahasiswa (KTM).
   - **Email Aktif**: Digunakan untuk pengiriman invoice dan tiket masuk babak final.
   - **Nomor WhatsApp**: Validasi nomor telepon Indonesia (`+62` / `08xx`) untuk sinkronisasi grup WhatsApp cabang lomba.
   - **Nama Universitas / Institusi**: Input dengan saran otomatis (*autocomplete* kampus di Indonesia).
   - **Password & Konfirmasi Password**: Indikator kekuatan sandi taktil 4-bar (Merah = Lemah, Kuning = Sedang, Hijau = Kuat).
2. **Syarat & Ketentuan Organisasi**:
   - Kotak scrollable kecil memuat pernyataan orisinalitas karya dan kesediaan mematuhi *Guidebook FOSTIFEST 2025*.
   - Checkbox persetujuan: *"Saya menyetujui seluruh ketentuan lomba FOSTIFEST 2025"*.
3. **Tombol Registrasi**:
   - Tombol biru Lego (`#0055A4`) bertuliskan *"Buat Akun Peserta →"*.
   - State pendaftaran: Jika sukses, sistem langsung melakukan *auto-login* dan mengarahkan pengguna ke **Dashboard Peserta** dengan toast selamat datang.

---

## 4. Spesifikasi Halaman 3: Dashboard Peserta (`/dashboard/peserta`)

Dirancang sebagai **Kokpit Peserta** terpusat agar peserta dapat memantau status lomba, pembayaran, dan mengunggah karya dengan mudah:

### 4.1 Header Profil & Navigasi
- Nama Peserta, Asal Kampus, ID Peserta (`ID: FST25-USER-XXX`).
- Badge Status Akun: `● TERVERIFIKASI AKTIF`.
- Tombol aksi: *"Daftar Lomba Lain"*, *"Lihat Guidebook"*, dan *"Keluar"*.

### 4.2 Bento Stat Metrik Peserta (Row 1)
Grid 3 kartu bento metrik:
1. **Lomba Diikuti**: Menampilkan jumlah cabang kompetisi aktif (contoh: `2 Cabang Aktif`).
2. **Status Pembayaran**: Badge hijau `LUNAS (VERIFIED)` atau kuning `MENUNGGU KONFIRMASI`.
3. **Status Karya**: Badge biru `KARYA TERKIRIM` atau oranye `BELUM SUBMIT (H-XX)`.

### 4.3 Seksi 1: Kartu Kompetisi Saya (My Competitions)
Menampilkan kartu detail tiap lomba yang diikuti peserta:
- **Nama Cabang Lomba**: (Software Development / UI/UX Design / Line Follower / Sumobot / Workshop AI).
- **Nama Tim & Daftar Anggota**: Nama ketua dan anggota tim beserta status validasi.
- **Tautan Eksternal Cepat**:
  - Tombol hijau: `[💬 Masuk Grup WhatsApp Resmi Cabang Lomba]`.
  - Tombol biru: `[📄 Unduh Guidebook PDF]`.
  - Tombol kuning: `[📅 Jadwal Technical Meeting]`.

### 4.4 Seksi 2: Formulir Pengunggahan Karya (Submission Hub)
Komponen upload yang aktif sesuai fase timeline lomba:
- **Judul Karya / Proyek**: Input nama inovasi aplikasi atau desain.
- **Tautan Repositori GitHub**: Khusus cabang Software Development.
- **Tautan File Figma / Prototipe**: Khusus cabang UI/UX Design.
- **Tautan Video Demo (YouTube / Google Drive)**: Bukti demonstrasi fungsional aplikasi atau pengujian robot.
- **Catatan Teknis ke Dewan Juri**: Textarea ringkasan keunggulan karya.
- **Status Riwayat**: Timestamp pengiriman terakhir dan status revisi jika diperbolehkan.

### 4.5 Seksi 3: Tagihan & Konfirmasi Pembayaran (Billing Hub)
- Total Biaya Pendaftaran: (misal: Rp 55.000 / tim).
- Metode Pembayaran: Rekening Bank Resmi FOSTI (Bank BSI / Mandiri / BCA) dan QRIS resmi.
- Upload Bukti Transfer: Area *dropzone* drag-and-drop file gambar bukti pembayaran.
- Tombol: *"Kirim Bukti Pembayaran"*.

---

## 5. Spesifikasi Halaman 4: Dashboard Admin / Panitia (`/dashboard/admin`)

Dirancang sebagai **Command Center Panitia** untuk memantau data kompetisi nasional secara *real-time*:

### 5.1 Baris Metrik Real-time (KPI Bar)
Grid 4 kartu indikator utama:
1. **Total Pendaftar**: Total tim dan individu terdaftar (misal: `142 Tim`).
2. **Total Pendapatan Masuk**: Akumulasi biaya pendaftaran yang lunas (misal: `Rp 8.450.000`).
3. **Submission Masuk**: Karya yang siap dinilai (misal: `38 Karya`).
4. **Menunggu Verifikasi**: Transaksi pending yang memerlukan approval manual (misal: `7 Pembayaran`).

### 5.2 Tab 1: Manajemen Pendaftar & Pembayaran
- **Filter Cepat**: Berdasarkan cabang lomba (*All, Software Dev, UI/UX, Line Follower, Sumobot, Workshop*).
- **Bilah Pencarian**: Berdasarkan nama tim, nama ketua, atau email.
- **Tabel Neo-Brutalist**:
  - Kolom: ID Registrasi, Tim, Cabang Lomba, Asal Kampus, Nominal (HTM), Bukti Bayar (Modal Pop-up Foto), Status, dan Tombol Aksi.
  - **Aksi Cepat Admin**:
    - Tombol Hijau: `[✓ Approve & Verifikasi]`.
    - Tombol Merah: `[✕ Tolak / Minta Upload Ulang]`.

### 5.3 Tab 2: Manajemen Karya Peserta & Penugasan Juri
- Menampilkan seluruh link submission yang masuk.
- Dropdown penugasan dewan juri yang bertanggung jawab menilai karya tim terkait.
- Status progres penilaian tiap karya: `Belum Dinilai`, `Sedang Dinilai`, `Selesai Dinilai`.

### 5.4 Tab 3: Ekspor Data & Pengumuman
- Tombol: `[📥 Export Data Excel / CSV]` (data pendaftar lengkap untuk pembuatan sertifikat resmi).
- Editor Pengumuman: Form pengiriman pesan broadcast ke dashboard seluruh peserta.

---

## 6. Spesifikasi Halaman 5: Dashboard Juri (`/dashboard/juri`)

Dirancang sebagai **Scoring Engine** yang bersih, fokus, dan bebas distraksi untuk dewan juri ahli:

### 6.1 Header Dewan Juri & Ringkasan Penilaian
- Nama Juri, Institusi Juri, dan Kategori Spesialisasi Penilaian (*contoh: Dewan Juri UI/UX Design*).
- Progress Penilaian: `Karya Selesai Dinilai: 8 dari 12 Tim (66%)`.

### 6.2 Daftar Antrean Karya yang Harus Dinilai (Evaluation Queue)
Grid kartu tim peserta yang memuat:
- Nama Tim & Asal Kampus.
- Judul Karya & Ringkasan Studi Kasus.
- Tombol Tautan Langsung: `[🔗 Buka Prototipe Figma]` / `[💻 Buka Kode GitHub]` / `[▶️ Tonton Video Demo]`.
- Tombol Utama: `[⚖️ Buka Lembar Penilaian]`.

### 6.3 Lembar Penilaian Berbobot (Weighted Scoring Sheet Modal)
Form penilaian resmi dengan slider taktil dan kalkulasi skor otomatis (Skala 0 - 100):

| Kriteria Penilaian | Bobot | Rentang Skor | Deskripsi Evaluasi |
|:---|:---|:---|:---|
| **1. Orisinalitas & Inovasi** | **25%** | `0 - 25` | Kebaruan ide, pemecahan masalah riil, dan keunikan solusi. |
| **2. Kualitas Teknis & Arsitektur** | **25%** | `0 - 25` | Kerapian kode, struktur komponen, performa, dan skalabilitas. |
| **3. Desain UI/UX & Interaksi** | **25%** | `0 - 25` | Kemudahan penggunaan (*usability*), estetika visual, dan konsistensi desain sistem. |
| **4. Kelayakan & Dampak Sosial/Industri** | **25%** | `0 - 25` | Potensi implementasi nyata, nilai guna, dan kualitas presentasi/dokumentasi. |

- **Total Skor Otomatis**: Ditampilkan dalam badge besar di sisi bawah modal (`TOTAL: 88.5 / 100`).
- **Kolom Feedback Kualitatif**: Textarea wajib untuk catatan konstruktif dan rekomendasi perbaikan bagi peserta.
- **Tombol Kirim Nilai**: `[Kunci & Simpan Nilai Akhir]`.

### 6.4 Rekapitulasi Leaderboard Sementara
- Tabel peringkat skor tertinggi secara otomatis mengurutkan karya terbaik sebagai bahan rapat pleno penentuan juara 1, 2, dan 3.

---

## 7. Sistem Token Status & Warna Semantik

Untuk menjaga konsistensi di seluruh dashboard:

| Status Transaksi & Karya | Warna Background | Warna Teks | Warna Border |
|:---|:---|:---|:---|
| **VERIFIED / LUNAS / SELESAI** | `#DCFCE7` (Hijau Muda) | `#166534` (Hijau Tua) | `#22C55E` (Lego Green) |
| **PENDING / MENUNGGU REVIEW** | `#FEF9C3` (Kuning Muda) | `#854D0E` (Kuning Tua) | `#EAB308` (Lego Yellow) |
| **REJECTED / DITOLAK** | `#FEE2E2` (Merah Muda) | `#991B1B` (Merah Tua) | `#EF4444` (Lego Red) |
| **SUBMITTED / TERKIRIM** | `#DBEAFE` (Biru Muda) | `#1E40AF` (Biru Tua) | `#3B82F6` (Lego Blue) |

---

## 8. Prinsip Tata Letak Responsif & Standar Interaksi

1. **Responsif Multi-Device**:
   - Desktop: Tampilan dashboard bento multi-kolom yang padat dan informatif (*cockpit density*).
   - Tablet & Ponsel: Otomatis runtuh menjadi baris kartu tunggal dengan bilah navigasi bawah (*bottom bar*) untuk peralihan menu cepat.
2. **Umpan Balik Taktil (Tactile Feedback)**:
   - Setiap kali nilai disimpan atau status diubah, sistem memunculkan toast notifikasi neo-brutalist dengan stempel waktu monospace.
3. **Bebas Pola AI Generik**:
   - Seluruh tabel menggunakan border solid dan bayangan offset keras, tanpa gradasi blur ungu atau tombol mengambang yang tidak fungsional.
