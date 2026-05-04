"use client";

import { Suspense, useRef, useState, useMemo, useEffect, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Float,
  Environment,
  ContactShadows,
  OrbitControls,
  Html,
} from "@react-three/drei";
import * as THREE from "three";
import { Lightbulb, Thermometer, Monitor, ShieldCheck, Music, BlindsIcon as Blinds } from "lucide-react";

// ═══════════════════════════════════════════════════════════════════════
// ROOM STATE — shared automation state each room reacts to
// ═══════════════════════════════════════════════════════════════════════

type AutomationState = {
  lightsOn: boolean;
  lightsBrightness: number; // 0-1
  lightColor: string;
  curtainsOpen: number; // 0=closed, 1=open
  acTemp: number;
  acOn: boolean;
  tvOn: boolean;
  musicPlaying: boolean;
  securityArmed: boolean;
  scene: string; // "default" | "movie" | "dinner" | "morning" | "goodnight" | "party"
};

const SCENE_PRESETS: Record<string, Partial<AutomationState>> = {
  // Empty room — someone is about to walk in
  empty: { lightsOn: false, lightsBrightness: 0.05, lightColor: "#445566", curtainsOpen: 0, acOn: false, acTemp: 28, tvOn: false, musicPlaying: false, securityArmed: true },
  // Motion sensor detects entry → lights on, AC starts, security disarms
  enter: { lightsOn: true, lightsBrightness: 0.9, lightColor: "#d4a843", curtainsOpen: 0.8, acOn: true, acTemp: 24, tvOn: false, musicPlaying: false, securityArmed: false },
  // Morning wake-up: bright warm light, curtains fully open, gentle music
  morning: { lightsOn: true, lightsBrightness: 1, lightColor: "#fef3c7", curtainsOpen: 1, acOn: false, acTemp: 26, tvOn: false, musicPlaying: true, securityArmed: false },
  // Movie night: lights nearly off, blue accent, curtains shut, TV on, AC cool
  movie: { lightsOn: true, lightsBrightness: 0.05, lightColor: "#3b82f6", curtainsOpen: 0, acOn: true, acTemp: 21, tvOn: true, musicPlaying: false, securityArmed: false },
  // Goodnight: everything off, security armed, AC on low
  goodnight: { lightsOn: false, lightsBrightness: 0.05, lightColor: "#1e1b4b", curtainsOpen: 0, acOn: true, acTemp: 22, tvOn: false, musicPlaying: false, securityArmed: true },
  // Party: bright pink/purple lights, music blasting, TV on, curtains half
  party: { lightsOn: true, lightsBrightness: 1, lightColor: "#ec4899", curtainsOpen: 0.4, acOn: true, acTemp: 20, tvOn: true, musicPlaying: true, securityArmed: false },
};

// ═══════════════════════════════════════════════════════════════════════
// ANIMATED ROOM COMPONENTS — react to automation state
// ═══════════════════════════════════════════════════════════════════════

// ─── Smooth lerp helper ───────────────────────────────────────────────

function useSmoothValue(target: number, speed = 3) {
  const ref = useRef(target);
  useFrame((_, delta) => {
    ref.current = THREE.MathUtils.lerp(ref.current, target, delta * speed);
  });
  return ref;
}

// ─── Animated ceiling lights ──────────────────────────────────────────

function AnimatedLight({
  position,
  state,
}: {
  position: [number, number, number];
  state: AutomationState;
}) {
  const lightRef = useRef<THREE.PointLight>(null);
  const meshRef = useRef<THREE.MeshStandardMaterial>(null);
  const brightness = useSmoothValue(state.lightsOn ? state.lightsBrightness : 0);
  const color = new THREE.Color(state.lightColor);

  useFrame(() => {
    const b = brightness.current;
    if (lightRef.current) {
      lightRef.current.intensity = b * 5;
      lightRef.current.color.copy(color);
    }
    if (meshRef.current) {
      meshRef.current.emissiveIntensity = b * 4;
      meshRef.current.emissive.copy(color);
    }
  });

  return (
    <group position={position}>
      {/* Light fixture */}
      <mesh position={[0, -0.02, 0]}>
        <cylinderGeometry args={[0.06, 0.1, 0.04, 16]} />
        <meshStandardMaterial color="#2b4060" />
      </mesh>
      {/* Bulb */}
      <mesh position={[0, -0.06, 0]}>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshStandardMaterial
          ref={meshRef}
          color={state.lightColor}
          emissive={state.lightColor}
          emissiveIntensity={0}
        />
      </mesh>
      <pointLight
        ref={lightRef}
        color={state.lightColor}
        intensity={0}
        distance={5}
        decay={2}
        position={[0, -0.08, 0]}
      />
    </group>
  );
}

// ─── Animated motorized curtains ──────────────────────────────────────

