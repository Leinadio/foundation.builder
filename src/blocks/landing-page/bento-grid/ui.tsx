import { ReactNode } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Headline } from "@/components/shared/headline";

export interface BentoGridItemData {
  title: string;
  description: string;
  header?: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export interface FeatureBentoGridProps {
  title?: string | ReactNode;
  description?: string;
  badgeText?: string;
  bentoItems?: BentoGridItemData[];
}

export function FeatureBentoGrid({
  title = "What you can do with AI",
  description = "AI is a powerful tool that can help you with your work.",
  badgeText = "AI",
  bentoItems = [],
}: FeatureBentoGridProps) {
  return (
    <section className="w-full flex flex-col gap-8 md:gap-24">
      <Headline title={title} description={description} badge={{ text: badgeText, isBadge: false }} />
      <BentoGrid>
        {bentoItems.map((item: BentoGridItemData, i: number) => {
          return (
            <BentoGridItem
              key={i}
              title={item.title}
              description={<span className="text-sm">{item.description}</span>}
              header={item.header}
              icon={item.icon}
              className={item.className || ""}
            />
          );
        })}
      </BentoGrid>
    </section>
  );
}
