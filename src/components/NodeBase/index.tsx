'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { NodeBaseProps } from './types';
import { Skeleton } from '@/components/ui/skeleton';
import { NodeType } from '@/services/idea-validation/api';
import { Lock, Check, LoaderCircle } from 'lucide-react';
import { useClientTranslation } from '@/hooks/useClientTranslation';

// Fonction utilitaire pour obtenir le texte traduit (pour la compatibilité)
export const displayNodeType = (nodeType: NodeType): string => {
  // Importation directe des traductions FR (pour la compatibilité)
  const translations = {
    overview: "Aperçu du projet",
    sections: {
      validateIdea: {
        items: {
          identified_problem: "Problème réel identifié",
          target_audience: "Qui est la cible ?",
          target_existing_solutions: "Comment la cible résout ce problème aujourd'hui ?",
          why_now: "Pourquoi maintenant ? (timing de l'opportunité)",
          early_signs_of_interest: "Premiers signaux d'intérêt potentiels",
          risk_of_false_positive: "Risque que ce soit juste une \"fausse bonne idée\"",
          key_advice_before_next_step: "Conseils avant le prochain pas"
        }
      },
      buildAndLaunch: {
        items: {
          simplest_mvp_version: "Version la plus simple du MVP",
          core_feature_to_build: "Fonctionnalité la plus importante à construire",
          what_to_ignore_initially: "Ce que tu peux ignorer au départ"
        }
      },
      findUsers: {
        items: {
          where_to_find_target: "Où se trouve ta cible ? (canaux identifiés)",
          hook_to_test: "Accroche / message à tester",
          where_to_launch: "Où publier ton projet ? (X, Reddit, PH, Discord, etc.)",
          marketing_strategy: "Stratégie de marketing",
          direct_outreach_strategy: "Stratégie d'approche directe (DM, messages)"
        }
      },
      monetization: {
        items: {
          pricing_strategy: "Stratégie de prix",
          natural_business_model: "Business model naturel",
          psychological_pricing: "Tarification psychologique suggérée",
          key_purchase_trigger: "Argument clé pour déclencher l'achat",
          existing_solutions_comparison: "Comparaison avec les solutions existantes"
        }
      },
      improveAndIterate: {
        items: {
          expected_user_feedback: "Retour type à attendre des premiers users",
          adoption_barriers: "Éléments qui peuvent freiner l'adoption",
          what_to_keep_or_kill: "Comment savoir ce qu'il faut garder / virer ?",
          minimal_feedback_tracking: "Suivi de feedback minimal à mettre en place",
          light_pivot_idea: "Idée de pivot si mauvaise traction",
          mid_term_vision: "Vision possible à moyen terme"
        }
      }
    }
  };

  if (nodeType === NodeType.summaryIdeas) {
    return translations.overview;
  }

  // Validate Idea section
  if (nodeType === NodeType.identified_problem) {
    return translations.sections.validateIdea.items.identified_problem;
  }
  if (nodeType === NodeType.target_audience) {
    return translations.sections.validateIdea.items.target_audience;
  }
  if (nodeType === NodeType.target_existing_solutions) {
    return translations.sections.validateIdea.items.target_existing_solutions;
  }
  if (nodeType === NodeType.why_now) {
    return translations.sections.validateIdea.items.why_now;
  }
  if (nodeType === NodeType.early_signs_of_interest) {
    return translations.sections.validateIdea.items.early_signs_of_interest;
  }
  if (nodeType === NodeType.risk_of_false_positive) {
    return translations.sections.validateIdea.items.risk_of_false_positive;
  }
  if (nodeType === NodeType.key_advice_before_next_step) {
    return translations.sections.validateIdea.items.key_advice_before_next_step;
  }

  // Build and Launch section
  if (nodeType === NodeType.simplest_mvp_version) {
    return translations.sections.buildAndLaunch.items.simplest_mvp_version;
  }
  if (nodeType === NodeType.core_feature_to_build) {
    return translations.sections.buildAndLaunch.items.core_feature_to_build;
  }
  if (nodeType === NodeType.what_to_ignore_initially) {
    return translations.sections.buildAndLaunch.items.what_to_ignore_initially;
  }

  // Find Users section
  if (nodeType === NodeType.where_to_find_target) {
    return translations.sections.findUsers.items.where_to_find_target;
  }
  if (nodeType === NodeType.hook_to_test) {
    return translations.sections.findUsers.items.hook_to_test;
  }
  if (nodeType === NodeType.where_to_launch) {
    return translations.sections.findUsers.items.where_to_launch;
  }
  if (nodeType === NodeType.marketing_strategy) {
    return translations.sections.findUsers.items.marketing_strategy;
  }
  if (nodeType === NodeType.direct_outreach_strategy) {
    return translations.sections.findUsers.items.direct_outreach_strategy;
  }

  // Monetization section
  if (nodeType === NodeType.pricing_strategy) {
    return translations.sections.monetization.items.pricing_strategy;
  }
  if (nodeType === NodeType.natural_business_model) {
    return translations.sections.monetization.items.natural_business_model;
  }
  if (nodeType === NodeType.psychological_pricing) {
    return translations.sections.monetization.items.psychological_pricing;
  }
  if (nodeType === NodeType.key_purchase_trigger) {
    return translations.sections.monetization.items.key_purchase_trigger;
  }
  if (nodeType === NodeType.existing_solutions_comparison) {
    return translations.sections.monetization.items.existing_solutions_comparison;
  }

  // Improve and Iterate section
  if (nodeType === NodeType.expected_user_feedback) {
    return translations.sections.improveAndIterate.items.expected_user_feedback;
  }
  if (nodeType === NodeType.adoption_barriers) {
    return translations.sections.improveAndIterate.items.adoption_barriers;
  }
  if (nodeType === NodeType.what_to_keep_or_kill) {
    return translations.sections.improveAndIterate.items.what_to_keep_or_kill;
  }
  if (nodeType === NodeType.minimal_feedback_tracking) {
    return translations.sections.improveAndIterate.items.minimal_feedback_tracking;
  }
  if (nodeType === NodeType.light_pivot_idea) {
    return translations.sections.improveAndIterate.items.light_pivot_idea;
  }
  if (nodeType === NodeType.mid_term_vision) {
    return translations.sections.improveAndIterate.items.mid_term_vision;
  }

  return "";
};

