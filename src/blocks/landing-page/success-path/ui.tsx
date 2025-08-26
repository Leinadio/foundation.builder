import { Timeline } from "@/components/ui/timeline";
import { Headline } from "@/components/shared/headline";
import { ReactNode } from "react";
import { CheckCircle, LucideIcon, TrendingUp, Users, Zap } from "lucide-react";

interface TaskListProps {
  paragraphs?: string[];
  features?: SuccessPathFeature[];
  summary?: SuccessPathSummary;
}

function TaskList({ paragraphs, features, summary }: TaskListProps) {
  const featuresContent = (features ?? []).map((feature, idx) => {
    const Icon: LucideIcon | undefined = feature.icon;
    return (
      <div key={`f-${idx}`} className={`flex items-center gap-3 p-3 bg-primary/10 rounded-lg`}>
        {Icon ? <Icon className={`w-5 h-5 text-primary`} /> : null}
        <span className="text-base font-medium">{feature.text}</span>
      </div>
    );
  });

  const SummaryIcon: LucideIcon | undefined = summary?.icon;

  return (
    <div>
      {(paragraphs ?? []).length > 0 ? <p className="mb-8 text-sm md:text-lg">{paragraphs?.[0]}</p> : null}
      {featuresContent.length > 0 ? <div className="space-y-4">{featuresContent}</div> : null}
      {summary ? (
        <div className={`mt-6 p-4 bg-primary/80 rounded-lg`}>
          <div className="flex items-center gap-2 mb-2">
            {SummaryIcon ? <SummaryIcon className={`w-4 h-4 text-primary-foreground`} /> : null}
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
    const Icon: LucideIcon | undefined = feature.icon;
    return (
      <div
        key={`f-${idx}`}
        className={`p-4 flex items-center gap-3 border border-primary dark:border-primary/30 rounded-lg`}
      >
        {Icon ? <Icon className={`w-5 h-5 text-primary flex-shrink-0`} /> : null}
        <span className="text-base font-medium">{feature.text}</span>
      </div>
    );
  });

  const SummaryIcon: LucideIcon | undefined = summary?.icon;

  return (
    <div>
      {(paragraphs ?? []).length > 0 ? <p className="mb-8 text-sm md:text-lg">{paragraphs?.[0]}</p> : null}
      {featuresContent.length > 0 ? <div className="grid grid-cols-1 gap-4">{featuresContent}</div> : null}
      {summary ? (
        <div className={`mt-6 p-4 bg-primary/80 rounded-lg`}>
          <div className="flex items-center gap-2 mb-2">
            {SummaryIcon ? <SummaryIcon className={`w-4 h-4 text-primary-foreground`} /> : null}
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

  const SummaryIcon: LucideIcon | undefined = summary?.icon;

  return (
    <div>
      {(paragraphs ?? []).length > 0 ? <p className="mb-8 text-sm md:text-lg">{paragraphs?.[0]}</p> : null}
      {bulletsContent.length > 0 ? <div className="space-y-3 ">{bulletsContent}</div> : null}
      {summary ? (
        <div className={`mt-6 p-4 bg-primary/80 rounded-lg`}>
          <div className="flex items-center gap-2 mb-2">
            {SummaryIcon ? <SummaryIcon className={`w-4 h-4 text-primary-foreground`} /> : null}
            <span className={`text-base font-semibold text-primary-foreground`}>{summary.label}</span>
          </div>
          <p className={`text-base text-primary-foreground`}>{summary.text}</p>
        </div>
      ) : null}
    </div>
  );
}

export interface SuccessPathFeature {
  icon?: LucideIcon;
  text: string;
}

export interface SuccessPathSummary {
  icon?: LucideIcon;
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

const defaultData: SuccessPathItem[] = [
  {
    type: "task-list",
    title: "Organisation claire",
    paragraphs: [
      "Avec une structure organisée, chaque tâche trouve sa place et chaque membre de l'équipe sait exactement quoi faire et quand.",
    ],
    features: [
      { icon: CheckCircle, text: "Tâches priorisées automatiquement" },
      { icon: CheckCircle, text: "Délais respectés à 95%" },
      { icon: CheckCircle, text: "Communication centralisée" },
    ],
    featuresLayout: "list",
    summary: {
      icon: TrendingUp,
      label: "Résultat",
      text: "+65% de productivité en équipe dès la première semaine",
    },
  },
  {
    type: "card-list",
    title: "Collaboration fluide",
    paragraphs: [
      "Fini les malentendus et les tâches dupliquées. L'équipe travaille en harmonie avec une visibilité complète sur l'avancement.",
    ],
    features: [
      { icon: Users, text: "Équipe synchronisée" },
      { icon: Zap, text: "Réactivité maximale" },
    ],
    featuresLayout: "grid",
    summary: {
      icon: TrendingUp,
      label: "Impact",
      text: "Réduction de 80% des réunions inutiles et des emails de suivi",
    },
  },
  {
    type: "bullets-list",
    title: "Croissance accélérée",
    paragraphs: [
      "Avec les bonnes fondations, votre startup peut enfin se concentrer sur ce qui compte : créer de la valeur et grandir.",
    ],
    bullets: [
      "Focus retrouvé sur le produit",
      "Équipe motivée et alignée",
      "Livraisons dans les temps",
      "Clients satisfaits et fidèles",
      "Investisseurs confiants",
    ],
    summary: {
      icon: TrendingUp,
      label: "Transformation",
      text: "De 85% d'échecs à 90% de réussite : rejoignez les startups qui réussissent",
    },
  },
];

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
  data = defaultData,
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
