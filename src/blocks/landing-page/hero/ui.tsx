import { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { ProductHuntBadge } from "@/components/shared/product-hunt-badge";
import { Icons, Variant } from "@/components/shared/icons";
import { getChildrenByType } from "@/lib/get-children-by-type";

interface HeroAuthSectionProps {
  children: ReactNode;
}

function HeroCtaSection({ children }: HeroAuthSectionProps) {
  return children;
}

export interface HeroProps {
  badge: string;
  title: ReactNode;
  titleHighlight?: string;
  description: string;
  children?: ReactNode;
}

export function Hero({ badge, title, titleHighlight, description, children }: HeroProps) {
  const authSection = getChildrenByType<HeroAuthSectionProps>(children, HeroCtaSection);

  return (
    <section className="px-8 pt-24 md:pt-20 justify-center text-center flex flex-col mx-auto max-w-5xl items-center gap-10">
      <div className="flex flex-col items-center gap-4">
        <Badge variant="default">{badge}</Badge>
        <ProductHuntBadge />
      </div>
      <h1 className="text-4xl md:text-6xl font-semibold text-foreground">
        {title}
        {titleHighlight && <span className="text-primary ml-2">{titleHighlight}</span>}
      </h1>
      <p className="text-lg text-muted-foreground max-w-3xl">{description}</p>
      {authSection?.props.children}
      <Icons variant={Variant.ArrowDown4} color="var(--primary)" className="w-36 h-36 mt-6" />
    </section>
  );
}

Hero.CtaSection = HeroCtaSection;
