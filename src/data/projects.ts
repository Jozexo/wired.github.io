export type Project = {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  href: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "wired-site",
    slug: "wired-site",
    description: "Este portafolio: Astro + estética Lain + terminal.",
    tags: ["astro", "design", "css"],
    href: "/",
    repo: "https://github.com/Jozexo/portfolio-wired",
    image: "/img/lain-glich.gif",
  },
  {
    title: "anomaly-viewer",
    slug: "anomaly-viewer",
    description: "Visualizador experimental de datos con efectos glitch y filtros fractales.",
    tags: ["three.js", "webgl", "ux"],
    href: "#", // pendiente de URL final
    repo: "https://github.com/Jozexo/anomaly-viewer",
    image: "/img/placeholder-anomaly.svg",
  },
];
