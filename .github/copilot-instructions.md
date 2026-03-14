# copilot-instructions.md

## Project goal
Build a public-facing landing page for **RosCro Industries**, an EVE Online corporation.

This repository is for a **marketing / recruitment / identity landing page** only.
It does **not** need:
- authentication
- EVE SSO
- backend
- database
- member portal
- admin tools

The purpose of the page is to:
1. explain who RosCro Industries is
2. present what the corporation does today
3. communicate its long-term direction
4. make it easy to join via Discord
5. provide lightweight recruitment / application guidance
6. present a serious and credible identity

The landing page should feel like a **real corporation homepage inside the EVE Online universe**:
- industrial
- disciplined
- structured
- long-term oriented
- serious
- clear
- not flashy
- not generic SaaS

---

## Language and tone
All page copy must be written in **English**.

Tone requirements:
- strict industrial
- serious
- mature
- calm
- deliberate
- structured
- credible

Avoid:
- hype
- meme tone
- overly casual community copy
- "elite pvp god-tier" language
- startup buzzwords
- cringe military roleplay
- exaggerated promises

Preferred wording style:
- long-term
- project-driven
- disciplined growth
- industrial foundation
- steady progress
- operational focus
- contribution
- structure
- capability
- development
- independence
- strategic trajectory

---

## Source of truth: corp identity

Use the following as source material:

**ROSCRO INDUSTRIES**

A project-driven corporation for builders, industrialists and long-term players.

Our foundation:
- Industry
- Mining
- Exploration
- PvE

Our trajectory:
Small-gang PvP → Nullsec → Independent growth within a like-minded bloc.

We are creating a permanent home for pilots who want to contribute, progress and build something that lasts.

Newbro friendly.
Veteran compatible.
Real life comes first.

No activity requirements.
No bloc mentality.
Just clear goals and steady progress.

Public channel: roscro-pub
Recruitment: OPEN

---

## Key business / identity requirements
The page must clearly communicate the following:

- Who RosCro Industries is
- That the corporation is currently built around **highsec production**
- That the long-term aim is to **live and operate in nullsec**
- That there is a **Discord link**
- That there is lightweight **application / recruitment information**
- That the **in-game public channel** is also a contact path
- That there is **no SSO/login**
- That a future reports section may exist later, but is not implemented now

---

## Contact / CTA constants
Expose these as clearly editable constants in a single place, such as `lib/site-config.ts` or similar.

```ts
export const SITE_CONFIG = {
  corpName: "RosCro Industries",
  discordUrl: "https://discord.gg/TXtvpa49",
  publicChannel: "roscro-pub",
  recruitmentStatus: "OPEN",
};
```

Do not hardcode these values in multiple places.

---

## Required page sections

### 1. Header / navigation

Create a clean top navigation with anchor links.

Suggested nav items:
- Home
- Who We Are
- Operations
- Vision
- Join
- Contact

Requirements:
- sticky header
- clean mobile menu
- Discord CTA visible in header
- compact, premium, readable

### 2. Hero section

The hero section must establish all of this quickly:
- this is an EVE Online corporation
- RosCro Industries is project-driven
- the corporation is focused on builders / industrialists / long-term players
- there is a clear path to join via Discord

Hero must include:
- corporation name
- strong headline
- supporting paragraph
- primary CTA: Join Discord
- secondary CTA: See Recruitment
- optional tertiary small text: Public Channel: roscro-pub

The hero should feel serious and operational, not flashy.

Content direction:
- industrial identity
- long-term ambition
- highsec foundation
- clear trajectory

Do not mention login, SSO, dashboards, or tools.

### 3. Who We Are

This section answers:
- Who is RosCro Industries?
- What kind of corporation is this?
- What kind of pilot fits here?

Must communicate:
- project-driven corporation
- builders, industrialists and long-term players
- structure over chaos
- progression over noise
- newbro friendly
- veteran compatible
- real life comes first
- no activity requirements

This section should read like a clear positioning statement.

### 4. Current Operations

This section explains what the corporation does today.

This must clearly reflect:
- Highsec production
- industry
- mining
- exploration
- PvE
- supporting practical growth through projects and contribution

Important:
This is the current operational reality.
Do not present nullsec as the current base of operations.

This section should feel grounded and concrete.

### 5. Long-Term Direction

This section explains where RosCro Industries is going.

Must include:
- long-term goal of living and operating in nullsec
- transition through capability-building, not fantasy
- small-gang PvP as part of long-term development
- disciplined growth into a stable future
- independent growth within a like-minded bloc
- building something permanent

Important framing:
Nullsec is a trajectory, not a current claim.
This section should express ambition with patience and structure.

