# SMS Auto-Responder - Product Requirements Document (PRD)

**Version:** 2.0  
**Date:** February 17, 2026  
**Status:** Updated with Mobile-First & App Strategy

---

## 1. Product Vision

### 1.1 Overview
A mobile-first SaaS solution for artisans and small business owners to automatically respond to SMS messages during absences (vacations, weekends, off-hours).

**Target Price:** €2/month (Premium)  
**Target Users:** Artisans, tradespeople, small business owners who receive customer SMS

### 1.2 Core Value Proposition
- **Problem:** Professionals receive customer SMS even during time off. No simple auto-reply solution exists.
- **Solution:** One-click auto-responder with professional message forwarding
- **Differentiation:** Mobile-first, ultra-simple (5 min setup), affordable vs carrier solutions

---

## 2. Mobile-First Strategy

### 2.1 Device Priority
1. **Primary:** Mobile phones (iOS/Android browsers)
2. **Secondary:** Tablet
3. **Tertiary:** Desktop (for initial heavy config)

### 2.2 Mobile UX Requirements
- **Touch targets:** Minimum 44x44px
- **Navigation:** Bottom tab bar (mobile pattern)
- **Forms:** Large inputs, minimal typing
- **Toggle:** Big ON/OFF switch (thumb-friendly)
- **Quick actions:** Swipe gestures on SMS list

### 2.3 Future App Strategy
**Phase 1 (MVP):** PWA (Progressive Web App)
- Installable from browser
- Push notifications
- Works offline
- Native-like experience

**Phase 2:** React Native App
- iOS App Store
- Android Play Store
- Native SMS integration (if possible)
- Share code with PWA (70% reuse)

**Phase 3:** Advanced Native Features
- Deep OS integration
- Widget
- Siri/Assistant shortcuts

### 2.4 Technical Preparation for App
- **Framework:** Next.js 14 (App Router) with PWA support
- **Styling:** Tailwind CSS (easy to port to React Native)
- **State:** Zustand (works with RN)
- **API:** REST (same for web and app)
- **Components:** Design tokens for easy theming

---

## 3. Branding & Naming

### 3.1 Brand Values
- **Simple:** No complexity, just works
- **Professional:** Trusted by serious business owners
- **Reliable:** Never misses a message
- **Modern:** Current tech, clean design

### 3.2 Name Options

#### Option 1: **AwayText** ⭐ RECOMMENDED
- Clear: "Away" + "Text"
- Professional but friendly
- Easy to pronounce in FR/EN
- Domain available: awaytext.io

#### Option 2: **AutoReply Pro**
- Descriptive, clear value
- "Pro" signals professional tool
- Slightly generic but trustworthy

#### Option 3: **SMSGuard**
- Protection angle
- "Guards" your communication
- Strong, reliable feeling

#### Option 4: **ReplyMate**
- Friendly, approachable
- "Mate" = assistant
- Casual but professional

#### Option 5: **OutOffice**
- Play on "Out of Office"
- Clear use case
- Simple, memorable

### 3.3 Selected Name
**Primary:** AwayText  
**Tagline:** "Never miss a customer, even when you're away"  
**Alternative tagline:** "Your SMS assistant"

---

## 4. Design Philosophy

### 4.1 Visual Style
**Modern Minimalist**
- Clean white space
- No decorative elements
- Function over form
- Professional but approachable

### 4.2 Color Palette
```
Primary:    #2563EB (Blue - trust, reliability)
Secondary:  #10B981 (Green - ON, active, success)
Danger:     #EF4444 (Red - OFF, error)
Background: #FFFFFF (White - clean)
Surface:    #F8FAFC (Light gray - cards)
Text:       #0F172A (Dark - readability)
Muted:      #64748B (Gray - secondary text)
```

### 4.3 Typography
- **Font:** Inter (Google Fonts)
- **Weights:** 400 (body), 600 (headings), 700 (CTA)
- **Scale:** Major Third (1.250)

### 4.4 Components Style
- **Cards:** Subtle shadow, rounded corners (12px)
- **Buttons:** Full rounded (pill shape), solid colors
- **Inputs:** Border-bottom only, minimal
- **Toggle:** Large iOS-style switch
- **Icons:** Lucide (consistent, clean)

### 4.5 Key Screens

