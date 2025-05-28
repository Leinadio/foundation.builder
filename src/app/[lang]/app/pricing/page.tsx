import { Pricing } from '@/components/Pricing'
import { SidebarInset } from '@/components/ui/sidebar'
import { AppHeader } from '@/components/AppHeader'
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';

export default async function PricingPage({ params }: { params: Promise<{ lang: string }>}) {
  const { lang } = await params;

  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar lang={lang} />
      <SidebarInset>
        <AppHeader />
        <Pricing lang={lang} />
      </SidebarInset>
    </SidebarProvider>
  )
}
