"use client"

import { Component } from './component';
import { AlertProps } from './types';

/**
 * Composant d'alerte pour afficher des messages de notification
 */
export const Alert: React.FC<AlertProps> = (props) => {
  return <Component {...props} />;
}; 