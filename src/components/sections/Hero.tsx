"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ArrowRight, Sparkles } from "lucide-react";
import { TerminalWidget } from "@/components/TerminalWidget";
import { DecryptedText } from "@/components/react-bits/DecryptedText";
import { Magnet } from "@/components/react-bits/Magnet";

// Dynamic import for 3D Hero canvas
const HeroCanvas = dynamic(
  () => import("@/components/3d/HeroCanvas").then((mod) => mod.HeroCanvas),
  { ssr: false }
);

const heroSlides = [
  {
    title: "FOSTISIDA",
    desc: "Event that brings joyful memories and togetherness",
    src: "https://res.cloudinary.com/qjw4yfke/image/upload/f_auto/q_auto/About_Fostisida1_tpolm8.webp"
  },
  {
    title: "Community Event",
    desc: "Diverse group of people at open-source tech events",
    src: "https://res.cloudinary.com/qjw4yfke/image/upload/f_auto/q_auto/v1786202663/Foto_Angkatan_Fosti_ppzybc.webp"
  },
  {
    title: "Fostech Camp",
    desc: "By developers for developers, a journey of growth",
    src: "https://res.cloudinary.com/qjw4yfke/image/upload/f_auto/q_auto/Fostech_6_astopx.webp"
  },
  {
    title: "Ifosti",
    desc: "Sharing warmth, connection, and Ramadhan blessings",
    src: "https://res.cloudinary.com/qjw4yfke/image/upload/f_auto/q_auto/Ifosti_ucvapc.webp"
  },
  {
    title: "Sidang Pleno",
    desc: "Reviewing organizational achievements and future roadmap",
    src: "https://res.cloudinary.com/qjw4yfke/image/upload/f_auto/q_auto/v1786202659/Pleno1_qfmsdu.webp"
  },
  {
    title: "Open Recruitment",
    desc: "Welcoming passionate individuals to build great things",
    src: "https://res.cloudinary.com/qjw4yfke/image/upload/f_auto/q_auto/Oprec_7_hdzxly.webp"
  }
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b-2 border-black dark:border-zinc-800" id="home">
      {/* 3D Kinetic Background Canvas */}
      <HeroCanvas />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Big Bold Headline & Stats */}
          <div className="lg:col-span-6 space-y-6">
            {/* Stud Accent Badge */}
            <div className="inline-flex items-center gap-2 rounded-xl border-2 border-black bg-white px-3.5 py-1.5 shadow-[3px_3px_0px_0px_#000] dark:border-zinc-700 dark:bg-zinc-900 dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.15)]">
              <span className="flex items-center gap-1 text-[11px] font-mono font-black text-black dark:text-zinc-200">
                <span className="text-red-500">🔴</span>
                <span className="text-yellow-400">🟡</span>
                <span className="text-blue-500">🔵</span>
                <span className="text-green-500">🟢</span>
                <span className="ml-1 tracking-wider uppercase">
                  <DecryptedText
                    text="SINCE 2008 // FORUM OPEN SOURCE UMS"
                    speed={30}
                    maxIterations={12}
                    animateOnHover={true}
                  />
                </span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-zinc-950 dark:text-white leading-[1.05]">
              We Help You{" "}
              <span className="inline-block -rotate-2 rounded-xl border-2 border-black bg-amber-300 px-3 py-0.5 text-black shadow-[4px_4px_0px_0px_#000] dark:bg-amber-400 dark:border-zinc-700">
                Boost
              </span>{" "}
              <div className="mt-2 flex flex-wrap items-center gap-2.5">
                <span>Your</span>
                <span className="inline-block rotate-1 rounded-xl border-2 border-black bg-red-600 px-3.5 py-0.5 text-white shadow-[4px_4px_0px_0px_#000] dark:border-zinc-700">
                  Creativity
                </span>
              </div>
            </h1>

            {/* Subtitle */}
            <p className="max-w-xl text-base sm:text-lg leading-relaxed font-medium text-zinc-700 dark:text-zinc-300">
              Since 2008, FOSTI has been nurturing student&apos;s passion for science and technology, proudly standing as one of the best IT student organizations in the town.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Magnet padding={30} magnetStrength={0.25}>
                <a
                  href="https://oprec.fostiums.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-xl border-2 border-black bg-amber-300 px-6 py-3.5 text-sm font-black uppercase tracking-wider text-black shadow-[4px_4px_0px_0px_#000] transition-all hover:-translate-y-1 hover:bg-blue-600 hover:text-white hover:shadow-[6px_6px_0px_0px_#000] active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_#000] dark:border-zinc-700"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Join Now!</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Magnet>

              <a
                href="#divisions"
                className="flex items-center gap-2 rounded-xl border-2 border-black bg-white px-6 py-3.5 text-sm font-bold text-black shadow-[4px_4px_0px_0px_#000] transition-all hover:-translate-y-1 hover:bg-zinc-100 hover:shadow-[6px_6px_0px_0px_#000] dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)]"
              >
                <span>Jelajahi Divisi</span>
              </a>
            </div>

            {/* Stat Counters Bento Matrix */}
            <div className="pt-6 grid grid-cols-3 gap-3 sm:gap-4">
              <div className="flex flex-col items-center justify-center p-3 rounded-xl border-2 border-black bg-white text-center shadow-[3px_3px_0px_0px_#000] hover:-translate-y-0.5 transition-all dark:border-zinc-700 dark:bg-zinc-900 dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.15)]">
                <span className="text-3xl sm:text-4xl font-black text-black dark:text-white tracking-tighter">
                  10<span className="text-red-600">+</span>
                </span>
                <p className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mt-0.5">
                  Programs
                </p>
              </div>

              <div className="flex flex-col items-center justify-center p-3 rounded-xl border-2 border-black bg-white text-center shadow-[3px_3px_0px_0px_#000] hover:-translate-y-0.5 transition-all dark:border-zinc-700 dark:bg-zinc-900 dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.15)]">
                <span className="text-3xl sm:text-4xl font-black text-black dark:text-white tracking-tighter">
                  100<span className="text-amber-500">+</span>
                </span>
                <p className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mt-0.5">
                  Members
                </p>
              </div>

              <div className="flex flex-col items-center justify-center p-3 rounded-xl border-2 border-black bg-white text-center shadow-[3px_3px_0px_0px_#000] hover:-translate-y-0.5 transition-all dark:border-zinc-700 dark:bg-zinc-900 dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.15)]">
                <span className="text-3xl sm:text-4xl font-black text-black dark:text-white tracking-tighter">
                  20<span className="text-blue-600">+</span>
                </span>
                <p className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mt-0.5">
                  Awards
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase (Tactile Photo Masonry Carousel) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl border-3 border-black bg-zinc-950 p-2.5 shadow-[8px_8px_0px_0px_#000] dark:border-zinc-700 dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]">
              {/* Photo Viewport */}
              <div className="relative h-72 sm:h-96 w-full overflow-hidden rounded-xl border-2 border-black dark:border-zinc-800 bg-zinc-900">
                {heroSlides.map((slide, idx) => (
                  <div
                    key={slide.title}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      idx === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={slide.src}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      priority={idx === 0}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <span className="inline-block rounded-md border border-white/40 bg-red-600 px-2.5 py-0.5 text-xs font-black uppercase tracking-wider mb-1.5 shadow-[2px_2px_0px_0px_#000]">
                        {slide.title}
                      </span>
                      <p className="text-xs sm:text-sm font-medium text-zinc-200">
                        {slide.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Slide Selector Indicators */}
              <div className="mt-3 flex items-center justify-center gap-2">
                {heroSlides.map((slide, i) => (
                  <button
                    key={slide.title}
                    type="button"
                    onClick={() => setActiveSlide(i)}
                    aria-label={`Slide ${i + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 border border-black dark:border-zinc-700 ${
                      i === activeSlide ? "w-8 bg-red-600" : "w-2.5 bg-zinc-400 hover:bg-zinc-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
