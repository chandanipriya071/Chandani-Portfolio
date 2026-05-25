import { motion } from 'framer-motion';

const hoverVariants = {
  React: {
    card: 'hover:shadow-[0_22px_52px_rgba(79,134,255,0.24)]',
    glow: 'radial-gradient(circle_at_20%_20%,rgba(97,218,251,0.22),transparent_34%),radial-gradient(circle_at_80%_18%,rgba(79,134,255,0.18),transparent_22%)',
  },
  HTML: {
    card: 'hover:shadow-[0_22px_52px_rgba(239,127,61,0.24)]',
    glow: 'radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.22),transparent_34%),radial-gradient(circle_at_80%_18%,rgba(255,166,87,0.18),transparent_22%)',
  },
  CSS: {
    card: 'hover:shadow-[0_22px_52px_rgba(24,183,209,0.24)]',
    glow: 'radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.22),transparent_34%),radial-gradient(circle_at_80%_18%,rgba(24,183,209,0.18),transparent_22%)',
  },
  'Next.js': {
    card: 'hover:shadow-[0_22px_52px_rgba(124,133,150,0.24)]',
    glow: 'radial-gradient(circle_at_20%_20%,rgba(229,231,235,0.18),transparent_34%),radial-gradient(circle_at_80%_18%,rgba(124,133,150,0.14),transparent_22%)',
  },
  'Node.js': {
    card: 'hover:shadow-[0_22px_52px_rgba(40,195,106,0.24)]',
    glow: 'radial-gradient(circle_at_20%_20%,rgba(74,222,128,0.2),transparent_34%),radial-gradient(circle_at_80%_18%,rgba(40,195,106,0.18),transparent_22%)',
  },
  Python: {
    card: 'hover:shadow-[0_22px_52px_rgba(216,166,45,0.24)]',
    glow: 'radial-gradient(circle_at_20%_20%,rgba(250,204,21,0.2),transparent_34%),radial-gradient(circle_at_80%_18%,rgba(216,166,45,0.16),transparent_22%)',
  },
  Java: {
    card: 'hover:shadow-[0_22px_52px_rgba(239,127,61,0.24)]',
    glow: 'radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.2),transparent_34%),radial-gradient(circle_at_80%_18%,rgba(239,127,61,0.16),transparent_22%)',
  },
  Docker: {
    card: 'hover:shadow-[0_22px_52px_rgba(79,134,255,0.24)]',
    glow: 'radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.2),transparent_34%),radial-gradient(circle_at_80%_18%,rgba(79,134,255,0.16),transparent_22%)',
  },
  MySQL: {
    card: 'hover:shadow-[0_22px_52px_rgba(79,134,255,0.24)]',
    glow: 'radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.2),transparent_34%),radial-gradient(circle_at_80%_18%,rgba(79,134,255,0.16),transparent_22%)',
  },
  MongoDB: {
    card: 'hover:shadow-[0_22px_52px_rgba(34,197,94,0.24)]',
    glow: 'radial-gradient(circle_at_20%_20%,rgba(74,222,128,0.2),transparent_34%),radial-gradient(circle_at_80%_18%,rgba(34,197,94,0.16),transparent_22%)',
  },
  AWS: {
    card: 'hover:shadow-[0_22px_52px_rgba(239,127,61,0.24)]',
    glow: 'radial-gradient(circle_at_20%_20%,rgba(251,146,60,0.2),transparent_34%),radial-gradient(circle_at_80%_18%,rgba(239,127,61,0.16),transparent_22%)',
  },
  GitHub: {
    card: 'hover:shadow-[0_22px_52px_rgba(124,133,150,0.24)]',
    glow: 'radial-gradient(circle_at_20%_20%,rgba(248,250,252,0.18),transparent_34%),radial-gradient(circle_at_80%_18%,rgba(124,133,150,0.14),transparent_22%)',
  },
  Git: {
    card: 'hover:shadow-[0_22px_52px_rgba(239,127,61,0.24)]',
    glow: 'radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.2),transparent_34%),radial-gradient(circle_at_80%_18%,rgba(239,127,61,0.16),transparent_22%)',
  },
  'VS Code': {
    card: 'hover:shadow-[0_22px_52px_rgba(79,134,255,0.24)]',
    glow: 'radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.2),transparent_34%),radial-gradient(circle_at_80%_18%,rgba(79,134,255,0.16),transparent_22%)',
  },
  'Jupyter Notebook': {
    card: 'hover:shadow-[0_22px_52px_rgba(239,127,61,0.24)]',
    glow: 'radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.2),transparent_34%),radial-gradient(circle_at_80%_18%,rgba(239,127,61,0.16),transparent_22%)',
  },
  Canva: {
    card: 'hover:shadow-[0_22px_52px_rgba(168,85,247,0.24)]',
    glow: 'radial-gradient(circle_at_20%_20%,rgba(216,180,254,0.2),transparent_34%),radial-gradient(circle_at_80%_18%,rgba(168,85,247,0.16),transparent_22%)',
  },
};

export default function SkillBadge({ item, index = 0 }) {
  const Icon = item.icon;
  const accent = item.accent || '#4f86ff';
  const iconColor = item.iconColor || '#f8fafc';
  const hoverVariant = hoverVariants[item.name] || {
    card: 'hover:shadow-[0_22px_52px_rgba(0,0,0,0.45)]',
    glow: 'radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.04),transparent_45%),radial-gradient(circle_at_88%_24%,rgba(255,124,87,0.16),transparent_18%)',
  };
  const iconShadow = {
    boxShadow: `inset 0 1px 0 rgba(255,255,255,0.05), 0 10px 20px rgba(0,0,0,0.35), 0 0 0 1px color-mix(in srgb, ${accent} 14%, transparent)`,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.03 }}
      whileHover={{ translateY: -6, scale: 1.02 }}
      className={`skill-badge group relative min-h-[176px] overflow-hidden rounded-[22px] border border-white/10 bg-[rgba(13,13,13,0.88)] p-4 shadow-[0_12px_30px_rgba(0,0,0,0.28)] transition-all duration-300 hover:border-white/20 ${hoverVariant.card}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-100" style={{ backgroundImage: hoverVariant.glow }} />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-100 transition-transform duration-300 group-hover:scale-x-105"
        style={{ backgroundColor: accent }}
      />

      <div className="relative z-20 flex h-full flex-col">
        <div className="flex items-start justify-between gap-3">
          <div
            className="skill-badge-icon flex h-[54px] w-[54px] items-center justify-center rounded-[18px] border border-white/10 bg-[#1a1a1a] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_20px_rgba(0,0,0,0.35)] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:border-white/15 group-hover:rotate-[-2deg]"
            style={iconShadow}
          >
            <Icon className="h-6 w-6 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.12)]" style={{ color: iconColor }} />
          </div>
        </div>

        <div className="mt-5 flex flex-1 flex-col">
          <div className="flex items-start justify-between gap-3">
            <span className="skill-badge-title max-w-[70%] text-[0.98rem] font-semibold text-white transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-white group-hover:tracking-[0.02em]">
              {item.name}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
