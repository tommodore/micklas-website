---
name: Cinematic Explorer
colors:
  surface: '#121317'
  surface-dim: '#121317'
  surface-bright: '#38393d'
  surface-container-lowest: '#0d0e12'
  surface-container-low: '#1b1b1f'
  surface-container: '#1f1f24'
  surface-container-high: '#292a2e'
  surface-container-highest: '#343439'
  on-surface: '#e3e2e7'
  on-surface-variant: '#c5c6d1'
  inverse-surface: '#e3e2e7'
  inverse-on-surface: '#303035'
  outline: '#8f909b'
  outline-variant: '#444650'
  surface-tint: '#b5c4ff'
  primary: '#b5c4ff'
  on-primary: '#172c66'
  primary-container: '#142a64'
  on-primary-container: '#8093d3'
  inverse-primary: '#495c98'
  secondary: '#5adcb9'
  on-secondary: '#00382c'
  secondary-container: '#00a787'
  on-secondary-container: '#003328'
  tertiary: '#ffb690'
  on-tertiary: '#542201'
  tertiary-container: '#501f00'
  on-tertiary-container: '#ce835a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b5c4ff'
  on-primary-fixed: '#00174c'
  on-primary-fixed-variant: '#30447e'
  secondary-fixed: '#79f9d4'
  secondary-fixed-dim: '#5adcb9'
  on-secondary-fixed: '#002018'
  on-secondary-fixed-variant: '#005140'
  tertiary-fixed: '#ffdbca'
  tertiary-fixed-dim: '#ffb690'
  on-tertiary-fixed: '#331100'
  on-tertiary-fixed-variant: '#703715'
  background: '#121317'
  on-background: '#e3e2e7'
  surface-variant: '#343439'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  body-xl:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 48px
  xxl: 64px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

This design system is crafted for a premium travel influencer persona, focusing on high-end adventure and professional photography. The brand personality is **cinematic, authoritative, and evocative**, designed to inspire wanderlust through a sophisticated lens. It targets a discerning audience that values quality over quantity and seeks immersive, luxury-travel experiences.

The visual style leverages **Modern Professionalism with Glassmorphic accents**. It utilizes heavy photographic content as a foundational layer, treated with cinematic overlays and refined typography to create depth. The interface feels like a high-end digital travel magazine—spacious, polished, and breathtaking.

- **Minimalist Layouts:** Content-first approach with generous negative space.
- **Cinematic Overlays:** Use of subtle gradients on imagery to ensure text legibility and focus.
- **Glassmorphism:** Frosted translucent layers are used for navigation and content cards to maintain a sense of environmental depth.

## Colors

The palette is anchored in a professional **Deep Navy**, providing a stable, high-contrast backdrop for photography. **Vibrant Teal** serves as the primary action color, offering a fresh, oceanic energy that cuts through the dark theme.

- **Primary:** Deep Navy (#142A64) is used for structural backgrounds and core identity.
- **Secondary:** Vibrant Teal (#30BB9A) is reserved for interactive elements, call-to-actions, and progress indicators.
- **Accents:** Warm Sand (#F4EBD0) is used sparingly for highlights, testimonials, or metadata tags to provide warmth against the cool palette.
- **Surface:** In dark mode, surfaces utilize a refined version of the Navy (#0D1B40) to create hierarchical depth through tonal layering.

## Typography

The typography system creates a "high-fashion editorial" rhythm. **Playfair Display** provides the elegance and luxury required for a premium travel brand, while **Inter** ensures maximum legibility for long-form blog content and technical data.

- **Headlines:** Always use Playfair Display. Large headings (Display and XL) should use tighter letter spacing for a more dramatic, cinematic impact.
- **Body:** Inter is the workhorse. Standard body text uses a generous line height (1.5x - 1.6x) to prevent reader fatigue.
- **Metadata/Labels:** Use Inter Bold with slight letter spacing and uppercase styling for "Destination Tags" or "Date" labels to create a distinct visual contrast from body prose.

## Layout & Spacing

The design system utilizes a **12-column fluid grid** for desktop and a **4-column grid** for mobile. The spacing rhythm is strictly based on a **4px baseline**, favoring larger increments (32px+) to maintain an airy, premium feel.

- **Desktop:** 12 columns | 24px gutter | 64px outer margins.
- **Tablet:** 8 columns | 24px gutter | 32px outer margins.
- **Mobile:** 4 columns | 16px gutter | 16px outer margins.
- **Rhythm:** Use `lg` (32px) for vertical section spacing and `md` (24px) for internal component padding.

## Elevation & Depth

Hierarchy is established through **Backdrop Blurs** and **Tonal Stacking** rather than traditional heavy shadows.

- **Level 1 (Base):** Deep Navy background.
- **Level 2 (Cards/Surfaces):** Slightly lighter navy with a 1px low-opacity border (#FFFFFF10).
- **Level 3 (Interactive/Glass):** Surfaces using `backdrop-filter: blur(12px)` and 60% opacity of the surface color.
- **Overlays:** Cinematic image gradients should transition from `rgba(13, 27, 64, 0)` at the top to `rgba(13, 27, 64, 0.9)` at the bottom to house white typography.

## Shapes

The design system uses a generous rounding strategy to soften the professional Navy palette and make the interface feel more approachable and modern.

- **Standard Elements:** 0.5rem (8px) for buttons and small inputs.
- **Featured Cards:** 1rem (16px) for destination cards and blog thumbnails.
- **Large Container Sections:** 1.5rem (24px) for hero containers or bottom sheets.
- **Icons:** Encased in circular (pill) backgrounds when used as floating action buttons.

## Components

### Buttons
- **Primary:** Vibrant Teal background, White text, 8px radius. Bold weight.
- **Secondary:** Transparent background, 2px Teal border, Teal text.
- **Ghost:** White text with subtle Teal underline on hover for navigation.

### Cards
- **Destination Card:** Full-bleed image with a bottom-aligned gradient overlay. Playfair Display text for the title, Inter for the location subtitle. 16px corner radius.
- **Blog Card:** Top image, followed by a "Warm Sand" metadata tag, and the title below. 
- **Testimonial:** Glassmorphic background (blur) with "Warm Sand" text for quotes to indicate warmth and personality.

### Navigation
- **Header:** Fixed position, glassmorphic blur background. Minimal line icons for search and profile.
- **Footer:** Deep Navy background with high-contrast White links and Teal hover states.

### Forms & Inputs
- **Inputs:** Dark navy backgrounds with a 1px border. Focus state changes border to Teal and adds a subtle outer glow.
- **Checkboxes:** Square with 4px radius, filling with Teal and a white checkmark when active.