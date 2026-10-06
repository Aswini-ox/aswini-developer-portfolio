"use client";
import { useCallback, useState } from "react";
import { projects, type Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import Reveal from "./ui/Reveal";
export default function Projects() {
  const [open, setOpen] = useState<Project | null>(null);
  const close = useCallback(() => setOpen(null), []);
  return (
    <section id="projects" className="section">
      <Reveal><h2 className="h2">Projects</h2><p className="mt-3 max-w-xl text-slate-400">Practical builds across AI, full-stack, cloud and data visualization.</p></Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (<Reveal key={p.slug} delay={(i % 2) * 0.08}><ProjectCard p={p} onOpen={() => setOpen(p)} /></Reveal>))}
      </div>
      <ProjectModal p={open} onClose={close} />
    </section>
  );
}
