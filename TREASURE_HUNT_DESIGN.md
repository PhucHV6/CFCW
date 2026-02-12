# Chelsea FC Treasure Hunt — Mobile-First Design & Implementation Plan

## 1. Complete mobile-first game journey

### 1.1 Rules (player-facing)

- **Break time:** A single synchronized global start time for all players (e.g. “Starts 12:00 GMT, 15 March”).
- **Objective:** Find a hidden treasure somewhere on chelseafc.com (any section: Women’s, Men’s, News, Tickets, etc.).
- **Discovery:** When you land on the page that contains the treasure, the hub/app shows “You found it!” and unlocks the quiz.
- **Quiz:** Answer 3 questions about Chelsea (history, players, trophies, events). **One wrong answer = attempt ends immediately** (eliminated).
- **Reward:** Complete all 3 correctly to unlock a reward (membership voucher, gift voucher, or special offer).
- **Claiming:** You must connect your Chelsea account (Register or Login) to claim the reward.
- **Leaderboard:** Rankings by score and speed; visible in the hub.

### 1.2 User flows

```
[Entry from Hub] → [Intro / Rules] → [Clue + “Browse to find”] → [User browses chelseafc.com]
        ↑                                                                  │
        └──────────────────────────────────────────────────────────────────┘
                                    (treasure not on this page)
                                    (treasure on this page) → [Treasure found]
                                                                     │
                                    [3 questions, one wrong = out] ←──┘
                                            │
                        ┌───────────────────┴───────────────────┐
                        ▼                                           ▼
                 [All correct]                              [One wrong]
                        │                                           │
                        ▼                                           ▼
                 [Reward unlocked]                         [Eliminated – try next round]
                        │
                        ▼
                 [Connect account to claim]
                 (Register | Login)
                        │
                        ▼
                 [Reward claimed]
```

- **Entry:** From Women’s Hub home: prominent “Treasure Hunt” card (tap target ≥ 44px). Tapping opens the game flow (intro then play).
- **Intro:** Single scrollable screen: rules, break time, “Start” CTA. No auto-advance; user confirms.
- **Play:** One clue (e.g. “Where do the Blues play at home?”). Message: “Browse chelseafc.com to find the treasure. We’ll detect when you’re on the right page.” In a full implementation, the hub would run in a frame/side panel or use deep links; for the prototype, we simulate “Found” via a button or timer.
- **Treasure found:** Full-screen celebration, then “Answer 3 questions to unlock the reward.”
- **Questions:** One question at a time, 4 options, large tap targets. On wrong answer: immediate “Eliminated” screen, no retry. On correct: next question. After 3 correct: “Reward unlocked.”
- **Claim:** Screen with “Connect with your Chelsea account to claim this award” and [Register] [Login].
- **Leaderboard:** Accessible from intro and after result; list with rank, name, score/time.

### 1.3 UI logic and responsive behavior

| Element | Mobile (320–428px) | Tablet (768px+) | Desktop |
|--------|---------------------|------------------|--------|
| Buttons | Full-width or 2-col grid, min 44px height | Max-width block or inline, same min height | Same, centered in game card |
| Clues / text | Single column, 16–18px body, scrollable | Same, max-width ~480px | Same |
| Questions | One per screen, options stacked vertically | Same | Same |
| Pop-ups | Full-screen takeover or bottom sheet | Modal max 400px wide | Modal max 400px |
| Progress | Linear bar top or step dots, always visible | Same | Same |
| Leaderboard | Scrollable list, sticky header | Same, optional 2-col on large | Same |

- **Thumb zones:** Primary actions (Start, Answer, Register, Login) placed in lower half or center; secondary (Back, Leaderboard) top or bottom bar.
- **Vertical scrolling:** All game screens scroll when content overflows; no horizontal scroll for main content.
- **Treasure indicators:** In a real integration, “treasure” is a beacon on a specific page (e.g. script on chelseafc.com); in the hub we show “Looking for treasure…” and “Found!” when the condition is met (simulated in prototype).

