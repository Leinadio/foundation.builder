import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TargetAudience {
  id: string;
  title: string;
  description: string;
  badge: string;
  benefits: string[];
  icon: string;
}

const targetAudiences: TargetAudience[] = [
  {
    id: "entrepreneurs",
    title: "Entrepreneurs & Startups",
    description: "Vous lancez votre projet et avez besoin d'une base solide pour développer rapidement",
    badge: "Démarrage rapide",
    benefits: [
      "Architecture prête à l'emploi pour un MVP",
      "Gain de temps de développement considérable",
      "Bonnes pratiques intégrées dès le départ",
      "Évolutivité garantie pour la croissance",
    ],
    icon: "🚀",
  },
  {
    id: "developers",
    title: "Développeurs Expérimentés",
    description: "Vous cherchez une architecture clean et moderne pour vos projets Next.js",
    badge: "Architecture avancée",
    benefits: [
      "Architecture hexagonale implémentée",
      "Séparation claire des responsabilités",
      "Code maintenable et testable",
      "Patterns avancés prêts à utiliser",
    ],
    icon: "👨‍💻",
  },
  {
    id: "agencies",
    title: "Agences & Équipes",
    description: "Vous développez plusieurs projets et voulez standardiser vos pratiques",
    badge: "Standardisation",
    benefits: [
      "Base commune pour tous vos projets",
      "Onboarding facilité des nouveaux développeurs",
      "Cohérence entre les équipes",
      "Réduction des coûts de maintenance",
    ],
    icon: "🏢",
  },
  {
    id: "learners",
    title: "Apprenants & Étudiants",
    description: "Vous voulez apprendre les meilleures pratiques de développement moderne",
    badge: "Apprentissage",
    benefits: [
      "Exemple concret d'architecture clean",
      "Code documenté et explicatif",
      "Patterns modernes à étudier",
      "Base pour vos projets d'apprentissage",
    ],
    icon: "🎓",
  },
];

export function Component() {
  return (
    <section className="bg-gradient-to-b from-background to-muted/20">
      <div className="mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pour qui est fait ce boilerplate ?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Que vous soyez entrepreneur, développeur expérimenté, ou en phase d&apos;apprentissage, notre solution
            s&apos;adapte à vos besoins spécifiques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
          {targetAudiences.map((audience) => (
            <Card
              key={audience.id}
              className="relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="text-4xl mb-2">{audience.icon}</div>
                  <Badge variant="secondary" className="ml-2">
                    {audience.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">{audience.title}</CardTitle>
                <CardDescription className="text-base">{audience.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
                    Ce que vous obtenez :
                  </h4>
                  <ul className="space-y-2">
                    {audience.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-primary font-bold mt-0.5">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground">
            Quel que soit votre profil, notre boilerplate vous fait gagner du temps et vous garantit une base solide
            pour vos projets.
          </p>
        </div>
      </div>
    </section>
  );
}
