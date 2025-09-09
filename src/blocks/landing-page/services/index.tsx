import { Services, ServicesProps } from "@/blocks/landing-page/services/ui";

export type ServicesContainerProps = ServicesProps;

export function ServicesContainer(props: ServicesProps) {
  return <Services {...props} />;
}