// Composant pour afficher le titre traduit du nœud
export const NodeTypeDisplay = ({ nodeType }: { nodeType: NodeType }) => {
  const { t } = useClientTranslation('toolSidebar');

  const getDisplayText = (): string => {
    if (nodeType === NodeType.summaryIdeas) {
      return t('overview');
    }

    // Validate Idea section
    if (nodeType === NodeType.identified_problem) {
      return t('sections.validateIdea.items.identified_problem');
    }
    if (nodeType === NodeType.target_audience) {
      return t('sections.validateIdea.items.target_audience');
    }
    if (nodeType === NodeType.target_existing_solutions) {
      return t('sections.validateIdea.items.target_existing_solutions');
    }
    if (nodeType === NodeType.why_now) {
      return t('sections.validateIdea.items.why_now');
    }
    if (nodeType === NodeType.early_signs_of_interest) {
      return t('sections.validateIdea.items.early_signs_of_interest');
    }
    if (nodeType === NodeType.risk_of_false_positive) {
      return t('sections.validateIdea.items.risk_of_false_positive');
    }
    if (nodeType === NodeType.key_advice_before_next_step) {
      return t('sections.validateIdea.items.key_advice_before_next_step');
    }

    // Build and Launch section
    if (nodeType === NodeType.simplest_mvp_version) {
      return t('sections.buildAndLaunch.items.simplest_mvp_version');
    }
    if (nodeType === NodeType.core_feature_to_build) {
      return t('sections.buildAndLaunch.items.core_feature_to_build');
    }
    if (nodeType === NodeType.what_to_ignore_initially) {
      return t('sections.buildAndLaunch.items.what_to_ignore_initially');
    }

    // Find Users section
    if (nodeType === NodeType.where_to_find_target) {
      return t('sections.findUsers.items.where_to_find_target');
    }
    if (nodeType === NodeType.hook_to_test) {
      return t('sections.findUsers.items.hook_to_test');
    }
    if (nodeType === NodeType.where_to_launch) {
      return t('sections.findUsers.items.where_to_launch');
    }
    if (nodeType === NodeType.marketing_strategy) {
      return t('sections.findUsers.items.marketing_strategy');
    }
    if (nodeType === NodeType.direct_outreach_strategy) {
      return t('sections.findUsers.items.direct_outreach_strategy');
    }

    // Monetization section
    if (nodeType === NodeType.pricing_strategy) {
      return t('sections.monetization.items.pricing_strategy');
    }
    if (nodeType === NodeType.natural_business_model) {
      return t('sections.monetization.items.natural_business_model');
    }
    if (nodeType === NodeType.psychological_pricing) {
      return t('sections.monetization.items.psychological_pricing');
    }
    if (nodeType === NodeType.key_purchase_trigger) {
      return t('sections.monetization.items.key_purchase_trigger');
    }
    if (nodeType === NodeType.existing_solutions_comparison) {
      return t('sections.monetization.items.existing_solutions_comparison');
    }

    // Improve and Iterate section
    if (nodeType === NodeType.expected_user_feedback) {
      return t('sections.improveAndIterate.items.expected_user_feedback');
    }
    if (nodeType === NodeType.adoption_barriers) {
      return t('sections.improveAndIterate.items.adoption_barriers');
    }
    if (nodeType === NodeType.what_to_keep_or_kill) {
      return t('sections.improveAndIterate.items.what_to_keep_or_kill');
    }
    if (nodeType === NodeType.minimal_feedback_tracking) {
      return t('sections.improveAndIterate.items.minimal_feedback_tracking');
    }
    if (nodeType === NodeType.light_pivot_idea) {
      return t('sections.improveAndIterate.items.light_pivot_idea');
    }
    if (nodeType === NodeType.mid_term_vision) {
      return t('sections.improveAndIterate.items.mid_term_vision');
    }

    return "";
  };

  return <>{getDisplayText()}</>;
};

