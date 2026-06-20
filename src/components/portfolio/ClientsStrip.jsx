import { clients } from "@/data/portfolio";

export default function ClientsStrip() {
  const items = [...clients, ...clients];
  return (
    <section
      data-testid="clients-section"
      className="relative py-12 border-y border-white/5 bg-[#131316] overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-6 flex items-center justify-between">
        <p className="overline">// trusted by</p>
        <p className="font-mono-tech text-[10px] text-gray-500 uppercase tracking-wider">
          {clients.length} fortune-class clients
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="marquee-track">
          {items.map((c, i) => (
            <div key={i} className="flex items-center gap-12 px-12" data-testid={`client-${i}`}>
              <span className="client-logo">{c}</span>
              <span className="text-gold/40 text-2xl">✦</span>
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0c0c0e] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0c0c0e] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
