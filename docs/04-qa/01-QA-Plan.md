# Brief - QA Agent

## 🧪 Mission
Tester et valider le SMS Auto-Responder avant livraison.

## 📋 Test Plan

### 1. Tests Fonctionnels

#### Auth
- [ ] Inscription avec email
- [ ] Connexion avec email
- [ ] Connexion avec Google OAuth
- [ ] Mot de passe oublié
- [ ] Déconnexion
- [ ] Protection routes privées

#### Configuration SMS
- [ ] Ajout numéro de téléphone
- [ ] Configuration message auto
- [ ] Activation réponse auto
- [ ] Désactivation réponse auto
- [ ] Validation numéro (format)

#### Réception SMS
- [ ] Webhook Twilio reçoit SMS
- [ ] SMS enregistré en DB
- [ ] Réponse auto envoyée
- [ ] Réponse apparait en historique

#### Quotas
- [ ] Compteur SMS incrémenté
- [ ] Limite 10 SMS respectée (plan gratuit)
- [ ] Bloquage après limite
- [ ] Reset compteur mensuel

#### Subscription
- [ ] Upgrade vers Premium
- [ ] Paiement Stripe
- [ ] Activation immédiate Premium
- [ ] Webhook Stripe reçu

### 2. Tests UI/UX

#### Responsive
- [ ] Desktop (1920x1080)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)

#### Accessibilité
- [ ] Contrastes suffisants
- [ ] Navigation clavier
- [ ] Labels formulaires

#### Performance
- [ ] Chargement < 2s
- [ ] Temps réponse API < 500ms

### 3. Tests Sécurité

- [ ] Rate limiting actif
- [ ] SQL injection protégé
- [ ] XSS protégé
- [ ] Auth tokens sécurisés

### 4. Tests Intégration

- [ ] Twilio webhook fonctionne
- [ ] Stripe checkout fonctionne
- [ ] Emails envoyés (si applicable)

---

## 🐛 Bug Report Template

```
**ID**: BUG-001
**Sévérité**: [Critical/Major/Minor]
**Titre**: [Description courte]

**Steps to reproduce**:
1. 
2. 
3. 

**Expected**: 
**Actual**: 

**Screenshots**: [si applicable]
**Environment**: [browser, OS]
```

---

## ✅ Checklist Validation Finale

- [ ] Toutes les stories MVP testées
- [ ] 0 bugs Critical/Major
- [ ] Performance OK
- [ ] Responsive OK
- [ ] Sécurité OK

---

## 📦 Livrable

Fichier `QA-REPORT.md` avec :
- Test results
- Bugs list (avec sévérité)
- Recommandations
- GO/NO-GO pour prod
