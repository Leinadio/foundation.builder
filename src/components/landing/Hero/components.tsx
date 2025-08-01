import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CircleChevronRight } from "lucide-react";
import { AuthDialog } from "@/components/common/AuthDialog";
import { ProductHungBadge } from "@/components/common/ProductHungBadge";
import { Icons, Variant } from "@/components/common/Icons";

export function Hero() {
  return (
    <section className="hero px-8 pt-4 md:pt-48 flex justify-center items-center">
      <div className="hero-content text-center max-w-3xl flex flex-col items-center gap-4">
        <div className="max-w-3xl flex flex-col items-center gap-4">
          <div className="inline-flex">
            <Badge variant="default">{"🚀 Nouveau - Validation d'idée par IA"}</Badge>
          </div>
          <ProductHungBadge />
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 py-6">
            {"Testez votre idée de business avant de perdre du temps (ou de l'argent)"}
          </h1>
          <p className="text-xl text-gray-800">
            {
              "Notre IA analyse votre idée sous tous les angles – marché, cible, problème, solution, business model – et vous fournit une validation claire, rapide et visuelle."
            }
          </p>
          <div className="flex justify-center">
            <AuthDialog>
              <Button size="lg">
                {"Testez votre idée"}
                <CircleChevronRight className="w-4 h-4" />
              </Button>
            </AuthDialog>
          </div>
          <Icons variant={Variant.ArrowDown4} color="var(--primary)" className="w-36 h-36 mt-6" />
        </div>
      </div>
    </section>
  );
}
