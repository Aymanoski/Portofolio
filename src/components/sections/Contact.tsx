"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, ArrowRight, Copy, Check } from "lucide-react";

const EMAIL = "mohamedayman.dev1@gmail.com";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-28 relative" ref={ref}>
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-500/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-tag mb-4 text-center">// contact</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Let&apos;s build something
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Open to full-time roles, contracts, and interesting conversations.
            If you&apos;re building something ambitious — let&apos;s talk.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="p-8 rounded-3xl bg-surface-card border border-surface-border"
          >
            {/* Email display */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-surface-elevated border border-surface-border mb-6 group">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-brand-500/15 flex items-center justify-center">
                  <Mail className="text-brand-400" size={16} />
                </div>
                <span className="text-slate-300 font-mono text-sm">{EMAIL}</span>
              </div>
              <button
                onClick={copyEmail}
                className="p-2 rounded-lg text-slate-500 hover:text-white transition-colors"
                title="Copy email"
              >
                {copied ? (
                  <Check size={16} className="text-green-400" />
                ) : (
                  <Copy size={16} />
                )}
              </button>
            </div>

            {/* Primary CTA */}
            <a
              href={`mailto:${EMAIL}`}
              className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-brand-500 hover:bg-brand-400 text-white font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-brand-500/30 mb-6 group"
            >
              Send me an email
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-surface-border" />
              <span className="text-xs text-slate-600 font-mono">or connect on</span>
              <div className="flex-1 h-px bg-surface-border" />
            </div>

            {/* Social links */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://linkedin.com/in/mohamed-aymanbadr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-surface-elevated border border-surface-border text-slate-400 hover:text-white hover:border-brand-500/50 transition-all duration-200 text-sm font-medium"
              >
                <Linkedin size={15} />
                LinkedIn
              </a>
              <a
                href="https://github.com/Aymanoski"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-surface-elevated border border-surface-border text-slate-400 hover:text-white hover:border-brand-500/50 transition-all duration-200 text-sm font-medium"
              >
                <Github size={15} />
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-center text-sm text-slate-600 mt-6"
          >
            Also reachable by phone:{" "}
            <a
              href="tel:+201095574594"
              className="text-slate-500 hover:text-brand-400 transition-colors font-mono"
            >
              +20 109 557 4594
            </a>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
