import WorkflowClient from '@/components/WorkflowClient'
import { SidebarProvider } from '@/components/ui/sidebar';
import { SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { ToolSidebar } from '@/components/ToolSidebar';

export default async function WorkflowPage({ params }: { params: Promise<{ id: string, lang: string }>}) {
  const { id, lang } = await params;
  
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar lang={lang} />
      <SidebarInset>
        <WorkflowClient workflowId={id} />
      </SidebarInset>
      <ToolSidebar />
    </SidebarProvider>
  )
}
