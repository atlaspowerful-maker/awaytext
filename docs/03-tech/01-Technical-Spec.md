# Brief - Integrator Agent

## 💻 Mission
Développer et déployer le MVP SMS Auto-Responder.

## 🏗️ Architecture

### Stack Technique
| Couche | Tech | Raison |
|--------|------|--------|
| Frontend | Next.js 14 | SSR, API routes, facile à déployer |
| UI | Tailwind CSS | Rapide, responsive, cohérent |
| Auth | NextAuth.js | OAuth Google + Credentials |
| Database | PostgreSQL | Vercel Postgres (serverless) |
| ORM | Prisma | Type-safe, migrations faciles |
| SMS API | Twilio | Fiable, pricing clair |
| Payment | Stripe | Checkout intégré, webhooks |
| Hosting | Vercel | Déploiement auto, scale |

### Structure projet
```
sms-auto-responder/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/
│   │   │   ├── login/page.tsx
│   │   │   └── register/page.tsx
│   │   ├── dashboard/page.tsx
│   │   ├── history/page.tsx
│   │   ├── settings/page.tsx
│   │   └── api/
│   │       ├── auth/[...nextauth]/route.ts
│   │       ├── sms/webhook/route.ts
│   │       └── subscription/route.ts
│   ├── components/
│   │   ├── ui/                 # Composants réutilisables
│   │   ├── layout/
│   │   └── features/
│   ├── lib/
│   │   ├── prisma.ts
│   │   ├── twilio.ts
│   │   └── stripe.ts
│   └── types/
├── prisma/
│   └── schema.prisma
├── public/
└── package.json
```

---

## 🔧 Features à implémenter (MVP)

### Phase 1: Setup & Auth (30 min)
- [ ] Init Next.js project
- [ ] Setup Tailwind
- [ ] Setup Prisma + DB
- [ ] Config NextAuth (Google OAuth + Credentials)
- [ ] Middleware protection routes

### Phase 2: Core SMS (45 min)
- [ ] Config Twilio client
- [ ] Webhook réception SMS
- [ ] Auto-response logic
- [ ] Enregistrement SMS en DB

### Phase 3: Dashboard (45 min)
- [ ] Page dashboard avec toggle
- [ ] Form config numéro + message
- [ ] Compteur SMS
- [ ] Liste derniers SMS

### Phase 4: Historique (30 min)
- [ ] Page historique
- [ ] Filtres date/type
- [ ] Pagination

### Phase 5: Subscription (30 min)
- [ ] Stripe checkout
- [ ] Webhook Stripe
- [ ] Gestion quotas

### Phase 6: Polish & Deploy (30 min)
- [ ] Landing page
- [ ] Responsive
- [ ] Déploiement Vercel

---

## 🔐 Sécurité

- Rate limiting sur API
- Validation numéros téléphone
- Sanitization messages
- HTTPS only
- Variables sensibles en .env

---

## 📊 Modèles de données (Prisma)

```prisma
model User {
  id            String    @id @default(uuid())
  email         String    @unique
  name          String?
  phoneNumber   String?   @unique
  role          Role      @default(FREE)
  smsCount      Int       @default(0)
  autoResponse  AutoResponse?
  smsLogs       SmsLog[]
  createdAt     DateTime  @default(now())
}

model AutoResponse {
  id        String   @id @default(uuid())
  userId    String   @unique
  user      User     @relation(fields: [userId], references: [id])
  message   String
  isActive  Boolean  @default(false)
  createdAt DateTime @default(now())
}

model SmsLog {
  id          String   @id @default(uuid())
  userId      String
  user        User     @relation(fields: [userId], references: [id])
  fromNumber  String
  toNumber    String
  message     String
  direction   Direction
  createdAt   DateTime @default(now())
}

enum Role {
  FREE
  PREMIUM
}

enum Direction {
  INCOMING
  OUTGOING
}
```

---

## 🚀 Déploiement

1. **Vercel**
   - Connect GitHub repo
   - Auto-deploy on push
   - Environment variables

2. **Variables d'environnement**
   ```
   DATABASE_URL=
   NEXTAUTH_SECRET=
   GOOGLE_CLIENT_ID=
   GOOGLE_CLIENT_SECRET=
   TWILIO_ACCOUNT_SID=
   TWILIO_AUTH_TOKEN=
   TWILIO_PHONE_NUMBER=
   STRIPE_SECRET_KEY=
   STRIPE_WEBHOOK_SECRET=
   ```

---

## ✅ Definition of Done

- [ ] Code fonctionnel en local
- [ ] Tests basiques passent
- [ ] Déployé sur Vercel
- [ ] Webhook Twilio configuré
- [ ] Stripe checkout testé
- [ ] Responsive OK

---

## 📦 Livrable

Code source complet dans `src/` + déploiement Vercel.
