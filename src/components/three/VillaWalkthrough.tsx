"use client";

import { Suspense, useRef, useState, useCallback, useEffect, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import type { LucideIcon } from "lucide-react";
import {
  DoorOpen, Car, Lamp, Sofa, UtensilsCrossed, Tv,
  BedDouble, Palmtree, Moon, Play, Pause, SkipForward,
  ChevronRight, Volume2,
} from "lucide-react";

// ═══════════════════════════════════════════════════════════════════════
// ZONE DEFINITIONS — 8 zones of the villa walkthrough
// ═══════════════════════════════════════════════════════════════════════

type ZoneDef = {
  id: string;
  name: string;
  subtitle: string;
  icon: LucideIcon;
  cameraPos: [number, number, number];
  cameraTarget: [number, number, number];
  lightColor: string;
  lightIntensity: number;
  ambientColor: string;
  ambientIntensity: number;
  automationEvents: string[];
};

const ZONES: ZoneDef[] = [
  {
    id: "gate",
    name: "Entry Gate",
    subtitle: "Car detected — gate opens automatically",
    icon: DoorOpen,
    cameraPos: [0, 3, 12],
    cameraTarget: [0, 1, 0],
    lightColor: "#fbbf24",
    lightIntensity: 2,
    ambientColor: "#1e1b4b",
    ambientIntensity: 0.15,
    automationEvents: [
      "Vehicle sensor detects your car",
      "Gate swings open automatically",
      "Driveway pathway lights illuminate",
      "Security camera tracks movement",
    ],
  },
  {
    id: "garage",
    name: "Car Garage",
    subtitle: "Shutter rolls up — garage lights flood on",
    icon: Car,
    cameraPos: [0, 2.5, 10],
    cameraTarget: [0, 1, -2],
    lightColor: "#f5f5f5",
    lightIntensity: 3,
    ambientColor: "#1e293b",
    ambientIntensity: 0.2,
    automationEvents: [
      "Garage shutter rolls up",
      "Interior lights switch ON",
      "Shutter auto-closes after 2 min",
      "EV charger activates if connected",
    ],
  },
  {
    id: "foyer",
    name: "Foyer",
    subtitle: "Welcome scene activates — AC pre-cooled",
    icon: Lamp,
    cameraPos: [0, 3, 8],
    cameraTarget: [0, 1.5, -1],
    lightColor: "#d4a843",
    lightIntensity: 2.5,
    ambientColor: "#292524",
    ambientIntensity: 0.25,
    automationEvents: [
      "Motion sensor triggers welcome scene",
      "Warm chandelier lighting fades on",
      "AC already pre-cooled to 24°C",
      "Background music starts softly",
    ],
  },
  {
    id: "living",
    name: "Living Room",
    subtitle: "Ambient lighting — curtains adjust — music plays",
    icon: Sofa,
    cameraPos: [-2, 3, 9],
    cameraTarget: [1, 1, -1],
    lightColor: "#d4a843",
    lightIntensity: 2,
    ambientColor: "#1c1917",
    ambientIntensity: 0.3,
    automationEvents: [
      "3-layer lighting: ambient + accent + task",
      "Motorized curtains adjust to sun position",
      "Multi-room Sonos audio plays your playlist",
      "Scene: \"Welcome Home\" activates",
    ],
  },
  {
    id: "kitchen",
    name: "Kitchen",
    subtitle: "Task lighting on — exhaust starts — gas sensor armed",
    icon: UtensilsCrossed,
    cameraPos: [2, 3, 8],
    cameraTarget: [-1, 1.5, -1],
    lightColor: "#fef3c7",
    lightIntensity: 3.5,
    ambientColor: "#1c1917",
    ambientIntensity: 0.3,
    automationEvents: [
      "Bright task lighting over counters",
      "Exhaust chimney auto-starts on heat",
      "Gas leak sensor continuously monitoring",
      "Under-cabinet LED strips illuminate",
    ],
  },
  {
    id: "theater",
    name: "Home Theater",
    subtitle: "One touch — lights dim, screen descends, Atmos ON",
    icon: Tv,
    cameraPos: [0, 2.5, 9],
    cameraTarget: [0, 1.5, -2],
    lightColor: "#3b82f6",
    lightIntensity: 0.3,
    ambientColor: "#0f172a",
    ambientIntensity: 0.05,
    automationEvents: [
      "\"Watch\" scene: lights dim to 5%",
      "Motorized screen descends from ceiling",
      "Dolby Atmos 7.1.4 surround powers on",
      "AC cools to 21°C for comfort",
    ],
  },
  {
    id: "bedroom",
    name: "Master Bedroom",
    subtitle: "Circadian lighting — blinds close — AC to sleep mode",
    icon: BedDouble,
    cameraPos: [-1, 3, 9],
    cameraTarget: [1, 1, -1],
    lightColor: "#fbbf24",
    lightIntensity: 1,
    ambientColor: "#1c1917",
    ambientIntensity: 0.15,
    automationEvents: [
      "Warm 2700K circadian lighting",
      "Motorized blinds close gradually",
      "AC sets to 23°C sleep profile",
      "Pathway night lights activate at floor",
    ],
  },
  {
    id: "terrace",
    name: "Terrace & Pool",
    subtitle: "Landscape glows — pool lights — outdoor speakers",
    icon: Palmtree,
    cameraPos: [0, 4, 11],
    cameraTarget: [0, 0.5, -2],
    lightColor: "#06b6d4",
    lightIntensity: 1.5,
    ambientColor: "#0c0a09",
    ambientIntensity: 0.1,
    automationEvents: [
      "Garden uplights glow amber",
      "Pool underwater LEDs cycle colors",
      "Outdoor Sonos speakers play ambient",
      "Astronomical clock triggers at sunset",
    ],
  },
];

// ═══════════════════════════════════════════════════════════════════════
// SMOOTH LERP HOOK
// ═══════════════════════════════════════════════════════════════════════

function useLerp(target: number, speed = 2) {
  const ref = useRef(target);
  useFrame((_, delta) => {
    ref.current = THREE.MathUtils.lerp(ref.current, target, Math.min(delta * speed, 1));
  });
  return ref;
}

// ═══════════════════════════════════════════════════════════════════════
// CAMERA CONTROLLER — smooth dolly between zone camera positions
// ═══════════════════════════════════════════════════════════════════════

function CameraController({ zone }: { zone: ZoneDef }) {
  const { camera } = useThree();
  const targetPos = useRef(new THREE.Vector3(...zone.cameraPos));
  const targetLook = useRef(new THREE.Vector3(...zone.cameraTarget));
  const currentLook = useRef(new THREE.Vector3(...zone.cameraTarget));

  useEffect(() => {
    targetPos.current.set(...zone.cameraPos);
    targetLook.current.set(...zone.cameraTarget);
  }, [zone]);

  useFrame((_, delta) => {
    const speed = Math.min(delta * 1.8, 0.15);
    camera.position.lerp(targetPos.current, speed);
    currentLook.current.lerp(targetLook.current, speed);
    camera.lookAt(currentLook.current);
  });

  return null;
}

// ═══════════════════════════════════════════════════════════════════════
// SCENE ELEMENTS — procedural geometry for each zone
// ═══════════════════════════════════════════════════════════════════════

// ─── Ground plane ────────────────────────────────────────────────────

function Ground({ color }: { color: string }) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial color={color} roughness={0.9} />
    </mesh>
  );
}

