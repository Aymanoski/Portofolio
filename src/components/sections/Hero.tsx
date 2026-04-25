"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-teal/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-elevated border border-surface-border text-sm text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              Available for new opportunities
              <Sparkles size={13} className="text-brand-400" />
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
          >
            <span className="text-white">Building products</span>
            <br />
            <span className="shimmer-text">that scale from zero</span>
            <br />
            <span className="text-white">to production.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
          >
            I&apos;m Mohamed — a full-stack & mobile engineer with founding-team
            experience. I architect real-time systems, cross-platform mobile apps,
            and cloud-native backends that handle the hard stuff so products don&apos;t
            have to.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 mb-14"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-brand-500 hover:bg-brand-400 text-white font-semibold text-sm transition-all duration-200 hover:shadow-xl hover:shadow-brand-500/30 hover:-translate-y-0.5"
            >
              View Projects
              <ArrowDown size={15} className="rotate-[-45deg]" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl glow-border text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Social links + stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-6"
          >
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Aymanoski"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-surface-elevated border border-surface-border text-slate-400 hover:text-white hover:border-brand-500/50 transition-all duration-200"
              >
                <Github size={17} />
              </a>
              <a
                href="https://linkedin.com/in/mohamed-aymanbadr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-surface-elevated border border-surface-border text-slate-400 hover:text-white hover:border-brand-500/50 transition-all duration-200"
              >
                <Linkedin size={17} />
              </a>
              <a
                href="mailto:mohamedayman.dev1@gmail.com"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-surface-elevated border border-surface-border text-slate-400 hover:text-white hover:border-brand-500/50 transition-all duration-200"
              >
                <Mail size={17} />
              </a>
            </div>

            <div className="w-px h-8 bg-surface-border" />

            <div className="flex items-center gap-8">
              {[
                { value: "3.6+", label: "GPA / 4.0" },
                { value: "MVP", label: "Live" },
                { value: "15+", label: "API endpoints shipped" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display font-bold text-xl text-brand-400">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs tracking-widest uppercase font-mono">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
