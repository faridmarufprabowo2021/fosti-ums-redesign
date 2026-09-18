"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { divisionsData } from "@/data/divisions";
import { programsData } from "@/data/programs";
import { Division } from "@/types";
import { Code2, Users, Megaphone, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { SpotlightCard } from "@/components/react-bits/SpotlightCard";

export function DivisionsSection() {
  const [activeDivision, setActiveDivision] = useState<Division>(divisionsData[0]);

  const getDivisionIcon = (code: string) => {
    switch (code) {
      case "RISTEK":
        return Code2;
      case "KEORGANISASIAN":
        return Users;
      case "HUBUNGAN PUBLIK":
        return Megaphone;
      default:
        return Sparkles;
    }
  };

  const currentProkers = programsData.filter((p) => p.division === activeDivision.code);

  return (
    <section className="py-20 lg:py-28 border-b-2 border-black dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60" id="divisions">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-black bg-amber-300 text-xs font-mono font-black text-black shadow-[2px_2px_0px_0px_#000]">
              <span>DIVISIONS // 3 CORE PILLARS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-950 dark:text-white">
              Struktur &amp; Divisi Kerja
            </h2>
            <p className="max-w-xl text-base text-zinc-600 dark:text-zinc-400 font-medium">
              FOSTI UMS bergerak melalui tiga pilar divisi kerja aktif yang saling bersinergi dalam teknologi, kepemimpinan, dan komunikasi publik.
            </p>
          </div>

          {/* Division Selector Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl border-2 border-black bg-white shadow-[4px_4px_0px_0px_#000] dark:border-zinc-700 dark:bg-zinc-950 dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)]">
            {divisionsData.map((div) => {
              const Icon = getDivisionIcon(div.code);
              const isActive = activeDivision.code === div.code;

              return (
                <button
                  key={div.id}
                  onClick={() => setActiveDivision(div)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all ${
                    isActive
                      ? "border-2 border-black bg-amber-300 text-black shadow-[2px_2px_0px_0px_#000] dark:bg-amber-400"
                      : "text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{div.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Division Bento Card Showcase */}
        <SpotlightCard
          spotlightColor={
            activeDivision.code === "RISTEK"
              ? "rgba(37, 99, 235, 0.2)"
              : activeDivision.code === "KEORGANISASIAN"
              ? "rgba(220, 38, 38, 0.2)"
              : "rgba(234, 179, 8, 0.25)"
          }
          spotlightSize={500}
          className="rounded-3xl border-3 border-black bg-white p-6 sm:p-8 lg:p-10 shadow-[8px_8px_0px_0px_#000] dark:border-zinc-700 dark:bg-zinc-950 dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] space-y-8"
        >
          {/* Top Banner Info */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b-2 border-zinc-200 dark:border-zinc-800">
            <div className="space-y-2">
              <div className="flex items-center gap-2.5">
                <span className="rounded-lg border border-black bg-black px-2.5 py-0.5 text-xs font-mono font-bold text-white dark:border-zinc-700">
                  {activeDivision.code}
                </span>
                <span className="text-xs font-mono font-bold text-zinc-500">
                  Koordinator: {activeDivision.leadership}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-zinc-950 dark:text-white tracking-tight">
                {activeDivision.name}
              </h3>
              <p className="max-w-2xl text-sm sm:text-base text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed">
                {activeDivision.description}
              </p>
            </div>

            <Link
              href={`/divisi/${activeDivision.slug}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-black bg-zinc-950 px-6 py-3.5 text-sm font-black uppercase tracking-wider text-white shadow-[4px_4px_0px_0px_#000] hover:bg-red-600 hover:text-white hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#000] transition-all self-start lg:self-center dark:border-zinc-700 dark:bg-white dark:text-black dark:hover:bg-red-600 dark:hover:text-white"
            >
              <span>Buka Halaman {activeDivision.code}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {activeDivision.pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="p-5 rounded-2xl border-2 border-black bg-zinc-50 shadow-[3px_3px_0px_0px_#000] space-y-2 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md border border-black bg-amber-300 text-xs font-mono font-bold text-black">
                    0{idx + 1}
                  </span>
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                    {pillar.title}
                  </h4>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* Program Kerja Carousel / Cards */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-mono font-black uppercase tracking-wider text-zinc-950 dark:text-zinc-100">
                Program Kerja Unggulan {activeDivision.name}
              </h4>
              <Link
                href={`/divisi/${activeDivision.slug}`}
                className="text-xs font-bold text-red-600 hover:underline flex items-center gap-1"
              >
                <span>Lihat Selengkapnya</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentProkers.slice(0, 3).map((prog) => (
                <div
                  key={prog.id}
                  className="group rounded-2xl border-2 border-black bg-white overflow-hidden shadow-[4px_4px_0px_0px_#000] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000] transition-all dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <div className="relative h-44 w-full bg-zinc-800">
                    <Image
                      src={prog.image}
                      alt={prog.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="rounded-md border border-black bg-amber-300 px-2 py-0.5 text-[10px] font-mono font-bold text-black shadow-[1px_1px_0px_0px_#000]">
                        {prog.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 space-y-2">
                    <h5 className="text-base font-bold text-zinc-950 dark:text-zinc-100">
                      {prog.title}
                    </h5>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                      {prog.description}
                    </p>
                    {prog.highlights && (
                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {prog.highlights.slice(0, 2).map((h) => (
                          <span
                            key={h}
                            className="inline-flex items-center gap-1 text-[10px] font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded"
                          >
                            <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                            <span>{h}</span>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
