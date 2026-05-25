import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowRight } from 'react-icons/fi';
import BackgroundEffects from './BackgroundEffects';
import SocialIcons from './SocialIcons';
import HeroStats from './HeroStats';
import GradientHeading from './GradientHeading';
import { useTheme } from '../context/ThemeContext';
import profileImage from '../assets/profile2.jpg';

export default function Hero() {
  const { isDark } = useTheme();

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden theme-hero-bg px-4 pb-14 pt-20 text-white sm:px-6 lg:px-0 lg:pt-36"
    >
      <BackgroundEffects isDark={isDark} />

      <div className="relative z-10 w-full">
        {/* Mobile & Tablet Layout - Same Content as Desktop */}
        <div className="lg:hidden flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="max-w-[44rem]">
              <GradientHeading
                as="h1"
                text="Chandani Kumari"
                theme="hero"
                size="hero"
                highlightWords={['chandani', 'kumari']}
                className="text-white"
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:mt-8 sm:text-lg sm:leading-8"
          >
            Full Stack &amp; AI Developer crafting premium digital experiences with modern technologies,
            cinematic motion, and scalable design systems.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="projects"
                smooth
                duration={700}
                offset={-90}
                className="group inline-flex cursor-pointer items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_42px_rgba(59,130,246,0.18)] transition-transform duration-300 hover:scale-105 hover:shadow-[0_28px_64px_rgba(59,130,246,0.22)] focus:outline-none focus:ring-4 focus:ring-blue-300/30 sm:px-7 sm:py-3.5"
              >
                View Projects
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ translateY: -4 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="contact"
                smooth
                duration={700}
                offset={-90}
                className="inline-flex cursor-pointer items-center rounded-xl border border-white/10 bg-white/6 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(2,6,23,0.45)] backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(2,6,23,0.5)] focus:outline-none focus:ring-4 focus:ring-white/10 sm:px-7 sm:py-3.5"
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38 }}
            className="mt-8 w-full max-w-[32rem] self-center sm:max-w-[38rem]"
          >
            <div className="absolute -inset-x-6 -inset-y-10 bg-[radial-gradient(circle_at_70%_45%,rgba(0,0,0,0.42),transparent_62%)] blur-3xl sm:-inset-x-10 sm:-inset-y-14" />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="relative h-[20rem] w-full sm:h-[24rem]"
            >
              <img src={profileImage} alt="Chandani Kumari portrait" className="h-full w-full object-cover object-top" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 flex w-full items-center gap-4"
          >
            <div className="shrink-0">
              <SocialIcons />
            </div>

            <HeroStats className="mt-0 min-w-0 flex-1" />
          </motion.div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-[1.05fr_0.95fr] gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-[44rem] pl-20"
          >
            <div className="max-w-[44rem]">
              <GradientHeading
                as="h1"
                text="Chandani Kumari"
                theme="hero"
                size="hero"
                highlightWords={['chandani', 'kumari']}
                className="text-white"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22 }}
              className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:mt-8 sm:text-lg sm:leading-8"
            >
              Full Stack &amp; AI Developer crafting premium digital experiences with modern technologies,
              cinematic motion, and scalable design systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="projects"
                  smooth
                  duration={700}
                  offset={-90}
                  className="group inline-flex cursor-pointer items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_42px_rgba(59,130,246,0.18)] transition-transform duration-300 hover:scale-105 hover:shadow-[0_28px_64px_rgba(59,130,246,0.22)] focus:outline-none focus:ring-4 focus:ring-blue-300/30 sm:px-7 sm:py-3.5"
                >
                  View Projects
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ translateY: -4 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="contact"
                  smooth
                  duration={700}
                  offset={-90}
                  className="inline-flex cursor-pointer items-center rounded-xl border border-white/10 bg-white/6 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(2,6,23,0.45)] backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(2,6,23,0.5)] focus:outline-none focus:ring-4 focus:ring-white/10 sm:px-7 sm:py-3.5"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38 }}
              className="mt-8"
            >
              <SocialIcons />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="max-w-max"
            >
              <HeroStats />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 52, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.16, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-[32rem] lg:max-w-[38rem]"
          >
            <div className="absolute -inset-x-6 -inset-y-10 bg-[radial-gradient(circle_at_70%_45%,rgba(0,0,0,0.42),transparent_62%)] blur-3xl sm:-inset-x-10 sm:-inset-y-14" />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="relative h-[22rem] w-full sm:h-[30rem] lg:h-[40rem]"
            >
              <img src={profileImage} alt="Chandani Kumari portrait" className="h-full w-full object-cover object-top" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
