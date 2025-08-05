"use client";
import { XCircle } from "lucide-react";
import { Headline } from "@/components/common/Headline";
import { CheckCircle } from "lucide-react";

export default function Component() {
  const problemScenario = {
    title: "Sans organisation : Le chaos quotidien",
    issues: [
      {
        icon: XCircle,
        text: "Emails perdus dans la boîte de réception Emails perdus dans la boîte de réception",
        severity: "high",
      },
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

  const withSolution = [
    {
      title: "Trouvez des sponsors pertinents en quelques clics grâce à des filtres avancés.",
    },
    {
      title: "Ajoutez des sponsors à votre liste de suivi",
    },
    {
      title: "Recevez des marques prêtes à collaborer, adaptées spécifiquement à vos talents.",
    },
    {
      title: "Soyez informé des nouvelles opportunités en temps réel",
    },
  ];

  return (
    <section className="flex flex-col gap-8 md:gap-10">
      <Headline
        title="Transformez le chaos en efficacité"
        description="Découvrez comment notre solution révolutionne la gestion de projet en équipe"
        badge="PROBLEME"
      />

      <div className="grid md:grid-cols-2 border-destructive/10 gap-12 lg:bg-muted rounded-lg p-0 lg:p-10">
        <div className="flex flex-col gap-4">
          <p className="text-lg font-semibold text-destructive text-center">Sans Womi</p>

          <div className="flex flex-col gap-4">
            {problemScenario.issues.map((issue, index) => (
              <div key={index} className="flex justify-center items-center gap-4 ">
                <issue.icon className="w-5 h-5 text-destructive flex-shrink-0" />
                <p className="flex-1 font-medium">{issue.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="space-y-6">
          <p className="text-lg font-semibold text-destructive text-center">Avec Womi</p>
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
        </div> */}
        <div className="flex flex-col gap-4">
          <p className="text-lg font-semibold text-destructive text-center">Avec Womi</p>

          <div className="flex flex-col gap-4">
            {withSolution.map((benefit, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <h4 className="font-semibold text-green-600">{benefit.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
