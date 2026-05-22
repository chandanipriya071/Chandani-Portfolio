import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

export default function ProjectCard({ project, index }) {
  const isLogoProject = project.imageMode === 'contain';

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group relative flex h-full overflow-hidden rounded-[1.9rem] p-[1px]"
    >
      <div className="absolute inset-0 rounded-[1.9rem] bg-gradient-to-br from-blue-500/50 via-blue-400/15 to-transparent opacity-25 blur-[1px] transition duration-500 group-hover:opacity-80 group-hover:blur-sm" />
      <div className="theme-panel relative flex h-full w-full flex-col overflow-hidden rounded-[1.85rem] shadow-[0_20px_50px_rgba(2,6,23,0.18)] backdrop-blur-xl dark:shadow-[0_20px_50px_rgba(2,6,23,0.45)]">
        <div
          className={`relative h-56 overflow-hidden sm:h-60 ${
            isLogoProject
              ? 'flex items-center justify-center bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_38%),radial-gradient(circle_at_center,rgba(14,165,233,0.12),transparent_58%),linear-gradient(180deg,#030712_0%,#0b1120_100%)] p-5 sm:h-64 sm:p-6'
              : ''
          }`}
        >
          <img
            src={project.image}
            alt={project.title}
            className={`h-full w-full transition duration-700 ${
              isLogoProject
                ? 'max-h-full max-w-[82%] object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.35)] group-hover:scale-[1.04]'
                : 'object-cover group-hover:scale-110'
            }`}
          />
          <div className={`absolute inset-0 ${isLogoProject ? 'bg-gradient-to-t from-black via-black/18 to-transparent opacity-70' : 'bg-gradient-to-t from-black via-black/25 to-transparent opacity-85'}`} />

          <div className="theme-chip absolute left-4 top-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] shadow-[0_12px_28px_rgba(2,6,23,0.28)]">
            {project.category}
          </div>

          <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-300/0 transition duration-500 ${isLogoProject ? 'group-hover:from-blue-500/6 group-hover:via-transparent group-hover:to-blue-300/6' : 'group-hover:from-blue-500/10 group-hover:via-transparent group-hover:to-blue-300/10'}`} />
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <h3 className="text-2xl font-bold theme-text transition duration-300 group-hover:text-blue-500 dark:group-hover:text-blue-300">
            {project.title}
          </h3>

          <p className="mt-3 text-sm leading-7 theme-muted sm:text-[0.95rem]">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="theme-chip rounded-full px-3 py-1 text-xs font-medium transition duration-300 group-hover:border-blue-400/20 group-hover:bg-blue-500/10"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-3 pt-7">
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="theme-button-primary inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold"
            >
              Live Demo <FiExternalLink />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="theme-button-secondary inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold"
            >
              GitHub <FiGithub />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}