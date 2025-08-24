# Foundation Builder

Un boilerplate Next.js suivant l'architecture hexagonale (Clean Architecture / Ports & Adapters) avec intégrations Firebase et Stripe.

## 🏗️ Architecture

Ce projet suit les principes de l'architecture hexagonale pour séparer clairement la logique métier des détails techniques :

### Structure des dossiers

- `src/core/services` : Logique métier (use cases, business rules)
- `src/core/ports/in` : Interfaces de contrat pour les cas d'usage entrants
- `src/core/ports/out` : Interfaces de contrat pour les dépendances sortantes
- `src/core/models` : Entités métiers
- `src/repositories` : Implémentations concrètes des interfaces externes
- `src/lib/di-container` : Injection de dépendances
- `src/hooks` : Custom hooks React

## 🚀 Fonctionnalités

### Authentification (Firebase Auth)

- Connexion email/mot de passe
- Connexion Google
- Gestion des états d'authentification
- Composants réutilisables

### Gestion des utilisateurs (Firestore)

- CRUD complet des utilisateurs
- Synchronisation temps réel
- API REST + hooks React

### Paiements (Stripe)

- Payment Intents avec Stripe Elements
- Checkout Sessions hébergées
- Gestion des webhooks
- Composants de paiement prêts à l'emploi

## 📦 Installation

1. Clonez le repository

```bash
git clone <repository-url>
cd foundation.builder
```

2. Installez les dépendances

```bash
npm install
```

3. Configurez les variables d'environnement

```bash
cp .env.example .env.local
```

Remplissez vos clés Firebase et Stripe :

```env
# Firebase
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id

# Stripe
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

4. Lancez le serveur de développement

```bash
npm run dev
```

## Lancer le projet

- Changer les images