// ─── Gate zone ───────────────────────────────────────────────────────

function GateScene({ progress }: { progress: number }) {
  const gateAngle = useLerp(progress > 0.3 ? Math.PI / 2 : 0, 1.5);
  const leftPillarRef = useRef<THREE.Group>(null);
  const rightPillarRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (leftPillarRef.current) leftPillarRef.current.rotation.y = gateAngle.current;
    if (rightPillarRef.current) rightPillarRef.current.rotation.y = -gateAngle.current;
  });

  return (
    <group>
      <Ground color="#1a1a2e" />
      {/* Pillars */}
      {[-3, 3].map((x) => (
        <mesh key={x} position={[x, 1.5, 0]} castShadow>
          <boxGeometry args={[0.6, 3, 0.6]} />
          <meshStandardMaterial color="#44403c" roughness={0.7} />
        </mesh>
      ))}
      {/* Gate panels — animated swing */}
      <group ref={leftPillarRef} position={[-2.7, 0, 0]}>
        <mesh position={[-1.1, 1.2, 0]} castShadow>
          <boxGeometry args={[2, 2.4, 0.08]} />
          <meshStandardMaterial color="#292524" metalness={0.8} roughness={0.3} />
        </mesh>
      </group>
      <group ref={rightPillarRef} position={[2.7, 0, 0]}>
        <mesh position={[1.1, 1.2, 0]} castShadow>
          <boxGeometry args={[2, 2.4, 0.08]} />
          <meshStandardMaterial color="#292524" metalness={0.8} roughness={0.3} />
        </mesh>
      </group>
      {/* Driveway */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, -5]}>
        <planeGeometry args={[4, 12]} />
        <meshStandardMaterial color="#374151" roughness={0.8} />
      </mesh>
      {/* Pathway lights */}
      {[-2, -4, -6, -8].map((z) =>
        [-1.5, 1.5].map((x) => (
          <group key={`${x}-${z}`} position={[x, 0, z]}>
            <mesh position={[0, 0.4, 0]}>
              <cylinderGeometry args={[0.05, 0.07, 0.8, 8]} />
              <meshStandardMaterial color="#44403c" />
            </mesh>
            <pointLight
              position={[0, 0.85, 0]}
              color="#fbbf24"
              intensity={progress > 0.5 ? 2 : 0}
              distance={3}
            />
            <mesh position={[0, 0.85, 0]}>
              <sphereGeometry args={[0.08, 8, 8]} />
              <meshStandardMaterial
                color="#fbbf24"
                emissive="#fbbf24"
                emissiveIntensity={progress > 0.5 ? 2 : 0}
              />
            </mesh>
          </group>
        ))
      )}
      {/* Wall sections */}
      {[-6, 6].map((x) => (
        <mesh key={`wall-${x}`} position={[x, 1, 0]} castShadow>
          <boxGeometry args={[3, 2, 0.3]} />
          <meshStandardMaterial color="#44403c" roughness={0.8} />
        </mesh>
      ))}
    </group>
  );
}

