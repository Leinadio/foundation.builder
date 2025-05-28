# ProfilUserSidebar Component

Ce composant affiche le profil de l'utilisateur connecté dans la barre latérale et permet d'accéder aux fonctionnalités liées au compte via un menu déroulant. Il a été structuré pour séparer la logique et l'interface utilisateur.

## Structure des fichiers

```
ProfilUserSidebar/
├── README.md              # Ce fichier
├── component.tsx          # Composant visuel uniquement
├── index.tsx              # Logique et orchestration
└── types.ts               # Types et interfaces
```

## Responsabilités

### index.tsx
- Contient toute la logique du composant
- Gère l'obtention des informations utilisateur
- Implémente les fonctions de navigation et de déconnexion
- Fournit les données et fonctions nécessaires au composant visuel

### component.tsx
- Composant visuel uniquement
- Affiche l'avatar et les informations de l'utilisateur
- Gère l'affichage du menu déroulant
- Reçoit toutes les données et fonctions nécessaires via les props

### types.ts
- Définit l'interface ProfilUserSidebarComponentProps pour les props du composant visuel

Cette architecture permet une meilleure séparation des responsabilités et facilite la maintenance du code. 