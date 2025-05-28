"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Type du contexte pour le Drawer
interface DrawerContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Valeurs par défaut du contexte
const defaultContextValue: DrawerContextType = {
  isOpen: false,
  setIsOpen: () => {},
};

// Création du contexte
export const DrawerContext = createContext<DrawerContextType>(defaultContextValue);

// Hook personnalisé pour utiliser le contexte du drawer
export const useDrawer = () => useContext(DrawerContext);

// Provider du contexte pour le Drawer
export function DrawerProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return <DrawerContext.Provider value={{ isOpen, setIsOpen }}>{children}</DrawerContext.Provider>;
}
