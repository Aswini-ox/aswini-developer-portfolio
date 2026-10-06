"use client";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";
import * as THREE from "three";

/** Developer sphere: Fibonacci-distributed nodes + connecting lines + wireframe shell + floating code symbols. */
export default function FloatingObjects({ nodes = 90 }: { nodes?: number }) {
  const group = useRef<THREE.Group>(null);
  const { pts, lines } = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const g = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < nodes; i++) {
      const y = 1 - (i / (nodes - 1)) * 2, r = Math.sqrt(1 - y * y), t = g * i;
      pts.push(new THREE.Vector3(Math.cos(t) * r, y, Math.sin(t) * r).multiplyScalar(1.6));
    }
    const arr: number[] = [];
    for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++)
      if (pts[i].distanceTo(pts[j]) < 0.72) arr.push(pts[i].x, pts[i].y, pts[i].z, pts[j].x, pts[j].y, pts[j].z);
    return { pts, lines: new Float32Array(arr) };
  }, [nodes]);
  const nodePos = useMemo(() => new Float32Array(pts.flatMap((p) => [p.x, p.y, p.z])), [pts]);

  useFrame((s, d) => {
    if (!group.current) return;
    group.current.rotation.y += d * 0.12;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, s.pointer.y * 0.3, 0.05);
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, s.pointer.x * 0.25, 0.05);
  });

  const symbols = ["</>", "{ }", "AI", "λ", "[ ]"];
  return (
    <group ref={group}>
      <lineSegments><bufferGeometry><bufferAttribute attach="attributes-position" array={lines} count={lines.length / 3} itemSize={3} /></bufferGeometry>
        <lineBasicMaterial color="#4f7cff" transparent opacity={0.35} /></lineSegments>
      <points><bufferGeometry><bufferAttribute attach="attributes-position" array={nodePos} count={pts.length} itemSize={3} /></bufferGeometry>
        <pointsMaterial size={0.07} color="#22d3ee" sizeAttenuation /></points>
      <mesh><icosahedronGeometry args={[1.25, 1]} /><meshBasicMaterial color="#8b5cf6" wireframe transparent opacity={0.18} /></mesh>
      <mesh><sphereGeometry args={[0.55, 32, 32]} /><meshStandardMaterial color="#4f7cff" emissive="#4f7cff" emissiveIntensity={0.6} roughness={0.3} metalness={0.7} /></mesh>
      {symbols.map((s, i) => {
        const a = (i / symbols.length) * Math.PI * 2;
        return (
          <Float key={s} speed={1.5} floatIntensity={0.6}>
            <Text position={[Math.cos(a) * 2.5, Math.sin(a * 1.7) * 1.2, Math.sin(a) * 2.5]} fontSize={0.28} color="#a5b4fc" anchorX="center" anchorY="middle">{s}</Text>
          </Float>
        );
      })}
    </group>
  );
}
