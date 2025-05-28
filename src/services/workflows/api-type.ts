export interface ApiCreateWorkflowInput {
  name: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  responses: Array<{
    question: string;
    response: string;
  }>;
  isFullUnlock: boolean;
}
