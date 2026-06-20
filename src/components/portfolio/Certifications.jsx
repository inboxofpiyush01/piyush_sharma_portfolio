import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { certifications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <section
      data-testid="certifications-section"
      className="relative py-24 md:py-32 bg-[#0a0a0c]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="overline">// certifications</p>
            <h2 className="mt-4 section-title text-white">
              Verified <span className="text-gold">credentials.</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm text-sm">
            From embedded systems &amp; PLC/SCADA (2011–13) to Six Sigma Black Belt and Agentic
            AI today.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((c, i) => (
            <motion.div
              key={c.name + i}
              data-testid={`certification-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="glass-card p-6 flex gap-4"
            >
              <BadgeCheck size={22} className="text-gold flex-shrink-0 mt-1" />
              <div className="flex-1">
                <p className="font-mono-tech text-[10px] uppercase tracking-wider text-gray-500">
                  {c.year}
                </p>
                <h3 className="mt-1 text-white font-medium leading-snug">{c.name}</h3>
                <p className="mt-1 font-mono-tech text-xs text-gold/80">{c.issuer}</p>
                {c.note && (
                  <p className="mt-2 text-xs text-gray-400 italic">{c.note}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
