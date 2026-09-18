"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { divisionsData } from "@/data/divisions";
import { getProgramsByDivision } from "@/data/programs";
import { getMembersByDivision } from "@/data/members";
import { MemberCard } from "@/components/MemberCard";
import { LanyardModal } from "@/components/3d/LanyardModal";
import { Member } from "@/types";
import {
  Code2,
  Cpu,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Users,
  Layers,
  Award,
  Terminal,
} from "lucide-react";

export default function RistekPage() {
  const division = divisionsData.find((d) => d.slug === "ristek")!;
  const programs = getProgramsByDivision("RISTEK");
  const members = getMembersByDivision("RISTEK");
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const pillarIcons = [Code2, Cpu, Sparkles];

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 text-zinc-900 selection:bg-blue-600 selection:text-white dark:bg-[#09090b] dark:text-zinc-100">
      <Navbar />

      <main className="flex-1">
        {/* 1. Breadcrumbs & Division Hero Banner */}
        <section className="relative overflow-hidden border-b-2 border-black dark:border-zinc-800 bg-white dark:bg-zinc-950 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-8 flex items-center gap-2 text-xs font-mono font-bold text-zinc-600 dark:text-zinc-400">
              <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
                HOME
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span>DIVISI</span>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-blue-600 dark:text-blue-400 font-black">RISTEK</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Info */}
              <div className="lg:col-span-8 space-y-6">
                {/* Stud Header Badge */}
                <div className="inline-flex items-center gap-2 rounded-lg border-2 border-black bg-blue-600 px-3.5 py-1.5 text-xs font-mono font-black text-white shadow-[3px_3px_0px_0px_#000]">
                  <div className="flex items-center gap-1">
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 border border-black" />
                    <span className="h-2.5 w-2.5 rounded-full bg-red-600 border border-black" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white border border-black" />
                  </div>
                  <span className="ml-1 tracking-wider uppercase">{division.code} // RESEARCH & TECH</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 dark:text-white leading-tight">
                  Divisi <span className="bg-blue-600 text-white px-3 py-1 border-2 border-black shadow-[4px_4px_0px_0px_#000] inline-block -rotate-1">Riset & Teknologi</span>
                </h1>

                <p className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400 font-mono">
                  &ldquo;{division.tagline}&rdquo;
                </p>

                <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed max-w-2xl">
                  {division.description}
                </p>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-3 gap-4 pt-2 max-w-lg">
                  <div className="rounded-xl border-2 border-black bg-yellow-300 dark:bg-yellow-400 text-black p-4 shadow-[3px_3px_0px_0px_#000]">
                    <span className="block font-mono text-2xl sm:text-3xl font-black">{members.length}</span>
                    <span className="font-mono text-xs font-bold uppercase">Talenta Riset</span>
                  </div>
                  <div className="rounded-xl border-2 border-black bg-blue-500 text-white p-4 shadow-[3px_3px_0px_0px_#000]">
                    <span className="block font-mono text-2xl sm:text-3xl font-black">{programs.length}</span>
                    <span className="font-mono text-xs font-bold uppercase">Program Kerja</span>
                  </div>
                  <div className="rounded-xl border-2 border-black bg-emerald-500 text-white p-4 shadow-[3px_3px_0px_0px_#000]">
                    <span className="block font-mono text-2xl sm:text-3xl font-black">100%</span>
                    <span className="font-mono text-xs font-bold uppercase">Open Source</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Coordinator Highlight Card */}
              <div className="lg:col-span-4">
                <div className="rounded-2xl border-4 border-black bg-white dark:bg-zinc-900 p-6 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#3f3f46] space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b-2 border-black dark:border-zinc-800">
                    <span className="font-mono text-xs font-black uppercase text-blue-600 dark:text-blue-400">
                      LEADERSHIP // KETUA BIDANG
                    </span>
                    <div className="flex gap-1">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-600 border border-black" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 border border-black" />
                    </div>
                  </div>

                  <div className="relative h-60 w-full rounded-xl border-2 border-black overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                    <Image
                      src="https://i.ibb.co.com/0VtBcxyL/DSC05703.png"
                      alt="Airlangga Pradana Prakusa"
                      fill
                      className="object-cover object-top"
                    />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-black text-zinc-900 dark:text-white">
                      Airlangga Pradana
                    </h3>
                    <p className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                      Ketua Bidang Riset & Teknologi 2025/2026
                    </p>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 pt-2 font-medium italic">
                      &ldquo;Kami memfasilitasi setiap anggota untuk tidak sekadar menjadi konsumen teknologi, melainkan kreator inovasi open-source yang mampu bersaing di panggung dunia.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Tiga Pilar Utama (Core Pillars) */}
        <section className="py-20 lg:py-24 bg-zinc-100 dark:bg-black border-b-2 border-black dark:border-zinc-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 rounded-lg border-2 border-black bg-yellow-400 px-3 py-1.5 text-xs font-mono font-black text-black shadow-[3px_3px_0px_0px_#000]">
                <Layers className="h-4 w-4" />
                <span className="uppercase">STRATEGIC PILLARS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
                Tiga Pilar Riset & Teknologi
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-medium">
                Pondasi strategis dalam mengakselerasi kompetensi rekayasa perangkat lunak mahasiswa.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {division.pillars.map((pillar, idx) => {
                const Icon = pillarIcons[idx] || Code2;
                return (
                  <div
                    key={pillar.title}
                    className="flex flex-col rounded-xl border-2 border-black dark:border-zinc-700 bg-white dark:bg-zinc-900 p-6 shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#27272a] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000] transition-all"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-black bg-blue-600 text-white shadow-[3px_3px_0px_0px_#000] mb-5">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">
                      PILAR 0{idx + 1}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-zinc-900 dark:text-white mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed flex-1">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. Program Kerja Divisi (Work Programs) */}
        <section className="py-20 lg:py-28 bg-white dark:bg-zinc-950 border-b-2 border-black dark:border-zinc-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 rounded-lg border-2 border-black bg-blue-500 px-3 py-1.5 text-xs font-mono font-black text-white shadow-[3px_3px_0px_0px_#000]">
                <Cpu className="h-4 w-4" />
                <span className="uppercase">AGENDA KERJA</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
                Program Kerja Unggulan
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-medium">
                Inisiatif nyata divisi Ristek yang dieksekusi secara terstruktur sepanjang periode kepengurusan.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((program) => (
                <div
                  key={program.id}
                  className="flex flex-col rounded-xl border-2 border-black dark:border-zinc-700 bg-white dark:bg-zinc-900 overflow-hidden shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#27272a] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000] transition-all"
                >
                  <div className="relative h-48 w-full border-b-2 border-black dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="rounded-md border border-black bg-yellow-400 px-2.5 py-0.5 text-[11px] font-mono font-black text-black shadow-[2px_2px_0px_0px_#000]">
                        {program.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-1 flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-black text-zinc-900 dark:text-white">
                        {program.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">
                        {program.description}
                      </p>
                    </div>

                    {program.highlights && program.highlights.length > 0 && (
                      <div className="space-y-2 pt-2 border-t-2 border-zinc-100 dark:border-zinc-800">
                        <span className="font-mono text-[11px] font-black uppercase tracking-wider text-zinc-500">
                          HIGHLIGHTS:
                        </span>
                        <div className="grid grid-cols-2 gap-1.5">
                          {program.highlights.map((item) => (
                            <div key={item} className="flex items-center gap-1.5 text-[11px] font-bold text-zinc-700 dark:text-zinc-300">
                              <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 flex-shrink-0" />
                              <span className="truncate">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Anggota Divisi & 3D Lanyard Modal Trigger */}
        <section className="py-20 lg:py-28 bg-zinc-50 dark:bg-zinc-900 border-b-2 border-black dark:border-zinc-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl space-y-3">
                <div className="inline-flex items-center gap-2 rounded-lg border-2 border-black bg-blue-600 px-3 py-1.5 text-xs font-mono font-black text-white shadow-[3px_3px_0px_0px_#000]">
                  <Users className="h-4 w-4" />
                  <span className="uppercase">ENGINEERING TEAM</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
                  Talenta Divisi Riset & Teknologi
                </h2>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-medium">
                  Para mahasiswa pengembang yang aktif berkontribusi dalam riset dan inovasi perangkat lunak open-source.
                </p>
              </div>

              <div className="text-xs font-mono font-bold text-zinc-500 dark:text-zinc-400 border-2 border-black dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3.5 py-2 rounded-lg shadow-[2px_2px_0px_0px_#000]">
                <span>Total: {members.length} Developer</span>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {members.map((member) => (
                <MemberCard
                  key={member.id}
                  member={member}
                  onOpenLanyard={(m) => setSelectedMember(m)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 5. Navigasi Divisi Lainnya */}
        <section className="py-16 bg-white dark:bg-zinc-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border-4 border-black bg-yellow-400 p-8 sm:p-12 shadow-[6px_6px_0px_0px_#000] text-black">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2 text-center md:text-left">
                  <h3 className="text-2xl sm:text-3xl font-black">
                    Jelajahi Divisi FOSTI Lainnya
                  </h3>
                  <p className="text-sm font-medium text-black/80">
                    Pelajari bagaimana divisi Keorganisasian dan Hubungan Publik bersinergi dengan Ristek.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/divisi/keor"
                    className="inline-flex items-center gap-2 rounded-xl border-2 border-black bg-red-600 px-5 py-3 text-sm font-black text-white shadow-[3px_3px_0px_0px_#000] hover:bg-red-500 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_#000] transition-all"
                  >
                    <span>Divisi Keorganisasian</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/divisi/hubpub"
                    className="inline-flex items-center gap-2 rounded-xl border-2 border-black bg-white px-5 py-3 text-sm font-black text-black shadow-[3px_3px_0px_0px_#000] hover:bg-zinc-100 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_#000] transition-all"
                  >
                    <span>Divisi Hubungan Publik</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* 3D Rapier Lanyard Card Modal */}
      {selectedMember && (
        <LanyardModal
          member={selectedMember}
          isOpen={Boolean(selectedMember)}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </div>
  );
}
