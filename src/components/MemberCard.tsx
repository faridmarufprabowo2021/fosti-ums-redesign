"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Member } from "@/types";
import { User, Move3d } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { TiltedCard } from "@/components/react-bits/TiltedCard";
import { SpotlightCard } from "@/components/react-bits/SpotlightCard";

interface MemberCardProps {
  member: Member;
  onOpenLanyard?: (member: Member) => void;
}

export function MemberCard({ member, onOpenLanyard }: MemberCardProps) {
  const [imageError, setImageError] = useState(false);

  const getDivisionColor = (division: Member["division"]) => {
    switch (division) {
      case "BPHI":
        return "bg-red-600 text-white";
      case "RISTEK":
        return "bg-blue-600 text-white";
      case "KEORGANISASIAN":
        return "bg-emerald-600 text-white";
      case "HUBUNGAN PUBLIK":
        return "bg-yellow-400 text-black";
      default:
        return "bg-zinc-800 text-white";
    }
  };

  const getSpotlightColor = (division: Member["division"]) => {
    switch (division) {
      case "BPHI":
        return "rgba(220, 38, 38, 0.18)";
      case "RISTEK":
        return "rgba(37, 99, 235, 0.18)";
      case "KEORGANISASIAN":
        return "rgba(16, 185, 129, 0.18)";
      case "HUBUNGAN PUBLIK":
        return "rgba(234, 179, 8, 0.25)";
      default:
        return "rgba(255, 255, 255, 0.15)";
    }
  };

  return (
    <TiltedCard
      rotateAmplitude={10}
      scaleOnHover={1.03}
      showGlare={true}
      className="h-full"
    >
      <SpotlightCard
        spotlightColor={getSpotlightColor(member.division)}
        spotlightSize={280}
        className="group relative flex h-full flex-col justify-between rounded-2xl border-2 border-black bg-white p-4 shadow-[4px_4px_0px_0px_#000] transition-shadow duration-200 hover:shadow-[6px_6px_0px_0px_#000] dark:border-zinc-700 dark:bg-zinc-900 dark:shadow-[4px_4px_0px_0px_#27272a]"
      >
        <div className="flex items-start gap-3.5">
          {/* Member Photo Frame */}
          <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl border-2 border-black bg-zinc-100 shadow-[2px_2px_0px_0px_#000] dark:border-zinc-700 dark:bg-zinc-800">
            {!imageError && member.photoUrl ? (
              <Image
                src={member.photoUrl}
                alt={member.name}
                fill
                className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                sizes="64px"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-zinc-400">
                <User className="h-7 w-7" />
              </div>
            )}
          </div>

          {/* Member Info */}
          <div className="min-w-0 flex-1 space-y-1">
            <div className="flex items-center justify-between gap-1">
              <span
                className={`rounded-md border border-black px-2 py-0.5 text-[9px] font-mono font-black uppercase shadow-[1px_1px_0px_0px_#000] ${getDivisionColor(
                  member.division
                )}`}
              >
                {member.division}
              </span>
              {member.linkedin ? (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn ${member.name}`}
                  className="text-zinc-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-1"
                >
                  <FaLinkedin className="h-4 w-4" />
                </a>
              ) : null}
            </div>

            <h4 className="truncate text-sm font-black text-zinc-950 dark:text-zinc-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
              {member.name}
            </h4>
            <p className="truncate text-xs font-semibold text-zinc-600 dark:text-zinc-400">
              {member.role}
            </p>
          </div>
        </div>

        {/* 3D Lanyard Trigger Button */}
        {onOpenLanyard && (
          <div className="mt-3 pt-3 border-t-2 border-zinc-100 dark:border-zinc-800">
            <button
              type="button"
              onClick={() => onOpenLanyard(member)}
              className="w-full flex items-center justify-center gap-1.5 rounded-xl border-2 border-black bg-zinc-50 py-1.5 text-xs font-mono font-black text-black shadow-[2px_2px_0px_0px_#000] hover:bg-yellow-400 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:hover:bg-yellow-400 dark:hover:text-black"
            >
              <Move3d className="h-3.5 w-3.5 text-red-500" />
              <span>3D Physics Lanyard</span>
            </button>
          </div>
        )}
      </SpotlightCard>
    </TiltedCard>
  );
}
