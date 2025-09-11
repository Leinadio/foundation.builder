import { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { ProductHuntBadge } from "@/components/shared/product-hunt-badge";
import { Icons, Variant } from "@/components/shared/icons";
import { getChildrenByType } from "@/lib/get-children-by-type";
import { cn } from "@/lib/utils";

interface HeroRowCtaSectionProps {
  children: ReactNode;
}

interface HeroRowVisualSectionProps {
  children: ReactNode;
}

function HeroRowCtaSection({ children }: HeroRowCtaSectionProps) {
  return children;
}

function HeroRowVisualSection({ children }: HeroRowVisualSectionProps) {
  return children;
}

export interface HeroRowProps {
  badge: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
  className?: string;
}

function HeroRowVisualSectionDefault() {
  return (
    <div className="relative">
      <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center">
        <Icons variant={Variant.ArrowDown4} color="var(--primary)" className="w-24 h-24" />
      </div>
      <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-accent to-accent/60 rounded-2xl animate-bounce"></div>
      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-primary/40 to-secondary/40 rounded-xl animate-pulse"></div>
    </div>
  );
}

export function HeroRow({ badge, title, description, children, className }: HeroRowProps) {
  const ctaSection = getChildrenByType<HeroRowCtaSectionProps>(children, HeroRowCtaSection);
  const visualSection = getChildrenByType<HeroRowVisualSectionProps>(children, HeroRowVisualSection);

  return (
    <section className={cn("px-8 pt-24 md:pt-36 mx-auto max-w-7xl", className)}>
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Section de contenu - Gauche */}
        <div className="flex-1 text-center lg:text-left space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Badge variant="default" className="animate-fade-in">
              {badge}
            </Badge>
            <ProductHuntBadge />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight animate-fade-in-up">
            {title}
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 animate-fade-in-up delay-200">
            {description}
          </p>

          {ctaSection?.props.children && (
            <div className="animate-fade-in-up delay-300">{ctaSection.props.children}</div>
          )}
        </div>

        {/* Section visuelle - Droite */}
        <div className="flex-1 flex justify-center lg:justify-end">
          {visualSection?.props.children || HeroRowVisualSectionDefault()}
        </div>
      </div>
    </section>
  );
}

HeroRow.CtaSection = HeroRowCtaSection;
HeroRow.VisualSection = HeroRowVisualSection;
