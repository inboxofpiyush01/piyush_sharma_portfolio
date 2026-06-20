import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Lock, ExternalLink, X, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";

const CATEGORIES = ["All", "AI / GenAI", "Automation", "Data / Analytics"];

function ProjectCard({ p, onOpen }) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(p)}
      data-testid={`project-card-${p.slug}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="project-card text-left p-7 md:p-9 group flex flex-col"
    >
      <div className="flex items-start justify-between gap-3 mb-5">
        <span className="font-mono-tech text-[10px] tracking-wider uppercase text-gray-500">
          {p.year} · {p.client}
        </span>
        <span
          className={`font-mono-tech text-[10px] tracking-wider uppercase inline-flex items-center gap-1 px-2 py-1 border ${
            p.confidential
              ? "text-orange-300 border-orange-400/30"
              : "text-emerald-300 border-emerald-400/30"
          }`}
        >
          {p.confidential ? <Lock size={10} /> : <Github size={10} />}
          {p.confidential ? "NDA" : "Public"}
        </span>
      </div>

      <h3 className="font-display text-2xl md:text-3xl text-white tracking-tight leading-tight group-hover:text-gold transition-colors">
        {p.name}
      </h3>
      <p className="mt-3 text-sm text-gray-400 leading-relaxed flex-1">{p.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {p.tech.slice(0, 5).map((t) => (
          <span key={t} className="tag-chip">{t}</span>
        ))}
      </div>

      <div className="mt-6 inline-flex items-center gap-2 text-gold text-sm font-mono-tech uppercase tracking-wider">
        case study
        <ArrowUpRight
          size={14}
          className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>
    </motion.button>
  );
}

function ProjectModal({ p, onClose }) {
  return (
    <AnimatePresence>
      {p && (
        <motion.div
          data-testid="project-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-start md:items-center justify-center p-4 md:p-8 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-3xl bg-[#131316] border border-white/10 p-6 md:p-10 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onClose(); }}
              data-testid="project-modal-close"
              aria-label="Close"
              className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center text-gray-400 hover:text-gold transition-colors"
            >
              <X size={22} className="pointer-events-none" />
            </button>

            <p className="overline">
              {p.year} · {p.client} · {p.category}
            </p>
            <h3 className="mt-3 font-display text-3xl md:text-5xl text-white tracking-tight">
              {p.name}
            </h3>
            <p className="mt-3 text-gray-300 text-base md:text-lg">{p.summary}</p>

            <div className="mt-8 space-y-6">
              <Block label="The Problem">{p.problem}</Block>
              <Block label="My Approach">{p.approach}</Block>
              <Block label="The Outcome">{p.outcome}</Block>
            </div>

            <div className="mt-8">
              <p className="font-mono-tech text-[10px] tracking-wider uppercase text-gray-500 mb-2">
                Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => <span key={t} className="tag-chip">{t}</span>)}
              </div>
            </div>

            {p.confidential && (
              <div className="mt-8 p-4 border border-orange-400/20 bg-orange-400/[0.04] text-xs text-gray-400 leading-relaxed font-mono-tech">
                <Lock size={12} className="inline mr-1 text-gold" />
                Confidential client work. Live demos / videos are not available due to NDA.
                Available on request: architecture diagrams (anonymised), workflow GIFs on
                dummy data, and a narrated walkthrough.
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  data-testid={`project-modal-github-${p.slug}`}
                  className="btn-primary text-sm"
                >
                  <Github size={14} /> View on GitHub
                </a>
              )}
              <button
                onClick={onClose}
                className="btn-secondary text-sm"
                data-testid="project-modal-close-button"
              >
                <X size={14} /> Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const Block = ({ label, children }) => (
  <div>
    <p className="font-mono-tech text-[10px] tracking-wider uppercase text-gold mb-2">{label}</p>
    <p className="text-gray-300 leading-relaxed">{children}</p>
  </div>
);

export default function Projects() {
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(
    () => projects.filter((p) => filter === "All" || p.category === filter),
    [filter]
  );

  return (
    <section
      id="projects"
      data-testid="projects-section"
      className="relative py-24 md:py-32 bg-[#0a0a0c]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="overline">// case studies</p>
            <h2 className="mt-4 section-title text-white">
              Selected <span className="text-gold">work.</span>
            </h2>
            <p className="mt-5 text-gray-400 max-w-xl text-base">
              Public GitHub builds (AI / GenAI) and flagship enterprise tools from KPMG &amp;
              Mphasis. Click any card for the full case study.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                data-testid={`projects-filter-${c}`}
                onClick={() => setFilter(c)}
                className={`filter-chip ${filter === c ? "active" : ""}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} p={p} onOpen={setActive} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 py-12">No projects in this category yet.</p>
        )}
      </div>
      <ProjectModal p={active} onClose={() => setActive(null)} />
    </section>
  );
}
