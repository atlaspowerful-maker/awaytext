# Design System - AwayText

**Project:** AwayText - SMS Auto-Responder  
**Version:** 1.0  
**Date:** February 17, 2026  
**Style:** Modern Minimalist, Mobile-First  
**Platform:** PWA (Progressive Web App) → Future React Native

---

## 1. Design Tokens

### 1.1 Colors

#### Primary Palette

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `--primary` | `#2563EB` | rgb(37, 99, 235) | Primary actions, links, brand |
| `--primary-dark` | `#1D4ED8` | rgb(29, 78, 216) | Hover state, pressed |
| `--primary-light` | `#DBEAFE` | rgb(219, 234, 254) | Backgrounds, highlights |
| `--primary-subtle` | `#EFF6FF` | rgb(239, 246, 255) | Light backgrounds, badges |

#### Success/Status Palette

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `--success` | `#10B981` | rgb(16, 185, 129) | ON state, active, positive |
| `--success-dark` | `#059669` | rgb(5, 150, 105) | Pressed success |
| `--success-light` | `#D1FAE5` | rgb(209, 250, 229) | Success backgrounds |
| `--success-subtle` | `#ECFDF5` | rgb(236, 253, 245) | Light success states |

#### Danger/Error Palette

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `--danger` | `#EF4444` | rgb(239, 68, 68) | OFF state, errors, warnings |
| `--danger-dark` | `#DC2626` | rgb(220, 38, 38) | Pressed danger, critical |
| `--danger-light` | `#FEE2E2` | rgb(254, 226, 226) | Error backgrounds |
| `--danger-subtle` | `#FEF2F2` | rgb(254, 242, 242) | Light error states |

#### Warning Palette

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `--warning` | `#F59E0B` | rgb(245, 158, 11) | Alerts, quota warnings |
| `--warning-dark` | `#D97706` | rgb(217, 119, 6) | Pressed warning |
| `--warning-light` | `#FEF3C7` | rgb(254, 243, 199) | Warning backgrounds |
| `--warning-subtle` | `#FFFBEB` | rgb(255, 251, 235) | Light warning states |

#### Neutral Palette (Slate)

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `--white` | `#FFFFFF` | rgb(255, 255, 255) | Pure white, cards |
| `--background` | `#F8FAFC` | rgb(248, 250, 252) | Page background |
| `--surface` | `#FFFFFF` | rgb(255, 255, 255) | Cards, elevated surfaces |
| `--surface-hover` | `#F1F5F9` | rgb(241, 245, 249) | Hover states, zebra striping |
| `--surface-pressed` | `#E2E8F0` | rgb(226, 232, 240) | Pressed surfaces |

#### Text Colors

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `--text-primary` | `#0F172A` | rgb(15, 23, 42) | Headings, primary text |
| `--text-secondary` | `#475569` | rgb(71, 85, 105) | Body text, descriptions |
| `--text-muted` | `#94A3B8` | rgb(148, 163, 184) | Placeholders, disabled |
| `--text-inverse` | `#FFFFFF` | rgb(255, 255, 255) | Text on dark backgrounds |

#### Border Colors

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `--border` | `#E2E8F0` | rgb(226, 232, 240) | Dividers, borders |
| `--border-light` | `#F1F5F9` | rgb(241, 245, 249) | Subtle dividers |
| `--border-focus` | `#2563EB` | rgb(37, 99, 235) | Focus states |
| `--border-error` | `#EF4444` | rgb(239, 68, 68) | Error states |

### 1.2 Typography

#### Font Family

```css
--font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
--font-mono: 'SF Mono', Monaco, 'Cascadia Code', monospace;
```

#### Type Scale (Major Third - 1.250)

| Token | Size | Line Height | Weight | Letter Spacing | Usage |
|-------|------|-------------|--------|----------------|-------|
| `--text-display` | 48px (3rem) | 1.1 | 700 | -0.02em | Big numbers, hero stats |
| `--text-h1` | 32px (2rem) | 1.2 | 700 | -0.01em | Page titles |
| `--text-h2` | 26px (1.625rem) | 1.3 | 600 | 0 | Section titles |
| `--text-h3` | 20px (1.25rem) | 1.4 | 600 | 0 | Card titles |
| `--text-h4` | 18px (1.125rem) | 1.4 | 600 | 0 | Subsection titles |
| `--text-body` | 16px (1rem) | 1.5 | 400 | 0 | Default body text |
| `--text-body-sm` | 14px (0.875rem) | 1.5 | 400 | 0 | Secondary text |
| `--text-caption` | 12px (0.75rem) | 1.4 | 500 | 0.02em | Labels, metadata |
| `--text-xs` | 10px (0.625rem) | 1.4 | 500 | 0.04em | Badges, timestamps |

#### Typography Patterns

```css
/* Page Title */
.page-title {
  font-size: var(--text-h1);
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--text-primary);
}

/* Section Title */
.section-title {
  font-size: var(--text-h2);
  font-weight: 600;
  color: var(--text-primary);
}

/* Card Title */
.card-title {
  font-size: var(--text-h3);
  font-weight: 600;
  color: var(--text-primary);
}

/* Body Text */
.body-text {
  font-size: var(--text-body);
  font-weight: 400;
  line-height: 1.5;
  color: var(--text-secondary);
}

/* Label/Caption */
.label {
  font-size: var(--text-caption);
  font-weight: 500;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--text-muted);
}

/* Stat Number */
.stat-number {
  font-size: var(--text-display);
  font-weight: 700;
  letter-spacing: -0.02em;
  font-variant-numeric: tabular-nums;
  color: var(--text-primary);
}
```

### 1.3 Spacing

#### Base Unit: 4px

