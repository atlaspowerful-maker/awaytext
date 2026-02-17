# Backlog Produit - SMS Auto-Responder

**Version:** 1.0  
**Date:** 16 février 2026  
**Projet:** SMS Auto-Responder - Micro-SaaS B2B  

---

## Epics

---

### Epic 1: Onboarding & Configuration Utilisateur

**Objectif** : Permettre à un artisan de s'inscrire et configurer son service en moins de 5 minutes sans compétences techniques.

**Priorité** : Must (MVP)

**Stories** :

#### Story 1.1: Inscription rapide
- **As a** artisan/commerçant
- **I want** m'inscrire rapidement avec mon email ou compte Google
- **So that** je puisse commencer à utiliser le service immédiatement
- **Critères d'acceptation**:
  1. L'inscription par email demande email + mot de passe (min 8 caractères)
  2. L'inscription Google OAuth redirige vers le dashboard en moins de 10 secondes
  3. Un email de confirmation est envoyé pour les inscriptions par email
  4. Le onboarding affiche une barre de progression (3 étapes visibles)
- **Estimation** : M
- **Dépendances** : None

#### Story 1.2: Configuration du numéro de téléphone
- **As a** utilisateur inscrit
- **I want** lier mon numéro de téléphone professionnel au service
- **So that** le système puisse recevoir mes SMS entrants
- **Critères d'acceptation**:
  1. Le numéro doit être saisi au format international (+33...)
  2. Une vérification par SMS code (OTP) est envoyée au numéro
  3. Le code OTP expire après 10 minutes
  4. Un seul numéro peut être lié par compte sur le plan gratuit
  5. Message d'erreur clair si le numéro est déjà utilisé
- **Estimation** : M
- **Dépendances** : Story 1.1

#### Story 1.3: Rédaction du message auto
- **As a** utilisateur
- **I want** rédiger mon message de réponse automatique personnalisé
- **So that** mes clients reçoivent une réponse qui me représente
- **Critères d'acceptation**:
  1. Champ textarea avec limite de 160 caractères (1 SMS)
  2. Compteur de caractères visible en temps réel
  3. Prévisualisation du message envoyé aux clients
  4. Au moins 3 templates suggérés ("En congés", "Week-end", "Déplacement")
  5. Sauvegarde automatique en brouillon toutes les 5 secondes
- **Estimation** : S
- **Dépendances** : Story 1.1

#### Story 1.4: Interface mobile-first responsive
- **As a** artisan souvent sur le terrain
- **I want** utiliser le service principalement depuis mon smartphone
- **So that** je puisse gérer mes absences où que je sois
- **Critères d'acceptation**:
  1. Design mobile-first avec breakpoints : mobile (<640px), tablet (640-1024px), desktop (>1024px)
  2. Les boutons d'action principaux ont une taille minimale de 44x44px (touch-friendly)
  3. Temps de chargement initial < 3 secondes sur connexion 3G
  4. Le toggle ON/OFF est visible sans scroll sur écran mobile standard
- **Estimation** : M
- **Dépendances** : None

---

### Epic 2: Moteur de Réponse Automatique

**Objectif** : Détecter les SMS entrants et y répondre automatiquement selon la configuration utilisateur.

**Priorité** : Must (MVP)

**Stories** :

#### Story 2.1: Réception SMS via webhook
- **As a** système
- **I want** recevoir les SMS entrants via le webhook Twilio
- **So that** je puisse les traiter et y répondre
- **Critères d'acceptation**:
  1. Le webhook Twilio est configuré et accessible publiquement (HTTPS)
  2. Chaque SMS reçu est enregistré en base avec : numéro émetteur, contenu, timestamp
  3. Une réponse HTTP 200 est retournée à Twilio en moins de 5 secondes
  4. Les erreurs webhook sont logguées avec le payload complet pour debug
  5. Rate limiting : max 100 SMS/minute par numéro utilisateur
- **Estimation** : L
- **Dépendances** : Story 1.2

#### Story 2.2: Activation/Désactivation manuelle
- **As a** utilisateur
- **I want** activer ou désactiver la réponse auto en un seul clic
- **So that** je contrôle quand mes clients reçoivent une réponse automatique
- **Critères d'acceptation**:
  1. Un grand toggle ON/OFF visible sur le dashboard principal
  2. Le changement de statut est effectif en moins de 5 secondes
  3. Une notification toast confirme l'action ("Mode absence activé")
  4. Le statut actuel est persisté et visible lors des rechargements de page
  5. Un indicateur visuel montre si le service est actif (couleur verte) ou inactif (grise)
- **Estimation** : S
- **Dépendances** : Story 1.3

