"use client";

import { motion, AnimatePresence } from "framer-motion";
import ProjectCard, { type Project } from "./ProjectCard";

const PROJECTS: Project[] = [
  {
    slug: "vamo-app",
    title: "Vamo — Samen Sparen App",
    category: "UX/UI Design",
    year: "2026",
    description:
      "Een mobiele app waarmee vrienden en familie eenvoudig samen sparen voor gedeelde doelen — van een weekendje weg tot een festival.",
    coverImage: "/vamo-cover.jpg",
    tags: ["UX Research", "Figma", "Mobile"],
    href: "https://www.behance.net/gallery/250592521/UXUI-Vamo-App-Case-Study",
    objectFit: "contain",
  },
  {
    slug: "360-amsterdam",
    title: "360 Amsterdam Tours — Social Media Guide",
    category: "Grafisch Ontwerp",
    year: "2025",
    description:
      "Brand guidelines voor social media: kleurenpalet, typografie en Instagram-richtlijnen voor 360 Amsterdam Tours.",
    coverImage: "/360-amsterdam-cover.jpg",
    tags: ["Brand Guidelines", "Social Media", "Typografie"],
    href: "/360-amsterdam-social-media-guide.pdf",
    bgColor: "#FBF6EB",
  },
  {
    slug: "gout-de-soleil",
    title: "Gout de Soleil — Merkidentiteit",
    category: "Grafisch Ontwerp",
    year: "2025",
    description:
      "Volledige brandbook voor een luxe mineraal zonnebrandmerk — van merkwaarden en tone of voice tot logo, kleurenpalet en typografie.",
    coverImage: "/gout-de-soleil-cover.jpg",
    tags: ["Branding", "Brandbook"],
    href: "https://www.behance.net/gallery/247983017/Gout-de-Soleil",
    bgColor: "#EDE8E0",
  },
];

export default function ProjectGrid() {
  return (
    <section id="work" className="px-6 sm:px-10 max-w-6xl mx-auto pb-32">
      {/* Section header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <div>
          <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-2">
            Geselecteerd Werk
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight">
            Projecten
          </h2>
        </div>
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
