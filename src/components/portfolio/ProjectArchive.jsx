import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, FolderArchive, Search, X, Lock, ArrowUpRight } from "lucide-react";
import { projectArchive } from "@/data/portfolio";

function ToolModal({ tool, onClose }) {
  return (
    <AnimatePresence>
      {tool && (
        <motion.div
          data-testid="archive-tool-modal"
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
            className="relative w-full max-w-2xl bg-[#131316] border border-white/10 p-6 md:p-9 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onClose(); }}
              data-testid="archive-modal-close"
              aria-label="Close"
              className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center text-gray-400 hover:text-gold transition-colors"
            >
              <X size={22} className="pointer-events-none" />
            </button>

            <p className="overline">
              {tool.year} · {tool.client} · {tool.category}
            </p>
            <h3 className="mt-3 font-display text-2xl md:text-4xl text-white tracking-tight leading-tight">
              {tool.name}
            </h3>

            <div className="mt-6 p-4 border-l-2 border-gold/40 bg-white/[0.02]">
              <p className="font-mono-tech text-[10px] tracking-wider uppercase text-gold mb-2">
                What it does
              </p>
              <p className="text-gray-300 text-base leading-relaxed">{tool.desc}</p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div>
                <p className="font-mono-tech text-[10px] tracking-wider uppercase text-gray-500 mb-1">
                  Client
                </p>
                <p className="text-white text-sm">{tool.client}</p>
              </div>
              <div>
                <p className="font-mono-tech text-[10px] tracking-wider uppercase text-gray-500 mb-1">
                  Year
                </p>
                <p className="text-white text-sm">{tool.year}</p>
              </div>
              <div className="col-span-2">
                <p className="font-mono-tech text-[10px] tracking-wider uppercase text-gray-500 mb-2">
                  Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {tool.tech.map((t) => (
                    <span key={t} className="tag-chip">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 border border-orange-400/20 bg-orange-400/[0.04] text-xs text-gray-400 leading-relaxed font-mono-tech">
              <Lock size={12} className="inline mr-1 text-gold" />
              Confidential client work. Live demo / source not available due to NDA.
              Architecture diagrams (anonymised) and dummy-data walkthroughs available on
              request.
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function ProjectArchive() {
  const [open, setOpen] = useState(true);
  const [query, setQuery] = useState("");
  const [activeTool, setActiveTool] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return projectArchive;
    return projectArchive.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.client.toLowerCase().includes(q) ||
        t.tech.join(" ").toLowerCase().includes(q) ||
        t.year.includes(q)
    );
  }, [query]);

  return (
    <section
      data-testid="archive-section"
      className="relative py-24 md:py-32 bg-[#0a0a0c]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="overline">// the archive</p>
            <h2 className="mt-4 section-title text-white">
              <span className="text-gold">250+</span> tools <br />
              shipped to production.
            </h2>
            <p className="mt-4 font-mono-tech text-xs text-gray-500 uppercase tracking-wider">
              {projectArchive.length} representative tools documented below
            </p>
          </div>
          <button
            data-testid="archive-toggle"
            onClick={() => setOpen(!open)}
            className="btn-primary"
          >
            {open ? <Minus size={14} /> : <Plus size={14} />}
            {open ? "Collapse archive" : "Expand full archive"}
          </button>
        </div>

        <p className="text-gray-400 max-w-2xl text-sm leading-relaxed mb-10">
          Over the past 9+ years I&apos;ve shipped <span className="text-white">250+ automation
          tools</span> across client engagements at Mphasis &amp; KPMG — JPMC, Charles
          Schwab, Virgin Media-UPC, Star India, SWBC. A representative sample below — click
          any tool for details. Most implementations are under NDA.
        </p>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              data-testid="archive-list"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="relative max-w-md mb-8">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                />
                <input
                  data-testid="archive-search"
                  type="text"
                  placeholder="Search tools / clients / tech / year…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-600 focus:border-gold/60 focus:outline-none transition-colors font-mono-tech"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {filtered.map((t, i) => (
                  <button
                    type="button"
                    key={t.name + i}
                    data-testid={`archive-tool-${i}`}
                    onClick={() => setActiveTool(t)}
                    className="glass-card p-5 text-left group"
                  >
                    <div className="flex items-start gap-3">
                      <FolderArchive size={16} className="text-gold flex-shrink-0 mt-1" />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm text-white group-hover:text-gold transition-colors leading-tight">
                            {t.name}
                          </p>
                          <ArrowUpRight
                            size={14}
                            className="text-gray-600 group-hover:text-gold transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0"
                          />
                        </div>
                        <p className="mt-1 font-mono-tech text-[10px] text-gold/80">
                          {t.year} · {t.client}
                        </p>
                        <p className="mt-2 text-xs text-gray-400 leading-relaxed line-clamp-2">
                          {t.desc}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {t.tech.map((tech) => (
                            <span
                              key={tech}
                              className="font-mono-tech text-[9px] text-gray-500 uppercase tracking-wider"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {filtered.length === 0 && (
                <p className="text-center text-gray-500 py-12 font-mono-tech text-sm">
                  No tools matched &ldquo;{query}&rdquo;
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <ToolModal tool={activeTool} onClose={() => setActiveTool(null)} />
    </section>
  );
}
