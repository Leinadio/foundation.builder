import { AlertInfo } from '@/app/[lang]/page';

/**
 * Props pour le composant Alert
 */
export interface AlertProps {
  /**
   * Information d'alerte à afficher, ou null si aucune alerte
   */
  alert: AlertInfo | null;
}

/**
 * Styles pour les différents types d'alertes
 */
export interface AlertStyles {
  /**
   * Classes CSS pour le conteneur
   */
  container: string;
  
  /**
   * Classes CSS pour l'icône
   */
  icon: string;
}

/**
 * Textes utilisés dans le composant Alert
 */
export interface AlertLabels {
  /**
   * Titre pour chaque type d'alerte
   */
  title: string;
} 