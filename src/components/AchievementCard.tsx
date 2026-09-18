"use client";

import React from "react";
import { Achievement } from "@/types";
import { Trophy, Award, Medal, Star } from "lucide-react";
import { TiltedCard } from "@/components/react-bits/TiltedCard";
import { SpotlightCard } from "@/components/react-bits/SpotlightCard";

export function AchievementCard({ achievement }: { achievement: Achievement }) {
  const getMedalVisuals = (type: Achievement["medalType"]) => {
    switch (type) {
      case "gold":
        return {
          icon: Trophy,
          badgeBg: "bg-amber-300 text-black border-2 border-black",
          textColor: "text-amber-500",
          spotlightColor: "rgba(245, 158, 11, 0.25)",
        };
      case "silver":
        return {
          icon: Medal,
          badgeBg: "bg-slate-200 text-black border-2 border-black dark:bg-slate-700 dark:text-white",
          textColor: "text-slate-400",
          spotlightColor: "rgba(148, 163, 184, 0.25)",
        };
      case "bronze":
        return {
          icon: Award,
          badgeBg: "bg-amber-600 text-white border-2 border-black",
          textColor: "text-amber-600",
          spotlightColor: "rgba(217, 119, 6, 0.25)",
        };
      case "top":
      default:
        return {
          icon: Star,
          badgeBg: "bg-red-600 text-white border-2 border-black",
          textColor: "text-red-500",
          spotlightColor: "rgba(239, 68, 68, 0.25)",
        };
    }
  };

  const visuals = getMedalVisuals(achievement.medalType);
  const Icon = visuals.icon;

  return (
    <TiltedCard rotateAmplitude={8} scaleOnHover={1.02} showGlare={true} className="h-full">
      <SpotlightCard
        spotlightColor={visuals.spotlightColor}
        spotlightSize={300}
        className="group relative flex h-full flex-col justify-between rounded-2xl border-2 border-black bg-white p-6 shadow-[4px_4px_0px_0px_#000] transition-shadow duration-200 hover:shadow-[6px_6px_0px_0px_#000] dark:border-zinc-700 dark:bg-zinc-900 dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)]"
      >
        <div className="space-y-3">
          {/* Top Badges */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${visuals.badgeBg} shadow-[1px_1px_0px_0px_#000]`}>
                <Icon className="h-4 w-4" />
              </div>
              <span className={`rounded-md px-2.5 py-0.5 text-xs font-black uppercase ${visuals.badgeBg} shadow-[1px_1px_0px_0px_#000]`}>
                {achievement.rank}
              </span>
            </div>
            <span className="rounded-md border border-black bg-zinc-100 px-2.5 py-0.5 text-xs font-mono font-black text-black dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
              {achievement.year}
            </span>
          </div>

          {/* Title */}
          <h4 className="text-base sm:text-lg font-black text-zinc-950 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors leading-snug">
            {achievement.title}
          </h4>

          {/* Description */}
          {achievement.description && (
            <p className="text-xs sm:text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 font-medium">
              {achievement.description}
            </p>
          )}
        </div>

        {/* Footer Info */}
        <div className="mt-5 pt-3 border-t-2 border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-600 dark:text-zinc-400">
          <span className="truncate font-bold">{achievement.organization}</span>
          <span className="font-semibold text-red-600 dark:text-red-400">{achievement.category}</span>
        </div>
      </SpotlightCard>
    </TiltedCard>
  );
}
