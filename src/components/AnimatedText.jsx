import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.02, delayChildren: 0.04 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function AnimatedText({ text, className = '' }) {
  const characters = text.split('');

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      className={className}
    >
      {characters.map((character, index) => (
        <motion.span key={`${character}-${index}`} variants={item} className="inline-block">
          {character === ' ' ? '\u00A0' : character}
        </motion.span>
      ))}
    </motion.span>
  );
}
