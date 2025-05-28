import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc, updateDoc, arrayUnion, increment } from 'firebase/firestore';

/**
 * Interface pour un workflow stocké dans la collection user
 */
export interface UserWorkflow {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Type pour les données utilisateur supplémentaires
 */
export interface UserData {
  displayName?: string;
  email?: string;
  emailVerified?: boolean;
  photoURL?: string;
  purchasedReports?: number;
  usedReports?: number;
  uid?: string;
  workflows?: UserWorkflow[];
}

/**
 * Crée un nouvel utilisateur avec un tableau de workflows vide et initialise le compteur de rapports
 * @param {userId} - L'ID de l'utilisateur Firebase
 * @param {userData} - Données supplémentaires facultatives de l'utilisateur
 * @returns true si la création a réussi, false sinon
 */
export async function createUserWithEmptyWorkflows(userId: string, userData: UserData = {}): Promise<boolean> {
  try {
    const userRef = doc(db, 'users', userId);
    
    // Vérifier si l'utilisateur existe déjà
    const userDoc = await getDoc(userRef);
    if (userDoc.exists()) {
      console.log('L\'utilisateur existe déjà dans la collection');
      return true;
    }
    
    // Créer un nouvel utilisateur avec un tableau workflows vide et initialiser le compteur de rapports
    await setDoc(userRef, {
      ...userData,
      workflows: [],
      usedReports: 0,
      purchasedReports: 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
    
    console.log('Collection utilisateur créée avec succès');
    return true;
  } catch {
    return false;
  }
}

export async function updateUserWorkflows(userId: string, workflow: UserWorkflow): Promise<void> {
  const userRef = doc(db, 'users', userId);
  await updateDoc(userRef, {
    workflows: arrayUnion(workflow),
    updatedAt: new Date().toISOString()
  });
}

export async function getUser(userId: string): Promise<UserData | undefined> {
  const userRef = doc(db, 'users', userId);
  const userDoc = await getDoc(userRef);
  return userDoc.data() as UserData | undefined;
}

/**
 * Récupère les workflows d'un utilisateur depuis la collection user
 * @param {userId} - L'ID de l'utilisateur
 * @returns Liste des workflows de l'utilisateur, triés par date de création décroissante
 */
export async function getUserWorkflowsFromUser(userId: string): Promise<UserWorkflow[]> {
  try {
    const userRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userRef);
    
    if (!userDoc.exists()) {
      console.log('Aucun utilisateur trouvé avec cet ID');
      return [];
    }
    
    const userData = userDoc.data();
    const workflows = userData.workflows || [];
    
    // Trier les workflows par date de création (du plus récent au plus ancien)
    return workflows.sort((a: UserWorkflow, b: UserWorkflow) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return dateB.getTime() - dateA.getTime();
    });
  } catch {
    return [];
  }
}

/**
 * Récupère le nombre de rapports disponibles pour un utilisateur
 * @param {userId} - L'ID de l'utilisateur
 * @returns Le nombre de rapports disponibles
 */
export async function getUserpurchasedReports(userId: string): Promise<number> {
  try {
    const userRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userRef);
    
    if (!userDoc.exists()) {
      console.log('Aucun utilisateur trouvé avec cet ID');
      return 0;
    }
    
    const userData = userDoc.data();
    return userData.purchasedReports || 0;
  } catch {
    return 0;
  }
}

/**
 * Incrémente le compteur de rapports utilisés pour un utilisateur
 * @param {userId} - L'ID de l'utilisateur
 * @returns true si la mise à jour a réussi, false sinon
 */
export async function incrementUsedReports(userId: string): Promise<boolean> {
  try {
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, {
      usedReports: increment(1),
      updatedAt: new Date().toISOString()
    });
    return true;
  } catch {
    return false;
  }
}
