import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main>
          <Hero />
          <ProjectGrid />
          <About />
          <Contact />
        </main>
        <Footer />
      </PageTransition>
    </>
  );
}
