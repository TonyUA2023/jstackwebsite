/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jstack: {
          blue: "#2B7A9E",
          teal: "#388DAE",
          cyan: "#0096C7",
          dark: "#0F172A",
          muted: "#64748B",
          light: "#F8FAFC",
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 25px -5px rgba(0, 150, 199, 0.3)',
        'glow-lg': '0 0 40px -5px rgba(0, 150, 199, 0.4)',
        'card': '0 10px 30px -10px rgba(15, 23, 42, 0.05)',
        'card-hover': '0 20px 40px -15px rgba(15, 23, 42, 0.1)',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
