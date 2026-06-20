import { useEffect, useState } from "react";

const NAV_SECTIONS = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "journey", label: "Journey" },
  { id: "awards", label: "Awards" },
  { id: "contact", label: "Contact" },
];

export default function SideNav() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const onScroll = () => {
      const fromTop = window.scrollY + window.innerHeight * 0.35;
      let current = "top";
      for (const s of NAV_SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= fromTop) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      data-testid="side-nav"
      className="hidden lg:flex flex-col gap-3 fixed right-6 top-1/2 -translate-y-1/2 z-40"
    >
      {NAV_SECTIONS.map((s) => {
        const isActive = active === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            data-testid={`side-nav-${s.id}`}
            className="group flex items-center gap-3 justify-end"
          >
            <span
              className={`font-mono-tech text-[10px] uppercase tracking-wider transition-all duration-300 ${
                isActive
                  ? "text-gold opacity-100 translate-x-0"
                  : "text-gray-500 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
              }`}
            >
              {s.label}
            </span>
            <span
              className={`block w-2.5 h-2.5 rounded-full border transition-all duration-300 ${
                isActive
                  ? "bg-gold border-gold scale-125 shadow-[0_0_14px_rgba(255,91,31,0.6)]"
                  : "bg-transparent border-white/30 group-hover:border-gold"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}
