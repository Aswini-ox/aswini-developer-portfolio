"use client";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { LINKS } from "@/lib/links";
import ExternalLink from "./ui/ExternalLink";
import Reveal from "./ui/Reveal";
export default function Contact() {
  const [err, setErr] = useState("");
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget); const g = (k: string) => String(f.get(k) || "").trim();
    if (!g("name") || !/^\S+@\S+\.\S+$/.test(g("email")) || !g("message")) return setErr("Enter your name, a valid email and a message.");
    setErr("");
    // No backend: opens the visitor's email app with the message pre-filled.
    window.location.href = `mailto:${LINKS.email}?subject=${encodeURIComponent(g("subject") || `Portfolio message from ${g("name")}`)}&body=${encodeURIComponent(`${g("message")}\n\nFrom: ${g("name")} (${g("email")})`)}`;
  };
  const field = "mt-1 w-full rounded-xl border border-line bg-white/5 px-4 py-3 text-white placeholder:text-slate-500";
  const row = "glass flex items-center gap-3 rounded-xl px-4 py-3 text-slate-200 transition hover:border-cyan/50 hover:text-white";
  return (
    <section id="contact" className="section">
      <div className="grid gap-10 md:grid-cols-2">
        <Reveal>
          <h2 className="h2">Let&apos;s Build Something Meaningful.</h2>
          <p className="mt-4 max-w-md text-slate-400">Have a project idea, internship opportunity, collaboration, or just want to connect? Feel free to reach out.</p>
          <ul className="mt-8 space-y-3">
            <li><a className={row} href={`mailto:${LINKS.email}`}><Mail size={18} className="text-cyan" aria-hidden /><span className="break-all">{LINKS.email}</span></a></li>
            <li><a className={row} href={LINKS.phoneHref}><Phone size={18} className="text-cyan" aria-hidden />{LINKS.phone}</a></li>
            <li><a className={row} href={LINKS.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={18} className="text-cyan" aria-hidden />LinkedIn<span className="sr-only"> (opens in new tab)</span></a></li>
            <li><a className={row} href={LINKS.github} target="_blank" rel="noopener noreferrer"><Github size={18} className="text-cyan" aria-hidden />GitHub<span className="sr-only"> (opens in new tab)</span></a></li>
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={submit} noValidate className="glass space-y-4 rounded-3xl p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">Name<input name="name" autoComplete="name" className={field} /></label>
              <label className="block text-sm">Email<input name="email" type="email" autoComplete="email" className={field} /></label>
            </div>
            <label className="block text-sm">Subject<input name="subject" className={field} /></label>
            <label className="block text-sm">Message<textarea name="message" rows={5} className={field} /></label>
            {err && <p role="alert" className="text-sm text-amber-300">{err}</p>}
            <button className="btn-primary">Send Message</button>
            <p className="text-xs text-slate-500">This opens your email app with the message ready to send. Nothing is stored on this site.</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
