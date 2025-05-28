'use client'

import React from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { useClientTranslation } from '@/hooks/useClientTranslation';

export const AppHeader: React.FC = () => {
  
  const { t } = useClientTranslation('workflowHeader');
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
      </div>
    </header>
  )
};

export default AppHeader; 