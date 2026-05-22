/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#050816',
        ink: '#0f172a',
        electric: '#3b82f6',
        cyanGlow: '#38bdf8',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(59, 130, 246, 0.25)',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top, rgba(59,130,246,0.25), transparent 34%), radial-gradient(circle at bottom right, rgba(56,189,248,0.18), transparent 28%)',
      },
    },
  },
  plugins: [],
};