export type SkillCategory = {
  id: string;
  name: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "langages",
    name: "Langages",
    skills: ["Rust", "TypeScript", "Next.js", "React Native", "GraphQL", "PHP", "Symfony"],
  },
  {
    id: "infrastructure",
    name: "Infrastructure",
    skills: ["Docker", "Kubernetes", "GCP", "PostgreSQL", "RabbitMQ"],
  },
  {
    id: "outils",
    name: "Outils",
    skills: ["Git / GitHub", "Linear", "Jira", "Figma", "Claude Code", "Webflow"],
  },
  {
    id: "illustration",
    name: "Illustration",
    skills: ["Aquarelle", "Dessin numérique", "Procreate", "Bande-dessinée", "Album jeunesse"],
  },
];
