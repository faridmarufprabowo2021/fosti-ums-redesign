"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

interface TiltedCardProps {
  children: React.ReactNode;
  className?: string;
  rotateAmplitude?: number;
  scaleOnHover?: number;
  showGlare?: boolean;
}

export function TiltedCard({
  children,
  className = "",
  rotateAmplitude = 12,
  scaleOnHover = 1.03,
  showGlare = true,
}: TiltedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position normalized from -0.5 to 0.5
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for rotation
  const springConfig = { damping: 20, stiffness: 260, mass: 0.6 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Transform mouse offsets to 3D rotation angles
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [rotateAmplitude, -rotateAmplitude]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-rotateAmplitude, rotateAmplitude]);

  // Glare position
  const glareX = useTransform(smoothMouseX, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(smoothMouseY, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="perspective-1000 w-full"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          scale: isHovered ? scaleOnHover : 1,
        }}
        transition={{
          scale: { duration: 0.2, ease: "easeOut" },
        }}
        className={`relative ${className}`}
      >
        {children}

        {/* Specular Glare Reflection */}
        {showGlare && isHovered && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-30 rounded-[inherit] mix-blend-overlay transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255, 255, 255, 0.35) 0%, transparent 65%)`,
            }}
          />
        )}
      </motion.div>
    </div>
  );
}
