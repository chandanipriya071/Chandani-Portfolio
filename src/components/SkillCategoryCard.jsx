import { motion } from 'framer-motion';
import SkillBadge from './SkillBadge';

export default function SkillCategoryCard({ category, index = 0 }) {
  const columnsClass = category.items.length >= 4 ? 'xl:grid-cols-4' : 'xl:grid-cols-3';

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      whileHover={{ y: -10, scale: 1.01 }}
      className="skill-category-card group relative overflow-hidden rounded-[30px] border border-white/10 bg-[rgba(8,10,16,0.88)] p-5 shadow-[0_18px_44px_rgba(0,0,0,0.42)] backdrop-blur-xl transition-all duration-300 sm:p-6"
      style={{
        boxShadow: '0 18px 44px rgba(0,0,0,0.42), inset 0 1px 0 rgba(255,255,255,0.04)',
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_82%_18%,rgba(249,115,22,0.08),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_30%)] opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute -left-14 top-10 h-28 w-28 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="mb-6 flex items-center gap-4">
          <h3 className="skill-category-title text-[1.3rem] font-bold tracking-tight text-white sm:text-[1.45rem]">
            {category.title}
          </h3>
          <div
            className="h-px flex-1 opacity-40"
            style={{ background: `linear-gradient(90deg, ${category.accent} 0%, ${category.accent} 45%, transparent 100%)` }}
          />
          <div className="skill-category-count rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-white/45 shadow-[0_8px_18px_rgba(0,0,0,0.2)]">
            {category.items.length} items
          </div>
        </div>

        <div className={`grid gap-4 md:grid-cols-2 ${columnsClass}`}>
          {category.items.map((it, i) => (
            <SkillBadge key={it.name} item={it} index={i} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
