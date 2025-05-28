"use client";

import { useAuth } from "@/context/Auth/AuthContext";
import { SidebarMenuBadge } from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";

export default function AvailableReport() {
  const { user } = useAuth();
  if (!user) {
    return <SidebarMenuBadge><Skeleton className="w-4 h-4" /></SidebarMenuBadge>;
  }
  return (
    <>
      <SidebarMenuBadge className="h-32">{user?.usedReports || 0}/{user?.purchasedReports || 0}</SidebarMenuBadge>
    </>
  )
}