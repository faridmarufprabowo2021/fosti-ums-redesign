# Design Specification: Redesign Website FOSTI UMS (Lego Neo-Brutalist 3D Edition)

**Date**: 2026-09-18  
**Project**: FOSTI UMS Portal Redesign (`fosti-ums-reborn`)  
**Reference Architecture**: `https://github.com/faridmarufprabowo2021/portofolio` (Interactive 3D Lego Neo-Brutalist Portfolio)  
**Content Source**: `https://www.fostiums.org/`  

---

## 1. Context & Objectives

Website resmi FOSTI UMS (`fostiums.org`) diredesain dari tampilan standar menjadi website bertaraf modern dengan estetika **Interactive 3D Lego Neo-Brutalism**. Website ini mengadopsi seluruh signature efek dan filosofi desain dari repositori portofolio pengguna:
1. **Lego Neo-Brutalism Aesthetic**: Border 2px solid hitam tebal, hard offset drop shadows (`4px 4px 0px 0px #000`), aksen modular 4-warna stud Lego (`🔴 🟡 🔵 🟢`), dan kartu taktil.
2. **Interactive 3D WebGL Features**: Mengintegrasikan Three.js, React Three Fiber, dan Rapier Physics untuk **3D Physics Interactive Lanyard Card** (kartu identitas pengurus yang dapat ditarik, diayunkan, dan memantul dinamis), serta Hero 3D kinetic canvas.
3. **Exact Page Route Preservation**: Mempertahankan seluruh 6 jenis rute resmi dari situs eksisting FOSTI UMS:
   - `/` (Beranda)
   - `/divisi/ristek` (Divisi Riset & Teknologi)
   - `/divisi/keor` (Divisi Keorganisasian)
   - `/divisi/hubpub` (Divisi Hubungan Publik)
   - `/blogs` (Indeks Portal Blog & Arsip)
   - `/blogs/[slug]` (Detail 5 Artikel Blog Resmi)
4. **Scraped Content & Cloudinary Assets**: Memanfaatkan data riil hasil ekstraksi web resmi (divisi, struktur pengurus, program kerja, galeri kegiatan, dan seluruh artikel blog).

---

## 2. Technical Architecture

### 2.1 Stack & Tooling
* **Framework**: Next.js 16 (App Router)
* **Runtime / Core**: React 19, TypeScript 5
* **Styling**: Tailwind CSS v4, PostCSS
* **3D & Physics**: Three.js, `@react-three/fiber`, `@react-three/drei`, `@react-three/rapier`
* **Motion & Interactions**: `motion` (Framer Motion)
* **Theming**: `next-themes` (Dark & Light support)
* **Icons**: `lucide-react`, `react-icons`

### 2.2 Component Hierarchy & Data Flow
```
src/
├── app/
│   ├── layout.tsx                # Root layout with ThemeProvider, fonts, metadata
│   ├── page.tsx                  # Home Landing Page (/)
│   ├── divisi/
│   │   ├── ristek/page.tsx       # Sub-page Divisi Riset & Teknologi
│   │   ├── keor/page.tsx         # Sub-page Divisi Keorganisasian
│   │   └── hubpub/page.tsx       # Sub-page Divisi Hubungan Publik
│   └── blogs/
│       ├── page.tsx              # Blog list & filter (/blogs)
│       └── [slug]/page.tsx       # Dynamic blog reader (/blogs/[slug])
├── components/
│   ├── Navbar.tsx                # Sticky Neo-Brutalist Nav with mobile drawer
│   ├── Footer.tsx                # Comprehensive multi-column Lego footer
│   ├── ThemeToggle.tsx           # Tactile theme switcher
│   ├── TerminalWidget.tsx        # Interactive CLI hacker terminal
│   ├── 3d/
│   │   ├── InteractiveLanyard.tsx# Rapier physics lanyard card simulation
│   │   ├── LanyardModal.tsx      # Modal viewer for selected member card
│   │   └── HeroCanvas.tsx        # Kinetic Three.js background canvas
│   ├── cards/
│   │   ├── DivisionCard.tsx      # Lego bento card for divisions
│   │   ├── MemberCard.tsx        # Member card with lanyard preview trigger
│   │   ├── AchievementCard.tsx   # International medal trophy card
│   │   └── BlogCard.tsx          # Neo-brutalist blog preview card
│   └── sections/
│       ├── Hero.tsx              # Big bold hero with stat counters & canvas
│       ├── AboutSection.tsx      # Who We Are & What We Do section
│       ├── DivisionsSection.tsx  # Bento grid for Ristek, Keor, Hubpub
│       ├── MembersSection.tsx    # BPHI & executive showcase with search/filters
│       ├── AchievementsSection.tsx# Hall of Fame medals & honors
│       ├── GallerySection.tsx    # Masonry photo showcase of events
│       ├── PartnersSection.tsx   # Supported by & sponsors
│       └── OprecCTA.tsx          # High-conversion Open Recruitment callout
├── data/
│   ├── divisions.ts              # Data for Ristek, Keor, Hubpub (pillars, proker, vision)
│   ├── programs.ts               # Complete list of work programs
│   ├── members.ts                # Structured members list with Cloudinary photos
│   ├── achievements.ts           # GYIIF, IPITEx, IID achievements
│   ├── gallery.ts                # Photos from FOSTISIDA, Fostech Camp, Ifosti, Pleno
│   └── blogs.ts                  # 5 complete scraped blog articles with content
└── types/
    └── index.ts                  # TypeScript types for all entities
```

