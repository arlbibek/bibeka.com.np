# Architecture

## Stack

- Next.js App Router (static-friendly personal site)
- React 19
- Tailwind CSS for utility classes on error/404 surfaces
- Custom CSS for the landing composition (viewport lock, glow layers, name scale)

## Structure

- `app/` — routes only. Root `/` is the landing page. Shared layout, 404, and error UI live here.
- `components/LandingFloatingIcons.tsx` — client starfield of security tool icons (Lucide + Simple Icons + a few custom SVGs).
- `lib/landing-floating-icons.ts` — icon placement, drift, and twinkle config.
- `styles/globals.css` — landing visual system (black base, soft white/cool glows, float/twinkle keyframes, Helvetica Neue stack, viewport sizing).
- `public/` — static assets (favicon, icons, web manifest).
- `next.config.js` — short-link redirects (`/github`, `/resume`, etc.).

## Key decisions

- **No backend / no DB.** Config and static assets only. Do not introduce Supabase or other data stores without an explicit product decision.
- **Single page.** Landing only. Other former routes (projects, echo, click) were removed.
- **Viewport-fit landing.** The page uses `100dvh` / `100svh` with `overflow: hidden` so it never scrolls on any screen size.
- **Name-first.** Typography fills most of the viewport (`~85–90%`). Brand is the entire composition.
- **Security starfield.** Floating icons drift and twinkle like stars (same pattern as the Trinity Tech hero). Unlike Trinity, there is no center mask — icons may pass over the name.
- **Font.** Helvetica Neue is proprietary and not redistributed. The site uses the system stack `"Helvetica Neue", Helvetica, Arial, sans-serif` so Apple devices get Neue and others fall back cleanly.
