import { Timeline } from "@/components/ui/timeline";
import { data } from "./data";
import { Headline } from "@/components/common/Headline";

export function Component() {
  return (
    <section className="flex flex-col gap-20 md:gap-24">
      <Headline
        title={
          <>
            <span className="text-green-600">90%</span> {"des startups qui s'organisent "}
            <span className="text-green-600">atteignent leurs objectifs</span>
          </>
        }
        description="Découvrez comment transformer le chaos en machine à succès. Voici le chemin que suivent les fondateurs qui réussissent."
        badge={{ text: "TRANSFORMATION RÉUSSIE", isBadge: true }}
        color="green"
      />

      <div className="relative w-full overflow-clip">
        <Timeline data={data} fromColor="green-600" viaColor="emerald-500" />
      </div>
    </section>
  );
}
