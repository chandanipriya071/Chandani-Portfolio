import { motion } from 'framer-motion';
import { FiGithub, FiMail } from 'react-icons/fi';
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import ContactCard from './ContactCard';

const contactCards = [
  {
    label: 'WhatsApp',
    value: '+91 8084789391',
    href: 'https://wa.me/918084789391',
    cta: 'Chat on WhatsApp',
    linkText: 'Start conversation',
    icon: FaWhatsapp,
    external: true,
  },
  {
    label: 'Email',
    value: 'chandanip54321@gmail.com',
    href: 'mailto:chandanip54321@gmail.com',
    cta: 'Send an Email',
    linkText: 'Write a message',
    icon: FiMail,
  },
  {
    label: 'GitHub',
    value: 'github.com/chandanipriya071',
    href: 'https://github.com/chandanipriya071',
    cta: 'View GitHub',
    linkText: 'Open profile',
    icon: FiGithub,
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/chandanipriya071',
    href: 'https://www.linkedin.com/in/chandanipriya071',
    cta: 'Connect on LinkedIn',
    linkText: 'Connect now',
    icon: FaLinkedinIn,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-pad theme-page relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          aria-hidden="true"
          animate={{ x: [0, 18, 0], y: [0, -16, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[-6rem] top-12 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl dark:bg-red-500/12"
        />
        <motion.div
          aria-hidden="true"
          animate={{ x: [0, -20, 0], y: [0, 18, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-[-5rem] bottom-0 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl dark:bg-red-500/10"
        />
      </div>

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-[var(--theme-border)] bg-[color:var(--theme-page-surface)] p-5 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-2xl sm:p-8 lg:p-10"
        >
          <div className="absolute inset-0 rounded-3xl border border-blue-500/10 dark:border-red-500/10" />

          <SectionHeading
            title="Get in Touch"
            description="I’m always open to new opportunities and interesting projects. Feel free to reach out through any of these channels."
            theme="contact"
            highlightWords={['touch', 'contact']}
          />

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {contactCards.map((item, index) => (
              <ContactCard key={item.label} item={item} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}