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
        brand: {
          DEFAULT: '#FF6A3D', // primary brand
          600: '#E35A2F',     // hover
          700: '#C24F2C',     // focus ring (≥3:1 on white)
        },
        surface: '#FFFFFF',       // cards, surfaces
        surfaceAlt: '#FAFAFA',    // subtle elevated/tinted surface
        text: '#18181B',          // zinc-900 equivalent
        muted: '#52525B',         // zinc-600 equivalent
        'border-subtle': '#E4E4E7', // zinc-200 equivalent

        // Back-compat aliases (to avoid breaking existing classes while refactoring)
        primary: '#FF6A3D',   // map old primary to brand
        accent: '#FF6A3D',    // map old accent to brand (no blues)
        base: '#FFFFFF',      // map old base to page background
        offWhite: '#F9FAF9',  // legacy token used in components
        charcoal: '#10150F',  // legacy token used in components
      },
      borderRadius: { xl: '1rem', '2xl': '1.25rem' },
      boxShadow: { card: '0 6px 24px rgba(0,0,0,0.08)' },
      transitionDuration: { fast: '400ms' },
    },
  },
  plugins: [],
}
