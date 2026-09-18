"use client";

import React, { useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
  RapierRigidBody,
} from "@react-three/rapier";
import * as THREE from "three";
import { Member } from "@/types";
import { generateLanyardTexture } from "./generateLanyardTexture";

interface LanyardCardSceneProps {
  member: Member;
}

// Procedural texture for the fabric lanyard strap
function createStrapTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    // Red/Dark base
    ctx.fillStyle = "#AF101A";
    ctx.fillRect(0, 0, 1024, 128);

    // Subtle edge borders
    ctx.strokeStyle = "#FFD700";
    ctx.lineWidth = 6;
    ctx.strokeRect(0, 0, 1024, 128);

    // Repeated text
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "900 42px monospace";
    ctx.textAlign = "center";
    ctx.fillText("★ FOSTI UMS ★ OPEN SOURCE ★ FKI UMS ★", 512, 78);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(3, 1);
  return texture;
}

function LanyardPhysicsBody({ member }: { member: Member }) {
  const fixedAnchorRef = useRef<RapierRigidBody>(null!);
  const link1Ref = useRef<RapierRigidBody>(null!);
  const link2Ref = useRef<RapierRigidBody>(null!);
  const link3Ref = useRef<RapierRigidBody>(null!);
  const cardRef = useRef<RapierRigidBody>(null!);

  const ribbonMeshRef = useRef<THREE.Mesh>(null!);
  const [dragged, setDragged] = useState<THREE.Vector3 | null>(null);
  const { viewport } = useThree();

  // Multi-segment rope joints for realistic ribbon flex
  useRopeJoint(fixedAnchorRef, link1Ref, [[0, 0, 0], [0, 0.3, 0], 0.6]);
  useRopeJoint(link1Ref, link2Ref, [[0, -0.3, 0], [0, 0.3, 0], 0.6]);
  useRopeJoint(link2Ref, link3Ref, [[0, -0.3, 0], [0, 0.3, 0], 0.6]);
  useSphericalJoint(link3Ref, cardRef, [[0, -0.3, 0], [0, 1.45, 0]]);

  // Generate dynamic canvas texture for the card
  const cardTexture = useMemo(() => {
    if (typeof window === "undefined") return null;
    const canvas = generateLanyardTexture(member);
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, [member]);

  // Generate fabric strap texture
  const strapTexture = useMemo(() => {
    if (typeof window === "undefined") return null;
    return createStrapTexture();
  }, []);

  // Update dynamic ribbon curve & card dragging every frame
  useFrame((state) => {
    // 1. Drag handling
    if (dragged && cardRef.current) {
      const vec = new THREE.Vector3(
        (state.pointer.x * viewport.width) / 2,
        (state.pointer.y * viewport.height) / 2,
        0
      );
      cardRef.current.setNextKinematicTranslation({
        x: vec.x,
        y: vec.y,
        z: 0,
      });
    }

    // 2. Dynamic ribbon strap mesh update
    if (
      ribbonMeshRef.current &&
      fixedAnchorRef.current &&
      link1Ref.current &&
      link2Ref.current &&
      link3Ref.current &&
      cardRef.current
    ) {
      const p0 = new THREE.Vector3(0, 3.2, 0);
      const t1 = link1Ref.current.translation();
      const p1 = new THREE.Vector3(t1.x, t1.y, t1.z);
      const t2 = link2Ref.current.translation();
      const p2 = new THREE.Vector3(t2.x, t2.y, t2.z);
      const t3 = link3Ref.current.translation();
      const p3 = new THREE.Vector3(t3.x, t3.y, t3.z);
      const tc = cardRef.current.translation();
      const pc = new THREE.Vector3(tc.x, tc.y + 1.4, tc.z);

      const curve = new THREE.CatmullRomCurve3([p0, p1, p2, p3, pc]);
      const newGeom = new THREE.TubeGeometry(curve, 32, 0.05, 8, false);
      ribbonMeshRef.current.geometry.dispose();
      ribbonMeshRef.current.geometry = newGeom;
    }
  });

  return (
    <>
      {/* 1. Dynamic Ribbon Strap Mesh */}
      <mesh ref={ribbonMeshRef}>
        <tubeGeometry
          args={[
            new THREE.CatmullRomCurve3([
              new THREE.Vector3(0, 3.2, 0),
              new THREE.Vector3(0, 2.5, 0),
              new THREE.Vector3(0, 1.8, 0),
              new THREE.Vector3(0, 1.1, 0),
              new THREE.Vector3(0, 0.4, 0),
            ]),
            32,
            0.05,
            8,
            false,
          ]}
        />
        {strapTexture ? (
          <meshStandardMaterial
            map={strapTexture}
            roughness={0.7}
            metalness={0.1}
          />
        ) : (
          <meshStandardMaterial color="#AF101A" roughness={0.7} />
        )}
      </mesh>

      {/* 2. Fixed Ceiling Top Anchor Hook */}
      <RigidBody ref={fixedAnchorRef} type="fixed" position={[0, 3.2, 0]}>
        <mesh>
          <cylinderGeometry args={[0.08, 0.08, 0.15, 16]} />
          <meshStandardMaterial color="#D4D4D8" roughness={0.2} metalness={0.9} />
        </mesh>
      </RigidBody>

      {/* 3. Rope Physics Link 1 */}
      <RigidBody
        ref={link1Ref}
        position={[0, 2.5, 0]}
        colliders="ball"
        linearDamping={1.6}
        angularDamping={1.6}
      >
        <mesh visible={false}>
          <sphereGeometry args={[0.05, 8, 8]} />
        </mesh>
      </RigidBody>

      {/* 4. Rope Physics Link 2 */}
      <RigidBody
        ref={link2Ref}
        position={[0, 1.8, 0]}
        colliders="ball"
        linearDamping={1.6}
        angularDamping={1.6}
      >
        <mesh visible={false}>
          <sphereGeometry args={[0.05, 8, 8]} />
        </mesh>
      </RigidBody>

      {/* 5. Rope Physics Link 3 */}
      <RigidBody
        ref={link3Ref}
        position={[0, 1.1, 0]}
        colliders="ball"
        linearDamping={1.6}
        angularDamping={1.6}
      >
        <mesh visible={false}>
          <sphereGeometry args={[0.05, 8, 8]} />
        </mesh>
      </RigidBody>

      {/* 6. The 3D ID Card & Metal Swivel Clip */}
      <RigidBody
        ref={cardRef}
        position={[0, 0.2, 0]}
        colliders="cuboid"
        linearDamping={1.1}
        angularDamping={1.1}
        type={dragged ? "kinematicPosition" : "dynamic"}
      >
        <group
          onPointerDown={(e) => {
            e.stopPropagation();
            setDragged(new THREE.Vector3());
          }}
          onPointerUp={() => setDragged(null)}
          onPointerLeave={() => setDragged(null)}
        >
          {/* Metal Swivel Clasp Hook */}
          <group position={[0, 1.5, 0]}>
            {/* Clasp Ring */}
            <mesh position={[0, 0.12, 0]}>
              <torusGeometry args={[0.09, 0.025, 12, 24]} />
              <meshStandardMaterial color="#E4E4E7" metalness={0.95} roughness={0.15} />
            </mesh>
            {/* Clasp Clamp Bar */}
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[0.35, 0.12, 0.08]} />
              <meshStandardMaterial color="#D4D4D8" metalness={0.9} roughness={0.2} />
            </mesh>
          </group>

          {/* Acrylic Transparent Outer Sleeve */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[1.9, 2.8, 0.06]} />
            <meshPhysicalMaterial
              color="#FFFFFF"
              transparent
              opacity={0.35}
              roughness={0.1}
              metalness={0.05}
              clearcoat={1}
              clearcoatRoughness={0.1}
            />
          </mesh>

          {/* Inner Custom ID Card Body */}
          <mesh castShadow receiveShadow position={[0, 0, 0]}>
            <boxGeometry args={[1.82, 2.72, 0.035]} />
            {cardTexture ? (
              <meshStandardMaterial
                map={cardTexture}
                roughness={0.35}
                metalness={0.15}
              />
            ) : (
              <meshStandardMaterial color="#18181B" roughness={0.4} />
            )}
          </mesh>
        </group>
      </RigidBody>
    </>
  );
}

export function InteractiveLanyardCard({ member }: LanyardCardSceneProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-zinc-950/80 rounded-2xl border-2 border-black dark:border-zinc-700">
        <span className="text-xs font-mono text-zinc-400 animate-pulse">
          MEMUAT 3D LANYARD SIMULATOR...
        </span>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full select-none cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0.8, 4.3], fov: 48 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={1.6} />
        <directionalLight position={[5, 8, 5]} intensity={2.2} castShadow />
        <directionalLight position={[-5, -4, -3]} intensity={1.2} color="#0055A4" />
        <directionalLight position={[0, 4, 3]} intensity={1.5} color="#FFD700" />
        <Physics gravity={[0, -9.81, 0]} timeStep={1 / 60}>
          <LanyardPhysicsBody member={member} />
        </Physics>
      </Canvas>
    </div>
  );
}
