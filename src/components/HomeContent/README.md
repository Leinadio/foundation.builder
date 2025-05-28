# HomeContent Component

Ce composant affiche le contenu principal de la page d'accueil, avec un champ de saisie pour créer des workflows. Il a été structuré pour séparer les différentes responsabilités en plusieurs fichiers.

## Structure des fichiers

```
HomeContent/
├── README.md                # Ce fichier
├── component.tsx            # Composant visuel uniquement
├── hooks/                   # Hooks personnalisés
│   ├── index.ts             # Export des hooks
│   └── useHomeContent.ts    # Gestion de l'état et de la logique
├── index.tsx                # Point d'entrée et orchestration
└── types.ts                 # Types et interfaces
```

## Responsabilités

### index.tsx
- Point d'entrée du composant
- Utilise les hooks personnalisés pour gérer l'état
- Passe les données au composant visuel

### hooks/useHomeContent.ts
- Gère l'état du composant (chargement, type d'entrée, actions en attente)
- Traite les actions utilisateur (soumission, changement de type)
- Gère les alertes et les interactions avec les API

### component.tsx
- Composant visuel uniquement
- Affiche le champ de saisie, les alertes et les dialogues
- Gère uniquement la présentation

### types.ts
- Définit les interfaces pour les props du composant

Cette architecture permet une meilleure séparation des responsabilités et facilite la maintenance du code. 