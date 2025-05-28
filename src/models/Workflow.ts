export interface Workflow {
  id: string;
  name: string;
  responses: Array<{
    question: string;
    response: string;
  }>;
  createdAt: Date;
  updatedAt?: Date;
  userId: string;
  isFullUnlock?: boolean;
}

// Fonction pour convertir un document Firestore en objet Workflow
export function toWorkflow(id: string, data: Record<string, unknown>): Workflow {  
  return {
    id,
    name: data.name as string,
    responses: data.responses as Array<{
      question: string;
      response: string;
    }>,
    createdAt: data.createdAt as Date,
    updatedAt: data.updatedAt as Date | undefined,
    userId: data.userId as string,
    isFullUnlock: data.isFullUnlock as boolean | undefined,
  };
}