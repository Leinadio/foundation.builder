import { Badge } from "@/components/ui/badge";
import { Timeline } from "@/components/ui/timeline";
import { data } from "./data";

export function Component() {
  return (
    <section className="flex flex-col gap-8 md:gap-12">
      <div className="text-center space-y-6">
        <Badge variant="outline" className="text-red-600 border-red-200">
          RÉALITÉ DU TERRAIN
        </Badge>

        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            <span className="text-red-600">85%</span> des startups échouent car les{" "}
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              fondateurs abandonnent
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            {
              "Entre la technique, le business et les deadlines... Il y a tant de choses à gérer qu'on finit par perdre de vue l'essentiel."
            }
          </p>
        </div>
      </div>

      {/* Section Test */}
      <div className="relative w-full overflow-clip">
        <Timeline data={data} fromColor="red-900" viaColor="red-500" />
      </div>
    </section>
  );
}
