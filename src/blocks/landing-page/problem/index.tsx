import { Problem, ProblemProps } from "@/blocks/landing-page/problem/ui";

export type ProblemContainerProps = ProblemProps;

export function ProblemContainer(props: ProblemProps) {
  return <Problem {...props} />;
}
