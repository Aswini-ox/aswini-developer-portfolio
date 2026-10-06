"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, Play } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/data/projects";
import ExternalLink from "./ui/ExternalLink";

export default function ProjectCard({ p, onOpen }: { p: Project; onOpen: () => void }) {
  const x = useMotionValue(0), y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });
  const move = (e: React.MouseEvent<HTMLElement>) => { const r = e.currentTarget.getBoundingClientRect(); x.set((e.clientX - r.left) / r.width - 0.5); y.set((e.clientY - r.top) / r.height - 0.5); };
  const reset = () => { x.set(0); y.set(0); };
  return (
    <motion.article onMouseMove={move} onMouseLeave={reset} style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }} whileHover={{ y: -6 }}
      className="glass group flex h-full flex-col overflow-hidden rounded-3xl transition-shadow hover:shadow-[0_20px_60px_-20px_rgba(79,124,255,.5)]">
      <div className="ai-cover relative h-44 overflow-hidden" style={{ "--h1": p.hue[0], "--h2": p.hue[1] } as React.CSSProperties}>
        {p.image && <Image src={p.image} alt={`${p.name} screenshot`} fill sizes="(min-width:768px) 480px, 100vw" className="object-contain p-4 transition-transform duration-500 group-hover:scale-105" />}
        <div aria-hidden className="absolute -right-6 -top-6 h-40 w-40 rounded-full border border-white/20 transition-transform duration-500 group-hover:translate-x-[-12px] group-hover:scale-110" />
        <div aria-hidden className="absolute bottom-3 left-4 h-16 w-16 rounded-full border border-white/10 transition-transform duration-500 group-hover:translate-y-[-8px]" />
        <span className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs text-white">{p.tag}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl text-white">{p.name}</h3>
        {p.subtitle && <p className="mt-1 text-sm text-cyan">{p.subtitle}</p>}
        <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.description}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">{p.tech.map((t) => <li key={t} className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs transition-colors group-hover:bg-electric/20">{t}</li>)}</ul>
        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          <button onClick={onOpen} className="btn-primary !py-2">View details<span className="sr-only"> of {p.name}</span></button>
          {p.github && <ExternalLink href={p.github} className="btn-ghost !py-2"><Github size={14} aria-hidden />GitHub</ExternalLink>}
          {p.live && <ExternalLink href={p.live} className="btn-ghost !py-2"><Play size={14} aria-hidden />Live Demo</ExternalLink>}
        </div>
      </div>
    </motion.article>
  );
}
