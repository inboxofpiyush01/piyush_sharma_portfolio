import Nav from "@/components/portfolio/Nav";
import SideNav from "@/components/portfolio/SideNav";
import Hero from "@/components/portfolio/Hero";
import Stats from "@/components/portfolio/Stats";
import ClientsStrip from "@/components/portfolio/ClientsStrip";
import About from "@/components/portfolio/About";
import Services from "@/components/portfolio/Services";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import Learning from "@/components/portfolio/Learning";
import Journey from "@/components/portfolio/Journey";
import Certifications from "@/components/portfolio/Certifications";
import Awards from "@/components/portfolio/Awards";
import ProjectArchive from "@/components/portfolio/ProjectArchive";
import Relocation from "@/components/portfolio/Relocation";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export default function Portfolio() {
  return (
    <div data-testid="portfolio-root" className="relative">
      <Nav />
      <SideNav />
      <main className="relative z-10">
        <Hero />
        <ClientsStrip />
        <Stats />
        <About />
        <Services />
        <Experience />
        <Projects />
        <Skills />
        <Journey />
        <Learning />
        <Certifications />
        <Awards />
        <ProjectArchive />
        <Relocation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
