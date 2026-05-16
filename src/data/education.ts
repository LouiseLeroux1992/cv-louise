export type Education = {
  id: string;
  school: string;
  degree: Record<string, string>;
  period: string;
  description?: Record<string, string>;
};

export const education: Education[] = [
  {
    id: "1",
    school: "CNAM",
    degree: {
      fr: "Cours du soir en informatique",
      en: "Evening classes in computer science",
    },
    period: "2025",
    description: {
      fr: "Cours du soir en parallèle de l'activité professionnelle.\n• Bases de données\n• Optimisation en informatique",
      en: "Evening classes alongside full-time work.\n• Databases\n• Computer science optimization",
    },
  },
  {
    id: "2",
    school: "O'Clock",
    degree: {
      fr: "Titre professionnel Développeuse Web et Web Mobile",
      en: "Professional Certificate — Web and Mobile Developer",
    },
    period: "Juil 2022 - Jan 2023",
    description: {
      fr: "Formation intensive de 6 mois. Titre obtenu en février 2023, à Paris.",
      en: "6-month intensive bootcamp. Certificate obtained in February 2023, Paris.",
    },
  },
  {
    id: "3",
    school: "IFSI Caen",
    degree: {
      fr: "Diplôme d'État d'Infirmière",
      en: "State Diploma in Nursing",
    },
    period: "2012 - 2015",
  },
  {
    id: "4",
    school: "Nouméa",
    degree: {
      fr: "Bac Scientifique",
      en: "Scientific Baccalaureate",
    },
    period: "2009",
  },
];
