import { Badge } from "@/components/ui/badge";
import { ReactNode } from "react";

interface HeadlineProps {
  title: ReactNode;
  description: string;
  badge: {
    text: string;
    isBadge: boolean;
  };
  color?: string;
}

export function Headline({ title, description, badge, color = "red" }: HeadlineProps) {
  const displayBadge = () => {
    if (badge.isBadge) {
      return (
        <Badge variant="outline" className={`text-${color}-600 border-${color}-200`}>
          {badge.text}
        </Badge>
      );
    }
    return <p className="text-sm lg:text-lg text-primary font-semibold uppercase">{badge.text}</p>;
  };
  return (
    <div className="flex flex-col items-center gap-4 text-center mb-0">
      {displayBadge()}
      <h2 className="text-4xl md:text-6xl font-semibold text-foreground leading-tight">{title}</h2>
      <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl">{description}</p>
    </div>
  );
}
