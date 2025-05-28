'use client'

import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useWorkflowActions } from '@/context/WorkflowActions/WorkflowActionsContext';
import { WorkflowClientProps } from './type';
import { displayNodeType, NodeBase } from '@/components/NodeBase';
import { NodeType } from '@/services/idea-validation/api';
import { useInView } from 'react-intersection-observer';
import { Separator } from "@/components/ui/separator"
import { BadgeCheck, CircleDollarSign, Rocket, Users } from 'lucide-react';
import { createComponent } from '@/services';
import { useClientTranslation } from '@/hooks/useClientTranslation';
import { getReportByWorkflowId } from '@/services/reports';
import { getWorkflowById } from '@/services/workflows';
import { Report } from '@/models/Node';
import { Workflow } from '@/models/Workflow';
import WorkflowHeader from '@/components/WorkflowHeader';

const threshold = 1;

// Sections toujours débloquées
const UNLOCKED_SECTIONS = [
  NodeType.summaryIdeas,
  NodeType.identified_problem,
  NodeType.target_audience,
  NodeType.target_existing_solutions,
  NodeType.why_now,
  NodeType.early_signs_of_interest,
  NodeType.risk_of_false_positive,
  NodeType.key_advice_before_next_step,
];

const LOCKED_SECTIONS = [
  NodeType.simplest_mvp_version,
  NodeType.core_feature_to_build,
  NodeType.what_to_ignore_initially,
  NodeType.where_to_find_target,
  NodeType.hook_to_test,
  NodeType.where_to_launch,
  NodeType.marketing_strategy,
  NodeType.direct_outreach_strategy,
  NodeType.pricing_strategy,
  NodeType.natural_business_model,
  NodeType.psychological_pricing,
  NodeType.key_purchase_trigger,
  NodeType.existing_solutions_comparison,
  NodeType.expected_user_feedback,
  NodeType.adoption_barriers,
  NodeType.what_to_keep_or_kill,
  NodeType.minimal_feedback_tracking,
  NodeType.light_pivot_idea,
  NodeType.mid_term_vision
]

// Structure des données d'une section
interface SectionData {
  isLoading: boolean;
  completeDescription: string;
  bulletPoints: Array<string>;
}

// État initial d'une section
const initialSectionData: SectionData = {
  isLoading: true,
  completeDescription: '',
  bulletPoints: []
};

/**
 * WorkflowClient component responsible for managing workflow data and handling user interactions.
 * This component connects to the workflow context and handles all state management for the workflow.
 * 
 * @param {object} props - Component props
 * @param {string} props.workflowId - The unique identifier for the workflow to be loaded
 * @returns {JSX.Element} The rendered WorkflowClient component
 */
