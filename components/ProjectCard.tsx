"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface Project {
  slug: string;
  href?: string;
  bgColor?: string;
  objectFit?: "cover" | "contain";
  title: string;
  category: string;
  year: string;
  description: string;
  coverImage: string;
  tags: string[];
  /** "wide" spans 2 columns on lg screens */
  wide?: boolean;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={project.wide ? "lg:col-span-2" : ""}
    >
      <Link
        href={project.href ?? `/work/${project.slug}`}
        target={project.href ? "_blank" : undefined}
        rel={project.href ? "noopener noreferrer" : undefined}
        className="group block"
      >
        <motion.article
          whileHover={{ y: -6 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="bg-surface rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-400"
        >
          {/* Cover image */}
          <div className="relative overflow-hidden aspect-[16/9]" style={{ backgroundColor: project.bgColor ?? "#F3F2EF" }}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full"
            >
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className={project.objectFit === "contain" ? "object-contain" : "object-cover"}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>

            {/* Category pill overlay */}
            <span className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm text-ink text-[11px] font-semibold px-3 py-1 rounded-full tracking-wide uppercase">
              {project.category}
            </span>
          </div>

          {/* Card body */}
          <div className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-ink leading-snug mb-1 group-hover:text-accent transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {project.description}
                </p>
              </div>
              <span className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-ink group-hover:border-ink transition-colors duration-200">
                <ArrowUpRight
                  size={14}
                  className="text-ink-muted group-hover:text-surface transition-colors duration-200"
                />
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-medium text-ink-muted bg-background px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
              <span className="text-[11px] font-medium text-ink-muted ml-auto">
                {project.year}
              </span>
            </div>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
}
