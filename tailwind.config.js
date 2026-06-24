/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        rounded: ['"M PLUS Rounded 1c"', 'Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#EAF2FF',
          100: '#D6E6FF',
          200: '#B3D1FF',
          300: '#8DC4FF',
          400: '#5C9FFF',
          500: '#2E7BEF',
          600: '#1E5FD6',
          700: '#1149B0',
          800: '#0E3A8C',
          900: '#0A2A66',
        },
        ink: '#14224A',
        // playful pops, pulled from the hero figurine palette
        pop: {
          orange: '#FF8A5B',
          green: '#4FCB7B',
          pink: '#FF7AB6',
          sky: '#6EB5FF',
          yellow: '#FFC44D',
          purple: '#9B8CFF',
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
    },
  },
  plugins: [],
}
