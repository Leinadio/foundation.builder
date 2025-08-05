"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { XCircle } from "lucide-react";
import { Headline } from "@/components/common/Headline";

export default function Component() {
  const problemScenario = {
    title: "Sans organisation : Le chaos quotidien",
    issues: [
      { icon: XCircle, text: "Emails perdus dans la boîte de réception", severity: "high" },
      { icon: XCircle, text: "Délais manqués par manque de visibilité", severity: "high" },
      { icon: XCircle, text: "Communication dispersée sur 5 plateformes", severity: "medium" },
      { icon: XCircle, text: "Équipe qui ne sait pas qui fait quoi", severity: "high" },
      { icon: XCircle, text: "Réunions improductives sans suivi", severity: "medium" },
    ],
    metrics: {
      productivity: 35,
      satisfaction: 25,
      deadlines: 40,
    },
  };

  return (
    <section className="flex flex-col gap-8 md:gap-10">
      <Headline
        title="Transformez le chaos en efficacité"
        description="Découvrez comment notre solution révolutionne la gestion de projet en équipe"
        badge="PROBLEME"
      />

      <div className="grid md:grid-cols-2 gap-5">
        <Card className="border-destructive/10">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center gap-2">
              <XCircle className="w-6 h-6" />
              {problemScenario.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {problemScenario.issues.map((issue, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg border">
                <issue.icon className="w-5 h-5 text-destructive flex-shrink-0" />
                <span className="flex-1">{issue.text}</span>
                {/* <Badge className={getSeverityColor(issue.severity)}>
                  {issue.severity === "high" ? "Critique" : "Moyen"}
                </Badge> */}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-foreground">{"Impact sur l'équipe"}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Productivité</span>
                <span className="font-semibold text-red-600">{problemScenario.metrics.productivity}%</span>
              </div>
              <Progress value={problemScenario.metrics.productivity} className="h-3" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Satisfaction équipe</span>
                <span className="font-semibold text-red-600">{problemScenario.metrics.satisfaction}%</span>
              </div>
              <Progress value={problemScenario.metrics.satisfaction} className="h-3" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Respect des délais</span>
                <span className="font-semibold text-red-600">{problemScenario.metrics.deadlines}%</span>
              </div>
              <Progress value={problemScenario.metrics.deadlines} className="h-3" />
            </div>

            <div className="mt-6 p-4 bg-red-100 rounded-lg">
              <p className="text-red-800 font-semibold text-center">💸 Coût estimé : 40% de temps perdu par semaine</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
