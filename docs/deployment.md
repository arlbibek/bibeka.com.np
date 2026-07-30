# Deployment

## Host

Deployed on Vercel from the GitHub repository.

## Steps

1. Push to the connected branch (typically `main`).
2. Vercel runs `npm install` and `npm run build` (Next.js detected automatically).
3. Production URL: [https://bibeka.com.np](https://bibeka.com.np).

## Notes

- No environment variables are required for a successful deploy.
- Custom domain and TLS are managed in the Vercel project settings.
- Short paths (`/github`, `/resume`, `/cv`, …) are handled as redirects in `next.config.js`.