| Token | Value | Pixels | Usage |
|-------|-------|--------|-------|
| `--space-0` | 0 | 0px | None |
| `--space-1` | 0.25rem | 4px | Icon gaps, tight spacing |
| `--space-2` | 0.5rem | 8px | Inline elements, small gaps |
| `--space-3` | 0.75rem | 12px | Small padding |
| `--space-4` | 1rem | 16px | Standard padding, gaps |
| `--space-5` | 1.25rem | 20px | Medium padding |
| `--space-6` | 1.5rem | 24px | Section gaps |
| `--space-8` | 2rem | 32px | Large sections |
| `--space-10` | 2.5rem | 40px | Extra large |
| `--space-12` | 3rem | 48px | Major sections |
| `--space-16` | 4rem | 64px | Hero spacing |
| `--space-20` | 5rem | 80px | Page sections |

#### Layout Spacing

```css
/* Page padding */
--page-padding-x: 1rem;      /* 16px horizontal */
--page-padding-y: 1.5rem;    /* 24px vertical */

/* Card padding */
--card-padding: 1rem;        /* 16px */

/* Section gap */
--section-gap: 1.5rem;       /* 24px */

/* Component gap */
--component-gap: 1rem;       /* 16px */
```

### 1.4 Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-none` | none | Flat elements |
| `--shadow-xs` | 0 1px 2px rgba(0, 0, 0, 0.05) | Subtle elevation |
| `--shadow-sm` | 0 1px 3px rgba(0, 0, 0, 0.1) | Cards, buttons |
| `--shadow-md` | 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) | Dropdowns, modals |
| `--shadow-lg` | 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) | Floating elements |
| `--shadow-xl` | 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) | Overlays |
| `--shadow-focus` | 0 0 0 3px rgba(37, 99, 235, 0.3) | Focus rings |
| `--shadow-error` | 0 0 0 3px rgba(239, 68, 68, 0.3) | Error focus rings |

### 1.5 Borders & Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--border-width` | 1px | Standard borders |
| `--border-width-2` | 2px | Focus states, active |
| `--radius-none` | 0 | Sharp corners |
| `--radius-sm` | 4px (0.25rem) | Small elements, tags |
| `--radius-md` | 8px (0.5rem) | Inputs, small cards |
| `--radius-lg` | 12px (0.75rem) | Cards, containers |
| `--radius-xl` | 16px (1rem) | Large cards, modals |
| `--radius-full` | 9999px | Pills, circles, avatars |

---

## 2. Component Library

### 2.1 Buttons

#### Primary Button

```
Height: 48px (3rem)
Padding: 0 24px (0 1.5rem)
Border-radius: 24px (radius-full)
Background: #2563EB (primary)
Text: White, 16px, 600 weight
Shadow: shadow-sm

States:
- Default: #2563EB, shadow-sm
- Hover: #1D4ED8 (primary-dark), shadow-md
- Pressed: #1E40AF (scale 0.98)
- Disabled: #94A3B8, opacity 0.5, no shadow
- Focus: shadow-focus ring
```

#### Secondary Button

```
Height: 48px
Padding: 0 24px
Border-radius: 24px
Background: Transparent
Border: 1px solid #E2E8F0
Text: #475569, 16px, 600 weight

States:
- Default: Transparent, border #E2E8F0
- Hover: #F8FAFC background
- Pressed: #F1F5F9 background (scale 0.98)
- Disabled: opacity 0.5
```

#### Danger Button

```
Height: 48px
Padding: 0 24px
Border-radius: 24px
Background: #EF4444
Text: White, 16px, 600 weight

States:
- Default: #EF4444
- Hover: #DC2626
- Pressed: #B91C1C (scale 0.98)
```

#### Ghost Button

```
Height: 44px
Padding: 0 16px
Border-radius: 8px
Background: Transparent
Text: #2563EB, 14px, 500 weight

States:
- Default: Transparent
- Hover: #EFF6FF background
- Pressed: #DBEAFE background
```

#### Button Sizes

| Size | Height | Padding | Font Size | Usage |
|------|--------|---------|-----------|-------|
| Small | 36px | 0 16px | 14px | Compact UI |
| Medium | 48px | 0 24px | 16px | Default |
| Large | 56px | 0 32px | 18px | Hero CTAs |

#### Icon Button

```
Size: 44px x 44px (touch target)
Border-radius: 12px (radius-lg) or full
Background: Transparent or surface
Icon size: 24px
Icon color: text-secondary or primary

States:
- Default: Transparent
- Hover: surface-hover background
- Pressed: surface-pressed (scale 0.95)
```

### 2.2 Input Fields

#### Text Input

```
Height: 48px
Padding: 0 16px
Border: 1px solid #E2E8F0
Border-radius: 8px
Background: White
Font: 16px / 400 weight
Placeholder: #94A3B8

States:
- Default: border #E2E8F0
- Hover: border #CBD5E1
- Focus: border #2563EB, shadow-focus
- Error: border #EF4444, shadow-error
- Disabled: bg #F1F5F9, text #94A3B8
- Filled: text #0F172A
```

#### Textarea

```
Min-height: 120px
Padding: 12px 16px
Border: 1px solid #E2E8F0
Border-radius: 8px
Background: White
Font: 16px / 400 weight
Line-height: 1.5
Resize: vertical only

Character Counter:
- Position: Bottom right
- Style: 12px, #94A3B8
- Warning at 80%: #F59E00
- Error at 100%: #EF4444
```

#### Phone Input (Special)

```
Structure:
┌────────────────────────────────┐
│ 🇫🇷 +33 │ 6 12 34 56 78       │
└────────────────────────────────┘

Country selector: 80px width, flag + code
Number input: Flexible, auto-format spacing
Height: 48px
Border-radius: 8px
```

