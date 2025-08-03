"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Target, Activity, MessageSquare, Users2, Zap, BarChart3 } from "lucide-react";
import { Headline } from "@/components/common/Headline";

export default function Component() {
  const solutionScenario = {
    title: "Avec notre solution : L'efficacité retrouvée",
    benefits: [
      { icon: CheckCircle, text: "Toutes les tâches centralisées en un lieu", severity: "success" },
      { icon: CheckCircle, text: "Suivi en temps réel des projets", severity: "success" },
      { icon: CheckCircle, text: "Communication contextuelle par projet", severity: "success" },
      { icon: CheckCircle, text: "Rôles et responsabilités clairs", severity: "success" },
      { icon: CheckCircle, text: "Tableaux de bord automatisés", severity: "success" },
    ],
    metrics: {
      productivity: 85,
      satisfaction: 92,
      deadlines: 95,
    },
  };

  return (
    <section className="flex flex-col gap-8 md:gap-12">
      <Headline
        title="Transformez le chaos en efficacité"
        description="L'efficacité retrouvée avec notre plateforme"
        badge="SOLUTION"
      />

      <div className="space-y-12 flex flex-col gap-6">
        {/* Section Solution */}
        <div className="space-y-6">
          {/* Grille de fonctionnalités principales */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Centralisation des tâches */}
            <Card className="border-green-200 bg-green-50 hover:shadow-lg transition-shadow">
              <CardHeader className="relative">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.8)]">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-green-800 text-lg text-center">Centralisation</CardTitle>
                <CardDescription className="text-green-600 text-center">
                  Toutes vos tâches en un seul endroit
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Vue globale des projets</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Gestion unifiée des tâches</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Synchronisation temps réel</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Suivi en temps réel */}
            <Card className="border-green-200 bg-green-50 hover:shadow-lg transition-shadow">
              <CardHeader className="relative">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.8)]">
                    <Activity className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-green-800 text-lg text-center">Suivi temps réel</CardTitle>
                <CardDescription className="text-green-600 text-center">
                  Visibilité complète sur l&apos;avancement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Tableaux de bord interactifs</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Notifications intelligentes</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Rapports automatisés</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Communication contextuelle */}
            <Card className="border-green-200 bg-green-50 hover:shadow-lg transition-shadow">
              <CardHeader className="relative">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.8)]">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-green-800 text-lg text-center">Communication</CardTitle>
                <CardDescription className="text-green-600 text-center">Échanges organisés par projet</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Chat contextuel intégré</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Partage de fichiers sécurisé</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Historique des échanges</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gestion des rôles */}
            <Card className="border-green-200 bg-green-50 hover:shadow-lg transition-shadow">
              <CardHeader className="relative">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.8)]">
                    <Users2 className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-green-800 text-lg text-center">Rôles & Permissions</CardTitle>
                <CardDescription className="text-green-600 text-center">
                  Responsabilités claires pour tous
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Attribution automatique</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Niveaux d&apos;accès flexibles</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Workflow personnalisés</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Automatisation */}
            <Card className="border-green-200 bg-green-50 hover:shadow-lg transition-shadow">
              <CardHeader className="relative">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.8)]">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-green-800 text-lg text-center">Automatisation</CardTitle>
                <CardDescription className="text-green-600 text-center">
                  Réduisez les tâches répétitives
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Règles métier intelligentes</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Intégrations API natives</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Déclencheurs personnalisés</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Métriques et ROI */}
            <Card className="border-green-200 bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-shadow">
              <CardHeader className="relative">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.8)]">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-green-800 text-lg text-center">Résultats mesurables</CardTitle>
                <CardDescription className="text-green-600 text-center">
                  Impact quantifiable sur votre équipe
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Productivité</span>
                    <span className="font-bold text-green-600">{solutionScenario.metrics.productivity}%</span>
                  </div>
                  <Progress value={solutionScenario.metrics.productivity} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Satisfaction</span>
                    <span className="font-bold text-green-600">{solutionScenario.metrics.satisfaction}%</span>
                  </div>
                  <Progress value={solutionScenario.metrics.satisfaction} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Délais respectés</span>
                    <span className="font-bold text-green-600">{solutionScenario.metrics.deadlines}%</span>
                  </div>
                  <Progress value={solutionScenario.metrics.deadlines} className="h-2" />
                </div>

                <div className="mt-4 p-3 bg-green-200 rounded-lg">
                  <p className="text-green-800 font-semibold text-center text-sm">
                    💰 ROI : +150% de productivité en 3 mois
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
