import { WorkflowActionsProvider } from "@/context/WorkflowActions/WorkflowActionsProvider";
import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
export default async function RootLayout({
  children,

}: Readonly<{
  children: React.ReactNode;
}>) {

  const user = await getCurrentUser();
  if (!user) {
    redirect('/');
  }
  
  return (
    <WorkflowActionsProvider>
      {children}
    </WorkflowActionsProvider>
  );
}
