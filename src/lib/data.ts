import { FeaturedProject, OrganizationExperience, Project } from "@/types";

export const heroData = {
  greeting: "Hi there, I'm",
  name: "Patrick Vera.",
  tagline: "Here's how I made it better.",
  bio: "Every interaction is an opportunity to leave things better than it was found. My story shows how I've lifted those around me through technology, leadership, and community impact.",
  cta: "Learn My Story",
};

export const myStoryData = {
  paragraphs: [
    "I am passionate about connecting people with technology. My journey gives me experience in customer service, sales, team management, UX design, and full-stack engineering. This unique perspective allows me to coordinate seamlessly with my peers.",
    "My focus continues to be on how to use technology to make people’s lives better. I am an experienced full-stack developer with an emphasis on accessible UX design. I am thrilled when the design makes an experience easy for people of all generations to use.",
    "Beyond coding, I enjoy developing people and communities. I have a knack for troubleshooting client issues, for automating business tasks, and for building diverse consensus.",
  ],
  skills: [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "Kafka",
    "Neon",
    "Vercel",
  ],
};

export const experiencesData: OrganizationExperience[] = [
  {
    organization: "Bloomberg L.P.",
    url: "https://www.bloomberg.com/",
    roles: [
      {
        title: "Software Engineer",
        range: "June 2019 — December 2025",
        points: [
          "Engaged in greenfield initiatives to redesign client workflows unlocking new revenue streams in ETF Primary Markets and Order Management Space",
          "Implemented and rolled out REST APIs tasked with ingesting ~$300M in daily portfolio data volume",
          "Designed internal tools to streamline client data feed access, reducing operational complexity and enabling handoff from engineers to the implementation team, freeing ~4% of engineering capacity",
          "Built a curriculum for non-technical staff to move to technical roles that was adopted by HR, resulting in 8+ internal promotions to engineering roles",
        ],
      },
      {
        title: "Acquisitions and Integration Specialist",
        range: "Feb 2018 — June 2019",
        points: [
          "Served as a technical consultant on a high stake $800M acquisition, diagnosing and explaining market value and price discrepancies between portfolio systems",
          "Presented findings to senior stakeholders, influencing engineering and product decisions",
          "Reconciled $250M+ in valuation discrepancies through personally developed technical solutions",
        ],
      },
      {
        title: "Product Experience Lead",
        range: "May 2015 — Feb 2018",
        points: [
          "Led a firm-wide initiative to provide a consistent user experience across 95% of products",
          "Collaborated with business, engineers, and designers to agree on a 300+ item UX checklist",
          "Developed new design patterns with the help of UX and engineering counterparts that were successfully adopted in 78% of situations inside 4 months, according to an internal study",
        ],
      },
      {
        title: "Financial Sales and Analytics Specialist",
        range: "Aug 2014 — May 2015",
        points: [
          "Balanced engaging 4 financial clients at once to resolve issues quickly, while seeking additional opportunities to provide value, all while maintaining a 96%+ client satisfaction rating",
          "Specialized in broad equity and fixed income products, serving as a technical consultant for my team",
        ],
      },
    ],
  },
  {
    organization: "Idaho White Glove LLC",
    url: "https://www.idahowhiteglove.com/",
    roles: [
      {
        title: "General Manager",
        range: "Aug 2020 — May 2021",
        points: [
          "Managed a team of 60+ employees across 5+ locations to coordinate end of term apartment cleaning for students",
          "Hired, trained, and organized teams to provide a high quality service, while maintaining a 4.9/5 average customer rating",
          "Through reputation and sales efforts, new business contracts were added growing annual revenue by 11%",
        ],
      },
    ],
  },
  {
    organization: "Church of Jesus Christ of Latter-day Saints",
    url: "https://www.churchofjesuschrist.org/",
    roles: [
      {
        title: "Volunteer in Rosario, Argentina",
        range: "October 2009 — October 2011",
        points: [
          "Provided community service and humanitarian aid to those in Santa Fe, Entre Rios, and Buenos Aires provinces of Argentina",
          "Responsible for weekly newsletters, passport and visa processing, and coordinating logistics for a team of 50+ volunteers",
          "Worked with local leaders to organize service projects and community engagement efforts",
          "Strived to go about doing good",
        ],
      },
    ],
  },
];

export const featuredProjectsData: FeaturedProject[] = [
  {
    title: "Community Connect Platform",
    description:
      "A platform that bridges the gap between volunteers and local organizations in need. Features real-time matching, event coordination, and impact tracking to maximize community benefit.",
    tech: ["React", "Node.js", "PostgreSQL", "Socket.io", "Mapbox"],
    github: "https://github.com",
    external: "https://example.com",
    image: "/images/project-placeholder.svg",
  },
  {
    title: "EcoTrack Dashboard",
    description:
      "An interactive dashboard helping small businesses track and reduce their environmental footprint. Provides actionable insights through beautiful data visualizations and personalized recommendations.",
    tech: ["Next.js", "D3.js", "Python", "FastAPI", "AWS"],
    github: "https://github.com",
    external: "https://example.com",
    image: "/images/project-placeholder.svg",
  },
  {
    title: "MentorMatch",
    description:
      "A mentorship platform connecting experienced professionals with aspiring developers from underrepresented backgrounds. Includes scheduling, progress tracking, and resource sharing.",
    tech: ["TypeScript", "React", "Firebase", "Tailwind CSS"],
    github: "https://github.com",
    image: "/images/project-placeholder.svg",
  },
];

export const projectsData: Project[] = [
  {
    title: "Open Source Accessibility Toolkit",
    description:
      "A collection of React components and utilities designed to make web accessibility easier for developers.",
    tech: ["React", "TypeScript", "Jest", "Storybook"],
    github: "https://github.com",
  },
  {
    title: "Neighborhood Watch App",
    description:
      "A mobile-friendly web app for community safety reporting and neighborhood coordination.",
    tech: ["React Native", "Firebase", "Google Maps API"],
    github: "https://github.com",
    external: "https://example.com",
  },
  {
    title: "Food Rescue Coordinator",
    description:
      "A logistics tool connecting restaurants with surplus food to local shelters and food banks.",
    tech: ["Vue.js", "Express", "MongoDB", "Twilio"],
    github: "https://github.com",
  },
  {
    title: "Study Buddy Finder",
    description:
      "A peer-to-peer learning platform matching students by subject, schedule, and learning style.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "NextAuth"],
    github: "https://github.com",
  },
  {
    title: "Donation Tracker",
    description:
      "A personal finance tool for tracking charitable donations with tax reporting and impact summaries.",
    tech: ["React", "Chart.js", "Node.js", "Stripe"],
    github: "https://github.com",
  },
  {
    title: "Volunteer Hour Logger",
    description:
      "A simple, elegant tool for volunteers to log hours, generate reports, and share their impact stories.",
    tech: ["Svelte", "Supabase", "Tailwind CSS"],
    github: "https://github.com",
  },
];

export const connectData = {
  heading: "Let's Connect",
  message:
    "I'm always looking for new opportunities to make a positive impact. Whether you have a project idea, want to collaborate, or just want to say hello — my inbox is always open.",
  cta: "Say Hello",
};
