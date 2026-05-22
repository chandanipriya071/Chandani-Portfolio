import { motion } from 'framer-motion';
import { FiAward, FiLayers, FiTarget } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import { aboutHighlights } from '../data/siteData';

const values = [
  { title: 'Premium execution', icon: FiAward },
  { title: 'System thinking', icon: FiLayers },
  { title: 'Clear outcomes', icon: FiTarget },
];

export default function About() {
  return (
    <section id="about" className="section-pad theme-page">
      <div className="w-full px-0">
        <SectionHeading
          title="About Me"
          description="I’m a Computer Science and Engineering student who builds responsive web interfaces with React, JavaScript, Tailwind CSS, and thoughtful UI systems."
          theme="about"
          size="sectionLarge"
          highlightWords={["About", "Me"]}
        />

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-[2rem] p-8"
          >
            <div className="space-y-5 theme-muted">
              {aboutHighlights.map((item) => (
                <p key={item} className="text-base leading-8 md:text-lg">
                  {item}
                </p>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-5">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="glass-card flex items-center gap-4 rounded-3xl p-6"
                >
                  <div className="theme-icon-surface flex h-14 w-14 items-center justify-center rounded-2xl">
                    <Icon size={24} />
                  </div>
                  <div>
                    <p className="text-lg font-semibold theme-text">{value.title}</p>
                    <p className="mt-1 text-sm leading-6 theme-muted">
                      Focused on responsive layouts, reusable components, and polished delivery.
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}