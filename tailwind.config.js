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
        // Semantic palette (light theme)
        brand: '#FF6A3D',
        foreground: '#111111', // primary body text
        text: '#111111',       // alias for compatibility
        muted: '#71717A',      // zinc-600-ish
        surface: '#FFFFFF',
        surfaceAlt: '#FAFAF9',
        page: '#FFFFFF',
        borderSubtle: '#E5E7EB',

        // Compatibility aliases (to avoid breaking existing classes during refactor)
        primary: '#FF6A3D', // map old primary to brand
        accent: '#FF6A3D',  // remove blue; use brand instead
        base: '#FFFFFF',
        offWhite: '#FFFFFF',
        charcoal: '#111111',
      },
      borderRadius: { xl: '1rem', '2xl': '1.25rem' },
      boxShadow: { card: '0 6px 24px rgba(0,0,0,0.08)' },
      transitionDuration: { fast: '400ms' },
    },
  },
  plugins: [],
}
