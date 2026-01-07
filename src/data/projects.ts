export type ProjectItem = {
  type: string;
  link?: string;
  image: string;
  title: string;
  description: string;
};

export const projects: ProjectItem[] = [
  {
    type: "Ecommerce",
    title: "TotallyPromotional.com",
    description: "Runs on the \"ZNode\" Platform. Have customized/modified all areas of the website.",
    image: "/images/projects/totes.png",
    link: "https://totallypromotional.com",
  },
  {
    type: "Small Business Website",
    title: "Celina Glass Company",
    description: "A clean, responsive contractor portfolio built with Astro + Bootstrap and SEO-friendly structure.",
    image: "/images/projects/celinaglass.png",
    link: "",
  },
  {
    type: "Hobby App",
    title: "Golden Tee League Scoreboard",
    description: "Built for an arcade league, mainly just for fun as an easier way to keep track of scores. Auto-calculates handicap and totals.",
    image: "/images/projects/gtl.png",
    link: "",
  },
  {
    type: "Political Bio Website",
    title: "Angie King - State Representative",
    description: "Personal website for State Representative Angie King. Built with Astro + Tailwind",
    image: "/images/projects/angiel.png",
    link: "https://dev.kingforohio.com",
  },
  {
    type: "Photography",
    title: "Pixiset Galleries",
    description: "Photography galleries.",
    image: "/images/projects/angiel.png",
    link: "https://galleries.pixieset.com/collections",
  },
  {
    type: "Code Example",
    title: "GitHub Profile - How This Resume Was Built",
    description: "Browse the code repository for this resume.",
    image: "/images/projects/angiel.png",
    link: "https://github.com/brianmonroe/minimal-resume",
  },
];
