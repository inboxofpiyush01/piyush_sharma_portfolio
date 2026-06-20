import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="relative bg-[#131316] border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-14">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-7">
            <p className="overline">// {new Date().getFullYear()}</p>
            <h3 className="mt-3 font-display text-4xl md:text-6xl text-white tracking-tight leading-none">
              Thanks for <span className="text-gold">scrolling.</span>
            </h3>
            <p className="mt-5 max-w-lg text-gray-400 text-sm leading-relaxed">
              Built from scratch with React, Tailwind &amp; Framer Motion. If you read this
              far, you should definitely{" "}
              <a href={`mailto:${profile.email}`} className="text-gold hover:underline">
                say hi
              </a>
              .
            </p>
          </div>

          <div className="md:col-span-5 md:text-right">
            <p className="font-mono-tech text-[10px] uppercase tracking-wider text-gray-500 mb-3">
              Connect
            </p>
            <div className="flex md:justify-end gap-3 mb-6">
              <a
                href={`mailto:${profile.email}`}
                data-testid="footer-email"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-colors"
              >
                <Mail size={16} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                data-testid="footer-linkedin"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                data-testid="footer-github"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-colors"
              >
                <Github size={16} />
              </a>
            </div>
            <a
              href="#top"
              data-testid="footer-back-to-top"
              className="inline-flex items-center gap-2 font-mono-tech text-xs text-gray-400 hover:text-gold transition-colors uppercase tracking-wider"
            >
              <ArrowUp size={14} /> Back to top
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono-tech text-[10px] text-gray-600 uppercase tracking-wider">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="font-mono-tech text-[10px] text-gray-600 uppercase tracking-wider">
            Crafted with curiosity in Delhi.
          </p>
        </div>
      </div>
    </footer>
  );
}