// ─── Garage zone ─────────────────────────────────────────────────────

function GarageScene({ progress }: { progress: number }) {
  const shutterY = useLerp(progress > 0.3 ? 2.8 : 0, 1.2);

  return (
    <group>
      <Ground color="#1f2937" />
      {/* Garage structure */}
      <mesh position={[0, 1.5, -3]} castShadow>
        <boxGeometry args={[8, 3, 0.2]} />
        <meshStandardMaterial color="#292524" />
      </mesh>
      <mesh position={[-4, 1.5, -1.5]}>
        <boxGeometry args={[0.2, 3, 3]} />
        <meshStandardMaterial color="#292524" />
      </mesh>
      <mesh position={[4, 1.5, -1.5]}>
        <boxGeometry args={[0.2, 3, 3]} />
        <meshStandardMaterial color="#292524" />
      </mesh>
      {/* Roof */}
      <mesh position={[0, 3, -1.5]}>
        <boxGeometry args={[8.4, 0.15, 3.4]} />
        <meshStandardMaterial color="#1c1917" />
      </mesh>
      {/* Shutter — animated roll up */}
      <ShutterMesh y={shutterY} />
      {/* Car silhouette */}
      <group position={[0, 0, -1.5]}>
        <mesh position={[0, 0.5, 0]} castShadow>
          <boxGeometry args={[2, 0.8, 4]} />
          <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[0, 1.1, -0.3]} castShadow>
          <boxGeometry args={[1.8, 0.7, 2.2]} />
          <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* Wheels */}
        {[[-0.9, -1.2], [-0.9, 1.2], [0.9, -1.2], [0.9, 1.2]].map(([x, z], i) => (
          <mesh key={i} position={[x, 0.2, z]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.22, 0.22, 0.15, 16]} />
            <meshStandardMaterial color="#111" />
          </mesh>
        ))}
      </group>
      {/* Ceiling lights */}
      {[-2, 0, 2].map((x) => (
        <group key={x}>
          <pointLight
            position={[x, 2.8, -1.5]}
            color="#f5f5f5"
            intensity={progress > 0.4 ? 4 : 0}
            distance={6}
          />
          <mesh position={[x, 2.9, -1.5]}>
            <boxGeometry args={[0.6, 0.05, 0.3]} />
            <meshStandardMaterial
              color="#fff"
              emissive="#fff"
              emissiveIntensity={progress > 0.4 ? 1.5 : 0}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function ShutterMesh({ y }: { y: React.RefObject<number> }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (ref.current && y.current !== undefined) {
      ref.current.position.y = y.current;
    }
  });
  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <boxGeometry args={[6, 2.8, 0.08]} />
      <meshStandardMaterial color="#57534e" metalness={0.6} roughness={0.4} />
    </mesh>
  );
}

// ─── Interior room — reusable for foyer, living, kitchen, bedroom ────

