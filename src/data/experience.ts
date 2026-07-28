export type ExperienceItem = {
  start: string;
  end: string;
  company: string;
  location: string;
  title: string;
  responsibilities: string[];
};

export const experience: ExperienceItem[] = [
  {
    start: "June 2008",
    end: "Present",
    company: "Freelance/Contract",
    location: "Celina, OH",
    title: "Developer + Photographer",
    responsibilities: [
      "Design and develop responsive websites for small and midsize organizations using Astro, WordPress, Tailwind CSS, and Bootstrap",
      "Manage client projects with Git-based version control and modern deployment workflows",
      "Plan and produce senior, live event, and sports photography",
      "Create and manage content for client social media pages",
    ],
  },
  {
    start: "June 2020",
    end: "June 2026",
    company: "Totally Promotional",
    location: "Coldwater, OH",
    title: "Web Developer",
    responsibilities: [
      "Developed and maintained features for large-scale e-commerce websites using ASP.NET MVC, Razor, C#, and JavaScript",
      "Implemented technical SEO and accessibility improvements that strengthened usability, compliance, and search visibility",
      "Built Adobe Illustrator automation scripts that converted customer proofs into print-ready files",
      "Partnered with marketing, design, and development teams to deliver enhancements and large-scale feature initiatives",
    ],
  },
  {
    start: "January 2012",
    end: "May 2020",
    company: "Annie's Publishing",
    location: "Berne, IN",
    title: "Web Developer, E-Mail Marketing Associate",
    responsibilities: [
      "Supported a marketing team responsible for promoting multiple brands and membership clubs",
      "Converted campaign designs and content into responsive HTML emails",
      "Managed subscriber lists and scheduled and deployed email campaigns",
      "Earned a promotion to Web Developer and helped maintain more than 30 websites",
      "Streamlined e-commerce catalog updates using Excel batch scripts",
    ],
  },
    {
    start: "June 2007",
    end: "June 2010 ",
    company: "Blue Laser Design",
    location: "Columbus, OH",
    title: "Web Developer, Graphic Design Intern",
    responsibilities: [
      "Began as an intern, supporting developers with website UX and print design",
      "Earned a full-time role and worked directly with clients on digital and print marketing materials",
    ],
  },
];
