import { Stats8, Stats8Props } from "@/blocks/landing-page/stats/ui";

export type StatsContainerProps = Stats8Props;

export function StatsContainer(props: StatsContainerProps) {
  return <Stats8 {...props} />;
}