#### 1. Dashboard (Home)
```
┌─────────────────────────────┐
│  AwayText        ⚙️  👤     │
├─────────────────────────────┤
│                             │
│  ┌───────────────────────┐  │
│  │     [BIG TOGGLE]      │  │
│  │      Auto-Reply       │  │
│  │         OFF           │  │
│  └───────────────────────┘  │
│                             │
│  SMS used: 3/10             │
│  ███░░░░░░░                 │
│                             │
│  Recent Messages ─────── >  │
│                             │
│  ┌───────────────────────┐  │
│  │ +33 6 12 34 56 78     │  │
│  │ "Hello, I'm interested"│  │
│  │ Auto-replied ✓        │  │
│  └───────────────────────┘  │
│                             │
│  [Quick Config]             │
│                             │
└─────────────────────────────┘
```

#### 2. Configuration
```
┌─────────────────────────────┐
│  < Configuration            │
├─────────────────────────────┤
│                             │
│  Your Number                │
│  ┌───────────────────────┐  │
│  │ +33 6 XX XX XX XX     │  │
│  └───────────────────────┘  │
│                             │
│  Auto-Reply Message         │
│  ┌───────────────────────┐  │
│  │ Hello! I'm currently  │  │
│  │ away. I'll reply ASAP │  │
│  │ ...                   │  │
│  └───────────────────────┘  │
│                             │
│  [Preview Message]          │
│                             │
│         [Save]              │
│                             │
└─────────────────────────────┘
```

#### 3. History
```
┌─────────────────────────────┐
│  History         🔍  ⚙️     │
├─────────────────────────────┤
│  Today                      │
│                             │
│  ┌───────────────────────┐  │
│  │ +33 6 12 34 56 78  >  │  │
│  │ "Hello..."            │  │
│  │ 14:32 • Auto-replied  │  │
│  └───────────────────────┘  │
│                             │
│  ┌───────────────────────┐  │
│  │ +33 7 23 45 67 89  >  │  │
│  │ "Price?"              │  │
│  │ 11:15 • Auto-replied  │  │
│  └───────────────────────┘  │
│                             │
└─────────────────────────────┘
```

---

## 5. Technical Requirements

### 5.1 PWA Features
- **Manifest:** Install prompt, icons, theme colors
- **Service Worker:** Offline functionality
- **Push API:** Notifications for new SMS
- **Background sync:** Queue actions when offline

### 5.2 React Native Migration Path
```
Shared:
├── API Layer (same REST endpoints)
├── State Management (Zustand)
├── Design Tokens (colors, spacing)
├── Business Logic (hooks)

Web Only:
├── Next.js pages
├── PWA config

RN Only:
├── Native navigation
├── Push notifications (FCM/APNs)
├── Native SMS (if allowed)
```

### 5.3 Performance Targets
- **FCP:** < 1.5s on 3G
- **TTI:** < 3s
- **Lighthouse:** > 90 mobile score
- **APK size:** < 50MB (future RN app)

---

## 6. User Flows

### Flow 1: First Install (PWA)
1. Visit awaytext.io
2. See install prompt (after 30s)
3. Tap "Add to Home Screen"
4. App installs, opens full-screen
5. Onboarding: Sign up → Config → Done

### Flow 2: Daily Use
1. Open app (from home screen)
2. See dashboard
3. Toggle ON before leaving
4. Close app (runs in background)
5. Receive notifications of auto-replies

### Flow 3: Check History
1. Open app
2. Tap "History" tab
3. See list of SMS
4. Tap one for details

---

## 7. Success Metrics

### 7.1 Product Metrics
- **Installs:** PWA added to home screen
- **Activations:** Toggle turned ON at least once
- **Retention:** D7, D30 active users
- **Conversion:** Free → Premium rate

### 7.2 Technical Metrics
- **Load time:** < 2s on 4G
- **Crash rate:** < 0.1%
- **Push delivery:** > 95%

---

## 8. Risks & Mitigation

| Risk | Impact | Mitigation |
|------|--------|------------|
| iOS PWA limitations | High | Prepare RN app earlier |
| Twilio costs spike | Medium | Rate limiting, alerts |
| User confusion (setup) | Medium | Simplified onboarding flow |
| App store rejection | Medium | Follow guidelines strictly |

---

## 9. Appendix

### 9.1 Competitor Analysis
- **RingCentral:** $30/month, too complex
- **Google Voice:** US only, no auto-reply
- **Carrier solutions:** Expensive, hidden

### 9.2 Domain Availability
- ✅ awaytext.io
- ✅ awaytext.app
- ⚠️ awaytext.com (taken)

---

*Document Version: 2.0*  
*Last Updated: 2026-02-17*  
*Status: Ready for Design Phase*
