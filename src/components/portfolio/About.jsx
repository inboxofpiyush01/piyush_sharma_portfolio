import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 md:py-32 bg-[#0a0a0c]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="overline">// about</p>
            <h2 className="mt-4 section-title text-white">
              The story <br /> in <span className="text-gold">numbers.</span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <p className="font-editorial text-2xl md:text-3xl leading-snug text-white">
              &ldquo;{profile.bigStatement}&rdquo;
            </p>

            <div className="mt-10 pl-6 border-l border-gold/40 space-y-5 text-gray-300 text-base leading-relaxed">
              <p>
                Spent the last <span className="text-white font-medium">9+ years</span> designing &amp;
                shipping enterprise automation that moves real numbers —{" "}
                <span className="text-gold font-medium">$5M+ in benefits</span> across Banking,
                Insurance, Healthcare and Mortgage for clients like JPMC, Charles Schwab,
                Zurich, Virgin Media-UPC and Star India.
              </p>
              <p>
                At <span className="text-white">KPMG</span> (Assistant Manager — Technical) I
                rebuilt audit &amp; assurance workflows with Python + SQL, integrating
                internal LLM tooling. At <span className="text-white">Mphasis</span> I led a
                21-developer team, owning end-to-end solution architecture across multiple
                Fortune-500 accounts.
              </p>
              <p>
                Today, I&apos;m{" "}
                <span className="text-white">transitioning into AI / GenAI engineering</span>
                {" "}— investing structured time in upskilling (Agentic AI · MLOps · NLP),
                shipping open-source builds on GitHub, and{" "}
                <span className="text-gold">consulting independently on AI use-cases</span>
                {" "}across domains while continuing select automation engagements.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-6">
              <div>
                <p className="font-mono-tech text-[10px] text-gray-500 uppercase tracking-wider">
                  Experience
                </p>
                <p className="mt-2 text-sm text-white">9+ years</p>
              </div>
              <div>
                <p className="font-mono-tech text-[10px] text-gray-500 uppercase tracking-wider">
                  Tools shipped
                </p>
                <p className="mt-2 text-sm text-white">250+ enterprise tools</p>
              </div>
              <div>
                <p className="font-mono-tech text-[10px] text-gray-500 uppercase tracking-wider">
                  Awards
                </p>
                <p className="mt-2 text-sm text-white">19+ across KPMG &amp; Mphasis</p>
              </div>
              <div>
                <p className="font-mono-tech text-[10px] text-gray-500 uppercase tracking-wider">
                  Now learning
                </p>
                <p className="mt-2 text-sm text-white">AI · GenAI · Agentic</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
