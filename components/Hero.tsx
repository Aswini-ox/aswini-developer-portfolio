"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { LINKS } from "@/lib/links";
import ExternalLink from "./ui/ExternalLink";
import ResumeButton from "./ui/ResumeButton";
import ProfilePhoto from "./ui/ProfilePhoto";
const HeroScene = dynamic(() => import("./3d/HeroScene"), { ssr: false });
const v = { h: { opacity: 0, y: 20 }, s: { opacity: 1, y: 0 } };
export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0"><HeroScene /></div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/50 to-transparent" aria-hidden />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-5 pb-12 pt-28 lg:grid-cols-[1.2fr_1fr]">
        <motion.div initial="h" animate="s" transition={{ staggerChildren: 0.12, delayChildren: 0.9 }} className="order-2 lg:order-1">
          <motion.p variants={v} className="text-cyan">Hi, I&apos;m</motion.p>
          <motion.h1 variants={v} className="font-display text-5xl font-bold tracking-tight text-white sm:text-7xl">ASWINI R I</motion.h1>
          <motion.p variants={v} className="mt-3 w-fit text-lg font-medium grad-text sm:text-2xl">Software Developer | AI &amp; Frontend | Full-Stack Enthusiast</motion.p>
          <motion.p variants={v} className="mt-5 max-w-xl text-slate-400">Building practical software experiences with AI, modern frontend technologies, full-stack development, and cloud.</motion.p>
          <motion.div variants={v} className="mt-8 flex flex-wrap items-center gap-3"><a href="#projects" className="btn-primary">View My Work</a><ResumeButton className="btn-ghost" /></motion.div>
          <motion.div variants={v} className="mt-6 flex flex-wrap gap-3 text-sm">
            <ExternalLink href={LINKS.github}><Github size={15} aria-hidden />GitHub</ExternalLink>
            <ExternalLink href={LINKS.linkedin}><Linkedin size={15} aria-hidden />LinkedIn</ExternalLink>
            <ExternalLink href={`mailto:${LINKS.email}`}><Mail size={15} aria-hidden />Email</ExternalLink>
          </motion.div>
        </motion.div>
        <motion.div className="order-1 grid place-items-center lg:order-2" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7, duration: 0.8 }}>
          <ProfilePhoto priority />
        </motion.div>
      </div>
    </section>
  );
}
