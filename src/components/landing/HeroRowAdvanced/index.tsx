import { HeroRow as HeroRowComponent, HeroRowProps } from "@/components/ui/hero-row";
import { HeroUserActions } from "@/components/common/HeroUserActions";
import { Icons, Variant } from "@/components/ui/icons";

export function HeroRowAdvanced(props: HeroRowProps) {
  return (
    <HeroRowComponent {...props}>
      <HeroRowComponent.CtaSection>
        <HeroUserActions url="/app" />
      </HeroRowComponent.CtaSection>
      <HeroRowComponent.VisualSection>
        <div className="relative">
          {/* Carte principale avec gradient */}
          <div className="w-80 h-80 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl flex items-center justify-center shadow-2xl">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto">
                <Icons variant={Variant.ArrowDown4} color="white" className="w-8 h-8" />
              </div>
              <p className="text-sm font-medium text-foreground">Extension Chrome</p>
            </div>
          </div>

          {/* Éléments flottants animés */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-accent to-accent/60 rounded-2xl animate-bounce shadow-lg">
            <div className="w-full h-full flex items-center justify-center">
              <Icons variant={Variant.ArrowDown1} className="w-8 h-8 text-white" />
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-primary/40 to-secondary/40 rounded-xl animate-pulse shadow-lg">
            <div className="w-full h-full flex items-center justify-center">
              <Icons variant={Variant.ArrowDown1} className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Ligne de connexion */}
          <div className="absolute top-1/2 -left-8 w-16 h-0.5 bg-gradient-to-r from-transparent to-primary/30"></div>
          <div className="absolute top-1/2 -right-8 w-16 h-0.5 bg-gradient-to-l from-transparent to-secondary/30"></div>

          {/* Indicateurs de statut */}
          <div className="absolute top-4 left-4 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <div className="absolute top-4 right-4 w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-1000"></div>
        </div>
      </HeroRowComponent.VisualSection>
    </HeroRowComponent>
  );
}
