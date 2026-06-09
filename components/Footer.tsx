import Link from "next/link";
import { Linkedin } from "lucide-react";

const socials = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/amy-gout",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto h-16 flex items-center justify-between gap-6">
        <p className="text-sm text-ink-muted">
          &copy; {new Date().getFullYear()} Amy Gout. Alle rechten voorbehouden.
        </p>

        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, label, href }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-ink-muted hover:text-ink transition-colors duration-200"
            >
              <Icon size={16} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