---

## 2. Treasure randomization mechanism

### 2.1 Design goals

- Same treasure location for all players in a given round (fair).
- Location changes each round (e.g. daily or per “break time”).
- Works for both mobile and desktop browsing (URL-based).

### 2.2 Mechanism

- **Round:** Identified by `roundId` (e.g. date + slot: `2025-03-15-A`).
- **Pool:** Predefined list of eligible URLs on chelseafc.com (e.g. 50–100 pages: Women’s, Men’s, News, Stadium, Tickets, Shop, etc.). All must be reachable on mobile and desktop.
- **Selection:** `treasurePageUrl = hash(roundId + secretSalt) % pool.length` → pick one URL from the pool. Same `roundId` + salt → same page for everyone.
- **Detection:** On chelseafc.com: embed a lightweight script or use a redirect that passes a token to the hub; or hub in iframe/side panel and check `document.referrer` / URL param after return. Mobile: same logic; deep link back to hub with `?found=1&round=…` when user opens the treasure page.
- **Mobile vs desktop:** No difference in logic; both resolve the same URL for the round. Mobile users may use in-app browser or external browser; return-to-hub via deep link or app switch.

---

## 3. Three question sets (increasing difficulty, reasoning)

Questions are Chelsea-specific: history, players, trophies, major events. One set per round or one set chosen at random per round; each player gets 3 questions in order (easy → medium → hard).

### Set A (example)

1. **Easy (recall):** “In which decade did Chelsea FC win their first league title?”  
   - 1950s / 1960s / 1990s / 2000s → **1950s** (1954–55).

2. **Medium (reasoning):** “Chelsea Women won the WSL and FA Cup double in the same season. Which year was it?”  
   - 2015 / 2017 / 2020 / 2022 → **2015** (requires knowing “first double” or key double year).

3. **Hard (reasoning):** “Which Chelsea Women player has won the most WSL Golden Boots (as of a given cutoff)?”  
   - Sam Kerr / Fran Kirby / Beth England / Eni Aluko → **Sam Kerr** (requires knowledge of Golden Boot history).

### Set B (example)

1. **Easy:** “What is the name of Chelsea’s home stadium?”  
   - Emirates / Stamford Bridge / Wembley / King Power → **Stamford Bridge**.

2. **Medium:** “Chelsea Men’s first Champions League triumph was in which city?”  
   - London / Munich / Manchester / Milan → **Munich** (2012 final).

3. **Hard:** “Which manager led Chelsea Women to their first UEFA Women’s Champions League final?”  
   - Emma Hayes / Casey Stoney / Joe Montemurro / Marc Skinner → **Emma Hayes**.

### Set C (example)

1. **Easy:** “What colour is prominently featured on Chelsea’s home kit?”  
   - Red / Blue / White / Yellow → **Blue**.

2. **Medium:** “In which year did Chelsea Women complete a domestic quadruple (league, FA Cup, League Cup, Community Shield)?”  
   - 2020 / 2021 / 2022 / 2023 → **2021**.

3. **Hard:** “Who scored the winning penalty in the 2012 Champions League final for Chelsea?”  
   - Didier Drogba / Frank Lampard / Petr Čech / (decoy) → **Didier Drogba** (takes the fifth penalty to win it).

- **Reasoning:** Easy = direct recall; medium = one-step inference or date/place recall; hard = multi-fact or less well-known fact. This spreads difficulty and rewards knowledge depth.
- **One wrong = eliminated:** Reduces support load, prevents brute force, and scales for large participant volumes. Justification: see §9.

---

## 4. Responsive UI/UX concepts and wireframe ideas

### 4.1 Mobile-first wireframe (320–428px)

