import { motion } from "framer-motion";
import { Brain, Code2, Cpu, Workflow } from "lucide-react";
import { skillGroups } from "@/data/portfolio";

const ICONS = { Brain, Code2, Cpu, Workflow };

function SkillBar({ skill, i }) {
  return (
    <div data-testid={`skill-${skill.name}`}>
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-sm text-white">{skill.name}</span>
        <span className="font-mono-tech text-xs text-gold">{skill.level}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      data-testid="skills-section"
      className="relative py-24 md:py-32 bg-[#131316]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="overline">// expertise</p>
            <h2 className="mt-4 section-title text-white">
              Skills &amp; <span className="text-gold">stack.</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm text-sm">
            Across AI, programming, MLOps and automation — calibrated by years of hands-on
            delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {skillGroups.map((g, i) => {
            const Icon = ICONS[g.icon] || Code2;
            return (
              <motion.div
                key={g.title}
                data-testid={`skill-group-${i}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="glass-card p-7 md:p-9"
              >
                <div className="flex items-center justify-between mb-7">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                      <Icon size={18} className="text-gold" />
                    </div>
                    <h3 className="font-display text-2xl text-white tracking-tight">
                      {g.title}
                    </h3>
                  </div>
                  <span className="font-mono-tech text-[10px] text-gray-500">
                    {String(g.skills.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="space-y-5">
                  {g.skills.map((s, j) => (
                    <SkillBar key={s.name} skill={s} i={j} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
