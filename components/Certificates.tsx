"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Eye, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { certificates, type Certificate } from "@/data/certificates";
import Reveal from "./ui/Reveal";
import Tilt from "./ui/Tilt";
export default function Certificates() {
  const [sel, setSel] = useState<Certificate | null>(null);
  const ref = useRef<HTMLButtonElement>(null);
  const close = useCallback(() => setSel(null), []);
  useEffect(() => {
    if (!sel) return;
    const prev = document.activeElement as HTMLElement | null; ref.current?.focus(); document.body.style.overflow = "hidden";
    const k = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", k);
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; prev?.focus(); };
  }, [sel, close]);
  return (
    <section id="certificates" className="section">
      <Reveal><h2 className="h2">Certifications</h2><p className="mt-3 text-slate-400">Select a certificate to preview it.</p></Reveal>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((c, i) => (
          <Reveal key={c.name} delay={(i % 3) * 0.06}>
            <Tilt className="h-full"><article className="glass group flex h-full flex-col overflow-hidden rounded-2xl transition-shadow hover:shadow-[0_18px_50px_-20px_rgba(139,92,246,.6)]">
              <div className="relative h-48 overflow-hidden bg-white/5"><Image src={c.image} alt={`${c.name} certificate`} fill sizes="(min-width:1024px) 360px, 90vw" className="object-contain p-3 transition-transform duration-500 group-hover:scale-110" /></div>
              <div className="flex flex-1 flex-col p-5">
                <span className="mb-2 w-fit rounded-full bg-gradient-to-r from-electric/30 to-violet/30 px-2.5 py-0.5 text-xs text-cyan">{c.category}</span>
                <h3 className="font-display text-white">{c.name}</h3>
                <p className="text-sm text-slate-400">{c.issuer} · {c.year}</p>{c.note && <p className="text-xs text-slate-500">{c.note}</p>}
                <button onClick={() => setSel(c)} className="btn-ghost mt-4 w-fit !py-2"><Eye size={14} aria-hidden />View<span className="sr-only"> {c.name}</span></button>
              </div></article></Tilt>
          </Reveal>))}
      </div>
      <AnimatePresence>{sel && (
        <motion.div className="fixed inset-0 z-[60] grid place-items-center bg-black/80 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={close}>
          <motion.div role="dialog" aria-modal="true" aria-label={sel.name} onClick={(e) => e.stopPropagation()} initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="glass relative max-h-[90vh] w-full max-w-3xl overflow-auto rounded-2xl bg-panel p-4">
            <button ref={ref} onClick={close} aria-label="Close preview" className="absolute right-3 top-3 z-10 rounded-full bg-black/60 p-2"><X /></button>
            <Image src={sel.image} alt={`${sel.name} certificate`} width={900} height={700} className="mx-auto h-auto max-h-[78vh] w-auto object-contain" />
            <p className="mt-3 text-center text-sm text-slate-300">{sel.name} · {sel.issuer} · {sel.year}</p>
          </motion.div></motion.div>)}</AnimatePresence>
    </section>
  );
}
