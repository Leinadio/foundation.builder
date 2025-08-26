import { FeatureBentoGrid, FeatureBentoGridProps } from "@/blocks/landing-page/bento-grid/ui";

export type FeatureBentoGridContainerProps = FeatureBentoGridProps;

export function BentoGridContainer(props: FeatureBentoGridProps) {
  return <FeatureBentoGrid {...props} />;
}
