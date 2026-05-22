const SECTION_GRADIENTS = {
  hero: [
    'from-slate-900 via-blue-700 to-indigo-700 dark:from-white dark:via-blue-300 dark:to-blue-500',
    'from-blue-700 via-cyan-600 to-blue-500 dark:from-blue-300 dark:via-cyan-300 dark:to-blue-500',
  ],
  about: [
    'from-blue-500 via-indigo-500 to-purple-500 dark:from-blue-300 dark:via-indigo-300 dark:to-purple-300',
    'from-blue-400 via-sky-400 to-indigo-500 dark:from-blue-300 dark:via-sky-300 dark:to-indigo-300',
  ],
  skills: [
    'from-cyan-500 via-blue-500 to-indigo-500 dark:from-cyan-300 dark:via-blue-300 dark:to-indigo-300',
    'from-blue-500 via-sky-500 to-cyan-500 dark:from-blue-300 dark:via-sky-300 dark:to-cyan-300',
  ],
  projects: [
    'from-indigo-500 via-blue-500 to-sky-500 dark:from-indigo-300 dark:via-blue-300 dark:to-sky-300',
    'from-white via-blue-200 to-blue-500 dark:from-white dark:via-blue-300 dark:to-blue-500',
  ],
  education: [
    'from-blue-500 via-cyan-400 to-indigo-500 dark:from-blue-300 dark:via-cyan-300 dark:to-indigo-300',
    'from-indigo-500 via-sky-400 to-blue-500 dark:from-indigo-300 dark:via-sky-300 dark:to-blue-300',
  ],
  contact: [
    'from-white via-blue-300 to-blue-600 dark:from-white dark:via-blue-200 dark:to-blue-500',
    'from-slate-800 via-blue-600 to-indigo-700 dark:from-slate-100 dark:via-blue-300 dark:to-indigo-300',
  ],
  footer: [
    'from-slate-700 via-blue-500 to-indigo-600 dark:from-slate-300 dark:via-blue-300 dark:to-indigo-300',
  ],
};

const AUTO_HIGHLIGHTS = {
  hero: ['modern', 'digital', 'experiences', 'chandani', 'kumari'],
  about: ['passionate', 'code', 'creativity'],
  skills: ['tools', 'technologies', 'quality'],
  projects: ['featured', 'premium', 'projects'],
  education: ['education', 'learning', 'knowledge'],
  contact: ['touch', 'contact'],
  footer: ['portfolio', 'react'],
};

function normalize(token) {
  return token.toLowerCase().replace(/[^a-z0-9]/g, '');
}

export default function DynamicGradientText({
  text,
  theme = 'hero',
  highlightWords = [],
  className = '',
  plainClassName = '',
}) {
  const gradients = SECTION_GRADIENTS[theme] || SECTION_GRADIENTS.hero;
  const auto = AUTO_HIGHLIGHTS[theme] || [];
  const explicit = new Set(highlightWords.map((word) => normalize(word)));
  const tokens = text.split(/(\s+)/);

  let gradientIndex = 0;

  return (
    <span className={className}>
      {tokens.map((token, index) => {
        if (/^\s+$/.test(token)) {
          return <span key={`space-${index}`}>{token}</span>;
        }

        const cleaned = normalize(token);
        const shouldHighlight = explicit.has(cleaned) || auto.includes(cleaned);

        if (!shouldHighlight) {
          return (
            <span key={`word-${index}`} className={plainClassName}>
              {token}
            </span>
          );
        }

        const gradient = gradients[gradientIndex % gradients.length];
        gradientIndex += 1;

        return (
          <span
            key={`word-${index}`}
            className={`animated-gradient-text bg-gradient-to-r ${gradient} bg-clip-text text-transparent transition-all duration-300`}
          >
            {token}
          </span>
        );
      })}
    </span>
  );
}
