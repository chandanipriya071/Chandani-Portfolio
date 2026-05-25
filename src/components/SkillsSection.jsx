import { motion } from 'framer-motion';
import skillsCategories from '../data/SkillsData';
import SkillCategoryCard from './SkillCategoryCard';

export default function SkillsSection() {
  return (
    <section id="skills" className="relative overflow-hidden py-20 lg:py-24">
      <div className="w-full px-4 sm:px-6 lg:px-0">
        <motion.header
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <h2 className="animated-gradient-text premium-shine-text heading-glow-pulse text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-cyan-300 to-pink-400 sm:text-5xl lg:text-6xl">
            My Skills
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
            Expertise in modern technologies and tools, presented with a sharper visual hierarchy and premium motion.
          </p>
        </motion.header>

        <div className="grid gap-10">
          {skillsCategories.map((cat, i) => (
            <SkillCategoryCard key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
