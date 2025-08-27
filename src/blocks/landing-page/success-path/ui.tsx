import { Timeline } from "@/components/ui/timeline";
import { Headline } from "@/components/shared/headline";
import { ReactNode } from "react";

interface TaskListProps {
  paragraphs?: string[];
  features?: SuccessPathFeature[];
  summary?: SuccessPathSummary;
}

function TaskList({ paragraphs, features, summary }: TaskListProps) {
  const featuresContent = (features ?? []).map((feature, idx) => {
    return (
      <div key={`f-${idx}`} className={`flex items-center gap-3 p-3 bg-primary/10 rounded-lg`}>
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

interface CardListProps {
  paragraphs?: string[];
  features?: SuccessPathFeature[];
  summary?: SuccessPathSummary;
}

function CardList({ paragraphs, features, summary }: CardListProps) {
  const featuresContent = (features ?? []).map((feature, idx) => {
    return (
      <div
        key={`f-${idx}`}
        className={`p-4 flex items-center gap-3 border border-primary dark:border-primary/30 rounded-lg`}
      >
        {feature.icon}
        <span className="text-base font-medium">{feature.text}</span>
      </div>
    );
  });

  return (
    <div>
      {(paragraphs ?? []).length > 0 ? <p className="mb-8 text-sm md:text-lg">{paragraphs?.[0]}</p> : null}
      {featuresContent.length > 0 ? <div className="grid grid-cols-1 gap-4">{featuresContent}</div> : null}
      {summary ? (
        <div className={`mt-6 p-4 bg-primary/80 rounded-lg`}>
          <div className="flex items-center gap-2 mb-2">
            {summary?.icon}
            <span className={`text-base font-semibold text-primary-foreground`}>{summary.label}</span>
          </div>
          <p className={`text-base text-primary-foreground`}>{summary.text}</p>
        </div>
      ) : null}
    </div>
  );
}

interface BulletsListProps {
  paragraphs?: string[];
  bullets?: string[];
  summary?: SuccessPathSummary;
}

function BulletsList({ paragraphs, bullets, summary }: BulletsListProps) {
  const bulletsContent = (bullets ?? []).map((text, idx) => (
    <div key={`b-${idx}`} className={`flex items-center gap-2`}>
      ✅ {text}
    </div>
  ));

  return (
    <div>
      {(paragraphs ?? []).length > 0 ? <p className="mb-8 text-sm md:text-lg">{paragraphs?.[0]}</p> : null}
      {bulletsContent.length > 0 ? <div className="space-y-3 ">{bulletsContent}</div> : null}
      {summary ? (
        <div className={`mt-6 p-4 bg-primary/80 rounded-lg`}>
          <div className="flex items-center gap-2 mb-2">
            {summary?.icon}
            <span className={`text-base font-semibold text-primary-foreground`}>{summary.label}</span>
          </div>
          <p className={`text-base text-primary-foreground`}>{summary.text}</p>
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
  type: "task-list" | "bullets-list" | "card-list";
  title: string;
  paragraphs?: string[];
  features?: SuccessPathFeature[];
  featuresLayout?: "list" | "grid";
  bullets?: string[];
  summary?: SuccessPathSummary;
}

export interface SuccessPathProps {
  title?: ReactNode;
  description?: string;
  badgeText?: string;
  fromColor?: string;
  viaColor?: string;
  data?: SuccessPathItem[];
}

const displayEntryContent = ({ entry }: { entry: SuccessPathItem }): ReactNode => {
  switch (entry.type) {
    case "task-list":
      return <TaskList paragraphs={entry.paragraphs} features={entry.features} summary={entry.summary} />;
    case "card-list":
      return <CardList paragraphs={entry.paragraphs} features={entry.features} summary={entry.summary} />;
    case "bullets-list":
      return <BulletsList paragraphs={entry.paragraphs} bullets={entry.bullets} summary={entry.summary} />;
    default:
      return null;
  }
};

export function SuccessPath({
  title = (
    <>
      <span className="text-primary">90%</span> {"des startups qui s'organisent "}
      <span className="text-primary">atteignent leurs objectifs</span>
    </>
  ),
  description = "Découvrez comment transformer le chaos en machine à succès. Voici le chemin que suivent les fondateurs qui réussissent.",
  badgeText = "TRANSFORMATION RÉUSSIE",
  fromColor = "from-primary",
  viaColor = "via-primary/80",
  data = [],
}: SuccessPathProps) {
  const timelineData = data.map((entry) => ({
    title: entry.title,
    content: displayEntryContent({ entry }),
  }));

  return (
    <section className="flex flex-col gap-20 md:gap-24">
      <Headline title={title} description={description} badge={{ text: badgeText, isBadge: false }} />

      <div className="relative w-full overflow-clip">
        <Timeline data={timelineData} fromColor={fromColor} viaColor={viaColor} />
      </div>
    </section>
  );
}
