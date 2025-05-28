import { createContext, useContext } from "react";

// Créer un contexte pour gérer l'état du dropdown
export const DropdownContext = createContext<{
  isDropdownOpen: boolean;
  setIsDropdownOpen: (open: boolean) => void;
}>({
  isDropdownOpen: false,
  setIsDropdownOpen: () => {},
});

export const useDropdown = () => useContext(DropdownContext); 
