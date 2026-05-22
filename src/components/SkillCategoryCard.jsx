import { motion } from 'framer-motion';
import SkillBadge from './SkillBadge';

export default function SkillCategoryCard({ category, index = 0 }) {
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="skill-category-card relative glass-card premium overflow-hidden"
    >
      <div className="card-gradient-border" />

      <div className="card-contents">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="skill-category-icon rounded-md bg-gradient-to-br from-slate-950/15 via-indigo-950/15 to-cyan-900/10 p-3 text-white shadow-sm">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="skill-category-title text-lg font-semibold text-white/95">{category.title}</h3>
          </div>

          <div className="skill-category-count text-sm text-white/60">{category.items.length} skills</div>
        </div>

        <div className="grid gap-3">
          {category.items.map((it, i) => (
            <SkillBadge key={it.name} item={it} index={i} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
