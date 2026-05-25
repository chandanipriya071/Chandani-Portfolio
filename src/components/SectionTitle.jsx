import { motion } from 'framer-motion';
import GradientHeading from './GradientHeading';

export default function SectionTitle({
  eyebrow,
  title,
  description,
  theme = 'about',
  highlightWords = [],
  size = 'section',
  glow = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-10 max-w-3xl px-4 text-center sm:mb-12 sm:px-6 lg:px-20"
    >
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-300">{eyebrow}</p> : null}
      <GradientHeading text={title} theme={theme} size={size} highlightWords={highlightWords} glow={glow} />
      <p className="mt-4 text-sm leading-7 theme-muted sm:text-base md:text-lg">{description}</p>
    </motion.div>
  );
}
