import { motion } from 'framer-motion';
import { FiDownload, FiEye } from 'react-icons/fi';

export default function ResumePreviewCard({ onOpen, onDownload }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full max-w-md glass-card premium hover:shadow-xl"
    >
      <div className="card-gradient-border" />
      <div className="card-shine" />

      <div className="card-contents flex gap-4 items-center">
        <div className="w-24 flex-shrink-0">
          <div className="h-24 w-20 rounded-md overflow-hidden bg-gradient-to-br from-slate-800 to-slate-700" />
        </div>

        <div className="flex-1">
          <h4 className="text-lg font-extrabold text-white">Professional Resume</h4>
          <p className="text-sm text-slate-300 mt-1">Curriculum Vitae — Experience, Skills & Projects</p>

          <div className="mt-4 flex gap-3">
            <button
              onClick={onOpen}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:scale-105 transition-all duration-300 shadow-md"
            >
              <FiEye /> View
            </button>

            <button
              onClick={onDownload}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white hover:scale-105 transition-all duration-300"
            >
              <FiDownload /> Download
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
