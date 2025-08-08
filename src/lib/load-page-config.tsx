// Pas d'usage direct de React ici
import { SectionConfig } from "@/components/common/DynamicRenderer";
import defaultConfig from "./page-config.json";

export type PageConfig = SectionConfig[];

/**
 * Charge la configuration de page depuis une source externe ou utilise la configuration par défaut
 */
export async function loadPageConfig(configId?: string): Promise<PageConfig> {
  if (!configId) {
    return defaultConfig as PageConfig;
  }

  try {
    // Exemple d'appel API futur
    // const response = await fetch(`/api/page-configs/${configId}`);
    // if (!response.ok) throw new Error(`Erreur lors du chargement de la configuration ${configId}`);
    // return (await response.json()) as PageConfig;

    return defaultConfig as PageConfig;
  } catch (error) {
    console.error(`Erreur lors du chargement de la configuration ${configId}:`, error);
    return defaultConfig as PageConfig;
  }
}

/** Version synchrone pour utilisation côté client */
export function getPageConfig(): PageConfig {
  return defaultConfig as PageConfig;
}

// La logique de rendu par section est maintenant fusionnée dans DynamicRenderer
