import { ReactNode } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { getChildrenByType } from "@/lib/get-children-by-type";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface HeaderProps {
  navigationLinks: NavLink[];
  children: ReactNode;
}

interface HeaderAuthSectionProps {
  children: ReactNode;
}

interface HeaderAuthSectionMobileProps {
  children: ReactNode;
}

function HeaderAuthSection({ children }: HeaderAuthSectionProps) {
  return <>{children}</>;
}

function HeaderAuthSectionMobile({ children }: HeaderAuthSectionMobileProps) {
  return <>{children}</>;
}

export function Header({ navigationLinks, children }: HeaderProps) {
  const authSection = getChildrenByType<HeaderAuthSectionProps>(children, HeaderAuthSection);
  const authSectionMobile = getChildrenByType<HeaderAuthSectionMobileProps>(children, HeaderAuthSectionMobile);

  return (
    <header className="top-0 left-0 right-0 z-50 transition-all duration-300 bg-background py-2">
      <div className="container max-w-6xl mx-auto px-4 lg:px-0 flex items-center justify-between transition-all duration-300 h-16">
        <div className="transition-transform duration-300">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">F</span>
            </div>
            <span className="font-bold text-xl text-foreground">Foundation Builder</span>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-end flex-1 gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              {navigationLinks.map((link) => (
                <NavigationMenuItem key={link.id}>
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(), "cursor-pointer", "bg-background text-foreground")}
                    href={link.href}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <AnimatedThemeToggler />

          <div className="flex items-center gap-4">{authSection?.props.children}</div>
        </div>

        <div className="md:hidden ml-auto">
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm" className="p-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              {/* <SheetHeader>
                <SheetTitle className="text-left">Navigation</SheetTitle>
                <SheetDescription className="text-left">Accédez rapidement aux différentes sections</SheetDescription>
              </SheetHeader> */}

              <nav className="flex flex-col space-y-4 mt-8">
                {navigationLinks.map((link) => (
                  <SheetClose asChild key={link.id}>
                    <Button variant="ghost" className="justify-start text-left h-auto p-3" asChild>
                      <a href={link.href}>{link.label}</a>
                    </Button>
                  </SheetClose>
                ))}
              </nav>

              <div className="mt-8 pt-8 border-t border-border space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Authentification
                </Badge>
                <div className="flex flex-col space-y-3">{authSectionMobile?.props.children}</div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

Header.AuthSection = HeaderAuthSection;
Header.AuthSectionMobile = HeaderAuthSectionMobile;
