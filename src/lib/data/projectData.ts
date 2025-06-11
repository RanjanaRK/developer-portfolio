export const projectsData: ProjectType[] = [
  {
    id: 1,
    name: "Task Manager",
    description:
      "Task manager is a full-stack website built using modern web technologies, including Next.js with the App Router, TypeScript, and Tailwind CSS. The project provides a smooth, dynamic user experience with features like infinite scrolling for loading posts, authentication, and personalized feeds for authenticated users.",

    repository_link: "https://github.com/RanjanaRK/task-manager",

    tech: ["nextjs", "tailwindCSS", "Shadcn ui", "directus", "jose"],
    projectImage: "/projects/task-manager.jpg",
  },
  {
    id: 2,
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
    projectImage: "/projects/portfolio.png",
  },
  {
    id: 3,
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
    id: 4,
    name: "Octagram",
    description:
      "Octagram, a Microservice Full-stack Social Media project n enabling user to share thoughts, experience with the world. Integrated Post updates, Share photos and videos, comment and like, browse and search people and profile updating features.",

    repository_link: "https://github.com/RanjanaRK/weather-forecast.git",

    tech: [
      "nextjs",
      "tailwindCSS",
      "directus",
      "typescript",
      "tanstack",
      "nextui",
      "jotai",
    ],
    projectImage: "/projects/portfolio.png",
  },
  {
    id: 5,
    name: "Portfolio",
    description:
      "this portfolio is a reflection of my jouney, feautring projects taht highlight ny creativity, technical expertise.",

    repository_link: "https://github.com/RanjanaRK/dev-portfolio-prod.git",

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
  projectImage?: any;
};