#### Input with Icon

```
Structure:
┌────────────────────────────────┐
│ 👤 │ Input text               │
└────────────────────────────────┘

Icon:
- Position: Left, 16px from edge
- Size: 20px
- Color: #94A3B8

Input:
- Padding-left: 48px (3rem)
```

### 2.3 Cards

#### SMS Card

```
Background: White
Padding: 16px
Border-radius: 12px
Shadow: shadow-sm
Border: none (or 1px #F1F5F9 for flat variant)

Structure:
┌─────────────────────────────────────┐
│ +33 6 12 34 56 78          14:32  │ ← Number + Time (flex, space-between)
│                                     │
│ "Hello, I'm interested in your     │ ← Message preview (2 lines max)
│  services..."                      │
│                                     │
│ Auto-replied ✓              [>]    │ ← Status + Chevron
└─────────────────────────────────────┘

Number: 16px, 600 weight, #0F172A
Time: 12px, 500 weight, #94A3B8
Preview: 14px, 400 weight, #475569, line-clamp-2
Status: 12px, 500 weight, #10B981
```

#### Stat Card

```
Background: White
Padding: 20px
Border-radius: 12px
Shadow: shadow-sm

Structure:
┌─────────────────────────────────────┐
│ This month                          │ ← Label (caption style)
│                                     │
│ 3 / 10 SMS                          │ ← Numbers (display style)
│ ███░░░░░░░                          │ ← Progress bar
│                                     │
│ Reset in 12 days                    │ ← Subtext (muted)
└─────────────────────────────────────┘

Progress bar:
- Height: 4px
- Border-radius: 2px
- Background: #E2E8F0
- Fill: #2563EB (or #10B981 if <50%, #F59E0B if >80%, #EF4444 if 100%)
```

#### Info Card

```
Background: #EFF6FF (primary-subtle)
Padding: 16px
Border-radius: 8px
Border-left: 4px solid #2563EB

Structure:
┌─────────────────────────────────────┐
│ ℹ️  Setup your phone number to     │
│     start receiving SMS.           │
└─────────────────────────────────────┘

Variants:
- Info: #EFF6FF, border #2563EB
- Success: #ECFDF5, border #10B981
- Warning: #FFFBEB, border #F59E0B
- Error: #FEF2F2, border #EF4444
```

### 2.4 Navigation

#### Bottom Tab Bar (Mobile)

```
Height: 64px + safe-area-inset-bottom
Background: White
Border-top: 1px solid #E2E8F0
Position: Fixed bottom
Padding-bottom: env(safe-area-inset-bottom)

Structure:
┌─────────────────────────────────────┐
│  [🏠]      [🕐]      [⚙️]          │
│  Home     History   Settings       │
└─────────────────────────────────────┘

Tab item:
- Width: 33.33%
- Height: 64px
- Icon size: 24px
- Label: 12px, 500 weight

Active state:
- Icon: #2563EB
- Label: #2563EB

Inactive state:
- Icon: #94A3B8
- Label: hidden (icon only) or #94A3B8

Touch target: Full tab area (min 44px height)
```

#### Header

```
Height: 56px
Background: White
Border-bottom: 1px solid #E2E8F0
Padding: 0 16px
Position: Sticky top

Structure (Home):
┌─────────────────────────────────────┐
│ AwayText                ⚙️  👤     │
└─────────────────────────────────────┘

Structure (Subpage):
┌─────────────────────────────────────┐
│ <  Configuration                    │
└─────────────────────────────────────┘

Title: 18px, 600 weight, #0F172A
Back button: 44px touch target
```

### 2.5 Toggle (Big ON/OFF Switch)

**The Hero Component**

```
Container:
- Width: 120px
- Height: 64px
- Border-radius: 32px (pill)
- Background OFF: #E2E8F0
- Background ON: #10B981
- Transition: 300ms ease

Knob:
- Size: 56px x 56px
- Border-radius: 28px (circle)
- Background: White
- Shadow: shadow-md
- Position: 4px from edge
- Transition: transform 300ms ease

States:
OFF:
  - Container: #E2E8F0
  - Knob: translateX(0)
  
ON:
  - Container: #10B981
  - Knob: translateX(56px)

Interactive:
  - Tap to toggle
  - Swipe gesture support
  - Haptic feedback on change

Label below:
  - "Auto-Reply" - 16px, 600 weight, #0F172A
  - Status: "Active" / "Inactive" - 14px, success/danger color
```

### 2.6 Lists

#### SMS List Item

```
Padding: 16px
Border-bottom: 1px solid #F1F5F9
Background: White
Min-height: 80px
Touch target: Full row

Swipe Actions (right):
- Mark as read (blue, 👁️)
- Delete (red, 🗑️)
- Reveal: 80px each side

Structure:
┌─────────────────────────────────────┐
│ +33 6 12 34 56 78          14:32  │
│                                     │
│ "Hello, I'm interested..."         │
│                                     │
│ ● Auto-replied ✓                    │
└─────────────────────────────────────┘

Unread indicator:
- 8px blue dot before number
- Number in #0F172A (not muted)

Group headers:
- "TODAY", "YESTERDAY", "FEBRUARY 15"
- 12px, 500 weight, uppercase, #94A3B8
- Padding: 8px 16px
- Background: #F8FAFC
```

### 2.7 Feedback

#### Toast Notifications

```
Position: Fixed bottom (above tab bar)
Margin: 16px
Animation: Slide up + fade in
Duration: 3 seconds (auto-dismiss)

Structure:
┌─────────────────────────────────────┐
│ ✅  Auto-reply activated            │
└─────────────────────────────────────┘

Style:
- Background: #0F172A (dark)
- Text: White, 14px
- Padding: 12px 16px
- Border-radius: 8px
- Shadow: shadow-lg
- Icon: 20px, left of text

Variants:
- Success: ✅ Green icon
- Error: ❌ Red icon
- Info: ℹ️ Blue icon
- Warning: ⚠️ Yellow icon
```

