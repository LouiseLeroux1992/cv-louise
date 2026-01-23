export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  technologies?: string[];
};

// À remplacer par tes vraies expériences
export const experiences: Experience[] = [
  {
    id: "1",
    company: "Morning",
    role: "Développeuse Full Stack",
    period: "2022 - Présent",
    description: "Développement d'applications web en React/Next.js et APIs en Node.js/Rust.",
    technologies: ["React", "Next.js", "TypeScript", "Rust", "GraphQL"],
  },
  {
    id: "2",
    company: "Entreprise précédente",
    role: "Développeuse Frontend",
    period: "2020 - 2022",
    description: "Création d'interfaces utilisateur modernes et accessibles.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "3",
    company: "Freelance",
    role: "Illustratrice",
    period: "2018 - Présent",
    description: "Création d'illustrations pour divers clients : édition, branding, digital.",
  },
];
