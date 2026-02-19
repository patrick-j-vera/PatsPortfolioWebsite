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

export interface Role {
  title: string;
  range: string;
  points: string[];
}

export interface OrganizationExperience {
  organization: string;
  url: string;
  roles: Role[];
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
