import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk", display: "swap" });
const title = "Aswini R I | Software Developer | AI & Frontend";
const description = "Portfolio of Aswini R I — Software Developer focused on AI, frontend development, full-stack applications, and cloud technologies.";
export const metadata: Metadata = {
  title, description,
  metadataBase: new URL("https://aswini-frontend-portfolio-7s1cyq7j.vercel.app"),
  openGraph: { title, description, type: "website", url: "https://aswini-frontend-portfolio-7s1cyq7j.vercel.app" },
  twitter: { card: "summary", title, description },
  icons: { icon: "/favicon.svg" },
};
export const viewport: Viewport = { themeColor: "#07080d" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={`${inter.variable} ${grotesk.variable}`}><body className="font-sans">{children}</body></html>);
}
