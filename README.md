# Honeysuckle — Weeping Willow Co.

Brand website for Honeysuckle, a premium non-alcoholic cocktail by Weeping Willow Co.

## Tech Stack

- **Framework:** Next.js 15 (static export)
- **Styling:** Tailwind CSS v4 + inline styles
- **Deployment:** Netlify (static site, no server functions)
- **Forms:** Netlify Forms (native POST)
- **E-commerce:** Shopify Buy Button SDK

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, product intro, email signup |
| `/our-story` | Brand story and founding |
| `/honeysuckle` | Product page with Shopify buy button |
| `/where-to-buy` | Stockists + wholesale inquiry form |
| `/contact` | Contact form |

## Local Development

Requires Node.js 20+.

```bash
cd honeysuckle-site
npm install
npm run dev
```

Site runs at `http://localhost:3000`.

> **Node.js 25+ note:** The `dev` script includes `NODE_OPTIONS='--localstorage-file=...'` to work around a compatibility issue between Next.js 15's dev overlay and Node.js 25's Web Storage API.

## Build & Deploy

```bash
npm run build   # outputs to /out
```

Deploys automatically via Netlify on push. Config is in `netlify.toml` — publish directory is `out`.

## Forms

Three Netlify Forms are registered in `public/netlify-forms.html` for build-time detection:

| Form name | Page | Success redirect |
|---|---|---|
| `honeysuckle-signup` | Homepage | `/signup/success` |
| `contact` | `/contact` | `/contact/success` |
| `wholesale-inquiry` | `/where-to-buy` | `/wholesale/success` |

All forms use native HTML POST — no JavaScript fetch. Submissions appear in the Netlify dashboard under **Forms**.

## Project Structure

```
honeysuckle-site/
├── public/
│   ├── images/           # Brand assets, product and stockist images
│   └── netlify-forms.html  # Static form declarations for Netlify detection
├── src/
│   ├── app/              # Next.js App Router pages
│   └── components/       # Navbar, Footer, Preloader, ShopifyBuyButton
├── netlify.toml
└── next.config.ts
```
