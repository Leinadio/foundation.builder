# Alert Component

Ce composant affiche des messages d'alerte temporaires pour informer l'utilisateur des résultats d'une action (succès, erreur, information). Il a été structuré pour séparer les différentes responsabilités en plusieurs fichiers.

## Structure des fichiers

```
Alert/
├── README.md               # Ce fichier
├── component.tsx           # Composant visuel uniquement
├── index.tsx               # Point d'entrée et orchestration
├── types.ts                # Types et interfaces
└── utils/                  # Fonctions utilitaires
    ├── index.ts            # Export des utilitaires
    ├── labels.ts           # Gestion des labels d'alerte
    └── styles.ts           # Gestion des styles d'alerte
```

## Responsabilités

### index.tsx
- Point d'entrée du composant
- Relaie les props au composant visuel

### component.tsx
- Composant visuel uniquement
- Utilise les utilitaires pour obtenir les styles et les labels
- Affiche les éléments d'interface utilisateur appropriés

### utils/styles.ts
- Contient la logique pour déterminer les styles CSS en fonction du type d'alerte
- Centralise tous les styles dans un même fichier

### utils/labels.ts
- Gère les textes affichés en fonction du type d'alerte
- Permet une éventuelle internationalisation future

### types.ts
- Définit les interfaces pour les props et les données utilisées dans le composant

Cette architecture permet une meilleure séparation des responsabilités et facilite la maintenance du code. 