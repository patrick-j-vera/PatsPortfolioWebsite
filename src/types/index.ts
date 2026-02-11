export interface NavLink {
  name: string;
  url: string;
  number: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Experience {
  title: string;
  organization: string;
  url: string;
  range: string;
  points: string[];
}

export interface FeaturedProject {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  external?: string;
  image: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  external?: string;
}