function AnimatedCurtains({
  position,
  state,
  width = 1,
}: {
  position: [number, number, number];
  state: AutomationState;
  width?: number;
}) {
  const leftRef = useRef<THREE.Mesh>(null);
  const rightRef = useRef<THREE.Mesh>(null);
  const openAmount = useSmoothValue(state.curtainsOpen, 2);

  useFrame(() => {
    const open = openAmount.current;
    const halfWidth = width / 2;
    const curtainW = halfWidth * (1 - open * 0.7);

    if (leftRef.current) {
      leftRef.current.scale.x = curtainW;
      leftRef.current.position.x = -halfWidth + curtainW / 2;
    }
    if (rightRef.current) {
      rightRef.current.scale.x = curtainW;
      rightRef.current.position.x = halfWidth - curtainW / 2;
    }
  });

  return (
    <group position={position}>
      {/* Window frame */}
      <mesh>
        <boxGeometry args={[width + 0.08, 1.1, 0.02]} />
        <meshStandardMaterial color="#2b4060" />
      </mesh>
      {/* Window glass (light from outside) */}
      <mesh position={[0, 0, -0.01]}>
        <boxGeometry args={[width, 1, 0.01]} />
        <meshStandardMaterial
          color="#2a4878"
          emissive="#1a3060"
          emissiveIntensity={0.3}
          transparent
          opacity={0.4}
        />
      </mesh>
      {/* Curtain rail */}
      <mesh position={[0, 0.58, 0.02]}>
        <boxGeometry args={[width + 0.15, 0.03, 0.02]} />
        <meshStandardMaterial color="#d4a843" metalness={0.6} />
      </mesh>
      {/* Left curtain */}
      <mesh ref={leftRef} position={[-width / 4, -0.02, 0.03]}>
        <boxGeometry args={[1, 1.05, 0.02]} />
        <meshStandardMaterial color="#334d75" transparent opacity={0.85} />
      </mesh>
      {/* Right curtain */}
      <mesh ref={rightRef} position={[width / 4, -0.02, 0.03]}>
        <boxGeometry args={[1, 1.05, 0.02]} />
        <meshStandardMaterial color="#334d75" transparent opacity={0.85} />
      </mesh>
    </group>
  );
}

// ─── Animated TV / Screen ─────────────────────────────────────────────

function AnimatedTV({
  position,
  state,
  width = 1.2,
  height = 0.65,
}: {
  position: [number, number, number];
  state: AutomationState;
  width?: number;
  height?: number;
}) {
  const matRef = useRef<THREE.MeshStandardMaterial>(null);
  const tvBrightness = useSmoothValue(state.tvOn ? 1 : 0, 4);

  useFrame((s) => {
    if (matRef.current) {
      const b = tvBrightness.current;
      const t = s.clock.elapsedTime;
      if (b > 0.1) {
        const r = 0.05 + Math.sin(t * 0.5) * 0.05;
        const g = 0.1 + Math.sin(t * 0.7 + 1) * 0.05;
        const bl = 0.25 + Math.sin(t * 0.3 + 2) * 0.1;
        matRef.current.emissive.setRGB(r * b, g * b, bl * b);
        matRef.current.emissiveIntensity = 2 * b;
      } else {
        matRef.current.emissive.setRGB(0, 0, 0);
        matRef.current.emissiveIntensity = 0;
      }
    }
  });

  return (
    <group position={position}>
      {/* Bezel */}
      <mesh position={[0, 0, -0.01]}>
        <boxGeometry args={[width + 0.06, height + 0.06, 0.02]} />
        <meshStandardMaterial color="#050505" />
      </mesh>
      {/* Screen */}
      <mesh>
        <boxGeometry args={[width, height, 0.01]} />
        <meshStandardMaterial
          ref={matRef}
          color="#080808"
          emissive="#000"
          emissiveIntensity={0}
        />
      </mesh>
    </group>
  );
}

// ─── AC unit with temp display ────────────────────────────────────────

function AnimatedAC({
  position,
  state,
}: {
  position: [number, number, number];
  state: AutomationState;
}) {
  const flowRef = useRef<THREE.Points>(null);
  const flowPositions = useMemo(() => {
    const pos = new Float32Array(20 * 3);
    for (let i = 0; i < 20; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 0.6;
      pos[i * 3 + 1] = -Math.random() * 0.4;
      pos[i * 3 + 2] = Math.random() * 0.1;
    }
    return pos;
  }, []);

  useFrame((s) => {
    if (flowRef.current && state.acOn) {
      const positions = flowRef.current.geometry.attributes.position;
      for (let i = 0; i < 20; i++) {
        let y = positions.getY(i);
        y -= 0.005;
        if (y < -0.5) y = 0;
        positions.setY(i, y);
      }
      positions.needsUpdate = true;
    }
  });

  return (
    <group position={position}>
      {/* AC unit body */}
      <mesh>
        <boxGeometry args={[0.7, 0.18, 0.15]} />
        <meshStandardMaterial color="#e0e0e0" />
      </mesh>
      {/* Vent */}
      <mesh position={[0, -0.08, 0.05]}>
        <boxGeometry args={[0.55, 0.03, 0.05]} />
        <meshStandardMaterial color="#ccc" />
      </mesh>
      {/* LED indicator */}
      <mesh position={[0.3, 0, 0.08]}>
        <sphereGeometry args={[0.01, 8, 8]} />
        <meshStandardMaterial
          color={state.acOn ? "#22c55e" : "#555"}
          emissive={state.acOn ? "#22c55e" : "#000"}
          emissiveIntensity={state.acOn ? 2 : 0}
        />
      </mesh>
      {/* Air flow particles */}
      {state.acOn && (
        <points ref={flowRef} position={[0, -0.1, 0.05]}>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[flowPositions, 3]} />
          </bufferGeometry>
          <pointsMaterial size={0.008} color="#a0c4ff" transparent opacity={0.3} sizeAttenuation />
        </points>
      )}
      {/* Temp display */}
      <Html position={[0, 0.15, 0.1]} center distanceFactor={6} style={{ pointerEvents: "none" }}>
        <div className={`text-xs px-2 py-0.5 rounded font-mono transition-opacity duration-500 ${state.acOn ? "bg-navy-900/80 text-cyan-400" : "bg-navy-900/50 text-navy-500"}`}>
          {state.acTemp}°C
        </div>
      </Html>
    </group>
  );
}

