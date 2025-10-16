# A11y + UI Baseline Notes

- Contrast checks
  - Text (foreground #111111) on surfaces (#FFFFFF, #FAFAF9) ≥ 12.6:1 — passes WCAG AA/AAA for normal text.
  - Brand (#FF6A3D) on white (#FFFFFF): ~3.2:1 on large text/buttons — meets 3:1 for large UI elements. Use white text on brand buttons; ring uses brand at 40–100% opacity with offset for visibility.
  - Borders (zinc-200 ~#E5E7EB) against white: ~1.5:1; used for subtle dividers only, not as the sole indicator of affordance.

- Focus styles
  - Global `.focus-ring`: `focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2` applied to links, buttons, and controls.
  - Hover styles are mirrored on focus for anchors and buttons.

- Reduced motion
  - `@media (prefers-reduced-motion: reduce)` reduces animation/transition durations to ~0ms and disables smooth scroll.

- Primitives applied
  - `components/layout/Container.tsx`: max-w-7xl with responsive padding.
  - `components/layout/Section.tsx`: consistent vertical rhythm `py-16 sm:py-20 lg:py-24`.
  - `components/ui/Heading.tsx`: type scale for h1/h2/h3.

- Pages updated
  - Home, Services, Gallery, About, Contact, Terms, Privacy, Confirmation switched to primitives and semantic tokens.

- Contrast tool
  - Use WebAIM Contrast Checker: `https://webaim.org/resources/contrastchecker/`.
