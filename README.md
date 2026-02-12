# Chelsea FC Women Hub — Hackathon Prototype

A **lightweight, mid-fi prototype** for a Chelsea FC Women fan hub: discovery, engagement, tickets, merch, and data capture in one mobile-first experience.

---

## What this is

- **Prototype only** — Ideas and potential directions for a CFCW hub. Not production-ready; no real checkout, auth, or CMS.
- **Clickable and scrollable** — Run the app to see layout, hierarchy, and key journeys.
- **Hackathon submission** — Designed to meet the brief: prototypes, concepts, IA, user flows, and key features.

👉 **Full submission write-up:** [**HACKATHON.md**](./HACKATHON.md) — concepts, information architecture, user flow diagrams (Mermaid), and feature/interaction ideas.

---

## Run locally

**Prerequisites:** Node.js

1. Install dependencies: `npm install`
2. Run the app: `npm run dev`
3. Open the URL shown (e.g. `http://localhost:5173`) in your browser.

---

## What you’ll see

| Area | Purpose |
|------|--------|
| **Home** | Featured video, next fixture (Buy Tickets), Matchday Guide & Store links, Treasure Hunt card, Fan Zone (predict the score + email), trending moments |
| **Matchday** | Venue toggle (Stamford Bridge / Kingsmeadow), “Are you attending?”, travel, stadium map, tips |
| **Profiles** | Squad & staff tabs, position filter, tap through to player profile |
| **About** | Club history, honours timeline, legacy |
| **Treasure Hunt** | Mobile-first mini-game: find treasure on chelseafc.com, answer 3 questions (one wrong = out), leaderboard, claim with Register/Login. See [TREASURE_HUNT_DESIGN.md](./TREASURE_HUNT_DESIGN.md). |

---

## Tech

- React 19, TypeScript, Vite
- Tailwind-style utility classes (custom Chelsea palette)
- No backend; static data and local state only

---

*Hackathon exploration only — not an official Chelsea FC product.*
