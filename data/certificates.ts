export type Certificate = { name: string; issuer: string; year: string; image: string; category: string; note?: string };
const d = "/assets/certificates/";
export const certificates: Certificate[] = [
  { name: "AWS Cloud — Certificate of Achievement", issuer: "Anapty CodeEmy Technologies", year: "2026", category: "Cloud", image: d + "aws-cloud.jpg", note: "2-month program · issued 19 Feb 2026" },
  { name: "Prompt Engineering for ChatGPT", issuer: "Great Learning", year: "2025", category: "Generative AI", image: d + "prompt.png", note: "Completed 18 Nov 2025" },
  { name: "Data Structures & Algorithms using Java", issuer: "NPTEL · IIT Kharagpur", year: "2025", category: "Core CS", image: d + "NPTEL.png", note: "12-week course" },
  { name: "SQL Developer Certification", issuer: "E-Max Education", year: "2025", category: "Database", image: d + "SQL.png", note: "Scored 90% (A+ grade)" },
  { name: "Web Development Internship", issuer: "E-Max Education", year: "2025", category: "Frontend", image: d + "web.png", note: "15-day industrial training" },
  { name: "Campus Ambassador", issuer: "Skill Intern", year: "2024", category: "Leadership", image: d + "campus.png", note: "Nov 2024" },
];
