# Design Tokens — Portfollio

Extracted from Figma file [`Portfollio`](https://www.figma.com/design/Add0mwh9OMQP6xPvUdjphd/Portfollio).  
Canvas width: **1440px** (desktop-first).

---

## Pages

| Page | Width | Height |
|------|------:|------:|
| Home | 1440 | 5658 |
| About Me | 1440 | 4429 |
| Contact | 1440 | 1983 |
| Works | 1440 | 3357 |
| Works > View | 1440 | 5231 |

---

## Colors

All 20 tokens below are live in Figma under the `Colors` variable collection (`Dark` / `Light` modes). 351 fills and strokes across all 5 pages are bound to these variables.

### Backgrounds

| Figma Variable | Dark | Light | Usage |
|----------------|------|-------|-------|
| `bg/page` | `#000000` | `#ffffff` | Page/section background (default) |
| `bg/nav` | `#131313` | `#f5f5f5` | Navigation bar background |
| `bg/surface` | `#303031` | `#e8e8e8` | Card / elevated surface |
| `bg/surface-alt` | `#2e2e2e` | `#e0e0e0` | Alternate dark surface |
| `bg/code` | `#161820` | `#f0f0f5` | Code block / dark chip background |
| `bg/icon` | `#1e1e1e` | `#e4e4e4` | Icon container background |

### Text

| Figma Variable | Dark | Light | Usage |
|----------------|------|-------|-------|
| `text/primary` | `#ffffff` | `#0a0a0a` | Primary headings & UI text |
| `text/secondary` | `#b4b4b4` | `#4a4a4a` | Body copy, descriptions |
| `text/tertiary` | `#a7a7a7` | `#5e5e5e` | Tech stack tags, metadata |
| `text/muted` | `#929292` | `#707070` | Social handle labels |
| `text/placeholder` | `#636e73` | `#8e9699` | Form input placeholders |
| `text/on-accent` | `#000000` | `#000000` | Text on accent (`#f2fb7a`) background — stays black in both modes |
| `text/display-dim` | `#737373` | `#9e9e9e` | Dimmed italic half of hero heading ("Hi there, I'm") — ⚠️ pending MCP add |

### Accent

| Figma Variable | Dark | Light | Usage |
|----------------|------|-------|-------|
| `accent/primary` | `#f2fb7a` | `#d4e600` | CTA highlight, decorative pill, accent bar |

### Borders & Strokes

| Figma Variable | Dark | Light | Usage |
|----------------|------|-------|-------|
| `border/strong` | `#ffffff` | `#0a0a0a` | Icon outlines, section dividers |
| `border/default` | `#5a5a5a` | `#c0c0c0` | Separator lines |
| `border/subtle` | `#696969` | `#d4d4d4` | Card borders |
| `border/faint` | `#323232` | `#e0e0e0` | Input / card stroke |

### Miscellaneous

| Figma Variable | Dark | Light | Usage |
|----------------|------|-------|-------|
| `misc/separator` | `#b8b8b8` | `#555555` | Scrolling separator / marquee text |
| `misc/placeholder-fill` | `#d9d9d9` | `#c8c8c8` | Image placeholder rectangles |
| `misc/icon-stroke` | `#979797` | `#555555` | Icon stroke (secondary) |

---

## Typography

### Font Families

| Family | Role | Weights Used |
|--------|------|-------------|
| **Instrument Serif** | Display / hero headings | Italic 400 |
| **Visby CF** | UI headings, labels, buttons, stats | Medium 500 · DemiBold 600 · Bold 700 |
| **Inter** | Body copy, descriptions, footer | Regular 400 · Medium 500 |

---

### Type Scale

#### Instrument Serif (Italic) — Display

| Name | Size | Line Height | Letter Spacing | Align | Usage |
|------|-----:|------------:|---------------:|-------|-------|
| `display-xl` | 64px | intrinsic | −3.84px (−6%) | left | Hero heading, "Hi there…", "Let's Talk" |
| `display-lg` | 40px | intrinsic | −2.40px (−6%) | left | Section callout, logo wordmark |

#### Visby CF — UI / Headings

| Name | Size | Weight | Line Height | Letter Spacing | Align | Usage |
|------|-----:|--------|------------:|---------------:|-------|-------|
| `stat-number` | 72px | 500 | 86.4px | −4.32px (−6%) | center | Stats ("6+", "12", "8") |
| `heading-xl` | 48px | 600 | 57.6px | −2.88px (−6%) | left | Project titles (LegiPro, VerivAfrica…) |
| `heading-lg` | 48px | 500 | 57.6px | −1.92px (−4%) | left | Section intro text |
| `heading-md` | 32px | 600 | 38.4px | −1.92px (−6%) | left | Section titles (My Tech Stacks, Experience…) |
| `heading-md-medium` | 32px | 500 | 38.4px | −1.28px (−4%) | left | Alternate section intro |
| `heading-sm` | 24px | 600 | 28.8px | −1.44px (−6%) | left | Article titles, skill labels |
| `stat-label` | 24px | 500 | 28.8px | −1.44px (−6%) | center | Stat captions ("Years of Experience"…) |
| `body-ui-lg` | 20px | 500 | 24px | −1.20px (−6%) | left | Social links, nav labels |
| `button-label` | 20px | 600 | 24px | −1.20px (−6%) | left | CTA button text ("Send Message") |
| `body-ui-md` | 16px | 500 | 22px | −0.64px (−4%) | left | Article meta, "Read Article", dates |
| `label-bold` | 16px | 700 | 19.2px | −1.00px (−6%) | left | Bold label ("Picture") |
| `caption` | 14px | 500 | 16.8px | −0.84px (−6%) | left | Badges ("LIVE PROJECT", "2022 - PRESENT") |
| `tag` | 12px | 500 | 14.4px | −0.72px (−6%) | left | Category tag ("FRONTEND") |

#### Inter — Body

| Name | Size | Weight | Line Height | Letter Spacing | Align | Usage |
|------|-----:|--------|------------:|---------------:|-------|-------|
| `body-xl` | 32px | 400 | 38px | −1.92px (−6%) | left | Long-form body copy |
| `body-lg` | 28px | 400 | 38px | −1.68px (−6%) | left | Contact / shorter body |
| `body-md` | 24px | 400 | 130% | −1.44px (−6%) | center | Centered about-section body |
| `footer-label` | 16px | 500 | intrinsic | −0.96px (−6%) | left | Footer ("Designed with ❤️ & Coffee", copyright) |

---

## Spacing

### Padding (top / right / bottom / left)

| Token | Value |
|-------|-------|
| `pad-xs` | 8 / 16 / 8 / 16 |
| `pad-sm` | 12 / 18 / 12 / 18 |
| `pad-md` | 16 / 28 / 16 / 28 |
| `pad-lg` | 20 / 20 / 20 / 20 |
| `pad-xl` | 20 / 38 / 20 / 38 |

### Gap (auto-layout item spacing)

| Token | Value | Context |
|-------|------:|---------|
| `gap-1` | 4px | Tight inline |
| `gap-2` | 8px | Chip inner spacing |
| `gap-3` | 10px | Compact list |
| `gap-4` | 12px | Label + icon |
| `gap-5` | 16px | Default component gap |
| `gap-6` | 18px | Card inner gap |
| `gap-7` | 20px | Section sub-gap |
| `gap-8` | 24px | Standard section gap |
| `gap-9` | 25px | Misc layout |
| `gap-10` | 32px | Grid column gap |
| `gap-11` | 36px | Card grid |
| `gap-12` | 48px | Section padding |
| `gap-13` | 56px | Large section gap |
| `gap-14` | 60px | Between groups |
| `gap-15` | 64px | Major section spacing |
| `gap-16` | 72px | Hero sub-sections |
| `gap-17` | 95px | Wide layout gap |
| `gap-18` | 120px | Section separator |
| `gap-19` | 136px | Column spacing |
| `gap-20` | 152px | Large layout spacing |
| `gap-21` | 160px | Hero section spacing |

---

## Border Radius

| Token | Value | Usage |
|-------|------:|-------|
| `radius-sm` | 12px | Cards, chips |
| `radius-md` | 16px | Containers, images |
| `radius-lg` | 20px | Large cards |
| `radius-xl` | 40px | Pill-shaped tags |
| `radius-full` | 50px | Circular buttons / avatars |

---

## Icons / Components

All icons sourced from Remix Icon (via Figma components):

| Component | Usage |
|-----------|-------|
| `chevron-down` | Dropdown / accordion toggle |
| `arrow-up-right` | External link indicator |
| `arrow-narrow-right` | Navigation forward |
| `arrow-narrow-left` | Navigation back |
| `instagram-fill` | Social link |
| `twitter-fill` | Social link |
| `linkedin-box-fill` | Social link |

---

## Notes

- The single registered style is a remote **Icon grid** layout grid (`fe206e9c...`).
- Accent color `#f2fb7a` is used sparingly as a highlight — treat as a single brand accent.
- Letter spacing values follow a consistent **−6% of font size** pattern across Visby CF and Instrument Serif; Inter uses the same ratio on most sizes.
