# Design Brief - AwayText (SMS Auto-Responder)

**Project:** AwayText Mobile App  
**Style:** Modern Minimalist, Mobile-First  
**Status:** Ready for Design Phase

---

## 1. Design Philosophy

### 1.1 Core Principles
1. **Mobile First:** Everything designed for thumb navigation
2. **Minimalist:** No decorative elements, only function
3. **Clarity:** Instant understanding of status and actions
4. **Speed:** One-tap actions for common tasks

### 1.2 Visual Language
**Clean, Professional, Approachable**
- White space is king
- Sharp but friendly
- Premium feel without being expensive
- Trustworthy (handling customer communication)

---

## 2. Color System

### 2.1 Primary Palette
```css
--primary: #2563EB;        /* Trust Blue */
--primary-dark: #1D4ED8;   /* Hover state */
--primary-light: #DBEAFE;  /* Backgrounds */

--success: #10B981;        /* ON, Active */
--success-dark: #059669;   /* Pressed */

--danger: #EF4444;         /* OFF, Error */
--danger-dark: #DC2626;    /* Pressed */

--warning: #F59E0B;        /* Alerts, Limits */
```

### 2.2 Neutral Palette
```css
--white: #FFFFFF;
--background: #F8FAFC;     /* Page background */
--surface: #FFFFFF;        /* Cards */
--surface-hover: #F1F5F9;  /* Hover states */

--text-primary: #0F172A;   /* Headings */
--text-secondary: #475569; /* Body */
--text-muted: #94A3B8;     /* Placeholders */

--border: #E2E8F0;         /* Dividers */
--border-light: #F1F5F9;   /* Subtle dividers */
```

### 2.3 Usage Rules
- **Blue:** Primary actions, links, brand
- **Green:** ON state, success, positive
- **Red:** OFF state, errors, warnings
- **Gray:** Text hierarchy, disabled states
- **White:** Cards, contrast, cleanliness

---

## 3. Typography

### 3.1 Font Family
**Primary:** Inter (Google Fonts)
- Clean, modern, excellent legibility
- Good for UI and body text
- Weights: 400, 500, 600, 700

### 3.2 Type Scale (Major Third - 1.250)
```
Display:    48px / 700 / -0.02em  (Big numbers only)
H1:         32px / 700 / -0.01em  (Page titles)
H2:         26px / 600 / 0        (Section titles)
H3:         20px / 600 / 0        (Card titles)
Body:       16px / 400 / 0        (Default text)
Body-sm:    14px / 400 / 0        (Secondary)
Caption:    12px / 500 / 0.02em   (Labels, caps)
```

### 3.3 Typography Rules
- **Headings:** Tight letter-spacing, bold
- **Body:** Comfortable line-height (1.5)
- **Labels:** Uppercase, letter-spacing, small
- **Numbers:** Tabular figures for alignment

---

## 4. Spacing System

### 4.1 Base Unit: 4px
```
4px   - xs  (Icon gaps, tight spacing)
8px   - sm  (Inline elements)
12px  -     (Small padding)
16px  - md  (Standard padding, gaps)
24px  - lg  (Section gaps)
32px  - xl  (Large sections)
48px  - 2xl (Major sections)
64px  - 3xl (Hero spacing)
```

### 4.2 Layout Grid
- **Mobile:** Single column, 16px margins
- **Max-width:** 480px (mobile-optimized)
- **Gutters:** 16px
- **Touch targets:** Minimum 44x44px

---

## 5. Components

### 5.1 The Big Toggle (Hero Component)
**The most important UI element**

```
Size: 120px x 64px (thumb-friendly)
Border-radius: 32px (pill shape)

States:
- OFF: Gray background #E2E8F0, knob left
- ON: Green background #10B981, knob right
- Transition: 300ms ease

Label below:
"Auto-Reply" - 16px, 600 weight
"Active" / "Inactive" - 14px, status color
```

### 5.2 SMS Card
```
Background: White
Padding: 16px
Border-radius: 12px
Shadow: 0 1px 3px rgba(0,0,0,0.1)

Structure:
┌─────────────────────────┐
│ +33 6 12 34 56 78  14:32│ ← Number + Time
│                         │
│ "Hello, I'm interested  │ ← Message preview
│  in your services..."   │   (2 lines max)
│                         │
│ Auto-replied ✓          │ ← Status
└─────────────────────────┘
```

### 5.3 Bottom Navigation
```
Height: 64px
Background: White
Border-top: 1px solid #E2E8F0

Items (3):
- Dashboard (Home icon)
- History (Clock icon)
- Settings (Gear icon)

Active: Blue icon + label
Inactive: Gray icon only
```

### 5.4 Primary Button
```
Height: 48px (touch-friendly)
Padding: 0 24px
Border-radius: 24px (pill)
Background: #2563EB
Text: White, 16px, 600 weight

States:
- Default: Blue
- Pressed: Darker blue
- Disabled: Gray, opacity 0.5
```

### 5.5 Input Fields
```
Height: 48px
Border: 1px solid #E2E8F0
Border-radius: 8px
Padding: 0 16px
Font: 16px

Focus: Blue border, subtle shadow
Error: Red border, red text below
```

### 5.6 Counter Display
```
Big number: 32px, 700 weight
Label: 14px, muted color
Progress bar: 4px height, rounded

Example:
┌─────────────────────┐
│ 3 / 10 SMS          │ ← Numbers
│ ███░░░░░░░          │ ← Bar
│ Reset in 12 days    │ ← Subtext
└─────────────────────┘
```

---

## 6. Screen Designs

### 6.1 Dashboard (Home Screen)
**Purpose:** Main control center

