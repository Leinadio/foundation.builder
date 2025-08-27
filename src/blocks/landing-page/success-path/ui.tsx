import { ReactNode } from "react";
import { Timeline, TimelineEntry } from "@/components/ui/timeline";
import { Headline } from "@/components/shared/headline";

interface TaskListProps {
  paragraphs?: string[];
  features?: SuccessPathFeature[];
  summary?: SuccessPathSummary;
}

function TaskList({ paragraphs, features, summary }: TaskListProps): ReactNode {
  const featuresContent: ReactNode[] = (features ?? []).map((feature: SuccessPathFeature, index: number): ReactNode => {
    return (
      <div key={`f-${index}`} className={`flex items-center gap-3 p-3 bg-primary/10 rounded-lg`}>
        {feature.icon}
        <span className="text-base font-medium">{feature.text}</span>
      </div>
    );
  });

  return (
    <div>
      {(paragraphs ?? []).length > 0 ? <p className="mb-8 text-sm md:text-lg">{paragraphs?.[0]}</p> : null}
      {featuresContent.length > 0 ? <div className="space-y-4">{featuresContent}</div> : null}
      {summary ? (
        <div className={`mt-6 p-4 bg-primary/80 rounded-lg`}>
          <div className="flex items-center gap-2 mb-2">
            {summary?.icon}
            <span className={`text-base font-semibold text-primary-foreground`}>{summary.label}</span>
          </div>
          <p className={`text-base text-primary-foreground/80`}>{summary.text}</p>
        </div>
      ) : null}
    </div>
  );
}

export interface SuccessPathFeature {
  icon?: ReactNode;
  text: string;
}

export interface SuccessPathSummary {
  icon?: ReactNode;
  label: string;
  text: string;
}

export interface SuccessPathItem {
  title: string;
  paragraphs?: string[];
  features?: SuccessPathFeature[];
  summary?: SuccessPathSummary;
}

export interface SuccessPathProps {
  title?: ReactNode;
  description?: string;
  badgeText?: string;
  data?: SuccessPathItem[];
}

export function SuccessPath({
  title = (
    <>
      <span className="text-primary">90%</span> {"des startups qui s'organisent "}
      <span className="text-primary">atteignent leurs objectifs</span>
    </>
  ),
  description = "Découvrez comment transformer le chaos en machine à succès. Voici le chemin que suivent les fondateurs qui réussissent.",
  badgeText = "TRANSFORMATION RÉUSSIE",
  data = [],
}: SuccessPathProps) {
  const timelineData: TimelineEntry[] = data.map(
    (entry: SuccessPathItem): TimelineEntry => ({
      title: entry.title,
      content: <TaskList paragraphs={entry.paragraphs} features={entry.features} summary={entry.summary} />,
    })
  );

  return (
    <section className="flex flex-col gap-20 md:gap-24">
      <Headline title={title} description={description} badge={{ text: badgeText, isBadge: false }} />

      <div className="relative w-full overflow-clip">
        <Timeline data={timelineData} />
      </div>
    </section>
  );
}
