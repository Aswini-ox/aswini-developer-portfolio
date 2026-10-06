"use client";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import ResumeButton from "./ui/ResumeButton";
const items = ["Home", "About", "Skills", "Projects", "Experience", "Certificates", "Achievements", "Contact"];
export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    items.forEach((i) => { const el = document.getElementById(i.toLowerCase()); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3">
      <nav aria-label="Main" className="glass mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-full px-5 py-2.5">
        <a href="#home" className="font-display text-sm font-semibold tracking-[0.18em] text-white">ASWINI<span className="text-cyan">.</span>DEV</a>
        <ul className="hidden items-center gap-0.5 xl:flex">
          {items.slice(0, -1).map((i) => { const id = i.toLowerCase(); const on = active === id; return (
            <li key={i}><a href={`#${id}`} aria-current={on ? "true" : undefined} className={`relative rounded-full px-2.5 py-1.5 text-sm transition-colors hover:text-white ${on ? "text-white" : "text-slate-400"}`}>
              {i}{on && <span className="absolute inset-x-2.5 -bottom-0.5 h-px bg-gradient-to-r from-electric to-cyan" />}</a></li>); })}
        </ul>
        <div className="hidden items-center gap-2 xl:flex"><ResumeButton className="btn-ghost !py-1.5" /><a href="#contact" className="btn-primary !py-1.5">Contact</a></div>
        <button className="xl:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
      {open && (
        <ul className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-3 xl:hidden">
          {items.map((i) => (<li key={i}><a onClick={() => setOpen(false)} href={`#${i.toLowerCase()}`} className="block rounded-xl px-4 py-3 text-slate-200 hover:bg-white/5">{i}</a></li>))}
          <li className="px-4 pb-2 pt-3"><ResumeButton className="btn-ghost" /></li>
        </ul>)}
    </header>
  );
}
