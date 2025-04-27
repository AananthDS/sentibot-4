/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          800: '#1e3a8a',
          900: '#1e2a4a',
          950: '#0f172a',
        },
      },
      fontFamily: {
        sans: [
          'Inter var', 
          'Inter', 
          'system-ui', 
          '-apple-system', 
          'BlinkMacSystemFont', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'sans-serif'
        ],
      },
      boxShadow: {
        glow: '0 0 20px rgba(168, 85, 247, 0.5)',
      },
    },
  },
  plugins: [],
};