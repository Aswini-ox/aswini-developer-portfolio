import { ExternalLink as Icon } from "lucide-react";
export default function ExternalLink({ href, children, className = "btn-ghost" }: { href: string; children: React.ReactNode; className?: string }) {
  const mail = href.startsWith("mailto:") || href.startsWith("tel:");
  return (
    <a href={href} className={className} {...(mail ? {} : { target: "_blank", rel: "noopener noreferrer" })}>
      {children}{!mail && <Icon size={14} aria-hidden />}{!mail && <span className="sr-only"> (opens in new tab)</span>}
    </a>
  );
}
