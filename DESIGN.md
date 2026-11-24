---
version: alpha
name: DrishX Brand
description: Modern product marketing + app UI for DrishX. Exact amber/ink tokens from web/admin/mobile. Contemporary motion-forward landing — not heritage, not WordPress 2015, not AI-SaaS slop.
colors:
  primary: "#F0A132"
  primary-hover: "#E8941F"
  primary-foreground: "#0B0F14"
  secondary: "#F5F5F5"
  secondary-foreground: "#0B0F14"
  surface: "#FFFFFF"
  surface-elevated: "#FFFFFF"
  on-surface: "#0B0F14"
  on-surface-muted: "#6B7280"
  on-surface-label: "#4B5563"
  border: "#F0A132"
  link: "#C27803"
  success: "#059669"
  error: "#DC2626"
  ring: "#F0A132"
  glow: "#F0A132"
  dark-surface: "#0B0F14"
  dark-surface-elevated: "#0F1620"
  dark-on-surface: "#EAF0FA"
  dark-on-surface-muted: "#AAB2C0"
  dark-on-surface-label: "#B9C0CC"
  dark-secondary: "#1A2332"
  dark-link: "#F0A132"
typography:
  headline-display:
    fontFamily: Cormorant Garamond
    fontSize: 64px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Cormorant Garamond
    fontSize: 44px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0.06em
  mono:
    fontFamily: Geist Mono
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
rounded:
  sm: 8px
  md: 10px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  section: 96px
  gutter: 24px
  margin: 32px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.lg}"
    padding: 14px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.secondary-foreground}"
    rounded: "{rounded.lg}"
  button-outline:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
  card:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.xl}"
  theme-toggle:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.full}"
---

# Design System

## Overview

**Brand spelling:** always **DrishX**.

DrishX is a B2B wholesale optical-lens platform (shops order; staff fulfill). Marketing and product UI share one system: amber `#F0A132` + ink/surfaces from the live web, admin, and mobile apps.

### Aesthetic direction (locked)

This is a **modern 2020s product website** — sharp, alive, motion-capable, confident tech-brand energy.

It is **not**:
- a 2015 WordPress / PHP brochure site (boxed sections, stock heroes, dated icon rows, beige corporate templates)
- a “heritage optical atelier / trade journal” pastiche
- generic AI-SaaS slurry (purple gradients, fake logo walls, six identical feature cards, hollow “streamline” copy)

**Feel:** contemporary product marketing (think current Linear / Vercel / Stripe-era craft applied to optical wholesale) — bold type hierarchy, intentional negative space, soft amber atmosphere, **animation and micro-interaction welcome**. Personality comes from **lens character GIFs**, not from looking old.

**Landing scope:** public marketing page only (contact, App Store / Play Store, light footer legal links). Login may link out. No signup/KYC/dashboard UI on the landing.

**Signature art:** reserve open stages for **4–5 lens character GIFs** (doodle-personality lenses). Hero + one later band minimum. Placeholders until GIFs are wired in code.

**Themes:** light + dark are first-class; visible theme toggle; same structure both modes.

## Colors

**Exact tokens — do not reinterpret into Material blue-grays or brown ambers.**

| Token | Value | Rule |
|-------|--------|------|
| Primary | `#F0A132` | Only strong accent / CTAs |
| Primary hover | `#E8941F` | |
| Primary foreground | `#0B0F14` | **Always** text on amber — never white on amber |
| Light surface | `#FFFFFF` | No `#F8F9FF` / blue-tint “Material” canvases |
| Light ink | `#0B0F14` | |
| Light muted | `#6B7280` | |
| Dark surface | `#0B0F14` | |
| Dark elevated | `#0F1620` | |
| Dark ink | `#EAF0FA` | |
| Dark muted | `#AAB2C0` | |
| Dark secondary | `#1A2332` | |
| Borders | amber at ~22–45% opacity | Not cold gray chrome |
| Glow | soft amber radial only | No purple/neon bloom |

