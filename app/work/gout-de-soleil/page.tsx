import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Gout de Soleil — Amy Gout",
  description:
    "Volledige merkidentiteit voor Gout de Soleil, een luxe mineraal zonnebrandmerk.",
};

export default function GoutDeSoleilPage() {
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
            Grafisch Ontwerp · Branding
          </p>
          <h1 className="text-4xl sm:text-6xl font-black text-ink tracking-tight leading-tight mb-6">
            Gout de Soleil
          </h1>
          <p className="text-xl text-ink-muted leading-relaxed max-w-2xl">
            Volledige merkidentiteit voor een luxe mineraal zonnebrandmerk —
            van merkwaarden en tone of voice tot logo, kleurenpalet en
            typografie. Een merk dat esthetiek en ethiek combineert.
          </p>
        </div>

        {/* Cover banner */}
        <div className="w-full mb-20">
          <img
            src="/gout-de-soleil-cover.jpg"
            alt="Gout de Soleil brandbook cover"
            className="w-full max-h-[600px] object-cover object-center"
          />
        </div>

        <div className="px-6 sm:px-10 max-w-5xl mx-auto">

          {/* Merkidentiteit */}
          <div className="mb-16">
            <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-3">
              Merkidentiteit
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-ink mb-4">
                  Missie & Visie
                </h2>
                <div className="space-y-4 text-ink-muted leading-relaxed">
                  <p>
                    Gout de Soleil brengt een nieuwe standaard in
                    zonverzorging. Een luxe-label dat 100% minerale, &apos;clean&apos;
                    zonnebrand combineert met een iconische design-fles. Waar
                    de wereld kiest voor vluchtigheid, kiezen wij voor een
                    object dat een leven lang meegaat.
                  </p>
                  <p>
                    Het merk bestaat vanuit de overtuiging dat luxe ook
                    duurzaam kan zijn — met een circulair navulsysteem als
                    kern van het concept.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Waar", value: "Aanwezig op plekken die ertoe doen — van Skins en de Bijenkorf tot de eigen webshop." },
                  { label: "Hoe", value: "Vluchtigheid vervangen door waarde. De 'Bottle for Life' is een eenmalige investering, ondersteund door een circulair navulsysteem." },
                  { label: "Wat", value: "100% mineraal, met de textuur van een high-end serum. Zonder microplastics, met maximaal respect voor de huid en de zee." },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-surface rounded-2xl p-5 shadow-card">
                    <p className="text-xs font-bold text-accent uppercase tracking-widest mb-1">{label}</p>
                    <p className="text-sm text-ink-muted leading-relaxed">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tone of Voice */}
          <div className="mb-16">
            <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-3">
              Tone of Voice
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-ink mb-6">
              Stem van het merk
            </h2>
            <p className="text-ink-muted leading-relaxed max-w-2xl mb-6">
              De stem van Gout de Soleil is kalm, zelfverzekerd en standvastig.
              Het merk hoeft niet te schreeuwen om op te vallen — kwaliteit
              en visie spreken voor zich.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Eigenwijs", "Vastberaden", "Verfijnd", "Tijdloos"].map((w) => (
                <span key={w} className="bg-surface shadow-card text-ink font-semibold px-5 py-2.5 rounded-full text-sm">
                  {w}
                </span>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div className="mb-16">
            <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-3">
              Deliverables
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-ink mb-6">
              Wat is er gemaakt?
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                "Merkstrategie",
                "Moodboard & Inspiratiecollage",
                "Logo & Patroon",
                "Kleurenpalet",
                "Typografiesysteem",
                "Tone of Voice",
                "Brandbook (22 pagina&apos;s)",
                "Retoucheerrichtlijnen",
                "Verpakkingsrichting",
              ].map((item) => (
                <div key={item} className="bg-surface rounded-xl p-4 shadow-card">
                  <p className="text-sm font-medium text-ink" dangerouslySetInnerHTML={{ __html: item }} />
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-8 border-t border-stone-200">
            {["Branding", "Brandbook", "Art Direction", "Typografie", "Kleurenpalet", "Merkstrategie", "Packaging", "Duurzaamheid"].map((tag) => (
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
