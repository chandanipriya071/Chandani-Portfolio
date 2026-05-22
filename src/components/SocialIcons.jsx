import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const socialLinks = [
  { label: 'GitHub', icon: FaGithub, href: 'https://github.com/chandanipriya071' },
  { label: 'LinkedIn', icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/chandanipriya071' },
  { label: 'Email', icon: FiMail, href: 'mailto:chandanip54321@gmail.com' },
];

export default function SocialIcons() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {socialLinks.map((item) => {
        const Icon = item.icon;

        return (
          <motion.a
            key={item.label}
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
            aria-label={item.label}
            whileHover={{ y: -4, scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 shadow-xl backdrop-blur transition-all duration-300 hover:border-blue-300/45 hover:bg-blue-500/10 hover:text-white hover:shadow-[0_12px_28px_rgba(59,130,246,0.22)]"
          >
            <Icon className="text-base transition-all duration-300 group-hover:scale-110" />
          </motion.a>
        );
      })}
    </div>
  );
}