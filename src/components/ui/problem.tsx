import { Headline } from "./headline";

export interface ProblemStep {
  emoji: string;
  title: string;
  description: string;
}

export interface ProblemProps {
  steps?: ProblemStep[];
}

const defaultSteps: ProblemStep[] = [
  {
    emoji: "👨‍💻",
    title: "8 hrs to add Stripe",
    description: "Intégrer Stripe prend des heures de configuration technique complexe",
  },
  {
    emoji: "😰",
    title: "Struggle to find time",
    description: "Entre les deadlines et la gestion quotidienne, impossible de se concentrer",
  },
  {
    emoji: "😔",
    title: "Quit project",
    description: "Épuisé par la complexité technique, beaucoup abandonnent leur vision",
  },
];

function ProblemStepCard({ step }: { step: ProblemStep }) {
  return (
    <div className="flex flex-col items-center text-center gap-4 w-64">
      <div className="text-6xl mb-2">{step.emoji}</div>
      <h3 className="text-xl font-semibold text-foreground dark:text-foreground">{step.title}</h3>
      <p className="text-foreground text-sm leading-relaxed">{step.description}</p>
    </div>
  );
}

function Arrow() {
  return (
    <div className="hidden md:flex items-center justify-center px-6">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-slate-400"
      >
        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export function Problem({ steps = defaultSteps }: ProblemProps) {
  return (
    <div className="flex flex-col gap-20 bg-muted py-20">
      <Headline
        title={
          <>
            <span className="text-primary">85%</span> {"des startups échouent car les "}
            <span className="text-primary">fondateurs abandonnent</span>
          </>
        }
        color="primary"
        description="Entre la technique, le business et les deadlines... Il y a tant de choses à gérer qu'on finit par perdre de vue l'essentiel."
        badge={{ text: "RÉALITÉ DU TERRAIN", isBadge: false }}
      />
      <div className="py-16 px-8 rounded-xl flex flex-col md:flex-row items-center justify-center">
        {steps.map((step, index) => (
          <div key={`step-${index}`} className="flex flex-col md:flex-row items-center">
            <ProblemStepCard step={step} />
            {index < steps.length - 1 && <Arrow />}
          </div>
        ))}
      </div>
    </div>
  );
}
