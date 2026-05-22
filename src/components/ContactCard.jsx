import { motion } from 'framer-motion';

export default function ContactCard({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.a
      href={item.href}
      target={item.external ? '_blank' : undefined}
      rel={item.external ? 'noreferrer' : undefined}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group relative overflow-hidden rounded-3xl p-[1px]"
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/35 via-transparent to-red-500/25 opacity-60 blur-[1px] transition duration-300 group-hover:opacity-100 dark:from-red-500/45 dark:to-blue-500/35" />
      <div className="glass-card relative flex h-full flex-col rounded-3xl p-6 shadow-xl transition-all duration-300 group-hover:shadow-[0_20px_55px_rgba(37,99,235,0.12)] dark:group-hover:shadow-[0_20px_55px_rgba(239,68,68,0.2)]">
        <div className="flex items-start justify-between gap-4">
          <div className="theme-icon-surface flex h-14 w-14 items-center justify-center rounded-2xl transition duration-300 group-hover:scale-105 group-hover:rotate-3 group-hover:bg-blue-500/10 dark:group-hover:bg-red-500/10">
            <Icon size={24} />
          </div>
          <span className="rounded-full border border-[var(--theme-border)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] theme-muted">
            {item.cta}
          </span>
        </div>

        <div className="mt-6 space-y-2">
          <h3 className="text-xl font-semibold theme-text">{item.label}</h3>
          <p className="text-sm leading-7 theme-muted">{item.value}</p>
        </div>

        <div className="mt-auto pt-6">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition duration-300 group-hover:translate-x-1 dark:text-blue-300">
            {item.linkText}
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </motion.a>
  );
}
