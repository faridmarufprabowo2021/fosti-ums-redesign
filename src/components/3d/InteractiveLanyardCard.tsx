"use client";

import React, { useEffect, useState, useMemo } from "react";
import { Member } from "@/types";
import Lanyard from "@/components/react-bits/Lanyard";
import {
  generateFostiCardTexturesAsync,
  generateFostiFrontCanvas,
  generateFostiBackCanvas,
  generateFostiLanyardStrapCanvas,
} from "./generateLanyardTexture";

interface InteractiveLanyardCardProps {
  member: Member;
  className?: string;
}

export function InteractiveLanyardCard({
  member,
  className = "relative w-full h-full flex justify-center items-center",
}: InteractiveLanyardCardProps) {
  // Synchronous immediate textures using initial placeholder avatar so there is zero delay
  const initialTextures = useMemo(() => {
    if (typeof window === "undefined") {
      return { front: null, back: null, lanyard: null };
    }
    const front = generateFostiFrontCanvas(member, null).toDataURL("image/png");
    const back = generateFostiBackCanvas(member).toDataURL("image/png");
    const lanyard = generateFostiLanyardStrapCanvas().toDataURL("image/png");
    return { front, back, lanyard };
  }, [member]);

  const [textures, setTextures] = useState<{
    front: string | null;
    back: string | null;
    lanyard: string | null;
  }>(initialTextures);

  // Asynchronously load the real member photo if available and re-composite
  useEffect(() => {
    let active = true;
    setTextures(initialTextures);

    if (member.photoUrl) {
      generateFostiCardTexturesAsync(member).then((res) => {
        if (active) {
          setTextures(res);
        }
      });
    }

    return () => {
      active = false;
    };
  }, [member, initialTextures]);

  return (
    <div className={className}>
      <Lanyard
        position={[0, 0, 24]}
        gravity={[0, -40, 0]}
        fov={22}
        transparent={true}
        frontImage={textures.front}
        backImage={textures.back}
        lanyardImage={textures.lanyard}
        lanyardWidth={1.2}
        imageFit="cover"
        className="w-full h-full flex justify-center items-center"
      />
    </div>
  );
}

export default InteractiveLanyardCard;
