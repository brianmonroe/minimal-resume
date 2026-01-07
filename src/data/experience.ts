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
    start: "June 2020",
    end: "Present",
    company: "Totally Promotional",
    location: "Coldwater, OH",
    title: "Web Developer",
    responsibilities: [
      "Develop and maintain features for large-scale e-commerce websites using ASP.NET MVC, Razor, C#, and JavaScript",
      "Implement SEO and ADA accessibility improvements to improve site compliance, usability, and search visibility",
      "Develop automated scripts for Adobe Illustrator that converts customer proofs to print-ready files",
      "Collaborate with in-house teams and external developers to deliver projects ranging from small enhancements to large feature initiatives",
    ],
  },
  {
    start: "June 2008",
    end: "Present",
    company: "Freelance/Contract",
    location: "Celina, OH",
    title: "Developer + Photographer",
    responsibilities: [
      "Design and develop small-to-mid-size websites using Astro, WordPress, Tailwind CSS, and Bootstrap",
      "Manage client projects using Git-based version control and modern deployment workflows",
      "Digital photography specializing in senior, live event, and sports photography",
      "Manage and assist with client social media pages",
    ],
  },
  {
    start: "January 2012",
    end: "May 2020",
    company: "Annie's Publishing",
    location: "Berne, IN",
    title: "Web Developer, E-Mail Marketing Associate",
    responsibilities: [
      "Convert marketing email design/content into valid HTML markup",
      "Set up mail subscriber lists and schedule/deploy email promotions",
      "Promoted to Web Developer to assist developing and mainting websites",
      "Added products to e-commerce catalog through SQL batch scripts",
    ],
  },
    {
    start: "June 2007",
    end: "June 2010 ",
    company: "Blue Laser Design",
    location: "Columbus, OH",
    title: "Web Developer, Graphic Design Intern",
    responsibilities: [
      "Began as an internship assisting developers with website UX and print design",
      "Promoted to full-time and worked directly with clients on digital and print marketing material",
    ],
  },
];
