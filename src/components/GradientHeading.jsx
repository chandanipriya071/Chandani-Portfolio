import { motion } from 'framer-motion';
import DynamicGradientText from './DynamicGradientText';
import ShineText from './ShineText';

const SIZE_MAP = {
  hero: 'font-display text-5xl font-extrabold leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.1rem]',
  section: 'font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl',
  sectionLarge: 'font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl',
  compact: 'font-display text-2xl font-bold leading-tight tracking-tight md:text-3xl',
};

export default function GradientHeading({
  as: Tag = 'h2',
  text,
  theme = 'hero',
  size = 'section',
  highlightWords = [],
  className = '',
  glow = true,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.995 }}
      className={glow ? 'heading-glow-pulse transition-all duration-300 will-change-transform' : 'transition-all duration-300 will-change-transform'}
    >
      <Tag className={`${SIZE_MAP[size] || SIZE_MAP.section} ${className} group`}> 
        <ShineText>
          <DynamicGradientText
            text={text}
            theme={theme}
            highlightWords={highlightWords}
            plainClassName="theme-text"
          />
        </ShineText>
      </Tag>
    </motion.div>
  );
}
