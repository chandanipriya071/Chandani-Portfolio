import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ResumeControls from './ResumeControls';
import FullscreenModal from './FullscreenModal';

const defaultCandidates = ['/assets/resume.pdf', '/docs/resume.pdf'];

async function probeUrlForPdf(url) {
  try {
    // Try HEAD first
    let res = await fetch(url, { method: 'HEAD' });
    if (!res.ok) {
      // Try a small GET (some servers block HEAD)
      res = await fetch(url, { method: 'GET', headers: { Range: 'bytes=0-1023' } });
    }
    if (!res.ok) return false;
    const ct = (res.headers.get('content-type') || '').toLowerCase();
    // Only accept explicit PDF content-type. Some dev servers return index.html for unknown routes.
    return ct.includes('pdf');
  } catch (e) {
    return false;
  }
}

export default function ResumeViewer({ src, thumbnail, title = 'Resume' }) {
  const iframeRef = useRef(null);
  const [zoom, setZoom] = useState(1);
  const [fullscreen, setFullscreen] = useState(false);
  const [pdfSrc, setPdfSrc] = useState(src || null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let mounted = true;
    async function findPdf() {
      setLoading(true);
      // If caller passed an explicit src that looks like a PDF (imported asset or direct link), trust it immediately.
      if (src && src.toLowerCase().includes('.pdf')) {
        setPdfSrc(src);
        setLoading(false);
        setNotFound(false);
        return;
      }

      const candidates = src ? [src, ...defaultCandidates] : defaultCandidates;
      for (const c of candidates) {
        const ok = await probeUrlForPdf(c);
        if (ok) {
          if (!mounted) return;
          setPdfSrc(c);
          setLoading(false);
          setNotFound(false);
          return;
        }
      }
      if (!mounted) return;
      setPdfSrc(null);
      setLoading(false);
      setNotFound(true);
    }

    findPdf();
    return () => {
      mounted = false;
    };
  }, [src]);

  const zoomIn = () => setZoom((z) => Math.min(2.5, +(z + 0.25).toFixed(2)));
  const zoomOut = () => setZoom((z) => Math.max(0.5, +(z - 0.25).toFixed(2)));
  const reset = () => setZoom(1);

  const download = () => {
    if (!pdfSrc) return;
    const a = document.createElement('a');
    a.href = pdfSrc;
    a.download = title.replace(/\s+/g, '_') + '.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const viewer = pdfSrc ? (
    <div className="h-full w-full rounded-3xl overflow-hidden bg-transparent">
      <div className="h-full w-full min-h-[35vh] overflow-auto">
        <iframe
          ref={iframeRef}
          title="resume-viewer"
          src={pdfSrc}
          className="h-full min-h-[35vh] w-full min-w-full"
          style={{ transform: `scale(${zoom})`, transformOrigin: 'top center' }}
        />
      </div>
    </div>
  ) : (
    <div className="h-full w-full flex items-center justify-center p-6">
      <div className="max-w-xl text-center glass-card p-6 rounded-2xl">
        <h3 className="text-lg font-semibold">Resume not found</h3>
        <p className="mt-2 text-sm text-slate-300">I couldn't locate a PDF at the expected paths. If a PDF is missing, your dev server may be returning the app's HTML for unknown routes — which makes the iframe show the website instead of the file.</p>
        <p className="mt-2 text-sm text-slate-300">Place your PDF in the `public/` folder as <strong>/resume.pdf</strong> so Vite serves it directly, or provide an explicit `src` prop to the `ResumeViewer` component.</p>
        <div className="mt-4 flex items-center justify-center gap-3">
          <a href="/#resume" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 px-3 py-2 text-sm font-semibold text-white">Open Resume Section</a>
          <button onClick={() => (window.location.hash = '#resume')} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm font-semibold text-white">Go to Resume</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative min-h-[55vh] h-auto lg:min-h-[70vh]">
      <ResumeControls onZoomIn={zoomIn} onZoomOut={zoomOut} onReset={reset} onFullscreen={() => setFullscreen(true)} onDownload={download} />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="glass-card p-4 h-full w-full rounded-3xl border border-white/6">
        <div className="h-full w-full overflow-auto">{loading ? <div className="h-full flex items-center justify-center">Loading preview…</div> : viewer}</div>
      </motion.div>

      {fullscreen && pdfSrc ? (
        <FullscreenModal onClose={() => setFullscreen(false)}>
          <div className="h-full w-full bg-transparent">
            <iframe title="resume-fullscreen" src={pdfSrc} className="h-full w-full" style={{ transform: `scale(${zoom})`, transformOrigin: 'top center' }} />
          </div>
        </FullscreenModal>
      ) : null}
    </div>
  );
}