#### Story 2.3: Envoi réponse automatique
- **As a** client d'un artisan
- **I want** recevoir une réponse automatique quand mon artisan est absent
- **So that** je sois informé de son indisponibilité et de sa date de retour
- **Critères d'acceptation**:
  1. La réponse auto est envoyée uniquement si le statut est "actif"
  2. Un délai de 30 secondes est appliqué avant envoi (évite double réponse)
  3. Un même numéro client ne reçoit qu'une réponse auto toutes les 4 heures (anti-spam)
  4. Le SMS envoyé est enregistré dans l'historique avec statut "envoyé"
  5. En cas d'échec d'envoi, 3 tentatives sont faites avec backoff exponentiel
- **Estimation** : L
- **Dépendances** : Story 2.1, Story 2.2

#### Story 2.4: Gestion du quota SMS (Plan Gratuit)
- **As a** utilisateur gratuit
- **I want** voir combien de SMS auto il me reste ce mois-ci
- **So that** je ne dépasse pas ma limite de 10 SMS/mois
- **Critères d'acceptation**:
  1. Un compteur "X/10 SMS utilisés ce mois" est visible sur le dashboard
  2. Une alerte s'affiche quand il reste 2 SMS (bannière jaune)
  3. Une alerte s'affiche quand le quota est atteint (bannière rouge)
  4. Le compteur se reset automatiquement le 1er de chaque mois à 00:00
  5. Une suggestion d'upgrade vers Premium s'affiche à 80% du quota utilisé
- **Estimation** : S
- **Dépendances** : Story 2.3

#### Story 2.5: Programmation des absences
- **As a** artisan
- **I want** programmer mes dates d'absence à l'avance
- **So that** le service s'active automatiquement pendant mes congés
- **Critères d'acceptation**:
  1. Interface pour sélectionner date/heure de début et date/heure de fin
  2. Possibilité d'ajouter plusieurs périodes d'absence à l'avance
  3. Une notification email est envoyée 24h avant l'activation programmée
  4. Le service s'active automatiquement à la date/heure programmée
  5. Le service se désactive automatiquement à la fin de la période
  6. Les périodes programmées sont visibles sur un mini-calendrier
- **Estimation** : M
- **Dépendances** : Story 2.2

---

### Epic 3: Abonnement et Facturation

**Objectif** : Proposer des plans tarifaires clairs avec paiement sécurisé et gestion des quotas.

**Priorité** : Must (MVP)

**Stories** :

#### Story 3.1: Affichage des plans tarifaires
- **As a** visiteur
- **I want** voir clairement les différents plans et leurs avantages
- **So that** je puisse choisir celui qui correspond à mes besoins
- **Critères d'acceptation**:
  1. Page de pricing avec 3 cartes : Gratuit (0€), Premium (2€), Business (9€)
  2. Pour chaque plan : prix, limite SMS, features incluses
  3. Le plan Premium est mis en avant visuellement ("Plus populaire")
  4. Comparaison feature-by-feature visible sans scroll sur desktop
  5. CTA "Commencer gratuitement" et "Passer Premium" clairement visibles
- **Estimation** : S
- **Dépendances** : None

#### Story 3.2: Passage au plan Premium
- **As a** utilisateur gratuit
- **I want** upgrader vers le plan Premium en 2 clics
- **So that** je bénéficie de SMS illimités immédiatement
- **Critères d'acceptation**:
  1. Bouton "Passer Premium" depuis le dashboard ou page pricing
  2. Intégration Stripe Checkout avec paiement CB sécurisé
  3. Redirection automatique vers le dashboard après paiement réussi
  4. Le statut premium est activé immédiatement (webhook Stripe)
  5. Une facture est envoyée par email après chaque paiement mensuel
- **Estimation** : L
- **Dépendances** : Story 1.1

#### Story 3.3: Gestion des abonnements
- **As a** utilisateur Premium
- **I want** gérer mon abonnement (voir, modifier, résilier)
- **So that** je garde le contrôle total sur mon engagement
- **Critères d'acceptation**:
  1. Page "Mon abonnement" avec : plan actuel, prochaine date de prélèvement, montant
  2. Possibilité de résilier sans engagement (bouton "Résilier mon abonnement")
  3. Confirmation de résiliation par email avec date de fin d'accès
  4. Possibilité de changer de carte bancaire
  5. Accès maintenu jusqu'à la fin de la période payée après résiliation
- **Estimation** : M
- **Dépendances** : Story 3.2

#### Story 3.4: Page de vente (Landing Page)
- **As a** visiteur
- **I want** comprendre rapidement la valeur du produit
- **So that** je sois convaincu de m'inscrire
- **Critères d'acceptation**:
  1. Hero section avec headline accrocheuse et sous-titre explicatif
  2. Visuel/illustration montrant le problème (SMS en vacances) → solution
  3. Section "Comment ça marche" en 3 étapes visuelles
  4. 3 témoignages fictifs mais crédibles d'artisans
  5. FAQ avec 5 questions fréquentes déployables
  6. CTA final répété avant le footer
