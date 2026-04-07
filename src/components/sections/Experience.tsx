"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const timeline = [
  {
    type: "work",
    icon: Briefcase,
    date: "Jun 2025 – Present",
    company: "Kalybr",
    role: "Full Stack Engineer · Founding Team",
    tags: ["Next.js", ".NET", "PostgreSQL", "SignalR", "React Native", "Expo"],
    color: "text-brand-400",
    dotColor: "bg-brand-500",
    borderColor: "border-brand-500/30",
    achievements: [
      "Architected 15+ RESTful API endpoints in .NET with PostgreSQL from scratch",
      "Designed normalized schemas across 6+ core entities and wired real-time WebSocket sync via SignalR",
      "Delivered cross-platform clients (Next.js web + React Native mobile) in a single 3-month sprint",
      "Shipped 4+ feature iterations based on live beta tester feedback in rapid sprint cycles",
    ],
  },
  {
    type: "education",
    icon: GraduationCap,
    date: "Sep 2022 – Jun 2027",
    company: "German University in Cairo",
    role: "B.Eng. Computer Science & Engineering",
    tags: ["GPA 3.6+ / 4.0", "German 1.5 — Distinction"],
    color: "text-accent-teal",
    dotColor: "bg-accent-teal",
    borderColor: "border-accent-teal/30",
    achievements: [
      "Pursuing a rigorous dual-standard CS&E degree (German + Egyptian accreditation)",
      "Coursework in Data Structures, OS, Networks, Databases, and Software Engineering",
      "Consistently maintained distinction-level performance (German scale: 1.5)",
    ],
  },
  {
    type: "cert",
    icon: Award,
    date: "Oct 2024",
    company: "IBM / Coursera",
    role: "IBM Full Stack Software Developer — Professional Certificate",
    tags: ["Cloud", "Microservices", "DevOps", "CI/CD"],
    color: "text-accent-orange",
    dotColor: "bg-accent-orange",
    borderColor: "border-accent-orange/30",
    achievements: [
      "Completed IBM's professional-grade curriculum covering cloud-native development",
      "Hands-on with IBM Code Engine, Docker, Kubernetes, and CI/CD pipelines",
      "Applied directly in the Car Dealership microservices project",
    ],
  },
];

export default function Experience() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="experience" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-tag mb-4">// experience</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Where I&apos;ve been
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl">
            Each role and project has been a step toward building things that
            matter at scale.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-surface-border via-brand-500/30 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="sm:pl-16 relative"
              >
                {/* Dot */}
                <div
                  className={`absolute left-4 top-6 w-4 h-4 rounded-full ${item.dotColor} ring-4 ring-surface/60 hidden sm:block -translate-x-1/2`}
                />

                <div
                  className={`p-7 rounded-2xl bg-surface-card border ${item.borderColor} hover:border-opacity-60 transition-all duration-300`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-10 h-10 rounded-xl bg-surface-elevated flex items-center justify-center shrink-0`}
                      >
                        <item.icon className={item.color} size={18} />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg text-white">
                          {item.role}
                        </h3>
                        <p className={`text-sm font-medium ${item.color}`}>
                          {item.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <span className="text-xs font-mono text-slate-500 bg-surface-elevated px-3 py-1 rounded-full">
                        {item.date}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {item.achievements.map((ach, ai) => (
                      <li key={ai} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${item.dotColor} shrink-0`} />
                        {ach}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
