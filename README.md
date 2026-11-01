# Aravind Kumar M - Portfolio

Personal portfolio site. React 19, Vite, Tailwind CSS 4, Motion for animation, React Router.

## Run it
```bash
npm install
npm run dev      # http://127.0.0.1:5173
npm run build    # production build in dist/
npm run preview  # serve the production build locally
npm run lint
```

## Edit the content
- All text, links and project details live in `src/data.js`. The components read from it.
- Resume download: replace `public/Aravind-Kumar-M-Resume.pdf` when the resume changes.
- Screenshots live in `public/images/` and are listed under `shots` in `src/data.js`.

## Structure
- `src/pages/` - Home, the Adaptive DSA Coach case study, and the 404 page
- `src/components/` - one file per section, plus the command palette (Ctrl+K), the screenshot gallery and the hero's learning-curve illustration
- `src/lib/hooks.js` - theme (dark and light), active nav section, cursor spotlight
- `src/index.css` - colour and font tokens, shared styles, reduced-motion rules
- `vite.config.js` - also writes `robots.txt` and `sitemap.xml`, and fills in the share-image tags

## Before you deploy
1. **Set the site address.** Put the real URL in `.env.production`:
   `VITE_SITE_URL=https://your-address`
   Until it is set, the build leaves out the canonical link, share-image tags and sitemap rather than shipping a wrong address.
2. **Deploy.** Vercel works as-is: `vercel.json` routes every path to the app, so
   `/case-studies/adaptive-dsa-coach` loads on a refresh.
3. **After it is live,** check the share preview by pasting the link into LinkedIn or WhatsApp, run Lighthouse again, and add the URL to your GitHub profile website field, your LinkedIn and your resume.

## Notes
- Fonts (Inter, Space Grotesk, JetBrains Mono) are Latin subsets in `public/fonts/` and preloaded, so there are no requests to Google Fonts.
- Animations switch off for visitors who prefer reduced motion.
- The learning curve in the hero is an illustration, not real data, and says so on the page.
- Contact is a mailto link and a copy-email button. There is no form, so no third-party keys.
- The resume PDF includes a phone number, so anyone who opens the site can download it.
- The screenshots show projects running locally with demo data. Leyaa.ai is described in text only, because it is a company product.
