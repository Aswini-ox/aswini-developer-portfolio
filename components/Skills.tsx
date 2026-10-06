"use client";
import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import Reveal from "./ui/Reveal";
export default function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal><h2 className="h2">Skills</h2><p className="mt-3 text-slate-400">Technologies I&apos;ve used while learning and building projects.</p></Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.05}>
            <motion.div whileHover={{ y: -4 }} className="glass h-full rounded-2xl p-5 transition-colors hover:border-electric/50">
              <h3 className="font-display text-lg text-white">{c.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">{c.items.map((s) => <li key={s} className="rounded-full bg-white/5 px-3 py-1 text-sm text-slate-300">{s}</li>)}</ul>
            </motion.div>
          </Reveal>))}
      </div>
    </section>
  );
}
