"use client";

import React, { useEffect, useState, useRef } from "react";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  characters?: string;
  className?: string;
  encryptedClassName?: string;
  animateOnHover?: boolean;
}

export function DecryptedText({
  text,
  speed = 40,
  maxIterations = 10,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?",
  className = "",
  encryptedClassName = "text-red-500 dark:text-yellow-400 font-mono",
  animateOnHover = false,
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startDecryption = () => {
    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }

      iteration += 1 / (maxIterations / text.length || 1);
    }, speed);
  };

  useEffect(() => {
    if (!animateOnHover) {
      startDecryption();
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, animateOnHover]);

  const handleMouseEnter = () => {
    if (animateOnHover) {
      setIsHovered(true);
      startDecryption();
    }
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
      className={className}
    >
      {displayText}
    </span>
  );
}
