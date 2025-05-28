"use client"

import React from 'react';
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { AlertProps } from './types';
import { getAlertStyles, getAlertLabels } from './utils';

/**
 * Composant d'alerte pour afficher des messages de notification
 */
export const Component: React.FC<AlertProps> = ({ alert }) => {
  if (!alert) return null;
  
  // Obtenir les styles et labels pour ce type d'alerte
  const styles = getAlertStyles(alert.type);
  const labels = getAlertLabels(alert.type);
  
  // Déterminer l'icône à afficher
  const AlertIcon = alert.type === 'success' ? CheckCircle2 : AlertCircle;
  
  return (
    <div className="fixed top-4 right-4 z-50 max-w-md">
      <div className={`p-4 rounded border ${styles.container}`}>
        <div className="flex items-center">
          <AlertIcon className={`h-4 w-4 mr-2 ${styles.icon}`} />
          <div className="font-semibold">
            {labels.title}
          </div>
        </div>
        <div className="mt-1">
          {alert.message}
        </div>
      </div>
    </div>
  );
}; 