export const WorkflowClient: React.FC<WorkflowClientProps> = ({ workflowId }) => {
  const [unlockedSections, setUnlockedSections] = useState<NodeType[]>(UNLOCKED_SECTIONS);
  const [report, setReport] = useState<Report | null>(null);
  const [workflow, setWorkflow] = useState<Workflow | null>(null);
  const { t, locale } = useClientTranslation('workflowClient');

  // État pour stocker les données de chaque section
  const [sectionsData, setSectionsData] = useState<Record<string, SectionData>>({
    [NodeType.summaryIdeas]: { ...initialSectionData },
    [NodeType.identified_problem]: { ...initialSectionData },
    [NodeType.target_audience]: { ...initialSectionData },
    [NodeType.target_existing_solutions]: { ...initialSectionData },
    [NodeType.why_now]: { ...initialSectionData },
    [NodeType.early_signs_of_interest]: { ...initialSectionData },
    [NodeType.risk_of_false_positive]: { ...initialSectionData },
    [NodeType.key_advice_before_next_step]: { ...initialSectionData },
    [NodeType.simplest_mvp_version]: { ...initialSectionData },
    [NodeType.core_feature_to_build]: { ...initialSectionData },
    [NodeType.what_to_ignore_initially]: { ...initialSectionData },
    [NodeType.where_to_find_target]: { ...initialSectionData },
    [NodeType.hook_to_test]: { ...initialSectionData },
    [NodeType.where_to_launch]: { ...initialSectionData },
    [NodeType.marketing_strategy]: { ...initialSectionData },
    [NodeType.direct_outreach_strategy]: { ...initialSectionData },
    [NodeType.pricing_strategy]: { ...initialSectionData },
    [NodeType.natural_business_model]: { ...initialSectionData },
    [NodeType.psychological_pricing]: { ...initialSectionData },
    [NodeType.key_purchase_trigger]: { ...initialSectionData },
    [NodeType.existing_solutions_comparison]: { ...initialSectionData },
    [NodeType.expected_user_feedback]: { ...initialSectionData },
    [NodeType.adoption_barriers]: { ...initialSectionData },
    [NodeType.what_to_keep_or_kill]: { ...initialSectionData },
    [NodeType.minimal_feedback_tracking]: { ...initialSectionData },
    [NodeType.light_pivot_idea]: { ...initialSectionData },
    [NodeType.mid_term_vision]: { ...initialSectionData },
  });

  // Séquence de chargement des sections mémorisée
  const loadingSequence = useMemo(() => [
    NodeType.summaryIdeas,
    NodeType.identified_problem,
    NodeType.target_audience,
    NodeType.target_existing_solutions,
    NodeType.why_now,
    NodeType.early_signs_of_interest,
    NodeType.risk_of_false_positive,
    NodeType.key_advice_before_next_step,
    NodeType.simplest_mvp_version,
    NodeType.core_feature_to_build,
    NodeType.what_to_ignore_initially,
    NodeType.where_to_find_target,
    NodeType.hook_to_test,
    NodeType.where_to_launch,
    NodeType.marketing_strategy,
    NodeType.direct_outreach_strategy,
    NodeType.pricing_strategy,
    NodeType.natural_business_model,
    NodeType.psychological_pricing,
    NodeType.key_purchase_trigger,
    NodeType.existing_solutions_comparison,
    NodeType.expected_user_feedback,
    NodeType.adoption_barriers,
    NodeType.what_to_keep_or_kill,
    NodeType.minimal_feedback_tracking,
    NodeType.light_pivot_idea,
    NodeType.mid_term_vision,
  ], []);

  const { 
    setCurrentWorkflowId,
    setActiveSection,
    currentLoadingIndex,
    setCurrentLoadingIndex
  } = useWorkflowActions();

  // Fonction pour récupérer un rapport par workflowId
  const fetchReport = useCallback(async (workflowId: string) => {
    try {
      const fetchedReport = await getReportByWorkflowId(workflowId);
      setReport(fetchedReport);
      return fetchedReport;
    } catch (err) {
      console.log("Une erreur est survenue lors de la récupération du rapport", err);
      return null;
    }
  }, []);

  // Fonction pour récupérer un workflow par ID
  const fetchWorkflow = useCallback(async (id: string) => {
    try {
      const fetchedWorkflow: Workflow | Error = await getWorkflowById(id);
      if (fetchedWorkflow instanceof Error || !fetchedWorkflow) {
        return;
      }
      setWorkflow(fetchedWorkflow);
      setCurrentLoadingIndex(0); // Réinitialiser l'index de chargement lors du chargement d'un nouveau workflow
    } catch {
      return
    }
  }, [setCurrentLoadingIndex]);

  // Structure pour suivre toutes les sections
  const sections = {
    summaryIdeas: useInView({ threshold }),
    identified_problem: useInView({ threshold }),
    target_existing_solutions: useInView({ threshold }),
    target_audience: useInView({ threshold }),
    why_now: useInView({ threshold }),
    urgency_level: useInView({ threshold }),
    early_signs_of_interest: useInView({ threshold }),
    risk_of_false_positive: useInView({ threshold }),
    key_advice_before_next_step: useInView({ threshold }),
    simplest_mvp_version: useInView({ threshold }),
    core_feature_to_build: useInView({ threshold }),
    what_to_ignore_initially: useInView({ threshold }),
    where_to_find_target: useInView({ threshold }),
    hook_to_test: useInView({ threshold }),
    where_to_launch: useInView({ threshold }),
    marketing_strategy: useInView({ threshold }),
    direct_outreach_strategy: useInView({ threshold }),
    pricing_strategy: useInView({ threshold }),
    natural_business_model: useInView({ threshold }),
    psychological_pricing: useInView({ threshold }),
    key_purchase_trigger: useInView({ threshold }),
    existing_solutions_comparison: useInView({ threshold }),
    expected_user_feedback: useInView({ threshold }),
    adoption_barriers: useInView({ threshold }),
    what_to_keep_or_kill: useInView({ threshold }),
    minimal_feedback_tracking: useInView({ threshold }),
    light_pivot_idea: useInView({ threshold }),
    mid_term_vision: useInView({ threshold }),
  };

  useEffect(() => {
    setWorkflow(null);
    setReport(null);
    setCurrentLoadingIndex(0);
  }, [setCurrentLoadingIndex]);

  useEffect(() => {
    const initializeWorkflow = async () => {
      setCurrentWorkflowId(workflowId);
      await fetchWorkflow(workflowId);
      await fetchReport(workflowId);
    };
    
    initializeWorkflow();
  }, [workflowId, setCurrentWorkflowId, fetchWorkflow, fetchReport]);

  useEffect(() => {
    // Vérifier chaque section et définir la section active en fonction de sa visibilité
    if (sections.summaryIdeas.inView) {
      setActiveSection(NodeType.summaryIdeas);
      return;
    }
    if (sections.identified_problem.inView) {
      setActiveSection(NodeType.identified_problem);
      return;
    }
    if (sections.target_audience.inView) {
      setActiveSection(NodeType.target_audience);
      return;
    }
    if (sections.why_now.inView) {
      setActiveSection(NodeType.why_now);
      return;
    }
    if (sections.urgency_level.inView) {
      setActiveSection(NodeType.urgency_level);
      return;
    }
    if (sections.early_signs_of_interest.inView) {
      setActiveSection(NodeType.early_signs_of_interest);
      return;
    }
    if (sections.risk_of_false_positive.inView) {
      setActiveSection(NodeType.risk_of_false_positive);
      return;
    }
    if (sections.key_advice_before_next_step.inView) {
      setActiveSection(NodeType.key_advice_before_next_step);
      return;
    }
    if (sections.simplest_mvp_version.inView) {
      setActiveSection(NodeType.simplest_mvp_version);
      return;
    }
    if (sections.core_feature_to_build.inView) {
      setActiveSection(NodeType.core_feature_to_build);
      return;
    }
    if (sections.what_to_ignore_initially.inView) {
      setActiveSection(NodeType.what_to_ignore_initially);
      return;
    }
    if (sections.where_to_find_target.inView) {
      setActiveSection(NodeType.where_to_find_target);
      return;
    }
    if (sections.hook_to_test.inView) {
      setActiveSection(NodeType.hook_to_test);
      return;
    }
    if (sections.where_to_launch.inView) {
      setActiveSection(NodeType.where_to_launch);
      return;
    }
    if (sections.marketing_strategy.inView) {
      setActiveSection(NodeType.marketing_strategy);
      return;
    }
    if (sections.direct_outreach_strategy.inView) {
      setActiveSection(NodeType.direct_outreach_strategy);
      return;
    }
    if (sections.pricing_strategy.inView) {
      setActiveSection(NodeType.pricing_strategy);
      return;
    }
    if (sections.natural_business_model.inView) {
      setActiveSection(NodeType.natural_business_model);
      return;
    }
    if (sections.psychological_pricing.inView) {
      setActiveSection(NodeType.psychological_pricing);
      return;
    }
    if (sections.key_purchase_trigger.inView) {
      setActiveSection(NodeType.key_purchase_trigger);
      return;
    }
    if (sections.existing_solutions_comparison.inView) {
      setActiveSection(NodeType.existing_solutions_comparison);
      return;
    }
    if (sections.expected_user_feedback.inView) {
      setActiveSection(NodeType.expected_user_feedback);
      return;
    }
    if (sections.adoption_barriers.inView) {
      setActiveSection(NodeType.adoption_barriers);
      return;
    }
    if (sections.what_to_keep_or_kill.inView) {
      setActiveSection(NodeType.what_to_keep_or_kill);
      return;
    }
    if (sections.minimal_feedback_tracking.inView) {
      setActiveSection(NodeType.minimal_feedback_tracking);
      return;
    }
    if (sections.light_pivot_idea.inView) {
      setActiveSection(NodeType.light_pivot_idea);
      return;
    }
    if (sections.mid_term_vision.inView) {
      setActiveSection(NodeType.mid_term_vision);
      return;
    }
  }, [
    sections.summaryIdeas.inView,
    sections.identified_problem.inView,
    sections.target_existing_solutions.inView,
    sections.target_audience.inView,
    sections.why_now.inView,
    sections.urgency_level.inView,
    sections.early_signs_of_interest.inView,
    sections.risk_of_false_positive.inView,
    sections.key_advice_before_next_step.inView,
    sections.simplest_mvp_version.inView,
    sections.core_feature_to_build.inView,
    sections.what_to_ignore_initially.inView,
    sections.where_to_find_target.inView,
    sections.hook_to_test.inView,
    sections.where_to_launch.inView,
    sections.marketing_strategy.inView,
    sections.direct_outreach_strategy.inView,
    sections.pricing_strategy.inView,
    sections.natural_business_model.inView,
    sections.psychological_pricing.inView,
    sections.key_purchase_trigger.inView,
    sections.existing_solutions_comparison.inView,
    sections.expected_user_feedback.inView,
    sections.adoption_barriers.inView,
    sections.what_to_keep_or_kill.inView,
    sections.minimal_feedback_tracking.inView,
    sections.light_pivot_idea.inView,
    sections.mid_term_vision.inView,
    setActiveSection
  ]);

  // Vérifier si une section doit être verrouillée
  const isSectionLocked = useCallback((nodeType: NodeType) => {
    // Si le workflow a été complètement déverrouillé, retourner non verrouillé immédiatement
    if (workflow?.isFullUnlock) {
      return false;
    }
    
    // Si la section fait partie des sections déverrouillées, retourner non verrouillé
    if (unlockedSections.includes(nodeType)) {
      return false;
    }
    
    // Par défaut, la section est verrouillée
    return true;
  }, [workflow, unlockedSections]);

  // Effet pour réinitialiser le chargement quand isFullUnlock change
  useEffect(() => {
    if (workflow?.isFullUnlock) {
      // Réinitialiser l'index de chargement pour reprendre le chargement de toutes les sections
      setUnlockedSections([
        ...UNLOCKED_SECTIONS,
        ...LOCKED_SECTIONS
      ]);
    }
  }, [workflow?.isFullUnlock]);

  // Fonction pour charger une section du rapport
  const loadReportSection = useCallback(async (sectionKey: NodeType) => {
    try {
      // Indiquer que la section est en cours de chargement
      setSectionsData(prev => ({
        ...prev,
        [sectionKey]: { ...prev[sectionKey], isLoading: true }
      }));

      // Vérifier si nous avons déjà le rapport chargé avec du contenu
      if (report && 
          report.sections[sectionKey as keyof typeof report.sections] && 
          report.sections[sectionKey as keyof typeof report.sections].completeDescription) {
        
        const section = report.sections[sectionKey as keyof typeof report.sections];
        
        // Utiliser les données du rapport déjà chargé
        setSectionsData(prev => ({
          ...prev,
          [sectionKey]: {
            isLoading: false,
            completeDescription: section.completeDescription,
            bulletPoints: section.bulletPoints
          }
        }));
        
        return true;
      }

      // Sinon, générer le contenu de la section avec createComponent
      const sectionContent = await createComponent({
        workflowId,
        type: sectionKey,
        section: displayNodeType(sectionKey),
        language: locale
      });

      // Si pas de contenu généré, marquer comme non chargé et sortir
      if (!sectionContent) {
        setSectionsData(prev => ({
          ...prev,
          [sectionKey]: { ...prev[sectionKey], isLoading: false }
        }));
        
        return false;
      }

      // Mettre à jour l'état avec les nouvelles données
      setSectionsData(prev => ({
        ...prev,
        [sectionKey]: {
          isLoading: false,
          completeDescription: sectionContent.completeDescription || '',
          bulletPoints: sectionContent.bulletPoints || []
        }
      }));
      
      return true;
      
    } catch (error) {
      console.log(`Erreur lors du chargement de la section ${sectionKey}:`, error);
      
      setSectionsData(prev => ({
        ...prev,
        [sectionKey]: { ...prev[sectionKey], isLoading: false }
      }));
      
      return false;
    }
  }, [report, workflowId, locale]);

  const allSectionsHasLoaded = useCallback(() => {
    return currentLoadingIndex >= unlockedSections.length
  }, [currentLoadingIndex, unlockedSections]);

  // Effet pour le chargement séquentiel des composants
  useEffect(() => {
    const loadNextSection = async () => {
      // Return early si le workflow n'est pas chargé
      if (!workflow) {
        return;
      }
      
      // Return early si toutes les sections sont déjà chargées
      if (allSectionsHasLoaded()) {
        return;
      }
      
      // Récupérer le type de section actuel à charger
      const currentSectionType = loadingSequence[currentLoadingIndex];
      
      try {
        // Attendre que la section soit chargée avant de passer à la suivante
        const success = await loadReportSection(currentSectionType);
        if (success) {
          setCurrentLoadingIndex(currentLoadingIndex + 1);
        }
      } catch (error) {
        console.log('Erreur lors du chargement de la section:', error);
      }
    };

    loadNextSection();
      
  }, [workflow, currentLoadingIndex, loadingSequence, unlockedSections, loadReportSection, allSectionsHasLoaded, setCurrentLoadingIndex]);

  if (!workflow) {
    return null;
  }

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <WorkflowHeader 
        workflow={workflow} 
        onUnlock={() => fetchWorkflow(workflowId)}
      />
      <div className="flex flex-col">
        
        <div className="rounded-lg my-6">
          <div className="flex justify-start items-center ml-6">
            <BadgeCheck className="w-10 h-10 text-primary" />
            <h2 className="text-3xl font-bold pl-2 text-primary">{t('sections.general')}</h2>
          </div>
          <div ref={sections.summaryIdeas.ref} id={NodeType.summaryIdeas}>
            <NodeBase 
              nodeType={NodeType.summaryIdeas}
              workflowId={workflowId}
              isLock={isSectionLocked(NodeType.summaryIdeas)}
              isLoading={sectionsData[NodeType.summaryIdeas].isLoading}
              isCurrentlyFetching={currentLoadingIndex < loadingSequence.length && loadingSequence[currentLoadingIndex] === NodeType.summaryIdeas}
              completeDescription={sectionsData[NodeType.summaryIdeas].completeDescription}
              bulletPoints={sectionsData[NodeType.summaryIdeas].bulletPoints}
            />
          </div>
        </div>

        <div className="rounded-lg my-6">
          <div className="flex justify-start items-center ml-6">
            <BadgeCheck className="w-10 h-10 text-primary" />
            <h2 className="text-3xl font-bold pl-2 text-primary">{t('sections.validate_idea')}</h2>
          </div>
          <div ref={sections.identified_problem.ref} id={NodeType.identified_problem}>
            <NodeBase 
              nodeType={NodeType.identified_problem}
              workflowId={workflowId}
              isLock={isSectionLocked(NodeType.identified_problem)}
              isLoading={sectionsData[NodeType.identified_problem].isLoading}
              isCurrentlyFetching={currentLoadingIndex < loadingSequence.length && loadingSequence[currentLoadingIndex] === NodeType.identified_problem}
              completeDescription={sectionsData[NodeType.identified_problem].completeDescription}
              bulletPoints={sectionsData[NodeType.identified_problem].bulletPoints}
            />
          </div>
          <div className="flex justify-center m-6 ">
            <Separator className="w-full" />
          </div>
          <div ref={sections.target_audience.ref} id={NodeType.target_audience}>
            <NodeBase 
              nodeType={NodeType.target_audience} 
              workflowId={workflowId}
              isLock={isSectionLocked(NodeType.target_audience)}
              isLoading={sectionsData[NodeType.target_audience].isLoading}
              isCurrentlyFetching={currentLoadingIndex < loadingSequence.length && loadingSequence[currentLoadingIndex] === NodeType.target_audience}
              completeDescription={sectionsData[NodeType.target_audience].completeDescription}
              bulletPoints={sectionsData[NodeType.target_audience].bulletPoints}
            />
          </div>
          <div className="flex justify-center m-6 ">
            <Separator className="w-full" />
          </div>
          <div ref={sections.target_existing_solutions.ref} id={NodeType.target_existing_solutions}>
            <NodeBase 
              nodeType={NodeType.target_existing_solutions} 
              workflowId={workflowId}
              isLock={isSectionLocked(NodeType.target_existing_solutions)}
              isLoading={sectionsData[NodeType.target_existing_solutions].isLoading}
              isCurrentlyFetching={currentLoadingIndex < loadingSequence.length && loadingSequence[currentLoadingIndex] === NodeType.target_existing_solutions}
              completeDescription={sectionsData[NodeType.target_existing_solutions].completeDescription}
              bulletPoints={sectionsData[NodeType.target_existing_solutions].bulletPoints}
            />
          </div>
          <div className="flex justify-center m-6 ">
            <Separator className="w-full" />
          </div>
          <div ref={sections.why_now.ref} id={NodeType.why_now}>
            <NodeBase 
              nodeType={NodeType.why_now} 
              workflowId={workflowId}
              isLock={isSectionLocked(NodeType.why_now)}
              isLoading={sectionsData[NodeType.why_now].isLoading}
              isCurrentlyFetching={currentLoadingIndex < loadingSequence.length && loadingSequence[currentLoadingIndex] === NodeType.why_now}
              completeDescription={sectionsData[NodeType.why_now].completeDescription}
              bulletPoints={sectionsData[NodeType.why_now].bulletPoints}
            />
          </div>
          <div className="flex justify-center m-6 ">
            <Separator className="w-full" />
          </div>
          <div ref={sections.early_signs_of_interest.ref} id={NodeType.early_signs_of_interest}>
            <NodeBase 
              nodeType={NodeType.early_signs_of_interest} 
              workflowId={workflowId}
              isLock={isSectionLocked(NodeType.early_signs_of_interest)}
              isLoading={sectionsData[NodeType.early_signs_of_interest].isLoading}
              isCurrentlyFetching={currentLoadingIndex < loadingSequence.length && loadingSequence[currentLoadingIndex] === NodeType.early_signs_of_interest}
              completeDescription={sectionsData[NodeType.early_signs_of_interest].completeDescription}
              bulletPoints={sectionsData[NodeType.early_signs_of_interest].bulletPoints}
            />
          </div>
          <div className="flex justify-center m-6 ">
            <Separator className="w-full" />
          </div>
          <div ref={sections.risk_of_false_positive.ref} id={NodeType.risk_of_false_positive}>
            <NodeBase 
              nodeType={NodeType.risk_of_false_positive} 
              workflowId={workflowId}
              isLock={isSectionLocked(NodeType.risk_of_false_positive)}
              isLoading={sectionsData[NodeType.risk_of_false_positive].isLoading}
              isCurrentlyFetching={currentLoadingIndex < loadingSequence.length && loadingSequence[currentLoadingIndex] === NodeType.risk_of_false_positive}
              completeDescription={sectionsData[NodeType.risk_of_false_positive].completeDescription}
              bulletPoints={sectionsData[NodeType.risk_of_false_positive].bulletPoints}
            />
          </div>
          <div className="flex justify-center m-6 ">
            <Separator className="w-full" />
          </div>
          <div ref={sections.key_advice_before_next_step.ref} id={NodeType.key_advice_before_next_step}>
            <NodeBase 
              nodeType={NodeType.key_advice_before_next_step} 
              workflowId={workflowId}
              isLock={isSectionLocked(NodeType.key_advice_before_next_step)}
              isLoading={sectionsData[NodeType.key_advice_before_next_step].isLoading}
              isCurrentlyFetching={currentLoadingIndex < loadingSequence.length && loadingSequence[currentLoadingIndex] === NodeType.key_advice_before_next_step}
              completeDescription={sectionsData[NodeType.key_advice_before_next_step].completeDescription}
              bulletPoints={sectionsData[NodeType.key_advice_before_next_step].bulletPoints}
            />
          </div>
        </div>

        <div className="rounded-lg my-6">
          <div className="flex justify-start items-center ml-6">
            <Rocket className="w-10 h-10 text-primary" />
            <h2 className="text-3xl font-bold pl-2 text-primary">{t('sections.build_and_launch')}</h2>
          </div>

          <div ref={sections.simplest_mvp_version.ref} id={NodeType.simplest_mvp_version}>
            <NodeBase 
              nodeType={NodeType.simplest_mvp_version} 
              workflowId={workflowId}
              isLock={isSectionLocked(NodeType.simplest_mvp_version)}
              isLoading={sectionsData[NodeType.simplest_mvp_version].isLoading}
              isCurrentlyFetching={currentLoadingIndex < loadingSequence.length && loadingSequence[currentLoadingIndex] === NodeType.simplest_mvp_version}
              completeDescription={sectionsData[NodeType.simplest_mvp_version].completeDescription}
              bulletPoints={sectionsData[NodeType.simplest_mvp_version].bulletPoints}
            />
          </div>
          <div className="flex justify-center m-6 ">
            <Separator className="w-full" />
          </div>
          <div ref={sections.core_feature_to_build.ref} id={NodeType.core_feature_to_build}>
            <NodeBase 
              nodeType={NodeType.core_feature_to_build} 
              workflowId={workflowId}
              isLock={isSectionLocked(NodeType.core_feature_to_build)}
              isLoading={sectionsData[NodeType.core_feature_to_build].isLoading}
              isCurrentlyFetching={currentLoadingIndex < loadingSequence.length && loadingSequence[currentLoadingIndex] === NodeType.core_feature_to_build}
              completeDescription={sectionsData[NodeType.core_feature_to_build].completeDescription}
              bulletPoints={sectionsData[NodeType.core_feature_to_build].bulletPoints}
            />
          </div>
          <div className="flex justify-center m-6 ">
            <Separator className="w-full" />
          </div>
          <div ref={sections.what_to_ignore_initially.ref} id={NodeType.what_to_ignore_initially}>
            <NodeBase 
              nodeType={NodeType.what_to_ignore_initially} 
              workflowId={workflowId}
              isLock={isSectionLocked(NodeType.what_to_ignore_initially)}
              isLoading={sectionsData[NodeType.what_to_ignore_initially].isLoading}
              isCurrentlyFetching={currentLoadingIndex < loadingSequence.length && loadingSequence[currentLoadingIndex] === NodeType.what_to_ignore_initially}
              completeDescription={sectionsData[NodeType.what_to_ignore_initially].completeDescription}
              bulletPoints={sectionsData[NodeType.what_to_ignore_initially].bulletPoints}
            />
          </div>
        </div>

        <div className="rounded-lg my-6">
          <div className="flex justify-start items-center ml-6">
            <Users className="w-10 h-10 text-primary" />
            <h2 className="text-3xl font-bold pl-2 text-primary">{t('sections.find_users')}</h2>
          </div>

          <div ref={sections.where_to_find_target.ref} id={NodeType.where_to_find_target}>
            <NodeBase 
              nodeType={NodeType.where_to_find_target} 
              workflowId={workflowId}
              isLock={isSectionLocked(NodeType.where_to_find_target)}
              isLoading={sectionsData[NodeType.where_to_find_target].isLoading}
              isCurrentlyFetching={currentLoadingIndex < loadingSequence.length && loadingSequence[currentLoadingIndex] === NodeType.where_to_find_target}
              completeDescription={sectionsData[NodeType.where_to_find_target].completeDescription}
              bulletPoints={sectionsData[NodeType.where_to_find_target].bulletPoints}
            />
          </div>
          <div className="flex justify-center m-6 ">
            <Separator className="w-full" />
          </div>
          <div ref={sections.hook_to_test.ref} id={NodeType.hook_to_test}>
            <NodeBase 
              nodeType={NodeType.hook_to_test} 
              workflowId={workflowId}
              isLock={isSectionLocked(NodeType.hook_to_test)}
              isLoading={sectionsData[NodeType.hook_to_test].isLoading}
              isCurrentlyFetching={currentLoadingIndex < loadingSequence.length && loadingSequence[currentLoadingIndex] === NodeType.hook_to_test}
              completeDescription={sectionsData[NodeType.hook_to_test].completeDescription}
              bulletPoints={sectionsData[NodeType.hook_to_test].bulletPoints}
            />
          </div>
          <div className="flex justify-center m-6 ">
            <Separator className="w-full" />
          </div>
          <div ref={sections.where_to_launch.ref} id={NodeType.where_to_launch}>
            <NodeBase 
              nodeType={NodeType.where_to_launch} 
              workflowId={workflowId}
              isLock={isSectionLocked(NodeType.where_to_launch)}
              isLoading={sectionsData[NodeType.where_to_launch].isLoading}
              isCurrentlyFetching={currentLoadingIndex < loadingSequence.length && loadingSequence[currentLoadingIndex] === NodeType.where_to_launch}
              completeDescription={sectionsData[NodeType.where_to_launch].completeDescription}
              bulletPoints={sectionsData[NodeType.where_to_launch].bulletPoints}
            />
          </div>
          <div className="flex justify-center m-6 ">
            <Separator className="w-full" />
          </div>
          <div ref={sections.marketing_strategy.ref} id={NodeType.marketing_strategy}>
            <NodeBase 
              nodeType={NodeType.marketing_strategy} 
              workflowId={workflowId}
              isLock={isSectionLocked(NodeType.marketing_strategy)}
              isLoading={sectionsData[NodeType.marketing_strategy].isLoading}
              isCurrentlyFetching={currentLoadingIndex < loadingSequence.length && loadingSequence[currentLoadingIndex] === NodeType.marketing_strategy}
              completeDescription={sectionsData[NodeType.marketing_strategy].completeDescription}
              bulletPoints={sectionsData[NodeType.marketing_strategy].bulletPoints}
            />
          </div>
          <div className="flex justify-center m-6 ">
            <Separator className="w-full" />
          </div>
          <div ref={sections.direct_outreach_strategy.ref} id={NodeType.direct_outreach_strategy}>
            <NodeBase 
              nodeType={NodeType.direct_outreach_strategy} 
              workflowId={workflowId}
              isLock={isSectionLocked(NodeType.direct_outreach_strategy)}
              isLoading={sectionsData[NodeType.direct_outreach_strategy].isLoading}
              isCurrentlyFetching={currentLoadingIndex < loadingSequence.length && loadingSequence[currentLoadingIndex] === NodeType.direct_outreach_strategy}
              completeDescription={sectionsData[NodeType.direct_outreach_strategy].completeDescription}
              bulletPoints={sectionsData[NodeType.direct_outreach_strategy].bulletPoints}
            />
          </div>
        </div>

        <div className="rounded-lg my-6">
          <div className="flex justify-start items-center ml-6">
            <CircleDollarSign className="w-10 h-10 text-primary" />
            <h2 className="text-3xl font-bold pl-2 text-primary">{t('sections.monetize')}</h2>
          </div>
          <div ref={sections.pricing_strategy.ref} id={NodeType.pricing_strategy}>
            <NodeBase 
              nodeType={NodeType.pricing_strategy} 
              workflowId={workflowId}
              isLock={isSectionLocked(NodeType.pricing_strategy)}
              isLoading={sectionsData[NodeType.pricing_strategy].isLoading}
              isCurrentlyFetching={currentLoadingIndex < loadingSequence.length && loadingSequence[currentLoadingIndex] === NodeType.pricing_strategy}
              completeDescription={sectionsData[NodeType.pricing_strategy].completeDescription}
              bulletPoints={sectionsData[NodeType.pricing_strategy].bulletPoints}
            />
          </div>
          <div className="flex justify-center m-6 ">
            <Separator className="w-full" />
          </div>
          <div ref={sections.natural_business_model.ref} id={NodeType.natural_business_model}>
            <NodeBase 
              nodeType={NodeType.natural_business_model} 
              workflowId={workflowId}
              isLock={isSectionLocked(NodeType.natural_business_model)}
              isLoading={sectionsData[NodeType.natural_business_model].isLoading}
              isCurrentlyFetching={currentLoadingIndex < loadingSequence.length && loadingSequence[currentLoadingIndex] === NodeType.natural_business_model}
              completeDescription={sectionsData[NodeType.natural_business_model].completeDescription}
              bulletPoints={sectionsData[NodeType.natural_business_model].bulletPoints}
            />
          </div>
          <div className="flex justify-center m-6 ">
            <Separator className="w-full" />
          </div>
          <div ref={sections.psychological_pricing.ref} id={NodeType.psychological_pricing}>
            <NodeBase 
              nodeType={NodeType.psychological_pricing} 
              workflowId={workflowId}
              isLock={isSectionLocked(NodeType.psychological_pricing)}
              isLoading={sectionsData[NodeType.psychological_pricing].isLoading}
              isCurrentlyFetching={currentLoadingIndex < loadingSequence.length && loadingSequence[currentLoadingIndex] === NodeType.psychological_pricing}
              completeDescription={sectionsData[NodeType.psychological_pricing].completeDescription}
              bulletPoints={sectionsData[NodeType.psychological_pricing].bulletPoints}
            />
          </div>
          <div className="flex justify-center m-6 ">
            <Separator className="w-full" />
          </div>
          <div ref={sections.key_purchase_trigger.ref} id={NodeType.key_purchase_trigger}>
            <NodeBase 
              nodeType={NodeType.key_purchase_trigger} 
              workflowId={workflowId}
              isLock={isSectionLocked(NodeType.key_purchase_trigger)}
              isLoading={sectionsData[NodeType.key_purchase_trigger].isLoading}
              isCurrentlyFetching={currentLoadingIndex < loadingSequence.length && loadingSequence[currentLoadingIndex] === NodeType.key_purchase_trigger}
              completeDescription={sectionsData[NodeType.key_purchase_trigger].completeDescription}
              bulletPoints={sectionsData[NodeType.key_purchase_trigger].bulletPoints}
            />
          </div>
          <div className="flex justify-center m-6 ">
            <Separator className="w-full" />
          </div>
          <div ref={sections.existing_solutions_comparison.ref} id={NodeType.existing_solutions_comparison}>
            <NodeBase 
              nodeType={NodeType.existing_solutions_comparison} 
              workflowId={workflowId}
              isLock={isSectionLocked(NodeType.existing_solutions_comparison)}
              isLoading={sectionsData[NodeType.existing_solutions_comparison].isLoading}
              isCurrentlyFetching={currentLoadingIndex < loadingSequence.length && loadingSequence[currentLoadingIndex] === NodeType.existing_solutions_comparison}
              completeDescription={sectionsData[NodeType.existing_solutions_comparison].completeDescription}
              bulletPoints={sectionsData[NodeType.existing_solutions_comparison].bulletPoints}
            />
          </div>
          <div className="flex justify-center m-6 ">
            <Separator className="w-full" />
          </div>
        </div>

        <div className="rounded-lg my-6">
          <div className="flex justify-start items-center ml-6">
            <CircleDollarSign className="w-10 h-10 text-primary" />
            <h2 className="text-3xl font-bold pl-2 text-primary">{t('sections.improve')}</h2>
          </div>
          <div ref={sections.expected_user_feedback.ref} id={NodeType.expected_user_feedback}>
            <NodeBase 
              nodeType={NodeType.expected_user_feedback} 
              workflowId={workflowId}
              isLock={isSectionLocked(NodeType.expected_user_feedback)}
              isLoading={sectionsData[NodeType.expected_user_feedback].isLoading}
              isCurrentlyFetching={currentLoadingIndex < loadingSequence.length && loadingSequence[currentLoadingIndex] === NodeType.expected_user_feedback}
              completeDescription={sectionsData[NodeType.expected_user_feedback].completeDescription}
              bulletPoints={sectionsData[NodeType.expected_user_feedback].bulletPoints}
            />
          </div>
          <div className="flex justify-center m-6 ">
            <Separator className="w-full" />
          </div>
          <div ref={sections.adoption_barriers.ref} id={NodeType.adoption_barriers}>
            <NodeBase 
              nodeType={NodeType.adoption_barriers} 
              workflowId={workflowId}
              isLock={isSectionLocked(NodeType.adoption_barriers)}
              isLoading={sectionsData[NodeType.adoption_barriers].isLoading}
              isCurrentlyFetching={currentLoadingIndex < loadingSequence.length && loadingSequence[currentLoadingIndex] === NodeType.adoption_barriers}
              completeDescription={sectionsData[NodeType.adoption_barriers].completeDescription}
              bulletPoints={sectionsData[NodeType.adoption_barriers].bulletPoints}
            />
          </div>
          <div className="flex justify-center m-6 ">
            <Separator className="w-full" />
          </div>
          <div ref={sections.what_to_keep_or_kill.ref} id={NodeType.what_to_keep_or_kill}>
            <NodeBase 
              nodeType={NodeType.what_to_keep_or_kill} 
              workflowId={workflowId}
              isLock={isSectionLocked(NodeType.what_to_keep_or_kill)}
              isLoading={sectionsData[NodeType.what_to_keep_or_kill].isLoading}
              isCurrentlyFetching={currentLoadingIndex < loadingSequence.length && loadingSequence[currentLoadingIndex] === NodeType.what_to_keep_or_kill}
              completeDescription={sectionsData[NodeType.what_to_keep_or_kill].completeDescription}
              bulletPoints={sectionsData[NodeType.what_to_keep_or_kill].bulletPoints}
            />
          </div>
          <div className="flex justify-center m-6 ">
            <Separator className="w-full" />
          </div>
          <div ref={sections.minimal_feedback_tracking.ref} id={NodeType.minimal_feedback_tracking}>
            <NodeBase 
              nodeType={NodeType.minimal_feedback_tracking} 
              workflowId={workflowId}
              isLock={isSectionLocked(NodeType.minimal_feedback_tracking)}
              isLoading={sectionsData[NodeType.minimal_feedback_tracking].isLoading}
              isCurrentlyFetching={currentLoadingIndex < loadingSequence.length && loadingSequence[currentLoadingIndex] === NodeType.minimal_feedback_tracking}
              completeDescription={sectionsData[NodeType.minimal_feedback_tracking].completeDescription}
              bulletPoints={sectionsData[NodeType.minimal_feedback_tracking].bulletPoints}
            />
          </div>
          <div className="flex justify-center m-6 ">
            <Separator className="w-full" />
          </div>
          <div ref={sections.light_pivot_idea.ref} id={NodeType.light_pivot_idea}>
            <NodeBase 
              nodeType={NodeType.light_pivot_idea} 
              workflowId={workflowId}
              isLock={isSectionLocked(NodeType.light_pivot_idea)}
              isLoading={sectionsData[NodeType.light_pivot_idea].isLoading}
              isCurrentlyFetching={currentLoadingIndex < loadingSequence.length && loadingSequence[currentLoadingIndex] === NodeType.light_pivot_idea}
              completeDescription={sectionsData[NodeType.light_pivot_idea].completeDescription}
              bulletPoints={sectionsData[NodeType.light_pivot_idea].bulletPoints}
            />
          </div>
          <div className="flex justify-center m-6 ">
            <Separator className="w-full" />
          </div>
          <div ref={sections.mid_term_vision.ref} id={NodeType.mid_term_vision}>
            <NodeBase 
              nodeType={NodeType.mid_term_vision} 
              workflowId={workflowId}
              isLock={isSectionLocked(NodeType.mid_term_vision)}
              isLoading={sectionsData[NodeType.mid_term_vision].isLoading}
              isCurrentlyFetching={currentLoadingIndex < loadingSequence.length && loadingSequence[currentLoadingIndex] === NodeType.mid_term_vision}
              completeDescription={sectionsData[NodeType.mid_term_vision].completeDescription}
              bulletPoints={sectionsData[NodeType.mid_term_vision].bulletPoints}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowClient; 