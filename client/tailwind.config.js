/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ubuntu: {
          aubergine: '#300A24',
          orange: '#E95420',
          charcoal: '#2C001E',
          ink: '#111111',
          panel: '#1f1b1f',
          cream: '#F7F1ED',
        },
      },
      boxShadow: {
        ubuntu: '0 18px 60px rgba(0, 0, 0, 0.45)',
        window: '0 24px 75px rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        ubuntu: [
          'Ubuntu',
          'system-ui',
          'sans-serif',
        ],
        mono: ['JetBrains Mono', 'Fira Code', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
};
