# Business Analyst Portfolio

A premium single-page portfolio for **Sheetal Kirjawalekar**, Techno-functional Business Analyst (Pune, India).

Built with **React 18 + Vite** and hand-crafted CSS — no UI framework. Deep navy & champagne-gold design with editorial serif typography (Fraunces), scroll-reveal animations, animated counters, skill bars, timeline, case-study modals, magnetic buttons and a tilted gold marquee. Fully responsive from large desktops to small phones, with `prefers-reduced-motion` support.

## Run locally

```bash
npm install
npm run dev      # dev server on http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Structure

```
index.html                  # fonts, meta, OG tags
public/assets/              # profile photo + downloadable resume PDF
scripts/make_resume.py      # regenerates the resume PDF (reportlab)
src/
  App.jsx                   # section composition
  styles.css                # entire design system
  data/content.js           # ⭐ single source of truth — edit content here
  hooks/hooks.js            # reveal, count-up, timeline, magnetic, rotator
  components/               # Nav, Hero, Marquee, About, Expertise, Skills,
                            # Experience, Projects, Contact, Footer, Chrome
```

## Customising

- **Content** (name, roles, projects, skills, contacts): edit `src/data/content.js`.
- **Profile photo**: replace `public/assets/img/profile.jpg` (your LinkedIn photo works best).
- **Résumé**: replace `public/assets/Sheetal_Kirjawalekar_Resume.pdf`, or edit `scripts/make_resume.py` and run `python3 scripts/make_resume.py` (requires `pip install reportlab`).
- **Colours / fonts**: tweak CSS variables at the top of `src/styles.css`.

## Deploy

Any static host works — run `npm run build` and publish the `dist/` folder (Vercel, Netlify, GitHub Pages).
