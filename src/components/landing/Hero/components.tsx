import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CircleChevronRight } from "lucide-react";
import { AuthDialog } from "@/components/common/AuthDialog";
import { ProductHungBadge } from "@/components/common/ProductHungBadge";
import { Icons, Variant } from "@/components/common/Icons";

export interface HeroProps {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
}

export function Hero({ badge, title, description, buttonText }: HeroProps) {
  return (
    <section className="px-8 pt-24 md:pt-56 justify-center text-center flex flex-col mx-auto max-w-5xl items-center gap-5">
      <Badge variant="default">{badge}</Badge>
      <ProductHungBadge />
      <h1 className="text-4xl md:text-6xl font-semibold text-foreground">{title}</h1>
      <p className="text-lg text-muted-foreground max-w-3xl">{description}</p>
      <AuthDialog>
        <Button size="lg">
          {buttonText}
          <CircleChevronRight className="w-4 h-4" />
        </Button>
      </AuthDialog>
      <Icons variant={Variant.ArrowDown4} color="var(--primary)" className="w-36 h-36 mt-6" />
    </section>
  );
}
