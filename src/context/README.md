# Architecture du Context pour les Actions Workflow

## Objectif

Le but de cette architecture est de centraliser la logique des actions qui manipulent les nodes du workflow. Au lieu de passer les callbacks directement dans les objets `data` des nodes, nous utilisons un Context React qui fournit ces actions et l'état du workflow à tous les composants.

## Approche

Nous avons implémenté une architecture à deux niveaux :

1. **Niveau Contexte** - Le `WorkflowActionsProvider` encapsule la logique des actions et l'état global du workflow.
2. **Niveau Composant** - Les composants reçoivent les actions en tant que props et ne dépendent pas directement du contexte.

Cette séparation permet d'avoir des composants plus "purs" et plus faciles à tester.

## Avantages

1. **Meilleure Accessibilité au State** - Les actions ont maintenant accès à tout l'état du workflow, ce qui facilite les manipulations complexes
2. **Séparation des Préoccupations** - La logique des actions est séparée des composants visuels
3. **Appels API Centralisés** - Les appels aux API se font maintenant au niveau supérieur, dans les actions du contexte
4. **Réutilisabilité** - Les fonctions peuvent être réutilisées par n'importe quel composant
5. **Facilité de Test** - Il est plus facile de tester les actions et les composants indépendamment
6. **Composants Purs** - Les composants ne dépendent plus directement du contexte, ce qui les rend plus purs et plus faciles à tester

## Structure

- `WorkflowActionsContext.tsx` - Définit le contexte avec toutes les actions disponibles
- `useWorkflowActions()` - Hook personnalisé utilisé uniquement par le composant parent `WorkflowWithActions`
- `WorkflowWithActions.tsx` - Composant intermédiaire qui enrichit les nodes avec les actions du contexte (dans son propre fichier)

## Exemple d'Utilisation

Dans un composant node :

```tsx
interface MyNodeProps {
  data: {
    // Données spécifiques au node
    someData: SomeType;
    // Actions du workflow passées en props
    onSomeAction: (param: ParamType) => Promise<void>;
    isLoading: boolean;
  }
}

const MyNode = ({ data }: MyNodeProps) => {
  const { someData, onSomeAction, isLoading } = data;

  const handleClick = async () => {
    try {
      await onSomeAction(someParam);
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  return (
    <button onClick={handleClick} disabled={isLoading}>
      Effectuer une action
    </button>
  );
};
```

Dans le composant parent (WorkflowWithActions) :

```tsx
// Utiliser le hook de contexte pour accéder aux actions
const { someAction, isLoading } = useWorkflowActions();

// Enrichir les nodes avec les actions appropriées
const enrichedNodes = nodes.map(node => {
  if (node.type === 'myNodeType') {
    return {
      ...node,
      data: {
        ...node.data,
        onSomeAction: someAction,
        isLoading
      }
    };
  }
  return node;
});
```

## Actions Disponibles

- `addMarketNode` - Crée un nœud de marché à partir d'une valeur de marché
- `addSegmentNode` - Crée un nœud de segment à partir d'un ID de marché
- `addNicheNode` - Crée un nœud de niche
- `addProblemNode` - Crée un nœud de problème
- `addSolutionNode` - Crée un nœud de solution
- `addBusinessModelNode` - Crée un nœud de modèle d'affaires

## État de l'Implémentation

- ✅ Création du Context Provider et des actions
- ✅ Migration de InputMarketNode pour utiliser des props au lieu du hook useWorkflowActions
- ✅ Migration de MarketNode pour utiliser des props au lieu du hook useWorkflowActions
- ✅ Migration de SegmentNode pour utiliser des props au lieu du hook useWorkflowActions
- ✅ Migration de NicheNode pour utiliser des props au lieu du hook useWorkflowActions
- ✅ Migration de ProblemNode pour utiliser des props au lieu du hook useWorkflowActions
- ✅ Migration de SolutionNode pour utiliser des props au lieu du hook useWorkflowActions
- ✅ Migration de BusinessModelNode pour utiliser des props au lieu du hook useWorkflowActions
- ✅ Création du composant intermédiaire WorkflowWithActions qui enrichit les nodes avec les actions
- ✅ Déplacement du composant WorkflowWithActions dans son propre fichier
- ✅ Adaptation de la page d'accueil (Home) pour utiliser le nouveau système

## Prochaines Étapes

1. **Tests** - Ajouter des tests unitaires pour vérifier que les actions fonctionnent correctement et que les composants utilisent bien les props.

2. **Synchronisation avec Firebase** - Implémenter la synchronisation des modifications en temps réel avec Firebase pour que les changements apportés aux nodes soient immédiatement sauvegardés.

3. **Gestion des Erreurs** - Améliorer la gestion des erreurs dans les actions avec des messages utilisateur plus explicites.

4. **Optimisations de Performance** - Examiner les possibilités d'optimisation des performances, notamment avec useMemo et useCallback.

5. **Ajout de Nouvelles Fonctionnalités** - Maintenant que l'architecture est en place, il sera plus facile d'ajouter de nouvelles fonctionnalités comme le déplacement des nodes, la suppression, etc. 