Forbidden color drift: Stitch/Material remaps that invent `#8D4B00`, white-on-primary, or blue surface stacks (`#E5EEFF`, `#D3E4FE`). Stick to the table above.

## Typography

- **Display / hero / brand moments:** Cormorant Garamond — large, tight tracking, modern contrast (not small classical newspaper headings).
- **UI / body / most section titles:** Geist — clean product UI type.
- **Mono (rare):** Geist Mono.
- Never substitute Inter / Roboto / system UI as the brand face.
- Never substitute EB Garamond “heritage journal” styling as a stand-in for modern DrishX.

Scale is bold on marketing: hero display can sit ~56–72px desktop. Hierarchy should feel current product-site, not CMS template.

## Layout

Desktop-first, max ~1200px content, generous section rhythm (~80–112px).

**Modern composition rules:**
- Asymmetry and large type OK; avoid rigid equal 3-column “WordPress feature grid” as the default pattern.
- Hero = one composition: brand, one line, short support, CTA, **open character stage** — not a collage of cards/stats.
- Prefer full-bleed atmosphere (amber glow mesh, soft gradient fields) over inset stock photos in rounded boxes.
- Character stages sit on clean surface with breathing room — foreground mascots, not buried in chrome.

**Footer:** contact, stores, minimal legal, © DrishX.

Mobile: stack cleanly; keep CTAs thumb-friendly; keep character stages visible.

## Motion & effects (encouraged)

Modern motion is in-scope. Use tastefully:

- Scroll-linked fade/slide of sections
- Soft amber glow pulse or slow gradient drift in hero atmosphere
- Button hover lift / color shift to `#E8941F`
- Theme toggle with a smooth surface transition
- Sticky frosted nav
- Subtle parallax or float on character stages (gentle, not carnival)
- Micro-interactions on links and store badges

Avoid: heavy parallax nausea, confetti, autoplay noise, neon cyberpunk, glassmorphism soup that reads as 2021 AI demo.

## Elevation & Depth

Contemporary soft depth — amber-tinted, not drop-shadow spam.

- Light cards (when used): white + amber border `rgba(240,161,50,~0.38)` + soft gold shadow
- Dark cards: `#0F1620` + softer amber border + dark shadow
- Sticky header: ~92% blur/frost
- Atmosphere: large soft amber radial behind hero — modern ambient light, not lens-flare clipart

Cards are **optional**. Open layouts preferred. Do not card-ify every section (that’s what makes sites feel like old WordPress).

## Shapes

Slightly softer modern radii: buttons ~10–12px, stages/cards ~16px. Consistent. No random pill clusters. Status pills only if truly needed.

## Components

- **Primary CTA:** `#F0A132` fill, `#0B0F14` text, hover `#E8941F` — light and dark.
- **Secondary:** quiet outline/neutral.
- **Theme toggle:** visible in nav (pill or icon control).
- **Nav:** logo mark + DrishX wordmark, sparse links, toggle, optional Login.
- **Contact:** modern compact form — not a giant enterprise field dump.
- **Store badges:** clear App Store / Play row.
- **Icons:** simple line; amber or ink. No emoji decoration.
- **Character stages:** labeled open frames for GIFs; amber-soft pedestal/glow OK; no fake mascot illustrations that replace the real GIFs.

## Do's and Don'ts

**Do**
- Look like a **new modern product site** with motion and presence
- Keep exact `#F0A132` / `#FFFFFF` / `#0B0F14` (and dark pair) — no token remix
- Leave hero + personality slots for lens character GIFs
- Ship light + dark with the same layout
- Use concrete optical/wholesale language
- Put **DrishX** as a hero-level brand signal

**Don't**
- Design like a 2015 WordPress / PHP marketing template
- Drift into “heritage atelier / optical trade journal / EB Garamond brochure”
- Invent blue-gray Material surfaces or white text on amber
- Use purple AI-SaaS gradients, fake logos, fake metrics strips, chip spam
- Fill the first viewport with cards, stats, and badges
- Overlay stickers on character stages
- Build signup/KYC or admin-dashboard screenshot walls on the landing
