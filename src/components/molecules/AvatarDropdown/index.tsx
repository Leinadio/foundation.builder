"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { CircleChevronRight, LogOut } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { ButtonAuth } from "@/components/AuthDialog/button-auth";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { auth } from "@/lib/firebase";
import { useClientTranslation } from "@/hooks/useClientTranslation";
import { useDictionary } from "@/context/Dictionnary/DictionnaryContext";
import { useAuth } from "@/context/Auth/AuthContext";
import UserAvatar from "@/components/atoms/UserAvatar";

interface UserSectionItem {
  title: string;
  href: string;
  icon: React.ReactNode;
}

interface AvatarDropdownProps {
  userSectionItems?: UserSectionItem[];
}

export const AvatarDropdown: React.FC<
  AvatarDropdownProps
> = ({ userSectionItems }: AvatarDropdownProps) => {
  const { locale } = useClientTranslation("appSidebar");
  const { dictionary } = useDictionary();
  const { isAuthenticated, loading, user } = useAuth();
  const { photoURL, displayName, email } = user || {};

  if (loading) {
    return (
      <div className="flex items-center space-x-4">
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-10 w-24" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <ButtonAuth lang={locale}>
        Commencer
        <CircleChevronRight className="w-4 h-4" />
      </ButtonAuth>
    );
  }

  const displayUserSectionItems = () => {
    if (
      !userSectionItems ||
      userSectionItems.length === 0
    ) {
      return null;
    }
    return userSectionItems.map((item: UserSectionItem) => (
      <div key={item.title}>
        <Link key={item.title} href={item.href}>
          <DropdownMenuItem>
            {item.icon}
            {item.title}
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
      </div>
    ));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="rounded-full px-0 md:px-4"
        >
          <UserAvatar
            photoURL={photoURL}
            displayName={displayName}
          />
          <span>{displayName || "Mon compte"}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {displayName}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {displayUserSectionItems()}
        <DropdownMenuItem
          className="text-red-600 focus:text-red-600"
          onClick={async () => {
            // Supprimer le cookie de session
            await fetch("/api/auth/session", {
              method: "DELETE",
            });

            // Déconnexion de Firebase
            await auth.signOut();
          }}
        >
          <LogOut className="mr-2 h-4 w-4" />
          {dictionary.appSidebar?.logout}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
