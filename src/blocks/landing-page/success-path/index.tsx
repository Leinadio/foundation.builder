import { SuccessPath, SuccessPathProps } from "@/blocks/landing-page/success-path/ui";

export type SuccessPathContainerProps = SuccessPathProps;

export function SuccessPathContainer(props: SuccessPathProps) {
  return <SuccessPath {...props} />;
}
