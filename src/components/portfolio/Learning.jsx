import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { learning } from "@/data/portfolio";

const statusColor = {
  "In Progress": "text-gold border-orange-400/30",
  Active: "text-emerald-400 border-emerald-400/30",
  Planned: "text-cyan-400 border-cyan-400/30",
};

export default function Learning() {
  return (
    <section
      data-testid="learning-section"
      className="relative py-24 md:py-32 bg-[#131316]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="overline">// currently learning</p>
            <h2 className="mt-4 section-title text-white">
              Always <span className="text-gold">leveling up.</span>
            </h2>
          </div>
          <div className="font-mono-tech text-xs text-gray-500 inline-flex items-center gap-2">
            <Sparkles size={14} className="text-gold" /> live progress
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {learning.map((l, i) => (
            <motion.div
              key={l.name}
              data-testid={`learning-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass-card p-7"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-white text-lg font-medium">{l.name}</h3>
                <span
                  className={`font-mono-tech text-[10px] tracking-wider uppercase px-2 py-1 border ${statusColor[l.status]}`}
                >
                  {l.status}
                </span>
              </div>
              <div className="skill-bar-track">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${l.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="skill-bar-fill"
                />
              </div>
              <div className="mt-3 flex items-center justify-between font-mono-tech text-xs">
                <span className="text-gray-500">{l.progress}% complete</span>
                <span className="text-gold">{l.progress}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
