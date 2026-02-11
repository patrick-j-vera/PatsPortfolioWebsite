import { NavLink, SocialLink } from "@/types";

export const navLinks: NavLink[] = [
  { name: "My Story", url: "#my-story", number: "01" },
  { name: "Impact", url: "#impact", number: "02" },
  { name: "Initiatives", url: "#initiatives", number: "03" },
  { name: "Contributions", url: "#contributions", number: "04" },
  { name: "Connect", url: "#connect", number: "05" },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/patrick-j-vera", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/patrickjvera",
    icon: "linkedin",
  },
];

export const email = "patrick@example.com";

export const siteMetadata = {
  title: "Patrick Vera",
  description:
    "Patrick Vera's personal portfolio — giving more than I receive.",
  siteUrl: "https://patrickjvera.com",
};
