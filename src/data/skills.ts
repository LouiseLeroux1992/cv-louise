export type SkillCategory = {
  id: string;
  name: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native"],
  },
  {
    id: "backend",
    name: "Backend",
    skills: ["Rust", "GraphQL", "Node.js", "PHP", "PostgreSQL"],
  },
  {
    id: "infrastructure",
    name: "Infrastructure",
    skills: ["Docker", "Kubernetes", "GCP", "RabbitMQ", "Git/GitHub"],
  },
  {
    id: "illustration",
    name: "Illustration",
    skills: ["Aquarelle", "Dessin numérique", "Procreate", "Bande-dessinée"],
  },
];
