import { History } from 'lucide-react';
import { UserWorkflow } from '@/services/users';
import { WorkflowProject } from '../type';

/**
 * Convertit un objet UserWorkflow en objet WorkflowProject
 * 
 * @param workflow - L'objet workflow à convertir
 * @param currentId - L'ID du workflow actuellement actif
 * @returns Un objet WorkflowProject
 */
export const convertWorkflowToWorkflowProject = (
  workflow: UserWorkflow, 
  currentId: string | string[] | undefined
): WorkflowProject => {
  return {
    name: workflow.name,
    isActive: workflow.id === currentId,
    url: `/workflows/${workflow.id}`,
    id: workflow.id,
    icon: History as React.FC<React.SVGProps<SVGSVGElement>>,
    date: formatWorkflowDate(workflow.createdAt)
  };
};

/**
 * Formate la date du workflow selon le format français
 * 
 * @param date - La date à formater
 * @returns La date formatée en chaîne de caractères
 */
export const formatWorkflowDate = (date: string | number | Date): string => {
  return new Date(date).toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}; 