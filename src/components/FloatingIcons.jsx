import { motion } from 'framer-motion';
import { SiReact, SiTailwindcss, SiJavascript, SiTypescript } from 'react-icons/si';

const floating = {
  initial: { y: 0, opacity: 0.7 },
  animate: (i = 0) => ({
    y: [0, -12 - i * 6, 0],
    opacity: [0.6, 0.95, 0.6],
  }),
};

export default function FloatingIcons() {
  const icons = [SiReact, SiTailwindcss, SiJavascript, SiTypescript];

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {icons.map((Ic, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={floating}
          initial="initial"
          animate="animate"
          transition={{ duration: 6 + i * 1.2, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
          className={`absolute text-white/6 filter blur-sm`}
          style={{
            left: `${8 + i * 24}%`,
            top: `${6 + i * 20}%`,
            transform: 'translate(-50%, -50%) scale(1.1)',
          }}
        >
          <div className="rounded-full bg-gradient-to-br from-indigo-500/14 to-cyan-400/10 p-4 shadow-2xl">
            <Ic className="h-7 w-7 text-white/85 opacity-90" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
