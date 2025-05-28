This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Système de traduction pour les composants client

Ce projet utilise un système de traduction pour les composants client et serveur dans une application Next.js.

## Architecture

Le système utilise :

1. **Dictionnaires JSON** : Stockés dans `src/app/[lang]/dictionaries/[locale].json`
2. **Middleware** : Pour la détection et le routage des langues
3. **Hook client** : `useClientTranslation` pour les composants côté client

## Utilisation dans les composants client

Pour utiliser le système de traduction dans un composant client, suivez ces étapes :

```tsx
"use client";

// Importez le hook
import { useClientTranslation } from '@/hooks/useClientTranslation';

export function MonComposant() {
  // Utilisez le hook avec le namespace approprié
  const { t, locale } = useClientTranslation('monNamespace');
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      
      {/* Avec paramètres */}
      <p>{t('welcome', { name: 'John' })}</p>
      
      {/* Avec clés imbriquées */}
      <button>{t('buttons.submit')}</button>
    </div>
  );
}
```

## Ajout de nouvelles traductions

1. Identifiez le namespace approprié ou créez-en un nouveau
2. Ajoutez vos clés de traduction dans les fichiers :
   - `src/app/[lang]/dictionaries/fr.json`
   - `src/app/[lang]/dictionaries/en.json`

## Structure des dictionnaires

Les dictionnaires sont organisés par namespace pour faciliter la maintenance :

```json
{
  "monNamespace": {
    "title": "Titre de la page",
    "description": "Description de la page",
    "welcome": "Bienvenue, {name}!",
    "buttons": {
      "submit": "Envoyer",
      "cancel": "Annuler"
    }
  }
}
```
