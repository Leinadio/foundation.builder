import { ComponentConfig } from "@/components/common/DynamicRenderer";
import defaultConfig from "./page-config.json";

export type SectionConfig = {
  type: string;
  components: ComponentConfig[];
};

export type PageConfig = SectionConfig[];

/**
 * Charge la configuration de page depuis une source externe ou utilise la configuration par défaut
 *
 * @param configId - Identifiant de la configuration à charger (optionnel)
 * @returns La configuration de page
 */
export async function loadPageConfig(configId?: string): Promise<PageConfig> {
  // Si aucun configId n'est fourni, retourner la configuration par défaut
  if (!configId) {
    return defaultConfig as PageConfig;
  }

  try {
    // Ici, vous pourriez implémenter une logique pour charger depuis une API
    // Par exemple:
    // const response = await fetch(`/api/page-configs/${configId}`);
    // if (!response.ok) throw new Error(`Erreur lors du chargement de la configuration ${configId}`);
    // return await response.json();

    // Pour l'instant, on retourne simplement la configuration par défaut
    return defaultConfig as PageConfig;
  } catch (error) {
    console.error(`Erreur lors du chargement de la configuration ${configId}:`, error);
    // En cas d'erreur, on retourne la configuration par défaut
    return defaultConfig as PageConfig;
  }
}

/**
 * Version synchrone pour utilisation côté client
 */
export function getPageConfig(): PageConfig {
  return defaultConfig as PageConfig;
}
