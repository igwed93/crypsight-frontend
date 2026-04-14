# Crypsight

> The ultimate lens for the Solana ecosystem. Compare protocols, track capital flow, and discover high-signal opportunities with institutional-grade data.

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Font:** Inter (via `next/font/google`)

---

## Project Structure

```
app/
├── layout.tsx          # Root layout — fonts, metadata, navbar, footer
├── page.tsx            # Homepage — assembles all sections
└── globals.css         # Design tokens, Tailwind theme, shadcn variables

components/
├── ui/                 # shadcn auto-generated components (do not edit manually)
├── layout/
│   ├── Navbar.tsx      # Fixed top navbar with wallet connection
│   └── Footer.tsx      # Site footer with link columns
└── sections/
    ├── Hero.tsx                  # Landing hero with glow effect and CTAs
    ├── EcosystemVerticals.tsx    # DeFi, Wallets, NFTs, Infrastructure cards
    ├── ProtocolBattleground.tsx  # Side-by-side protocol comparison cards
    └── NewsletterCTA.tsx         # Email subscription section
```

---

## Getting Started

### Prerequisites

- Node.js 20.9 or higher
- npm

### Installation

Clone the repository:

```bash
git clone <your-repo-url>
cd crypsight
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Design System

All design tokens live in `app/globals.css` under the `@theme` block. This is the single source of truth for the entire project.

| Token                    | Value     | Usage                                 |
| ------------------------ | --------- | ------------------------------------- |
| `--color-bg-primary`     | `#080b14` | Page background, hero, sections       |
| `--color-bg-secondary`   | `#0d1117` | Navbar, footer                        |
| `--color-bg-card`        | `#111827` | Cards                                 |
| `--color-brand-purple`   | `#a855f7` | Primary CTA, logo, icons              |
| `--color-brand-cyan`     | `#22d3ee` | Active states, accents, progress bars |
| `--color-text-secondary` | `#9ca3af` | Subtitles, descriptions               |

To change a colour across the entire app, update its token here — no hunting through component files.

---

## Key Conventions

**Server vs Client Components** — every component is a Server Component by default (no JavaScript shipped to the browser). Only components that need hooks or interactivity use "use client".

**Data-driven components** — cards, nav links, and footer columns are all driven by arrays defined at the top of each file. Adding a new card or link means editing the data array, not the JSX.

**Token-based styling** — never hardcode hex values in components. Always use the Tailwind utility classes that map to CSS tokens (e.g. `bg-brand-purple`, `text-text-secondary`).

---

## Environment Variables

Create a `.env.local` file in the root for local secrets. This file is gitignored and should never be committed.

```bash
# .env.local
# Add your environment variables here as the backend is integrated
```

---

## Contributing

1. Create a feature branch — `git checkout -b feat/your-feature`
2. Make your changes following the conventions above
3. Commit with a descriptive message — `git commit -m "feat: add whale tracker section"`
4. Push and open a pull request

---

## Roadmap

- [x] Landing page
- [ ] Explore page
- [ ] Protocol comparison page
- [ ] Pricing page
- [ ] Documentation page
- [ ] Dashboard (post-auth)
- [ ] Wallet connection integration
- [ ] Backend API integration