#### Modal/Dialog

```
Overlay:
- Background: rgba(0, 0, 0, 0.5)
- Backdrop-filter: blur(2px)

Container:
- Background: White
- Border-radius: 16px (top on mobile sheet)
- Padding: 24px
- Max-width: 400px
- Margin: auto

Animation:
- Mobile sheet: Slide up from bottom
- Center modal: Scale + fade

Structure:
┌─────────────────────────────────────┐
│                                     │
│    🗑️                               │
│                                     │
│  Delete this message?              │
│                                     │
│  This action cannot be undone.     │
│                                     │
│  [Cancel]      [Delete]            │
│                                     │
└─────────────────────────────────────┘

Title: 20px, 600 weight
Description: 14px, #475569
Actions: Side by side or stacked
```

#### Empty States

```
Structure:
┌─────────────────────────────────────┐
│                                     │
│         ┌─────────┐                 │
│         │    📭   │                 │ ← Illustration
│         └─────────┘                 │
│                                     │
│      No messages yet               │
│                                     │
│   Your SMS history will appear     │
│   here once you start receiving    │
│   messages.                        │
│                                     │
└─────────────────────────────────────┘

Illustration:
- Size: 120px
- Style: Line art, muted colors
- Color: #CBD5E1

Title: 18px, 600 weight, #0F172A
Description: 14px, #64748B, max-width 280px, centered
CTA (optional): Primary button below
```

#### Loading States

```
Skeleton:
- Background: linear-gradient(90deg, #F1F5F9 25%, #E2E8F0 50%, #F1F5F9 75%)
- Background-size: 200% 100%
- Animation: shimmer 1.5s infinite
- Border-radius: 4px

Spinner:
- Size: 24px
- Color: #2563EB
- Thickness: 2px
- Animation: rotate 1s linear infinite
```

---

## 3. Screen Specifications

### 3.1 Dashboard (Home)

**Purpose:** Main control center - check status, toggle service, view stats

#### Layout

```
┌─────────────────────────────────────┐ ← Header (56px)
│ AwayText                ⚙️  👤     │
├─────────────────────────────────────┤
│                                     │
│    ┌─────────────────────────┐      │ ← Toggle section
│    │                         │      │
│    │      [BIG TOGGLE]       │      │ 120x64px toggle
│    │                         │      │ Centered
│    └─────────────────────────┘      │
│                                     │
│         Auto-Reply                  │ 16px, 600
│         Active                      │ 14px, success
│                                     │
│    ─────────────────────────────    │ Divider
│                                     │
│    This month                       │ Section label
│    ┌─────────────────────────┐      │ ← Stat card
│    │ 3 / 10 SMS              │      │ Display numbers
│    │ ███░░░░░░░              │      │ Progress bar
│    │ Reset in 12 days        │      │ Caption, muted
│    └─────────────────────────┘      │
│                                     │
│    ─────────────────────────────    │
│                                     │
│    Recent Messages           [>]   │ Section with link
│                                     │
│    ┌─────────────────────────┐      │ ← SMS card
│    │ +33 6 12...      14:32  │      │
│    │ "Hello, I'm..."         │      │
│    │ Auto-replied ✓          │      │
│    └─────────────────────────┘      │
│                                     │
│    ┌─────────────────────────┐      │ ← SMS card
│    │ +33 7 23...      11:15  │      │
│    │ "What are your..."      │      │
│    │ Auto-replied ✓          │      │
│    └─────────────────────────┘      │
│                                     │
│                                     │
└─────────────────────────────────────┤ ← Bottom nav (64px + safe area)
│  [🏠]      [🕐]      [⚙️]          │
└─────────────────────────────────────┘
```

#### Specs

| Element | Specs |
|---------|-------|
| Page bg | #F8FAFC |
| Content padding | 16px horizontal, 24px vertical |
| Section gap | 24px |
| Toggle container | Centered, 24px margin top/bottom |
| Stat card | Full width, 20px padding |
| SMS cards | Full width, 16px padding, 12px gap between |

### 3.2 Configuration Screen

**Purpose:** Set up and customize auto-reply settings

#### Layout

```
┌─────────────────────────────────────┐ ← Header
│ <  Configuration                    │
├─────────────────────────────────────┤
│                                     │
│  Your Phone Number                  │ Section label
│  ┌───────────────────────────────┐  │
│  │ 🇫🇷 +33 │ 6 12 34 56 78      │  │ Phone input
│  └───────────────────────────────┘  │
│  [Verify number]                    │ Link button
│                                     │
│  ─────────────────────────────      │
│                                     │
│  Auto-Reply Message                 │ Section label
│  ┌───────────────────────────────┐  │
│  │ Hello! I'm currently away.   │  │ Textarea
│  │ I'll get back to you as soon │  │
│  │ as possible.                 │  │
│  │                              │  │
│  │ - AwayText                   │  │
│  └───────────────────────────────┘  │
│  47 / 160 characters                │ Counter
│                                     │
│  [Preview Message]                  │ Ghost button
│                                     │
│  ─────────────────────────────      │
│                                     │
│  Schedule (Optional)                │ Section label
│                                     │
│  From                               │
│  ┌───────────────────────────────┐  │
│  │ 📅  Feb 20, 2026   🕐 09:00  │  │ DateTime picker
│  └───────────────────────────────┘  │
│                                     │
│  To                                 │
│  ┌───────────────────────────────┐  │
│  │ 📅  Feb 27, 2026   🕐 18:00  │  │
│  └───────────────────────────────┘  │
│                                     │
│                                     │
│     ┌─────────────────────────┐     │
│     │     Save Changes        │     │ Primary CTA
│     └─────────────────────────┘     │ 48px height
│                                     │
└─────────────────────────────────────┘
```

