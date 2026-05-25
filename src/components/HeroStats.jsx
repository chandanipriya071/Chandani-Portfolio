import { motion } from 'framer-motion';

const stats = [
  { value: '2+', label: 'Yrs Exp' },
  { value: '15+', label: 'Projects' },
  { value: '5+', label: 'Clients' },
];

export default function HeroStats() {
  return (
    <div className="mt-8 flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-2 backdrop-blur sm:flex-row sm:items-center sm:p-3">
      {stats.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="relative w-full px-4 py-3 text-center sm:w-auto sm:px-5 sm:py-2 sm:text-left"
        >
          {index > 0 ? <span className="absolute left-4 right-4 top-0 h-px bg-white/10 sm:left-0 sm:right-auto sm:top-2 sm:bottom-2 sm:h-auto sm:w-px" /> : null}
          <p className="text-2xl font-bold leading-none text-white sm:text-3xl">{item.value}</p>
          <p className="mt-1 text-[0.65rem] uppercase tracking-[0.14em] text-slate-400 sm:text-xs">{item.label}</p>
        </motion.div>
      ))}
    </div>
  );
}