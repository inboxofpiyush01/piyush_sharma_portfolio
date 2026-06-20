import { motion } from "framer-motion";
import { Brain, Workflow, Wrench, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    icon: Brain,
    name: "AI / GenAI Engineering",
    blurb:
      "Production-grade RAG, multi-agent systems and LLM integrations. From prototype to deployed pipeline.",
    points: [
      "LangChain · CrewAI · LangGraph",
      "RAG · vector search · embeddings",
      "Streamlit / Gradio / FastAPI delivery",
    ],
    badge: "Most in-demand",
  },
  {
    icon: Workflow,
    name: "Enterprise Automation",
    blurb:
      "RPA and process automation across Web, Office, Mainframe & APIs — the discipline that delivered $5M+.",
    points: [
      "Python · VBA · SQL Server",
      "Blue Prism · UiPath · Automation Anywhere",
      "End-to-end workflow design",
    ],
    badge: "9+ yrs experience",
  },
  {
    icon: Wrench,
    name: "Custom Tool Development",
    blurb:
      "Bespoke productivity & QC tools tailored to your workflow — turn manual hours into one-click operations.",
    points: [
      "Internal dashboards · data tools",
      "MS Office automation · reporting",
      "Integration with legacy systems",
    ],
    badge: "Quick turnaround",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative py-24 md:py-32 bg-[#0a0a0c]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="overline">// what i offer</p>
            <h2 className="mt-4 section-title text-white">
              How I can <span className="text-gold">help.</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm text-sm">
            Three capabilities I bring to any team or project — calibrated by a decade of
            enterprise delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.name}
              data-testid={`service-${i}`}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass-card p-7 md:p-8 group relative overflow-hidden flex flex-col"
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-orange-500/[0.07] blur-3xl group-hover:bg-orange-500/[0.14] transition-colors" />

              <div className="flex items-start justify-between mb-6 relative">
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                  <s.icon size={20} className="text-gold" />
                </div>
                <span className="font-mono-tech text-[10px] uppercase tracking-wider text-orange-300 border border-orange-300/30 px-2 py-1">
                  {s.badge}
                </span>
              </div>

              <h3 className="font-display text-3xl text-white tracking-tight leading-tight">
                {s.name}
              </h3>
              <p className="mt-3 text-sm text-gray-400 leading-relaxed flex-1">{s.blurb}</p>

              <ul className="mt-5 space-y-2 text-sm text-gray-300">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 font-mono-tech text-xs">
                    <span className="w-1 h-1 mt-2 rounded-full bg-gold flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                data-testid={`service-cta-${i}`}
                className="mt-6 inline-flex items-center gap-2 text-gold text-sm font-mono-tech uppercase tracking-wider group-hover:translate-x-1 transition-transform"
              >
                Hire for this <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
