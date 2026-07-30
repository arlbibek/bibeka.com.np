# Conventions

## Code

- TypeScript strict. No `any`.
- Prefer Server Components. Client components only for interactive error recovery.
- Keep the landing visual system in `styles/globals.css` — do not recreate glow/name sizing with ad-hoc Tailwind on the home page.
- Comment only non-obvious why.

## Naming

- Route folders under `app/` use lowercase path segments.
- CSS classes for the landing use a `landing` / `landing__*` BEM-ish prefix.

## Gotchas

- Helvetica Neue is not loaded via `next/font` or a CDN. Changing the font means updating the stack in `styles/globals.css` (and Tailwind `fontFamily.sans` if used).
- Viewport units: prefer `dvh`/`svh` over `vh` so mobile browser chrome does not cause scroll.
- Short-link redirects live in `next.config.js`, not as app routes.
- Floating icon placements live in `lib/landing-floating-icons.ts`. Opacity must stay on the base/glow layers, not the float wrapper, or twinkle gets dimmed.
- Keep the center radial mask on `.landing-floating-icons` so icons do not sit over the name.
