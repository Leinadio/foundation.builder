# AppSidebar Component

Ce composant affiche la barre latérale principale de l'application, avec le logo, la liste des workflows et le profil utilisateur. Il a été structuré pour séparer les différentes responsabilités en plusieurs fichiers.

## Structure des fichiers

```
AppSidebar/
├── README.md                # Ce fichier
├── component.tsx            # Composant visuel uniquement
├── index.tsx                # Point d'entrée et orchestration
├── types.ts                 # Types et interfaces
└── utils/                   # Fonctions utilitaires
    ├── index.ts             # Export des utilitaires
    └── sidebarConfig.ts     # Configuration de la barre latérale
```

## Responsabilités

### index.tsx
- Point d'entrée du composant
- Initialise le composant avec la configuration par défaut
- Passe les données au composant visuel

### component.tsx
- Composant visuel uniquement
- Affiche la structure de la barre latérale
- Utilise les composants `WorkflowHistorySidebar` et `ProfilUserSidebar`

### utils/sidebarConfig.ts
- Contient la configuration par défaut de la barre latérale
- Centralise les paramètres comme le nom et l'icône du logo

### types.ts
- Définit les interfaces pour les props du composant

Cette architecture permet une meilleure séparation des responsabilités et facilite la maintenance du code. 