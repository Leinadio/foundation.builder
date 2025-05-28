'use client'

import React from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from '@/components/ui/breadcrumb';
import UnlockReportButton from '@/components/UnlockReportButton';
import { useWorkflowActions } from '@/context/WorkflowActions/WorkflowActionsContext';
import { useClientTranslation } from '@/hooks/useClientTranslation';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Workflow } from '@/models/Workflow';

interface WorkflowHeaderProps {
  workflow: Workflow | null;
  onUnlock: () => void;
}

export const WorkflowHeader: React.FC<WorkflowHeaderProps> = ({ workflow, onUnlock }) => {
  const { 
    currentWorkflowId
  } = useWorkflowActions();
  
  const { t } = useClientTranslation('workflowHeader');
  const { toast } = useToast();

  // Fonction pour débloquer toutes les sections
  const handleUnlockAllSections = () => {
    toast({
      title: t('toast.title'),
      description: t('toast.description'),
      className: cn(
        'bg-green-500 text-white top-24 right-0 flex fixed md:max-w-[420px] md:top-24 md:right-4'
      ),
    })
    onUnlock();
  };
  
  return (
    <header className="sticky top-0 flex h-16 shrink-0 items-center gap-2 bg-background md:rounded-t-xl">
      <div className="flex flex-1 items-center gap-2 px-3">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage className="line-clamp-1">
                {t('breadcrumb')}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="ml-auto">
          {workflow && !workflow.isFullUnlock && currentWorkflowId && (
            <UnlockReportButton 
              onUnlock={handleUnlockAllSections} 
              workflowId={currentWorkflowId}
            />
          )}
        </div>
      </div>
    </header>
  )
};

export default WorkflowHeader; 