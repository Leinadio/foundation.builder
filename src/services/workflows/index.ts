import { DocumentReference } from 'firebase/firestore';
import { 
    apiCreateWorkflow, 
    apiGetWorkflow,
    CreateWorkflowInput,
  } from './api';
  import { toWorkflow, Workflow } from '@/models/Workflow';
  import { ApiCreateWorkflowInput } from './api-type';
  import { doc, updateDoc } from 'firebase/firestore';
  import { db } from '@/lib/firebase';
  
/**
 * Crée un nouveau workflow
 * @param {params} - Paramètres de création du workflow
 * @returns {Promise<Workflow>} Les données du workflow créé ou une erreur
 */
export async function createWorkflow(params: CreateWorkflowInput): Promise<Workflow> {
  try {
    const workflowData: ApiCreateWorkflowInput = {
      name: params.name,
      userId: params.userId,
      createdAt: new Date(),
      updatedAt: new Date(),
      responses: params.responses,
      isFullUnlock: false,
    };
    
    const docRef: DocumentReference = await apiCreateWorkflow(workflowData);

    const workflow = {
      id: docRef.id,
      name: params.name,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: params.userId,
      responses: params.responses,
      isFullUnlock: false,
    };

    return toWorkflow(docRef.id, workflow);
  } catch {
    throw new Error('Échec de la création du workflow');
  }
}
  
/**
 * Récupère un workflow par son ID
 * @param {id} - ID du workflow à récupérer
 * @returns {Promise<Workflow | Error>} Les données du workflow ou une erreur
 */
export async function getWorkflowById(id: string): Promise<Workflow | Error> {
  try {
    const workflow: Workflow | null = await apiGetWorkflow(id);
    
    if (!workflow) {
      throw new Error('Workflow non trouvé');
    }
    
    return workflow;
  } catch {
    throw new Error('Échec de la récupération du workflow');
  }
}

/**
 * Met à jour le statut de déverrouillage complet d'un workflow
 * @param workflowId - L'ID du workflow à mettre à jour
 * @returns {Promise<boolean>} - Succès de l'opération
 */
export async function setWorkflowFullUnlock(workflowId: string): Promise<boolean> {
  try {
    const workflowRef = doc(db, 'workflows', workflowId);
    await updateDoc(workflowRef, {
      isFullUnlock: true,
      updatedAt: new Date().toISOString()
    });
    return true;
  } catch {
    return false;
  }
}
