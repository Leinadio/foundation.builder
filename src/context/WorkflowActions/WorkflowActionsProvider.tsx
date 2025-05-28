'use client';

import React, { ReactNode, useState } from 'react';
import { WorkflowActionsContext, WorkflowActionsContextType } from './WorkflowActionsContext';

// Props pour le provider
interface WorkflowActionsProviderProps {
  children: ReactNode;
}

// Provider du context
export const WorkflowActionsProvider: React.FC<WorkflowActionsProviderProps> = ({ 
  children, 
}) => {
  const [currentWorkflowId, setCurrentWorkflowId] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [currentLoadingIndex, setCurrentLoadingIndex] = useState<number>(0);

  // Valeur à fournir via le context
  const value: WorkflowActionsContextType = {
    currentWorkflowId,
    setCurrentWorkflowId,
    activeSection,
    setActiveSection,
    currentLoadingIndex,
    setCurrentLoadingIndex,
  };

  return (
    <WorkflowActionsContext.Provider value={value}>
      {children}
    </WorkflowActionsContext.Provider>
  );
}; 