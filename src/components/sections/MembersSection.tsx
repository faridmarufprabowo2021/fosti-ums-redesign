"use client";

import React, { useState, useMemo } from "react";
import { membersData } from "@/data/members";
import { MemberCard } from "@/components/MemberCard";
import { Member } from "@/types";
import { LanyardModal } from "@/components/3d/LanyardModal";
import { Search, Users, Sparkles } from "lucide-react";

export function MembersSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDivision, setSelectedDivision] = useState<string>("ALL");
  const [activeLanyardMember, setActiveLanyardMember] = useState<Member | null>(null);

  const filterTabs = [
    { label: "Semua", val: "ALL" },
    { label: "BPHI", val: "BPHI" },
    { label: "Ristek", val: "RISTEK" },
    { label: "Keorganisasian", val: "KEORGANISASIAN" },
    { label: "Hubungan Publik", val: "HUBUNGAN PUBLIK" },
  ];

  const filteredMembers = useMemo(() => {
    return membersData.filter((member) => {
      const matchDivision =
        selectedDivision === "ALL" || member.division === selectedDivision;
      const matchSearch =
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.role.toLowerCase().includes(searchQuery.toLowerCase());
      return matchDivision && matchSearch;
    });
  }, [searchQuery, selectedDivision]);

  return (
    <section className="py-20 lg:py-28 border-b-2 border-black dark:border-zinc-800 bg-white dark:bg-zinc-950" id="members">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header & Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-md border border-black bg-amber-300 px-3 py-1 text-xs font-mono font-black text-black shadow-[2px_2px_0px_0px_#000]">
              <Users className="h-3.5 w-3.5" />
              <span>MEET OUR EXECUTIVES // DIRECTORY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-950 dark:text-white">
              Direktori Pengurus &amp; Tim
            </h2>
            <p className="text-base text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed">
              Bertemu dengan talenta-talenta muda penggerak organisasi, pengembang perangkat lunak, dan aktivis open-source FOSTI UMS periode 2025/2026. Klik tombol <strong>3D Physics Lanyard</strong> pada kartu untuk melihat simulasi kartu pengenal fisik interaktif!
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-600 dark:text-zinc-400">
            <Sparkles className="h-4 w-4 text-amber-500" />
            <span>
              Menampilkan {filteredMembers.length} dari {membersData.length} Pengurus
            </span>
          </div>
        </div>

        {/* Controls: Search & Division Filters */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Division Pill Buttons */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.val}
                type="button"
                onClick={() => setSelectedDivision(tab.val)}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-mono font-black transition-all ${
                  selectedDivision === tab.val
                    ? "border-2 border-black bg-amber-300 text-black shadow-[2px_2px_0px_0px_#000] dark:bg-amber-400"
                    : "border-2 border-black bg-white text-zinc-700 shadow-[2px_2px_0px_0px_#000] hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari nama atau jabatan..."
              className="w-full rounded-xl border-2 border-black bg-white pl-10 pr-4 py-2 text-xs sm:text-sm font-medium text-zinc-900 placeholder:text-zinc-500 shadow-[2px_2px_0px_0px_#000] focus:outline-none focus:ring-2 focus:ring-red-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
            />
          </div>
        </div>

        {/* Members Grid */}
        <div className="mt-8">
          {filteredMembers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredMembers.map((member) => (
                <MemberCard
                  key={member.id}
                  member={member}
                  onOpenLanyard={(m) => setActiveLanyardMember(m)}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border-2 border-dashed border-zinc-400 dark:border-zinc-800 p-12 text-center">
              <Users className="mx-auto h-8 w-8 text-zinc-400" />
              <p className="mt-3 text-sm font-bold text-zinc-700 dark:text-zinc-300">
                Tidak ada pengurus yang cocok dengan kata kunci &quot;{searchQuery}&quot;
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedDivision("ALL");
                }}
                className="mt-3 text-xs font-bold text-red-600 dark:text-red-400 hover:underline"
              >
                Reset pencarian dan filter
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 3D Physics Lanyard Modal Viewer */}
      <LanyardModal
        isOpen={Boolean(activeLanyardMember)}
        member={activeLanyardMember}
        onClose={() => setActiveLanyardMember(null)}
      />
    </section>
  );
}
