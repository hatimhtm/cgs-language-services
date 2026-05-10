<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/hero-banner-dark.svg" />
    <img src="assets/hero-banner.svg" alt="CGS Language Services" width="100%" />
  </picture>
</p>

<p align="center">
  <a href="https://github.com/hatimhtm/cgs-language-services/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/hatimhtm/cgs-language-services/ci.yml?branch=main&style=for-the-badge&label=CI&labelColor=1A1A1A&color=CCFF00" alt="CI" /></a>
  <a href="https://cgs-language-services.vercel.app"><img src="https://img.shields.io/badge/LIVE_SITE-CCFF00?style=for-the-badge&logo=vercel&logoColor=1A1A1A" alt="Live site" /></a>
  <img src="https://img.shields.io/badge/CLIENT_WORK-SHIPPED-1A1A1A?style=for-the-badge&labelColor=1A1A1A" alt="Client work — shipped" />
  <img src="https://img.shields.io/badge/React-19-1A1A1A?style=for-the-badge&logo=react&logoColor=CCFF00" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-8-1A1A1A?style=for-the-badge&logo=vite&logoColor=CCFF00" alt="Vite 8" />
  <img src="https://img.shields.io/badge/Tailwind-4-1A1A1A?style=for-the-badge&logo=tailwindcss&logoColor=CCFF00" alt="Tailwind 4" />
</p>

<p align="center">
  <em>Multilingual marketing site for <strong>CGS Language Services</strong> — the document-translation division of <a href="https://www.cgs-language-services.vercel.app">China Global Study</a>. EN · FR · AR · ZH with full right-to-left support for Arabic, ~2,000 LOC of modern React 19 / Vite 8 / Tailwind 4, Framer Motion entrance animations, shipped to production on Vercel. Built for them on a freelance engagement.</em>
</p>

---

### `/// THE BRIEF`

CGS's parent agency, **China Global Study**, places students from Morocco and North Africa into Chinese universities. The brief: a marketing site for CGS's translation arm that

1. **Reads natively in all four operating languages** — English for the international/marketing layer, French for Moroccan students, Arabic (RTL) for the Maghreb, Chinese for university-side legitimacy.
2. **Sells one thing well** — 24-hour document translation accepted by Chinese universities. No service bloat, no portal sign-ups, just a WhatsApp-first funnel.
3. **Feels institutional**, not corporate-template. Layout, typography and motion had to look at home next to a university admissions page.

---

### `/// HIGHLIGHTS`

| | |
|---|---|
| **Four-language i18n** | `react-i18next` with full string-table split, language-aware HTML `dir` and `lang` attributes, `localStorage`-cached preference, navigator-language detection fallback |
| **Right-to-left support** | Arabic locale flips `dir="rtl"` at the root; Tailwind logical properties (`start-` / `end-`) keep layouts mirror-correct without per-component overrides |
| **React 19 + Vite 8 + TypeScript 6 + Tailwind 4** | Bleeding-edge stack; build is `tsc -b && vite build` for type-checking pass first |
| **Framer Motion polish** | Page transitions via `AnimatePresence`, staggered entrance animations on every section |
| **WhatsApp-first funnel** | Floating WhatsApp button, dedicated CTAs throughout, no contact form / portal friction |
| **Marketing-grade copy** | Strings live in `i18n/locales/*.json` — copy iterations don't touch JSX |
| **Zero-config Vercel deploy** | `vercel.json` + `_redirects` ship the SPA cleanly |

---

### `/// PAGES`

- **Home** — Hero · trust strip · Services · Universities · Languages · Process · WhyUs · CTA
- **Services** — the four documents CGS specialises in (diploma · transcript · school certificate · criminal record), each with what's included
- **Process** — three steps in one working day; how to send a clean scan; what arrives back
- **About** — origin story (built inside the parent agency), values
- **Contact** — WhatsApp / email / office hours / what to have ready before messaging

---

### `/// STACK`

```
React 19      · vite 8 · TypeScript 6     · React Router 7
Tailwind 4    · framer-motion 12          · lucide-react
i18next 26    · i18next-browser-languagedetector · react-i18next 17
```

---

### `/// PROJECT LAYOUT`

```
src/
├── App.tsx                    routes + locale sync
├── main.tsx
├── index.css                  Tailwind 4 root + paper-grid texture
├── pages/
│   ├── HomePage.tsx           composed of the home-section components
│   ├── ServicesPage.tsx
│   ├── ProcessPage.tsx
│   ├── AboutPage.tsx
│   └── ContactPage.tsx
├── components/
│   ├── Hero.tsx               headline + trust badge + faux-doc preview
│   ├── TrustStrip.tsx
│   ├── Services.tsx           four service cards
│   ├── Languages.tsx          EN · FR · AR · ZH samples
│   ├── Process.tsx            three-step timeline
│   ├── WhyUs.tsx              four reasons grid
│   ├── Universities.tsx       socials proof / logos
│   ├── CTA.tsx                bottom-of-page conversion
│   ├── Nav.tsx                language switcher + mobile menu
│   ├── Footer.tsx
│   ├── FloatingWhatsApp.tsx   sticky bottom-right CTA
│   ├── LanguageSwitcher.tsx
│   ├── PageHero.tsx           shared inner-page hero block
│   └── PageTransition.tsx     wraps every route in framer-motion
├── i18n/
│   ├── config.ts              languages table + i18next init
│   └── locales/{en,fr,ar,zh}.json
├── lib/
│   └── constants.ts           contact info (WhatsApp, email)
└── vite-env.d.ts
```

---

### `/// LOCAL DEV`

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc -b && vite build
npm run preview  # serve the build at :4173
```

---

### `/// STATUS`

🟢 **Live at [cgs-language-services.vercel.app](https://cgs-language-services.vercel.app)** — shipped, in production, in use. Engagement complete; this repo is the public archive of the build.

---

<p align="center">
  <a href="https://hatimelhassak.is-a.dev"><img src="https://img.shields.io/badge/PORTFOLIO-1A1A1A?style=for-the-badge&logo=vercel&logoColor=CCFF00" alt="Portfolio" /></a>
  <a href="https://cal.com/hatimelhassak/engineering-discovery"><img src="https://img.shields.io/badge/BOOK_A_CALL-CCFF00?style=for-the-badge&logo=googlecalendar&logoColor=1A1A1A" alt="Book a call" /></a>
  <a href="https://www.linkedin.com/in/hatim-elhassak/"><img src="https://img.shields.io/badge/LINKEDIN-1A1A1A?style=for-the-badge&logo=linkedin&logoColor=CCFF00" alt="LinkedIn" /></a>
  <a href="mailto:hatimelhassak.official@gmail.com"><img src="https://img.shields.io/badge/EMAIL-1A1A1A?style=for-the-badge&logo=gmail&logoColor=CCFF00" alt="Email" /></a>
</p>

<p align="center">
  <code>///&nbsp;&nbsp;OPEN FOR NEW WORK&nbsp;&nbsp;///&nbsp;&nbsp;CONTRACT &amp; FREELANCE&nbsp;&nbsp;///&nbsp;&nbsp;REMOTE WORLDWIDE&nbsp;&nbsp;///</code>
</p>
