"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export interface MenuItem {
  title: string;
  sectionId?: string;
  className?: string;
}

interface NavigationMenuProps {
  menuItems: MenuItem[];
  className?: string;
  onItemClick?: () => void;
  variant?: "desktop" | "mobile";
  avatarDropdown?: React.ReactNode;
}

export function NavMenu({
  menuItems,
  onItemClick,
  avatarDropdown,
}: NavigationMenuProps) {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {menuItems.map((item: MenuItem) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
              href={`#${item.sectionId}`}
              onClick={onItemClick}
              className={cn(
                navigationMenuTriggerStyle(),
                "text-md"
              )}
            >
              {item.title}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
        {avatarDropdown && (
          <NavigationMenuItem className="w-full md:w-auto">
            {avatarDropdown}
          </NavigationMenuItem>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
