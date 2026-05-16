export type Experience = {
  id: string;
  company: string;
  role: Record<string, string>;
  period: Record<string, string>;
  description: Record<string, string>;
  technologies?: string[];
};

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Morning",
    role: {
      fr: "Développeuse Fullstack",
      en: "Fullstack Developer",
    },
    period: {
      fr: "Mars 2023 - Présent",
      en: "March 2023 - Present",
    },
    description: {
      fr: "Au sein d'une équipe technique de 10 personnes, développement et maintenance de plusieurs outils (logiciel SaaS, application mobile, outils de gestion interne, automatisations, site web) au service des équipes et des clients.\nProjet phare : Pilote, refonte d'un logiciel legacy de 10 ans — logiciel d'administration d'espaces de travail (contrats, facturation, utilisateurs, opérations).\n• Architecture micro-services : APIs Rust, gateway GraphQL, messaging RabbitMQ\n• Frontends : back-office (Next.js + Tailwind), client (Next.js + shadcn)\n• Migration des fonctionnalités existantes et développement de nouvelles features sur stack moderne\n\nÉgalement secrétaire du CSE : rédaction des procès-verbaux, organisation des réunions, relais entre salariés et direction.",
      en: "Within a 10-person technical team, development and maintenance of multiple tools (SaaS software, mobile app, internal management tools, automations, website) for teams and clients.\nFlagship project: Pilote, rewrite of a 10-year legacy software — workspace administration (contracts, billing, users, operations).\n• Micro-services architecture: Rust APIs, GraphQL gateway, RabbitMQ messaging\n• Frontends: back-office (Next.js + Tailwind), client (Next.js + shadcn)\n• Migration of existing features and development of new features on modern stack\n\nAlso CSE secretary (works council): writing minutes, organizing meetings, liaison between employees and management.",
    },
    technologies: ["Rust", "TypeScript", "Next.js", "React Native", "GraphQL", "PHP", "Symfony", "Docker", "Kubernetes", "GCP", "PostgreSQL", "Webflow"],
  },
  {
    id: "2",
    company: "Hôpitaux & Laboratoires",
    role: {
      fr: "Infirmière",
      en: "Nurse",
    },
    period: {
      fr: "2015 - 2022",
      en: "2015 - 2022",
    },
    description: {
      fr: "Pratique du métier d'infirmière durant 7 ans en soins de suite, neurologie, psychiatrie et laboratoire d'analyses médicales.\nCompétences transférables : rigueur organisationnelle, gestion des priorités, prise de décision sous pression, collaboration pluridisciplinaire, communication empathique, adaptabilité et apprentissage continu.",
      en: "7 years as a nurse in rehabilitation, neurology, psychiatry, and medical analysis laboratory.\nTransferable skills: organizational rigor, priority management, decision-making under pressure, multidisciplinary collaboration, empathetic communication, adaptability, and continuous learning.",
    },
  },
  {
    id: "3",
    company: "Freelance",
    role: {
      fr: "Dessinatrice & Illustratrice",
      en: "Artist & Illustrator",
    },
    period: {
      fr: "Depuis plusieurs années",
      en: "For several years",
    },
    description: {
      fr: "Illustration et bande-dessinée : pratique de l'aquarelle et du dessin numérique.\n• BDs pédagogiques en laboratoire médical : supports visuels expliquant les procédures de prélèvement aux patients et enfants\n• Illustration d'un livre jeunesse (18 pages, aquarelle)\n• BDs humoristiques publiées sur Instagram (@louise.maviepassionnante)",
      en: "Illustration and comics: watercolor and digital drawing.\n• Educational comics for a medical laboratory: visual aids explaining sampling procedures to patients and children\n• Children's book illustration (18 pages, watercolor)\n• Humorous comics published on Instagram (@louise.maviepassionnante)",
    },
  },
];
