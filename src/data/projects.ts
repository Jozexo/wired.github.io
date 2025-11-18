export type Project = {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  href: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "sentinelctl",
    slug: "sentinelctl",
    description: "CLI para hardening y auditoría rápida en sistemas Linux.",
    tags: ["linux", "security", "cli"],
    href: "#",
    repo: "https://github.com/your/sentinelctl",
  },
  {
    title: "net-mesh",
    slug: "net-mesh",
    description: "Visualizador de topología de red minimalista con capturas pcap.",
    tags: ["network", "pcap", "viz"],
    href: "#",
  },
  {
    title: "ghostwall",
    slug: "ghostwall",
    description: "Plantillas iptables/nftables opinadas con perfiles por rol.",
    tags: ["firewall", "nftables", "iptables"],
    href: "#",
    repo: "https://github.com/your/ghostwall",
  },
  {
    title: "trace-lab",
    slug: "trace-lab",
    description: "Playground para técnicas DFIR y parsing de logs.",
    tags: ["dfir", "logs", "parser"],
    href: "#",
  },
  {
    title: "wired-site",
    slug: "wired-site",
    description: "Este portafolio: Astro + estética Lain + terminal.",
    tags: ["astro", "design", "css"],
    href: "/",
  },
];
