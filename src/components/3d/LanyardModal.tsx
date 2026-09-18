"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Member } from "@/types";
import { X, Sparkles, Move3d } from "lucide-react";

// Dynamically import 3D canvas with ssr: false
const InteractiveLanyardCard = dynamic(
  () => import("./InteractiveLanyardCard").then((mod) => mod.InteractiveLanyardCard),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center bg-zinc-950/80 rounded-2xl">
        <span className="text-xs font-mono text-zinc-400 animate-pulse">
          MEMUAT 3D SIMULASI...
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md transition-opacity">
      <div className="relative w-full max-w-xl h-[680px] bg-zinc-950 text-white rounded-2xl border-3 border-black dark:border-zinc-700 shadow-[8px_8px_0px_0px_rgba(255,68,68,1)] flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b-2 border-zinc-800 bg-zinc-900/90">
          <div className="flex items-center gap-2">
            <span className="flex h-3 w-3 rounded-full bg-red-500 animate-ping" />
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-zinc-300">
              <Move3d className="h-4 w-4 text-amber-400" />
              <span>3D INTERACTIVE LANYARD CARD // FOSTI UMS</span>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup modal"
            className="rounded-lg p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* 3D Canvas Area */}
        <div className="relative flex-1 w-full bg-gradient-to-b from-zinc-900/50 via-zinc-950 to-black overflow-hidden">
          <InteractiveLanyardCard member={member} />

          {/* Interactive Hint Overlay */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none px-4 py-2 rounded-xl border border-zinc-700 bg-black/80 backdrop-blur-md shadow-md text-center">
            <p className="text-[11px] font-mono text-zinc-300 flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              <span>Tarik &amp; ayunkan kartu ID dengan kursor!</span>
            </p>
          </div>
        </div>

        {/* Modal Footer Info */}
        <div className="px-5 py-3 border-t border-zinc-800 bg-zinc-900/60 flex items-center justify-between text-xs text-zinc-400 font-mono">
          <span>{member.name}</span>
          <span className="text-red-400 font-bold">{member.role}</span>
        </div>
      </div>
    </div>
  );
}
