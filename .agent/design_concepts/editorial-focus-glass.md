# Design Concept: The "Editorial Focus" Architecture

## 1. The Core Aesthetic (The Vibe)
You are completely right. We moved too fast into execution before the DNA was properly locked. The "SaaS Tech Bento" is too cluttered (too many boxes screaming for attention), and the "Pure Editorial" is too static (just pretty pictures). 

You are looking for the **"Editorial Focus"** aesthetic. 

This is a hybrid architecture where the *elegance and mood* of high-end editorial meets the *interactive depth* of modern tech, without the clutter. 
- It uses a **Slate Black** foundation (warm, deep, moody—not pure harsh black).
- It relies on **Massive Focus Containers** instead of dozens of tiny bento boxes. 
- It creates **Pacing**: big scroll interactions followed by quiet, tangible grids you can consume at your own pace.
- **Glass as a Tool, Not a Gimmick**: Glassmorphism is only used when you *interact* with a Focus Container (like clicking to reveal a sleek pop-over), rather than being plastered everywhere.

## 2. Technical DNA (The Rules)

### 🎨 Colors
*   **Background (The Slate Void):** `#09090B` (Deep zinc/slate black. Never `#000000`).
*   **Surface (The Focus Container):** `#111113` or a very subtle gradient `#131316` to `#09090B`.
*   **Glass Pop-overs:** `rgba(17, 17, 19, 0.4)` with `backdrop-filter: blur(24px) saturate(150%)`.
*   **Accent:** `#c6f91f` (Zaitex Volt Green - used extremely sparingly, like a laser pointer).

### 📝 Typography (The "Neat & Straight" Rule)
*   **Primary Font:** `Satoshi` (sans-serif). 
*   **Headlines:** Uppercase, medium weight, with very tight tracking (`-0.02em`). This removes the "tech blockiness" of Bebas Neue but avoids the "boring corporate" look of Arial. It looks sharp, architectural, and neat.

### 📐 Shape Language
*   **Focus Cards (The Pillars):** Massive containers that take up 80-90% of the screen. Soft, luxurious corners (`border-radius: 24px` or `32px`). 
*   **Pop-overs:** Sleek, floating internal cards (`border-radius: 16px`).
*   **Borders:** Hair-thin and almost invisible. `1px solid rgba(255, 255, 255, 0.04)`.

## 3. Interaction Strategy (The Pacing)

You mentioned wanting a "dynamic site but not confusing" and liking the Gallery's balance. Here is the interaction ruleset:

1. **The Grand Entrance (Scroll Dynamics):** When you scroll to a new Pillar, the massive Focus Card doesn't just sit there. It sweeps or "turns" into the screen using Framer Motion. 
2. **The Quiet State:** Once the Focus Card is on screen, it is peaceful. Minimal text, one beautiful editorial or 3D image. You can look at it at your own pace.
3. **The Deep Dive (Click Dynamics):** It is not cluttered. If the user wants to know more about the "Web Design Engine", they click an "Explore" button. **Only then** does the beautiful glass container slide over the image to reveal the technical details.

## 4. Why This Works for ZAITEX
This perfectly answers your positioning. 
- The **Slate Black + Editorial Images** proves you are a high-end creative studio (Brand Identity).
- The **Sleek Glass Popovers + Scroll Physics** proves you build 2026-tier websites (Web Engine).
- The **Uncluttered Focus Layout** proves you understand conversion and user experience (Marketing Infrastructure).

---
*If this accurately describes the exact feeling in your head, we lock this in as the official `.agent/design/active-dna.md` and ONLY THEN do we prototype.*
