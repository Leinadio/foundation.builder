import { User } from 'firebase/auth';

/**
 * Props pour le composant visuel ProfilUserSidebar
 */
export interface ProfilUserSidebarComponentProps {
  /**
   * Utilisateur actuellement connecté
   */
  user: User | null;
  
  /**
   * Fonction pour obtenir les initiales de l'utilisateur
   */
  getUserInitials: () => string;
  
  /**
   * Fonction pour naviguer vers la page de profil
   */
  navigateToProfile: () => void;
  
  /**
   * Fonction pour naviguer vers la page d'abonnement
   */
  // navigateToSubscription: () => void;
  
  /**
   * Fonction pour gérer la déconnexion
   */
  handleLogout: () => Promise<void>;
  
  /**
   * Fonction pour gérer l'ouverture/fermeture du menu déroulant
   */
  setIsDropdownOpen: (isOpen: boolean) => void;
} 