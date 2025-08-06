import { Timeline } from "@/components/ui/timeline";
import { data } from "./data";
import { Headline } from "@/components/common/Headline";

export function Component() {
  return (
    <section className="flex flex-col gap-20 md:gap-24">
      <Headline
        title={
          <>
            <span className="text-red-600">85%</span> des startups échouent car les{" "}
            <span className="text-red-600">fondateurs abandonnent</span>
          </>
        }
        description="Entre la technique, le business et les deadlines... Il y a tant de choses à gérer qu'on finit par perdre de vue l'essentiel."
        badge={{ text: "RÉALITÉ DU TERRAIN", isBadge: true }}
        color="red"
      />

      <div className="relative w-full overflow-clip">
        <Timeline data={data} fromColor="red-600" viaColor="red-900" />
      </div>
    </section>
  );
}
