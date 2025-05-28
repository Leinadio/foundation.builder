"use client"

import React from 'react';
import { HoverSidebarComponentProps } from './types';

/**
 * Composant visuel de la barre latérale avec détection de survol
 */
export const Component: React.FC<HoverSidebarComponentProps> = ({
  children,
  showHoverSidebar,
  sidebarHoverTriggerRef,
  sidebarRef,
  isAuthenticated,
  isDropdownOpen,
  setShowHoverSidebar
}) => {
  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      {/* Zone de détection pour le survol */}
      <div 
        ref={sidebarHoverTriggerRef}
        className="fixed left-0 top-0 w-5 h-full z-40 hover:bg-gray-200 hover:bg-opacity-20 transition-colors"
        style={{ opacity: isAuthenticated ? 0.1 : 0 }}
        onMouseEnter={() => isAuthenticated && setShowHoverSidebar(true)}
      />
      
      {/* Sidebar qui apparaît au survol */}
      <div 
        ref={sidebarRef}
        className={`fixed left-0 top-0 h-full z-50 transition-transform duration-300 ease-in-out ${
          showHoverSidebar ? 'translate-x-0' : '-translate-x-full'
        }`}
        onMouseLeave={() => !isDropdownOpen && setShowHoverSidebar(false)}
      >
        {children}
      </div>
    </>
  );
}; 