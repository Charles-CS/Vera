/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'vera-emerald': '#10b981',
        'vera-slate': '#0f172a',
        'vera-black': '#020617',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glow-emerald': '0 0 24px rgba(16, 185, 129, 0.25)',
      },
      animation: {
        'anti-gravity': 'float 6s ease-in-out infinite',
        'anti-gravity-reverse': 'float-reverse 7s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(15px) rotate(-2deg)' },
        }
      }
    },
  },
  plugins: [],
};
