"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavItem } from "@/components/Header";
import UserSection from "@/components/MenuBurger/UserSection";
import Drawer, { useDrawer } from "@/components/Drawer";
import { useAuth } from "@/context/Auth/AuthContext";

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

export default function MenuBurger({
  navItems,
  userSectionItems,
}: {
  navItems: NavItem[];
  userSectionItems: UserSectionItem[];
}) {
  const { isAuthenticated, user, loading } = useAuth();

  return (
    <Drawer>
      <NavigationMenuInner navItems={navItems} />
      <UserSectionWithDrawer
        loading={loading}
        isAuthenticated={isAuthenticated}
        user={user}
        userSectionItems={userSectionItems}
      />
    </Drawer>
  );
}

// Composant interne qui utilise le contexte du drawer
function NavigationMenuInner({ navItems }: { navItems: NavItem[] }) {
  const { setIsOpen } = useDrawer();

  const displayNavigationMenuItems = () => {
    return navItems.map((item: NavItem) => (
      <NavigationMenuItem key={item.title} className="w-full">
        <NavigationMenuLink
          href={`#${item.sectionId}`}
          onClick={() => setIsOpen(false)}
          className="text-lg font-medium text-left"
        >
          {item.title}
        </NavigationMenuLink>
      </NavigationMenuItem>
    ));
  };

  return (
    <NavigationMenu className="flex md:hidden flex-1 justify-start items-start">
      <NavigationMenuList className="flex flex-col gap-6 w-full items-start justify-start">
        {displayNavigationMenuItems()}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

// Composant UserSection avec accès au contexte drawer
function UserSectionWithDrawer({
  loading,
  isAuthenticated,
  user,
  userSectionItems,
}: {
  loading: boolean;
  isAuthenticated: boolean;
  user: User | null;
  userSectionItems: UserSectionItem[];
}) {
  const { setIsOpen } = useDrawer();

  return (
    <div className="mt-auto pt-6 border-t">
      <UserSection
        loading={loading}
        isAuthenticated={isAuthenticated}
        displayName={user?.displayName}
        email={user?.email}
        photoURL={user?.photoURL}
        locale={"fr"}
        setIsOpen={setIsOpen}
        userSectionItems={userSectionItems}
      />
    </div>
  );
}
