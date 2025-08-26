import { WithWithout, WithWithoutProps } from "@/blocks/landing-page/with-without/ui";

export type WithWithoutContainerProps = WithWithoutProps;

export function WithWithoutContainer(props: WithWithoutProps) {
  return <WithWithout {...props} />;
}
