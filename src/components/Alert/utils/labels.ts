import { AlertInfo } from '@/app/[lang]/page';
import { AlertLabels } from '../types';

/**
 * Obtient le label pour un type d'alerte donné
 * 
 * @param type - Le type d'alerte
 * @returns Le label pour le type d'alerte
 */
export function getAlertLabels(type: AlertInfo['type']): AlertLabels {
  switch (type) {
    case 'success':
      return {
        title: 'Succès'
      };
    case 'error':
      return {
        title: 'Erreur'
      };
    default:
      // Information ou autre type
      return {
        title: 'Information'
      };
  }
} 