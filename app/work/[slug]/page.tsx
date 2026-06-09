import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6 sm:px-10 max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors duration-200 mb-12"
        >
          <ArrowLeft size={14} /> Terug naar werk
        </Link>

        <h1 className="text-4xl sm:text-5xl font-black text-ink tracking-tight mb-6">
          {title}
        </h1>
        <p className="text-ink-muted text-lg leading-relaxed max-w-2xl">
          Projectdetails volgen binnenkort. Voeg hier je projectomschrijving,
          proces en resultaten toe.
        </p>
      </main>
      <Footer />
    </>
  );
}
