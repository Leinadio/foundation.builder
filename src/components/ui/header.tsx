"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface HeaderProps {
  navigationLinks: NavLink[];
}

function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
        <span className="text-primary-foreground font-bold text-sm">F</span>
      </div>
      <span className="font-bold text-xl text-foreground">Foundation Builder</span>
    </div>
  );
}

function NavigationLinks({ navigationLinks }: { navigationLinks: NavLink[] }) {
  const handleScrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (!element) {
      return;
    }

    const headerHeight = 80; // Hauteur approximative du header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="hidden md:flex items-center justify-end flex-1 gap-4">
      <NavigationMenu>
        <NavigationMenuList>
          {navigationLinks.map((link) => (
            <NavigationMenuItem key={link.id}>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), "cursor-pointer", "bg-background text-foreground")}
                onClick={() => handleScrollToSection(link.href)}
              >
                {link.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm">
          Se connecter
        </Button>

        <Button size="sm">Commencer</Button>
      </div>
    </div>
  );
}

function MobileMenu({ navigationLinks }: { navigationLinks: NavLink[] }) {
  const handleScrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (!element) {
      return;
    }

    const headerHeight = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="sm" className="p-2">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Ouvrir le menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-left">Navigation</SheetTitle>
          <SheetDescription className="text-left">Accédez rapidement aux différentes sections</SheetDescription>
        </SheetHeader>

        <nav className="flex flex-col space-y-4 mt-8">
          {navigationLinks.map((link) => (
            <SheetClose asChild key={link.id}>
              <Button
                variant="ghost"
                className="justify-start text-left h-auto p-3"
                onClick={() => handleScrollToSection(link.href)}
              >
                {link.label}
              </Button>
            </SheetClose>
          ))}
        </nav>

        <div className="mt-8 pt-8 border-t border-border space-y-4">
          <Badge variant="secondary" className="w-fit">
            Authentification
          </Badge>
          <div className="flex flex-col space-y-3">
            <Button variant="outline" className="w-full justify-start">
              Se connecter
            </Button>

            <Button className="w-full justify-start">Commencer</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function Header({ navigationLinks }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10 && currentScrollY > lastScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background ${
        isScrolled ? "backdrop-blur-md border-b border-border shadow-sm py-0" : "py-2"
      }`}
    >
      <div
        className={`container max-w-6xl mx-auto px-4 lg:px-0 flex items-center justify-between transition-all duration-300 h-16`}
      >
        <div className="transition-transform duration-300">
          <Logo />
        </div>
        <div className={`transition-all duration-300`}>
          <NavigationLinks navigationLinks={navigationLinks} />
        </div>
        <div className="md:hidden ml-auto">
          <MobileMenu navigationLinks={navigationLinks} />
        </div>
      </div>
    </header>
  );
}
