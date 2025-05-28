/**
 * Props pour le composant HoverSidebar
 */
export interface HoverSidebarProps {
  /**
   * Contenu à afficher dans la barre latérale
   */
  children: React.ReactNode;
}

/**
 * Props pour le composant visuel HoverSidebar
 */
export interface HoverSidebarComponentProps extends HoverSidebarProps {
  /**
   * Indique si la barre latérale doit être affichée
   */
  showHoverSidebar: boolean;
  
  /**
   * Référence vers l'élément déclencheur de survol
   */
  sidebarHoverTriggerRef: React.RefObject<HTMLDivElement | null>;
  
  /**
   * Référence vers l'élément de la barre latérale
   */
  sidebarRef: React.RefObject<HTMLDivElement | null>;
  
  /**
   * Indique si l'utilisateur est authentifié
   */
  isAuthenticated: boolean;
  
  /**
   * Indique si un menu déroulant est ouvert
   */
  isDropdownOpen: boolean;
  
  /**
   * Fonction pour définir l'état d'affichage de la barre latérale
   */
  setShowHoverSidebar: (show: boolean) => void;
} 