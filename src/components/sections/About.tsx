"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Cpu, Globe, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Rocket,
    title: "Founding Engineer",
    desc: "Shipped a full fitness coaching platform — web + mobile — from zero to beta as part of the founding team at Kalybr.",
    color: "text-brand-400",
    bg: "bg-brand-500/10",
    border: "border-brand-500/20",
  },
  {
    icon: Cpu,
    title: "Real-Time Systems",
    desc: "Integrated SignalR WebSockets for live session sync across web and mobile simultaneously. Performance and real-time UX are a core focus.",
    color: "text-accent-teal",
    bg: "bg-accent-teal/10",
    border: "border-accent-teal/20",
  },
  {
    icon: Globe,
    title: "Cross-Platform",
    desc: "Builds for web (Next.js), mobile (React Native / Expo), and backend (.NET, Django, Node.js) — a rare full-stack + mobile combination.",
    color: "text-accent-purple",
    bg: "bg-accent-purple/10",
    border: "border-accent-purple/20",
  },
  {
    icon: BookOpen,
    title: "Academic Excellence",
    desc: "Computer Science & Engineering at GUC with a 3.6+ GPA and IBM Full Stack certification — rigorous foundations, applied in production.",
    color: "text-accent-orange",
    bg: "bg-accent-orange/10",
    border: "border-accent-orange/20",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-tag mb-4">// about me</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Engineer by craft,{" "}
            <span className="text-brand-400">founder by mindset</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
            I don&apos;t just write code — I build products end to end. From designing
            normalized database schemas to shipping pixel-perfect mobile UIs, I
            operate across the full stack with the ownership mentality of someone
            who&apos;s been in the founding seat. At Kalybr, I took a fitness coaching
            platform from a blank repo to a live beta with real users. That experience — tight deadlines, rapid iteration, zero
            room for fragile systems — shapes how I approach every project.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`p-6 rounded-2xl bg-surface-card border ${h.border} hover:border-opacity-50 transition-all duration-300 group hover:-translate-y-1`}
            >
              <div
                className={`w-10 h-10 rounded-xl ${h.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <h.icon className={h.color} size={18} />
              </div>
              <h3 className="font-display font-semibold text-white mb-2">
                {h.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
