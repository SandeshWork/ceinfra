# CE Infrastructure LLP — Design Documentation

## 1. Layout & Structure

### Page Anatomy
Every page follows a consistent shell:
1. **Navbar** — Fixed, `h-20`, `z-50`. Logo (72×72px) + desktop nav links + mobile hamburger below `lg`.
2. **Hero Section** — Full-width banner with background image, dark overlay, large headline, and a CTA button.
3. **Content Sections** — Stacked sections alternating between white, `gray-50`, and dark-navy backgrounds. Vertical padding `py-16`–`py-24`.
4. **Footer** — Dark navy, 4-column grid: logo/tagline, quick links, services, contact + social icons.

### Floating Actions (fixed, `bottom-6 right-6 z-40`)
Three icon buttons: Phone (orange), Download (navy/orange), WhatsApp (green).

### Container
`max-w-7xl mx-auto` — horizontal padding `px-4` → `sm:px-6` → `lg:px-8`.

### Grid System
| Breakpoint | Columns |
|---|---|
| Mobile (default) | 1 col |
| Tablet `md` (768px) | 2 cols |
| Desktop `lg` (1024px) | 3–4 cols |

---

## 2. Typography

| Role | Font | Weights |
|---|---|---|
| Headings (h1–h4) | **Urbanist** (sans-serif) | 500–800 |
| Body / UI | **Inter** (sans-serif) | 400–600 |
| Accent / Emphasis | **Merriweather** (serif) | 400 |

- **Base size**: 16px, `line-height: 1.5`
- Heading sizes range from `text-xl` (h4) up to `text-5xl`/`text-6xl` (hero h1).
- All fonts loaded via Google Fonts (weights 300–900).

---

## 3. Colors

### Core Palette
| Token | Hex | Usage |
|---|---|---|
| Primary | `#1A2639` | Backgrounds, text, primary buttons |
| Accent | `#FF6A00` | CTAs, hover states, highlights, active nav |
| Secondary | `#F4F5F7` | Card backgrounds, form inputs, sidebar |
| Muted Text | `#5B6670` | Captions, labels, placeholders |
| Background | `#FFFFFF` | Page background |
| Destructive | `#D4183D` | Errors, delete actions |

### Application Rules
- **Navy `#1A2639`** — section backgrounds, navbar, footer, primary buttons.
- **Orange `#FF6A00`** — every CTA button, hover underlines, icon accents, active state.
- **Light Gray `#F4F5F7`** — input fields, alternating section backgrounds, sidebar.
- **White** — cards, main content areas, text on dark backgrounds.

### Dark Mode
Supported via CSS variables. Dark background: `oklch(0.145 0 0)` (near-black); foreground: `oklch(0.985 0 0)` (off-white).

---

## 4. Components

### Buttons
| Variant | Style |
|---|---|
| `default` | Navy bg, white text, `hover:opacity-90` |
| `accent` | Orange bg, white text |
| `outline` | Transparent bg, border, `hover:bg-accent` |
| `secondary` | Light gray bg, navy text |
| `ghost` | No bg, `hover:bg-accent` |
| `link` | Text-only, underline on hover |

**Sizes**: `sm` (h-8), `default` (h-9), `lg` (h-10), `icon` (square, 36px).  
**All buttons**: `rounded-md`, `font-medium`, `transition-all`, `focus-visible:ring-[3px]`, disabled `opacity-50`.

### Cards
- `rounded-xl`, `border`, subtle shadow.
- Header (`px-6 pt-6`) → Content (`px-6`) → Footer (`px--6 pb-6`).
- Hover: `shadow-2xl`, image `scale-110 transition-transform duration-500`.

### Forms / Inputs
- Height `h-9`, padding `px-3 py-1`.
- Background `#F4F5F7`, border `border-input`, `rounded-md`.
- Focus: `border-ring` + `ring-[3px] ring-ring/50`.
- Labels: `text-sm font-medium`, `gap-2` spacing.

### Badges
- Variants: `default` (navy), `secondary` (gray), `destructive` (red), `outline`.
- `text-xs font-medium px-2 py-0.5 rounded-md w-fit`.

### Navigation Dropdown
- Services link has an animated `Chevron` (rotates 180° on open).
- Submenu: white card with shadow, orange hover state, smooth transition.

### UI Library
Built on **shadcn/ui** — Accordion, Dialog, Drawer, Sheet, Carousel, Table, Tabs, Tooltip, and more.

---

## 5. Spacing

| Scale | Value | Common Use |
|---|---|---|
| `gap-4` | 1rem | Tight grid gaps, icon + text |
| `gap-6` | 1.5rem | Standard card/grid gap |
| `gap-8` | 2rem | Comfortable section gaps |
| `gap-12` | 3rem | Generous section gaps |
| `py-16` | 4rem | Section vertical padding (compact) |
| `py-20` | 5rem | Section vertical padding (standard) |
| `py-24` | 6rem | Section vertical padding (spacious) |

---

## 6. Overall Design Style

**Modern Industrial Professional** — trustworthy, bold, and clean.

- **High contrast**: navy + white + vibrant orange create immediate hierarchy and energy.
- **Generous whitespace**: sections breathe; content never feels cluttered.
- **Strong CTAs**: every section ends with an orange action button.
- **Motion**: Framer Motion (fade-in, slide-up, scale) on scroll (`whileInView`), 0.3–0.8s easing.
- **Border radius**: consistent soft corners — `0.375rem` (sm) → `0.625rem` (lg) → `0.875rem` (xl).
- **Imagery**: full-width construction/industrial photos with dark gradient overlays.
- **Icons**: Lucide React, 20–64px, tinted orange or white depending on context.

### Border Radius Tokens
| Token | Value |
|---|---|
| `radius-sm` | 0.375rem |
| `radius-md` | 0.5rem |
| `radius-lg` | 0.625rem |
| `radius-xl` | 0.875rem |
