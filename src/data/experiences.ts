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
      "Conception et maintenance de multiples outils (SaaS, app mobile, outils internes, automatisations, web) au sein d'une équipe de 6 développeurs et 3 produits.\nProjet phare : Pilote, refonte d'un logiciel legacy de 10 ans — logiciel d'administration d'espaces de travail (contrats, facturation, utilisateurs, opérations).\n• Architecture micro-services : APIs Rust, gateway GraphQL, messaging RabbitMQ\n• Frontends : back-office (Next.js + Tailwind), client (Next.js + shadcn)\n• Migration des fonctionnalités existantes et développement de nouvelles features sur stack moderne",
    technologies: ["Rust", "TypeScript", "Next.js", "React Native", "GraphQL", "Docker", "Kubernetes", "GCP", "PostgreSQL", "RabbitMQ"],
  },
  {
    id: "2",
    company: "Hôpitaux & Laboratoires",
    role: "Infirmière",
    period: "2015 - 2022",
    description:
      "Pratique du métier d'infirmière durant 7 ans en soins de suite, neurologie, psychiatrie et laboratoire d'analyses médicales.\nCompétences transférables : rigueur organisationnelle, gestion des priorités, prise de décision sous pression, collaboration pluridisciplinaire, communication empathique, adaptabilité et apprentissage continu.",
  },
  {
    id: "3",
    company: "Freelance",
    role: "Dessinatrice & Illustratrice",
    period: "Depuis plusieurs années",
    description:
      "Illustration et bande-dessinée : pratique de l'aquarelle et du dessin numérique.\n• BDs pédagogiques en laboratoire médical : supports visuels expliquant les procédures de prélèvement aux patients et enfants\n• Illustration d'un livre jeunesse (18 pages, aquarelle)\n• BDs humoristiques publiées sur Instagram (@louise.maviepassionnante)",
  },
];
