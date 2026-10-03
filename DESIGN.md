---
name: Event Ops Analytics
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#434655'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#006242'
  on-tertiary: '#ffffff'
  tertiary-container: '#007d55'
  on-tertiary-container: '#bdffdb'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  metric-value:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.03em
  title-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  table-data:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  table-header:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.05em
  mono-code:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
---

## Brand & Style

This design system establishes a high-precision, dependable, and modern SaaS analytics experience engineered specifically for event creators, festival operators, and live-venue managers. The brand communicates stability, rapid operational insight, and financial precision under high-throughput conditions.

The overall style fuses **Corporate Modern** with **Tactile Data Clarity**:
- **Clarity over ornamentation**: Critical key metrics (gross revenue, ticket velocity, check-in conversion rates) take visual priority using disciplined typographic weight and structured tabular layouts.
- **Calm, trustworthy tone**: Cool slate-tinted canvas backdrops with crisp white surface cards reduce cognitive fatigue during frantic real-time gate management.
- **Immediate operational state**: Live event telemetry is communicated through pulsating emerald live indicators, crisp indigo focus rings, and muted contextual badge fills.

## Colors

The palette employs a primary cobalt/indigo hue (`#2563EB`) that establishes authoritative call-to-actions, active navigation highlights, and interactive states. The secondary deep navy (`#0F172A`) anchors foundational typography, table headers, and primary numerical readouts. Tertiary emerald (`#10B981`) is reserved exclusively for successful check-ins, active sales momentum, and live sync badges.

### Surface and Border Architecture
- **Canvas / Background**: `#F8FAFC` (Slate 50) delivers an eye-friendly, glare-free staging surface.
- **Surface Elevation 0 (Card Base)**: `#FFFFFF` pure white ensures optimal contrast against tabular data and key metric displays.
- **Subtle Stroke / Dividers**: `#E2E8F0` (Slate 200) creates structural boundaries without harsh contrast.
- **Muted Slate Fill**: `#F1F5F9` (Slate 100) provides backgrounds for table header rows, input containers, and disabled chip toggles.

### Semantic Status Tokens
- **Success / Checked-in**: Tint `#ECFDF5`, Border `#A7F3D0`, Text `#065F46`.
- **Pending / Warning**: Tint `#FFFBEB`, Border `#FDE68A`, Text `#92400E`.
- **Critical / Alert**: Tint `#FEF2F2`, Border `#FECACA`, Text `#991B1B`.
- **Informational / Ticket Sales**: Tint `#EFF6FF`, Border `#BFDBFE`, Text `#1E40AF`.

## Typography

The typographic hierarchy pairs **Plus Jakarta Sans** for headlines and high-impact numerical readouts with **Inter** for data tables, form elements, and contextual micro-copy.

- **Numerics & Financials**: Currency strings and quantity counters leverage `font-feature-settings: 'tnum' on, 'cv02' on` to preserve monospaced alignment across updating stats.
- **Table Density**: Table headers use uppercase `table-header` with generous tracking (`0.04em`) to visually distinguish column definitions from transaction rows.
- **Hierarchy Mapping**: Metric cards combine `label-sm` (uppercase, slate secondary) for the category definition, `metric-value` for the primary count, and `body-sm` for the supporting contextual subtitle (e.g., target completion rates).

## Layout & Spacing

The layout operates on a standard 8pt spatial grid configured within a structured container max-width of `1440px`.

### Grid System
- **Desktop (1024px and up)**: 12-column layout with `gutter` of `1.25rem` (20px) and page edge margins of `2rem` (32px).
- **Tablet (768px – 1023px)**: 8-column layout with 16px gutters and 24px margins. The 4-up metric card row folds to a 2x2 grid.
- **Mobile (< 768px)**: 4-column layout with 12px gutters and 16px margins. Metric cards collapse to a single column or side-scrollable horizontal carousel.

### Density Strategy
Event staff monitoring ticket sales and turnstiles need compact visual density. Data tables use compact vertical padding (`space-sm` / 8px top/bottom in rows) with generous horizontal cell padding (`space-md` / 16px) to maintain readability under rapid scrolling.

