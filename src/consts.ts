import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "GASPRD.net",
  EMAIL: "reachout@gasprd.net",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION:
    "Welcome to my page ! My name is Gaspard Beunier, and you'll find here all of my work, project and posts.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION:
    "A collection of articles on whatever topics I might find interesting.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "My past and current professional experiences.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, or at least the one I want to talk about.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/1m0ut0n",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/gaspard-beunier/",
  },
];