- **Intro:** [Logo] “Treasure Hunt” / “Break time: 15 Mar, 12:00 GMT” / Short rules (bullet list) / [Start] [Leaderboard].
- **Play:** Clue in a card; “Browse chelseafc.com to find the treasure” / [Open site] or [I found it] (simulated).
- **Found:** Full screen: “You found the treasure!” / [Unlock with 3 questions].
- **Quiz:** Progress (1/3, 2/3, 3/3); question text; 4 full-width option buttons; [Confirm] or tap option to confirm.
- **Result:** “Reward unlocked!” or “Eliminated”; [Leaderboard] [Claim] or [Try next round].
- **Claim:** “Connect with your Chelsea account to claim this award” / [Register] [Login].
- **Leaderboard:** Sticky “Live leaderboard”; list: rank, avatar/initial, name, score/time.

### 4.2 Scaling

- **Tablet:** Same layout; game area max-width 480px, centered; touch targets unchanged.
- **Desktop:** Same; optional side panel or modal so user can “browse” in main window and see hub in a panel (or separate tab). No reduction of tap target size.

---

## 5. Leaderboard system

### 5.1 Data model (minimal)

- **Entry:** `{ userId, displayName, roundId, score, completedAt, totalTimeMs }`
- **score:** e.g. 100 for completing; optional: +bonus for speed (e.g. 100 − 0.01 × seconds).
- **Ranking:** Primary: `score` DESC; tie-break: `totalTimeMs` ASC (faster = better).

### 5.2 Ranking logic

- **Primary:** Higher score first (completed = 100; eliminated = 0).
- **Tie-break:** Among same score, lower `totalTimeMs` (time from round start to completion) ranks higher. Encourages both correctness and speed.
- **One wrong = eliminated:** Eliminated players get score 0 and still appear on leaderboard (e.g. at bottom) so they see their attempt; completed players always above them.

### 5.3 Refresh frequency

- **Real-time:** Push (WebSocket) or short polling (e.g. every 5–10 s) during active round. After round end, polling can slow (e.g. 30 s) or stop.
- **Mobile:** Prefer batched updates to save battery; same 5–10 s interval is acceptable. Show “Last updated X s ago” to set expectations.

### 5.4 Fairness of “one wrong = eliminated”

- **Fairness:** Same rule for everyone; no retries; reward only for 3/3. Reduces luck and encourages preparation.
- **Scale:** No replay flood; one attempt per user per round (enforced server-side). Clear end state for support and systems.

---

## 6. Anti-cheat and anti-spam strategies

### 6.1 Anti-cheat

- **One attempt per user per round:** Server records `userId + roundId`; second attempt rejected or ignored for ranking.
- **Server-authoritative answers:** Questions and correct answers only on server; client sends only selected option IDs; server validates and returns pass/fail.
- **Time bounds:** Quiz must be completed within N minutes of “treasure found” (e.g. 5). Reject late submissions.
- **No inspect/automation:** Obfuscate option order per request; rate-limit API; detect impossible response times (e.g. &lt; 1 s for all 3).

### 6.2 Anti-spam (especially mobile)

- **Rate limiting:** Per IP and per user: max requests per minute for “check treasure,” “submit answer,” “claim.” E.g. 10/min for play, 5/min for submit.
- **CAPTCHA / verification:** Optional on Register/Login or before first “Start” in a round if risk signals (e.g. new account, many failures).
- **Device/session:** One active attempt per device/session; discourage multi-accounting via account verification (email/phone) for claim.

---

## 7. KPIs for engagement and performance by device

### 7.1 Engagement

- **Participation rate:** Unique users who tap “Start” in a round / unique visitors to hub in that period (by device type).
- **Completion rate:** Users who get 3/3 / users who started the quiz (by device).
- **Elimination rate:** Users eliminated at Q1, Q2, Q3 (by device) — informs difficulty tuning.
- **Claim rate:** Users who click Register/Login after unlock / users who unlocked (by device).
- **Leaderboard views:** Opens and time on leaderboard (by device).

