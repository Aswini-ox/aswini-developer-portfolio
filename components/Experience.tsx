import { Brain, Cloud, Code2, Trophy, Users } from "lucide-react";
import Reveal from "./ui/Reveal";
const items = [
  { icon: Brain, t: "Data Analytics Internship — Networkz Systems (2026)", d: "Industrial training with practical exposure to data analysis concepts." },
  { icon: Cloud, t: "AWS Cloud Computing Internship — CodeEmy", d: "2-month program (certificate issued Feb 2026) covering EC2, S3, IAM, Auto Scaling and cloud deployment." },
  { icon: Code2, t: "Web Development Internship — E-Max Education (2025)", d: "15-day industrial training in HTML, CSS and JavaScript." },
  { icon: Brain, t: "AI & full-stack projects", d: "NagrikSetu, CivicMind AI, ObjectDNA and GasWise AI, built with Gemini, FastAPI, React, Spring Boot, Flask and scikit-learn." },
  { icon: Cloud, t: "Cloud projects", d: "Static hosting on S3, Auto Scaling with launch templates, multi-tier deployment and VPC networking." },
  { icon: Users, t: "Project-based learning", d: "Hackathons and technical competitions — add specifics in components/Experience.tsx." },
];
export default function Experience() {
  return (
    <section id="experience" className="section">
      <Reveal><h2 className="h2">Experience &amp; Practical Work</h2><p className="mt-3 text-slate-400">Internships, training and project work as a student developer.</p></Reveal>
      <ol className="mt-10 space-y-5 border-l border-line pl-6">
        {items.map(({ icon: I, t, d }, i) => (
          <Reveal key={t} delay={i * 0.05}><li className="relative"><span className="absolute -left-[39px] top-1 grid h-7 w-7 place-items-center rounded-full bg-panel ring-1 ring-electric/50"><I size={14} className="text-cyan" aria-hidden /></span>
            <h3 className="font-display text-white">{t}</h3><p className="text-sm text-slate-400">{d}</p></li></Reveal>))}
      </ol>
    </section>
  );
}
