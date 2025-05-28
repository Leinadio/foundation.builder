/**
 * Props pour le composant AuthDialog
 */
export interface AuthDialogProps {
  /**
   * Indique si la boîte de dialogue est ouverte
   */
  isOpen: boolean;
  
  /**
   * Fonction appelée lors du changement d'état de la boîte de dialogue
   */
  onOpenChange: (open: boolean) => void;
}
