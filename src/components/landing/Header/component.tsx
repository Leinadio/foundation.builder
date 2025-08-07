"use client";

import { Button } from "@/components/ui/button";
import { AuthDialog } from "@/components/common/AuthDialog";
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

const navigationLinks: NavLink[] = [
  { id: "probleme", label: "Problème", href: "#probleme" },
  { id: "solution", label: "Solution", href: "#solution" },
  { id: "fonctionnement", label: "Comment ça marche", href: "#fonctionnement" },
  { id: "fonctionnalites", label: "Fonctionnalités", href: "#fonctionnalites" },
  { id: "tarifs", label: "Tarifs", href: "#tarifs" },
  { id: "faq", label: "FAQ", href: "#faq" },
];

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

function NavigationLinks() {
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
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {navigationLinks.map((link) => (
          <NavigationMenuItem key={link.id}>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), "cursor-pointer")}
              onClick={() => handleScrollToSection(link.href)}
            >
              {link.label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function AuthButtons() {
  return (
    <div className="flex items-center space-x-4">
      <AuthDialog>
        <Button variant="outline" size="sm">
          Se connecter
        </Button>
      </AuthDialog>
      <AuthDialog>
        <Button size="sm">Commencer</Button>
      </AuthDialog>
    </div>
  );
}

function MobileMenu() {
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
            <AuthDialog>
              <Button variant="outline" className="w-full justify-start">
                Se connecter
              </Button>
            </AuthDialog>
            <AuthDialog>
              <Button className="w-full justify-start">Commencer</Button>
            </AuthDialog>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function Component() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled ? "bg-background backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Logo />
        <NavigationLinks />
        <div className="hidden md:block">
          <AuthButtons />
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
