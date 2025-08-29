# Configuration du déploiement Vercel

Ce workflow GitHub Actions déploie automatiquement votre application sur Vercel à chaque push sur la branche `main`.

## Configuration requise

### 1. Créer un projet Vercel

1. Connectez-vous à [Vercel](https://vercel.com)
2. Créez un nouveau projet en important votre repository GitHub
3. Notez l'ID de l'organisation et l'ID du projet

### 2. Configurer les secrets GitHub

Dans votre repository GitHub, allez dans **Settings > Secrets and variables > Actions** et ajoutez les secrets suivants :

#### Secrets Vercel

- `VERCEL_TOKEN` : Token d'accès Vercel (généré dans les paramètres de votre compte Vercel)
- `VERCEL_ORG_ID` : ID de votre organisation Vercel
- `VERCEL_PROJECT_ID` : ID de votre projet Vercel

#### Secrets Stripe

- `STRIPE_SECRET_KEY` : Clé secrète Stripe (commence par `sk_test_` ou `sk_live_`)
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` : Clé publique Stripe (commence par `pk_test_` ou `pk_live_`)

#### Secrets Firebase

- `FIREBASE_API_KEY` : Clé API Firebase
- `FIREBASE_AUTH_DOMAIN` : Domaine d'authentification Firebase
- `FIREBASE_PROJECT_ID` : ID du projet Firebase

#### Secrets Resend

- `RESEND_API_KEY` : Clé API Resend pour l'envoi d'emails

#### Secrets Better Auth

- `DATABASE_URL` : URL de connexion à la base de données PostgreSQL
- `GOOGLE_CLIENT_ID` : ID client Google OAuth
- `GOOGLE_CLIENT_SECRET` : Secret client Google OAuth
- `GITHUB_CLIENT_ID` : ID client GitHub OAuth
- `GITHUB_CLIENT_SECRET` : Secret client GitHub OAuth

### 3. Générer un token Vercel

1. Dans Vercel, allez dans **Settings > Tokens**
2. Cliquez sur **Create**
3. Donnez un nom à votre token (ex: "GitHub Actions")
4. Copiez le token généré et ajoutez-le comme secret `VERCEL_TOKEN`

## Fonctionnement

Le workflow se déclenche automatiquement :

- À chaque push sur la branche `main`
- À chaque pull request sur la branche `main`

## Étapes du workflow

1. **Checkout** : Récupération du code source
2. **Setup Node.js** : Configuration de Node.js 20 avec cache npm
3. **Install dependencies** : Installation des dépendances avec `npm ci`
4. **Linting** : Vérification du code avec ESLint
5. **Build** : Construction de l'application avec `npm run build` (inclut les variables d'environnement)
6. **Deploy** : Déploiement sur Vercel en production

## Variables d'environnement

Assurez-vous que toutes les variables d'environnement nécessaires sont configurées dans votre projet Vercel ET dans les secrets GitHub pour le build.

## Résolution des erreurs

### Erreur "STRIPE_SECRET_KEY undefined"

- Vérifiez que `STRIPE_SECRET_KEY` est bien configuré dans les secrets GitHub
- Le repository Stripe est maintenant configuré pour ne pas planter le build si la clé n'est pas disponible

### Erreur "RESEND_API_KEY n'est pas définie"

- Vérifiez que `RESEND_API_KEY` est bien configuré dans les secrets GitHub
- Le repository Resend est maintenant configuré pour ne pas planter le build si la clé n'est pas disponible
