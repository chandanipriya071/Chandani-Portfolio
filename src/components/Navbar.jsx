import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiMenu, FiMoon, FiSearch, FiSun, FiX } from 'react-icons/fi';
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
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-0 sm:px-6 lg:px-8">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className={`relative mx-auto max-w-7xl rounded-full border px-3 py-2.5 backdrop-blur md:px-4 ${navShellClass}`}
      >
        {/* thin top accent line to match reference */}
        <div className="absolute left-0 top-0 h-[2px] w-full bg-rose-600/60 rounded-t-full" />

        {/* logo on left */}
        <div className="absolute left-3 top-1 flex items-center">
          <Link
            to="home"
            smooth
            duration={700}
            offset={-90}
            className={`inline-flex cursor-pointer items-center gap-3 rounded-full px-3 py-1.5 transition-all duration-300 ${
              isDark ? 'text-white' : 'text-slate-800'
            }`}
          >
            <span className={`relative inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border text-xs font-semibold sm:h-9 sm:w-9 sm:text-sm ${
              isDark ? 'border-white/15 bg-black/40 text-white' : 'border-blue-200/80 bg-white text-blue-700'
            }`}>
              CK
            </span>
            <span className={`font-display text-base font-semibold sm:text-lg lg:text-xl ${isDark ? 'text-white' : 'text-slate-800'}`}>
              Chandani <span className="bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 bg-clip-text text-transparent">Kumari</span>
            </span>
          </Link>
        </div>

        {/* centered nav links */}
        <div className="flex items-center justify-center gap-4 lg:gap-6">
          <div className="hidden lg:flex items-center gap-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                smooth
                spy={true}
                activeClass="active-link"
                duration={700}
                offset={-90}
                className={`group relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${navLinkClass}`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100 ${navLineClass}`}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* right controls */}
        <div className="absolute right-3 top-1/2 flex items-center gap-2 -translate-y-1/2">
          <button
            type="button"
            onClick={toggleTheme}
            className={`hidden md:inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-medium backdrop-blur transition-all duration-300 ${iconButtonClass}`}
            aria-label="Toggle theme"
            aria-pressed={isDark}
          >
            {isDark ? <FiMoon size={14} className="mr-2" /> : <FiSun size={14} className="mr-2" />}
            <span className="whitespace-nowrap">{isDark ? 'Dark Mode' : 'Light Mode'}</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((state) => !state)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 lg:hidden ${iconButtonClass}`}
            aria-label="Open menu"
          >
            {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur lg:hidden"
          >
            <motion.aside
              initial={{ y: -18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -18, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="mx-4 mt-20 rounded-3xl border border-white/10 bg-black/90 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            >
              <div className="flex flex-col gap-3">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      to={item.to}
                      smooth
                      duration={700}
                      offset={-90}
                      onClick={closeMenu}
                      className="block cursor-pointer rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-blue-300/40 hover:bg-blue-500/10 hover:text-white"
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
