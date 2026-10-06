"use client";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import type { Project } from "@/data/projects";
import ExternalLink from "./ui/ExternalLink";

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (<div><h3 className="font-display text-sm text-cyan">{title}</h3><div className="mt-1.5 text-slate-300">{children}</div></div>);
}
export default function ProjectModal({ p, onClose }: { p: Project | null; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!p) return;
    const prev = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const key = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", key);
    return () => { window.removeEventListener("keydown", key); document.body.style.overflow = ""; prev?.focus(); };
  }, [p, onClose]);
  return (
    <AnimatePresence>{p && (
      <motion.div className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
        <motion.div role="dialog" aria-modal="true" aria-labelledby="pm-title" onClick={(e) => e.stopPropagation()} initial={{ y: 30, scale: 0.97 }} animate={{ y: 0, scale: 1 }} exit={{ y: 20, opacity: 0 }}
          className="glass max-h-[88vh] w-full max-w-2xl space-y-5 overflow-y-auto rounded-3xl bg-panel p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div><h2 id="pm-title" className="font-display text-2xl text-white">{p.name}</h2>{p.subtitle && <p className="text-sm text-cyan">{p.subtitle}</p>}</div>
            <button ref={closeRef} onClick={onClose} aria-label="Close project details" className="rounded-full p-2 hover:bg-white/10"><X /></button>
          </div>
          {p.image && <div className="ai-cover relative h-48 overflow-hidden rounded-2xl"><Image src={p.image} alt={`${p.name} screenshot`} fill sizes="640px" className="object-contain p-3" /></div>}
          <Block title="Overview">{p.description}</Block>
          <Block title="Problem">{p.problem}</Block>
          <Block title="Solution">{p.solution}</Block>
          <Block title="Tech Stack"><ul className="flex flex-wrap gap-1.5">{p.tech.map((t) => <li key={t} className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs">{t}</li>)}</ul></Block>
          <Block title="Key Features"><ul className="list-disc space-y-1 pl-5">{p.features.map((f) => <li key={f}>{f}</li>)}</ul></Block>
          <Block title="My Role">{p.role}</Block>
          <div className="flex flex-wrap gap-2 pt-1">
            {p.github ? <ExternalLink href={p.github}>GitHub</ExternalLink> : <span className="btn-ghost opacity-50">GitHub link not provided</span>}
            {p.doc && <ExternalLink href={p.doc.href}>{p.doc.label}</ExternalLink>}
            {p.live ? <ExternalLink href={p.live} className="btn-primary">Live Demo</ExternalLink> : <span className="btn-ghost opacity-50">Live demo not available</span>}
          </div>
        </motion.div>
      </motion.div>)}</AnimatePresence>
  );
}
