import type { StaticImageData } from "next/image";

export type ProjectCategory = 'Branding' | 'Web Design' | 'Illustration';

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  coverImage: {
    src: string;
    hint: string;
  };
  summary: string;
  description: string;
  projectInfo: {
    client: string;
    year: number;
    services: string;
  };
  images: {
    src: string;
    hint: string;
    description?: string;
  }[];
  testimonial?: {
    text: string;
    author: string;
    company: string;
  };
  aiPrompt: {
    projectName: string;
    designChoices: string;
    outcomes: string;
    clientTestimonial?: string;
  };
};

export type Testimonial = {
  id: number;
  text: string;
  author: string;
  company: string;
  avatar: {
    src: string;
    hint: string;
  };
};

export type Skill = {
  name: string;
  proficiency: number;
};
