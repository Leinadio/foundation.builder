import FAQ from '@/components/FAQ';
import { getDictionary } from '@/app/[lang]/dictionaries';
import { SidebarInset } from '@/components/ui/sidebar'
import { AppHeader } from '@/components/AppHeader'
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';

export default async function FaqPage({ params }: { params: Promise<{ lang: string }>}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar lang={lang} />
      <SidebarInset>
        <AppHeader />
        <FAQ dict={dict} />
      </SidebarInset>
    </SidebarProvider>
  )
}
