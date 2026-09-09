# Deploy to Cloudflare Pages

This project is **already deployed** — the production branch is
`arena/01a08741-sportfolio` (not `main`). Every push to that branch
auto-deploys to Cloudflare Pages.

---

## How deploys work now

- **Push to `arena/01a08741-sportfolio`** → automatic production deploy.
- **`main` is not connected** — nothing deploys from it.
- Caching & security headers: `public/_headers`. Node version: `.nvmrc` (22).

## If you ever need to reconnect or redeploy manually

1. Go to **https://dash.cloudflare.com** → **Workers & Pages** → your project → **Settings → Builds & deployments**.
2. The connected settings should be:
   | Setting | Value |
   |---|---|
   | Production branch | `arena/01a08741-sportfolio` |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
3. **Retry deploy**: project → **Deployments** → latest → **⋯ → Retry deployment**.
   Or push any commit to the production branch.

---

## After deploy

- **Custom domain** (optional): Cloudflare dashboard → your Pages project →
  **Custom domains** → add your domain (DNS is automatic if the domain is on Cloudflare).
- **Update the résumé**: replace `public/assets/Sheetal_Kirjawalekar_Resume.pdf`
  (or edit `scripts/make_resume.py` and run `python3 scripts/make_resume.py`, needs `pip install reportlab`).
- **Change the photo**: replace `public/assets/img/profile.jpg`.
- **Edit any text**: `src/data/content.js` — one file, everything in it.
