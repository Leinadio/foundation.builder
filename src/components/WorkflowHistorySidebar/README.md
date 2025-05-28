# WorkflowHistorySidebar Component

Ce composant affiche l'historique des workflows de l'utilisateur dans une barre latérale. Il a été restructuré pour séparer les différentes responsabilités en plusieurs fichiers.

## Structure des fichiers

```
WorkflowHistorySidebar/
├── README.md                # Ce fichier
├── component.tsx            # Composant visuel uniquement
├── hooks/                   # Hooks personnalisés
│   ├── index.ts             # Export des hooks
│   └── useWorkflows.ts      # Gestion du chargement des workflows
├── index.tsx                # Point d'entrée et orchestration
├── loading.tsx              # Composant de chargement
├── type.ts                  # Types et interfaces
└── utils/                   # Fonctions utilitaires
    ├── index.ts             # Export des utilitaires
    └── workflowConverters.ts # Conversion des workflows
```

## Responsabilités

### index.tsx
- Point d'entrée du composant
- Utilise les hooks personnalisés pour récupérer les données
- Passe les données au composant visuel

### hooks/useWorkflows.ts
- Gère la récupération des workflows de l'utilisateur
- Maintient l'état de chargement
- Utilise les fonctions utilitaires pour convertir les données

### utils/workflowConverters.ts
- Contient des fonctions pures pour convertir et formater les données
- Convertit les objets UserWorkflow en WorkflowProject
- Formate les dates selon les besoins de l'interface

### component.tsx
- Composant visuel uniquement
- Affiche les workflows dans la barre latérale
- Gère l'état de chargement via le composant Loading

### type.ts
- Définit l'interface WorkflowProject utilisée dans le composant

Cette architecture permet une meilleure séparation des responsabilités et facilite la maintenance du code. 