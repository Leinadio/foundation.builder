"use client";

import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { useDrawer } from "./context";

export function Drawer({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen, setIsOpen } = useDrawer();

  return (
    <Sheet
      open={isOpen}
      onOpenChange={setIsOpen}
      aria-describedby="Menu"
    >
      <SheetTrigger className="w-10 md:hidden">
        <Button
          asChild
          type="button"
          variant="ghost"
          size="icon"
          className="flex items-center justify-center cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
        >
          <Menu size={24} className="w-full h-full p-1" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[80%] sm:w-[350px] flex flex-col [&>button:first-of-type]:hidden"
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        <SheetHeader className="flex flex-row justify-end items-center">
          <SheetTitle className="text-left sr-only">
            Menu
          </SheetTitle>
          <SheetDescription className="sr-only">
            Description
          </SheetDescription>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            asChild
            className="w-8 cursor-pointer"
          >
            <X size={6} className="!mt-0" />
          </Button>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
}
