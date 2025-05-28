import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/context/Auth/AuthContext';
import { getUserWorkflowsFromUser, UserWorkflow } from '@/services/users';
import { WorkflowProject } from '../type';
import { useParams } from 'next/navigation';
import { convertWorkflowToWorkflowProject } from '../utils/workflowConverters';

/**
 * Hook personnalisé pour charger et gérer les workflows de l'utilisateur
 * 
 * @returns Les workflows utilisateur, l'état de chargement et la fonction de conversion
 */
export const useWorkflows = () => {
  const [userWorkflows, setUserWorkflows] = useState<WorkflowProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const { id } = useParams();

  // Fonction pour convertir un workflow en objet WorkflowProject
  const convertToWorkflowProject = useCallback((workflow: UserWorkflow): WorkflowProject => {
    return convertWorkflowToWorkflowProject(workflow, id);
  }, [id]);

  // Effet pour charger les workflows de l'utilisateur
  useEffect(() => {
    async function fetchWorkflows() {
      if (!user || !user.uid) {
        return;
      }
      
      try {
        // Récupérer les workflows de l'utilisateur
        const workflows: UserWorkflow[] = await getUserWorkflowsFromUser(user.uid);
        
        // Convertir les workflows en objets WorkflowProject
        const workflowProjects: WorkflowProject[] = workflows.map(convertToWorkflowProject);
        
        // Mettre à jour l'état
        setUserWorkflows(workflowProjects);
      } catch {
        return;
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchWorkflows();
  }, [user, convertToWorkflowProject]);

  return {
    userWorkflows,
    isLoading
  };
}; 