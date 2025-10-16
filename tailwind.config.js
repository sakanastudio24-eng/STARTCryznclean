/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#56070F',
        accent:  '#8CC0D6',
        base:    '#10150F',
        text:    '#F9FAF9',
        muted:   '#E6E9EC',
        brand: {
          DEFAULT: '#FF6A3D',
          50: '#FFF3EF',
          100: '#FFE6DF',
          200: '#FFCABF',
          300: '#FFA08B',
          400: '#FF835F',
          500: '#FF6A3D',
          600: '#E1542A',
          700: '#B94321',
          800: '#8F341A',
          900: '#6F2714',
        },
      },
      borderRadius: { xl: '1rem', '2xl': '1.25rem' },
      boxShadow: { card: '0 6px 24px rgba(0,0,0,0.08)' },
      transitionDuration: { fast: '400ms' },
    },
  },
  plugins: [],
}
