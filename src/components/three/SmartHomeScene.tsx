"use client";

import { Suspense, useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Environment,
  ContactShadows,
  OrbitControls,
  Html,
  Edges,
} from "@react-three/drei";
import * as THREE from "three";

// ─── Animated smart home house model (procedural) ─────────────────────

function HouseModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.15) * 0.1 - 0.3;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Base / Floor */}
      <mesh position={[0, 0, 0]} receiveShadow>
        <boxGeometry args={[3.2, 0.1, 2.4]} />
        <meshStandardMaterial color="#1e3050" metalness={0.3} roughness={0.7} />
        <Edges threshold={15} color="#3b5a8a" />
      </mesh>

      {/* Main walls — blue-steel glass look */}
      {/* Back wall */}
      <mesh position={[0, 0.8, -1.15]} castShadow>
        <boxGeometry args={[3.2, 1.5, 0.05]} />
        <meshStandardMaterial
          color="#1a2d4a"
          transparent
          opacity={0.65}
          metalness={0.2}
          roughness={0.6}
        />
        <Edges threshold={15} color="#3b5a8a" />
      </mesh>

      {/* Left wall */}
      <mesh position={[-1.575, 0.8, 0]} castShadow>
        <boxGeometry args={[0.05, 1.5, 2.3]} />
        <meshStandardMaterial
          color="#1a2d4a"
          transparent
          opacity={0.45}
          metalness={0.2}
          roughness={0.6}
        />
        <Edges threshold={15} color="#3b5a8a" />
      </mesh>

      {/* Right wall (partial — window) */}
      <mesh position={[1.575, 0.8, -0.7]} castShadow>
        <boxGeometry args={[0.05, 1.5, 0.9]} />
        <meshStandardMaterial
          color="#1a2d4a"
          transparent
          opacity={0.45}
          metalness={0.2}
          roughness={0.6}
        />
        <Edges threshold={15} color="#3b5a8a" />
      </mesh>
      <mesh position={[1.575, 0.8, 0.7]} castShadow>
        <boxGeometry args={[0.05, 1.5, 0.9]} />
        <meshStandardMaterial
          color="#1a2d4a"
          transparent
          opacity={0.45}
          metalness={0.2}
          roughness={0.6}
        />
        <Edges threshold={15} color="#3b5a8a" />
      </mesh>

      {/* Roof */}
      <mesh position={[0, 1.6, 0]}>
        <boxGeometry args={[3.4, 0.08, 2.6]} />
        <meshStandardMaterial color="#1e3050" metalness={0.3} roughness={0.6} />
        <Edges threshold={15} color="#3b5a8a" />
      </mesh>

      {/* Interior divider wall */}
      <mesh position={[-0.3, 0.8, 0]}>
        <boxGeometry args={[0.04, 1.4, 0.8]} />
        <meshStandardMaterial color="#1e3050" transparent opacity={0.5} />
        <Edges threshold={15} color="#2a4a72" />
      </mesh>

      {/* ─── Furniture ──────────────────────── */}

      {/* Sofa — living room (right side) */}
      <group position={[0.8, 0.22, 0.5]}>
        <mesh>
          <boxGeometry args={[0.9, 0.2, 0.4]} />
          <meshStandardMaterial color="#2f4d72" metalness={0.1} roughness={0.8} />
          <Edges threshold={15} color="#3b5a8a" />
        </mesh>
        <mesh position={[0, 0.15, -0.15]}>
          <boxGeometry args={[0.9, 0.15, 0.1]} />
          <meshStandardMaterial color="#2f4d72" metalness={0.1} roughness={0.8} />
        </mesh>
      </group>

      {/* Coffee table */}
      <mesh position={[0.8, 0.13, 0]}>
        <boxGeometry args={[0.5, 0.06, 0.3]} />
        <meshStandardMaterial color="#2a4a72" metalness={0.2} roughness={0.6} />
        <Edges threshold={15} color="#3b5a8a" />
      </mesh>

      {/* TV screen on back wall */}
      <mesh position={[0.8, 1.0, -1.1]}>
        <boxGeometry args={[0.8, 0.45, 0.02]} />
        <meshStandardMaterial color="#080808" />
        <Edges threshold={15} color="#2a4a72" />
      </mesh>
      <TVScreen />

      {/* Bed — left room */}
      <group position={[-1.0, 0.2, 0]}>
        <mesh>
          <boxGeometry args={[0.8, 0.15, 1.0]} />
          <meshStandardMaterial color="#2a4a72" metalness={0.1} roughness={0.8} />
          <Edges threshold={15} color="#3b5a8a" />
        </mesh>
        {/* Pillow */}
        <mesh position={[0, 0.1, -0.35]}>
          <boxGeometry args={[0.3, 0.08, 0.2]} />
          <meshStandardMaterial color="#d4a843" />
        </mesh>
      </group>

      {/* ─── Smart devices ──────────────────── */}

      {/* Smart lights (ceiling) */}
      <SmartLight position={[0.8, 1.5, 0.2]} />
      <SmartLight position={[-1.0, 1.5, 0]} />
      <SmartLight position={[0.8, 1.5, -0.8]} />

      {/* Smart speaker */}
      <mesh position={[0.5, 0.18, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.1, 16]} />
        <meshStandardMaterial color="#d4a843" emissive="#d4a843" emissiveIntensity={0.3} />
      </mesh>

      {/* ─── Hotspot labels ──────────────────── */}
      <HotspotLabel position={[0.8, 1.8, 0.2]} label="Smart Lighting" />
      <HotspotLabel position={[0.8, 1.3, -1.1]} label="Home Theater" />
      <HotspotLabel position={[-1.0, 0.6, 0]} label="Bedroom Automation" />
      <HotspotLabel position={[0.5, 0.5, 0]} label="Voice Control" />
    </group>
  );
}

