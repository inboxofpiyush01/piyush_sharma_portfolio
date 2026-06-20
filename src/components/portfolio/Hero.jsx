import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Mail,
  Github,
  Linkedin,
  MapPin,
  ArrowDown,
  Sparkles,
} from "lucide-react";
import { profile } from "@/data/portfolio";

const ROLES = profile.tagline;

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-[100vh] pt-28 pb-16 overflow-hidden bg-[#0a0a0c]"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-glow-orange opacity-60 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-end pt-12">
        {/* Left column — content */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            data-testid="hero-overline"
            className="overline mb-6 flex flex-wrap items-center gap-3"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400">available</span>
            <span className="text-gray-600">/</span>
            <span>delhi · india</span>
          </motion.div>

          <motion.h1
            data-testid="hero-name"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hero-name text-white"
          >
            {profile.firstName}
            <br />
            <span className="sweep-text">{profile.lastName}.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 flex items-center gap-3 text-lg sm:text-xl text-gray-200"
            data-testid="hero-tagline"
          >
            <span className="text-gold font-mono-tech">{">"}</span>
            <span className="font-mono-tech">{ROLES[roleIdx]}</span>
            <span className="inline-block w-2.5 h-5 bg-gold blink" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-gray-400"
            data-testid="hero-summary"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href={profile.resumeUrl}
              download
              data-testid="hero-cta-download"
              className="btn-primary"
            >
              <Download size={16} /> Download CV
            </a>
            <a href="#contact" data-testid="hero-cta-contact" className="btn-secondary">
              <Mail size={16} /> Hire Me
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              data-testid="hero-cta-github"
              className="btn-secondary"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              data-testid="hero-cta-linkedin"
              className="btn-secondary"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-10 flex flex-wrap items-center gap-6 text-sm text-gray-400 font-mono-tech"
          >
            <span className="inline-flex items-center gap-2">
              <MapPin size={14} className="text-gold" /> {profile.location}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 hover:text-gold transition-colors"
            >
              <Mail size={14} className="text-gold" /> {profile.email}
            </a>
          </motion.div>
        </div>

        {/* Right column — portrait with Madhu-style circular ring */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[520px]"
            data-testid="hero-photo-wrapper"
          >
            {/* Circular photo + animation */}
            <div className="relative aspect-square">
              <div className="portrait-ring" />
              <div className="portrait-orbit" />
              <div className="absolute inset-0 flex items-end justify-center">
                <img
                  src={profile.photo}
                  alt="Piyush Sharma"
                  data-testid="hero-photo"
                  className="relative z-10 w-[78%] aspect-square object-cover rounded-full"
                  style={{
                    WebkitMaskImage:
                      "linear-gradient(180deg, rgba(0,0,0,1) 80%, rgba(0,0,0,0.95) 100%)",
                    filter: "contrast(1.05) saturate(1.05)",
                  }}
                />
              </div>

              {/* Floating top-right — Delivered badge (unchanged) */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                className="absolute top-2 -right-2 sm:right-0 bg-[#131316] border border-white/10 px-4 py-3 z-20"
              >
                <p className="font-mono-tech text-[10px] text-gray-500 uppercase tracking-wider">
                  Delivered
                </p>
                <p className="font-display text-xl text-white mt-1">
                  <span className="text-gold">$5M+</span> client value
                </p>
              </motion.div>
            </div>

            {/* Magazine-style title band below the circle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
              className="relative mt-4 sm:-mt-6 mx-auto max-w-[440px] bg-[#131316] border border-white/10 px-5 py-4 z-20"
            >
              <span className="absolute -left-[2px] top-3 bottom-3 w-[3px] bg-gold" />
              <p className="font-mono-tech text-[10px] text-gray-500 uppercase tracking-wider mb-2">
                Focus
              </p>
              <p className="font-display text-2xl sm:text-3xl text-white leading-[0.95] tracking-tight">
                ENTERPRISE
                <br />
                <span className="text-gold">AUTOMATION LEAD</span>
              </p>
              <p className="mt-3 font-mono-tech text-[11px] text-gray-300 uppercase tracking-wider">
                advancing into AI systems engineering
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <a
        href="#about"
        data-testid="hero-scroll-down"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-500 hover:text-gold transition-colors animate-bounce"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  );
}
