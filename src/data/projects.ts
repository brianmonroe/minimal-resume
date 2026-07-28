export type ProjectItem = {
  type: string;
  link?: string;
  gallery?: boolean;
  icon: string;
  title: string;
  description: string;
};

export const projects: ProjectItem[] = [
  {
    type: "Ecommerce",
    title: "TotallyPromotional.com",
    description: "Collaborated with a small in-house and international development team to implement marketing and user-experience features across a large-scale e-commerce site built on the Znode platform.",
    icon: "ecommerce",
    link: "https://totallypromotional.com",
  },
  {
    type: "Small Business Website",
    title: "Celina Glass Company",
    description: "A clean, responsive contractor portfolio built with Astro + Bootstrap and SEO-friendly structure. This project included a domain and hosting transfer.",
    icon: "html",
    link: "http://celinaglass.com/",
  },
  {
    type: "Personal Biography Website",
    title: "Angie King - State Representative",
    description: "Personal biography website for State Representative Angie King. Built with Astro + Tailwind.",
    icon: "html",
    link: "https://dev.kingforohio.com",
  },
  {
    type: "Small Organization Website",
    title: "Celina Moose Lodge #1473",
    description: "General information and event calendar website for the Celina Moose. Featured a calender that pulls event data from Google Sheets.",
    icon: "html",
    link: "https://www.kingforohio.com",
  },
  {
    type: "Interactive HTML/JS",
    title: "Draft Bingo Generator",
    description: "A single-file HTML/JS application that generates a custom Bingo card and ability to randomize and print a custom number of cards.",
    icon: "html",
    link: "https://celinamoose.com/hidden/nfl-draft-bingo.html",
  },
  {
    type: "Photography",
    title: "Photo Portfolio",
    description: "A collection of photography samples captured with Nikon DSLR equipment and processed in Adobe Lightroom.",
    icon: "photography",
    gallery: true,
  },
];
