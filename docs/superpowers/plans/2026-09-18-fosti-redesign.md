# FOSTI UMS Redesign (Lego Neo-Brutalist 3D Edition) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the official FOSTI UMS website (`https://www.fostiums.org/`) using the Lego Neo-Brutalist aesthetic and interactive 3D WebGL physics from `faridmarufprabowo2021/portofolio`, maintaining 100% exact parity of all 6 official routes and scraped data.

**Architecture:** Next.js 16 App Router with TypeScript and Tailwind CSS v4. Handoff heavy 3D rendering to client-side components using `@react-three/fiber` and `@react-three/rapier` with `next/dynamic` (`ssr: false`). All static division pages and blog posts use SSG (`generateStaticParams`) for instant load and SEO.

**Tech Stack:** Next.js 16, React 19, TypeScript 5, Tailwind CSS v4, Three.js, `@react-three/fiber`, `@react-three/drei`, `@react-three/rapier`, `motion` (Framer Motion), `lucide-react`, `next-themes`.

## Global Constraints

- Preserve exact 6 routes: `/`, `/divisi/ristek`, `/divisi/keor`, `/divisi/hubpub`, `/blogs`, and `/blogs/[slug]`.
- Use official Cloudinary images (`res.cloudinary.com/qjw4yfke/...`).
- Strict Lego Neo-Brutalist design tokens: `border-2 border-black` (`dark:border-zinc-700`), `shadow-[4px_4px_0px_0px_#000]`, and Lego stud bar (`🔴 🟡 🔵 🟢`).
- Zero placeholders (no "TBD", "TODO", or stub data).

---

### Task 1: Environment, Next.js Config & 3D Dependencies Setup

**Files:**
- Modify: `package.json`
- Modify: `next.config.ts`
- Modify: `src/app/globals.css`

**Interfaces:**
- Produces: Installed Three.js + R3F + Rapier packages; Cloudinary remote image domain configuration in `next.config.ts`; Neo-brutalist utility classes in `globals.css`.

- [ ] **Step 1: Install 3D WebGL & Physics dependencies**
Install `three`, `@types/three`, `@react-three/fiber`, `@react-three/drei`, `@react-three/rapier` with `--legacy-peer-deps` to ensure compatibility with React 19:
```bash
npm install three @types/three @react-three/fiber @react-three/drei @react-three/rapier --legacy-peer-deps
```

- [ ] **Step 2: Configure next.config.ts for Cloudinary and Three.js**
Configure `next.config.ts` to allow images from `res.cloudinary.com`:
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
  transpilePackages: ["three"],
};

