"use client"

import { useWorkflows } from './hooks';
import { Loading } from './loading';
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar"
import { WorkflowProject } from './type';
import Link from 'next/link';
import type { Dictionary } from '@/app/[lang]/dictionaries';
import { FileText } from 'lucide-react';

interface WorkflowHistorySidebarProps {
  dict: Dictionary;
  lang: string;
}

export const WorkflowHistorySidebar = ({ dict, lang }: WorkflowHistorySidebarProps) => {
  // Utiliser notre hook personnalisé pour récupérer les workflows
  const { userWorkflows, isLoading } = useWorkflows();

  if (isLoading) {
    return (
      <Loading />
    );
  }

  const displayReports = () => {
    if (userWorkflows.length === 0) {
      return (
        <div className="text-sm text-muted-foreground">{dict.appSidebar?.noReports || "Aucun rapport disponible"}</div>
      );
    }
    return userWorkflows.map((item: WorkflowProject) => (
      <SidebarMenuSubItem key={item.id}>
        <SidebarMenuSubButton asChild isActive={item.isActive}>
          <Link href={`/${lang}/app/${item.id}`}>{item.name}</Link>
        </SidebarMenuSubButton>
      </SidebarMenuSubItem>
    ))
  }
  
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton className="text-sm font-bold hover:bg-transparent cursor-default active:bg-transparent">
          <FileText className="h-4 w-4" />
          {dict.appSidebar?.myReports || "Mes rapports"}
        </SidebarMenuButton>
        <SidebarMenuSub>
          {displayReports()}
        </SidebarMenuSub>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};