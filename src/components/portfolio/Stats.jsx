import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/portfolio";

function useInView(ref) {
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const o = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setSeen(true); o.disconnect(); } },
      { threshold: 0.2 }
    );
    o.observe(ref.current);
    return () => o.disconnect();
  }, [ref]);
  return seen;
}

function Counter({ value }) {
  // Just display value (text). Animation via CSS reveal.
  return <span>{value}</span>;
}

function StatBlock({ stat, i }) {
  const ref = useRef(null);
  const seen = useInView(ref);
  return (
    <div
      ref={ref}
      data-testid={`stat-${i}`}
      className={`relative p-8 md:p-10 transition-all duration-700 ${
        seen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${i !== 0 ? "lg:border-l border-white/5" : ""}`}
    >
      <div className="font-mono-tech text-[10px] text-gray-500 uppercase tracking-wider mb-3">
        / 0{i + 1}
      </div>
      <div className="font-display text-6xl md:text-7xl text-white leading-none">
        <Counter value={stat.value} />
      </div>
      <div className="mt-4 font-display text-base md:text-lg text-gold uppercase tracking-wide">
        {stat.label}
      </div>
      <div className="mt-2 text-sm text-gray-500">{stat.sub}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section
      data-testid="stats-section"
      className="relative bg-[#0a0a0c] border-b border-white/5"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => <StatBlock key={s.label} stat={s} i={i} />)}
      </div>
    </section>
  );
}