export default nextConfig;
```

- [ ] **Step 3: Add Lego Neo-Brutalist utilities to globals.css**
Add tactile shadow and stud bar styling in `src/app/globals.css`:
```css
@layer utilities {
  .lego-border {
    @apply border-2 border-black dark:border-zinc-700;
  }
  .lego-shadow {
    box-shadow: 4px 4px 0px 0px #000000;
  }
  .dark .lego-shadow {
    box-shadow: 4px 4px 0px 0px rgba(255, 255, 255, 0.15);
  }
  .lego-shadow-lg {
    box-shadow: 6px 6px 0px 0px #000000;
  }
  .dark .lego-shadow-lg {
    box-shadow: 6px 6px 0px 0px rgba(255, 255, 255, 0.25);
  }
  .lego-shadow-sm {
    box-shadow: 2px 2px 0px 0px #000000;
  }
  .dark .lego-shadow-sm {
    box-shadow: 2px 2px 0px 0px rgba(255, 255, 255, 0.1);
  }
}
```

- [ ] **Step 4: Verify build runs without error**
Run `npm run build` or check TypeScript compilation:
```bash
npm run build
```

---

### Task 2: Data Consolidation & TypeScript Schemas

**Files:**
- Modify: `src/types/index.ts`
- Modify: `src/data/divisions.ts`
- Modify: `src/data/programs.ts`
- Modify: `src/data/members.ts`
- Modify: `src/data/achievements.ts`
- Modify: `src/data/gallery.ts`
- Modify: `src/data/blogs.ts`

**Interfaces:**
- Produces:
  - `Member`, `Division`, `WorkProgram`, `Achievement`, `BlogPost`, `GalleryItem` in `src/types/index.ts`
  - `divisions` map in `src/data/divisions.ts`
  - `programs` list in `src/data/programs.ts`
  - `members` list with Cloudinary avatars in `src/data/members.ts`
  - `achievements` list in `src/data/achievements.ts`
  - `galleryItems` list in `src/data/gallery.ts`
  - `blogs` list containing all 5 scraped articles in `src/data/blogs.ts`

- [ ] **Step 1: Update src/types/index.ts**
Define all types for member, division, program, blog, and achievements.

- [ ] **Step 2: Update src/data/divisions.ts & programs.ts**
Populate 3 divisions (Ristek, Keor, Hubpub) with 3 core pillars each and all work programs (Fostech Camp, Sandbox, Fostifest, Oprec, FOSTISIDA, Musker, TOT, Ifosti, Pleno, Company Visit, Media Partner, Sosmed).

- [ ] **Step 3: Update src/data/blogs.ts with 5 real official articles**
Ensure all 5 articles have complete slug, title, date, excerpt, content, Cloudinary banner, author, and category.

- [ ] **Step 4: Update members.ts, achievements.ts, and gallery.ts**
Consolidate BPHI & division members with verified Cloudinary photos, NIM, and roles.

---

### Task 3: 3D Interactive Physics Lanyard Card & Hero Kinetic Canvas

**Files:**
- Create: `src/components/3d/generateLanyardTexture.ts`
- Create: `src/components/3d/InteractiveLanyardCard.tsx`
- Create: `src/components/3d/LanyardModal.tsx`
- Create: `src/components/3d/HeroCanvas.tsx`

**Interfaces:**
- Produces:
  - `generateLanyardTexture(member: Member): HTMLCanvasElement`
  - `<InteractiveLanyardCard member={selectedMember} />`
  - `<LanyardModal isOpen={isOpen} onClose={onClose} member={member} />`
  - `<HeroCanvas />`

- [ ] **Step 1: Implement generateLanyardTexture.ts**
Draw high-res ID Card (1024x1536) on HTML5 canvas with FOSTI watermark, member photo, name, role, division, barcode, and verified badge.

- [ ] **Step 2: Implement InteractiveLanyardCard.tsx**
Build Three.js + R3F + Rapier physics simulation with dynamic joints, card rigid body, and pointer drag controls.

- [ ] **Step 3: Implement LanyardModal.tsx**
Wrap `InteractiveLanyardCard` in a Radix Dialog modal so clicking any member card opens their interactive 3D Lanyard Card.

- [ ] **Step 4: Implement HeroCanvas.tsx**
Create kinetic 3D particles / floating Lego geometric accents following pointer movements.

---

### Task 4: Core Tactile Components & Terminal Widget

**Files:**
- Modify: `src/components/Navbar.tsx`
- Modify: `src/components/Footer.tsx`
- Modify: `src/components/ThemeToggle.tsx`
- Modify: `src/components/TerminalWidget.tsx`

**Interfaces:**
- Produces:
  - Global responsive sticky `<Navbar />`
  - Multi-column `<Footer />`
  - Tactile `<ThemeToggle />`
  - Interactive CLI `<TerminalWidget />` with commands (`help`, `about`, `divisi`, `proker`, `prestasi`, `clear`)

- [ ] **Step 1: Polish Navbar.tsx**
Add Lego Neo-brutalist styling, active route indicator, mobile drawer, theme toggle, and Oprec CTA.

- [ ] **Step 2: Polish Footer.tsx**
Implement brick layout with official contacts (`fostiums@gmail.com`, IG `@fosti_ums`, YouTube `@fostiums`, LinkedIn `fostiums`), address, and quick links.

- [ ] **Step 3: Enhance TerminalWidget.tsx**
Ensure commands produce accurate outputs with clickable links to `/divisi/ristek`, `/blogs`, etc.

---

### Task 5: Home Page (`/`) Sections Assembly

**Files:**
- Modify: `src/components/sections/Hero.tsx`
- Create: `src/components/sections/AboutSection.tsx`
- Modify: `src/components/sections/DivisionsSection.tsx`
- Modify: `src/components/sections/MembersSection.tsx`
- Modify: `src/components/sections/AchievementsSection.tsx`
- Modify: `src/components/sections/GallerySection.tsx`
- Create: `src/components/sections/PartnersSection.tsx`
- Modify: `src/components/sections/OprecCTA.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Produces: Complete landing page with 3D Hero, About `#about`, Divisions `#divisi`, BPHI Showcase with 3D Lanyard, Prestasi `#achievements`, Galeri, Terminal, and CTA.

