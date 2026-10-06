"use client";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import FloatingObjects from "./FloatingObjects";
import Particles from "./Particles";

function webglOk() {
  try { const c = document.createElement("canvas"); return !!(c.getContext("webgl2") || c.getContext("webgl")); } catch { return false; }
}

export default function HeroScene() {
  const [mode, setMode] = useState<"loading" | "full" | "lite" | "none">("loading");
  useEffect(() => {
    if (!webglOk() || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return setMode("none");
    setMode(window.innerWidth < 768 ? "lite" : "full");
  }, []);
  if (mode === "none" || mode === "loading")
    return <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(79,124,255,.25),transparent_55%)]" />;
  const lite = mode === "lite";
  return (
    <Canvas aria-hidden dpr={lite ? 1 : [1, 1.5]} camera={{ position: [0, 0, 6], fov: 50 }} gl={{ antialias: !lite, powerPreference: "high-performance" }}>
      <ambientLight intensity={0.6} /><pointLight position={[5, 5, 5]} intensity={40} color="#8b5cf6" />
      <FloatingObjects nodes={lite ? 50 : 90} />
      <Particles count={lite ? 150 : 600} />
    </Canvas>
  );
}
