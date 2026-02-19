import { NavLink, SocialLink } from "@/types";

export const navLinks: NavLink[] = [
  { name: "My Story", url: "#my-story", number: "01" },
  { name: "Impact", url: "#impact", number: "02" },
  { name: "Initiatives", url: "#initiatives", number: "03" },
  { name: "Connect", url: "#connect", number: "04" },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/patrick-j-vera", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/patrick-j-vera/",
    icon: "linkedin",
  },
];

export const email = "patrick.j.vera@gmail.com";

export const siteMetadata = {
  title: "Patrick Vera",
  description:
    "Patrick Vera is a software engineer, property manager, and community organizer. He has a passion for using technology and clear design to make people's lives better. He has experience in customer service, sales, team management, UX design, and full-stack engineering.",
  siteUrl: "https://patrickjvera.com",
};
