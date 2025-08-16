import { Timeline } from "@/components/ui/timeline";
import { Headline } from "@/components/ui/headline";
import { ReactNode } from "react";
import { CheckCircle, TrendingUp, Users, Zap } from "lucide-react";

type IconName = "CheckCircle" | "Users" | "Zap" | "TrendingUp";

export const iconMap: Record<IconName, React.ComponentType<{ className?: string }>> = {
  CheckCircle,
  Users,
  Zap,
  TrendingUp,
};

interface TaskListProps {
  paragraphs?: string[];
  features?: SuccessPathFeature[];
  summary?: SuccessPathSummary;
}

function TaskList({ paragraphs, features, summary }: TaskListProps) {
  const featuresContent = (features ?? []).map((feature, idx) => {
    const Icon = feature.icon ? iconMap[feature.icon] : undefined;
    return (
      <div
        key={`f-${idx}`}
        className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 border-green-200 border rounded-lg"
      >
        {Icon ? <Icon className="w-5 h-5 text-green-600 flex-shrink-0" /> : null}
        <span className="text-base font-medium">{feature.text}</span>
      </div>
    );
  });

  const SummaryIcon = summary?.icon ? iconMap[summary.icon] : undefined;

  return (
    <div>
      {(paragraphs ?? []).length > 0 ? <p className="mb-8 text-sm md:text-lg">{paragraphs?.[0]}</p> : null}
      {featuresContent.length > 0 ? <div className="space-y-4">{featuresContent}</div> : null}
      {summary ? (
        <div className="mt-6 p-4 bg-green-200 dark:bg-green-900 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            {SummaryIcon ? <SummaryIcon className="w-4 h-4 text-green-600" /> : null}
            <span className="text-base font-semibold text-green-900 dark:text-green-200">{summary.label}</span>
          </div>
          <p className="text-base text-green-800 dark:text-green-300">{summary.text}</p>
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
    const Icon = feature.icon ? iconMap[feature.icon] : undefined;
    return (
      <div key={`f-${idx}`} className="p-4 border border-green-200 dark:border-green-800 rounded-lg">
        {Icon ? <Icon className="w-5 h-5 text-green-600 flex-shrink-0" /> : null}
        <span className="text-base font-medium">{feature.text}</span>
      </div>
    );
  });

  const SummaryIcon = summary?.icon ? iconMap[summary.icon] : undefined;

  return (
    <div>
      {(paragraphs ?? []).length > 0 ? <p className="mb-8 text-sm md:text-lg">{paragraphs?.[0]}</p> : null}
      {featuresContent.length > 0 ? <div className="grid grid-cols-1 gap-4">{featuresContent}</div> : null}
      {summary ? (
        <div className="mt-6 p-4 bg-green-200 dark:bg-green-900 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            {SummaryIcon ? <SummaryIcon className="w-4 h-4 text-green-600" /> : null}
            <span className="text-base font-semibold text-green-900 dark:text-green-200">{summary.label}</span>
          </div>
          <p className="text-base text-green-800 dark:text-green-300">{summary.text}</p>
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
    <div key={`b-${idx}`} className="flex items-center gap-2 text-base text-green-700 dark:text-green-300">
      ✅ {text}
    </div>
  ));

  const SummaryIcon = summary?.icon ? iconMap[summary.icon] : undefined;

  return (
    <div>
      {(paragraphs ?? []).length > 0 ? <p className="mb-8 text-sm md:text-lg">{paragraphs?.[0]}</p> : null}
      {bulletsContent.length > 0 ? <div className="space-y-3">{bulletsContent}</div> : null}
      {summary ? (
        <div className="mt-6 p-4 bg-green-200 dark:bg-green-900 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            {SummaryIcon ? <SummaryIcon className="w-4 h-4 text-green-600" /> : null}
            <span className="text-base font-semibold text-green-900 dark:text-green-200">{summary.label}</span>
          </div>
          <p className="text-base text-green-800 dark:text-green-300">{summary.text}</p>
        </div>
      ) : null}
    </div>
  );
}

interface DefaultProps {
  paragraphs?: string[];
  features?: SuccessPathFeature[];
  featuresLayout?: "list" | "grid";
  bullets?: string[];
  summary?: SuccessPathSummary;
}

function Default({ paragraphs, features, featuresLayout, bullets, summary }: DefaultProps) {
  const featuresContent = (features ?? []).map((feature, idx) => {
    const Icon = feature.icon ? iconMap[feature.icon] : undefined;
    return (
      <div
        key={`f-${idx}`}
        className={
          featuresLayout === "grid"
            ? "p-4 border border-green-200 dark:border-green-800 rounded-lg"
            : "flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 border-green-200 border rounded-lg"
        }
      >
        {Icon ? <Icon className="w-5 h-5 text-green-600 flex-shrink-0" /> : null}
        <span className="text-base font-medium">{feature.text}</span>
      </div>
    );
  });

  const bulletsContent = (bullets ?? []).map((text, idx) => (
    <div key={`b-${idx}`} className="flex items-center gap-2 text-base text-green-700 dark:text-green-300">
      ✅ {text}
    </div>
  ));

  const SummaryIcon = summary?.icon ? iconMap[summary.icon] : undefined;

  return (
    <div>
      {(paragraphs ?? []).length > 0 ? <p className="mb-8 text-sm md:text-lg">{paragraphs?.[0]}</p> : null}
      {features && features.length > 0 ? (
        <div className={featuresLayout === "grid" ? "grid grid-cols-1 gap-4" : "space-y-4"}>{featuresContent}</div>
      ) : null}
      {bullets && bullets.length > 0 ? <div className="space-y-3">{bulletsContent}</div> : null}
      {summary ? (
        <div className="mt-6 p-4 bg-green-200 dark:bg-green-900 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            {SummaryIcon ? <SummaryIcon className="w-4 h-4 text-green-600" /> : null}
            <span className="text-base font-semibold text-green-900 dark:text-green-200">{summary.label}</span>
          </div>
          <p className="text-base text-green-800 dark:text-green-300">{summary.text}</p>
        </div>
      ) : null}
    </div>
  );
}

export interface SuccessPathFeature {
  icon?: IconName;
  text: string;
}

export interface SuccessPathSummary {
  icon?: IconName;
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
  badge?: { text: string; isBadge: boolean };
  color?: string;
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
      { icon: "CheckCircle", text: "Tâches priorisées automatiquement" },
      { icon: "CheckCircle", text: "Délais respectés à 95%" },
      { icon: "CheckCircle", text: "Communication centralisée" },
    ],
    featuresLayout: "list",
    summary: {
      icon: "TrendingUp",
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
      { icon: "Users", text: "Équipe synchronisée" },
      { icon: "Zap", text: "Réactivité maximale" },
    ],
    featuresLayout: "grid",
    summary: {
      icon: "TrendingUp",
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
      icon: "TrendingUp",
      label: "Transformation",
      text: "De 85% d'échecs à 90% de réussite : rejoignez les startups qui réussissent",
    },
  },
];

