"use client"

import React, { useRef, useEffect, useState } from 'react';
import { useAuth } from '@/context/Auth/AuthContext';
import { useDropdown } from '@/context/Dropdown/DropdownContext';
import { Component } from './component';
import { HoverSidebarProps } from './types';

/**
 * Composant pour afficher une barre latérale qui apparaît au survol
 * 
 * Ce composant permet de masquer la barre latérale hors de l'écran
 * et de l'afficher uniquement lorsque l'utilisateur rapproche sa souris
 * du bord gauche de l'écran.
 */
export const HoverSidebar: React.FC<HoverSidebarProps> = ({ children }) => {
  const [showHoverSidebar, setShowHoverSidebar] = useState(false);
  const sidebarHoverTriggerRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { isAuthenticated } = useAuth();
  const { isDropdownOpen } = useDropdown();

  /**
   * Effet pour ajouter un gestionnaire d'événement mousemove
   * afin de détecter quand la souris est proche du bord gauche
   */
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Montre la sidebar quand la souris est proche du bord gauche (dans les 5 pixels)
      if (isAuthenticated) {
        if (e.clientX < 5) {
          setShowHoverSidebar(true);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isAuthenticated]);

  return (
    <Component
      showHoverSidebar={showHoverSidebar}
      sidebarHoverTriggerRef={sidebarHoverTriggerRef}
      sidebarRef={sidebarRef}
      isAuthenticated={isAuthenticated}
      isDropdownOpen={isDropdownOpen}
      setShowHoverSidebar={setShowHoverSidebar}
    >
      {children}
    </Component>
  );
}; 