# Deploy to Cloudflare Pages

Two ways — pick one.

---

## Option A · Git integration (recommended — auto-deploys on every push)

1. **Merge the PR** (or skip this and use the arena branch directly):
   Open https://github.com/Ysb321/sportfolio/pull/1 → click **Merge pull request**.

2. Go to **https://dash.cloudflare.com** → **Workers & Pages** → **Create** → **Pages** tab → **Connect to Git**.

3. **Authorize GitHub** and select the repository **`Ysb321/sportfolio`**.

4. Set up the build:
   | Setting | Value |
   |---|---|
   | Project name | `sheetal-portfolio` (or anything you like — becomes `yourname.pages.dev`) |
   | Production branch | `main` |
   | Framework preset | **None** (or Vite — either works) |
   | Build command | `npm run build` |
   | Build output directory | `dist` |

5. Click **Save and Deploy**. First build takes ~1 minute.

6. Done — your site is live at `https://<project-name>.pages.dev`.
   Every future `git push` to `main` redeploys automatically. PRs get preview URLs.

> Node version is already pinned to 22 via `.nvmrc`, and caching/security headers
> are configured in `public/_headers`. Nothing else to set.

---

## Option B · Direct upload (no Git connection)

Requires Node 18+ installed locally:

```bash
git clone https://github.com/Ysb321/sportfolio.git
cd sportfolio
npm install
npm run build
npx wrangler login            # opens browser → Approve
npx wrangler pages deploy dist --project-name sheetal-portfolio
```

Wrangler prints the live URL when it finishes.

---

## After deploy

- **Custom domain** (optional): Cloudflare dashboard → your Pages project →
  **Custom domains** → add your domain (DNS is automatic if the domain is on Cloudflare).
- **Update the résumé**: replace `public/assets/Sheetal_Kirjawalekar_Resume.pdf`
  (or edit `scripts/make_resume.py` and run `python3 scripts/make_resume.py`, needs `pip install reportlab`).
- **Change the photo**: replace `public/assets/img/profile.jpg`.
- **Edit any text**: `src/data/content.js` — one file, everything in it.
