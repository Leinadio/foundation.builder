import { SuccessPathFeature, SuccessPathSummary } from "../component";
import { iconMap } from "../component";

interface CardListProps {
  paragraphs?: string[];
  features?: SuccessPathFeature[];
  summary?: SuccessPathSummary;
}

export function CardList({ paragraphs, features, summary }: CardListProps) {
  const featuresContent = (features ?? []).map((feature, idx) => {
    const Icon = feature.icon ? iconMap[feature.icon] : undefined;
    return (
      <div
        key={`f-${idx}`}
        className="p-4 border border-green-200 dark:border-green-800 rounded-lg"
      >
        {Icon ? <Icon className="w-5 h-5 text-green-600 flex-shrink-0" /> : null}
        <span className="text-base font-medium">{feature.text}</span>
      </div>
    );
  });

  const SummaryIcon = summary?.icon ? iconMap[summary.icon] : undefined;

  return (
    <div>
      {(paragraphs ?? []).length > 0 ? (
        <p className="mb-8 text-sm md:text-lg">{paragraphs?.[0]}</p>
      ) : null}
      {featuresContent.length > 0 ? (
        <div className="grid grid-cols-1 gap-4">{featuresContent}</div>
      ) : null}
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