export function SuccessPath({
  title = (
    <>
      <span className="text-green-600">90%</span> {"des startups qui s'organisent "}
      <span className="text-green-600">atteignent leurs objectifs</span>
    </>
  ),
  description = "Découvrez comment transformer le chaos en machine à succès. Voici le chemin que suivent les fondateurs qui réussissent.",
  badge = { text: "TRANSFORMATION RÉUSSIE", isBadge: true },
  color = "green",
  fromColor = "green-600",
  viaColor = "emerald-500",
  data = defaultData,
}: SuccessPathProps) {
  const renderEntryContent = (entry: SuccessPathItem): ReactNode => {
    switch (entry.type) {
      case "task-list":
        return <TaskList paragraphs={entry.paragraphs} features={entry.features} summary={entry.summary} />;
      case "card-list":
        return <CardList paragraphs={entry.paragraphs} features={entry.features} summary={entry.summary} />;
      case "bullets-list":
        return <BulletsList paragraphs={entry.paragraphs} bullets={entry.bullets} summary={entry.summary} />;
      default:
        return (
          <Default
            paragraphs={entry.paragraphs}
            features={entry.features}
            featuresLayout={entry.featuresLayout}
            bullets={entry.bullets}
            summary={entry.summary}
          />
        );
    }
  };

  const timelineData = data.map((entry) => ({
    title: entry.title,
    content: renderEntryContent(entry),
  }));

  return (
    <section className="flex flex-col gap-20 md:gap-24">
      <Headline title={title} description={description} badge={badge} color={color} />

      <div className="relative w-full overflow-clip">
        <Timeline data={timelineData} fromColor={fromColor} viaColor={viaColor} />
      </div>
    </section>
  );
}
