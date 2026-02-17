# Équipe d'Agents - SMS Auto-Responder

## 🎯 Vue d'ensemble

**Projet** : SMS Auto-Responder (Micro-SaaS 2€/mois)
**Status** : En cours de spécification
**Agents déployés** : 4 agents spécialisés

---

## 👥 Les Agents

### 1️⃣ Product Agent 🎯
**Status** : En cours d'exécution
**Mission** : Créer les epics et user stories détaillées
**Input** : Cahier des Charges existant
**Output** : `PRODUCT-BACKLOG.md` (epics + stories + critères d'acceptation)
**ETA** : ~30 minutes

**Brief** : Voir `docs/BRIEF-AGENTS.md`

---

### 2️⃣ Design Agent 🎨
**Status** : En attente (dépend du Product Agent)
**Mission** : Concevoir l'UX/UI complète
**Input** : User stories du Product Agent
**Output** : `DESIGN.md` (wireframes + design system + flows)
**ETA** : ~45 minutes

**Brief** : Voir `docs/BRIEF-DESIGN.md`

---

### 3️⃣ Integrator Agent 💻
**Status** : En attente (dépend du Design Agent)
**Mission** : Développer et déployer le MVP
**Input** : Design + Architecture
**Output** : Code source + Déploiement Vercel
**ETA** : ~2-3 heures

**Brief** : Voir `docs/BRIEF-INTEGRATOR.md`

---

### 4️⃣ QA Agent 🧪
**Status** : En attente (dépend de l'Integrator)
**Mission** : Tester et valider
**Input** : Code déployé
**Output** : `QA-REPORT.md` (rapport de tests + bugs + validation)
**ETA** : ~30 minutes

**Brief** : Voir `docs/BRIEF-QA.md`

---

## 📁 Fichiers créés

| Fichier | Description |
|---------|-------------|
| `docs/BRIEF-AGENTS.md` | Architecture de l'équipe d'agents |
| `docs/BRIEF-DESIGN.md` | Brief pour le Design Agent |
| `docs/BRIEF-INTEGRATOR.md` | Brief pour le Dev Agent |
| `docs/BRIEF-QA.md` | Brief pour le QA Agent |
| `docs/CAHIER-DES-CHARGES.md` | CDC existant (source) |

---

## 🔄 Workflow

```
CDC existant
    ↓
[Product Agent] → Epics + Stories
    ↓
[Design Agent] → Wireframes + Design System
    ↓
[Integrator Agent] → Code + Déploiement
    ↓
[QA Agent] → Tests + Validation
    ↓
🚀 MVP LIVRÉ
```

---

## ⏱️ Planning estimé

| Phase | Agent | Durée | Cumulé |
|-------|-------|-------|--------|
| Product | Product Agent | 30 min | 30 min |
| Design | Design Agent | 45 min | 1h15 |
| Dev | Integrator Agent | 2-3h | 3h15-4h15 |
| QA | QA Agent | 30 min | 3h45-4h45 |

**Total estimé** : ~4-5 heures de travail agent

---

## 🚀 Prochaines étapes

1. **Attendre** le Product Agent (en cours)
2. **Lancer** le Design Agent quand le backlog est prêt
3. **Lancer** l'Integrator Agent quand le design est prêt
4. **Lancer** le QA Agent quand le code est déployé

---

**Document créé par Atlas**  
*16 février 2026*
