import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { skills } from '../data/siteData';

export default function Skills() {
  return (
    <section id="skills" className="section-pad theme-page">
      <div className="w-full px-0">
        <SectionHeading
          eyebrow="Skills"
          title="Tools and technologies I use to ship quality"
          description="A focused stack centered around building modern interfaces, scalable components, and polished responsive experiences."
          theme="skills"
          highlightWords={['tools', 'technologies', 'quality']}
        />

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="glass-card rounded-3xl p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="theme-icon-surface flex h-14 w-14 items-center justify-center rounded-2xl">
                    <Icon size={24} />
                  </div>
                  <div>
                    <p className="text-lg font-semibold theme-text">{skill.name}</p>
                    <p className="text-sm theme-muted">{skill.level}</p>
                  </div>
                </div>
                <div className="mt-5 h-2 rounded-full bg-[color:color-mix(in_srgb,var(--theme-page-surface)_82%,transparent)]">
                  <div className="h-2 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400" style={{ width: `${skill.level === 'Expert' ? 92 : skill.level === 'Advanced' ? 80 : 68}%` }} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}