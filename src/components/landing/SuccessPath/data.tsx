import { CheckCircle, TrendingUp, Users, Zap } from "lucide-react";

export const data = [
  {
    title: "Organisation claire",
    content: (
      <div>
        <p className="mb-8 text-sm md:text-lg">
          {
            "Avec une structure organisée, chaque tâche trouve sa place et chaque membre de l'équipe sait exactement quoi faire et quand."
          }
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 border-green-200 border rounded-lg">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
            <span className="text-base font-medium">Tâches priorisées automatiquement</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 border-green-200 border rounded-lg">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
            <span className="text-base font-medium">Délais respectés à 95%</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 border-green-200 border rounded-lg">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
            <span className="text-base font-medium">Communication centralisée</span>
          </div>
        </div>
        <div className="mt-6 p-4 bg-green-200 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-green-600" />
            <span className="text-base font-semibold text-green-900 dark:text-green-200">Résultat</span>
          </div>
          <p className="text-base text-green-800 dark:text-green-300">
            +65% de productivité en équipe dès la première semaine
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Collaboration fluide",
    content: (
      <div>
        <p className="mb-8 text-sm md:text-lg">
          {
            "Fini les malentendus et les tâches dupliquées. L'équipe travaille en harmonie avec une visibilité complète sur l'avancement."
          }
        </p>
        <div className="grid grid-cols-1 gap-4">
          <div className="p-4 border border-green-200 dark:border-green-800 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-green-600" />
              <span className="text-base  font-medium">Équipe synchronisée</span>
            </div>
            <p className="text-base text-muted-foreground">
              Chaque membre voit les dépendances et peut anticiper les blocages
            </p>
          </div>
          <div className="p-4 border border-green-200 dark:border-green-800 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-green-600" />
              <span className="text-base font-medium">Réactivité maximale</span>
            </div>
            <p className="text-xs text-muted-foreground">
              {"Notifications intelligentes pour ne jamais manquer l'essentiel"}
            </p>
          </div>
        </div>
        <div className="mt-6 p-4 bg-green-200 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-green-600" />
            <span className="text-base font-semibold text-green-800 dark:text-green-200">Impact</span>
          </div>
          <p className="text-base text-green-700 dark:text-green-300">
            Réduction de 80% des réunions inutiles et des emails de suivi
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Croissance accélérée",
    content: (
      <div>
        <p className="mb-8 text-sm md:text-lg">
          Avec les bonnes fondations, votre startup peut enfin se concentrer sur ce qui compte : créer de la valeur et
          grandir.
        </p>
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-base text-green-700 dark:text-green-300">
            ✅ Focus retrouvé sur le produit
          </div>
          <div className="flex items-center gap-2 text-base text-green-700 dark:text-green-300">
            ✅ Équipe motivée et alignée
          </div>
          <div className="flex items-center gap-2 text-base text-green-700 dark:text-green-300">
            ✅ Livraisons dans les temps
          </div>
          <div className="flex items-center gap-2 text-base text-green-700 dark:text-green-300">
            ✅ Clients satisfaits et fidèles
          </div>
          <div className="flex items-center gap-2 text-base text-green-700 dark:text-green-300">
            ✅ Investisseurs confiants
          </div>
        </div>
        <div className="mt-6 p-4 bg-green-200 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-green-800 dark:text-green-200">Transformation</span>
          </div>
          <p className="text-base text-green-700 dark:text-green-300">
            {"De 85% d'échecs à 90% de réussite : rejoignez les startups qui réussissent"}
          </p>
        </div>
      </div>
    ),
  },
];
