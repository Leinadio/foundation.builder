import { Problem as ProblemUI, ProblemProps } from "@/components/ui/problem";

export function Problem(props: ProblemProps) {
  return <ProblemUI {...props} />;
}

export type { ProblemProps, ProblemStep } from "@/components/ui/problem";