#### Specs

| Element | Specs |
|---------|-------|
| Section label | 12px, uppercase, #94A3B8, margin-bottom 8px |
| Input label | 14px, 500 weight, #475569, margin-bottom 4px |
| Input gap | 16px between fields |
| Section gap | 24px between sections |
| CTA position | Fixed bottom or below content |
| CTA margin | 24px top, 16px bottom |

### 3.3 History Screen

**Purpose:** View all received SMS and auto-replies

#### Layout

```
┌─────────────────────────────────────┐ ← Header
│ History           🔍  [Filters]     │
├─────────────────────────────────────┤
│                                     │
│  TODAY                              │ Date header
│                                     │
│  ┌───────────────────────────────┐  │ ← SMS item
│  │ +33 6 12 34 56 78      14:32 │  │
│  │ "Hello, I'm interested..."   │  │
│  │ 14:32 • Auto-replied ✓       │  │
│  └───────────────────────────────┘  │
│                                     │
│  ┌───────────────────────────────┐  │ ← SMS item
│  │ +33 7 23 45 67 89      11:15 │  │
│  │ "What are your rates?"       │  │
│  │ 11:15 • Auto-replied ✓       │  │
│  └───────────────────────────────┘  │
│                                     │
│  YESTERDAY                          │ Date header
│                                     │
│  ┌───────────────────────────────┐  │
│  │ +33 6 98 76 54 32      16:45 │  │
│  │ "Are you available..."       │  │
│  │ 16:45 • Auto-replied ✓       │  │
│  └───────────────────────────────┘  │
│                                     │
│  FEBRUARY 15                        │ Date header
│                                     │
│  ┌───────────────────────────────┐  │
│  │ +33 6 11 22 33 44      09:30 │  │
│  │ "Urgent: water leak..."      │  │
│  │ 09:30 • Auto-replied ✓       │  │
│  └───────────────────────────────┘  │
│                                     │
│         [Load more...]              │ Button (pagination)
│                                     │
└─────────────────────────────────────┤ ← Bottom nav
│  [🏠]      [🕐]      [⚙️]          │
└─────────────────────────────────────┘
```

#### Specs

| Element | Specs |
|---------|-------|
| Date header | 12px, 500 weight, uppercase, #94A3B8, padding 8px 16px |
| SMS item | Full width, 16px padding, border-bottom #F1F5F9 |
| Swipe reveal | 80px per action, color coded |
| Pagination | Centered, 24px margin |

### 3.4 Settings Screen

**Purpose:** Manage account, subscription, and app preferences

#### Layout

```
┌─────────────────────────────────────┐ ← Header
│ Settings                            │
├─────────────────────────────────────┤
│                                     │
│  ACCOUNT                            │ Section header
│                                     │
│  ┌───────────────────────────────┐  │ ← Setting row
│  │ 👤 Profile              >    │  │
│  └───────────────────────────────┘  │
│  ┌───────────────────────────────┐  │
│  │ 📱 Phone Number         >    │  │
│  │ +33 6 12 34 56 78              │  │ Subtext
│  └───────────────────────────────┘  │
│  ┌───────────────────────────────┐  │
│  │ 🔑 Password             >    │  │
│  └───────────────────────────────┘  │
│                                     │
│  SUBSCRIPTION                       │ Section header
│                                     │
│  ┌───────────────────────────────┐  │ ← Plan card
│  │ ⭐ Premium Plan                │  │
│  │ €2/month                      │  │
│  │                             > │  │
│  └───────────────────────────────┘  │
│  [Manage Subscription]              │ Button
│                                     │
│  PREFERENCES                        │ Section header
│                                     │
│  ┌───────────────────────────────┐  │ ← Toggle row
│  │ 🔔 Push Notifications    [ON] │  │
│  └───────────────────────────────┘  │
│  ┌───────────────────────────────┐  │
│  │ 🌙 Dark Mode            [OFF] │  │
│  └───────────────────────────────┘  │
│  ┌───────────────────────────────┐  │
│  │ 🌍 Language             FR  > │  │
│  └───────────────────────────────┘  │
│                                     │
│  SUPPORT                            │ Section header
│                                     │
│  ┌───────────────────────────────┐  │
│  │ ❓ Help Center          >    │  │
│  └───────────────────────────────┘  │
│  ┌───────────────────────────────┐  │
│  │ 💬 Contact Support      >    │  │
│  └───────────────────────────────┘  │
│                                     │
│  [Logout]                           │ Danger button
│                                     │
│  Version 1.0.0                      │ Centered, muted
│                                     │
└─────────────────────────────────────┤ ← Bottom nav
│  [🏠]      [🕐]      [⚙️]          │
└─────────────────────────────────────┘
```

#### Specs

| Element | Specs |
|---------|-------|
| Section header | 12px, 500 weight, uppercase, #94A3B8, padding 16px |
| Setting row | 16px padding, border-bottom #F1F5F9, min-height 56px |
| Row icon | 20px, #475569, margin-right 12px |
| Row title | 16px, 500 weight, #0F172A |
| Row subtext | 14px, #94A3B8 |
| Toggle switch | 48px x 28px (smaller than hero toggle) |
| Chevron | Right side, 20px, #94A3B8 |

### 3.5 Onboarding Flow (3-Step)

**Purpose:** Guide new users through setup

#### Step 1: Welcome

