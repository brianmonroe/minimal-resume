export type ProjectItem = {
  type: string;
  link?: string;
  icon: string;
  title: string;
  description: string;
};

export const projects: ProjectItem[] = [
  {
    type: "Ecommerce",
    title: "TotallyPromotional.com",
    description: "Runs on the \"ZNode\" Platform. Have customized/modified all areas of the website.",
    icon: "ecommerce",
    link: "https://totallypromotional.com",
  },
  {
    type: "Small Business Website",
    title: "Celina Glass Company",
    description: "A clean, responsive contractor portfolio built with Astro + Bootstrap and SEO-friendly structure.",
    icon: "html",
    link: "http://brianm208.sg-host.com/",
  },
  {
    type: "Hobby App",
    title: "Golden Tee League Scoreboard",
    description: "Built for an arcade league as a personal project to track scores, automatically calculate handicaps, and manage weekly results.",
    icon: "html",
    link: "https://celinamoose.com/gtl/",
  },
  {
    type: "Political Bio Website",
    title: "Angie King - State Representative",
    description: "Personal website for State Representative Angie King. Built with Astro + Tailwind",
    icon: "html",
    link: "https://dev.kingforohio.com",
  },
  {
    type: "Photography",
    title: "Pixiset Galleries",
    description: "Photography galleries.",
    icon: "photography",
    link: "https://galleries.pixieset.com/collections",
  },
  {
    type: "Code Example",
    title: "GitHub Profile - How This Resume Was Built",
    description: "Browse the code repository for this resume.",
    icon: "github",
    link: "https://github.com/brianmonroe/minimal-resume",
  },
];
