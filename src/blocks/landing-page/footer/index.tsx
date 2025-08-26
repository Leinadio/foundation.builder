import { Footer, FooterProps } from "@/blocks/landing-page/footer/ui";

export type FooterContainerProps = FooterProps;

export function FooterContainer(props: FooterProps) {
  return <Footer {...props} />;
}
