import { SuccessPathSummary } from "../component";
import { iconMap } from "../component";

interface BulletsListProps {
  paragraphs?: string[];
  bullets?: string[];
  summary?: SuccessPathSummary;
}

export function BulletsList({ paragraphs, bullets, summary }: BulletsListProps) {
  const bulletsContent = (bullets ?? []).map((text, idx) => (
    <div key={`b-${idx}`} className="flex items-center gap-2 text-base text-green-700 dark:text-green-300">
      ✅ {text}
    </div>
  ));

  const SummaryIcon = summary?.icon ? iconMap[summary.icon] : undefined;

  return (
    <div>
      {(paragraphs ?? []).length > 0 ? (
        <p className="mb-8 text-sm md:text-lg">{paragraphs?.[0]}</p>
      ) : null}
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
