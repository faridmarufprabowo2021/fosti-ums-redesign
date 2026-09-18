"use client";

import React from "react";
import { Sparkles, ArrowUpRight, CheckCircle2, MessageCircle, Terminal } from "lucide-react";

export function OprecCTA() {
  const perks = [
    "Mentoring intensif pemrograman & Open Source",
    "Peluang delegasi kompetisi teknologi global",
    "Jejaring relasi alumni & software engineer",
    "Ruang eksplorasi karya tanpa batas",
  ];

  return (
    <section className="py-20 lg:py-28 border-t-2 border-black dark:border-zinc-800 bg-zinc-100 dark:bg-black" id="join">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border-4 border-black bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-500 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-950 p-8 sm:p-12 lg:p-16 shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#3f3f46]">
          {/* Top Stud Decorative Bar */}
          <div className="flex items-center gap-2 pb-6 border-b-2 border-black dark:border-zinc-700">
            <div className="flex items-center gap-1.5">
              <span className="h-3.5 w-3.5 rounded-full bg-red-600 border-2 border-black shadow-[1px_1px_0px_0px_#000]" />
              <span className="h-3.5 w-3.5 rounded-full bg-blue-600 border-2 border-black shadow-[1px_1px_0px_0px_#000]" />
              <span className="h-3.5 w-3.5 rounded-full bg-emerald-500 border-2 border-black shadow-[1px_1px_0px_0px_#000]" />
            </div>
            <span className="ml-2 font-mono font-black text-xs uppercase tracking-widest text-black dark:text-zinc-300">
              REKRUTMEN // OPEN RECRUITMENT ACTIVE
            </span>
          </div>

          <div className="relative z-10 max-w-3xl space-y-6 pt-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-lg border-2 border-black bg-red-600 px-3.5 py-1.5 text-xs font-mono font-black text-white shadow-[3px_3px_0px_0px_#000]">
              <Sparkles className="h-4 w-4" />
              <span>PENERIMAAN ANGGOTA BARU FOSTI UMS</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black dark:text-white leading-tight">
              Siap Menjadi Bagian Dari{" "}
              <span className="bg-red-600 text-white px-2 py-0.5 border-2 border-black shadow-[3px_3px_0px_0px_#000] inline-block -rotate-1">
                Revolusi Open Source?
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg leading-relaxed text-zinc-900 dark:text-zinc-200 font-medium">
              Jangan lewatkan kesempatan mengasah kemampuan rekayasa perangkat lunak, berkontribusi pada proyek dunia nyata, dan menorehkan prestasi membanggakan bersama Forum Open Source Teknik Informatika UMS.
            </p>

            {/* Perks List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {perks.map((perk) => (
                <div
                  key={perk}
                  className="flex items-center gap-2.5 rounded-lg border-2 border-black dark:border-zinc-700 bg-white/90 dark:bg-zinc-800/90 p-2.5 text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100 shadow-[2px_2px_0px_0px_#000]"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="https://oprec.fostiums.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl border-2 border-black bg-red-600 px-6 py-3.5 text-sm sm:text-base font-black text-white shadow-[4px_4px_0px_0px_#000] transition-all hover:bg-red-500 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none"
              >
                <span>DAFTAR MELALUI PORTAL OPREC</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="https://wa.me/+6282137276077"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-black bg-white dark:bg-zinc-800 px-5 py-3.5 text-sm sm:text-base font-black text-zinc-900 dark:text-zinc-100 shadow-[4px_4px_0px_0px_#000] transition-all hover:bg-zinc-100 dark:hover:bg-zinc-700 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none"
              >
                <MessageCircle className="h-4 w-4 text-emerald-600" />
                <span>KONSULTASI VIA WHATSAPP</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
