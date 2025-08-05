"use client";
import { CheckCircle, Target, Activity, MessageSquare, Users2, Zap } from "lucide-react";
import { Headline } from "@/components/common/Headline";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";

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

  const benefitCards = [
    {
      title: "Centralisation",
      description: "Toutes vos tâches en un seul endroit",
      icon: Target,
      features: ["Vue globale des projets", "Gestion unifiée des tâches", "Synchronisation temps réel"],
    },
    {
      title: "Suivi en temps réel",
      description: "Visibilité complète sur l'avancement",
      icon: Activity,
      features: ["Tableaux de bord interactifs", "Notifications intelligentes", "Rapports automatisés"],
    },
    {
      title: "Communication contextuelle",
      description: "Échanges organisés par projet",
      icon: MessageSquare,
      features: ["Chat contextuel intégré", "Partage de fichiers sécurisé", "Historique des échanges"],
    },
    {
      title: "Gestion des rôles",
      description: "Responsabilités claires pour tous",
      icon: Users2,
      features: ["Attribution automatique", "Niveaux d'accès flexibles", "Workflow personnalisés"],
    },
    {
      title: "Automatisation",
      description: "Réduisez les tâches répétitives",
      icon: Zap,
      features: ["Règles métier intelligentes", "Intégrations API natives", "Déclencheurs personnalisés"],
    },
  ];

  return (
    <section className="flex flex-col gap-8 md:gap-10">
      <Headline
        title="Transformez le chaos en efficacité"
        description="L'efficacité retrouvée avec notre plateforme"
        badge="Bénéfices"
      />

      <div className="flex flex-col gap-5">
        <FeaturesSectionWithHoverEffects />
      </div>
    </section>
  );
}
