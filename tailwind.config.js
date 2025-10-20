module.exports = {
  "content": [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  "theme": {
    "extend": {
      "colors": {
        "primary": "#56070F",
        "accent": "#8CC0D6",
        "base": "#10150F",
        "text": "var(--text)",
        "muted": "var(--muted)",
        "brand": "var(--brand)",
        "brand-600": "var(--brand-600)",
        "page": "var(--bg-page)",
        "surface": "var(--bg-surface)",
        "border": "var(--border)"
      },
      "borderRadius": {
        "xl": "var(--radius)",
        "2xl": "calc(var(--radius) + 8px)"
      },
      "boxShadow": {
        "card": "0 6px 24px rgba(0,0,0,0.08)"
      },
      "transitionDuration": {
        "fast": "400ms"
      }
    }
  },
  "plugins": []
}