function InteriorRoom({
  progress,
  lightColor,
  lightIntensity,
  wallColor = "#292524",
  accentColor = "#d4a843",
  furnitureType = "sofa",
}: {
  progress: number;
  lightColor: string;
  lightIntensity: number;
  wallColor?: string;
  accentColor?: string;
  furnitureType?: "sofa" | "table" | "bed" | "kitchen" | "chandelier";
}) {
  const fadeIntensity = useLerp(progress > 0.2 ? lightIntensity : 0, 2);
  const curtainOpen = useLerp(progress > 0.4 ? 0.9 : 0, 1.5);

  return (
    <group>
      <Ground color="#1c1917" />
      {/* Back wall */}
      <mesh position={[0, 2, -4]} castShadow>
        <boxGeometry args={[10, 4, 0.15]} />
        <meshStandardMaterial color={wallColor} />
      </mesh>
      {/* Side walls */}
      <mesh position={[-5, 2, 0]}>
        <boxGeometry args={[0.15, 4, 8]} />
        <meshStandardMaterial color={wallColor} />
      </mesh>
      <mesh position={[5, 2, 0]}>
        <boxGeometry args={[0.15, 4, 8]} />
        <meshStandardMaterial color={wallColor} />
      </mesh>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <planeGeometry args={[10, 8]} />
        <meshStandardMaterial color="#44403c" roughness={0.6} />
      </mesh>
      {/* Ceiling */}
      <mesh position={[0, 4, 0]}>
        <boxGeometry args={[10.3, 0.1, 8.3]} />
        <meshStandardMaterial color="#1c1917" />
      </mesh>
      {/* Ceiling lights */}
      {[[-2, -1], [2, -1]].map(([x, z], i) => (
        <CeilingLight
          key={i}
          position={[x, 3.9, z]}
          color={lightColor}
          intensity={fadeIntensity}
        />
      ))}
      {/* Window with curtains */}
      <WindowWithCurtains openAmount={curtainOpen} />
      {/* Furniture based on type */}
      {furnitureType === "sofa" && <SofaFurniture accentColor={accentColor} />}
      {furnitureType === "bed" && <BedFurniture accentColor={accentColor} />}
      {furnitureType === "table" && <DiningTable accentColor={accentColor} />}
      {furnitureType === "kitchen" && <KitchenCounter />}
      {furnitureType === "chandelier" && <ChandelierFoyer color={accentColor} intensity={fadeIntensity} />}
    </group>
  );
}

function CeilingLight({
  position,
  color,
  intensity,
}: {
  position: [number, number, number];
  color: string;
  intensity: React.RefObject<number>;
}) {
  const lightRef = useRef<THREE.PointLight>(null);
  const matRef = useRef<THREE.MeshStandardMaterial>(null);
  useFrame(() => {
    const v = intensity.current ?? 0;
    if (lightRef.current) lightRef.current.intensity = v;
    if (matRef.current) matRef.current.emissiveIntensity = v * 0.5;
  });
  return (
    <group position={position}>
      <pointLight ref={lightRef} color={color} distance={8} castShadow />
      <mesh>
        <sphereGeometry args={[0.15, 12, 12]} />
        <meshStandardMaterial ref={matRef} color={color} emissive={color} />
      </mesh>
    </group>
  );
}

function WindowWithCurtains({ openAmount }: { openAmount: React.RefObject<number> }) {
  const leftRef = useRef<THREE.Mesh>(null);
  const rightRef = useRef<THREE.Mesh>(null);
  useFrame(() => {
    const v = openAmount.current ?? 0;
    if (leftRef.current) leftRef.current.position.x = -2.8 - v * 1.5;
    if (rightRef.current) rightRef.current.position.x = -1.2 + v * 1.5;
  });
  return (
    <group position={[0, 2.2, -3.9]}>
      {/* Window frame */}
      <mesh>
        <boxGeometry args={[3, 2, 0.05]} />
        <meshStandardMaterial color="#87ceeb" emissive="#87ceeb" emissiveIntensity={0.2} transparent opacity={0.4} />
      </mesh>
      {/* Left curtain */}
      <mesh ref={leftRef} position={[-1.3, 0, 0.08]}>
        <boxGeometry args={[1.2, 2.4, 0.04]} />
        <meshStandardMaterial color="#7c3aed" roughness={0.8} />
      </mesh>
      {/* Right curtain */}
      <mesh ref={rightRef} position={[1.3, 0, 0.08]}>
        <boxGeometry args={[1.2, 2.4, 0.04]} />
        <meshStandardMaterial color="#7c3aed" roughness={0.8} />
      </mesh>
    </group>
  );
}

// ─── Furniture pieces ────────────────────────────────────────────────

function SofaFurniture({ accentColor }: { accentColor: string }) {
  return (
    <group position={[0, 0, -2]}>
      {/* Base */}
      <mesh position={[0, 0.3, 0]} castShadow>
        <boxGeometry args={[3, 0.5, 1]} />
        <meshStandardMaterial color="#44403c" />
      </mesh>
      {/* Back */}
      <mesh position={[0, 0.8, -0.4]} castShadow>
        <boxGeometry args={[3, 0.7, 0.2]} />
        <meshStandardMaterial color="#44403c" />
      </mesh>
      {/* Cushions */}
      {[-0.8, 0, 0.8].map((x) => (
        <mesh key={x} position={[x, 0.6, 0.05]} castShadow>
          <boxGeometry args={[0.7, 0.15, 0.7]} />
          <meshStandardMaterial color={accentColor} roughness={0.9} />
        </mesh>
      ))}
      {/* Coffee table */}
      <mesh position={[0, 0.25, 1.3]} castShadow>
        <boxGeometry args={[1.5, 0.08, 0.8]} />
        <meshStandardMaterial color="#292524" metalness={0.3} />
      </mesh>
      <mesh position={[0, 0.12, 1.3]}>
        <boxGeometry args={[1.2, 0.24, 0.6]} />
        <meshStandardMaterial color="#1c1917" />
      </mesh>
    </group>
  );
}

