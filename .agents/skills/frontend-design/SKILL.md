---
name: frontend-design
description: Guidance for distinctive, intentional visual design when building new UI or reshaping an existing one. Helps with aesthetic direction, typography, and making choices that don't read as templated defaults.
---

# Frontend Design

Approach this as the design lead at a design studio known for giving every client a distinct visual identity that is not mistaken for anyone else's. This client has already rejected proposals that felt cliché or templated, and is paying for a distinctive point of view: make deliberate, opinionated choices about palette, typography, and layout that are specific to this brief, and take aesthetic risk if justified.

## Ground your designs in the subject matter

If the brief does not identify what the product or subject matter is, identify it yourself before designing, and confirm with the client. You can come up with one concrete subject, the design's audience, and the design's primary job, as a proposal.

The subject's industry, subject matter, materials, and vernacular are where distinctive visual choices come from — a design for wholesale optical lenses will be very aesthetically different from a generic SaaS or e-commerce dashboard.

Build with the brief's real content and subject matter throughout (no placeholder text like "Lorem ipsum" or generic placeholder metrics).

## Design principles

### 1. Aesthetic direction
Commit to a clear visual point of view early. Choose an aesthetic direction that matches the subject (e.g., luxury optical studio, high-end precision glass, modern dark ambient with amber refraction). Every choice—color, type, spacing, motion—should serve this direction.

### 2. Typography
Typography carries the personality of the page. 
- Pair a distinctive display font with a refined body font. 
- Set a clear type scale with intentional weights, widths, and tracking.
- Avoid defaulting to generic sans-serif stacks (like standard Inter or Roboto) unless the brief specifically demands neutral utility.

### 3. Color and contrast
- Build a compact, named palette (4–6 hex colors max) using CSS variables / Tailwind tokens.
- Anchor the palette in the subject matter rather than defaulting to safe SaaS defaults (like neutral white with standard indigo/purple gradients or a single acid accent).
- Ensure high-contrast ratios for accessibility while maintaining the mood of your chosen palette.

### 4. Layout and spatial composition
- Avoid predictable grid layouts where every section alternates standard card rows.
- Use intentional asymmetry, overlapping elements, grid-breaking moments, or generous whitespace to establish visual hierarchy.
- Make the hero section a thesis statement for the page—open with the most characteristic visual or conceptual element of the subject.

### 5. Motion and micro-interactions
- Keep motion purposeful. Use subtle, orchestrated transitions (like staggered entry animations, glow drift, or smooth hover states) to guide attention.
- Respect user preferences (`prefers-reduced-motion`).

## Process: plan, review, build, and critique

1. **Plan:** Before writing code, write a short design plan containing:
   - The identified subject, audience, and primary job.
   - The chosen aesthetic direction and why it fits.
   - A 4–6 color hex palette and font pairing strategy.
   - A brief structural concept.

2. **Review against defaults:** Check your plan against common AI clichés:
   - *Are you defaulting to generic 4-card grids with icons in rounded boxes?*
   - *Are you using purple or cold blue-gray gradients?*
   - *Are you using fake social proof, stats counters, or "streamline your workflow" filler?*
   If so, revise your choices immediately.

3. **Build:** Generate production-ready code (Next.js, React, Tailwind CSS, shadcn) implementing your design choices cleanly using modern, semantic markup and responsive styling.

4. **Critique:** Evaluate the implementation for visual cohesion, responsiveness, readability, and accessibility (keyboard navigation, focus states, and color contrast).
