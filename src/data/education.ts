export type Education = {
  id: string;
  school: string;
  degree: string;
  period: string;
  description?: string;
};

// À remplacer par tes vraies formations
export const education: Education[] = [
  {
    id: "1",
    school: "École / Université",
    degree: "Master en Informatique",
    period: "2018 - 2020",
    description: "Spécialisation en développement web et génie logiciel.",
  },
  {
    id: "2",
    school: "École d'art",
    degree: "Formation Illustration",
    period: "2016 - 2018",
    description: "Techniques d'illustration traditionnelles et digitales.",
  },
];
