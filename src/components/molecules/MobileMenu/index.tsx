"use client";

import { useAuth } from "@/context/Auth/AuthContext";
import { useDrawer } from "@/components/Drawer/context";
import {
  NavMenu,
  MenuItem,
} from "@/components/molecules/NavMenu";
import UserSection from "@/components/organisms/UserSection";

interface UserSectionItem {
  title: string;
  href: string;
  icon: React.ReactNode;
}

interface MobileMenuProps {
  menuItems: MenuItem[];
  userSectionItems?: UserSectionItem[];
}

export default function MobileMenu({
  menuItems,
  userSectionItems,
}: MobileMenuProps) {
  const { isAuthenticated, user, loading } = useAuth();
  const { setIsOpen } = useDrawer();

  return (
    <>
      <NavMenu
        menuItems={menuItems}
        variant="mobile"
        onItemClick={() => setIsOpen(false)}
      />
      <UserSection
        loading={loading}
        isAuthenticated={isAuthenticated}
        user={user}
        userSectionItems={userSectionItems}
      />
    </>
  );
}
