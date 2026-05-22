import { motion } from 'framer-motion';

export default function TimelineNode({ index }) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="relative flex items-center justify-center"
    >
      <div className="absolute -left-2 -top-2 h-8 w-8 rounded-full bg-rose-600/80 blur-sm opacity-30" />
      <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-rose-600 text-white ring-2 ring-rose-300/40 shadow-[0_6px_18px_rgba(239,68,68,0.28)]">
        <span className="text-sm font-semibold">{index}</span>
      </div>
    </motion.div>
  );
}