// ─── Smart light with glow effect ─────────────────────────────────────

function SmartLight({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.intensity =
        1.5 + Math.sin(state.clock.elapsedTime * 2 + position[0] * 5) * 0.5;
    }
  });

  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshStandardMaterial
          color="#d4a843"
          emissive="#d4a843"
          emissiveIntensity={2}
        />
      </mesh>
      <pointLight
        ref={ref}
        color="#d4a843"
        intensity={1.5}
        distance={2}
        decay={2}
      />
    </group>
  );
}

// ─── TV screen with animated glow ─────────────────────────────────────

function TVScreen() {
  const ref = useRef<THREE.MeshStandardMaterial>(null);

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.elapsedTime;
      const r = 0.1 + Math.sin(t * 0.5) * 0.05;
      const g = 0.15 + Math.sin(t * 0.7 + 1) * 0.05;
      const b = 0.3 + Math.sin(t * 0.3 + 2) * 0.1;
      ref.current.emissive.setRGB(r, g, b);
    }
  });

  return (
    <mesh position={[0.8, 1.0, -1.08]}>
      <boxGeometry args={[0.75, 0.42, 0.01]} />
      <meshStandardMaterial
        ref={ref}
        color="#111"
        emissive="#1a3060"
        emissiveIntensity={1.5}
      />
    </mesh>
  );
}

// ─── Interactive hotspot label ────────────────────────────────────────

function HotspotLabel({
  position,
  label,
}: {
  position: [number, number, number];
  label: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Float speed={3} rotationIntensity={0} floatIntensity={0.3}>
      <group position={position}>
        <mesh
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
        >
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial
            color={hovered ? "#d4a843" : "#3b82f6"}
            emissive={hovered ? "#d4a843" : "#3b82f6"}
            emissiveIntensity={hovered ? 3 : 1}
          />
        </mesh>
        {hovered && (
          <Html center distanceFactor={5} style={{ pointerEvents: "none" }}>
            <div className="bg-navy-900/90 border border-gold-500/30 rounded-lg px-3 py-1.5 text-xs text-white whitespace-nowrap backdrop-blur-sm">
              {label}
            </div>
          </Html>
        )}
      </group>
    </Float>
  );
}

// ─── Floating particles ───────────────────────────────────────────────

function Particles({ count = 50 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 1] = Math.random() * 3;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#d4a843"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

// ─── Loading fallback ─────────────────────────────────────────────────

function SceneLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-navy-900/80 rounded-2xl">
      <div className="text-center">
        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gold-500/20 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-gold-500 animate-pulse" />
        </div>
        <p className="text-navy-300 text-sm">Loading 3D Experience...</p>
      </div>
    </div>
  );
}

// ─── Main exported component ──────────────────────────────────────────

export default function SmartHomeScene({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`relative w-full h-full min-h-[400px] ${className}`}>
      <Suspense fallback={<SceneLoader />}>
        <Canvas
          shadows
          camera={{ position: [3, 2.5, 3.5], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={0.9}
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          {/* Blue-steel rim light from left */}
          <directionalLight
            position={[-4, 3, 2]}
            intensity={0.4}
            color="#3b5a8a"
          />
          {/* Warm fill from right */}
          <pointLight
            position={[3, 2, 0]}
            intensity={0.3}
            color="#d4a843"
            distance={8}
            decay={2}
          />

          {/* Scene */}
          <HouseModel />
          <Particles />

          {/* Ground shadow */}
          <ContactShadows
            position={[0, -0.55, 0]}
            opacity={0.4}
            scale={8}
            blur={2}
          />

          {/* Controls */}
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2.2}
            autoRotate
            autoRotateSpeed={0.5}
          />

          {/* Environment for reflections */}
          <Environment preset="night" />
        </Canvas>
      </Suspense>

      {/* Overlay gradient for blending */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-navy-950 to-transparent pointer-events-none" />
    </div>
  );
}
