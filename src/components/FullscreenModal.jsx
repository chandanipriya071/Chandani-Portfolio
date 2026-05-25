import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';

export default function FullscreenModal({ children, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
    >
      <motion.div
        initial={{ scale: 0.96 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.96 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-[95vw] h-[90vh] bg-transparent"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 inline-flex items-center gap-2 rounded-full bg-white/6 p-2 text-white shadow-lg"
          aria-label="Close fullscreen"
        >
          <FiX />
        </button>

        <div className="h-full w-full rounded-3xl overflow-hidden">{children}</div>
      </motion.div>
    </motion.div>
  );
}
