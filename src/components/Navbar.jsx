import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Education', to: 'education' },
  { label: 'Projects', to: 'projects' },
  { label: 'Resume', to: 'resume' },
  { label: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const closeMenu = () => setMobileOpen(false);

  const navShellClass = isDark
    ? 'border-white/10 bg-black/70 shadow-[0_16px_54px_rgba(0,0,0,0.55)]'
    : 'border-slate-200/80 bg-white/82 shadow-[0_14px_34px_rgba(15,23,42,0.10)]';

  const navLinkClass = isDark
    ? 'text-slate-300 hover:text-white'
    : 'text-slate-600 hover:text-blue-700';

  const navLineClass = isDark
    ? 'from-blue-300 via-blue-500 to-transparent'
    : 'from-blue-500 via-indigo-500 to-transparent';

  const iconButtonClass = isDark
    ? 'border-white/10 bg-white/5 text-slate-300 hover:border-blue-300/40 hover:bg-blue-500/10 hover:text-white'
    : 'border-slate-200/80 bg-white/90 text-slate-600 hover:border-blue-300/70 hover:bg-blue-50 hover:text-blue-700';

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-0 pt-0">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className={`relative w-full rounded-none border px-3 py-2.5 backdrop-blur md:px-4 ${navShellClass}`}
      >
        {/* thin top accent line to match reference */}
        <div className="absolute left-0 top-0 h-[2px] w-full bg-rose-600/60 rounded-t-full" />

        <div className="relative flex items-center justify-between gap-4 lg:gap-8">
          {/* Logo */}
          <Link
            to="home"
            smooth
            duration={700}
            offset={-90}
            className={`inline-flex cursor-pointer items-center gap-3 rounded-full border px-3 py-1.5 text-sm font-semibold transition-all duration-300 ${
              isDark ? 'border-white/10 bg-white/5 text-white' : 'border-slate-200/80 bg-slate-100 text-slate-900'
            }`}
          >
            <span className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold ${
              isDark ? 'border border-white/15 bg-slate-900 text-white' : 'border border-slate-200 bg-white text-slate-900'
            }`}>
              CK
            </span>
            <span className={`hidden sm:inline-flex font-display text-sm font-semibold tracking-[0.01em] ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Chandani Kumari
            </span>
          </Link>

          {/* Desktop Navigation Items */}
          <div className="hidden lg:flex items-center justify-center gap-1 flex-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                smooth
                spy={true}
                activeClass="active-link"
                duration={700}
                offset={-90}
                className={`group relative inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-all duration-300 ${navLinkClass}`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100 ${navLineClass}`}
                />
              </Link>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${iconButtonClass}`}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-pressed={isDark}
            >
              {isDark ? <FiMoon size={16} /> : <FiSun size={16} />}
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((state) => !state)}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 lg:hidden ${iconButtonClass}`}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={closeMenu}
          >
            <motion.aside
              initial={{ y: -500, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -500, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="fixed inset-x-2 top-14 z-50 max-h-[80vh] overflow-y-auto rounded-2xl border border-white/10 bg-slate-950/95 shadow-[0_40px_100px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:inset-x-3"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="sticky top-0 flex items-center justify-between gap-3 border-b border-red-500/20 bg-slate-950/95 px-6 py-4">
                <span className="text-base font-bold tracking-wide text-red-500">
                  Chandani Kumari
                </span>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-500/20 text-red-500 transition hover:bg-red-500/30"
                  aria-label="Close mobile menu"
                >
                  <FiX size={18} />
                </button>
              </div>

              <div className="space-y-2 p-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: index * 0.04 }}
                  >
                    <Link
                      to={item.to}
                      smooth
                      spy={true}
                      activeClass="active-mobile-link"
                      duration={700}
                      offset={-90}
                      onClick={closeMenu}
                      className="block rounded-xl px-5 py-3 text-base font-semibold text-slate-100 transition-all duration-300 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
