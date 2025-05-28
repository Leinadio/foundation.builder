import { Workflow } from '@/models/Workflow';
/**
 * Interface pour les paramètres de création d'un workflow
 */
export interface CreateWorkflowInput {
  userId: string;
  name: string;
  description?: string;
  responses: Array<{
    question: string;
    response: string;
  }>;
}

/**
 * Interface pour les paramètres de mise à jour d'un workflow
 */
export interface UpdateWorkflowParams {
  id: string;
  data: Partial<Workflow>;
}

/**
 * Interface pour les réponses d'API des workflows
 */
export interface WorkflowResponse {
  success: boolean;
  data?: Workflow | Workflow[];
  error?: string;
}