import { AlertInfo } from '@/app/[lang]/page';
import { AlertStyles } from '../types';

/**
 * Obtient les styles pour un type d'alerte donné
 * 
 * @param type - Le type d'alerte
 * @returns Les styles pour le type d'alerte
 */
export function getAlertStyles(type: AlertInfo['type']): AlertStyles {
  switch (type) {
    case 'success':
      return {
        container: 'border-green-500 bg-green-50 text-green-700',
        icon: 'text-green-600'
      };
    case 'error':
      return {
        container: 'border-red-500 bg-red-50 text-red-700',
        icon: 'text-red-600'
      };
    default:
      // Information ou autre type
      return {
        container: 'border-blue-500 bg-blue-50 text-blue-700',
        icon: 'text-blue-600'
      };
  }
} 