import { relocation } from "@/data/portfolio";
import { Globe2 } from "lucide-react";

export default function Relocation() {
  const items = [...relocation, ...relocation];
  return (
    <section
      data-testid="relocation-section"
      className="relative py-16 border-y border-gold/15 bg-gradient-to-b from-[#0c0c0e] via-[#0e0e10] to-[#0c0c0e] overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Globe2 size={16} className="text-gold" />
          <p className="overline">// based in delhi/ncr · open to remote or relocation</p>
        </div>
        <p className="font-mono-tech text-[10px] text-gray-500 uppercase tracking-wider">
          delhi · remote · {relocation.length - 2} target geos
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="marquee-track faster">
          {items.map((c, i) => (
            <div
              key={i}
              className="flex items-center gap-10 px-10"
              data-testid={`relocation-${i}`}
            >
              <span
                className="font-display text-6xl md:text-8xl tracking-tight text-transparent"
                style={{ WebkitTextStroke: "1.5px rgba(255,106,0,0.75)" }}
              >
                {c}
              </span>
              <span className="text-gold text-3xl">✦</span>
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0c0c0e] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0c0c0e] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
