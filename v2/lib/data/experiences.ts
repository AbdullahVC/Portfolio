export interface Experience {
  id: number;
  titleKey: string;
  companyKey: string;
  duration: string;
  descriptionKey: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    titleKey: "experience.items.fullstack.title",
    companyKey: "experience.items.fullstack.company",
    duration: "2025 ~",
    descriptionKey: "experience.items.fullstack.description",
  },
  {
    id: 2,
    titleKey: "experience.items.frontend.title",
    companyKey: "experience.items.frontend.company",
    duration: "2025",
    descriptionKey: "experience.items.frontend.description",
  },
  {
    id: 3,
    titleKey: "experience.items.backend.title",
    companyKey: "experience.items.backend.company",
    duration: "2024",
    descriptionKey: "experience.items.backend.description",
  },
  {
    id: 4,
    titleKey: "experience.items.teacher.title",
    companyKey: "experience.items.teacher.company",
    duration: "2013 — 2024",
    descriptionKey: "experience.items.teacher.description",
  },
];
