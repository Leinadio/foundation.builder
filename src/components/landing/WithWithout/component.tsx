import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  X,
  Check,
  Clock,
  Zap,
  Frown,
  Smile,
  AlertTriangle,
  Shield,
  TrendingDown,
  TrendingUp,
  Users,
  UserCheck,
} from "lucide-react";

export function Component() {
  const beforeScenarios = [
    {
      icon: Clock,
      title: "Perte de temps considérable",
      description: "Plusieurs heures perdues chaque semaine à chercher des informations dispersées",
    },
    {
      icon: Frown,
      title: "Frustration quotidienne",
      description: "Stress et irritation face aux processus manuels répétitifs et chronophages",
    },
    {
      icon: AlertTriangle,
      title: "Erreurs fréquentes",
      description: "Risques d'erreurs humaines dans la saisie et le traitement des données",
    },
    {
      icon: TrendingDown,
      title: "Productivité limitée",
      description: "Difficultés à suivre les performances et à identifier les axes d'amélioration",
    },
    {
      icon: Users,
      title: "Communication fragmentée",
      description: "Informations éparpillées entre différents outils et équipes",
    },
  ];

  const afterScenarios = [
    {
      icon: Zap,
      title: "Efficacité maximale",
      description: "Automatisation des tâches répétitives, gain de 80% de temps sur les processus",
    },
    {
      icon: Smile,
      title: "Satisfaction au travail",
      description: "Interface intuitive et workflows optimisés pour une expérience utilisateur fluide",
    },
    {
      icon: Shield,
      title: "Fiabilité garantie",
      description: "Validation automatique et contrôles intégrés pour éliminer les erreurs",
    },
    {
      icon: TrendingUp,
      title: "Performance optimisée",
      description: "Tableaux de bord en temps réel et analytics avancés pour piloter l'activité",
    },
    {
      icon: UserCheck,
      title: "Collaboration renforcée",
      description: "Centralisation des données et outils de collaboration intégrés",
    },
  ];

  return (
    <div className="w-full mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Transformez votre façon de travailler</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {"Découvrez l'impact concret de notre solution sur votre quotidien professionnel"}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Sans le produit */}
        <Card className="border-red-200 bg-red-50/50">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <X className="w-8 h-8 text-red-600" />
            </div>
            <CardTitle className="text-2xl text-red-800">Sans notre solution</CardTitle>
            <Badge variant="destructive" className="w-fit mx-auto">
              Situation actuelle
            </Badge>
          </CardHeader>
          <CardContent className="space-y-6">
            {beforeScenarios.map((scenario, index) => {
              const IconComponent = scenario.icon;
              return (
                <div key={index} className="flex gap-4 p-4 bg-white rounded-lg border border-red-100">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">{scenario.title}</h4>
                    <p className="text-sm text-red-700">{scenario.description}</p>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Avec le produit */}
        <Card className="border-green-200 bg-green-50/50">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl text-green-800">Avec notre solution</CardTitle>
            <Badge className="w-fit mx-auto bg-green-600 hover:bg-green-700">Résultats obtenus</Badge>
          </CardHeader>
          <CardContent className="space-y-6">
            {afterScenarios.map((scenario, index) => {
              const IconComponent = scenario.icon;
              return (
                <div key={index} className="flex gap-4 p-4 bg-white rounded-lg border border-green-100">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">{scenario.title}</h4>
                    <p className="text-sm text-green-700">{scenario.description}</p>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>

      {/* Section de résumé */}
      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-2xl p-8 border">
          <h3 className="text-2xl font-bold mb-4">Le résultat ?</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">+80%</div>
              <p className="text-sm text-muted-foreground">Gain de productivité</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">-90%</div>
              <p className="text-sm text-muted-foreground">Réduction des erreurs</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Satisfaction équipe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
