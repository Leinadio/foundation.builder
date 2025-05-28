'use client';

import { createContext, useContext } from 'react';

export interface WorkflowActionsContextType {
  currentWorkflowId: string | null;
  setCurrentWorkflowId: (id: string) => void;
  activeSection: string | null;
  setActiveSection: (section: string) => void;
  currentLoadingIndex: number;
  setCurrentLoadingIndex: (index: number) => void;
}

const defaultContext: WorkflowActionsContextType = {
  currentWorkflowId: null,
  setCurrentWorkflowId: () => { console.warn('Context non initialisé'); },
  activeSection: null,
  setActiveSection: () => { console.warn('Context non initialisé'); },
  currentLoadingIndex: 0,
  setCurrentLoadingIndex: () => { console.warn('Context non initialisé'); },
};

export const WorkflowActionsContext = createContext<WorkflowActionsContextType>(defaultContext);
export const useWorkflowActions = () => useContext(WorkflowActionsContext); 