- **Estimation** : M
- **Dépendances** : Story 3.1

---

### Epic 4: Historique et Analytiques

**Objectif** : Permettre aux utilisateurs de suivre leurs communications et comprendre leur utilisation.

**Priorité** : Should (MVP)

**Stories** :

#### Story 4.1: Historique des SMS
- **As a** utilisateur
- **I want** consulter l'historique des SMS reçus et réponses envoyées
- **So that** je puisse suivre mes communications clients même à distance
- **Critères d'acceptation**:
  1. Liste chronologique des SMS (reçus + envoyés) avec : numéro, extrait message, date/heure
  2. Badge distinct pour les SMS reçus (bleu) vs réponses auto (vert)
  3. Pagination : 20 SMS par page
  4. Filtres par : date (7j/30j/tout), type (reçu/envoyé)
  5. Possibilité de voir le contenu complet d'un SMS en cliquant
- **Estimation** : M
- **Dépendances** : Story 2.1

#### Story 4.2: Statistiques d'utilisation
- **As a** utilisateur Premium
- **I want** voir des statistiques sur mes réponses automatiques
- **So that** je comprenne mon utilisation et optimise mes absences
- **Critères d'acceptation**:
  1. Dashboard avec graphique : nombre de réponses auto par jour (7 derniers jours)
  2. Indicateurs clés : total SMS reçus, total réponses envoyées, taux de réponse
  3. Top 3 des numéros ayant reçu le plus de réponses auto
  4. Moyenne horaire des SMS reçus (pour identifier les pics)
  5. Export des données en CSV (30 derniers jours)
- **Estimation** : L
- **Dépendances** : Story 4.1

---

### Epic 5: Fonctionnalités Avancées (V2)

**Objectif** : Offrir des fonctionnalités premium avancées pour augmenter la valeur perçue et le LTV.

**Priorité** : Could (V2)

**Stories** :