- [ ] **Step 1: Build AboutSection.tsx and update Hero.tsx**
Add "We Help You Boost Your Creativity" with animated highlight badges, stat counters, and HeroCanvas.

- [ ] **Step 2: Update DivisionsSection.tsx & MembersSection.tsx**
Implement Lego-styled bento cards for 3 divisions, and BPHI showcase with click-to-open 3D Lanyard Modal.

- [ ] **Step 3: Update AchievementsSection.tsx, GallerySection.tsx, and PartnersSection.tsx**
Render official medals and Cloudinary activity masonry.

- [ ] **Step 4: Update src/app/page.tsx**
Assemble all sections in correct narrative sequence.

---

### Task 6: Division Pages (`/divisi/ristek`, `/divisi/keor`, `/divisi/hubpub`)

**Files:**
- Create: `src/app/divisi/ristek/page.tsx`
- Create: `src/app/divisi/keor/page.tsx`
- Create: `src/app/divisi/hubpub/page.tsx`

**Interfaces:**
- Produces: 3 dedicated SSG division sub-pages with color themes:
  - Ristek: Lego Blue (`#0055A4`)
  - Keor: Lego Red (`#AF101A`)
  - Hubpub: Lego Yellow (`#FFD700`)

- [ ] **Step 1: Implement /divisi/ristek/page.tsx**
Render Ristek hero, 3 Pillars, proker cards (Fostech Camp, Sandbox, Fostifest), and division member directory with 3D Lanyard modal.

- [ ] **Step 2: Implement /divisi/keor/page.tsx**
Render Keor hero, 3 Pillars, proker cards (Oprec, FOSTISIDA, Musker, TOT, Ifosti, Pleno), and division member directory.

- [ ] **Step 3: Implement /divisi/hubpub/page.tsx**
Render Hubpub hero, 3 Pillars, proker cards (Company Visit, Media Partner, Sosmed), and division member directory.

---

### Task 7: Blog Portal & Dynamic Reader (`/blogs` & `/blogs/[slug]`)

**Files:**
- Create: `src/app/blogs/page.tsx`
- Create: `src/app/blogs/[slug]/page.tsx`

**Interfaces:**
- Produces:
  - `/blogs`: Searchable, filterable blog archive.
  - `/blogs/[slug]`: SSG reader view for all 5 official articles.

- [ ] **Step 1: Implement /blogs/page.tsx**
Search input, tag pills (`Semua`, `Achievement`, `Event`, `Teknologi`), featured article banner, and card grid.

- [ ] **Step 2: Implement /blogs/[slug]/page.tsx**
Add `generateStaticParams()` returning all 5 slugs. Render breadcrumbs, author, publish date, Cloudinary header banner, blockquotes, action share bar, and related articles.

---

### Task 8: Verification & Quality Assurance

**Files:**
- Verify: Full project build

- [ ] **Step 1: Run Next.js build**
```bash
npm run build
```
Verify 0 TypeScript errors, 0 ESLint errors, and all static routes generated (`/`, `/divisi/ristek`, `/divisi/keor`, `/divisi/hubpub`, `/blogs`, `/blogs/[slug]`).

- [ ] **Step 2: Smoke test interactive elements**
Verify 3D Physics Lanyard Card drag & swing behavior, terminal CLI commands, theme switcher, and mobile drawer.
