import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { experience } from '../data/siteData';

export default function Experience() {
  return (
    <section id="experience" className="section-pad theme-page">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="A clear timeline of growth and delivery"
          description="Each role shaped how I think about frontends: stronger systems, tighter UI execution, and better shipping habits."
          theme="projects"
          highlightWords={['timeline', 'growth', 'delivery']}
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-400 via-blue-500 to-transparent md:left-1/2 md:-ml-px" />
          <div className="space-y-8">
            {experience.map((item, index) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`relative pl-12 md:flex md:items-center md:pl-0 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
              >
                <div className="absolute left-[0.55rem] top-8 h-4 w-4 rounded-full bg-blue-500 shadow-[0_0_24px_rgba(37,99,235,0.8)] md:left-1/2 md:-ml-2" />
                <div className="glass-card w-full rounded-[1.8rem] p-6 md:max-w-[48%]">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-500">{item.period}</p>
                  <h3 className="mt-3 text-2xl font-semibold theme-text">{item.role}</h3>
                  <p className="mt-2 text-sm theme-muted">{item.company}</p>
                  <p className="mt-4 text-sm leading-7 theme-muted">{item.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}