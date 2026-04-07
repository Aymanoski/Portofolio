"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    label: "Frontend",
    color: "text-brand-400",
    bg: "bg-brand-500/10",
    border: "border-brand-500/20",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 85 },
      { name: "HTML / CSS", level: 90 },
    ],
  },
  {
    label: "Mobile",
    color: "text-accent-teal",
    bg: "bg-accent-teal/10",
    border: "border-accent-teal/20",
    skills: [
      { name: "React Native", level: 88 },
      { name: "Expo", level: 85 },
    ],
  },
  {
    label: "Backend",
    color: "text-accent-purple",
    bg: "bg-accent-purple/10",
    border: "border-accent-purple/20",
    skills: [
      { name: "ASP.NET (.NET)", level: 90 },
      { name: "Node.js + Express", level: 88 },
      { name: "Django / Flask", level: 80 },
      { name: "SignalR (WebSockets)", level: 82 },
    ],
  },
  {
    label: "Databases",
    color: "text-accent-orange",
    bg: "bg-accent-orange/10",
    border: "border-accent-orange/20",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 78 },
    ],
  },
  {
    label: "Cloud & DevOps",
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    skills: [
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 75 },
      { name: "CI/CD Pipelines", level: 80 },
      { name: "Azure / IBM Cloud", level: 72 },
    ],
  },
  {
    label: "Languages",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "Python", level: 85 },
      { name: "C# / .NET", level: 88 },
      { name: "Java / C++", level: 78 },
    ],
  },
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-slate-300 font-medium">{name}</span>
        <span className={`text-xs font-mono ${color} opacity-0 group-hover:opacity-100 transition-opacity`}>
          {level}%
        </span>
      </div>
      <div className="h-1.5 bg-surface-elevated rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay, ease: [0.22, 1, 0.36, 1] }}
          className={`h-full rounded-full bg-gradient-to-r from-current to-current ${color.replace("text-", "bg-")}`}
          style={{ background: `var(--tw-gradient-from)` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="skills" className="py-28 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface-card/30 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-tag mb-4">// skills</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            The full stack, literally
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl">
            From mobile UI to Kubernetes orchestration — the tools that power
            what I build.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className={`p-6 rounded-2xl bg-surface-card border ${group.border} hover:border-opacity-60 transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`px-3 py-1 rounded-lg ${group.bg} ${group.border} border`}>
                  <span className={`text-xs font-mono font-semibold uppercase tracking-widest ${group.color}`}>
                    {group.label}
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={group.color}
                    delay={gi * 0.1 + si * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages spoken */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 p-6 rounded-2xl bg-surface-card border border-surface-border flex flex-wrap items-center gap-4"
        >
          <span className="text-sm font-mono text-slate-500 uppercase tracking-wider">
            Spoken Languages:
          </span>
          {[
            { lang: "Arabic", level: "Native" },
            { lang: "English", level: "Fluent" },
            { lang: "German", level: "Intermediate" },
          ].map((l) => (
            <div key={l.lang} className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-300">{l.lang}</span>
              <span className="text-xs font-mono text-brand-400 bg-brand-500/10 px-2 py-0.5 rounded-full">
                {l.level}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
