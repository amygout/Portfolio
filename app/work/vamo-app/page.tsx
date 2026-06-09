import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Vamo App — Amy Gout",
  description:
    "UX/UI case study: Vamo, een mobiele app waarmee vrienden samen sparen voor gedeelde doelen.",
};

export default function VamoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        {/* Hero */}
        <div className="px-6 sm:px-10 max-w-5xl mx-auto mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors duration-200 mb-10"
          >
            <ArrowLeft size={14} /> Terug naar werk
          </Link>

          <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-4">
            UX/UI Design · 2026
          </p>
          <h1 className="text-4xl sm:text-6xl font-black text-ink tracking-tight leading-tight mb-6">
            Vamo — Samen sparen,
            <br />
            makkelijker dan ooit.
          </h1>
          <p className="text-xl text-ink-muted leading-relaxed max-w-2xl">
            Een mobiele app waarmee vrienden en familie eenvoudig samen sparen
            voor gedeelde doelen — van een weekendje weg tot een festival.
          </p>
        </div>

        {/* Cover */}
        <div className="w-full mb-20 bg-[#EEECF0]">
          <img
            src="/vamo-cover.jpg"
            alt="Vamo app cover"
            className="w-full max-h-[600px] object-cover object-center"
          />
        </div>

        <div className="px-6 sm:px-10 max-w-5xl mx-auto">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-20">
            {[
              { label: "Schermen", value: "18+" },
              { label: "Weken", value: "4" },
              { label: "Tool", value: "Figma" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-surface rounded-2xl p-6 shadow-card text-center">
                <p className="text-3xl font-black text-ink mb-1">{value}</p>
                <p className="text-sm text-ink-muted">{label}</p>
              </div>
            ))}
          </div>

          {/* Probleem */}
          <div className="mb-16">
            <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-3">
              Het Probleem
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-ink mb-8">
              Waarom bestaat Vamo?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { emoji: "🔀", title: "Geen centrale plek", desc: "Tikkie, WhatsApp, een spreadsheet? Er is geen centrale plek." },
                { emoji: "❓", title: "Geen overzicht", desc: "Wie heeft hoeveel betaald? Hoeveel is er nog nodig? Niemand weet het precies." },
                { emoji: "😬", title: "Sociaal ongemak", desc: "Iemand herinneren aan een bijdrage voelt onprettig, het blijft daardoor liggen." },
                { emoji: "📉", title: "Geen motivatie", desc: "Zonder zichtbare vooruitgang verlies je het gevoel van richting en haak je af." },
              ].map(({ emoji, title, desc }) => (
                <div key={title} className="bg-surface rounded-2xl p-6 shadow-card">
                  <p className="text-2xl mb-3">{emoji}</p>
                  <h3 className="font-bold text-ink mb-2">{title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Oplossing */}
          <div className="mb-16">
            <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-3">
              De Oplossing
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-ink mb-4">
              UX Design
            </h2>
            <p className="text-ink-muted leading-relaxed max-w-2xl mb-8">
              De app is opgebouwd rond vier hoofdsecties via een duidelijke
              informatiearchitectuur — zodat gebruikers altijd weten waar ze
              zijn en wat ze kunnen doen. De twee kernflows tonen hoe een
              gebruiker een doel aanmaakt of aansluit bij een bestaand doel.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { step: "01", title: "Conceptbepaling", desc: "Idee en informatiearchitectuur uitwerken" },
                { step: "02", title: "Lo-fi Wireframes", desc: "Structuur valideren zonder afleiding van kleur" },
                { step: "03", title: "Hi-fi UI Design", desc: "Visueel systeem uitwerken in Figma" },
              ].map(({ step, title, desc }) => (
                <div key={step} className="bg-surface rounded-2xl p-6 shadow-card">
                  <p className="text-xs font-bold text-accent mb-3">{step}</p>
                  <h3 className="font-bold text-ink mb-2">{title}</h3>
                  <p className="text-sm text-ink-muted">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Kleur & Typografie */}
          <div className="mb-16">
            <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-3">
              UI Design
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-ink mb-6">
              Kleurenpalet
            </h2>
            <div className="flex flex-wrap gap-4">
              {[
                { color: "#2E1A3D", name: "Paars", hex: "#2E1A3D", light: false },
                { color: "#FF5E4D", name: "Koraal", hex: "#FF5E4D", light: false },
                { color: "#FFC72C", name: "Geel", hex: "#FFC72C", light: true },
                { color: "#F3F4F6", name: "Grijs", hex: "#F3F4F6", light: true },
                { color: "#FFFFFF", name: "Wit", hex: "#FFFFFF", light: true },
              ].map(({ color, name, hex, light }) => (
                <div key={name} className="flex flex-col items-center gap-2">
                  <div
                    className="w-16 h-16 rounded-2xl border border-stone-200 shadow-card"
                    style={{ backgroundColor: color }}
                  />
                  <p className="text-xs font-semibold text-ink">{name}</p>
                  <p className="text-[10px] text-ink-muted font-mono">{hex}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-8 border-t border-stone-200">
            {["UX Research", "Informatiearchitectuur", "Wireframing", "Prototyping", "UI Design", "Figma", "Mobile", "iOS"].map((tag) => (
              <span key={tag} className="text-xs font-medium text-ink-muted bg-background px-3 py-1.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
