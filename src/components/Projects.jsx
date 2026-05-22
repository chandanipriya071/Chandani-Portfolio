import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import { projects } from '../data/siteData';

const filters = ['All', 'Web Apps', 'AI Projects', 'Full Stack', 'UI/UX'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="section-pad theme-page relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ x: [0, 25, 0], y: [0, -18, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[-6rem] top-10 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -22, 0], y: [0, 22, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-[-5rem] top-40 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.08),transparent_24%)]" />
      </div>

      <div className="w-full px-0">
        <SectionHeading
          title="Featured Projects"
          description="A curated collection of modern interfaces, AI tools, and full-stack experiences designed to feel polished, fast, and production-ready."
          theme="projects"
          highlightWords={['featured', 'projects']}
        />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="w-full mb-12 flex flex-wrap items-center justify-center gap-3"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`group relative overflow-hidden rounded-full border px-5 py-3 text-sm font-semibold transition duration-300 ${
                  isActive
                    ? 'border-blue-400/30 bg-blue-500/15 text-[color:var(--theme-page-text)] shadow-[0_0_30px_rgba(37,99,235,0.18)]'
                    : 'theme-chip text-[color:var(--theme-page-text)] hover:border-blue-400/25 hover:bg-blue-500/10'
                }`}
              >
                <span className="relative z-10">{filter}</span>
                <span
                  className={`absolute inset-x-4 bottom-2 h-px origin-left bg-gradient-to-r from-transparent via-blue-400 to-transparent transition-transform duration-300 group-hover:scale-x-100 ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </button>
            );
          })}
        </motion.div>

        <div className="theme-divider mb-10 h-px w-full" />

        <motion.div layout className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}