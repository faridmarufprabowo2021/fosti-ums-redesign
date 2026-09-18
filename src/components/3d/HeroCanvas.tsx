"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface LegoBrickProps {
  position: [number, number, number];
  color: string;
  speed: number;
  rotationSpeed: number;
}

function FloatingLegoBrick({ position, color, speed, rotationSpeed }: LegoBrickProps) {
  const meshRef = useRef<THREE.Group>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.position.y = initialY + Math.sin(t * speed) * 0.25;
    meshRef.current.rotation.x += 0.003 * rotationSpeed;
    meshRef.current.rotation.y += 0.005 * rotationSpeed;
    meshRef.current.rotation.z += 0.002 * rotationSpeed;
  });

  return (
    <group ref={meshRef} position={position}>
      {/* Brick Base */}
      <mesh castShadow>
        <boxGeometry args={[0.9, 0.45, 0.55]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.2} />
      </mesh>
      {/* 2 Top Studs */}
      <mesh position={[-0.22, 0.28, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.12, 16]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.2} />
      </mesh>
      <mesh position={[0.22, 0.28, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.12, 16]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.2} />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight position={[4, 6, 4]} intensity={2.2} />
      <directionalLight position={[-4, -3, -2]} intensity={0.9} color="#0055A4" />

      {/* Floating Lego bricks in primary Lego colors */}
      <FloatingLegoBrick position={[-2.8, 1.2, -1.5]} color="#AF101A" speed={0.9} rotationSpeed={1.2} />
      <FloatingLegoBrick position={[2.6, -0.8, -1.2]} color="#0055A4" speed={1.1} rotationSpeed={0.9} />
      <FloatingLegoBrick position={[-2.2, -1.5, -0.8]} color="#FFD700" speed={0.8} rotationSpeed={1.4} />
      <FloatingLegoBrick position={[2.9, 1.4, -2]} color="#00852B" speed={1.0} rotationSpeed={1.1} />
      <FloatingLegoBrick position={[0.4, 2.2, -2.5]} color="#AF101A" speed={0.7} rotationSpeed={0.8} />
    </>
  );
}

export function HeroCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-0 opacity-60 dark:opacity-40 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
