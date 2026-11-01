# Aravind Kumar M - Portfolio

Personal portfolio site. React 19, Vite, Tailwind CSS 4, Motion for animation.

## Run it
```bash
npm install
npm run dev      # http://127.0.0.1:5173
npm run build    # production build in dist/
npm run lint
```

## Edit the content
All text, links and project details live in `src/data.js`. Change them there; the components read from it.
The resume download is `public/Aravind-Kumar-M-Resume.pdf` - replace that file when the resume changes.

## Structure
- `src/components/` - one file per section (Hero, About, Experience, Projects, Skills, Education, Contact)
- `src/lib/hooks.js` - theme (dark and light), active nav section, cursor spotlight
- `src/index.css` - colour and font tokens, shared styles, reduced-motion rules

## Notes
- Fonts (Inter, Space Grotesk, JetBrains Mono) are bundled, so there are no requests to Google Fonts.
- Animations switch off for visitors who prefer reduced motion.
- Contact is a mailto link and a copy-email button. There is no form, so no third-party keys.
