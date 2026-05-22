import { motion } from 'framer-motion';
import skillsCategories from '../data/SkillsData';
import SkillCategoryCard from './SkillCategoryCard';
import FloatingIcons from './FloatingIcons';

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-20">
      <FloatingIcons />

      <div className="w-full px-0">
        <motion.header
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center"
        >
          <h2 className="animated-gradient-text premium-shine-text heading-glow-pulse text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-cyan-300 to-pink-400">
            Skills
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm text-white/70">Curated technical strengths, tools, and workflows crafted for production-ready projects.</p>
        </motion.header>

        <div className="grid gap-8 md:grid-cols-3">
          {skillsCategories.map((cat, i) => (
            <SkillCategoryCard key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