```
┌─────────────────────────────────────┐
│                                     │
│                                     │
│         ┌─────────────┐             │
│         │             │             │ ← Logo
│         │   AwayText  │             │
│         │             │             │
│         └─────────────┘             │
│                                     │
│     Never miss a customer,          │
│     even when you're away           │ ← Headline
│                                     │
│   Automatic SMS replies for         │
│   busy professionals                │ ← Subtitle
│                                     │
│                                     │
│     ┌─────────────────────────┐     │
│     │    Get Started          │     │ CTA
│     └─────────────────────────┘     │
│                                     │
│    [•] [○] [○]                     │ Progress dots
│                                     │
│     Already have an account?        │
│     Sign In                         │ Link
│                                     │
└─────────────────────────────────────┘
```

#### Step 2: Phone Setup

```
┌─────────────────────────────────────┐
│ <                           Skip   │
├─────────────────────────────────────┤
│                                     │
│         ┌─────────────┐             │
│         │     📱      │             │
│         └─────────────┘             │
│                                     │
│     Add your phone number           │
│                                     │
│   We'll send a verification         │
│   code to confirm it's you          │
│                                     │
│  ┌───────────────────────────────┐  │
│  │ 🇫🇷 +33 │                    │  │ Input
│  └───────────────────────────────┘  │
│                                     │
│     ┌─────────────────────────┐     │
│     │    Send Code            │     │ CTA
│     └─────────────────────────┘     │
│                                     │
│    [←] [•] [○]                     │
│                                     │
└─────────────────────────────────────┘
```

#### Step 3: Message Setup

```
┌─────────────────────────────────────┐
│ <                           Skip   │
├─────────────────────────────────────┤
│                                     │
│         ┌─────────────┐             │
│         │     💬      │             │
│         └─────────────┘             │
│                                     │
│     Write your auto-reply           │
│                                     │
│   Customers will receive this       │
│   message when you're away          │
│                                     │
│  ┌───────────────────────────────┐  │
│  │ Hello! I'm currently away.   │  │
│  │ I'll get back to you as soon │  │
│  │ as possible.                 │  │
│  │                              │  │
│  │ - {Your Name}                │  │
│  └───────────────────────────────┘  │
│  47 / 160 characters                │
│                                     │
│  ┌─────────────────────────────┐    │
│  │ 📝 Quick templates ▼        │    │
│  └─────────────────────────────┘    │
│                                     │
│     ┌─────────────────────────┐     │
│     │    Finish Setup         │     │ CTA
│     └─────────────────────────┘     │
│                                     │
│    [←] [←] [•]                     │
│                                     │
└─────────────────────────────────────┘
```

#### Specs

| Element | Specs |
|---------|-------|
| Skip button | Top right, 14px, #94A3B8 |
| Illustration | 120px, centered, #2563EB |
| Headline | 24px, 700 weight, centered |
| Subtitle | 16px, #64748B, centered, max-width 280px |
| CTA | Full width, 48px height, margin-top 32px |
| Progress dots | 8px circles, active=#2563EB, inactive=#E2E8F0, gap 8px |
| Back link | Top left, 44px touch target |

---

## 4. Mobile Patterns

### 4.1 Touch Targets

| Element | Minimum Size | Target Area |
|---------|--------------|-------------|
| Buttons | 48x48px | Full button |
| List items | 44x80px | Full row |
| Icons | 44x44px | Icon + padding |
| Tab bar items | 44x64px | Full tab |
| Toggle switch | 120x64px | Full switch |
| Input fields | 48px height | Full input |
| Close/Back | 44x44px | Square touch area |

### 4.2 Gesture Support

| Gesture | Action | Component |
|---------|--------|-----------|
| Tap | Activate/Select | Buttons, cards, list items |
| Long press | Context menu | SMS items |
| Swipe left | Reveal actions | SMS list |
| Swipe right | Mark as read | SMS list |
| Pull down | Refresh | Lists |
| Pinch | Zoom (if applicable) | Images |
| Drag | Reorder (future) | Lists |

#### Swipe Actions (SMS List)

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  ┌────────────────────────────────────────────────┐  │
│  │ 📧       │  SMS Content  │       🗑️ 📌       │  │
│  │ Reply    │               │       Delete Pin   │  │
│  └────────────────────────────────────────────────┘  │
│                                                      │
│  Left swipe reveals: Reply (blue)                    │
│  Right swipe reveals: Delete (red), Pin (gray)       │
│                                                      │
│  Max swipe: 120px per side                           │
│  Threshold: 40px to reveal                           │
│  Elastic snap-back on release                        │
└──────────────────────────────────────────────────────┘
```

### 4.3 Thumb Zone Optimization

```
┌─────────────────────────────────────┐
│  ┌─────────────────────────────┐    │ ← Safe: Secondary actions
│  │         Header              │    │
│  └─────────────────────────────┘    │
│                                     │
│  ┌─────────────────────────────┐    │ ← Stretch: Status, less frequent
│  │                             │    │
│  │      [BIG TOGGLE]           │    │ ← Natural: Primary action
│  │                             │    │   (Centered for both thumbs)
│  └─────────────────────────────┘    │
│                                     │
│  ┌─────────────────────────────┐    │ ← Easy: Recent items
│  │      SMS Card 1             │    │
│  └─────────────────────────────┘    │
│  ┌─────────────────────────────┐    │
│  │      SMS Card 2             │    │
│  └─────────────────────────────┘    │
│                                     │
│  ┌─────────────────────────────┐    │ ← Safe: Navigation (easy both)
│  │   [🏠]  [🕐]  [⚙️]         │    │
│  └─────────────────────────────┘    │
└─────────────────────────────────────┘

