import { Download } from "lucide-react";
import { LINKS } from "@/lib/links";
export default function ResumeButton({ className = "btn-primary" }: { className?: string }) {
  return <a href={LINKS.resume} download="Aswini_R_I_Resume.pdf" className={className}><Download size={16} aria-hidden />Download Resume</a>;
}
