"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Zap, Users, Database, Globe } from "lucide-react";

const projects = [
  {
    featured: true,
    label: "Founding Engineer · Startup",
    title: "Kalybr — Fitness Coaching Platform",
    description:
      "Built and shipped an entire cross-platform fitness coaching product as a founding engineer. Designed the architecture, owned the backend APIs, the PostgreSQL schema, and delivered both the web and mobile clients — in a single 3-month sprint.",
    problem:
      "Coaches and clients needed a unified platform to manage sessions, workout plans, and real-time communication across web and mobile simultaneously.",
    solution:
      "Architected a .NET REST API with PostgreSQL, integrated SignalR for live session sync, and built parallel clients in Next.js and React Native/Expo — all from scratch.",
    impact: [
      { icon: Zap, text: "MVP live" },
      { icon: Database, text: "6+ core entities, normalized schema" },
      { icon: Globe, text: "100+ RESTful endpoints" },
      { icon: Users, text: "4+ feature iterations from beta feedback" },
    ],
    stack: ["Next.js", ".NET", "PostgreSQL", "SignalR", "React Native", "Expo"],
    color: "from-brand-600/20 to-accent-teal/10",
    accentColor: "text-brand-400",
    borderColor: "border-brand-500/30",
    github: null,
    live: null,
  },
  {
    featured: false,
    label: "Full-Stack · Team Project",
    title: "EventSync — GUC Campus Events Platform",
    description:
      "A full-stack, role-aware campus events hub for the GUC community, built across structured sprints within a 10-person team. It supports workshops, trips, bazaars, and conferences with approval workflows, payments, media uploads, notifications, and loyalty points.",
    problem:
      "Students, staff, vendors, event offices, and admins needed one platform to coordinate campus events without fragmented approvals, registration, and payment flows.",
    solution:
      "Built a Next.js 14 + Node.js/Express + MongoDB platform with JWT authentication, dynamic role-based routing, Stripe payments, Cloudinary uploads, and real-time notifications.",
    impact: [
      { icon: Users, text: "6 user roles with role-aware routing" },
      { icon: Zap, text: "Approval workflows across 4 event types" },
      { icon: Globe, text: "Stripe, Cloudinary, notifications, loyalty points" },
    ],
    stack: ["Next.js 14", "React", "TypeScript", "Node.js", "Express.js", "MongoDB", "MUI", "JWT", "Stripe"],
    color: "from-accent-teal/15 to-accent-purple/10",
    accentColor: "text-accent-teal",
    borderColor: "border-accent-teal/30",
    github: null,
    live: null,
  },
  {
    featured: false,
    label: "Full-Stack · Cloud-Native",
    title: "Car Dealership Platform",
    description:
      "A production-grade car dealership web platform with 3-role JWT authentication, an admin inventory system managing 500+ vehicle listings, and a MongoDB-backed transaction layer — all containerized and deployed via CI/CD.",
    problem:
      "Car dealerships lack affordable, multi-role digital platforms that handle both inventory and transactions at scale.",
    solution:
      "Built with React + Django + Node.js as independent microservices, containerized with Docker, orchestrated via Kubernetes, and deployed to IBM Code Engine with a full CI/CD pipeline.",
    impact: [
      { icon: Zap, text: "~80% faster deployments via CI/CD" },
      { icon: Database, text: "500+ vehicle listings managed" },
      { icon: Globe, text: "3 microservices on Kubernetes" },
    ],
    stack: ["React", "Django", "Node.js", "MongoDB", "Docker", "Kubernetes", "IBM Code Engine"],
    color: "from-accent-purple/15 to-brand-600/10",
    accentColor: "text-accent-purple",
    borderColor: "border-accent-purple/30",
    github: "https://github.com/Aymanoski/car-dealership-platform",
    live: null,
  },
  {
    featured: false,
    label: "Enterprise · Backend",
    title: "Telecom CRM System",
    description:
      "A full-stack telecom CRM supporting subscriber lifecycle management across 1,000+ records — service plan assignments, automated billing alerts, and role-based access control with 3 permission levels.",
    problem:
      "Telecom operators needed a centralized, auditable system to manage subscribers, plans, and financial transactions.",
    solution:
      "Built on ASP.NET 8 + MySQL with a clean layered architecture, RBAC for 3 user roles, and a full-featured admin dashboard with CRUD over subscribers, plans, and transactions.",
    impact: [
      { icon: Users, text: "1,000+ subscriber records" },
      { icon: Database, text: "Full CRUD + automated billing alerts" },
      { icon: Zap, text: "3-tier role-based access control" },
    ],
    stack: ["ASP.NET 8", "C#", "MySQL", "HTML", "CSS"],
    color: "from-accent-orange/15 to-accent-teal/10",
    accentColor: "text-accent-orange",
    borderColor: "border-accent-orange/30",
    github: "https://github.com/Aymanoski/Telecom_Database",
    live: null,
  },
  {
    featured: false,
    label: "Game Dev · OOP",
    title: "Attack on Titan — Tower Defense",
    description:
      "A JavaFX tower defense game with multi-lane enemy AI, escalating wave logic, and an autonomous gameplay mode. Engineered with GoF design patterns for a modular, extensible architecture.",
    problem:
      "Demonstrate advanced OOP design through a non-trivial system with dynamic state, AI behavior, and extensible game mechanics.",
    solution:
      "Applied Factory, Strategy, and Observer patterns to decouple wave spawning, enemy behavior, and game events — making the codebase trivially extensible for new enemy types and towers.",
    impact: [
      { icon: Zap, text: "Factory + Strategy + Observer patterns" },
      { icon: Globe, text: "Autonomous gameplay mode" },
      { icon: Database, text: "Escalating wave AI logic" },
    ],
    stack: ["Java", "JavaFX", "OOP Design Patterns"],
    color: "from-accent-teal/15 to-brand-600/10",
    accentColor: "text-accent-teal",
    borderColor: "border-accent-teal/30",
    github: "https://github.com/Aymanoski/AOT_game",
    live: null,
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  if (project.featured) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        className={`col-span-full p-8 lg:p-10 rounded-3xl bg-gradient-to-br ${project.color} border ${project.borderColor} relative overflow-hidden group`}
      >
        {/* Background accent */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-500/5 rounded-full blur-3xl group-hover:bg-brand-500/10 transition-all duration-700" />

        <div className="relative z-10 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-4">
              <span className={`section-tag ${project.accentColor}`}>
                {project.label}
              </span>
              <span className="px-2 py-0.5 text-xs font-mono bg-brand-500/20 text-brand-300 rounded-full border border-brand-500/30">
                Featured
              </span>
            </div>
            <h3 className="font-display text-3xl font-bold text-white mb-4">
              {project.title}
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-surface/50 border border-surface-border">
                <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">Problem</p>
                <p className="text-sm text-slate-400">{project.problem}</p>
              </div>
              <div className="p-4 rounded-xl bg-surface/50 border border-surface-border">
                <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">Solution</p>
                <p className="text-sm text-slate-400">{project.solution}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-3">
            <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">Impact</p>
            {project.impact.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-xl bg-surface/60 border border-surface-border hover:border-brand-500/30 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-500/15 flex items-center justify-center shrink-0">
                  <item.icon className={project.accentColor} size={15} />
                </div>
                <span className="text-sm text-slate-300">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`p-7 rounded-2xl bg-surface-card border ${project.borderColor} group hover:-translate-y-1 transition-all duration-300 flex flex-col`}
    >
      <div className="flex items-start justify-between mb-4">
        <span className={`section-tag ${project.accentColor}`}>{project.label}</span>
        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-slate-500 hover:text-white transition-colors"
            >
              <Github size={16} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-slate-500 hover:text-white transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      <h3 className="font-display text-xl font-bold text-white mb-3">
        {project.title}
      </h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      <div className="space-y-2 mb-5">
        {project.impact.map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-sm text-slate-400">
            <item.icon className={project.accentColor} size={13} />
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <span key={s} className="tag">{s}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="projects" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-tag mb-4">// projects</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Things I&apos;ve built
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl">
            From founding-team startups to cloud-native microservices — here&apos;s
            where impact meets execution.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <a
            href="https://github.com/Aymanoski"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-brand-400 transition-colors"
          >
            <Github size={15} />
            More on GitHub
            <ExternalLink size={13} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
