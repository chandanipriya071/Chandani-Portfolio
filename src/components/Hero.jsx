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
      className="relative isolate flex min-h-screen items-center overflow-hidden theme-hero-bg px-4 pb-14 pt-28 text-white sm:px-6 sm:pt-32 lg:px-8 lg:pt-36"
    >
      <BackgroundEffects isDark={isDark} />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-[44rem]"
        >
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(74,222,128,0.8)]" />
            <span className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-slate-300">
              Available for select partnerships
            </span>
          </motion.div>

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
            className="mt-8 max-w-xl text-base leading-8 text-slate-400 sm:text-lg"
          >
            Full Stack &amp; AI Developer crafting premium digital experiences with modern technologies,
            cinematic motion, and scalable design systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="projects"
                smooth
                duration={700}
                offset={-90}
                className="group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-black shadow-xl transition-all duration-300 hover:shadow-[0_18px_42px_rgba(255,255,255,0.25)]"
              >
                  View Projects
                <FiArrowRight className="transition-all duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="contact"
                smooth
                duration={700}
                offset={-90}
                className="inline-flex cursor-pointer items-center rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white shadow-xl backdrop-blur transition-all duration-300 hover:border-blue-300/40 hover:bg-blue-500/10 hover:shadow-[0_14px_34px_rgba(59,130,246,0.2)]"
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
          className="relative mx-auto w-full max-w-[38rem]"
        >
          <div className="absolute -inset-x-10 -inset-y-14 bg-[radial-gradient(circle_at_70%_45%,rgba(0,0,0,0.42),transparent_62%)] blur-3xl" />

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="relative h-[26rem] w-full sm:h-[33rem] lg:h-[40rem]"
          >
            <img src={profileImage} alt="Chandani Kumari portrait" className="h-full w-full object-cover object-top" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
