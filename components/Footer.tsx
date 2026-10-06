import { LINKS } from "@/lib/links";
import ExternalLink from "./ui/ExternalLink";
export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 px-5 py-10 md:flex-row md:items-center">
        <div><p className="font-display text-lg tracking-[0.18em] text-white">ASWINI.DEV</p><p className="text-sm text-slate-400">Software Developer | AI &amp; Frontend | Full-Stack Enthusiast</p></div>
        <div className="flex flex-wrap gap-3 text-sm"><ExternalLink href={`mailto:${LINKS.email}`}>Email</ExternalLink><ExternalLink href={LINKS.phoneHref}>{LINKS.phone}</ExternalLink><ExternalLink href={LINKS.github}>GitHub</ExternalLink><ExternalLink href={LINKS.linkedin}>LinkedIn</ExternalLink></div>
      </div>
      <p className="pb-8 text-center text-xs text-slate-500">© 2026 Aswini R I</p>
    </footer>
  );
}
