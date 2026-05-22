import { motion } from 'framer-motion';

export default function SkillBadge({ item, index = 0 }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.03 }}
      whileHover={{ translateY: -6, scale: 1.015 }}
      className="skill-badge relative flex items-center gap-4 rounded-xl p-3 glass-card border-white/8"
    >
      <div className="skill-badge-icon z-20 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-slate-950/15 via-indigo-950/15 to-cyan-900/10 text-white shadow-md">
        <Icon className="h-6 w-6 text-white/95" />
      </div>

      <div className="flex-1 z-20">
        <div className="flex items-center justify-between">
          <span className="skill-badge-title text-sm font-semibold text-white/95">{item.name}</span>
          {typeof item.progress === 'number' ? (
            <span className="skill-badge-meta text-xs text-white/60 ml-2">{item.progress}%</span>
          ) : null}
        </div>

        {typeof item.progress === 'number' ? (
          <div className="mt-2 h-2 w-full rounded-full bg-white/6 overflow-hidden skill-badge-track">
            <div
              className="skill-badge-fill h-2 rounded-full bg-gradient-to-r from-sky-600 via-indigo-600 to-fuchsia-500 shadow-[0_10px_30px_rgba(37,99,235,0.14)]"
              style={{ width: `${item.progress}%`, transition: 'width 900ms cubic-bezier(.2,.9,.2,1)' }}
            />
          </div>
        ) : null}
      </div>

      <div className="card-contents" />
    </motion.div>
  );
}
