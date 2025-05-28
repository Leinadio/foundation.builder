import React from "react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useDictionary } from "@/context/Dictionnary/DictionnaryContext";

interface LogoutButtonProps {
  onClick: () => Promise<void>;
}

export default function LogoutButton({
  onClick,
}: LogoutButtonProps) {
  const { dictionary } = useDictionary();

  return (
    <Button
      variant="ghost"
      className="flex items-start justify-start p-2 w-full text-red-600 hover:bg-red-50 rounded-md"
      onClick={onClick}
    >
      <LogOut className="mr-2 h-5 w-5" />
      {dictionary.appSidebar?.logout}
    </Button>
  );
}
