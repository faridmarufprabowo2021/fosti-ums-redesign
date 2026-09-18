"use client";

import React, { useState } from "react";
import { achievementsData } from "@/data/achievements";
import { AchievementCard } from "@/components/AchievementCard";
import { Trophy } from "lucide-react";

export function AchievementsSection() {
  const [selectedYear, setSelectedYear] = useState<string>("ALL");

  const yearTabs = ["ALL", "2026", "2025", "2024"];

  const filteredAchievements = achievementsData.filter(
    (item) => selectedYear === "ALL" || item.year === selectedYear
  );

  return (
    <section className="py-20 lg:py-28 border-b-2 border-black dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60" id="achievements">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-md border border-black bg-amber-300 px-3 py-1 text-xs font-mono font-black text-black shadow-[2px_2px_0px_0px_#000]">
              <Trophy className="h-3.5 w-3.5" />
              <span>HALL OF FAME // INTERNATIONAL AWARDS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-950 dark:text-white">
              Prestasi &amp; Inovasi Dunia
            </h2>
            <p className="text-base text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed">
              Bukti nyata komitmen riset dan daya saing mahasiswa UMS melalui medali emas, perak, dan perunggu di ajang kompetisi sains dan teknologi terkemuka dunia.
            </p>
          </div>

          {/* Year Filter Tabs */}
          <div className="flex items-center gap-2 self-start md:self-end rounded-2xl border-2 border-black bg-white p-1.5 shadow-[4px_4px_0px_0px_#000] dark:border-zinc-700 dark:bg-zinc-950">
            {yearTabs.map((y) => (
              <button
                key={y}
                type="button"
                onClick={() => setSelectedYear(y)}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-mono font-black transition-all ${
                  selectedYear === y
                    ? "border-2 border-black bg-amber-300 text-black shadow-[2px_2px_0px_0px_#000] dark:bg-amber-400"
                    : "text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
                }`}
              >
                {y === "ALL" ? "Semua Tahun" : y}
              </button>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((item) => (
            <AchievementCard key={item.id} achievement={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
