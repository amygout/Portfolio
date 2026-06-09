"use client";

import { motion } from "framer-motion";

const skills = [
  "UX Onderzoek",
  "Wireframing",
  "Prototyping",
  "Merkidentiteit",
  "Typografie",
  "Figma",
  "Adobe Creative Suite",
];

export default function About() {
  return (
    <section id="about" className="px-6 sm:px-10 max-w-6xl mx-auto pb-32">
      <div className="w-full h-px bg-stone-200 mb-24" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
        {/* Foto */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-1"
        >
          <div className="rounded-3xl overflow-hidden shadow-card aspect-[3/4]">
            <img
              src="/amy-gout.jpg"
              alt="Amy Gout"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-4">
            Over Mij
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight mb-3">
            Hi, ik ben Amy Gout.
          </h2>
          <p className="text-ink-muted leading-relaxed mb-6">
            Een 25-jarige junior UX-designer met een achtergrond in grafisch ontwerp en een hoofd dat nooit stopt met vragen stellen. Geboren in Zwitserland, opgegroeid in Nigtevecht en inmiddels al vijf jaar helemaal thuis in Amsterdam.
          </p>
          <div className="space-y-4 text-ink-muted leading-relaxed">
            <p>Als ik een billboard of flyer tegenkom, vraag ik me direct af:
              waarom déze keuze? Wat is de échte boodschap? Die nieuwsgierigheid
              bracht me van grafisch ontwerp naar UX, de plek waar visueel
              denken en diepe empathie voor de gebruiker samenkomen.
            </p>
            <p>
              Van nature ben ik iemand die eerst observeert en luistert voordat
              ze spreekt. Ik vind rust en structuur in complexe vraagstukken,
              denk liever een stap te lang na dan een stap te snel, en geloof
              dat goed ontwerp begint bij het écht begrijpen van de gebruiker.
            </p>
          </div>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink border-b border-ink pb-0.5 hover:text-accent hover:border-accent transition-colors duration-200"
          >
            Get in touch →
          </a>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-2 flex flex-wrap gap-3"
        >
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="bg-surface shadow-card text-ink text-sm font-medium px-5 py-2.5 rounded-full"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
