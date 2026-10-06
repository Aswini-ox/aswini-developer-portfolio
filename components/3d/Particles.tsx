"use client";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Particles({ count = 600 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const a = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) { a[i * 3] = (Math.random() - 0.5) * 14; a[i * 3 + 1] = (Math.random() - 0.5) * 10; a[i * 3 + 2] = (Math.random() - 0.5) * 8; }
    return a;
  }, [count]);
  useFrame((_, d) => { if (ref.current) ref.current.rotation.y += d * 0.02; });
  return (
    <points ref={ref}>
      <bufferGeometry><bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} /></bufferGeometry>
      <pointsMaterial size={0.025} color="#7aa2ff" transparent opacity={0.6} sizeAttenuation depthWrite={false} />
    </points>
  );
}