/**
 * Composant visuel pour le nœud de base avec chargement séquentiel
 */
export const NodeBase: React.FC<NodeBaseProps> = ({
  nodeType,
  isLock = false,
  isLoading = true,
  isCurrentlyFetching = false,
  completeDescription = '',
  bulletPoints = [],
}: NodeBaseProps) => {

  // Rendu pour un composant verrouillé
  if (isLock) {
    return (
      <Card className="relative overflow-hidden border-none rounded-none shadow-none">
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted p-3 shadow-lg">
            <Lock className="h-8 w-8 text-muted-foreground" />
          </div>
        </div>
        <CardHeader>
          <p className={`text-sm font-semibold mb-1 text-gray-500`}><NodeTypeDisplay nodeType={nodeType} /></p>
          <Skeleton className="h-4 w-full mb-1" />
          <CardTitle>
            <Skeleton className="h-4 w-full" />
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </CardContent>
      </Card>
    );
  }

  // Rendu pour un composant en cours de chargement ou sans données
  if (isLoading || (!completeDescription && (!bulletPoints || bulletPoints.length === 0))) {
    return (
      <Card className="w-full border-none rounded-none shadow-none">
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center gap-2">
            <NodeTypeDisplay nodeType={nodeType} />
            {isCurrentlyFetching ? <LoaderCircle className="size-4 animate-spin" /> : null}
          </CardTitle>
          <Skeleton className="h-4 w-full mb-1" />
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Skeleton className="h-4 w-[70%]" />
          <Skeleton className="h-4 w-[80%]" />
          <Skeleton className="h-4 w-[40%]" />
        </CardContent>
      </Card>
    );
  }

  // Fonction pour afficher les points clés
  const displayBulletPoints = () => {
    if (!bulletPoints || bulletPoints.length === 0) {
      return null;
    }
    
    return (
      <div className="mt-8">
        <p className="text-sm font-semibold text-gray-500 mb-2">Résumé</p>
        <ul className="space-y-3 text-sm">
          {bulletPoints.map((point: string, index: number) => (
            <li key={index} className="flex gap-x-3">
              <span className="size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                <Check className="shrink-0 size-3.5" />
              </span>
              <span className="text-gray-800 dark:text-neutral-400">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  // Fonction pour afficher la description complète
  const displayCompleteDescription = () => {
    return (
      <p>
        {completeDescription.split("\n").map((line: string, index: number) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    );
  };

  // Rendu pour un composant chargé avec des données
  return (
    <Card className="w-full border-none rounded-none shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl font-bold"><NodeTypeDisplay nodeType={nodeType} /></CardTitle>
      </CardHeader>
      <CardContent>
        {displayCompleteDescription()}
        {displayBulletPoints()}
      </CardContent>
    </Card>
  );
};