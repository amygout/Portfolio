"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="pt-36 pb-24 px-6 sm:px-10 max-w-6xl mx-auto">
      <div className="max-w-3xl">
        {/* Eyebrow */}
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-sm font-medium text-accent tracking-widest uppercase mb-6"
        >
          UX/UI &amp; Grafisch Ontwerper
        </motion.p>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-ink leading-[1.05] mb-8"
        >
          Ontwerpen voor ervaringen
          <br />
          <span className="text-ink-muted font-light italic">die voelen</span>{" "}
          als vanzelf.
        </motion.h1>

        {/* Sub-copy */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-lg text-ink-muted leading-relaxed max-w-xl"
        >
          Ik ben een junior designer met een grote passie voor visuele logica.
          Ik focus me op het vertalen van gebruikersonderzoek naar heldere,
          doordachte interfaces die zowel functioneel als esthetisch kloppen.
        </motion.p>

        {/* CTA row */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-10 flex items-center gap-6"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 bg-ink text-surface text-sm font-semibold px-6 py-3 rounded-full hover:bg-ink/80 transition-colors duration-200"
          >
            Bekijk mijn werk
            <span className="text-base">↓</span>
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-ink-muted nav-link hover:text-ink transition-colors duration-200"
          >
            Neem contact op
          </a>
        </motion.div>
      </div>
    </section>
  );
}
