import { motion } from 'framer-motion';

const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${(index * 17) % 100}%`,
  top: `${(index * 29) % 100}%`,
  duration: 8 + (index % 5),
  delay: index * 0.2,
  size: 2 + (index % 3),
}));

export default function BackgroundEffects({ isDark = true }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className={`absolute inset-0 ${isDark ? 'bg-black' : 'bg-transparent'}`} />

      <div
        className={`absolute inset-0 [background-size:56px_56px] ${
          isDark
            ? 'opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)]'
            : 'opacity-[0.08] [background-image:linear-gradient(rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.08)_1px,transparent_1px)]'
        }`}
      />

      <motion.div
        animate={{ x: [0, -24, 0], y: [0, 18, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute -left-24 top-10 h-[28rem] w-[28rem] rounded-full blur-[120px] ${
          isDark ? 'bg-blue-500/15' : 'bg-blue-400/18'
        }`}
      />

      <motion.div
        animate={{ x: [0, 28, 0], y: [0, -18, 0] }}
        transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute right-[-8rem] top-[-4rem] h-[30rem] w-[30rem] rounded-full blur-[120px] ${
          isDark ? 'bg-blue-700/15' : 'bg-indigo-400/18'
        }`}
      />

      <div
        className={`absolute inset-0 ${
          isDark
            ? 'bg-[radial-gradient(circle_at_72%_38%,rgba(59,130,246,0.15),transparent_38%),radial-gradient(circle_at_24%_18%,rgba(59,130,246,0.1),transparent_30%)]'
            : 'bg-[radial-gradient(circle_at_72%_38%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_24%_18%,rgba(56,189,248,0.1),transparent_34%)]'
        }`}
      />
      <div
        className={`absolute inset-0 ${
          isDark
            ? 'bg-[radial-gradient(circle_at_72%_50%,transparent_12%,rgba(0,0,0,0.78)_66%,rgba(0,0,0,0.92)_100%)]'
            : 'bg-[radial-gradient(circle_at_72%_50%,transparent_22%,rgba(255,255,255,0.14)_68%,rgba(248,250,252,0.34)_100%)]'
        }`}
      />

      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className={`absolute rounded-full ${isDark ? 'bg-blue-100/50' : 'bg-blue-500/30'}`}
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{ opacity: [0.16, 0.65, 0.16], y: [0, -10, 0] }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}