function BedFurniture({ accentColor }: { accentColor: string }) {
  return (
    <group position={[0, 0, -2]}>
      {/* Bed frame */}
      <mesh position={[0, 0.3, 0]} castShadow>
        <boxGeometry args={[2.5, 0.4, 3]} />
        <meshStandardMaterial color="#44403c" />
      </mesh>
      {/* Mattress */}
      <mesh position={[0, 0.6, 0]} castShadow>
        <boxGeometry args={[2.3, 0.2, 2.8]} />
        <meshStandardMaterial color="#fef3c7" roughness={0.9} />
      </mesh>
      {/* Headboard */}
      <mesh position={[0, 1.2, -1.4]} castShadow>
        <boxGeometry args={[2.6, 1.2, 0.12]} />
        <meshStandardMaterial color={accentColor} roughness={0.7} />
      </mesh>
      {/* Pillows */}
      {[-0.5, 0.5].map((x) => (
        <mesh key={x} position={[x, 0.8, -1]} castShadow>
          <boxGeometry args={[0.5, 0.15, 0.4]} />
          <meshStandardMaterial color="#fff" roughness={0.9} />
        </mesh>
      ))}
      {/* Side tables */}
      {[-1.6, 1.6].map((x) => (
        <group key={x} position={[x, 0, -1]}>
          <mesh position={[0, 0.35, 0]} castShadow>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial color="#292524" />
          </mesh>
          {/* Lamp */}
          <mesh position={[0, 0.7, 0]}>
            <cylinderGeometry args={[0.08, 0.1, 0.2, 8]} />
            <meshStandardMaterial color="#d4a843" emissive="#d4a843" emissiveIntensity={0.5} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function DiningTable({ accentColor }: { accentColor: string }) {
  return (
    <group position={[0, 0, -1.5]}>
      <mesh position={[0, 0.4, 0]} castShadow>
        <boxGeometry args={[2.5, 0.08, 1.2]} />
        <meshStandardMaterial color="#44403c" metalness={0.1} roughness={0.5} />
      </mesh>
      {[[-1, -0.5], [1, -0.5], [-1, 0.5], [1, 0.5]].map(([x, z], i) => (
        <mesh key={i} position={[x, 0.2, z]}>
          <boxGeometry args={[0.06, 0.4, 0.06]} />
          <meshStandardMaterial color={accentColor} />
        </mesh>
      ))}
      {/* Chairs */}
      {[[-1.5, 0], [1.5, 0], [0, -0.9], [0, 0.9]].map(([x, z], i) => (
        <mesh key={`chair-${i}`} position={[x, 0.3, z]} castShadow>
          <boxGeometry args={[0.4, 0.5, 0.4]} />
          <meshStandardMaterial color="#292524" />
        </mesh>
      ))}
    </group>
  );
}

function KitchenCounter() {
  return (
    <group position={[0, 0, -3]}>
      {/* Counter */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[6, 0.08, 0.8]} />
        <meshStandardMaterial color="#d6d3d1" roughness={0.3} metalness={0.1} />
      </mesh>
      {/* Cabinets below */}
      <mesh position={[0, 0.23, 0]} castShadow>
        <boxGeometry args={[6, 0.45, 0.75]} />
        <meshStandardMaterial color="#44403c" />
      </mesh>
      {/* Wall cabinets */}
      <mesh position={[0, 2.5, -0.2]} castShadow>
        <boxGeometry args={[6, 1, 0.4]} />
        <meshStandardMaterial color="#44403c" />
      </mesh>
      {/* Under-cabinet light strip */}
      <mesh position={[0, 1.95, 0]}>
        <boxGeometry args={[5.5, 0.03, 0.02]} />
        <meshStandardMaterial color="#fef3c7" emissive="#fef3c7" emissiveIntensity={2} />
      </mesh>
      {/* Island */}
      <mesh position={[0, 0.45, 2]} castShadow>
        <boxGeometry args={[3, 0.9, 0.8]} />
        <meshStandardMaterial color="#44403c" />
      </mesh>
      <mesh position={[0, 0.92, 2]}>
        <boxGeometry args={[3.1, 0.06, 0.9]} />
        <meshStandardMaterial color="#d6d3d1" roughness={0.3} />
      </mesh>
    </group>
  );
}

function ChandelierFoyer({
  color,
  intensity,
}: {
  color: string;
  intensity: React.RefObject<number>;
}) {
  const lightRef = useRef<THREE.PointLight>(null);
  useFrame(() => {
    if (lightRef.current) lightRef.current.intensity = (intensity.current ?? 0) * 1.5;
  });
  return (
    <group position={[0, 3.2, -1]}>
      <pointLight ref={lightRef} color={color} distance={10} castShadow />
      {/* Central sphere */}
      <mesh>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1} />
      </mesh>
      {/* Arms */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const angle = (i / 6) * Math.PI * 2;
        const x = Math.cos(angle) * 0.6;
        const z = Math.sin(angle) * 0.6;
        return (
          <group key={i}>
            <mesh position={[x, -0.2, z]}>
              <sphereGeometry args={[0.08, 8, 8]} />
              <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.5} />
            </mesh>
            <mesh position={[x / 2, -0.1, z / 2]}>
              <cylinderGeometry args={[0.01, 0.01, 0.6, 4]} />
              <meshStandardMaterial color="#d4a843" metalness={0.8} />
            </mesh>
          </group>
        );
      })}
      {/* Hanging rod */}
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.015, 0.015, 0.8, 4]} />
        <meshStandardMaterial color="#d4a843" metalness={0.8} />
      </mesh>
    </group>
  );
}

