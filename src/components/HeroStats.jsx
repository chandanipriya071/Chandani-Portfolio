import { motion } from 'framer-motion';

const stats = [
  { value: '2+', label: 'Yrs Exp' },
  { value: '15+', label: 'Projects' },
  { value: '5+', label: 'Clients' },
];

export default function HeroStats({ className = '' }) {
  return (
    <div className={`mt-8 flex flex-row flex-nowrap items-stretch rounded-2xl border border-white/10 bg-white/[0.02] p-2 backdrop-blur sm:items-center sm:p-3 ${className}`}>
      {stats.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="relative min-w-0 flex-1 px-3 py-2 text-center sm:w-auto sm:flex-none sm:px-5 sm:py-2 sm:text-left"
        >
          {index > 0 ? <span className="absolute left-0 top-2 bottom-2 w-px bg-white/10 sm:left-0 sm:right-auto sm:top-2 sm:bottom-2 sm:h-auto sm:w-px" /> : null}
          <p className="text-xl font-bold leading-none text-white sm:text-3xl">{item.value}</p>
          <p className="mt-1 text-[0.58rem] uppercase tracking-[0.14em] text-slate-400 sm:text-xs">{item.label}</p>
        </motion.div>
      ))}
    </div>
  );
}