// ─── Music visualizer ─────────────────────────────────────────────────

function MusicVisualizer({
  position,
  state,
}: {
  position: [number, number, number];
  state: AutomationState;
}) {
  const barsRef = useRef<THREE.Group>(null);
  const barCount = 5;

  useFrame((s) => {
    if (barsRef.current) {
      barsRef.current.children.forEach((bar, i) => {
        const mesh = bar as THREE.Mesh;
        if (state.musicPlaying) {
          const h = 0.02 + Math.abs(Math.sin(s.clock.elapsedTime * 4 + i * 1.2)) * 0.08;
          mesh.scale.y = h / 0.05;
          mesh.position.y = h / 2;
        } else {
          mesh.scale.y = THREE.MathUtils.lerp(mesh.scale.y, 0.3, 0.05);
        }
      });
    }
  });

  return (
    <group position={position}>
      {/* Speaker body */}
      <mesh position={[0, 0.06, 0]}>
        <cylinderGeometry args={[0.06, 0.07, 0.12, 16]} />
        <meshStandardMaterial color="#2b4060" />
      </mesh>
      {/* Speaker grill */}
      <mesh position={[0, 0.06, 0]}>
        <cylinderGeometry args={[0.062, 0.062, 0.08, 16]} />
        <meshStandardMaterial color="#d4a843" transparent opacity={0.3} wireframe />
      </mesh>
      {/* Visualizer bars */}
      <group ref={barsRef} position={[0, 0.15, 0]}>
        {Array.from({ length: barCount }).map((_, i) => (
          <mesh key={i} position={[(i - 2) * 0.02, 0.025, 0]}>
            <boxGeometry args={[0.008, 0.05, 0.008]} />
            <meshStandardMaterial
              color={state.musicPlaying ? "#d4a843" : "#333"}
              emissive={state.musicPlaying ? "#d4a843" : "#000"}
              emissiveIntensity={state.musicPlaying ? 1.5 : 0}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}

// ─── Security sensor ──────────────────────────────────────────────────

function SecuritySensor({
  position,
  state,
}: {
  position: [number, number, number];
  state: AutomationState;
}) {
  const dotRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame((s) => {
    if (dotRef.current) {
      if (state.securityArmed) {
        dotRef.current.emissiveIntensity = 1 + Math.sin(s.clock.elapsedTime * 4) * 1;
        dotRef.current.emissive.setHex(0x22c55e);
      } else {
        dotRef.current.emissiveIntensity = 0.3;
        dotRef.current.emissive.setHex(0x555555);
      }
    }
  });

  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={[0.06, 0.04, 0.02]} />
        <meshStandardMaterial color="#2a4670" />
      </mesh>
      <mesh position={[0, 0, 0.011]}>
        <sphereGeometry args={[0.008, 8, 8]} />
        <meshStandardMaterial ref={dotRef} color="#22c55e" emissive="#22c55e" emissiveIntensity={0} />
      </mesh>
    </group>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// ROOM COMPOSITIONS
// ═══════════════════════════════════════════════════════════════════════

function LivingRoom({ state }: { state: AutomationState }) {
  return (
    <group>
      {/* Lights */}
      <AnimatedLight position={[-0.8, 2.05, -0.3]} state={state} />
      <AnimatedLight position={[0.8, 2.05, -0.3]} state={state} />
      <AnimatedLight position={[0, 2.05, 0.6]} state={state} />

      {/* Sofa */}
      <group position={[0.3, 0, 0.7]}>
        <mesh position={[0, 0.2, 0]}><boxGeometry args={[1.4, 0.2, 0.55]} /><meshStandardMaterial color="#2a4670" /></mesh>
        <mesh position={[0, 0.38, -0.22]}><boxGeometry args={[1.4, 0.2, 0.1]} /><meshStandardMaterial color="#2c4468" /></mesh>
        <mesh position={[-0.3, 0.32, 0]}><boxGeometry args={[0.3, 0.05, 0.35]} /><meshStandardMaterial color="#d4a843" /></mesh>
        <mesh position={[0.3, 0.32, 0]}><boxGeometry args={[0.3, 0.05, 0.35]} /><meshStandardMaterial color="#c49a3d" /></mesh>
      </group>

      {/* Coffee table */}
      <mesh position={[0.3, 0.18, 0.15]}><boxGeometry args={[0.65, 0.04, 0.35]} /><meshStandardMaterial color="#243a5c" metalness={0.3} /></mesh>
      {[[-0.27, -0.13], [0.27, -0.13], [-0.27, 0.13], [0.27, 0.13]].map(([x, z], i) => (
        <mesh key={i} position={[0.3 + x, 0.08, 0.15 + z]}><cylinderGeometry args={[0.012, 0.012, 0.16, 8]} /><meshStandardMaterial color="#d4a843" metalness={0.5} /></mesh>
      ))}

      {/* TV */}
      <AnimatedTV position={[0, 1.1, -1.44]} state={state} />
      {/* TV stand */}
      <mesh position={[0, 0.35, -1.3]}><boxGeometry args={[1.5, 0.04, 0.3]} /><meshStandardMaterial color="#243a5c" /></mesh>
      <mesh position={[0, 0.17, -1.3]}><boxGeometry args={[1.5, 0.04, 0.3]} /><meshStandardMaterial color="#1e3352" /></mesh>

      {/* Curtains on right wall */}
      <AnimatedCurtains position={[2.18, 1.05, -0.2]} state={state} width={0.9} />

      {/* AC */}
      <AnimatedAC position={[-1.5, 1.8, -1.4]} state={state} />

      {/* Music speaker */}
      <MusicVisualizer position={[0.6, 0.21, 0.15]} state={state} />

      {/* Smart speaker on table */}
      <mesh position={[0.1, 0.22, 0.15]}>
        <cylinderGeometry args={[0.04, 0.04, 0.06, 16]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      <mesh position={[0.1, 0.26, 0.15]}>
        <cylinderGeometry args={[0.042, 0.042, 0.01, 16]} />
        <meshStandardMaterial color="#d4a843" emissive="#d4a843" emissiveIntensity={state.lightsOn ? 0.5 : 0} />
      </mesh>

      {/* Floor lamp */}
      <group position={[-1.5, 0, 0.8]}>
        <mesh position={[0, 0.55, 0]}><cylinderGeometry args={[0.012, 0.012, 1.1, 8]} /><meshStandardMaterial color="#d4a843" metalness={0.6} /></mesh>
        <mesh position={[0, 1.1, 0]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial
            color={state.lightColor}
            emissive={state.lightColor}
            emissiveIntensity={state.lightsOn ? state.lightsBrightness * 2 : 0}
          />
        </mesh>
      </group>

      {/* Rug */}
      <mesh position={[0.2, 0.005, 0.3]} rotation={[-Math.PI / 2, 0, 0]}><planeGeometry args={[2, 1.4]} /><meshStandardMaterial color="#1e3354" /></mesh>

      {/* Security sensor on back wall */}
      <SecuritySensor position={[1.5, 1.8, -1.46]} state={state} />
    </group>
  );
}

function Bedroom({ state }: { state: AutomationState }) {
  return (
    <group>
      {/* Lights */}
      <AnimatedLight position={[0, 2.05, -0.2]} state={state} />

      {/* Bed */}
      <group position={[0, 0, -0.2]}>
        <mesh position={[0, 0.2, 0]}><boxGeometry args={[1.5, 0.18, 1.1]} /><meshStandardMaterial color="#2b4060" /></mesh>
        <mesh position={[0, 0.52, -0.52]}><boxGeometry args={[1.5, 0.5, 0.06]} /><meshStandardMaterial color="#243a5c" /></mesh>
        <mesh position={[0, 0.32, 0]}><boxGeometry args={[1.4, 0.06, 1]} /><meshStandardMaterial color="#e8e0d0" /></mesh>
        <mesh position={[-0.35, 0.38, -0.3]}><boxGeometry args={[0.25, 0.07, 0.18]} /><meshStandardMaterial color="#818cf8" /></mesh>
        <mesh position={[0.35, 0.38, -0.3]}><boxGeometry args={[0.25, 0.07, 0.18]} /><meshStandardMaterial color="#818cf8" /></mesh>
        <mesh position={[0, 0.37, 0.2]}><boxGeometry args={[1.3, 0.04, 0.5]} /><meshStandardMaterial color="#6366f1" transparent opacity={0.7} /></mesh>
      </group>

      {/* Nightstand + lamp left */}
      <group position={[-1.05, 0, -0.3]}>
        <mesh position={[0, 0.2, 0]}><boxGeometry args={[0.35, 0.4, 0.3]} /><meshStandardMaterial color="#243a5c" /></mesh>
        <mesh position={[0, 0.45, 0]}>
          <cylinderGeometry args={[0.04, 0.05, 0.08, 16]} />
          <meshStandardMaterial
            color={state.lightColor}
            emissive={state.lightColor}
            emissiveIntensity={state.lightsOn ? state.lightsBrightness * 1.5 : 0}
          />
        </mesh>
        <pointLight position={[0, 0.5, 0]} color={state.lightColor} intensity={state.lightsOn ? state.lightsBrightness * 1.5 : 0} distance={1.5} />
      </group>

      {/* Nightstand right */}
      <group position={[1.05, 0, -0.3]}>
        <mesh position={[0, 0.2, 0]}><boxGeometry args={[0.35, 0.4, 0.3]} /><meshStandardMaterial color="#243a5c" /></mesh>
        <mesh position={[0, 0.45, 0]} rotation={[0, -0.3, 0]}><boxGeometry args={[0.12, 0.08, 0.02]} /><meshStandardMaterial color="#111" emissive="#818cf8" emissiveIntensity={0.5} /></mesh>
      </group>

      {/* Curtains */}
      <AnimatedCurtains position={[2.18, 1.05, -0.2]} state={state} width={0.85} />

      {/* AC */}
      <AnimatedAC position={[0, 1.8, -1.4]} state={state} />

      {/* Wardrobe */}
      <mesh position={[-1.85, 0.85, 0.5]}><boxGeometry args={[0.55, 1.7, 0.7]} /><meshStandardMaterial color="#1e3352" /></mesh>

      {/* Music */}
      <MusicVisualizer position={[1.05, 0.42, -0.3]} state={state} />

      {/* Rug */}
      <mesh position={[0, 0.005, 0.5]} rotation={[-Math.PI / 2, 0, 0]}><planeGeometry args={[1.6, 0.9]} /><meshStandardMaterial color="#282850" /></mesh>

      <SecuritySensor position={[-1.5, 1.6, -1.46]} state={state} />
    </group>
  );
}

function Kitchen({ state }: { state: AutomationState }) {
  return (
    <group>
      {/* Pendant lights */}
      {[-0.3, 0.3].map((x, i) => (
        <group key={i} position={[x, 1.85, 0.5]}>
          <mesh><cylinderGeometry args={[0.07, 0.04, 0.1, 16]} />
            <meshStandardMaterial
              color={state.lightColor}
              emissive={state.lightColor}
              emissiveIntensity={state.lightsOn ? state.lightsBrightness * 1.5 : 0}
              transparent opacity={0.8}
            />
          </mesh>
          <pointLight color={state.lightColor} intensity={state.lightsOn ? state.lightsBrightness * 1.5 : 0} distance={2.5} />
        </group>
      ))}
      <AnimatedLight position={[0, 2.05, -0.8]} state={state} />

      {/* Back counter */}
      <mesh position={[0, 0.45, -1.2]}><boxGeometry args={[3.2, 0.05, 0.55]} /><meshStandardMaterial color="#2a4670" metalness={0.2} /></mesh>
      <mesh position={[0, 0.2, -1.2]}><boxGeometry args={[3.2, 0.4, 0.55]} /><meshStandardMaterial color="#1e3352" /></mesh>

      {/* Upper cabinets */}
      <mesh position={[-0.8, 1.4, -1.38]}><boxGeometry args={[0.65, 0.55, 0.25]} /><meshStandardMaterial color="#243a5c" /></mesh>
      <mesh position={[0.5, 1.4, -1.38]}><boxGeometry args={[0.65, 0.55, 0.25]} /><meshStandardMaterial color="#243a5c" /></mesh>

      {/* Stove with animated burners */}
      <mesh position={[-0.3, 0.48, -1.15]}><boxGeometry args={[0.45, 0.015, 0.35]} /><meshStandardMaterial color="#0a0a0a" /></mesh>
      {[[-0.1, -0.06], [0.1, -0.06], [-0.1, 0.06], [0.1, 0.06]].map(([x, z], i) => (
        <mesh key={i} position={[-0.3 + x, 0.49, -1.15 + z]}>
          <cylinderGeometry args={[0.03, 0.03, 0.003, 16]} />
          <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={state.tvOn ? 1.5 : 0.2} />
        </mesh>
      ))}

      {/* Range hood */}
      <mesh position={[-0.3, 1.6, -1.38]}><boxGeometry args={[0.55, 0.12, 0.3]} /><meshStandardMaterial color="#2b4060" metalness={0.3} /></mesh>

      {/* Sink */}
      <mesh position={[0.9, 0.42, -1.15]}><boxGeometry args={[0.35, 0.08, 0.3]} /><meshStandardMaterial color="#2a3f5f" metalness={0.5} /></mesh>
      <mesh position={[0.9, 0.52, -1.32]}><cylinderGeometry args={[0.008, 0.008, 0.12, 8]} /><meshStandardMaterial color="#888" metalness={0.8} /></mesh>

      {/* Island */}
      <mesh position={[0.2, 0.4, 0.5]}><boxGeometry args={[1.1, 0.04, 0.5]} /><meshStandardMaterial color="#2a4670" /></mesh>
      {[[-0.45, -0.2], [0.45, -0.2], [-0.45, 0.2], [0.45, 0.2]].map(([x, z], i) => (
        <mesh key={i} position={[0.2 + x, 0.19, 0.5 + z]}><cylinderGeometry args={[0.015, 0.015, 0.36, 8]} /><meshStandardMaterial color="#d4a843" metalness={0.5} /></mesh>
      ))}

      {/* AC */}
      <AnimatedAC position={[1.2, 1.8, -1.4]} state={state} />

      {/* Leak sensor */}
      <group position={[1.1, 0.02, -0.85]}>
        <mesh><boxGeometry args={[0.05, 0.02, 0.05]} /><meshStandardMaterial color="#2a4670" /></mesh>
        <mesh position={[0, 0.015, 0]}>
          <sphereGeometry args={[0.008, 8, 8]} />
          <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={1.5} />
        </mesh>
      </group>

      <MusicVisualizer position={[-1.5, 0.42, 0.8]} state={state} />
    </group>
  );
}

function HomeTheater({ state }: { state: AutomationState }) {
  // Theater always has very dim ambient
  const theaterState = { ...state, lightsBrightness: state.lightsBrightness * 0.3 };

  return (
    <group>
      <AnimatedLight position={[-1.5, 2.05, 0]} state={theaterState} />
      <AnimatedLight position={[1.5, 2.05, 0]} state={theaterState} />

      {/* Big screen */}
      <AnimatedTV position={[0, 1.15, -1.44]} state={state} width={2.2} height={1.1} />

      {/* Seating row 1 */}
      {[-0.5, 0.5].map((x, i) => (
        <group key={i} position={[x, 0, 0.3]}>
          <mesh position={[0, 0.2, 0]}><boxGeometry args={[0.5, 0.18, 0.45]} /><meshStandardMaterial color="#2d2d50" /></mesh>
          <mesh position={[0, 0.38, -0.18]}><boxGeometry args={[0.5, 0.2, 0.08]} /><meshStandardMaterial color="#2d2d50" /></mesh>
          <mesh position={[0.22, 0.28, 0]}><boxGeometry args={[0.05, 0.12, 0.45]} /><meshStandardMaterial color="#243a5c" /></mesh>
          <mesh position={[-0.22, 0.28, 0]}><boxGeometry args={[0.05, 0.12, 0.45]} /><meshStandardMaterial color="#243a5c" /></mesh>
        </group>
      ))}

      {/* Elevated row 2 */}
      <mesh position={[0, 0.12, 1.1]}><boxGeometry args={[2.2, 0.24, 0.7]} /><meshStandardMaterial color="#1a2d4a" /></mesh>
      {[-0.65, 0, 0.65].map((x, i) => (
        <group key={i} position={[x, 0.24, 1.1]}>
          <mesh position={[0, 0.1, 0]}><boxGeometry args={[0.45, 0.16, 0.4]} /><meshStandardMaterial color="#2d2d50" /></mesh>
          <mesh position={[0, 0.24, -0.16]}><boxGeometry args={[0.45, 0.15, 0.06]} /><meshStandardMaterial color="#2d2d50" /></mesh>
        </group>
      ))}

      {/* Side speakers */}
      {[-1.8, 1.8].map((x, i) => (
        <mesh key={i} position={[x, 0.45, 0]}><boxGeometry args={[0.18, 0.65, 0.18]} /><meshStandardMaterial color="#111" /></mesh>
      ))}

      {/* Projector */}
      <mesh position={[0, 1.92, 0.8]}><boxGeometry args={[0.25, 0.12, 0.2]} /><meshStandardMaterial color="#2b4060" /></mesh>

      {/* LED floor strips */}
      {[[-2.17, 0], [2.17, 0]].map(([x], i) => (
        <mesh key={i} position={[x, 0.015, 0]}>
          <boxGeometry args={[0.02, 0.01, 3]} />
          <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={state.lightsOn ? state.lightsBrightness * 2 : 0} />
        </mesh>
      ))}

      <AnimatedAC position={[1.5, 1.8, -1.4]} state={state} />

      {/* Atmos speakers (ceiling) */}
      {[[-0.8, -0.5], [0.8, -0.5], [-0.8, 0.5], [0.8, 0.5]].map(([x, z], i) => (
        <mesh key={i} position={[x, 2.04, z]}>
          <cylinderGeometry args={[0.06, 0.06, 0.02, 16]} />
          <meshStandardMaterial color="#2b4060" />
        </mesh>
      ))}

      {/* Dark carpet */}
      <mesh position={[0, 0.005, 0.4]} rotation={[-Math.PI / 2, 0, 0]}><planeGeometry args={[2.8, 2.2]} /><meshStandardMaterial color="#161630" /></mesh>
    </group>
  );
}

function SecurityHub({ state }: { state: AutomationState }) {
  return (
    <group>
      <AnimatedLight position={[0, 2.05, 0]} state={state} />

      {/* Control desk */}
      <mesh position={[0, 0.37, -0.7]}><boxGeometry args={[2, 0.04, 0.6]} /><meshStandardMaterial color="#2a4670" /></mesh>
      {[[-0.9, -0.25], [0.9, -0.25], [-0.9, 0.25], [0.9, 0.25]].map(([x, z], i) => (
        <mesh key={i} position={[x, 0.17, -0.7 + z]}><boxGeometry args={[0.03, 0.34, 0.03]} /><meshStandardMaterial color="#243a5c" /></mesh>
      ))}

      {/* Monitor grid 2x2 */}
      {[[-0.42, 1.3], [0.42, 1.3], [-0.42, 0.78], [0.42, 0.78]].map(([x, y], i) => (
        <AnimatedTV key={i} position={[x, y, -1.44]} state={{ ...state, tvOn: true }} width={0.6} height={0.38} />
      ))}

      {/* Chair */}
      <group position={[0, 0, -0.15]}>
        <mesh position={[0, 0.26, 0]}><cylinderGeometry args={[0.14, 0.14, 0.04, 16]} /><meshStandardMaterial color="#2d2d50" /></mesh>
        <mesh position={[0, 0.4, -0.12]}><boxGeometry args={[0.3, 0.25, 0.04]} /><meshStandardMaterial color="#2d2d50" /></mesh>
        <mesh position={[0, 0.13, 0]}><cylinderGeometry args={[0.025, 0.025, 0.22, 8]} /><meshStandardMaterial color="#888" metalness={0.6} /></mesh>
      </group>

      {/* Server rack */}
      <mesh position={[1.7, 0.55, 0.7]}><boxGeometry args={[0.35, 1.1, 0.3]} /><meshStandardMaterial color="#152238" /></mesh>
      {[0.2, 0.35, 0.5, 0.65, 0.8].map((y, i) => (
        <mesh key={i} position={[1.54, y, 0.7]}>
          <sphereGeometry args={[0.008, 8, 8]} />
          <meshStandardMaterial
            color={state.securityArmed ? "#22c55e" : "#666"}
            emissive={state.securityArmed ? "#22c55e" : "#000"}
            emissiveIntensity={state.securityArmed ? 1.5 : 0}
          />
        </mesh>
      ))}

      {/* Door panel with biometric */}
      <SecuritySensor position={[-2.16, 0.9, 0.4]} state={state} />
      <SecuritySensor position={[2.16, 1.3, -0.5]} state={state} />

      {/* Motion sensor ceiling */}
      <group position={[0.8, 2.04, 0.6]}>
        <mesh><sphereGeometry args={[0.04, 16, 16]} /><meshStandardMaterial color="#2a4670" /></mesh>
        <mesh position={[0, -0.01, 0.03]}>
          <sphereGeometry args={[0.008, 8, 8]} />
          <meshStandardMaterial
            color={state.securityArmed ? "#22c55e" : "#666"}
            emissive={state.securityArmed ? "#22c55e" : "#000"}
            emissiveIntensity={state.securityArmed ? 2 : 0}
          />
        </mesh>
      </group>

      <AnimatedAC position={[-1, 1.8, -1.4]} state={state} />
    </group>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// ROOM SHELL + SCENE COMPOSITION
// ═══════════════════════════════════════════════════════════════════════

function RoomShell({ accentColor, state }: { accentColor: string; state: AutomationState }) {
  const stripRef = useRef<THREE.PointLight>(null);
  const stripBrightness = useSmoothValue(state.lightsOn ? state.lightsBrightness : 0);

  useFrame(() => {
    if (stripRef.current) stripRef.current.intensity = stripBrightness.current * 3;
  });

  return (
    <group>
      <mesh position={[0, 0, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}><planeGeometry args={[4.5, 3.5]} /><meshStandardMaterial color="#1a2d4a" /></mesh>
      <mesh position={[0, 1.05, -1.5]}><boxGeometry args={[4.5, 2.1, 0.05]} /><meshStandardMaterial color="#1e3352" transparent opacity={0.7} /></mesh>
      <mesh position={[-2.2, 1.05, 0]}><boxGeometry args={[0.05, 2.1, 3.5]} /><meshStandardMaterial color="#1e3352" transparent opacity={0.45} /></mesh>
      <mesh position={[2.2, 1.05, 0]}><boxGeometry args={[0.05, 2.1, 3.5]} /><meshStandardMaterial color="#1e3352" transparent opacity={0.45} /></mesh>
      <mesh position={[0, 2.1, 0]}><boxGeometry args={[4.5, 0.05, 3.5]} /><meshStandardMaterial color="#152238" /></mesh>
      {/* Accent strip */}
      <mesh position={[0, 2.06, 0]}>
        <boxGeometry args={[2.5, 0.015, 0.04]} />
        <meshStandardMaterial color={accentColor} emissive={accentColor} emissiveIntensity={state.lightsOn ? state.lightsBrightness * 4 : 0.05} />
      </mesh>
      <pointLight ref={stripRef} position={[0, 2, 0]} color={accentColor} intensity={0} distance={6} />
    </group>
  );
}

function Particles({ color }: { color: string }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const pos = new Float32Array(25 * 3);
    for (let i = 0; i < 25; i++) { pos[i*3]=(Math.random()-0.5)*4; pos[i*3+1]=Math.random()*1.8+0.1; pos[i*3+2]=(Math.random()-0.5)*3; }
    return pos;
  }, []);
  useFrame((s) => { if (ref.current) ref.current.rotation.y = s.clock.elapsedTime * 0.015; });
  return (
    <points ref={ref}>
      <bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} /></bufferGeometry>
      <pointsMaterial size={0.012} color={color} transparent opacity={0.25} sizeAttenuation />
    </points>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════

const ROOM_META: Record<string, { name: string; accent: string; camera: [number, number, number] }> = {
  living:   { name: "Living Room",   accent: "#d4a843", camera: [2.4, 1.8, 2.4] },
  bedroom:  { name: "Bedroom",       accent: "#818cf8", camera: [2.2, 1.6, 2.4] },
  kitchen:  { name: "Kitchen",       accent: "#fbbf24", camera: [2.2, 1.7, 2.2] },
  theater:  { name: "Home Theater",  accent: "#60a5fa", camera: [2.0, 1.4, 2.8] },
  security: { name: "Security Hub",  accent: "#f87171", camera: [2.4, 1.7, 2.2] },
};

const SCENES = [
  { key: "empty",     label: "Empty Room",     icon: ShieldCheck, desc: "Room is empty, all off, security armed" },
  { key: "enter",     label: "Someone Enters",  icon: Lightbulb,  desc: "Motion detected → lights, AC auto-start" },
  { key: "morning",   label: "Morning",         icon: Blinds,     desc: "Curtains open, warm light, gentle music" },
  { key: "movie",     label: "Movie Night",     icon: Monitor,    desc: "Lights dim, curtains close, TV on" },
  { key: "goodnight", label: "Goodnight",       icon: ShieldCheck, desc: "Everything off, security armed" },
  { key: "party",     label: "Party Mode",      icon: Music,      desc: "Colorful lights, music, TV on" },
];

function CameraRig({ position }: { position: [number, number, number] }) {
  const { camera } = useThree();
  useEffect(() => { camera.position.set(...position); camera.lookAt(0, 0.8, 0); }, [position, camera]);
  return null;
}

function RoomContent({ roomKey, state }: { roomKey: string; state: AutomationState }) {
  switch (roomKey) {
    case "living": return <LivingRoom state={state} />;
    case "bedroom": return <Bedroom state={state} />;
    case "kitchen": return <Kitchen state={state} />;
    case "theater": return <HomeTheater state={state} />;
    case "security": return <SecurityHub state={state} />;
    default: return null;
  }
}

export default function RoomWalkthrough() {
  const [activeRoom, setActiveRoom] = useState("living");
  const [autoState, setAutoState] = useState<AutomationState>({
    lightsOn: false, lightsBrightness: 0, lightColor: "#333",
    curtainsOpen: 0, acTemp: 28, acOn: false, tvOn: false,
    musicPlaying: false, securityArmed: true, scene: "empty",
  });

  const meta = ROOM_META[activeRoom];

  const applyScene = useCallback((sceneKey: string) => {
    const preset = SCENE_PRESETS[sceneKey];
    if (preset) setAutoState((prev) => ({ ...prev, ...preset, scene: sceneKey }));
  }, []);

  const toggleDevice = useCallback((key: keyof AutomationState) => {
    setAutoState((prev) => ({ ...prev, [key]: !prev[key], scene: "custom" }));
  }, []);

  // Entry animation: room starts dark ("empty"), then auto-transitions to "enter" after 1.5s
  useEffect(() => {
    applyScene("empty");
    const timer = setTimeout(() => applyScene("enter"), 1500);
    return () => clearTimeout(timer);
  }, [activeRoom, applyScene]);

  return (
    <div>
      {/* 3D Canvas */}
      <div className="aspect-video rounded-2xl bg-navy-900/50 border border-navy-700 overflow-hidden relative">
        <Suspense fallback={
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-gold-500 animate-pulse" />
            </div>
          </div>
        }>
          <Canvas
            key={activeRoom}
            shadows
            camera={{ position: meta.camera, fov: 55 }}
            gl={{ antialias: true, alpha: true }}
            style={{ background: "transparent" }}
          >
            <ambientLight intensity={autoState.lightsOn ? 0.45 : 0.15} />
            <directionalLight position={[3, 4, 3]} intensity={autoState.lightsOn ? 0.8 : 0.2} castShadow />
            <directionalLight position={[-2, 3, -1]} intensity={autoState.lightsOn ? 0.3 : 0.1} />
            <CameraRig position={meta.camera} />
            <RoomShell accentColor={meta.accent} state={autoState} />
            <RoomContent roomKey={activeRoom} state={autoState} />
            <Particles color={meta.accent} />
            <ContactShadows position={[0, 0.01, 0]} opacity={0.2} scale={6} blur={2} />
            <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI/6} maxPolarAngle={Math.PI/2.1} autoRotate autoRotateSpeed={0.3} target={[0,0.8,0]} />
            <Environment preset="night" />
          </Canvas>
        </Suspense>

        {/* Room label */}
        <div className="absolute top-4 left-4 bg-navy-900/80 backdrop-blur-sm border border-navy-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium">
          {meta.name}
        </div>

        {/* Active scene label */}
        <div className="absolute top-4 right-4 bg-navy-900/80 backdrop-blur-sm border border-navy-700 px-3 py-1.5 rounded-lg text-xs">
          <span className="text-navy-400">Scene:</span>{" "}
          <span className="text-gold-500 font-medium">
            {SCENES.find(s => s.key === autoState.scene)?.label || autoState.scene}
          </span>
        </div>

        {/* Status bar */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <div className="flex gap-2">
            <span className={`text-xs px-2 py-1 rounded-full ${autoState.lightsOn ? "bg-yellow-500/20 text-yellow-400" : "bg-navy-800 text-navy-500"}`}>
              Lights {autoState.lightsOn ? `${Math.round(autoState.lightsBrightness * 100)}%` : "Off"}
            </span>
            <span className={`text-xs px-2 py-1 rounded-full ${autoState.acOn ? "bg-cyan-500/20 text-cyan-400" : "bg-navy-800 text-navy-500"}`}>
              {autoState.acOn ? `AC ${autoState.acTemp}°C` : "AC Off"}
            </span>
            {autoState.tvOn && <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400">TV On</span>}
            {autoState.musicPlaying && <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-400">Music</span>}
            {autoState.securityArmed && <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">Armed</span>}
          </div>
          <span className="text-xs text-navy-500 hidden sm:block">Try each scenario below to see automation respond</span>
        </div>
      </div>

      {/* Scene buttons — THIS IS THE KEY UX */}
      <div className="mt-5">
        <p className="text-xs text-navy-400 uppercase tracking-wider mb-3 font-medium">Simulate Real-Life Scenarios</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {SCENES.map(({ key, label, icon: Icon, desc }) => (
            <button
              key={key}
              onClick={() => applyScene(key)}
              className={`flex flex-col items-center gap-1.5 rounded-lg px-3 py-3 text-left transition-all ${
                autoState.scene === key
                  ? "bg-gold-500/15 border border-gold-500/50 text-gold-500"
                  : "glass-card text-navy-300 hover:text-white hover:border-gold-500/30"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-semibold text-center">{label}</span>
              <span className="text-[10px] text-navy-400 text-center leading-tight hidden sm:block">{desc}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Device toggles */}
      <div className="mt-4">
        <p className="text-xs text-navy-400 uppercase tracking-wider mb-3 font-medium">Control Devices</p>
        <div className="flex flex-wrap gap-2">
          {([
            { key: "lightsOn" as const, label: "Lights", icon: Lightbulb, active: autoState.lightsOn },
            { key: "acOn" as const, label: "AC", icon: Thermometer, active: autoState.acOn },
            { key: "tvOn" as const, label: "TV", icon: Monitor, active: autoState.tvOn },
            { key: "musicPlaying" as const, label: "Music", icon: Music, active: autoState.musicPlaying },
            { key: "securityArmed" as const, label: "Security", icon: ShieldCheck, active: autoState.securityArmed },
          ]).map(({ key, label, icon: Icon, active }) => (
            <button
              key={key}
              onClick={() => toggleDevice(key)}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-medium transition-all ${
                active
                  ? "bg-gold-500/10 border border-gold-500/40 text-gold-500"
                  : "glass-card text-navy-400 hover:text-navy-200"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {label}
              <span className={`w-1.5 h-1.5 rounded-full ${active ? "bg-green-500" : "bg-navy-600"}`} />
            </button>
          ))}
        </div>
      </div>

      {/* Room selector */}
      <div className="mt-6">
        <p className="text-xs text-navy-400 uppercase tracking-wider mb-3 font-medium">Switch Room</p>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {Object.entries(ROOM_META).map(([key, room]) => (
            <button
              key={key}
              onClick={() => setActiveRoom(key)}
              className={`rounded-lg px-4 py-3 text-sm font-medium transition-all ${
                activeRoom === key
                  ? "bg-gold-500/10 border border-gold-500/50 text-gold-500"
                  : "glass-card text-navy-300 hover:text-white hover:border-gold-500/30"
              }`}
            >
              {room.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
