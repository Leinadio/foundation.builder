import { db } from '@/lib/firebase';
import { collection, addDoc, getDoc, getDocs, updateDoc, deleteDoc, doc, query, where, DocumentReference, CollectionReference, Query, QuerySnapshot, QueryDocumentSnapshot, DocumentSnapshot } from 'firebase/firestore';
import { Workflow, toWorkflow } from '@/models/Workflow';
import { ApiCreateWorkflowInput } from './api-type';

// Réexporter les types
export * from './type';
// Réexporter les fonctions d'API
export * from './api';

/**
 * Crée un nouveau workflow dans Firestore
 * @param workflowData - Les données du workflow à créer
 * @returns La référence du document créé
 */
export async function apiCreateWorkflow(workflowData: ApiCreateWorkflowInput): Promise<DocumentReference> {
  try {
    const workflowsRef: CollectionReference = collection(db, "workflows");
    const docRef: DocumentReference = await addDoc(workflowsRef, workflowData)
    return docRef;
  } catch (error) {
    throw error;
  }
}

/**
 * Récupère un workflow par son ID
 * @param workflowId - L'ID du workflow à récupérer
 * @returns Le workflow avec ses données
 */
export async function apiGetWorkflow(workflowId: string): Promise<Workflow | null> {
  try {
    const docRef: DocumentReference = doc(db, 'workflows', workflowId);
    const docSnap: DocumentSnapshot = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return toWorkflow(docSnap.id, docSnap.data());
    } else {
      console.log('Aucun workflow trouvé avec cet ID');
      return null;
    }
  } catch (error) {
    throw error;
  }
}

/**
 * Récupère tous les workflows d'un utilisateur
 * @param userId - L'ID de l'utilisateur
 * @returns Liste des workflows de l'utilisateur
 */
export async function apiGetUserWorkflows(userId: string): Promise<Workflow[]> {
  try {
    const workflowsRef: CollectionReference = collection(db, 'workflows');
    const q: Query = query(workflowsRef, where('userId', '==', userId));
    const querySnapshot: QuerySnapshot = await getDocs(q);
    const workflows: Workflow[] = [];
    querySnapshot.forEach((doc: QueryDocumentSnapshot) => {
      workflows.push(toWorkflow(doc.id, doc.data()));
    });
    
    return workflows;
  } catch (error) {
    throw error;
  }
}

/**
 * Met à jour un workflow existant
 * @param workflowId - L'ID du workflow à mettre à jour
 * @param updateData - Les données à mettre à jour
 */
export async function apiUpdateWorkflow(workflowId: string, updateData: Partial<Workflow>) {
  try {
    const workflowRef: DocumentReference = doc(db, 'workflows', workflowId);
    await updateDoc(workflowRef, {
      ...updateData,
      updatedAt: new Date()
    });
  } catch (error) {
    throw error;
  }
}

/**
 * Supprime un workflow
 * @param workflowId - L'ID du workflow à supprimer
 */
export async function apiDeleteWorkflow(workflowId: string) {
  try {
    const workflowRef: DocumentReference = doc(db, 'workflows', workflowId);
    await deleteDoc(workflowRef);
  } catch (error) {
    throw error;
  }
} 