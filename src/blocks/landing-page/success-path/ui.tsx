import { ReactNode } from "react";
import { Timeline, TimelineEntry } from "@/components/ui/timeline";
import { Headline } from "@/components/shared/headline";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface TaskListProps {
  paragraphs?: string[];
  features?: SuccessPathFeature[];
  summary?: SuccessPathSummary;
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

function TaskList({ paragraphs, features, summary }: TaskListProps): ReactNode {
  const featuresContent: ReactNode[] = (features ?? []).map((feature: SuccessPathFeature, index: number): ReactNode => {
    return (
      <Card key={`f-${index}`} className={`flex gap-3 bg-primary/10 rounded-lg`}>
        <CardContent className="flex items-center gap-3">
          {feature.icon}
          <span className="text-base font-medium">{feature.text}</span>
        </CardContent>
      </Card>
    );
  });

  return (
    <div className="space-y-4">
      {(paragraphs ?? []).length > 0 ? <p className="mb-8 text-sm md:text-lg">{paragraphs?.[0]}</p> : null}
      {featuresContent.length > 0 ? featuresContent : null}
      {summary ? (
        <Card className="mt-6 bg-primary/80 border-primary/20">
          <CardHeader className="flex items-center">
            {summary?.icon}
            <span className="text-base font-semibold text-primary-foreground">{summary.label}</span>
          </CardHeader>
          <CardContent>
            <p className="text-base text-primary-foreground/80">{summary.text}</p>
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
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
