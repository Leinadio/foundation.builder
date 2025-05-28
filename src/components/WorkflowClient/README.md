# WorkflowClient Component

Ce composant est responsable de la gestion du workflow et de ses interactions. Il a été structuré pour séparer les différentes responsabilités en plusieurs fichiers.

## Structure des fichiers

```
WorkflowClient/
├── README.md            # Ce fichier
├── component.tsx        # Composant visuel uniquement
├── hooks/               # Hooks personnalisés
│   ├── index.ts         # Export des hooks
│   ├── useNodeSelection.ts  # Gestion de la sélection des nœuds
│   ├── useEdgeHandlers.ts   # Gestion des interactions avec les arêtes
│   ├── useFlowHandlers.ts   # Gestion des modifications du flux
│   └── useWorkflowInit.ts   # Initialisation du workflow
├── index.tsx            # Point d'entrée et orchestration
├── loading.tsx          # Composant de chargement
├── type.ts              # Types et interfaces
└── utils/               # Fonctions utilitaires
    ├── index.ts         # Export des utilitaires
    ├── nodeEnrichers.ts # Enrichissement des nœuds
    └── edgeEnrichers.ts # Enrichissement des arêtes
```

## Responsabilités

### index.tsx
- Point d'entrée du composant
- Gère l'orchestration des différents hooks et utilitaires
- Connecte le composant au contexte WorkflowActionsContext

### hooks/
- **useNodeSelection.ts**: Gère la sélection des nœuds et les clics
- **useEdgeHandlers.ts**: Gère les interactions avec les arêtes (survol)
- **useFlowHandlers.ts**: Gère les modifications du flux (ajout, suppression, déplacement)
- **useWorkflowInit.ts**: Initialise le workflow à partir de l'ID fourni

### utils/
- **nodeEnrichers.ts**: Enrichit les nœuds avec les actions appropriées et l'état de sélection
- **edgeEnrichers.ts**: Enrichit les arêtes avec les styles et les informations de survol

### component.tsx
- Composant visuel uniquement
- Affiche le workflow et ses composants
- Reçoit toutes les données et callbacks en tant que props

### type.ts
- Définit les types et interfaces utilisés par le composant

Cette architecture permet une meilleure séparation des responsabilités et facilite la maintenance du code. 