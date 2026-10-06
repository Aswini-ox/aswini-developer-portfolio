import { LINKS } from "@/lib/links";
import { Github, Linkedin } from "lucide-react";
import ExternalLink from "./ui/ExternalLink";
import Reveal from "./ui/Reveal";
const list = ["AWS Cloud certificate of achievement, CodeEmy (Feb 2026)", "Data Analytics Internship, Networkz Systems (2026)", "Prompt Engineering for ChatGPT, Great Learning (2025)", "NPTEL: Data Structures and Algorithms using Java (2025)", "SQL Developer Certificate: 90% (A+ grade)", "Campus Ambassador, Skill Intern (Nov 2024)", "Hackathons, competitions & paper presentations: add details here"];
export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <Reveal><h2 className="h2">Achievements</h2><p className="mt-3 text-slate-400">Credentials from my certificates and resume.</p></Reveal>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{list.map((a) => <li key={a} className="glass rounded-xl px-4 py-3 text-slate-200">{a}</li>)}</ul>
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        <Reveal><div className="glass h-full rounded-3xl p-7"><h2 className="font-display text-2xl text-white">Explore My Code</h2>
          <p className="mt-2 text-slate-400">See the projects, experiments, and solutions I&apos;m building.</p>
          <div className="mt-5"><ExternalLink href={LINKS.github} className="btn-primary"><Github size={16} aria-hidden />View GitHub</ExternalLink></div></div></Reveal>
        <Reveal delay={0.1}><div className="glass h-full rounded-3xl p-7"><h2 className="font-display text-2xl text-white">Let&apos;s Connect</h2>
          <p className="mt-2 text-slate-400">Open to internships, fresher roles, and collaborations.</p>
          <div className="mt-5"><ExternalLink href={LINKS.linkedin} className="btn-primary"><Linkedin size={16} aria-hidden />Connect on LinkedIn</ExternalLink></div></div></Reveal>
      </div>
    </section>
  );
}
