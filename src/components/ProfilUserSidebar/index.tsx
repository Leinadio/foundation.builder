"use client"

import React from 'react';
import { useAuth } from "@/context/Auth/AuthContext";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { useDropdown } from "@/context/Dropdown/DropdownContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronsUpDown, LogOut, CreditCard } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuGroup, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import { useClientTranslation } from '@/hooks/useClientTranslation';
import { useIsMobile } from '@/hooks/use-mobile';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

/**
 * Composant de profil utilisateur pour la barre latérale
 * 
 * Affiche les informations de l'utilisateur connecté et permet
 * d'accéder à différentes fonctionnalités liées au compte.
 */
export function ProfilUserSidebar() {
  const { setIsDropdownOpen } = useDropdown();
  const { user } = useAuth();
  const isMobile = useIsMobile();
  const router = useRouter();
  const { t, locale } = useClientTranslation('appSidebar');
  const { toast } = useToast();

  const getUserInitials = () => {
    if (!user || !user.displayName) return "U";
    const nameParts = user.displayName.split(" ");
    if (nameParts.length >= 2) {
      return `${nameParts[0][0]}${nameParts[1][0]}`;
    }
    return nameParts[0][0] || "U";
  };

  const handleLogout = async () => {
    try {
      // Supprimer le cookie de session
      await fetch('/api/auth/session', {
        method: 'DELETE',
      });
      
      // Déconnexion de Firebase
      await auth.signOut();
      
      // Afficher un toast de confirmation
      toast({
        description: t('toast.logoutSuccess'),
        className: cn(
          'bg-green-500 text-white top-24 right-0 flex fixed md:max-w-[420px] md:top-24 md:right-4'
        ),
      });
      
      // Rediriger vers la page d'accueil
      router.push(`/${locale}`);
    } catch {
      return;
    }
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu onOpenChange={setIsDropdownOpen}>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton size="lg">
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user?.photoURL || ""} alt={user?.displayName || t('user')} />
                <AvatarFallback className="rounded-lg">{getUserInitials()}</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{user?.displayName || t('user')}</span>
                <span className="truncate text-xs">{user?.email || ""}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          
          <DropdownMenuContent 
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg" 
            align="end" 
            sideOffset={4}
            side={isMobile ? "bottom" : "right"}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user?.photoURL || ""} alt={user?.displayName || t('user')} />
                  <AvatarFallback className="rounded-lg">{getUserInitials()}</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{user?.displayName || t('user')}</span>
                  <span className="truncate text-xs">{user?.email || ""}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => router.push(`/${locale}/app/pricing`)}>
                <CreditCard className="mr-2 h-4 w-4" />
                {t('buyReports')}
              </DropdownMenuItem>
            </DropdownMenuGroup>
            
            <DropdownMenuSeparator />
            
            <DropdownMenuItem onClick={handleLogout} className="text-red-500 hover:text-red-600 focus:text-red-600">
              <LogOut className="mr-2 h-4 w-4" />
              {t('logout')}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
} 