### 6. Contribution Areas / Operational Lanes

Create a card grid section showing how members can contribute.

Use 5–6 cards.
Suggested areas:
- Industry
- Mining
- Exploration
- PvE
- Logistics
- Future Combat Development

Each card should include:
- title
- short description
- one line describing the kind of pilot it suits

### 7. Why RosCro

Create a section that explains why someone would join this corporation specifically.

Possible themes:
- clear direction
- serious long-term intent
- useful for both new and experienced pilots
- real-life-first expectations
- no hard activity quotas
- room to contribute early
- not mass-recruitment chaos
- not bloc-brain culture
- structured growth from a solid industrial base

### 8. Recruitment / How to Apply

This section must be straightforward and low-friction.

Must clearly show:
- Recruitment status: OPEN
- Discord invite link
- In-game public channel: roscro-pub
- simple application steps

Do not build a backend application form.
Do not create fake submission handling.
Do not require login.
A Discord-first process is enough.

### 9. Future Reports placeholder

Add a small section or block that indicates future plans for:
- Quarterly Reports
- NAV Reports

This section should be clearly marked as coming later, not yet implemented.

### 10. Footer

Footer must include:
- RosCro Industries
- EVE Online corporation
- Discord link
- public channel name
- recruitment status
- placeholder mention of future reports

Keep it minimal and polished.

---

## Visual design direction

### Theme
Use a dark industrial sci-fi visual direction.

Primary feel:
- gunmetal
- graphite
- black / charcoal
- restrained steel-blue accents
- crisp lines
- subtle grid / technical framing elements
- minimal glow
- premium spacing
- good typography hierarchy

Avoid:
- loud neon
- excessive space backgrounds
- cluttered HUD overlays
- overdesigned fake control panels
- too many animated effects
- cheesy gamer aesthetic

### Background treatment
Prefer subtle background treatment:
- dark gradients
- soft industrial texture or faint grid
- restrained visual depth
- Readability comes first.

### Cards and sections
Use:
- clear section separation
- tasteful cards
- subtle borders
- hover effects only where helpful
- consistent spacing
- premium layout rhythm

### Logo handling
A corporation logo exists and will likely be added later.

Implementation requirement:
- include a clear placeholder in the header / hero area for a future logo
- design the layout so a logo can be added later without major refactoring
- if no asset is present, use text-only branding cleanly
- Do not invent a fake logo.

---

## Technical expectations

### Preferred stack
- Next.js
- TypeScript
- Tailwind CSS

### Suggested structure
```
app/page.tsx
components/layout/site-header.tsx
components/layout/site-footer.tsx
components/sections/hero-section.tsx
components/sections/who-we-are-section.tsx
components/sections/current-operations-section.tsx
components/sections/long-term-direction-section.tsx
components/sections/contribution-areas-section.tsx
components/sections/why-roscro-section.tsx
components/sections/recruitment-section.tsx
components/sections/future-reports-section.tsx
lib/site-config.ts
```

### Implementation rules

Do:
- build a polished responsive landing page
- make content easy to edit
- keep logic simple
- use reusable section components where reasonable
- use semantic HTML
- ensure mobile responsiveness
- ensure good contrast and readability
- keep CTA buttons obvious

Do not:
- add auth
- add SSO
- add backend
- add database
- add fake corp metrics
- add fake member counts
- add fake activity statistics
- add fake live market widgets
- add application backend
- add report backend
- add unnecessary complexity

---

## Copywriting rules

The page copy must feel authored, not generated filler.

Avoid generic phrases like:
- "next-generation corporation"
- "innovative solutions"
- "unlock your potential"
- "world-class gameplay"
- "dominate New Eden"

Prefer language like:
- "project-driven corporation"
- "highsec industrial foundation"
- "long-term development"
- "steady progress"
- "clear trajectory"
- "structured growth"
- "capability building"
- "real life comes first"

---

## UX requirements

The page should be understandable in under 30 seconds.

A visitor should quickly understand:
- what RosCro Industries is
- what it does today
- where it is heading
- how to join

Primary conversion goal: join Discord
Secondary conversion goal: contact via in-game public channel

---

## Nice-to-have enhancements

These are allowed if implemented tastefully:
- subtle scroll reveal animation
- anchor link smooth scrolling
- small icon support for contribution cards
- section dividers with understated technical styling
- active nav state on scroll

These must remain restrained.

---

## Final quality bar

The final result should feel like:
- a credible EVE Online corporation landing page
- serious and structured
- industrial rather than playful
- easy to expand later
- strong enough to share publicly for recruitment

It should not feel like:
- a generic startup template
- a gaming clan meme site
- a half-built app dashboard
