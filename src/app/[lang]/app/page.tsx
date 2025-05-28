import { HomeContent } from "@/components/HomeContent";
import { SidebarInset } from "@/components/ui/sidebar";
import { AppHeader } from "@/components/AppHeader";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
export default async function AppPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar lang={lang} />
      <SidebarInset>
        <AppHeader />
        <HomeContent />
      </SidebarInset>
    </SidebarProvider>
  )
}