Thumb zones for right-handed user:
- 🔵 Easy (bottom left): Most frequent actions
- 🟢 Natural (center): Primary toggle
- 🟡 Stretch (top): Secondary info
- 🔴 Safe (corners): Navigation, menu
```

### 4.4 Safe Areas

```css
/* iOS Safe Areas */
--safe-area-top: env(safe-area-inset-top);
--safe-area-bottom: env(safe-area-inset-bottom);
--safe-area-left: env(safe-area-inset-left);
--safe-area-right: env(safe-area-inset-right);

/* Usage */
.header {
  padding-top: calc(16px + var(--safe-area-top));
}

.bottom-nav {
  padding-bottom: calc(8px + var(--safe-area-bottom));
  height: calc(64px + var(--safe-area-bottom));
}

/* Notch handling */
@media (display-mode: standalone) {
  .page {
    padding-top: var(--safe-area-top);
  }
}
```

#### Device-Specific Adjustments

| Device | Top Inset | Bottom Inset | Notes |
|--------|-----------|--------------|-------|
| iPhone SE | 0px | 0px | No notch |
| iPhone 12/13/14 | 47px | 34px | Face ID notch |
| iPhone 14 Pro/15 | 59px | 34px | Dynamic Island |
| Android (varies) | 0-32px | 0-24px | Gesture nav |
| PWA standalone | Same as native | | Full screen |

---

## 5. Responsive Specs

### 5.1 Mobile (320px - 480px)

**Primary Target - Mobile First Design**

```css
/* Base styles (mobile first) */
.container {
  max-width: 100%;
  padding: 16px;
}

.card {
  width: 100%;
  border-radius: 12px;
}

/* Bottom navigation visible */
.bottom-nav {
  display: flex;
}

/* Single column layout */
.grid {
  grid-template-columns: 1fr;
}
```

| Spec | Value |
|------|-------|
| Max container width | 100% |
| Horizontal padding | 16px |
| Card border-radius | 12px |
| Navigation | Bottom tabs |
| Touch targets | 44-48px min |
| Typography scale | Base (1x) |

### 5.2 Tablet (481px - 768px)

```css
@media (min-width: 481px) {
  .container {
    max-width: 480px;
    margin: 0 auto;
  }
  
  .dashboard-grid {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
  
  /* Side navigation option */
  .bottom-nav {
    /* Could switch to side rail */
  }
}
```

| Spec | Value |
|------|-------|
| Max container width | 480px centered |
| Horizontal padding | 24px |
| Card border-radius | 16px |
| Navigation | Bottom tabs or side rail |
| Touch targets | 48px min |
| Typography scale | 1.05x |

### 5.3 Desktop (769px+)

```css
@media (min-width: 769px) {
  .container {
    max-width: 480px; /* Keep mobile feel */
    margin: 0 auto;
    min-height: 100vh;
    background: white;
    box-shadow: 0 0 40px rgba(0,0,0,0.1);
  }
  
  body {
    background: #F1F5F9;
  }
  
  /* Hover states enabled */
  .button:hover {
    transform: translateY(-1px);
  }
  
  /* Side navigation */
  .sidebar {
    display: block;
    width: 240px;
  }
}
```

| Spec | Value |
|------|-------|
| Container | 480px centered, shadow |
| Body background | #F1F5F9 |
| Hover states | Enabled |
| Cursor | Pointer on clickable |
| Navigation | Bottom tabs (consistency) |
| Typography scale | 1x (same as mobile) |

---

## 6. Accessibility

### 6.1 Color Contrast Ratios

| Element | Foreground | Background | Ratio | WCAG |
|---------|------------|------------|-------|------|
| Primary text | #0F172A | #FFFFFF | 12.6:1 | AAA |
| Secondary text | #475569 | #FFFFFF | 7.2:1 | AA |
| Muted text | #64748B | #FFFFFF | 5.2:1 | AA |
| Placeholder | #94A3B8 | #FFFFFF | 3.2:1 | AA Large |
| Primary button | #FFFFFF | #2563EB | 5.1:1 | AA |
| Success toggle | #FFFFFF | #10B981 | 4.5:1 | AA |
| Error text | #EF4444 | #FFFFFF | 5.8:1 | AA |
| Warning text | #D97706 | #FFFFFF | 4.6:1 | AA |

### 6.2 Screen Reader Labels

```html
<!-- Toggle with full context -->
<button 
  role="switch" 
  aria-checked="true"
  aria-label="Auto-reply is active. Double tap to deactivate">
  <span class="toggle-visual"></span>
</button>

<!-- SMS Card -->
<article 
  aria-label="SMS from +33 6 12 34 56 78, received 14:32, auto-replied">
  <h3>+33 6 12 34 56 78</h3>
  <p>Hello, I'm interested...</p>
  <span>Auto-replied</span>
</article>

<!-- Navigation -->
<nav aria-label="Main navigation">
  <a href="/" aria-current="page">Dashboard</a>
  <a href="/history">History</a>
  <a href="/settings">Settings</a>
</nav>

<!-- Icon buttons -->
<button aria-label="Settings">
  <svg aria-hidden="true"><!-- gear icon --></svg>
</button>

<!-- Progress bar -->
<div role="progressbar" 
     aria-valuenow="3" 
     aria-valuemin="0" 
     aria-valuemax="10"
     aria-label="SMS usage, 3 of 10 used">
  <div class="bar" style="width: 30%"></div>
</div>
```

### 6.3 Focus States

```css
/* Default focus ring */
:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.4);
}

/* Button focus */
button:focus-visible {
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.4), 
              0 0 0 6px rgba(37, 99, 235, 0.1);
}

/* Input focus */
input:focus {
  border-color: #2563EB;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
}

/* Card focus (when clickable) */
.card:focus-visible {
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.4),
              0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* Skip link (accessibility) */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #2563EB;
  color: white;
  padding: 8px 16px;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
