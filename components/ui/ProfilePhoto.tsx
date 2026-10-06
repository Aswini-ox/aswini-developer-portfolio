"use client";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
export default function ProfilePhoto({ size = "lg", priority = false }: { size?: "lg" | "sm"; priority?: boolean }) {
  const x = useMotionValue(0), y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 18 });
  const dim = size === "lg" ? "h-64 w-64 sm:h-80 sm:w-80 lg:h-[26rem] lg:w-[26rem]" : "h-40 w-40";
  return (
    <motion.div className={`relative ${dim}`} style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); x.set((e.clientX - r.left) / r.width - 0.5); y.set((e.clientY - r.top) / r.height - 0.5); }}
      onMouseLeave={() => { x.set(0); y.set(0); }}>
      <motion.div className="h-full w-full" animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
        <div aria-hidden className="absolute -inset-4 rounded-full bg-gradient-to-tr from-electric/40 via-violet/30 to-cyan/30 blur-2xl" />
        <div aria-hidden className="absolute -inset-[3px] animate-[spin_10s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,#4f7cff,#8b5cf6,#22d3ee,#4f7cff)]" />
        <div className="glass relative h-full w-full overflow-hidden rounded-full border-4 border-ink p-1">
          <Image src="/assets/profile/photo.png" alt="Portrait of Aswini R I" fill priority={priority} sizes={size === "lg" ? "(min-width:1024px) 416px, 320px" : "160px"} className="rounded-full object-cover object-[50%_20%]" />
        </div>
      </motion.div>
    </motion.div>
  );
}
