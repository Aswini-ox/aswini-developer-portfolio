import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { ink: "#07080d", panel: "#0d0f18", line: "rgba(148,163,255,0.14)", electric: "#4f7cff", violet: "#8b5cf6", cyan: "#22d3ee" },
    fontFamily: { sans: ["var(--font-inter)", "system-ui", "sans-serif"], display: ["var(--font-grotesk)", "var(--font-inter)", "sans-serif"] },
  } },
  plugins: [],
};
export default config;
