import {
  generateIdeasComponents,
  NodeType
} from './api';
import { getWorkflowById } from '../workflows';
import { Workflow } from '@/models/Workflow';
import { ReportSection, Report } from '@/models/Node';
import { getOrCreateReportSection } from '../reports';

export async function getComponent({
  workflowId,
  type
}: {
  workflowId: string;
  type: NodeType;
}): Promise<ReportSection | null> {
  try {
    // Nous récupérons la section correspondante du rapport
    const report = await getOrCreateReportSection(
      workflowId,
      type as keyof Report['sections'],
      async () => null // On ne génère pas de contenu ici, seulement récupération
    );

    return report;
  } catch (error) {
    console.error(`Erreur lors de la récupération de la section ${type}:`, error);
    return null;
  }
}

export async function createComponent({
  workflowId,
  type,
  section,
  language = 'fr'
}: {
  workflowId: string;
  type: NodeType;
  section: string;
  language?: string;
}): Promise<ReportSection | null> {
  try {
    const workflowData = await getWorkflowById(workflowId);
    if (workflowData instanceof Error) {
      return null;
    }
    
    const workflow: Workflow = workflowData;

    console.log('type', type);
    
    // Utilisation de getOrCreateReportSection qui va gérer la logique de création/récupération
    return getOrCreateReportSection(
      workflowId,
      type as keyof Report['sections'],
      async () => {
        // Fonction de génération du contenu
        return generateIdeasComponents({
          businessIdea: workflow.responses[0].response,
          region: workflow.responses[1].response,
          problemSolved: workflow.responses[2].response,
          targetCustomers: workflow.responses[3].response,
          revenueGeneration: workflow.responses[4].response,
          ideaName: workflow.responses[5].response,
          section,
          workflowId,
          language
        });
      }
    );
  } catch (error) {
    console.error(`Erreur lors de la création de la section ${type}:`, error);
    return null;
  }
}