// ─── Theater scene ───────────────────────────────────────────────────

function TheaterScene({ progress }: { progress: number }) {
  const screenY = useLerp(progress > 0.3 ? 2 : 3.8, 1);
  const lightDim = useLerp(progress > 0.3 ? 0.15 : 0, 2);
  const screenRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (screenRef.current) screenRef.current.position.y = screenY.current;
  });

  return (
    <group>
      <Ground color="#0a0a0a" />
      {/* Dark room walls */}
      <mesh position={[0, 2, -5]}>
        <boxGeometry args={[12, 4, 0.15]} />
        <meshStandardMaterial color="#0a0a0a" />
      </mesh>
      <mesh position={[-6, 2, -1]}>
        <boxGeometry args={[0.15, 4, 8]} />
        <meshStandardMaterial color="#0f172a" />
      </mesh>
      <mesh position={[6, 2, -1]}>
        <boxGeometry args={[0.15, 4, 8]} />
        <meshStandardMaterial color="#0f172a" />
      </mesh>
      <mesh position={[0, 4, -1]}>
        <boxGeometry args={[12.3, 0.1, 8.3]} />
        <meshStandardMaterial color="#000" />
      </mesh>
      {/* Projection screen — animated descend */}
      <mesh ref={screenRef} position={[0, 3.8, -4.8]}>
        <boxGeometry args={[6, 3.4, 0.05]} />
        <meshStandardMaterial
          color="#fff"
          emissive="#3b82f6"
          emissiveIntensity={progress > 0.5 ? 0.4 : 0}
        />
      </mesh>
      {/* Theater seats — 2 rows */}
      {[0, 2].map((row) =>
        [-3, -1.5, 0, 1.5, 3].map((x) => (
          <mesh key={`${row}-${x}`} position={[x, 0.4 + row * 0.2, row * 1.8]} castShadow>
            <boxGeometry args={[0.8, 0.7, 0.7]} />
            <meshStandardMaterial color="#1e293b" />
          </mesh>
        ))
      )}
      {/* Aisle LEDs — blue accent */}
      {[-3.5, 3.5].map((x) =>
        [0, 1, 2, 3].map((z) => (
          <mesh key={`led-${x}-${z}`} position={[x, 0.02, z * 0.8]}>
            <boxGeometry args={[0.5, 0.02, 0.05]} />
            <meshStandardMaterial
              color="#3b82f6"
              emissive="#3b82f6"
              emissiveIntensity={progress > 0.4 ? 1.5 : 0}
            />
          </mesh>
        ))
      )}
      {/* Ambient glow */}
      <pointLight
        position={[0, 3.5, -4]}
        color="#3b82f6"
        intensity={lightDim.current}
        distance={10}
      />
    </group>
  );
}

// ─── Terrace / Pool scene ────────────────────────────────────────────

