import { Faq, FaqProps } from "@/blocks/landing-page/faq/ui";

export type FaqContainerProps = FaqProps;

export function FaqContainer(props: FaqProps) {
  return <Faq {...props} />;
}
