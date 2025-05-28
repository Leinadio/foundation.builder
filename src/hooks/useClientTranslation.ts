"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

// Utilisons un type générique pour le dictionnaire
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Dictionary = Record<string, any>;

/**
 * Hook pour utiliser les traductions dans les composants côté client
 * @param namespace Espace de noms de la traduction à utiliser (ex: "authDialog")
 * @returns Un objet contenant la fonction t pour les traductions et la locale actuelle
 */
export function useClientTranslation(namespace?: string) {
  const [dictionary, setDictionary] = useState<Dictionary>({});
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  // Récupérer la locale à partir de l'URL
  const locale = pathname.split('/')[1] || 'fr';

  useEffect(() => {
    const loadDictionary = async () => {
      setIsLoading(true);
      try {
        // Charger dynamiquement le dictionnaire correspondant à la locale
        const dict = await import(`@/app/[lang]/dictionaries/${locale}.json`);
        setDictionary(dict.default || {});
      } catch {
        // Fallback sur français si la locale n'est pas disponible
        if (locale !== 'fr') {
          const frDict = await import('@/app/[lang]/dictionaries/fr.json');
          setDictionary(frDict.default || {});
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadDictionary();
  }, [locale]);

  /**
   * Fonction pour obtenir une traduction à partir d'une clé
   * @param key Clé de traduction (peut être une clé imbriquée avec des points, ex: "login.title")
   * @param params Paramètres à remplacer dans la chaîne traduite
   * @returns La chaîne traduite
   */
  const t = (key: string, params?: Record<string, string>): string => {
    if (isLoading || !namespace) return '';

    // Obtenir l'espace de noms correspondant
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ns = dictionary[namespace] as Record<string, any>;
    if (!ns) return key;

    // Séparer la clé par les points pour accéder aux propriétés imbriquées
    const keys = key.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = ns;

    // Parcourir les clés pour obtenir la valeur finale
    for (const k of keys) {
      if (!value || typeof value !== 'object' || !(k in value)) return key;
      value = value[k];
    }

    // Si la valeur n'est pas une chaîne, retourner la clé
    if (typeof value !== 'string') return key;

    // Remplacer les paramètres si nécessaire
    if (params) {
      return Object.entries(params).reduce((acc, [param, val]) => {
        return acc.replace(new RegExp(`{${param}}`, 'g'), val);
      }, value);
    }

    return value;
  };

  return {
    t,
    locale,
    isLoading
  };
} 