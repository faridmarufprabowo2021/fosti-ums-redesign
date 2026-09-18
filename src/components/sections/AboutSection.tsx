"use client";

import React from "react";
import { Check, Shield, Cpu, Users } from "lucide-react";
import { TerminalWidget } from "@/components/TerminalWidget";

export function AboutSection() {
  const points = [
    {
      title: "Student-run, independent, and non-profit",
      desc: "Dikelola mandiri dan berintegritas oleh mahasiswa aktif Fakultas Komunikasi dan Informatika UMS untuk kepentingan kemajuan akademik dan teknologi bersama.",
      icon: Shield,
      color: "bg-red-500 text-white"
    },
    {
      title: "Focused on science and technology development",
      desc: "Menjadi wadah eksplorasi riset teknologi mutakhir, kecerdasan buatan, komputasi awan, dan perancangan prototipe perangkat lunak siap kompetisi.",
      icon: Cpu,
      color: "bg-blue-600 text-white"
    },
    {
      title: "Fostering open-source & collaborative culture",
      desc: "Mempromosikan etos perangkat lunak sumber terbuka (FOSS), kolaborasi tim melalui Git/GitHub, dan transfer pengetahuan lintas angkatan yang berkelanjutan.",
      icon: Users,
      color: "bg-amber-400 text-black"
    }
  ];

  return (
    <section className="py-20 lg:py-28 border-b-2 border-black dark:border-zinc-800 bg-white dark:bg-zinc-950" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Mission Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-950 dark:text-white leading-tight">
              <span className="inline-block -rotate-1 border-2 border-black bg-amber-300 px-3 py-1 text-black shadow-[3px_3px_0px_0px_#000] dark:bg-amber-400">
                Who We Are
              </span>{" "}
              &amp; What We Do
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 font-medium">
              FOSTI is an independent non-profit organization operated by the students of the Faculty of Communication and Informatics Universitas Muhammadiyah Surakarta that aims to cultivate students&apos; interests in the fields of science and technology.
            </p>

            <div className="space-y-4 pt-2">
              {points.map((p) => (
                <div
                  key={p.title}
                  className="flex items-start gap-4 p-4 rounded-xl border-2 border-black bg-zinc-50 shadow-[3px_3px_0px_0px_#000] hover:-translate-y-0.5 transition-all dark:border-zinc-700 dark:bg-zinc-900 dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.1)]"
                >
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border-2 border-black ${p.color} shadow-[2px_2px_0px_0px_#000]`}>
                    <Check className="h-5 w-5 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-zinc-950 dark:text-zinc-100">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Terminal Shell */}
          <div className="lg:col-span-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Interactive Open Source Console
                </span>
              </div>
              <TerminalWidget />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
