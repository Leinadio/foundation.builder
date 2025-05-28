import MobileMenu from "@/components/molecules/MobileMenu";
import { AvatarDropdown } from "@/components/molecules/AvatarDropdown";
import Logo from "@/components/atoms/Logo";
import {
  NavMenu,
  MenuItem,
} from "@/components/molecules/NavMenu";
import { DrawerProvider } from "@/components/Drawer/context";
import { Drawer } from "@/components/Drawer";

export interface UserSectionItem {
  title: string;
  href: string;
  icon: React.ReactNode;
}

export function Header({
  logoUrl,
  menuItems,
  userSectionItems,
}: {
  logoUrl: string;
  menuItems: MenuItem[];
  userSectionItems?: UserSectionItem[];
}) {
  return (
    <header className="flex justify-between items-center px-4 md:px-5 py-4">
      <Logo logoUrl={logoUrl} />
      <NavMenu
        menuItems={menuItems}
        className="hidden md:flex"
        avatarDropdown={
          <AvatarDropdown
            userSectionItems={userSectionItems}
          />
        }
      />
      <DrawerProvider>
        <Drawer>
          <MobileMenu
            menuItems={menuItems}
            userSectionItems={userSectionItems}
          />
        </Drawer>
      </DrawerProvider>
    </header>
  );
}
