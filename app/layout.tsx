import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amy Gout — UX/UI & Grafisch Ontwerper",
  description:
    "Portfolio van Amy Gout, een UX/UI en grafisch ontwerper die heldere, mensgerichte digitale ervaringen maakt.",
  openGraph: {
    title: "Amy Gout — UX/UI & Grafisch Ontwerper",
    description: "Portfolio van Amy Gout, een UX/UI en grafisch ontwerper.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
