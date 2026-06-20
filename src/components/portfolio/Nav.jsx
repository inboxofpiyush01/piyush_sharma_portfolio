import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { profile } from "@/data/portfolio";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "journey", label: "Journey" },
  { id: "awards", label: "Awards" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <a href="#top" data-testid="nav-logo" className="font-display text-2xl">
          PIYUSH<span className="text-gold">.</span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              data-testid={`nav-link-${s.id}`}
              className="font-mono-tech text-[11px] tracking-wider uppercase text-gray-400 hover:text-gold transition-colors"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <a
          href={profile.resumeUrl}
          download
          data-testid="nav-download-resume"
          className="hidden lg:inline-flex btn-primary text-sm py-2.5 px-5"
        >
          <Download size={14} /> Download CV
        </a>

        <button
          aria-label="menu"
          data-testid="nav-mobile-toggle"
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div
          data-testid="nav-mobile-overlay"
          className="lg:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl"
        >
          <div className="flex flex-col p-6 gap-5">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                data-testid={`nav-mobile-link-${s.id}`}
                className="font-mono-tech text-sm uppercase tracking-wider text-gray-300 hover:text-gold"
              >
                {s.label}
              </a>
            ))}
            <a
              href={profile.resumeUrl}
              download
              data-testid="nav-mobile-download-resume"
              className="btn-primary text-sm w-fit"
            >
              <Download size={14} /> Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
