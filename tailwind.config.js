/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
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
        ink: '#0B1B3A',
      },
    },
  },
  plugins: [],
}