### 7.2 Performance

- **Load time:** P95 for game entry and quiz screens (by device / connection).
- **Error rate:** Failed submissions, timeouts (by device).
- **Drop-off:** % drop at Intro → Play, Play → Found, Found → Q1, Q1→Q2, Q2→Q3 (by device).

### 7.3 Device split

- Report all KPIs segmented by mobile / tablet / desktop (and optionally by OS) to spot usability or technical issues on mobile.

---

## 8. Risks and mitigation

| Risk | Mitigation |
|------|------------|
| **Usability:** Small tap targets on mobile | Enforce min 44px height/width for all buttons; use full-width options in quiz. |
| **Navigation:** User loses hub after opening chelseafc.com | Deep link back (“Return to Hub” on treasure page); in-app browser or WebView with “Back to Hub” bar. |
| **Device constraints:** Slow network, low memory | Lazy-load leaderboard; minimal assets on play screen; server-driven question text only when needed. |
| **Traffic spikes at break time** | Auto-scale backend; queue for “check treasure” and “submit answer”; static intro/rules cached; rate limiting. |
| **Cheating / multi-account** | One attempt per user per round; account verification to claim; server-side validation. |
| **Accessibility** | Semantic HTML, ARIA where needed, focus order, sufficient contrast (already in hub). |

---

## 9. Critical-thinking justifications

- **One wrong = eliminated:** Maximizes fairness at scale (no retries), reduces support (“I clicked wrong”), and makes the reward meaningful. For very large volumes, it also keeps server load predictable (one attempt per user per round).
- **Synchronized break time:** Creates a shared “event” and drives traffic at a known time (easier to scale and market). Avoids “first-come-first-served” feeling by making the puzzle the same for everyone in that window.
- **3 questions, increasing difficulty:** Balances accessibility (easy first) with discrimination (hard for ranking). Reasoning-based questions reduce guess success and reward real fans.
- **Account verification before claim:** Ensures rewards go to real, single accounts; supports anti-abuse and CRM (email/phone for vouchers). Register/Login is a clear, mobile-friendly step.
- **Leaderboard by score then time:** Score reflects success; time reflects engagement and skill. Transparent and easy to explain.
- **Treasure on whole site (not only Women’s):** Increases exploration of chelseafc.com and fits a club-wide campaign; Women’s Hub remains the natural entry and home for the game UI.

---

## 10. Implementation notes (this prototype)

- **In-app flow:** Intro → Play (clue + “Simulate found”) → Quiz (3 questions, one wrong = out) → Result → Leaderboard → Claim (Register/Login message + buttons).
- **Countdown to start:** On-screen label on Intro shows “Starts in HH:MM:SS” until the synchronized half-time (break-time) UTC; after that it shows “Game on! Tap Start to find the treasure.” Uses a single target timestamp and 1s tick; mobile-first (large monospace digits, clear label). Reasoning: aligns all players to the same start window; reduces “when does it start?” support.
- **Radar (after game started):** On Play, a small circular radar (140px) shows “you” at center (blue dot) and a treasure-direction blip (amber, pulsing) at a random angle; optional rotating sweep line. Caption: “Explore chelseafc.com in this direction.” Reasoning: guides exploration without revealing exact page; works on small screens; in production the angle could be server-driven (e.g. relative to current page/section).
- **Treasure randomization:** Simulated with a fixed “treasure page” label and mock “Found” after a short delay or button tap; real integration would use the mechanism in §2.
- **Questions:** Three predefined sets (A/B/C) with easy/medium/hard; one set used per run.
- **Leaderboard:** Mock data; UI supports rank, name, score, time; refresh simulated.
- **Claim:** Screen with copy and buttons only; no real auth.
- **Responsive:** Same breakpoints and touch targets as the rest of the Women’s Hub; game screens are full-screen within the hub’s max-width container.
