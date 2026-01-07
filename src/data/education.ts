export type EducationItem = {
  start?: string;
  end?: string;
  institution: string;
  degree: string;
  notes?: string[];
};

export const education: EducationItem[] = [
  {
    start: "September 2005",
    end: "September 2007",
    institution: "Columbus State Community College",
    degree: "A.A.S. Interactive Media and Graphic Design",
    notes: ["Graduated with a 3.7 GPA"],
  },
];
