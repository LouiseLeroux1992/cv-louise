export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  technologies?: string[];
};

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Morning",
    role: "Développeuse Fullstack",
    period: "Mars 2023 - Présent",
    description:
      "Conception et maintenance de multiples outils (SaaS, app mobile, outils internes) au sein d'une équipe de 6 développeurs.\nProjet phare : Pilote, refonte d'un logiciel legacy en architecture microservices.",
    technologies: ["Rust", "TypeScript", "Next.js", "GraphQL", "Docker", "Kubernetes", "GCP"],
  },
  {
    id: "2",
    company: "Hôpitaux & Laboratoires",
    role: "Infirmière",
    period: "2015 - 2022",
    description:
      "7 ans d'exercice en soins de suite, neurologie, psychiatrie et laboratoire d'analyses médicales.\nCompétences transférables : rigueur organisationnelle, gestion des priorités, prise de décision sous pression, collaboration pluridisciplinaire.",
  },
  {
    id: "3",
    company: "Freelance",
    role: "Illustratrice & Dessinatrice",
    period: "Depuis plusieurs années",
    description:
      "Illustration et bande-dessinée : aquarelle et dessin numérique. Réalisations : livre jeunesse (18 pages, aquarelle), BDs pédagogiques en laboratoire médical, BDs humoristiques sur Instagram (@louise.maviepassionnante).",
  },
];
