import { Stats8 } from "@/blocks/landing-page/stats/ui";

export interface StatsContainerProps {
  heading?: string;
  description?: string;
  link?: {
    text: string;
    url: string;
  };
  stats?: Array<{
    id: string;
    value: string;
    label: string;
  }>;
}

export function StatsContainer(props: StatsContainerProps) {
  return <Stats8 {...props} />;
}
