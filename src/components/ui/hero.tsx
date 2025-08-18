import { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { ProductHuntBadge } from "@/components/ui/producthunt-badge";
import { Icons, Variant } from "@/components/ui/icons";
import { getChildrenByType } from "@/lib/get-children-by-type";

interface HeroAuthSectionProps {
  children: ReactNode;
}

function HeroCtaSection({ children }: HeroAuthSectionProps) {
  return children;
}

export interface HeroProps {
  badge: string;
  title: string;
  description: string;
  children?: ReactNode;
}

export function Hero({ badge, title, description, children }: HeroProps) {
  const authSection = getChildrenByType<HeroAuthSectionProps>(children, HeroCtaSection);

  return (
    <section className="px-8 pt-24 md:pt-36 justify-center text-center flex flex-col mx-auto max-w-5xl items-center gap-5">
      <Badge variant="default">{badge}</Badge>
      <ProductHuntBadge />
      <h1 className="text-4xl md:text-6xl font-semibold text-foreground">{title}</h1>
      <p className="text-lg text-muted-foreground max-w-3xl">{description}</p>
      {authSection?.props.children}
      <Icons variant={Variant.ArrowDown4} color="var(--primary)" className="w-36 h-36 mt-6" />
    </section>
  );
}

Hero.CtaSection = HeroCtaSection;
