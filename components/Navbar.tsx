"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Werk", href: "#work" },
  { label: "Over mij", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const backdropOpacity = useTransform(scrollY, [0, 60], [0, 1]);

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 20));
    return unsub;
  }, [scrollY]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Frosted glass backdrop that fades in on scroll */}
      <motion.div
        style={{ opacity: backdropOpacity }}
        className="absolute inset-0 bg-[#F5F5F3]/80 backdrop-blur-md border-b border-stone-200/60"
      />

      <nav className="relative max-w-6xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-1">
          <span className="text-[1.1rem] font-black tracking-tight text-ink leading-none select-none">
            Amy Gout
          </span>
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-accent mb-3"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          />
        </Link>

        {/* Nav links */}
        <ul className="flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="nav-link text-sm font-medium text-ink-muted hover:text-ink transition-colors duration-200"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
