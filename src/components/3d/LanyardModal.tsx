"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Member } from "@/types";
import { X, Sparkles, Move3d, RotateCcw, ShieldCheck } from "lucide-react";

// Dynamically import 3D canvas with ssr: false
const InteractiveLanyardCard = dynamic(
  () => import("./InteractiveLanyardCard").then((mod) => mod.InteractiveLanyardCard),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-zinc-950/80 rounded-2xl">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-red-500 border-t-transparent" />
        <span className="text-xs font-mono text-zinc-400 tracking-wider animate-pulse">
          MEMUAT FISIKA 3D LANYARD...
        </span>
      </div>
    ),
  }
);

interface LanyardModalProps {
  member: Member | null;
  isOpen: boolean;
  onClose: () => void;
}

export function LanyardModal({ member, isOpen, onClose }: LanyardModalProps) {
  if (!isOpen || !member) return null;

  const isRistek = member.division.toUpperCase().includes("RISTEK") || member.division.toUpperCase().includes("RISET");
  const isKeor = member.division.toUpperCase().includes("KEOR");
  const isHubpub = member.division.toUpperCase().includes("HUB") || member.division.toUpperCase().includes("PUB");

  const shadowClass = isRistek
    ? "shadow-[8px_8px_0px_0px_rgba(0,85,164,1)] border-[#0055A4]"
    : isKeor
    ? "shadow-[8px_8px_0px_0px_rgba(175,16,26,1)] border-[#AF101A]"
    : isHubpub
    ? "shadow-[8px_8px_0px_0px_rgba(234,179,8,1)] border-[#EAB308]"
    : "shadow-[8px_8px_0px_0px_rgba(239,68,68,1)] border-red-500";

  const badgeColor = isRistek
    ? "bg-blue-600/20 text-blue-400 border-blue-500/40"
    : isKeor
    ? "bg-red-600/20 text-red-400 border-red-500/40"
    : isHubpub
    ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
    : "bg-red-500/20 text-red-300 border-red-500/40";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md transition-all">
      <div
        className={`relative w-full max-w-2xl h-[720px] max-h-[92vh] bg-zinc-950 text-white rounded-2xl border-3 ${shadowClass} flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200`}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b-2 border-zinc-800 bg-zinc-900/90 select-none">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1">
              <span className="h-2.5 w-2.5 rounded-full bg-[#AF101A]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFD700]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#0055A4]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#00852B]" />
            </div>
            <div className="h-4 w-px bg-zinc-700 mx-1" />
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-zinc-200">
              <Move3d className="h-4 w-4 text-amber-400" />
              <span>FOSTI 3D LANYARD BADGE</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border uppercase hidden sm:inline-block ${badgeColor}`}>
              {member.division}
            </span>
            <button
              onClick={onClose}
              aria-label="Tutup modal"
              className="rounded-lg p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors border border-transparent hover:border-zinc-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* 3D Canvas Area */}
        <div className="relative flex-1 w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black overflow-hidden">
          <InteractiveLanyardCard member={member} />

          {/* Interactive Hint Overlay */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none px-4 py-2 rounded-xl border border-zinc-700/80 bg-black/85 backdrop-blur-md shadow-lg text-center flex items-center gap-2 select-none">
            <Sparkles className="h-4 w-4 text-amber-400 animate-pulse shrink-0" />
            <span className="text-[11px] font-mono text-zinc-300">
              Tarik &amp; ayunkan kartu ID dengan kursor! Ayunkan cepat untuk melihat bagian belakang!
            </span>
          </div>
        </div>

        {/* Modal Footer Info */}
        <div className="px-5 py-3 border-t border-zinc-800 bg-zinc-900/80 flex items-center justify-between text-xs text-zinc-300 font-mono select-none">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span className="font-bold text-white tracking-wide">{member.name}</span>
            <span className="text-zinc-500">•</span>
            <span className="text-zinc-400">{member.role}</span>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-zinc-500">
            <span>ID: 2026-FST-{member.id.replace("m-", "").padStart(3, "0")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LanyardModal;
