export type ExperienceItem = {
  start: string;
  end: string;
  company: string;
  title: string;
  responsibilities: string[];
};

export const experience: ExperienceItem[] = [
  {
    start: "June 2020",
    end: "Present",
    company: "Totally Promotional",
    title: "Web Developer",
    responsibilities: [
      "Maintain and develop features for company e-commerce websites (ASP.NET MVC, Razor, C#, JS).",
      "Maintain and assist with company blog (WordPress)",
      "Support SEO and ADA (Accessibility Compliance) improvements",
      "Develop automated scripts for Adobe Illustrator",
      "Collaborate with various in-house team members as well as outsourced programmers/consultants on projects of all sizes",
    ],
  },
  {
    start: "June 2008",
    end: "Present",
    company: "Freelance/Contract",
    title: "Developer + Photographer",
    responsibilities: [
      "Design and develop small websites using open soure framework (Astro, WordPress, Tailewind CSS, Bootstrap CSS)",
      "Manage sites in version control software (git)",
      "Setup development and production CI/CD environments with GitHub and hosting servers",
      "Digital photography specializing in senior, live event and sports photography",
      "Manage and assist client's social media pages",
    ],
  },
  {
    start: "January 2014",
    end: "May 2020 ",
    company: "Annie's Publishing",
    title: "Web Developer, E-Mail Marketing Associate",
    responsibilities: [
      "Convert marketing email design/content into valid HTML markup",
      "Set up mail subscriber lists and schedule/deploy email promotions",
      "Promoted to Web Developer to assist developing and mainting websites",
      "Added products to e-commerce catalog through SQL batch scripts",
    ],
  },
];
