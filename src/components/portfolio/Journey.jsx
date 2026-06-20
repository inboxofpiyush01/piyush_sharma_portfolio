import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Briefcase, BadgeCheck } from "lucide-react";
import { journey } from "@/data/portfolio";

const TYPE_META = {
  school: { Icon: BookOpen, label: "school" },
  college: { Icon: GraduationCap, label: "college" },
  cert: { Icon: BadgeCheck, label: "certification" },
  career: { Icon: Briefcase, label: "career" },
};

export default function Journey() {
  return (
    <section
      id="journey"
      data-testid="journey-section"
      className="relative py-24 md:py-32 bg-[#0a0a0c] overflow-hidden"
    >
      <div className="absolute top-1/4 -left-1/4 w-[60%] h-[60%] bg-glow-orange opacity-30 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="overline">// the journey</p>
            <h2 className="mt-4 section-title text-white">
              School to <span className="text-gold">AI engineer.</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm text-sm">
            From Class X (CBSE, 2006) to running an independent AI consulting practice
            today — every step of the path.
          </p>
        </div>

        <div className="relative">
          {/* Center timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-orange-500/60 via-orange-500/25 to-transparent" />

          <div className="space-y-10 md:space-y-14">
            {journey.map((j, i) => {
              const { Icon, label } = TYPE_META[j.type] || TYPE_META.cert;
              const isRight = i % 2 === 1;
              return (
                <motion.div
                  key={j.title + i}
                  data-testid={`journey-${i}`}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                    isRight ? "md:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  {/* Spacer for mobile arrangement */}
                  <div className={`hidden md:block ${isRight ? "" : ""}`} />

                  {/* Card */}
                  <div className="pl-12 md:pl-0">
                    <div
                      className={`relative glass-card p-6 md:p-7 ${
                        isRight ? "md:mr-0" : "md:ml-0"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono-tech text-[10px] uppercase tracking-wider text-gold">
                          {j.period}
                        </span>
                        <span className="font-mono-tech text-[10px] uppercase tracking-wider text-gray-500 inline-flex items-center gap-1">
                          <Icon size={10} /> {label}
                        </span>
                      </div>
                      <h3 className="font-display text-xl md:text-2xl text-white tracking-tight">
                        {j.title}
                      </h3>
                      {j.place && (
                        <p className="mt-2 text-sm text-gray-400">{j.place}</p>
                      )}
                      {j.note && (
                        <p className="mt-3 text-sm text-gray-300 leading-relaxed italic border-l-2 border-gold/40 pl-3">
                          {j.note}
                        </p>
                      )}
                      {j.active && (
                        <p className="mt-3 inline-flex items-center gap-2 text-xs text-emerald-400 font-mono-tech">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          ACTIVE
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6">
                    <div className={j.active ? "tl-dot" : "tl-dot"} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
