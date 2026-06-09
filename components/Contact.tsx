"use client";

import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="px-6 sm:px-10 max-w-6xl mx-auto pb-32">
      <div className="w-full h-px bg-stone-200 mb-24" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="bg-ink rounded-3xl px-10 py-16 text-center"
      >
        <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-4">
          Contact
        </p>
        <p className="text-stone-400 text-lg mb-10 max-w-md mx-auto">
          Beschikbaar voor een vaste rol als designer of creatieve samenwerkingen.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="mailto:amygout@live.nl"
            className="inline-flex items-center gap-2 bg-surface text-ink text-sm font-bold px-7 py-3.5 rounded-full hover:bg-accent hover:text-surface transition-colors duration-200"
          >
            <Mail size={15} />
            amygout@live.nl
          </a>
          <a
            href="/amy-gout-cv.pdf"
            download="Amy Gout - CV 2026.pdf"
            className="inline-flex items-center gap-2 bg-white/10 text-surface text-sm font-bold px-7 py-3.5 rounded-full hover:bg-white/20 transition-colors duration-200 border border-white/20"
          >
            <Download size={15} />
            Download CV
          </a>
        </div>
      </motion.div>
    </section>
  );
}
