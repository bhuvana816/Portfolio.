/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        bounceIn: 'bounceIn 0.8s ease',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        bounceIn: {
          '0%, 100%': { transform: 'scale(0.95)', opacity: 0 },
          '50%': { transform: 'scale(1.05)', opacity: 1 },
        },
      },
      boxShadow: {
        glow: '0 0 8px rgba(59, 130, 246, 0.6)',
      },
    },
  },
  plugins: [],
};
