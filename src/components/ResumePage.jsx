import { useState } from 'react';
import { motion } from 'framer-motion';
import ResumePreviewCard from './ResumePreviewCard';
import ResumeViewer from './ResumeViewer';
import FullscreenModal from './FullscreenModal';
import { FiDownload, FiEye, FiMaximize } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import ResumePdf from '../assets/Resume.pdf';

export default function ResumePage() {
  const [open, setOpen] = useState(false);
  const [showViewer, setShowViewer] = useState(false);
  const { isDark } = useTheme();

  // Prefer bundled asset if present (imported from src/assets/Resume.pdf), fall back to public path
  const pdfSrc = ResumePdf || '/assets/resume.pdf';

  const download = () => {
    const a = document.createElement('a');
    a.href = pdfSrc;
    a.download = 'Resume.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <section id="resume" className="section-pad theme-page py-16 px-0">
      <div className="w-full">
        <div className="w-full text-center">
          <motion.h1 initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl font-extrabold">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-rose-500">Professional Resume</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="mt-4 text-slate-400">
            Explore my experience, technical skills, projects, and achievements through my interactive resume.
          </motion.p>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button onClick={() => setShowViewer(true)} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:scale-105 transition-all duration-300" aria-haspopup="dialog">
              <FiEye /> View Resume
            </button>

            <button onClick={download} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white hover:scale-105 transition-all duration-300">
              <FiDownload /> Download
            </button>

            <button onClick={() => setOpen(true)} className="inline-flex items-center gap-2 rounded-full bg-white/6 px-4 py-2 text-sm font-semibold text-white hover:scale-105 transition-all duration-300" aria-haspopup="dialog">
              <FiMaximize /> Open Fullscreen
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {showViewer ? (
              <ResumeViewer src={pdfSrc} />
            ) : (
              <div className="glass-card flex h-[70vh] items-center justify-center rounded-3xl border border-[var(--theme-border)] p-8 text-center">
                <div className="max-w-xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-500">Resume Preview</p>
                  <h3 className="mt-4 text-2xl font-bold theme-text">Click View Resume to load the PDF</h3>
                  <p className="mt-3 text-sm leading-7 theme-muted">
                    The resume will stay unloaded until you open it, which prevents the browser from triggering an automatic download on page load.
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowViewer(true)}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <FiEye /> Load Resume Preview
                  </button>
                </div>
              </div>
            )}
          </div>

          <aside className="lg:col-span-1">
            <ResumePreviewCard onOpen={() => setOpen(true)} onDownload={download} />

            <div className="mt-8 glass-card p-6 rounded-2xl">
              <h4 className="text-sm font-semibold text-slate-200">Skills Highlights</h4>
              <ul className="mt-4 space-y-2 text-slate-300">
                <li>React, TypeScript, Tailwind, Framer Motion</li>
                <li>Performance optimization & accessibility</li>
                <li>Design systems and component architecture</li>
              </ul>
            </div>
          </aside>
        </div>
        {open ? (
          <FullscreenModal onClose={() => setOpen(false)}>
            <ResumeViewer src={pdfSrc} />
          </FullscreenModal>
        ) : null}
      </div>
    </section>
  );
}
