# SurakshaPath — LIC Plan Explorer + Bindu Chatbot

An independent, bilingual (English/Hindi) website that catalogues LIC of India's
publicly listed insurance, pension and ULIP plan categories, with **Bindu**, a
guided chatbot that shortlists plans from this site based on a visitor's need —
and never invents a plan that isn't actually listed.

> **Not affiliated with LIC.** This is a reference/lead-generation site. Always
> confirm exact premiums, terms and exclusions on [licindia.in](https://licindia.in)
> or with a licensed advisor before anyone buys a policy.

## Stack

- **React 19 + Vite** — fast build, easy to deploy anywhere static
- **Tailwind CSS v4** — utility styling, theme tokens in `src/index.css`
- **react-router-dom** — client-side routing
- **react-i18next** — English/Hindi, persisted in `localStorage`
- **Bindu chatbot** — rule-based state machine in `src/chatbot/engine.js`,
  scores against `src/data/plans.js` only (no external AI call, so it can
  never hallucinate a plan)
- **Web3Forms** — free lead-capture email delivery, no backend required

## Project structure

```
src/
  data/plans.js          <- every plan lives here (single source of truth)
  chatbot/engine.js       <- Bindu's conversation steps + recommendation scoring
  i18n/locales/en.json    <- all English UI text
  i18n/locales/hi.json    <- all Hindi UI text
  components/             <- Navbar, Footer, PlanCard, ChatWidget (Bindu), etc.
  pages/                  <- Home, Plans, PlanDetail, About, Contact
  utils/sendLead.js       <- lead delivery (Web3Forms + mailto fallback)
```

## Running locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Adding or editing a plan

Open `src/data/plans.js` and add an object to the `PLANS` array:

```js
{
  id: 'unique-slug',
  planNo: 123,
  uin: '512Xxxxxxxx',
  category: 'term', // term | endowment | wholeLife | moneyBack | pension | ulip
  name: { en: 'Plan Name', hi: 'हिंदी नाम' },
  tagline: { en: '...', hi: '...' },
  description: { en: '...', hi: '...' },
  idealFor: ['protection', 'lowBudget'], // see NEEDS array for valid tags
  minSumAssured: '₹1 Lakh',
  officialLink: 'https://licindia.in/...',
}
```

Nothing else needs to change — the listing page, plan detail page, search,
filters and Bindu's recommendations all read from this one array automatically.

## Configuring lead capture (no backend needed)

1. Go to [web3forms.com](https://web3forms.com), sign up free, and grab an
   Access Key (just needs your email).
2. Copy `.env.example` to `.env` and set:
   ```
   VITE_WEB3FORMS_KEY=your-access-key
   VITE_LEAD_EMAIL=you@example.com
   ```
3. Both the Contact page and Bindu's "request a callback" flow will now email
   you every submission directly — no server, no database.

If you skip this step, submissions fall back to opening a pre-filled email in
the visitor's own mail app, so nothing is silently lost.

## Updating your phone number

Search the codebase for `+91-90000-00000` (in `Navbar.jsx` and `Contact.jsx`)
and replace it with your real number.

## Deploying to your domain

Any static host works since this builds to plain HTML/CSS/JS:

```bash
npm run build     # outputs to dist/
```

- **Netlify / Vercel**: connect the GitHub repo, build command `npm run build`,
  publish directory `dist`. Then point your domain's DNS at them.
- **Traditional hosting (cPanel etc.)**: run `npm run build` and upload the
  contents of `dist/` to your domain's public folder.
- **GitHub Pages**: push `dist/` to a `gh-pages` branch, or use the
  `peaceiris/actions-gh-pages` GitHub Action.

## Scaling this further

- Add more languages by dropping a new file in `src/i18n/locales/` and
  registering it in `src/i18n/index.js`.
- Add more need-tags to `NEEDS` in `plans.js` and reuse them across plans —
  Bindu's matcher and the filter chips pick them up automatically.
- If you later want Bindu to hold a more natural conversation while still
  only ever citing real plans, put a small backend (or serverless function)
  in front of an AI API, retrieve matching plans from `plans.js` server-side,
  and have the model summarise *only* those retrieved plans — never let it
  answer from open-ended memory.
