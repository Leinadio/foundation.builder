import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CircleChevronRight } from "lucide-react";
import { AuthDialog } from "@/components/common/AuthDialog";
import { ProductHungBadge } from "@/components/common/ProductHungBadge";
import { Icons, Variant } from "@/components/common/Icons";

export function Hero() {
  return (
    <section className="px-8 pt-4 md:pt-48 justify-center text-center flex flex-col mx-auto max-w-5xl items-center gap-5">
      <Badge variant="default">{"🚀 Nouveau - Validation d'idée par IA"}</Badge>
      <ProductHungBadge />
      <h1 className="text-4xl md:text-6xl font-semibold text-foreground">
        {"Testez votre idée de business avant de perdre du temps (ou de l'argent)"}
      </h1>
      <p className="text-lg text-muted-foreground max-w-3xl">
        {
          "Notre IA analyse votre idée sous tous les angles – marché, cible, problème, solution, business model – et vous fournit une validation claire, rapide et visuelle."
        }
      </p>
      <AuthDialog>
        <Button size="lg">
          {"Testez votre idée"}
          <CircleChevronRight className="w-4 h-4" />
        </Button>
      </AuthDialog>
      <Icons variant={Variant.ArrowDown4} color="var(--primary)" className="w-36 h-36 mt-6" />
    </section>
  );
}
