import { HowItWork, HowItWorkProps } from "@/blocks/landing-page/how-it-work/ui";

export type HowItWorkContainerProps = HowItWorkProps;

export function HowItWorkContainer(props: HowItWorkProps) {
  return <HowItWork {...props} />;
}
