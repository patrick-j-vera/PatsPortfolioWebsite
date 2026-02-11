import { Experience, FeaturedProject, Project } from "@/types";

export const heroData = {
  greeting: "Hi there, I'm",
  name: "Patrick Vera.",
  tagline: "Here's how I made it better.",
  bio: "I'm a passionate builder and problem solver who strives to create meaningful impact through technology, community engagement, and thoughtful leadership. Every project is an opportunity to leave things better than I found them.",
  cta: "Explore My Journey",
};

export const myStoryData = {
  paragraphs: [
    "I've always been drawn to the intersection of technology and human impact. Whether it's building software that solves real problems or volunteering in my community, I believe that the most rewarding work comes from giving more than you receive.",
    "My journey has taken me through various roles where I've had the chance to lead teams, build products, and create initiatives that make a difference. I'm driven by curiosity, fueled by collaboration, and grounded in the belief that we can always do better.",
    "When I'm not working, you can find me exploring new technologies, mentoring aspiring developers, or looking for the next opportunity to contribute to something bigger than myself.",
  ],
  skills: [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Tailwind CSS",
    "PostgreSQL",
  ],
};

export const experiencesData: Experience[] = [
  {
    title: "Software Engineer",
    organization: "Impact Tech Co.",
    url: "#",
    range: "Jan 2023 — Present",
    points: [
      "Led development of a platform serving 10,000+ users in underserved communities",
      "Mentored 5 junior developers, helping them grow into confident independent contributors",
      "Architected scalable microservices infrastructure reducing response times by 40%",
      "Championed accessibility standards, achieving WCAG 2.1 AA compliance across all products",
    ],
  },
  {
    title: "Full Stack Developer",
    organization: "Community Solutions Inc.",
    url: "#",
    range: "Jun 2021 — Dec 2022",
    points: [
      "Built a volunteer management system connecting 500+ volunteers with local organizations",
      "Implemented real-time notification system improving volunteer response times by 60%",
      "Collaborated with nonprofit partners to translate complex needs into elegant technical solutions",
      "Introduced automated testing practices, increasing code coverage from 30% to 85%",
    ],
  },
  {
    title: "Junior Developer",
    organization: "GreenTech Startup",
    url: "#",
    range: "Aug 2020 — May 2021",
    points: [
      "Developed a carbon footprint tracking dashboard used by 50+ small businesses",
      "Created data visualization components that made environmental impact data accessible and actionable",
      "Participated in hackathons focused on sustainability, winning 2 awards for innovative solutions",
      "Contributed to open-source environmental monitoring tools used by researchers worldwide",
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
