export type Education = {
  id: string;
  school: string;
  degree: string;
  period: string;
  description?: string;
};

export const education: Education[] = [
  {
    id: "1",
    school: "CNAM",
    degree: "Bases de données et optimisation en informatique",
    period: "2025",
    description: "Cours du soir en parallèle de l'activité professionnelle.",
  },
  {
    id: "2",
    school: "O'Clock",
    degree: "Titre professionnel Développeuse Web et Web Mobile",
    period: "Juil 2022 - Fév 2023",
    description: "Formation intensive de 6 mois. Titre obtenu en février 2023 à Paris.",
  },
  {
    id: "3",
    school: "IFSI Caen",
    degree: "Diplôme d'État d'Infirmière",
    period: "2012 - 2015",
    description: "Formation en soins infirmiers.",
  },
];
