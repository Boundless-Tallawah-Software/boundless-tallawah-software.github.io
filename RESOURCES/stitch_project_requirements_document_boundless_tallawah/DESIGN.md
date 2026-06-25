# Design System Strategy: The Editorial Horizon

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Atelier."** 

Standard software interfaces often feel like rigid spreadsheets; this system aims to feel like a high-end architectural portfolio or a premium editorial magazine. We are blending the authority of a global financial institution with the rhythmic, breezy sophistication of the Caribbean. 

To break the "template" look, we reject the rigid 12-column grid in favor of **Intentional Asymmetry**. We use expansive white space (the "Horizon") to allow content to breathe, utilizing overlapping elements and high-contrast typography scales to create a sense of curated precision. This is not just a UI; it is a digital environment that conveys trust through its refusal to be cluttered.

---

## 2. Colors & Tonal Depth
Our palette moves away from flat "app blue" toward a deep, oceanic spectrum. 

### The Palette
*   **Primary (The Deep):** `#00113a` (Deep Navy) — Used for core branding and high-authority elements.
*   **Secondary (The Charcoal):** `#506169` — Softens the interface, providing a professional bridge between the deep primary and the light surfaces.
*   **Tertiary (The Reef):** `#001716` (accenting with `#59dad1` Sea-foam) — Used sparingly for "moments of delight" or high-priority calls to action.
*   **Neutral Surfaces:** From `#ffffff` (Lowest) to `#f0edec` (Container) — A warm, sand-inspired neutral base that feels more premium than cold grey.

### The "No-Line" Rule
**Explicit Instruction:** 1px solid borders are prohibited for sectioning. We define boundaries through background color shifts. A `surface-container-low` (`#f6f3f2`) section should sit directly against a `surface` (`#fcf9f8`) background. The human eye perceives the change in tone as a boundary; a line is a visual "stutter" we do not need.

### The "Glass & Gradient" Rule
To add "soul" to the software, use **Signature Textures**. Main CTAs or Hero backgrounds should utilize subtle linear gradients transitioning from `primary` (`#00113a`) to `primary_container` (`#002366`). For floating navigation or over-image menus, apply **Glassmorphism**: use `surface` with 80% opacity and a `20px` backdrop-blur to allow Caribbean-inspired imagery to bleed through softly.

---

## 3. Typography: The Editorial Voice
We utilize a high-contrast pairing to establish an authoritative "voice."

*   **Display & Headlines (Newsreader):** A formal, modern serif. This is our "Editorial" voice. It signals history, trust, and Caribbean intellect. 
    *   *Usage:* Use `display-lg` (3.5rem) for hero statements. Ensure tight tracking (-0.02em) to keep it feeling modern.
*   **UI & Body (Inter):** A high-performance sans-serif. This is our "Functional" voice.
    *   *Usage:* Use `body-md` (0.875rem) for general utility. Inter’s tall x-height ensures legibility even on small mobile screens.

**Hierarchy Strategy:** Always lead with a Serif Headline to establish the brand’s "soul," followed by Sans-Serif body text to deliver the "service."

---

## 4. Elevation & Depth: Tonal Layering
We do not use shadows to create "lift"; we use layers to create "presence."

*   **The Layering Principle:** Depth is achieved by "stacking" surface tiers. Place a `surface_container_lowest` (#ffffff) card on a `surface_container` (#f0edec) background. This creates a soft, natural lift that mimics fine paper stacked on a desk.
*   **Ambient Shadows:** If an element must float (e.g., a Modal), use an extra-diffused shadow: `box-shadow: 0 20px 40px rgba(28, 27, 27, 0.06)`. The shadow color is a tint of our `on_surface` token, never pure black.
*   **The "Ghost Border" Fallback:** If accessibility requires a stroke (e.g., in high-contrast modes), use the `outline_variant` token at **20% opacity**. It should be felt, not seen.

---

## 5. Components

### Buttons: The Signature Action
*   **Primary:** Gradient fill (`primary` to `primary_container`), `md` (0.375rem) roundedness. No border.
*   **Secondary:** `surface_container_high` background with `primary` text.
*   **Tertiary:** Ghost style. No background, `primary` text, underlined only on hover.

### Cards: The Content Vessel
Cards must **never** have borders. Use the `surface_container_low` background. Increase vertical padding using the `8` (2.75rem) spacing token to create a premium, unhurried feel.

### Input Fields: The Quiet Interface
*   **Style:** Minimalist. Only a bottom-border using `outline_variant` is permitted, or a solid `surface_container_highest` fill. 
*   **Focus State:** Transition the bottom border to `tertiary_fixed_dim` (Sea-foam) to provide a soft Caribbean highlight.

### Data Lists: The Seamless Flow
Forbid the use of divider lines. Separate list items using the `3` (1rem) spacing scale. Use a subtle background shift (`surface_container_low`) on hover to indicate interactivity.

### Navigation: The Floating Horizon
A top-bar navigation using Glassmorphism (`surface` @ 80% + blur). Use `label-md` for nav items, all-caps with 0.1em letter spacing for an authoritative, "designed" look.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** embrace asymmetry. Offset your headline to the left and your body text to the right to create visual interest.
*   **Do** use the `tertiary` (Sea-foam) only for critical focal points (e.g., a "New" badge or a primary "Submit" arrow).
*   **Do** use the `24` (8.5rem) spacing token for top and bottom margins of major sections to create the "Horizon" effect.

### Don’t:
*   **Don’t** use 100% black. Use `on_surface` (`#1c1b1b`) for text to maintain a softer, premium aesthetic.
*   **Don’t** use "Drop Shadows" on cards. Use tonal shifts between `surface` tiers instead.
*   **Don’t** crowd the screen. If a mobile screen feels full, increase the spacing scale and move content to a secondary layer.