---

## 3. UI/UX & Design System (Lego Neo-Brutalism)

1. **Color Tokens**:
   - Primary Quad: Red (`#AF101A`), Yellow (`#FFD700`), Blue (`#0055A4`), Green (`#00852B`).
   - Surfaces: Light mode (`#F8F9FA` bg, `#FFFFFF` cards, `#000000` borders), Dark mode (`#090A0C` bg, `#121417` cards, `#3F4450` borders).
2. **Tactile Interaction**:
   - `shadow-[4px_4px_0px_0px_#000]` for default state.
   - `hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000]` for hover elevation.
   - `active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_#000]` for click press.
3. **Typography**:
   - Bold geometric headings with tilted Lego badges.
   - Monospace accents for tech status, terminal, and tabular figures.

---

## 4. Exact Route & Page Content Mapping

1. **`/` (Beranda)**:
   - Navbar, Hero 3D Canvas, About Us, Divisions Bento, Executive Showcase, Achievements, Activity Gallery, Partners, Terminal, CTA Oprec, Footer.
2. **`/divisi/ristek`**:
   - Hero Ristek (Blue Theme), 3 Core Pillars, Proker Cards (Fostech Camp, Sandbox, Fostifest), Member Directory.
3. **`/divisi/keor`**:
   - Hero Keor (Red Theme), 3 Core Pillars, Proker Cards (Oprec, FOSTISIDA, Musker, TOT, Ifosti, Pleno), Member Directory.
4. **`/divisi/hubpub`**:
   - Hero Hubpub (Yellow Theme), 3 Core Pillars, Proker Cards (Company Visit, Media Partner, Sosmed), Member Directory.
5. **`/blogs`**:
   - Header, Search bar, Category filters, Featured blog card, Grid of blog articles.
6. **`/blogs/[slug]`**:
   - 5 Real Articles:
     1. `aplikasi-brainlyt-karya-mahasiswa-ums-raih-perak-gyiif-2026`
     2. `fostech-camp`
     3. `indonesia-inventors-tim-mahasiswa-ums-bawa-pulang-5-medali-bergengsi`
     4. `inovasi-mahasiswa-ums-diakui-dunia-5-tim-berprestasi-di-ipitex-thailand-2026`
     5. `mahasiswa-ums-raih-silver-medal-ipitex-thailand-lewat-inovasi-qryptopay`

---

## 5. Implementation Roadmap

1. **Phase 1: Dependencies & 3D Physics Setup**:
   - Install `three`, `@react-three/fiber`, `@react-three/drei`, `@react-three/rapier`.
   - Setup `InteractiveLanyardCard` and `generateLanyardTexture` utility.
2. **Phase 2: Scraped Data Consolidations**:
   - Populate `src/data/blogs.ts`, `src/data/divisions.ts`, `src/data/members.ts` with all extracted Cloudinary URLs and full texts.
3. **Phase 3: Core Components & Layouts**:
   - Build Lego Neo-Brutalist Navbar, Footer, TerminalWidget, and ThemeToggle.
4. **Phase 4: Exact Page Implementation**:
   - Landing page (`/`) with 3D Canvas and BPHI Lanyard Showcase.
   - Division pages (`/divisi/ristek`, `/divisi/keor`, `/divisi/hubpub`).
   - Blog archive (`/blogs`) and Dynamic Reader (`/blogs/[slug]`).
5. **Phase 5: Verification & Quality Assurance**:
   - Build test (`npm run build`), responsive QA, WebGL 60fps performance check.
