import { motion } from 'framer-motion';

const stats = [
  { value: '2+', label: 'Yrs Exp' },
  { value: '15+', label: 'Projects' },
  { value: '5+', label: 'Clients' },
];

export default function HeroStats() {
  return (
    <div className="mt-8 flex items-center gap-0 rounded-2xl border border-white/10 bg-white/[0.02] p-3 backdrop-blur">
      {stats.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="relative px-5 py-2"
        >
          {index > 0 ? <span className="absolute left-0 top-2 bottom-2 w-px bg-white/10" /> : null}
          <p className="text-3xl font-bold leading-none text-white">{item.value}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-400">{item.label}</p>
        </motion.div>
      ))}
    </div>
  );
}