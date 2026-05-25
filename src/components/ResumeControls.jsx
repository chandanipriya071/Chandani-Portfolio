import { FiPlus, FiMinus, FiRefreshCcw, FiMaximize, FiDownload } from 'react-icons/fi';

export default function ResumeControls({ onZoomIn, onZoomOut, onReset, onFullscreen, onDownload }) {
  return (
    <div className="absolute right-4 top-4 z-50 flex flex-col items-center gap-3 sm:right-6 sm:top-6">
      <button
        onClick={onZoomIn}
        className="w-12 h-12 rounded-full bg-white/6 backdrop-blur border border-white/8 flex items-center justify-center text-white hover:scale-105 transition-all duration-200 shadow-lg"
        aria-label="Zoom in"
      >
        <FiPlus />
      </button>

      <button
        onClick={onZoomOut}
        className="w-12 h-12 rounded-full bg-white/6 backdrop-blur border border-white/8 flex items-center justify-center text-white hover:scale-105 transition-all duration-200 shadow-lg"
        aria-label="Zoom out"
      >
        <FiMinus />
      </button>

      <button
        onClick={onReset}
        className="w-12 h-12 rounded-full bg-white/6 backdrop-blur border border-white/8 flex items-center justify-center text-white hover:scale-105 transition-all duration-200 shadow-lg"
        aria-label="Reset zoom"
      >
        <FiRefreshCcw />
      </button>

      <div className="h-0.5 w-10 bg-white/6 my-1 rounded" />

      <button
        onClick={onFullscreen}
        className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 flex items-center justify-center text-white hover:scale-105 transition-all duration-200 shadow-xl"
        aria-label="Fullscreen"
      >
        <FiMaximize />
      </button>

      <button
        onClick={onDownload}
        className="w-12 h-12 rounded-full bg-white/6 backdrop-blur border border-white/8 flex items-center justify-center text-white hover:scale-105 transition-all duration-200 shadow-lg"
        aria-label="Download"
      >
        <FiDownload />
      </button>
    </div>
  );
}
