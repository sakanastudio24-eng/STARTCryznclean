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
        base:    '#0B0F0A',
        text:    '#F7FAF7',
        muted:   '#E6E9EC',
      },
      fontFamily: {
        heading: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      borderRadius: { xl: '1rem', '2xl': '1.25rem' },
      boxShadow: { card: '0 6px 24px rgba(0,0,0,0.08)' },
      transitionDuration: { fast: '400ms' },
    },
  },
  plugins: [],
}
