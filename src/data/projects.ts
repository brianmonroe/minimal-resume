export type ProjectItem = {
  type: string;
  link?: string;
  gallery?: boolean;
  icon: string;
  image: string;
  title: string;
  description: string;
  details: string[];
};

export const projects: ProjectItem[] = [
  {
    type: "Ecommerce",
    title: "Totally Promotional",
    description: "Collaborated with a small in-house and international development team to implement marketing and user-experience features across a large-scale e-commerce site built on the Znode platform.",
    icon: "ecommerce",
    image: "/images/projects/tp.webp",
    link: "https://totallypromotional.com",
    details: [
      "TotallyPromotional.com is a large-scale e-commerce site with top ranking keyword search results and high traffic volume.",
      "Worked with SEO team and consultants to implement structured data, meta tags, and other search engine optimization features.",
      "Monitored and deployed site updates to keep the site ADA compliant and accessible to all users.",
      "Troubleshoot and debugged issues with site performance, usability, and cross-browser compatibility.",
      "Worked with in-house and international development teams to implement new features and functionality.",
    ],
  },
  {
    type: "Small Business Website",
    title: "Celina Glass Company",
    description: "A clean, responsive contractor portfolio built with Astro + Bootstrap and SEO-friendly structure. This project included a domain and hosting transfer.",
    icon: "html",
    image: "/images/projects/celinaglass.webp",
    link: "http://celinaglass.com/",
    details: [
      "Designed and developed a responsive small-business website with a focus on portfolio and service content.",
      "Applied foundational SEO, performance, and mobile usability best practices.",
      "Migrated domain and hosting to a new provider, ensuring minimal downtime and proper DNS configuration.",
      "Created 301 redirects and updated internal links to maintain search engine rankings and user experience.",
      "Implemented an efficient code deployment workflow for future content updates and site maintenance.",
    ],
  },
  {
    type: "Personal Biography Website",
    title: "Angie King - State Representative",
    description: "Personal biography website for State of Ohio Representative Angie King. Built with Astro + Tailwind.",
    icon: "html",
    image: "/images/projects/angieking.webp",
    link: "https://www.kingforohio.com",
    details: [
      "Began working with Angie King in 2016 to create a basic campaign website for the Mercer County Recorder seat.",
      "Developed a campaign website for the 2022 State Representative election with a focus on biography, priorities, and updates.",
      "Eventually scaled the site to a personal biography website with a focus on constituent engagement and information.",
      "Integrated a third-party fundraising platform to allow for secure online donations and campaign contributions.",
      "Standard SEO and ADA compliance practices were implemented to ensure accessibility and search engine visibility.",
      "Implemented an efficient code deployment workflow for future content updates and site maintenance.",
    ],
  },
  {
    type: "Small Organization Website",
    title: "Celina Moose Lodge #1473",
    description: "General information and event calendar website for the Celina Moose. Featured a calender that pulls event data from Google Sheets.",
    icon: "html",
    image: "/images/projects/celinamoose.webp",
    link: "https://www.celinamoose.com",
    details: [
      "Designed and developed an informational website for the Lodge's 5,000+ members and the local community.",
      "Integrated event calendar information that is maintained through a shared Google Sheets workflow.",
      "Primary photographer for the Lodge's events and activities, providing high-quality images for the website and social media.",
      "Analyze website and social media traffic to optimize content and engagement strategies.",
      "The website serves around 1,200 unique vistors per month and approximately 3,000 page views per month, with a majority of traffic coming from mobile devices.",
      "Implemented an efficient code deployment workflow for future content updates and site maintenance.",
    ],
  },
  {
    type: "Interactive HTML/JS",
    title: "Draft Bingo Generator",
    description: "A single-file HTML/JS application that generates a custom Bingo card and ability to randomize and print a custom number of cards.",
    icon: "html",
    image: "/images/projects/moosebingo.webp",
    link: "https://celinamoose.com/hidden/nfl-draft-bingo.html",
    details: [
      "More of a hobby project to see how fast an AI agent could generate a functional web application with no external dependencies.",
      "Developed a self-contained browser application with HTML, CSS, and JavaScript.",
      "Added randomized card generation with controls for producing multiple unique cards.",
      "Created print-specific layouts for clean, practical event use.",
      "Kept the application lightweight and portable with no external framework required.",
    ],
  },
  {
    type: "Photography",
    title: "Photo Portfolio",
    description: "A collection of photography samples captured with Nikon DSLR equipment and processed in Adobe Lightroom.",
    icon: "photography",
    image: "/images/projects/photogallery.webp",
    gallery: true,
    details: [
      "Photographed portraits, sports, events, families, and community organizations.",
      "Used Nikon DSLR equipment with location-appropriate lenses and lighting techniques.",
      "Processed and organized final images through an Adobe Lightroom workflow.",
      "Prepared photographs for both high-resolution delivery and optimized web presentation.",
    ],
  },
];
