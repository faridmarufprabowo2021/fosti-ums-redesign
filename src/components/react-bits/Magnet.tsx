"use client";

import React, { useRef, useState } from "react";
import { motion } from "motion/react";

interface MagnetProps {
  children: React.ReactNode;
  className?: string;
  padding?: number;
  disabled?: boolean;
  magnetStrength?: number;
}

export function Magnet({
  children,
  className = "",
  padding = 40,
  disabled = false,
  magnetStrength = 0.3,
}: MagnetProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const magnetRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !magnetRef.current) return;
    const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distX = Math.abs(centerX - e.clientX);
    const distY = Math.abs(centerY - e.clientY);

    if (distX < width / 2 + padding && distY < height / 2 + padding) {
      setPosition({
        x: (e.clientX - centerX) * magnetStrength,
        y: (e.clientY - centerY) * magnetStrength,
      });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={magnetRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", damping: 15, stiffness: 200, mass: 0.1 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
