import { motion } from 'framer-motion';

export default function TimelineCard({ item, side }) {
  const Icon = item.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -6 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className={`group relative w-full max-w-xl glass-card premium transition-all duration-300`}
    >
      <div className="card-gradient-border" />
      <div className="card-shine" />
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full p-2 timeline-icon" style={{ boxShadow: '0 18px 40px rgba(239,68,68,0.14)', zIndex: 12 }}>
          <div className="rounded-full bg-black/40 p-2 border border-white/5">
            <Icon className="text-white" size={20} />
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-slate-200">{item.year}</span>
            <span className="rounded-full border border-white/10 px-2 py-0.5 text-[0.65rem] font-medium text-slate-300">{item.category}</span>
          </div>

          <h3 className="mt-3 text-2xl font-extrabold text-white">{item.title}</h3>
          <p className="mt-1 text-sm font-medium text-slate-300">{item.institute}</p>
          <p className="mt-3 text-sm text-slate-400 leading-relaxed">{item.description}</p>

          <div className="mt-4">
            <a
              href="https://www.vgu.ac.in"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white transition-transform duration-300 hover:brightness-105"
              style={{ backgroundImage: 'linear-gradient(90deg,#ef4444 0%,#fb7185 100%)', boxShadow: '0 20px 44px rgba(239,68,68,0.20)' }}
            >
              View School/College
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
