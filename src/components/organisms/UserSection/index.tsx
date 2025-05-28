"use client";

import React from "react";
import { useDrawer } from "@/components/Drawer/context";
import { ButtonAuth } from "@/components/AuthDialog/button-auth";
import UserSectionSkeleton from "@/components/atoms/UserSectionSkeleton";
import UserSectionHeader from "@/components/molecules/UserSectionHeader";
import UserSectionItems from "@/components/molecules/UserSectionItems";
import LogoutButton from "@/components/atoms/LogoutButton";

interface User {
  displayName?: string;
  email?: string;
  photoURL?: string;
}

interface UserSectionItem {
  title: string;
  href: string;
  icon: React.ReactNode;
}

interface UserSectionProps {
  loading: boolean;
  isAuthenticated: boolean;
  user: User | null;
  userSectionItems?: UserSectionItem[];
}

export default function UserSection({
  loading,
  isAuthenticated,
  user,
  userSectionItems,
}: UserSectionProps) {
  const { setIsOpen } = useDrawer();

  if (loading) {
    return <UserSectionSkeleton />;
  }

  if (!isAuthenticated) {
    return <ButtonAuth lang="fr">Login</ButtonAuth>;
  }

  const handleLogout = async () => {
    await fetch("/api/auth/session", {
      method: "DELETE",
    });
    setIsOpen(false);
  };

  return (
    <div className="mt-auto pt-6 border-t">
      <div className="space-y-4">
        <UserSectionHeader user={user} />
        <UserSectionItems
          items={userSectionItems || []}
          onItemClick={() => setIsOpen(false)}
        />
        <LogoutButton onClick={handleLogout} />
      </div>
    </div>
  );
}
