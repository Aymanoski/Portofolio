export default function Footer() {
  return (
    <footer className="py-10 border-t border-surface-border">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600 font-mono">
          © {new Date().getFullYear()} Mohamed Ayman
        </p>
        <p className="text-sm text-slate-600">
          Built with{" "}
          <span className="text-brand-400">Next.js</span> ·{" "}
          <span className="text-accent-teal">Framer Motion</span> ·{" "}
          <span className="text-accent-purple">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
