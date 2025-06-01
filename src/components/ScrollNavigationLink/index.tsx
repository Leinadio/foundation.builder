"use client";

import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

interface ScrollNavigationLinkProps {
  sectionId: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function ScrollNavigationLink({
  sectionId,
  children,
  className,
  onClick,
}: ScrollNavigationLinkProps) {
  const navigationMenuTriggerStyle = cva(
    "cursor-pointer group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-2 md:px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-active:bg-accent/50 data-[state=open]:bg-accent/50"
  );

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Mettre à jour l'URL avec l'ancre
    window.history.pushState({}, "", `#${sectionId}`);

    // Faire défiler vers la section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    // Appeler le callback onClick si fourni
    if (onClick) onClick();
  };

  return (
    <NavigationMenuLink
      onClick={handleClick}
      className={cn(navigationMenuTriggerStyle(), className)}
    >
      {children}
    </NavigationMenuLink>
  );
}
