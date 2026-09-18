import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { DivisionsSection } from "@/components/sections/DivisionsSection";
import { MembersSection } from "@/components/sections/MembersSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { OprecCTA } from "@/components/sections/OprecCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 text-zinc-900 selection:bg-red-500 selection:text-white dark:bg-[#09090b] dark:text-zinc-100">
      {/* Global Navigation */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1">
        {/* 1. Hero & Interactive 3D Canvas */}
        <Hero />

        {/* 2. About FOSTI & Embedded CLI Terminal */}
        <AboutSection />

        {/* 3. Divisions & Programs Bento Matrix */}
        <DivisionsSection />

        {/* 4. Member Directory with 3D Rapier Lanyard Showcase */}
        <MembersSection />

        {/* 5. Hall of Fame / International & National Achievements */}
        <AchievementsSection />

        {/* 6. Life at FOSTI Activity Gallery */}
        <GallerySection />

        {/* 7. Supported By & Partner Network */}
        <PartnersSection />

        {/* 8. Tech Journal & Blog Articles */}
        <BlogSection />

        {/* 9. Open Recruitment Call To Action */}
        <OprecCTA />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
