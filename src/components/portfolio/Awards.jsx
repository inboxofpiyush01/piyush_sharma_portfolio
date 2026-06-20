import { motion } from "framer-motion";
import { Trophy, Award as AwardIcon } from "lucide-react";
import { awards } from "@/data/portfolio";

export default function Awards() {
  const total = awards.reduce((s, a) => s + a.count, 0);
  return (
    <section
      id="awards"
      data-testid="awards-section"
      className="relative py-24 md:py-32 bg-[#131316]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="overline">// recognition</p>
            <h2 className="mt-4 section-title text-white">
              <span className="text-gold">{total}+</span> awards. <br />
              Consistently.
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm">
            Across KPMG, Mphasis and academic years — recognising leadership, customer
            obsession and outcome-focused delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {awards.map((a, i) => (
            <motion.div
              key={a.issuer + i}
              data-testid={`award-${i}`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass-card p-6 md:p-7 relative overflow-hidden"
            >
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-orange-500/[0.07] blur-3xl" />

              <div className="flex items-start justify-between mb-4 relative">
                <div className="w-12 h-12 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center">
                  {a.issuer.toLowerCase().includes("academic") ? (
                    <AwardIcon size={20} className="text-gold" />
                  ) : (
                    <Trophy size={20} className="text-gold" />
                  )}
                </div>
                <div className="text-right">
                  <p className="font-display text-3xl text-white">×{a.count}</p>
                  <p className="font-mono-tech text-[10px] uppercase tracking-wider text-gray-500">
                    {a.count > 1 ? "awards" : "award"}
                  </p>
                </div>
              </div>

              <p className="font-mono-tech text-[10px] uppercase tracking-wider text-gold mb-1">
                {a.period}
              </p>
              <h3 className="font-display text-xl text-white tracking-tight leading-tight">
                {a.issuer}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {a.titles.map((t) => (
                  <span key={t} className="tag-chip text-[10px]">{t}</span>
                ))}
              </div>
              <p className="mt-4 text-xs text-gray-400 leading-relaxed">{a.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