**Layout:**
```
┌─────────────────────────────┐
│ AwayText          [👤]      │ ← Header
├─────────────────────────────┤
│                             │
│    ┌─────────────────┐      │
│    │                 │      │
│    │   [TOGGLE]      │      │ ← Big ON/OFF
│    │                 │      │
│    └─────────────────┘      │
│                             │
│    Auto-Reply               │
│    Active                   │ ← Status
│                             │
│    ─────────────────────    │
│                             │
│    This month               │
│    ┌─────────────────┐      │
│    │ 3 / 10 SMS      │      │ ← Counter
│    │ ███░░░░░░░      │      │
│    └─────────────────┘      │
│                             │
│    ─────────────────────    │
│                             │
│    Recent Messages    [>]   │
│                             │
│    ┌─────────────────┐      │
│    │ +33 6 12...     │      │ ← SMS Card
│    │ "Hello..."      │      │
│    │ Auto-replied ✓  │      │
│    └─────────────────┘      │
│                             │
└─────────────────────────────┤
│  [🏠]      [🕐]      [⚙️]  │ ← Bottom nav
└─────────────────────────────┘
```

### 6.2 Configuration Screen
**Purpose:** Set up auto-reply

**Layout:**
```
┌─────────────────────────────┐
│ <  Configuration            │
├─────────────────────────────┤
│                             │
│  Your Phone Number          │
│  ┌───────────────────────┐  │
│  │ +33 6 12 34 56 78     │  │
│  └───────────────────────┘  │
│                             │
│  Auto-Reply Message         │
│  ┌───────────────────────┐  │
│  │ Hello! I'm currently  │  │
│  │ away. I'll get back   │  │
│  │ to you as soon as     │  │
│  │ possible.             │  │
│  │                       │  │
│  │ - AwayText            │  │
│  └───────────────────────┘  │
│         47/160 characters   │
│                             │
│  [Preview Message]          │
│                             │
│  Schedule (Optional)        │
│  ┌───────────────────────┐  │
│  │ From: [Date]          │  │
│  │ To:   [Date]          │  │
│  └───────────────────────┘  │
│                             │
│                             │
│     ┌─────────────────┐     │
│     │   Save Changes  │     │ ← Big CTA
│     └─────────────────┘     │
│                             │
└─────────────────────────────┘
```

### 6.3 History Screen
**Purpose:** View all SMS and replies

**Layout:**
```
┌─────────────────────────────┐
│ History           [🔍]      │
├─────────────────────────────┤
│                             │
│  TODAY                      │
│                             │
│  ┌───────────────────────┐  │
│  │ +33 6 12 34 56 78  >  │  │
│  │ "Hello, I'm interested│  │
│  │ in your services..."  │  │
│  │ 14:32 • Auto-replied  │  │
│  └───────────────────────┘  │
│                             │
│  ┌───────────────────────┐  │
│  │ +33 7 23 45 67 89  >  │  │
│  │ "What are your rates? │  │
│  │ for this service?"    │  │
│  │ 11:15 • Auto-replied  │  │
│  └───────────────────────┘  │
│                             │
│  YESTERDAY                  │
│                             │
│  ┌───────────────────────┐  │
│  │ +33 6 98 76 54 32  >  │  │
│  │ "Are you available    │  │
│  │ next week?"           │  │
│  │ 16:45 • Auto-replied  │  │
│  └───────────────────────┘  │
│                             │
└─────────────────────────────┤
│  [🏠]      [🕐]      [⚙️]  │
└─────────────────────────────┘
```

---

## 7. Animations & Interactions

### 7.1 Micro-interactions
- **Toggle:** 300ms ease, scale knob on drag
- **Cards:** Subtle lift on press (scale 0.98)
- **Buttons:** Ripple effect on tap
- **Page transitions:** Slide from right (mobile pattern)

### 7.2 Feedback
- **Success:** Green checkmark, subtle haptic
- **Error:** Shake animation, red border
- **Loading:** Skeleton screens, not spinners

---

## 8. Responsive Considerations

### 8.1 Mobile (Primary)
- Single column
- Bottom navigation
- Full-width cards
- Large touch targets

### 8.2 Tablet
- Side navigation (optional)
- 2-column grid for lists
- More whitespace

### 8.3 Desktop
- Max-width container (480px)
- Centered layout
- Hover states on buttons

---

## 9. Assets Needed

### 9.1 Icons (Lucide)
- Home, Clock, Settings
- Toggle on/off
- Check, X
- Phone, Message
- Chevron Right
- Plus, Minus

### 9.2 Illustrations
- **Empty state:** Simple illustration, no messages yet
- **Onboarding:** 3 simple slides
- **Success:** Checkmark animation

### 9.3 Logo
- Simple wordmark: "AwayText"
- Icon: Minimalist chat bubble or "A" letterform
- Formats: SVG, PNG (various sizes)

---

## 10. Deliverables

### 10.1 Design Files
- [ ] Figma file (or equivalent)
- [ ] Component library
- [ ] Style guide
- [ ] Icon set

### 10.2 Documentation
- [ ] Design tokens (JSON)
- [ ] Component specs
- [ ] Animation guidelines
- [ ] Responsive breakpoints

---

## 11. Success Criteria

- [ ] Clean, uncluttered interface
- [ ] Thumb-friendly navigation
- [ ] Professional but approachable
- [ ] Consistent spacing and colors
- [ ] Accessible (contrast, touch targets)
- [ ] Feels like a native app (PWA)

---

*Design Brief Version: 2.0*  
*For: AwayText Mobile App*  
*Style: Modern Minimalist*
