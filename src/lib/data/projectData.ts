export const projectsData: ProjectType[] = [
  {
    id: 1,
    name: "ConnectSpehre -FullStack Social media",
    description:
      "ConnectSphere is a full-stack social media app built with a monolithic Next.js architecture, powered by Prisma, PostgreSQL, and BetterAuth. It supports user registration, email verification, post sharing, friend following, likes, and comments—all wrapped in a responsive, familiar UI.",
    repository_link: "https://github.com/RanjanaRK/full-stack-social-media.git",
    tech: [
      "Next.js",
      "Shadcn/ui",
      "PostgreSQL",
      "Prisma",
      "BetterAuth",
      "Nodemailer",
    ],
    projectImage: "/projects/socialMedia.png",
  },
  {
    id: 2,
    name: "Blog App",
    description:
      "TechyBlog is a full-stack blogging platform powered by Next.js, Fastify, and Bun. It features secure authentication with JWT and bcrypt, role-based access control for admins and users, and a clean architecture with modular folders and environment setup.",
    repository_link: "https://github.com/RanjanaRK/blog-app.git",
    tech: [
      "nextjs",
      "tailwindCSS",
      "fastify",
      "prisma",
      "typescript",
      "Shadcn",
    ],
    projectImage: "/projects/blog.png",
  },
  {
    id: 3,
    name: "Task Manager",
    description:
      "Task manager is a full-stack website built using modern web technologies, including Next.js with the App Router, TypeScript, and Tailwind CSS. The project provides a smooth, dynamic user experience with features like infinite scrolling for loading posts, authentication, and personalized feeds for authenticated users.",
    repository_link: "https://github.com/RanjanaRK/task-manager.git",
    tech: ["nextjs", "tailwindCSS", "Shadcn ui", "directus", "jose"],
    projectImage: "/projects/task-manager.jpg",
  },
  {
    id: 4,
    name: "Ecom Cart",
    description:
      "Developed Ecom Cart, a dynamic and e-commerce web application with multi features. View and purchase products from collection. Easily add, remove, update items in your cart. Sign up and login to user account to access cart items and order.",
    repository_link: "https://github.com/RanjanaRK/shopping-cart.git",
    tech: [
      "nextjs",
      "tailwindCSS",
      "directus",
      "typescript",
      "Shadcn ui",
      "Stripe",
      "jose",
    ],
    projectImage: "/projects/shopCart.png",
  },
  {
    id: 5,
    name: "ClimaSync (Weather-web-app)",
    description:
      "A modern weather web app offering real-time updates based on live location, including current conditions, hourly forecasts, and a 3-day outlook. Users can seamlessly search for any city for precise weather insights, ensuring a smooth and responsive experience.",
    repository_link: "https://github.com/RanjanaRK/weather-web-app.git",
    tech: [
      "nextjs",
      "axios",
      "tailwindCSS",
      "directus",
      "typescript",
      "tanstack",
    ],
    projectImage: "/projects/climaSync.png",
  },
  {
    id: 6,
    name: "Portfolio",
    description:
      "This portfolio is a reflection of my journey, featuring projects that highlight my creativity and technical expertise.",
    repository_link: "",
    tech: [
      "nextjs",
      "tailwindCSS",
      "fastify",
      "prisma",
      "typescript",
      "tanstack",
      "nextui",
    ],
    projectImage: "/projects/portfolio.png",
  },
];

type ProjectType = {
  id: number;
  name: string;
  description: string;
  repository_link: string;
  tech: string[];
  projectImage: string;
};
