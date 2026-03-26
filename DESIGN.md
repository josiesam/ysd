# Design System Document

## 1. Overview & Creative North Star

### Creative North Star: "The Kinetic Editorial"
This design system is not a mere collection of components; it is a high-impact digital arena. We are moving away from the "standard dashboard" look toward an editorial, bento-inspired experience that captures the energy of youth athletics in Sierra Leone. 

The "Kinetic Editorial" style balances the stability of **Education (Primary Blue)** with the explosive **Growth of Sport (Primary Green)**. By utilizing intentional asymmetry, overlapping high-quality imagery, and massive typography scales, we create a sense of forward motion. We avoid the "template" feel by treating the grid as a playground rather than a cage—using the depth of Material 3 color tokens to stack information in layers of varying intensity.

---

## 2. Colors

The palette is vibrant, reflecting the Sierra Leonean spirit and the diversity of sport. 

### Core Palette
*   **Primary (Education & Sport):** `#225aa9` (Primary) / `#7cabff` (Primary Container). Use for foundational UI elements and authoritative actions.
*   **Secondary (Growth & Athleticism):** `#006a2c` (Secondary) / `#78f08f` (Secondary Container). Reserve for progress tracking and growth-oriented content.
*   **Tertiary (Action & Leadership):** `#974300` (Tertiary) / `#ff9656` (Tertiary Container). The "Pulse" of the UI. Use for CTAs and energetic highlights.
*   **Error (Urgency & Prevention):** `#b31b25` (Error). Highly focused for critical alerts and safety info.

### The "No-Line" Rule
To achieve a premium, editorial feel, **1px solid borders are strictly prohibited for sectioning.** Boundaries must be defined through background color shifts. For example, a `surface-container-low` section sitting on a `surface` background creates a clean, sophisticated break without the visual "noise" of a line.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of surfaces. Use the container tiers to define depth:
1.  **Base Layer:** `surface` (`#f6f5ff`).
2.  **Structural Areas:** `surface-container-low` (`#eff0ff`).
3.  **Interactive Modules/Bento Boxes:** `surface-container` (`#e3e7ff`).
4.  **Floating Elements:** `surface-container-highest` (`#d4dbff`).

### Signature Textures
Apply subtle linear gradients (e.g., `primary` to `primary_dim`) on hero backgrounds. For high-impact sports imagery, use **Glassmorphism**: overlays should use semi-transparent surface colors with a `backdrop-blur` of 12px-16px to maintain legibility while letting the "soul" of the photography bleed through.

---

## 3. Typography

The typography strategy pairs the geometric precision of **Lexend** with the humanist clarity of **Manrope**.

*   **Display & Headlines (Lexend):** Used for impact. Lexend’s wide apertures feel modern and approachable. At `display-lg` (3.5rem), it commands attention like a stadium scoreboard.
*   **Body & Titles (Manrope):** Used for narrative. Manrope provides excellent legibility for educational content. The `title-lg` (1.375rem) serves as the perfect bridge between high-impact headers and functional text.

**Hierarchy as Identity:** Use high-contrast sizing. A `display-md` headline paired directly with `body-md` text creates an "editorial" look that feels more like a premium magazine than a generic app.

---

## 4. Elevation & Depth

We eschew traditional drop shadows in favor of **Tonal Layering**.

*   **The Layering Principle:** Depth is achieved by "stacking" tones. A `surface-container-lowest` card placed on a `surface-container-high` section provides a natural lift.
*   **Ambient Shadows:** Where floating is required (e.g., FABs or high-priority cards), use a "Sport-Shadow": a 15% opacity tint of `primary_dim` with a 32px blur and 8px Y-offset. This mimics natural light reflecting off a vibrant surface.
*   **The "Ghost Border":** If a container sits on a background of similar value, use a `outline-variant` at 15% opacity. Never use a 100% opaque border.
*   **Corner Radii:** Strictly adhere to the **Roundedness Scale**. Bento boxes should primarily use `lg` (16px) to feel friendly yet structured. Use `full` (9999px) for pill-shaped chips and buttons to emphasize athleticism.

---

## 5. Components

### Buttons
*   **Primary:** `primary` background with `on-primary` text. Use `full` rounding. These are your "Athletic" buttons.
*   **Secondary:** `secondary-container` with `on-secondary-container` text.
*   **Tertiary:** No background, `primary` text. Use for low-emphasis navigation.

### Bento Cards
Cards must not use dividers. Separate content using the `3` (1rem) or `4` (1.4rem) spacing tokens.
*   **Image Cards:** Use "Kinetic Cropping"—zoom in on high-quality action shots so the athlete’s limb or equipment slightly breaks the visual center.

### Input Fields
*   **Style:** Use `surface-container-highest` as the fill. 
*   **Active State:** Change background to `surface-container-lowest` and apply a 2px `primary` ghost-border (20% opacity).

### Chips
*   **Filter Chips:** Use `surface-container` with `label-md` text. On selection, transition to `tertiary-container` to signal active "Leadership/Action."

### Additional Component: "The Momentum Bar"
A custom progress component for youth development. Use a thick 12px track (`surface-container-highest`) with a `secondary` (Green) fill to represent growth, featuring a `tertiary` (Orange) "glow" at the leading edge to represent the spark of action.

---

## 6. Do's and Don'ts

### Do
*   **Do** use the `16` (5.5rem) spacing token for hero section margins to give the design "room to breathe."
*   **Do** overlap typography on imagery using the Glassmorphism rule.
*   **Do** use asymmetrical bento layouts (e.g., one 2x2 card next to two 1x1 cards).
*   **Do** ensure all text on colored backgrounds meets WCAG AA contrast ratios using the `on-` color tokens.

### Don't
*   **Don't** use black (`#000000`) for shadows or text. Use `on-surface` or `on-primary-fixed` for deep tones.
*   **Don't** use 1px solid borders to separate list items; use a `surface-container-low` background shift or vertical whitespace.
*   **Don't** use "stock-style" photography. Only use high-contrast, high-quality images of local youth engaged in sport and education.
*   **Don't** center-align long-form body text. Keep it left-aligned to maintain the editorial grid's integrity.