```

### 6.4 Motion & Animation Preferences

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 7. Assets List

### 7.1 Icons Needed

**Lucide Icons (24px default)**

| Icon Name | Usage | Category |
|-----------|-------|----------|
| `home` | Dashboard tab | Navigation |
| `clock` | History tab | Navigation |
| `settings` | Settings tab | Navigation |
| `power` | Toggle icon (alt) | Action |
| `check` | Success states | Status |
| `x` | Close, delete | Action |
| `chevron-left` | Back navigation | Navigation |
| `chevron-right` | Forward, more | Navigation |
| `message-square` | SMS, messages | Content |
| `phone` | Phone number | Content |
| `user` | Profile | Content |
| `mail` | Email | Content |
| `bell` | Notifications | Settings |
| `moon` | Dark mode | Settings |
| `globe` | Language | Settings |
| `help-circle` | Help | Support |
| `life-buoy` | Support | Support |
| `log-out` | Logout | Action |
| `search` | Search | Action |
| `filter` | Filters | Action |
| `calendar` | Schedule | Content |
| `clock` | Time | Content |
| `credit-card` | Subscription | Content |
| `shield` | Security | Content |
| `eye` | View, preview | Action |
| `eye-off` | Hide | Action |
| `copy` | Copy text | Action |
| `trash-2` | Delete | Action |
| `edit` | Edit | Action |
| `plus` | Add | Action |
| `minus` | Remove | Action |
| `more-vertical` | More options | Action |
| `alert-circle` | Warning | Status |
| `info` | Information | Status |
| `check-circle` | Completed | Status |

**Custom Icons (if needed)**

| Icon | Description | Usage |
|------|-------------|-------|
| Logo mark | Minimalist "A" or chat bubble | App icon, header |
| Empty state inbox | Line art envelope | No messages |
| Empty state search | Magnifying glass | No results |
| Success check | Animated checkmark | Onboarding |

### 7.2 Illustrations

| Name | Style | Usage | Format |
|------|-------|-------|--------|
| `welcome-illustration` | Line art, blue accent | Onboarding step 1 | SVG |
| `phone-setup` | Line art, phone icon | Onboarding step 2 | SVG |
| `message-setup` | Line art, chat bubble | Onboarding step 3 | SVG |
| `empty-inbox` | Line art, open envelope | History empty state | SVG |
| `empty-search` | Line art, magnifying glass | Search no results | SVG |
| `all-caught-up` | Line art, checkmark | End of list | SVG |
| `premium-upgrade` | Line art, star badge | Premium promo | SVG |

**Illustration Style Guide:**
- Stroke width: 2px
- Color: #CBD5E1 (muted) with #2563EB (primary) accent
- Size: 120px default, 160px for hero
- Corner radius: 12px container
- No fills, line art only
- Minimal detail, friendly style

### 7.3 Logo Variants

| Variant | Dimensions | Usage | Format |
|---------|------------|-------|--------|
| Logo mark only | 512x512 | App icon, favicon | SVG, PNG |
| Logo + wordmark | 1200x300 | Website header | SVG |
| Logo + wordmark (white) | 1200x300 | Dark backgrounds | SVG |
| Social media | 1200x630 | OG images, Twitter | PNG |
| PWA icons | 192x192, 512x512 | App manifest | PNG |

**Logo Specifications:**
- Font: Inter Bold for "AwayText"
- Icon: Simple chat bubble with "A" inside or minimal "A" letterform
- Primary: #2563EB on white
- Inverse: White on #2563EB
- Clear space: Equal to letter "A" height on all sides

### 7.4 PWA Assets

| Asset | Size | Purpose |
|-------|------|---------|
| `icon-192x192.png` | 192x192 | Home screen icon |
| `icon-512x512.png` | 512x512 | Splash screen |
| `icon-maskable-192.png` | 192x192 | Adaptive icon (Android) |
| `icon-maskable-512.png` | 512x512 | Adaptive icon (Android) |
| `apple-touch-icon.png` | 180x180 | iOS home screen |
| `favicon.ico` | 32x32 | Browser tab |
| `favicon-16x16.png` | 16x16 | Browser tab |
| `favicon-32x32.png` | 32x32 | Browser tab |

**Theme Colors:**
- Theme color (light): #FFFFFF
- Theme color (dark): #0F172A
- Background color: #F8FAFC
- Status bar (iOS): default

---

## Appendix: Quick Reference

### CSS Variables Summary

```css
:root {
  /* Colors */
  --primary: #2563EB;
  --success: #10B981;
  --danger: #EF4444;
  --warning: #F59E0B;
  --text-primary: #0F172A;
  --text-secondary: #475569;
  --text-muted: #94A3B8;
  --background: #F8FAFC;
  --surface: #FFFFFF;
  --border: #E2E8F0;
  
  /* Typography */
  --font-family: 'Inter', system-ui, sans-serif;
  --text-h1: 2rem;
  --text-h2: 1.625rem;
  --text-h3: 1.25rem;
  --text-body: 1rem;
  
  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  
  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  
  /* Radius */
  --radius-lg: 12px;
  --radius-full: 9999px;
}
```

### Tailwind Config Reference

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          dark: '#1D4ED8',
          light: '#DBEAFE',
          subtle: '#EFF6FF',
        },
        success: {
          DEFAULT: '#10B981',
          dark: '#059669',
          light: '#D1FAE5',
        },
        danger: {
          DEFAULT: '#EF4444',
          dark: '#DC2626',
          light: '#FEE2E2',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        '2xl': '16px',
      },
    },
  },
}
```

---

*Design System Version: 1.0*  
*For: AwayText Mobile App*  
*Platform: PWA → React Native*  
*Style: Modern Minimalist, Mobile-First*