#### Story 5.1: Réponses conditionnelles par mots-clés
- **As a** utilisateur Premium
- **I want** définir des réponses différentes selon le contenu du SMS reçu
- **So that** je sois plus pertinent avec mes clients (urgence vs demande info)
- **Critères d'acceptation**:
  1. Interface pour créer des règles : "Si SMS contient [mot-clé] → répondre [message]"
  2. Support des mots-clés multiples par règle (OR logique)
  3. Priorité des règles configurable (ordre d'évaluation)
  4. Réponse par défaut si aucune règle ne correspond
  5. Possibilité de désactiver une règle sans la supprimer
- **Estimation** : L
- **Dépendances** : Story 2.3

#### Story 5.2: Intégration calendriers externes
- **As a** utilisateur Premium
- **I want** synchroniser mes absences avec Google Calendar ou Outlook
- **So that** le service s'active automatiquement selon mes événements "hors bureau"
- **Critères d'acceptation**:
  1. Connexion OAuth avec Google Calendar et Microsoft Outlook
  2. Détection automatique des événements avec statut "hors bureau" ou "en congés"
  3. Activation automatique 1h avant le début de l'événement
  4. Désactivation automatique à la fin de l'événement
  5. Possibilité d'exclure certains types d'événements (configuration)
- **Estimation** : XL
- **Dépendances** : Story 2.5

#### Story 5.3: Gestion multi-numéros (Plan Business)
- **As a** utilisateur Business avec plusieurs employés
- **I want** gérer plusieurs numéros de téléphone sous un seul compte
- **So that** toute mon équipe soit couverte par le service
- **Critères d'acceptation**:
  1. Possibilité d'ajouter jusqu'à 5 numéros sur le plan Business
  2. Chaque numéro a sa propre configuration (message auto, actif/inactif)
  3. Dashboard avec sélecteur de numéro ou vue consolidée
  4. Historique filtrable par numéro
  5. Quota SMS par numéro ou global selon le plan
- **Estimation** : L
- **Dépendances** : Story 1.2, Story 3.2

#### Story 5.4: Templates de messages prédéfinis
- **As a** utilisateur
- **I want** choisir parmi des templates de messages professionnels
- **So that** je gagne du temps et aie une réponse de qualité
- **Critères d'acceptation**:
  1. Bibliothèque de 10+ templates par secteur (plombier, électricien, coiffeur...)
  2. Chaque template personnalisable avec variables ({nom}, {date_retour})
  3. Preview en temps réel avec les variables remplacées
  4. Possibilité de sauvegarder ses propres templates
  5. Suggestion de template intelligent selon le métier renseigné
- **Estimation** : M
- **Dépendances** : Story 1.3

#### Story 5.5: Forward vers numéro de secours
- **As a** utilisateur Premium
- **I want** que les SMS urgents soient transférés à un collègue ou remplaçant
- **So that** aucun client important ne reste sans réponse humanisée
- **Critères d'acceptation**:
  1. Configuration d'un numéro de secours pour forward
  2. Option "Forward tous les SMS" ou "Forward si contient [mot-clé urgent]"
  3. Le forward inclut le numéro du client original pour rappel direct
  4. L'historique indique clairement les SMS forwardés
  5. Limitation à 50 forwards/mois (anti-abus)
- **Estimation** : M
- **Dépendances** : Story 2.1

---

## MVP Definition

Le MVP (Minimum Viable Product) comprend les stories suivantes pour un lancement rapide avec valeur immédiate :

### Epic 1 - Onboarding & Configuration
| Story | Titre | Estimation |
|-------|-------|------------|
| 1.1 | Inscription rapide | M |
| 1.2 | Configuration du numéro de téléphone | M |
| 1.3 | Rédaction du message auto | S |
| 1.4 | Interface mobile-first responsive | M |

### Epic 2 - Moteur de Réponse Automatique
| Story | Titre | Estimation |
|-------|-------|------------|
| 2.1 | Réception SMS via webhook | L |
| 2.2 | Activation/Désactivation manuelle | S |
| 2.3 | Envoi réponse automatique | L |
| 2.4 | Gestion du quota SMS (Plan Gratuit) | S |

### Epic 3 - Abonnement et Facturation
| Story | Titre | Estimation |
|-------|-------|------------|
| 3.1 | Affichage des plans tarifaires | S |
| 3.2 | Passage au plan Premium | L |
| 3.3 | Gestion des abonnements | M |
| 3.4 | Page de vente (Landing Page) | M |

### Epic 4 - Historique et Analytiques (partiel)
| Story | Titre | Estimation |
|-------|-------|------------|
| 4.1 | Historique des SMS | M |

**Total MVP : 14 stories**

### Estimations MVP
- **Total en points** : 14 stories → ~9.5 jours-homme (hypothèse: XS=0.5j, S=1j, M=2j, L=3j)
- **Période suggérée** : 2-3 semaines avec 1 développeur

---

## V2 Features

Les fonctionnalités suivantes sont prévues pour la V2 afin d'enrichir le produit et augmenter la conversion/rétention :

### Epic 2 - Moteur de Réponse Automatique (complément)
| Story | Titre | Estimation | Priorité |
|-------|-------|------------|----------|
| 2.5 | Programmation des absences | M | High |

### Epic 4 - Historique et Analytiques (complément)
| Story | Titre | Estimation | Priorité |
|-------|-------|------------|----------|
| 4.2 | Statistiques d'utilisation | L | Medium |

### Epic 5 - Fonctionnalités Avancées
| Story | Titre | Estimation | Priorité |
|-------|-------|------------|----------|
| 5.1 | Réponses conditionnelles par mots-clés | L | High |
| 5.2 | Intégration calendriers externes | XL | Medium |
| 5.3 | Gestion multi-numéros (Plan Business) | L | Low |
| 5.4 | Templates de messages prédéfinis | M | Medium |
| 5.5 | Forward vers numéro de secours | M | Medium |

**Total V2 : 6 stories**

### Roadmap suggérée
| Phase | Durée | Stories | Objectif |
|-------|-------|---------|----------|
| **MVP** | 2-3 semaines | 14 stories | Lancer le produit fonctionnel |
| **V2.0** | 1-2 semaines | 2.5, 4.2, 5.4 | Améliorer l'expérience utilisateur |
| **V2.1** | 2-3 semaines | 5.1, 5.5 | Fonctionnalités Premium avancées |
| **V2.2** | 2-3 semaines | 5.2, 5.3 | Intégrations et Business |

---

## Synthèse des Epics

| Epic | Nom | Priorité | Stories | Objectif clé |
|------|-----|----------|---------|--------------|
| 1 | Onboarding & Configuration | Must | 4 | Acquisition et setup rapide |
| 2 | Moteur de Réponse Automatique | Must | 5 | Core value proposition |
| 3 | Abonnement et Facturation | Must | 4 | Monétisation |
| 4 | Historique et Analytiques | Should | 2 | Rétention et valeur ajoutée |
| 5 | Fonctionnalités Avancées | Could | 5 | Différenciation premium |

**Total : 5 Epics, 20 User Stories**

---

*Document créé par Product Agent*  
*Basé sur le Cahier des Charges v1.0 - 16 février 2026*
