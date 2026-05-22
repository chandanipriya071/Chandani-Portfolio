import { motion } from 'framer-motion';

const wordContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

const wordItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function AnimatedHeading({ as: Tag = 'h2', className = '', children }) {
  const words = String(children).split(' ');

  return (
    <Tag className={className}>
      <motion.span
        variants={wordContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.55 }}
        className="inline"
      >
        {words.map((word, index) => (
          <motion.span key={`${word}-${index}`} variants={wordItem} className="inline-block mr-[0.28em]">
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
