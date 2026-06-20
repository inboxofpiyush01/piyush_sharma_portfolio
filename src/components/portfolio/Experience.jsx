import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      data-testid="experience-section"
      className="relative py-24 md:py-32 bg-[#131316]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="overline">// experience</p>
            <h2 className="mt-4 section-title text-white">
              Track record of <span className="text-gold">shipping.</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
            Three chapters — Mphasis (8 yrs) · KPMG (1.5 yrs) · Independent AI consulting (current).
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-3 md:left-5 top-2 bottom-2 w-px bg-gradient-to-b from-orange-500/70 via-orange-500/30 to-transparent" />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                data-testid={`exp-${i}`}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="relative pl-12 md:pl-20"
              >
                <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-black border-2 border-gold shadow-[0_0_24px_rgba(255,106,0,0.5)] flex items-center justify-center">
                  <Briefcase size={13} className="text-gold" />
                </div>

                <div className="glass-card p-6 md:p-10">
                  <div className="flex flex-wrap items-baseline justify-between gap-3 mb-4">
                    <div>
                      <p className="font-mono-tech text-[10px] uppercase tracking-wider text-gold">
                        {job.dates}
                      </p>
                      <h3 className="mt-2 font-display text-3xl md:text-4xl text-white tracking-tight">
                        {job.role}
                      </h3>
                      <p className="text-gold/90 font-mono-tech text-sm mt-2">{job.company}</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block font-mono-tech text-[10px] tracking-wider uppercase text-orange-300 border border-orange-300/30 px-2 py-1">
                        {job.accent}
                      </span>
                      <div className="text-xs text-gray-500 mt-2 inline-flex items-center gap-1">
                        <MapPin size={10} /> {job.location}
                      </div>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-3 text-gray-300 text-sm leading-relaxed">
                    {job.points.map((p, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="text-gold mt-2 inline-block w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span key={t} className="tag-chip">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
