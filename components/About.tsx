import { GraduationCap } from "lucide-react";
import Reveal from "./ui/Reveal";
import ProfilePhoto from "./ui/ProfilePhoto";
const traits = ["Problem solving", "Quick learner", "Team player", "Attention to detail"];
export default function About() {
  return (
    <section id="about" className="section grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
      <Reveal>
        <h2 className="h2">About Me</h2>
        <p className="mt-6 max-w-xl leading-relaxed text-slate-300">I&apos;m a Computer Science Engineering student who enjoys turning ideas into working software. I started with frontend web development and cloud computing on AWS, and now build AI-powered and full-stack applications too.</p>
        <p className="mt-4 max-w-xl leading-relaxed text-slate-400">I learn by building: deploying projects, solving problems along the way, and picking up new tools as each project needs them.</p>
        <ul className="mt-6 flex flex-wrap gap-2">{traits.map((t) => <li key={t} className="glass rounded-full px-3 py-1 text-sm">{t}</li>)}</ul>
        <div className="glass mt-8 flex max-w-xl items-start gap-3 rounded-2xl p-4"><GraduationCap className="mt-0.5 shrink-0 text-cyan" aria-hidden />
          <p className="text-sm"><span className="block font-display text-white">B.E. Computer Science and Engineering</span>VSB College of Engineering Technical Campus, Coimbatore · Anna University<br />Pre-final year · Expected graduation 2028 · CGPA 8.71</p></div>
      </Reveal>
      <Reveal delay={0.15} className="grid place-items-center"><ProfilePhoto size="sm" /></Reveal>
    </section>
  );
}
