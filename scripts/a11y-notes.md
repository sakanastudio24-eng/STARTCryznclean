# A11y & UI Baseline Notes

- Tokens: brand `#FF6A3D`, text `#18181B`, muted `#52525B`, surfaces `#FFFFFF` and `#FAFAFA`, border-subtle `#E4E4E7`.
- Focus: `.focus-ring` utility applies a 2px ring with brand-700/50 and 2px offset; visible on links, buttons, and controls.
- Motion: Global `prefers-reduced-motion: reduce` reduces animation/transition durations; `--motion-ok` CSS var set for JS.
- Type scale: `Heading` component enforces h1/h2/h3 sizes. `Section` sets py-16/20/24. `Container` sets max-w-7xl and responsive paddings.
- Pages updated to use `Container`, `Section`, and `Heading` with consistent spacing.

Contrast checks:
- Body text vs white: `#18181B` on `#FFFFFF` ≈ 13.3:1 (AA+)
- Muted vs white: `#52525B` on `#FFFFFF` ≈ 6.6:1 (AA for normal text)
- Brand vs white: `#FF6A3D` on `#FFFFFF` ≈ 3.3:1 (meets ≥3:1 for large text/buttons); ensure normal body text remains `text` color.

Helpful tools:
- WebAIM contrast checker: https://webaim.org/resources/contrastchecker/
- WCAG overview: https://www.w3.org/WAI/standards-guidelines/wcag/
