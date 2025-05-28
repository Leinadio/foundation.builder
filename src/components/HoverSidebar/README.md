# HoverSidebar Component

Ce composant affiche une barre latérale qui se cache hors de l'écran et apparaît uniquement lorsque l'utilisateur approche sa souris du bord gauche de l'écran. Il a été structuré pour séparer la logique et l'interface utilisateur.

## Structure des fichiers

```
HoverSidebar/
├── README.md              # Ce fichier
├── component.tsx          # Composant visuel uniquement
├── index.tsx              # Logique et orchestration
└── types.ts               # Types et interfaces
```

## Responsabilités

### index.tsx
- Contient toute la logique du composant
- Gère l'état d'affichage de la barre latérale
- Implémente le gestionnaire d'événement mousemove
- Fournit les références, états et fonctions nécessaires au composant visuel

### component.tsx
- Composant visuel uniquement
- Affiche la zone de détection et la barre latérale
- Gère les événements mouseEnter et mouseLeave
- Reçoit toutes les données et fonctions nécessaires via les props

### types.ts
- Définit les interfaces HoverSidebarProps et HoverSidebarComponentProps

Cette architecture permet une meilleure séparation des responsabilités et facilite la maintenance du code. 