function TerraceScene({ progress }: { progress: number }) {
  const poolRef = useRef<THREE.MeshStandardMaterial>(null);
  const time = useRef(0);

  useFrame((_, delta) => {
    time.current += delta;
    if (poolRef.current && progress > 0.3) {
      const hue = (Math.sin(time.current * 0.5) * 0.1 + 0.55);
      poolRef.current.color.setHSL(hue, 0.8, 0.4);
      poolRef.current.emissive.setHSL(hue, 0.9, 0.2);
      poolRef.current.emissiveIntensity = 1.5;
    }
  });

  return (
    <group>
      <Ground color="#1a1a2e" />
      {/* Pool */}
      <mesh position={[0, -0.3, -1]} receiveShadow>
        <boxGeometry args={[6, 0.6, 3]} />
        <meshStandardMaterial ref={poolRef} color="#06b6d4" transparent opacity={0.7} />
      </mesh>
      {/* Pool edge */}
      <mesh position={[0, 0.02, -1]}>
        <boxGeometry args={[6.4, 0.05, 3.4]} />
        <meshStandardMaterial color="#d6d3d1" roughness={0.3} />
      </mesh>
      {/* Deck */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 3]}>
        <planeGeometry args={[8, 4]} />
        <meshStandardMaterial color="#44403c" />
      </mesh>
      {/* Loungers */}
      {[-2, 2].map((x) => (
        <group key={x} position={[x, 0, 3.5]}>
          <mesh position={[0, 0.2, 0]} castShadow>
            <boxGeometry args={[0.8, 0.15, 2]} />
            <meshStandardMaterial color="#292524" />
          </mesh>
          <mesh position={[0, 0.35, -0.7]} castShadow rotation={[0.4, 0, 0]}>
            <boxGeometry args={[0.8, 0.08, 0.8]} />
            <meshStandardMaterial color="#292524" />
          </mesh>
        </group>
      ))}
      {/* Garden uplights */}
      {[[-4, -3], [4, -3], [-4, 2], [4, 2], [-4, 5], [4, 5]].map(([x, z], i) => (
        <group key={i} position={[x, 0, z]}>
          <pointLight
            color="#fbbf24"
            intensity={progress > 0.3 ? 3 : 0}
            distance={4}
            position={[0, 0.5, 0]}
          />
          <mesh position={[0, 0.15, 0]}>
            <cylinderGeometry args={[0.06, 0.08, 0.3, 8]} />
            <meshStandardMaterial
              color="#fbbf24"
              emissive="#fbbf24"
              emissiveIntensity={progress > 0.3 ? 2 : 0}
            />
          </mesh>
          {/* Tree/plant */}
          <mesh position={[0, 0.8, 0]} castShadow>
            <coneGeometry args={[0.5, 1.5, 6]} />
            <meshStandardMaterial color="#166534" />
          </mesh>
          <mesh position={[0, 0.15, 0]}>
            <cylinderGeometry args={[0.06, 0.06, 0.3, 6]} />
            <meshStandardMaterial color="#44403c" />
          </mesh>
        </group>
      ))}
      {/* Stars / night sky effect */}
      <mesh position={[0, 15, 0]}>
        <sphereGeometry args={[20, 16, 16]} />
        <meshBasicMaterial color="#0a0a1a" side={THREE.BackSide} />
      </mesh>
    </group>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// ZONE SCENE SWITCHER — renders the right 3D scene for current zone
// ═══════════════════════════════════════════════════════════════════════

function ZoneScene({ zoneId, progress }: { zoneId: string; progress: number }) {
  switch (zoneId) {
    case "gate":
      return <GateScene progress={progress} />;
    case "garage":
      return <GarageScene progress={progress} />;
    case "foyer":
      return (
        <InteriorRoom
          progress={progress}
          lightColor="#d4a843"
          lightIntensity={2.5}
          furnitureType="chandelier"
          accentColor="#d4a843"
        />
      );
    case "living":
      return (
        <InteriorRoom
          progress={progress}
          lightColor="#d4a843"
          lightIntensity={2}
          furnitureType="sofa"
          accentColor="#d4a843"
        />
      );
    case "kitchen":
      return (
        <InteriorRoom
          progress={progress}
          lightColor="#fef3c7"
          lightIntensity={3.5}
          furnitureType="kitchen"
          accentColor="#d4a843"
        />
      );
    case "theater":
      return <TheaterScene progress={progress} />;
    case "bedroom":
      return (
        <InteriorRoom
          progress={progress}
          lightColor="#fbbf24"
          lightIntensity={1}
          furnitureType="bed"
          accentColor="#7c3aed"
        />
      );
    case "terrace":
      return <TerraceScene progress={progress} />;
    default:
      return null;
  }
}

// ═══════════════════════════════════════════════════════════════════════
// MAIN COMPONENT — Villa Walkthrough with timeline UI
// ═══════════════════════════════════════════════════════════════════════

export default function VillaWalkthrough() {
  const [currentZone, setCurrentZone] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const zone = ZONES[currentZone];

  // Auto-play timer
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress((p) => {
          if (p >= 1) {
            // Move to next zone
            setCurrentZone((z) => {
              if (z >= ZONES.length - 1) {
                setIsPlaying(false);
                return z;
              }
              return z + 1;
            });
            return 0;
          }
          return p + 0.015;
        });
      }, 50);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  // Reset progress on zone change
  useEffect(() => {
    setProgress(0);
    setShowEvents(false);
    const timer = setTimeout(() => setShowEvents(true), 600);
    return () => clearTimeout(timer);
  }, [currentZone]);

  // Start progress animation on zone load
  useEffect(() => {
    if (!isPlaying) {
      const timer = setInterval(() => {
        setProgress((p) => (p >= 1 ? 1 : p + 0.02));
      }, 50);
      return () => clearInterval(timer);
    }
  }, [currentZone, isPlaying]);

  const goToZone = useCallback((index: number) => {
    setIsPlaying(false);
    setCurrentZone(index);
    setProgress(0);
  }, []);

  const nextZone = useCallback(() => {
    if (currentZone < ZONES.length - 1) {
      setCurrentZone((z) => z + 1);
      setProgress(0);
    }
  }, [currentZone]);

  const togglePlay = useCallback(() => {
    setIsPlaying((p) => !p);
  }, []);

  const Icon = zone.icon;

  return (
    <div className="w-full">
      {/* 3D Canvas */}
      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-navy-700 bg-navy-950">
        <Canvas
          shadows
          camera={{ position: zone.cameraPos, fov: 55, near: 0.1, far: 100 }}
          gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
        >
          <Suspense fallback={null}>
            <fog attach="fog" args={[zone.ambientColor, 8, 25]} />
            <ambientLight color={zone.ambientColor} intensity={zone.ambientIntensity} />
            <CameraController zone={zone} />
            <ZoneScene zoneId={zone.id} progress={progress} />
            <ContactShadows position={[0, -0.01, 0]} opacity={0.4} blur={2} far={10} />
            <Environment preset="night" />
          </Suspense>
        </Canvas>

        {/* Zone name overlay */}
        <div className="absolute top-4 left-4 z-10">
          <div className="flex items-center gap-2 bg-navy-950/80 backdrop-blur-sm border border-navy-700 rounded-lg px-4 py-2">
            <Icon className="w-5 h-5 text-gold-500" />
            <div>
              <p className="text-white font-semibold text-sm">{zone.name}</p>
              <p className="text-navy-400 text-xs">{zone.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Zone counter */}
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-navy-950/80 backdrop-blur-sm border border-navy-700 rounded-lg px-3 py-1.5">
            <p className="text-gold-500 font-semibold text-xs">
              Zone {currentZone + 1} / {ZONES.length}
            </p>
          </div>
        </div>

        {/* Automation events — fade in */}
        {showEvents && (
          <div className="absolute bottom-20 right-4 z-10 space-y-1.5 transition-opacity duration-500">
            {zone.automationEvents.map((event, i) => (
              <div
                key={event}
                className="flex items-center gap-2 bg-navy-950/80 backdrop-blur-sm border border-gold-500/30 rounded-lg px-3 py-1.5"
                style={{
                  animation: `fadeSlideIn 0.4s ease-out ${i * 0.15}s both`,
                }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                <p className="text-navy-100 text-xs">{event}</p>
              </div>
            ))}
          </div>
        )}

        {/* Playback controls */}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <div className="flex items-center gap-3 bg-navy-950/80 backdrop-blur-sm border border-navy-700 rounded-xl px-4 py-3">
            {/* Play/Pause */}
            <button
              onClick={togglePlay}
              className="w-9 h-9 rounded-full bg-gold-500 hover:bg-gold-600 flex items-center justify-center shrink-0 transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 text-navy-900" />
              ) : (
                <Play className="w-4 h-4 text-navy-900 ml-0.5" />
              )}
            </button>

            {/* Timeline dots */}
            <div className="flex-1 flex items-center gap-1.5">
              {ZONES.map((z, i) => {
                const ZIcon = z.icon;
                const isActive = i === currentZone;
                const isPast = i < currentZone;
                return (
                  <button
                    key={z.id}
                    onClick={() => goToZone(i)}
                    className={`
                      relative flex-1 h-2 rounded-full transition-all duration-300
                      ${isActive ? "bg-gold-500" : isPast ? "bg-gold-500/50" : "bg-navy-700"}
                    `}
                    title={z.name}
                    aria-label={`Go to ${z.name}`}
                  >
                    {isActive && (
                      <div
                        className="absolute top-0 left-0 h-full bg-gold-400 rounded-full transition-all"
                        style={{ width: `${progress * 100}%` }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Next */}
            <button
              onClick={nextZone}
              disabled={currentZone >= ZONES.length - 1}
              className="w-9 h-9 rounded-full border border-navy-600 hover:border-gold-500 flex items-center justify-center shrink-0 transition-colors disabled:opacity-30"
              aria-label="Next zone"
            >
              <SkipForward className="w-4 h-4 text-navy-200" />
            </button>
          </div>
        </div>
      </div>

      {/* CSS animation */}
      <style jsx global>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>

      {/* Zone selector cards below */}
      <div className="mt-6 grid grid-cols-4 sm:grid-cols-8 gap-2">
        {ZONES.map((z, i) => {
          const ZIcon = z.icon;
          const isActive = i === currentZone;
          return (
            <button
              key={z.id}
              onClick={() => goToZone(i)}
              className={`
                flex flex-col items-center gap-1.5 p-3 rounded-xl transition-all text-center
                ${isActive
                  ? "bg-gold-500/10 border border-gold-500/40 text-gold-500"
                  : "bg-navy-800/50 border border-navy-700/50 text-navy-400 hover:text-white hover:border-navy-600"
                }
              `}
            >
              <ZIcon className="w-5 h-5" />
              <span className="text-[10px] font-medium leading-tight">{z.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
