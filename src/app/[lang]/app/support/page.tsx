import Support from '@/components/Support'
import { SidebarInset } from '@/components/ui/sidebar'
import { AppHeader } from '@/components/AppHeader'
import { getDictionary } from '@/app/[lang]/dictionaries';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';

export default async function SupportPage({ params }: { params: Promise<{ lang: string }>}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar lang={lang} />
      <SidebarInset>
        <AppHeader />
        <Support dict={dict} />
      </SidebarInset>
    </SidebarProvider>
  )
}
