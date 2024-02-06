import type { DocsConfig } from "~/types";

export const getDocsConfig = (_lang: string): DocsConfig => {
  return {
    mainNav: [
      {
        title: "Documentation",
        href: `/docs`,
      },
      {
        title: "Guides",
        href: `/guides`,
      },
    ],
    sidebarNav: [
      {
        id: "docs",
        title: "Getting Started",
        items: [
          {
            title: "Introduction",
            href: `/docs`,
          },
        ],
      },
      {
        id: "documentation",
        title: "Documentation",
        items: [
          {
            title: "Introduction",
            href: `/docs/documentation`,
          },
          {
            title: "Contentlayer",
            href: `/docs/in-progress`,
            disabled: true,
          },
          {
            title: "Components",
            href: `/docs/documentation/components`,
          },
          {
            title: "Code Blocks",
            href: `/docs/documentation/code-blocks`,
          },
          {
            title: "Style Guide",
            href: `/docs/documentation/style-guide`,
          },
        ],
      },
      {
        id: "blog",
        title: "Blog",
        items: [
          {
            title: "Introduction",
            href: `/docs/in-progress`,
            disabled: true,
          },
        ],
      },
      {
        id: "dashboard",
        title: "Dashboard",
        items: [
          {
            title: "Introduction",
            href: "/docs/in-progress",
            disabled: true,
          },
          {
            title: "Layouts",
            href: "/docs/in-progress",
            disabled: true,
          },
          {
            title: "Server Components",
            href: "/docs/in-progress",
            disabled: true,
          },
          {
            title: "Authentication",
            href: "/docs/in-progress",
            disabled: true,
          },
          {
            title: "Database with Prisma",
            href: "/docs/in-progress",
            disabled: true,
          },
          {
            title: "API Routes",
            href: "/docs/in-progress",
            disabled: true,
          },
        ],
      },
    ],
  };
};
