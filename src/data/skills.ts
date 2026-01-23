export type SkillCategory = {
  id: string;
  name: string;
  skills: string[];
};

// À remplacer par tes vraies compétences
export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    id: "backend",
    name: "Backend",
    skills: ["Node.js", "Rust", "PostgreSQL", "GraphQL", "REST APIs"],
  },
  {
    id: "tools",
    name: "Outils",
    skills: ["Git", "VS Code", "Figma", "Docker", "Vercel"],
  },
  {
    id: "illustration",
    name: "Illustration",
    skills: ["Procreate", "Adobe Illustrator", "Photoshop", "Illustration digitale"],
  },
];
