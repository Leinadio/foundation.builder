import { SectionConfig } from "@/components/common/DynamicRenderer";
import { pageConfig } from "./page-renderer-config";

export type PageConfig = SectionConfig[];

/**
 * Charge la configuration de page depuis une source externe ou utilise la configuration par défaut
 */
export async function loadPageConfig(configId?: string): Promise<PageConfig> {
  if (!configId) {
    return pageConfig;
  }

  try {
    // Exemple d'appel API futur
    // const response = await fetch(`/api/page-configs/${configId}`);
    // if (!response.ok) throw new Error(`Erreur lors du chargement de la configuration ${configId}`);
    // return (await response.json()) as PageConfig;

    return pageConfig;
  } catch (error) {
    console.error(`Erreur lors du chargement de la configuration ${configId}:`, error);
    return pageConfig;
  }
}

/** Version synchrone pour utilisation côté client */
export function getPageConfig(): PageConfig {
  return pageConfig;
}

// La logique de rendu par section est maintenant fusionnée dans DynamicRenderer