## Elevation & Depth

Visual depth is achieved through **ambient diffused shadows** paired with **crisp low-contrast outlines** to create sharp architectural framing.

- **Level 0 (Flat Canvas)**: `#F8FAFC`, no shadow, zero elevation.
- **Level 1 (Cards & Data Panels)**: Pure white `#FFFFFF` surface accompanied by a 1px continuous border (`#E2E8F0`) and an ultra-subtle ambient drop shadow: `0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.04)`.
- **Level 2 (Hover States & Dropdown Menus)**: `box-shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.05)`, bordered with `#CBD5E1`.
- **Level 3 (Modals & Command Palettes)**: `box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.05)`.
- **Focus Depth**: High-contrast interactive states replace fuzzy glowing auras with a precise `2px` offset outline using `#2563EB`.

## Shapes

With a roundedness level of `2`, the design system strikes an optimal balance between friendly modern software and structural discipline:

- **Metric Cards & Content Blocks**: Outer corner radius defaults to `rounded-lg` (`1rem` / 16px) to gently soften rectangular dashboards.
- **Inputs, Buttons, and Selects**: Radius set to standard base (`0.5rem` / 8px) for crisp utility.
- **Table Wrappers**: Outer table containers use `rounded-lg` (`1rem`) with `overflow: hidden` to clip tabular borders cleanly.
- **Pills and Badges**: Status indicators and filter chips utilize full pill borders (`9999px`) to immediately set them apart from clickable rectangular buttons.

## Components

### Metric KPI Cards
- Base surface of white with `rounded-lg` corners and a 1px border of `#E2E8F0`.
- Top-left contains a 40x40px icon badge with a 10% opacity primary or tertiary tinted background and centered glyph.
- The top right hosts an optional percentage change delta chip (e.g., `+12.4%`).
- Value displayed using `metric-value` typography in `#0F172A`.
- Supporting context below displayed in `body-sm` using `#64748B`.

### Navigation Tabs
- Flat horizontal segmented bar or underline bar design.
- The active tab features an indigo `#2563EB` bottom stroke (2px height) with font weight `600` and dark text `#0F172A`.
- Inactive tabs display `#64748B` with hover color `#334155`.
- Tab badges display counts enclosed in an oval pill of `#F1F5F9`.

### Data Tables
- **Container**: Bordered card wrapper with `rounded-lg` and subtle border `#E2E8F0`.
- **Header**: Background `#F8FAFC`, uppercase `table-header` in `#64748B`, with explicit vertical dividers omitted in favor of clean horizontal row borders.
- **Rows**: Alternating hover state of `#F8FAFC`. Active or selected row background `#EFF6FF`. Height standard is 52px.
- **Numerical Cells**: Transaction IDs and timestamps render in tabular lining figures to ensure vertical alignment across hundreds of rows.

### Status Chips
- Height 24px, padding 4px 10px, typography `label-sm`.
- Fully rounded pill radius (`9999px`).
- **Checked-In**: Background `#ECFDF5`, text `#065F46`, paired with an optional 6px circular green dot on the leading edge.
- **Pending**: Background `#FFFBEB`, text `#92400E`.
- **Unpaid / Cancelled**: Background `#FEF2F2`, text `#991B1B`.

### Search & Filter Toolbar
- **Input Field**: Height 40px, background `#FFFFFF`, border 1px solid `#CBD5E1`, with inset search glass icon in `#94A3B8`.
- Focus state: Border color transitions to `#2563EB` with an external `3px` focus ring of `rgba(37, 99, 235, 0.15)`.
- Input placeholder in `#94A3B8` `body-md`.
- Quick-filter dropdown triggers include a subtle chevron glyph and active-item count indicators.

### Live Pulse Indicator
- A composite component composed of a central 8px solid emerald circle (`#10B981`) surrounded by an animated expanding ripple ping (`rgba(16, 185, 129, 0.4)`).
- Placed in the primary header alongside event titles to verify active WebSocket event synchronization.