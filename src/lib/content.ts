import pageConfig from "./page-config.json";

type ComponentConfig = {
  component: string;
  props: Record<string, unknown>;
  id?: string;
};

type SectionConfig = {
  type: string;
  components: ComponentConfig[];
};

type PageConfig = SectionConfig[];

export function getContent(path: string, fallback?: string): string {
  const keys = path.split(".");
  let current: unknown = pageConfig;

  for (const key of keys) {
    if (current && typeof current === "object" && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return fallback || path;
    }
  }

  if (typeof current === "string") {
    return current;
  }

  return fallback || path;
}

// Fonction spécifique pour récupérer les props d'un composant
export function getComponentProps(componentName: string, sectionType?: string): Record<string, unknown> {
  const config = pageConfig as PageConfig;

  for (const section of config) {
    if (sectionType && section.type !== sectionType) {
      continue;
    }

    for (const component of section.components) {
      if (component.component === componentName) {
        return component.props;
      }
    }
  }

  return {};
}

// Fonction pour récupérer le contenu d'un composant spécifique
export function getComponentContent(componentName: string, propName: string, fallback?: string): unknown {
  const props = getComponentProps(componentName);
  const value = props[propName];

  if (!value) {
    return fallback || propName;
  }

  return value;
}
