import { motion } from 'framer-motion';
import { FiArrowUpRight, FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { navLinks } from '../data/siteData';
import GradientHeading from './GradientHeading';

export default function Footer() {
  return (
    <footer className="theme-surface border-t border-[var(--theme-border)]">
      <div className="w-full px-0 py-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="rounded-3xl border border-[var(--theme-border)] bg-[color:var(--theme-page-surface)] p-6 shadow-[0_18px_44px_rgba(15,23,42,0.06)] backdrop-blur-2xl sm:p-8"
        >
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_0.8fr] md:items-center">
            <div>
              <a href="#home" className="font-display text-2xl font-bold theme-text">
                <GradientHeading
                  as="span"
                  text="Chandani Kumari"
                  theme="footer"
                  size="compact"
                  highlightWords={['chandani', 'kumari']}
                  className="text-2xl"
                  glow={false}
                />
              </a>
              <p className="mt-3 max-w-md text-sm leading-7 theme-muted">
                Clean interfaces, premium motion, and thoughtful design systems for modern brands and developers.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] theme-text">Quick Links</p>
              <div className="mt-4 flex flex-col gap-2 text-sm theme-muted">
                {navLinks.slice(0, 4).map((link) => (
                  <a key={link.label} href={link.href} className="transition hover:text-[color:var(--theme-page-text)]">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] theme-text">Social</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  { icon: FaGithub, href: 'https://github.com/chandanipriya071', label: 'GitHub' },
                  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/chandanipriya071', label: 'LinkedIn' },
                  { icon: FiMail, href: 'mailto:chandanip54321@gmail.com', label: 'Email' },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                      className="theme-chip inline-flex h-11 w-11 items-center justify-center rounded-full transition duration-300 hover:scale-105 hover:border-blue-400/40 hover:bg-blue-500/10 hover:shadow-[0_0_24px_rgba(37,99,235,0.18)] dark:hover:border-red-400/40 dark:hover:bg-red-500/10 dark:hover:shadow-[0_0_24px_rgba(239,68,68,0.18)]"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-[var(--theme-border)] pt-5 text-sm theme-muted sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Chandani Kumari. Built with React, Vite, Tailwind CSS, Framer Motion, and EmailJS.</p>
            <a href="#home" className="inline-flex items-center gap-1 font-semibold text-blue-500 transition hover:text-[color:var(--theme-page-text)] dark:text-blue-300">
              Back to top <FiArrowUpRight />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}