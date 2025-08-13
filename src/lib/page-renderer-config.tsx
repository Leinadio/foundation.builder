import { SectionConfig } from "@/components/common/DynamicRenderer";

export const pageConfig: SectionConfig[] = [
  {
    type: "header",
    components: [
      {
        component: "Header",
        props: {
          navigationLinks: [
            { id: "fonctionnalites", label: "Fonctionnalités", href: "#fonctionnalites" },
            { id: "tarifs", label: "Tarifs", href: "#tarifs" },
            { id: "faq", label: "FAQ", href: "#faq" }
          ]
        }
      },
      {
        component: "Hero",
        props: {
          badge: "🚀 Nouveau - Validation d'idée par IA",
          title: "Testez votre idée de business avant de perdre du temps (ou de l'argent)",
          description: "Notre IA analyse votre idée sous tous les angles – marché, cible, problème, solution, business model – et vous fournit une validation claire, rapide et visuelle.",
          buttonText: "Testez votre idée"
        }
      }
    ]
  },
  {
    type: "section",
    components: [
      {
        id: "probleme",
        component: "StartupStruggles",
        props: {
          title: (
            <>
              <span className="text-red-600">85%</span> {"des startups échouent car les "}
              <span className="text-red-600">fondateurs abandonnent</span>
            </>
          ),
          description: "Entre la technique, le business et les deadlines... Il y a tant de choses à gérer qu'on finit par perdre de vue l'essentiel.",
          badge: { text: "RÉALITÉ DU TERRAIN", isBadge: true },
          color: "red",
          fromColor: "red-600",
          viaColor: "red-900",
          data: [
            {
              title: "Manque de temps",
              paragraphs: [
                "Entre les réunions, les deadlines et la gestion quotidienne, il devient impossible de se concentrer sur l'essentiel : développer son produit et sa vision."
              ],
              image: {
                src: "/illu/late_1-destructive.svg",
                alt: "Illustration représentant la gestion du temps et des rendez-vous",
                className: "w-8/12 mx-auto block",
                width: 1,
                height: 1
              }
            },
            {
              title: "Complexité technique",
              paragraphs: [
                "Les développeurs sont confrontés à des défis techniques complexes, notamment en matière de sécurité, de performance et d'intégration avec les autres services."
              ],
              image: {
                src: "/illu/headache-destructive.svg",
                alt: "Illustration représentant la gestion du temps et des rendez-vous",
                className: "w-8/12 mx-auto block",
                width: 1,
                height: 1
              }
            },
            {
              title: "Ressources limitées",
              paragraphs: [
                "Budget serré, équipe réduite, temps limité : chaque décision compte et il faut faire plus avec moins pour réussir à lancer son produit."
              ],
              image: {
                src: "/illu/limited_ressource-destructive.svg",
                alt: "Illustration représentant la gestion du temps et des rendez-vous",
                className: "w-8/12 mx-auto block",
                width: 1,
                height: 1
              }
            }
          ]
        }
      },
      {
        id: "solution",
        component: "SuccessPath",
        props: {
          title: (
            <>
              <span className="text-green-600">90%</span> {"des startups qui s'organisent "}
              <span className="text-green-600">atteignent leurs objectifs</span>
            </>
          ),
          description: "Découvrez comment transformer le chaos en machine à succès. Voici le chemin que suivent les fondateurs qui réussissent.",
          badge: { text: "TRANSFORMATION RÉUSSIE", isBadge: true },
          color: "green",
          fromColor: "green-600",
          viaColor: "emerald-500",
          data: [
            {
              type: "task-list",
              title: "Organisation claire",
              paragraphs: [
                "Avec une structure organisée, chaque tâche trouve sa place et chaque membre de l'équipe sait exactement quoi faire et quand."
              ],
              features: [
                { icon: "CheckCircle", text: "Tâches priorisées automatiquement" },
                { icon: "CheckCircle", text: "Délais respectés à 95%" },
                { icon: "CheckCircle", text: "Communication centralisée" }
              ],
              featuresLayout: "list",
              summary: { icon: "TrendingUp", label: "Résultat", text: "+65% de productivité en équipe dès la première semaine" }
            },
            {
              type: "card-list",
              title: "Collaboration fluide",
              paragraphs: [
                "Fini les malentendus et les tâches dupliquées. L'équipe travaille en harmonie avec une visibilité complète sur l'avancement."
              ],
              features: [
                { icon: "Users", text: "Équipe synchronisée" },
                { icon: "Zap", text: "Réactivité maximale" }
              ],
              featuresLayout: "grid",
              summary: { icon: "TrendingUp", label: "Impact", text: "Réduction de 80% des réunions inutiles et des emails de suivi" }
            },
            {
              type: "bullets-list",
              title: "Croissance accélérée",
              paragraphs: [
                "Avec les bonnes fondations, votre startup peut enfin se concentrer sur ce qui compte : créer de la valeur et grandir."
              ],
              bullets: [
                "Focus retrouvé sur le produit",
                "Équipe motivée et alignée",
                "Livraisons dans les temps",
                "Clients satisfaits et fidèles",
                "Investisseurs confiants"
              ],
              summary: {
                icon: "TrendingUp",
                label: "Transformation",
                text: "De 85% d'échecs à 90% de réussite : rejoignez les startups qui réussissent"
              }
            }
          ]
        }
      },
      {
        id: "fonctionnement",
        component: "HowItWork",
        props: {
          title: "Transformez le chaos en efficacité",
          description: "L'efficacité retrouvée avec notre plateforme",
          badge: { text: "COMMENT ÇA MARCHE ?", isBadge: false },
          steps: [
            {
              step: "Étape 1",
              title: "Créer un projet",
              description: "Pas besoin d'avoir un business plan en tête, ni même un concept parfaitement clair. Vous pouvez entrer une simple idée, une intuition, une envie — comme 'une app pour échanger des vêtements entre voisins' ou 'une solution pour aider les freelances à mieux gérer leurs revenus'.",
              objective: "🎯 Objectif : Démarrer sans pression, que vous soyez débutant ou expérimenté.",
              image: { src: "/images/step1_fr.png", alt: "Étape 1 - Description de votre projet" },
              layout: "text-image"
            },
            {
              step: "Étape 2",
              title: "Analyser votre projet",
              description: "Dès que votre idée est saisie, l'IA se met au travail. Elle réfléchit comme un analyste business, un expert produit, un marketer et un investisseur réunis. Elle identifie votre segment de marché, le profil des clients potentiels, la problématique que vous résolvez et la pertinence de votre solution.",
              objective: "💡 En quelques secondes, vous avez une vision complète de votre projet, bien au-delà d'un simple brainstorming.",
              image: { src: "/images/step2_fr.png", alt: "Étape 2 - Analyse de votre projet" },
              layout: "image-text"
            },
            {
              step: "Étape 3",
              title: "Développer votre projet",
              description: "Chaque section du rapport est claire, structurée et conçue pour être actionnable. Vous pouvez relire, comparer, ajuster mentalement ou à l'écrit. Besoin d'une nouvelle perspective ? Générez une autre version à partir d'un angle différent, d'une autre niche ou d'un problème connexe.",
              objective: "🧠 C'est comme un outil de réflexion rapide, pensé pour vous aider à clarifier, itérer et avancer.",
              image: { src: "/images/step3_fr.png", alt: "Étape 3 - Développer votre projet" },
              layout: "text-image"
            }
          ]
        }
      },
      {
        id: "fonctionnalites",
        component: "FeatureBentoGrid",
        props: {
          title: "Ce que vous pouvez faire avec l'IA",
          description: "L'IA est un outil puissant qui peut vous aider dans votre travail de validation d'idées.",
          badge: { text: "FONCTIONNALITÉS", isBadge: false },
          bentoItems: [
            {
              title: "Génération de contenu IA",
              description: "Découvrez la puissance de l'IA pour générer du contenu unique et pertinent.",
              skeleton: "SkeletonOne",
              className: "md:col-span-1",
              icon: "IconClipboardCopy"
            },
            {
              title: "Correction automatique",
              description: "Laissez l'IA gérer la correction et l'amélioration de vos documents.",
              skeleton: "SkeletonTwo",
              className: "md:col-span-1",
              icon: "IconFileBroken"
            },
            {
              title: "Suggestions contextuelles",
              description: "Obtenez des suggestions alimentées par l'IA basées sur votre contexte d'écriture.",
              skeleton: "SkeletonThree",
              className: "md:col-span-1",
              icon: "IconSignature"
            },
            {
              title: "Analyse de sentiment",
              description: "Comprenez le sentiment de votre texte grâce à l'analyse IA.",
              skeleton: "SkeletonFour",
              className: "md:col-span-2",
              icon: "IconTableColumn"
            },
            {
              title: "Résumé de texte",
              description: "Résumez vos longs documents avec la technologie IA.",
              skeleton: "SkeletonFive",
              className: "md:col-span-1",
              icon: "IconBoxAlignRightFilled"
            }
          ],
          hoverFeatures: [
            {
              title: "Conçu pour les entrepreneurs",
              description: "Conçu pour les entrepreneurs, les innovateurs, les rêveurs et les créateurs d'entreprise.",
              icon: "IconTerminal2"
            },
            {
              title: "Facilité d'utilisation",
              description: "C'est aussi facile à utiliser qu'un iPhone, et aussi efficace qu'un consultant expert.",
              icon: "IconEaseInOut"
            },
            {
              title: "Prix imbattable",
              description: "Nos prix sont les meilleurs du marché. Pas de frais cachés, pas de verrouillage.",
              icon: "IconCurrencyDollar"
            },
            {
              title: "Disponibilité 100%",
              description: "Notre plateforme est toujours disponible quand vous en avez besoin.",
              icon: "IconCloud"
            },
            {
              title: "Architecture multi-projets",
              description: "Gérez plusieurs projets simultanément avec une interface unifiée.",
              icon: "IconRouteAltLeft"
            },
            {
              title: "Support 24/7",
              description: "Nous sommes disponibles 100% du temps. Du moins, nos agents IA le sont.",
              icon: "IconHelp"
            },
            {
              title: "Garantie satisfait ou remboursé",
              description: "Si vous n'aimez pas notre plateforme, nous vous convaincrons de l'aimer.",
              icon: "IconAdjustmentsBolt"
            },
            {
              title: "Et bien plus encore",
              description: "Je n'ai plus d'idées de copy. Acceptez mes sincères excuses.",
              icon: "IconHeart"
            }
          ]
        }
      },
      {
        id: "for-who",
        component: "ForWho",
        props: {
          title: "Conçu pour toutes les tailles d'entreprise",
          description: "Donnez à toute votre équipe le pouvoir de valider des idées en 3 minutes ou moins. Aucune compétence en business plan requise.",
          badge: { text: "POUR QUI", isBadge: false },
          companySizes: [
            {
              id: "startups",
              title: "Pour les startups & scaleups",
              description: "Validation d'idées simplifiée. Testez vos concepts rapidement et validez votre marché avant d'investir."
            },
            {
              id: "agencies",
              title: "Pour les agences",
              description: "Gérez facilement la validation d'idées pour plusieurs clients et créez des rapports professionnels qui impressionnent."
            },
            {
              id: "ecommerce",
              title: "Pour l'e-commerce",
              description: "Boostez vos campagnes marketing avec une validation d'idées claire pour vos nouveaux produits et services."
            }
          ]
        }
      },
      {
        id: "tarifs",
        component: "Pricing",
        props: {
          title: "Choisissez votre plan",
          description: "Des tarifs simples et transparents qui s'adaptent à vos besoins. Commencez gratuitement et évoluez selon votre croissance.",
          pricingPlans: [
            {
              name: "Gratuit",
              monthlyPrice: "0",
              yearlyPrice: "0",
              description: "Parfait pour commencer",
              features: ["Jusqu'à 3 projets", "5 GB de stockage", "Support communautaire", "Fonctionnalités de base"],
              limitations: ["Pas de support prioritaire", "Fonctionnalités avancées limitées"],
              buttonText: "Commencer gratuitement",
              popular: false,
            },
            {
              name: "Pro",
              monthlyPrice: "29",
              yearlyPrice: "290",
              description: "Pour les professionnels",
              features: [
                "Projets illimités",
                "100 GB de stockage",
                "Support prioritaire",
                "Toutes les fonctionnalités",
                "Analytics avancées",
                "Intégrations API",
              ],
              limitations: [],
              buttonText: "Choisir Pro",
              popular: true,
            },
            {
              name: "Enterprise",
              monthlyPrice: "99",
              yearlyPrice: "990",
              description: "Pour les grandes équipes",
              features: [
                "Tout du plan Pro",
                "Stockage illimité",
                "Support dédié 24/7",
                "Sécurité avancée",
                "SSO et SAML",
                "Audit et conformité",
                "Formation personnalisée",
              ],
              limitations: [],
              buttonText: "Contacter les ventes",
              popular: false,
            }
          ]
        }
      },
      {
        id: "faq",
        component: "FAQ",
        props: {
          badge: "FAQ",
          heading: "Besoin d'aide ?",
          headingHighlight: "Nous avons les réponses.",
          description: "Vous avez encore des questions ? N'hésitez pas à me contacter sur mon email : contact@foundation.builder",
          items: [
            {
              id: "faq-1",
              question: "What is a FAQ?",
              answer: "A FAQ is a list of frequently asked questions and answers on a particular topic."
            },
            {
              id: "faq-2",
              question: "What is the purpose of a FAQ?",
              answer: "The purpose of a FAQ is to provide answers to common questions and help users find the information they need quickly and easily."
            },
            {
              id: "faq-3",
              question: "How do I create a FAQ?",
              answer: "To create a FAQ, you need to compile a list of common questions and answers on a particular topic and organize them in a clear and easy-to-navigate format."
            },
            {
              id: "faq-4",
              question: "What are the benefits of a FAQ?",
              answer: "The benefits of a FAQ include providing quick and easy access to information, reducing the number of support requests, and improving the overall user experience."
            },
            {
              id: "faq-5",
              question: "How should I organize my FAQ?",
              answer: "You should organize your FAQ in a logical manner, grouping related questions together and ordering them from most basic to more advanced topics."
            },
            {
              id: "faq-6",
              question: "How long should FAQ answers be?",
              answer: "FAQ answers should be concise and to the point, typically a few sentences or a short paragraph is sufficient for most questions."
            },
            {
              id: "faq-7",
              question: "Should I include links in my FAQ?",
              answer: "Yes, including links to more detailed information or related resources can be very helpful for users who want to learn more about a particular topic."
            }
          ]
        }
      }
    ]
  },
  {
    type: "section-full-width",
    components: [
      {
        id: "showcase-blog",
        component: "ShowcaseBlog",
        props: {
          title: "Projets",
          description:
            "Découvrez comment les entreprises et développeurs leaders utilisent les technologies web modernes pour créer des expériences numériques exceptionnelles. Ces études de cas présentent des applications réelles et des histoires de succès.",
          items: [
            {
              id: "shadcn-ui",
              title: "shadcn/ui : Construire une bibliothèque de composants moderne",
              description:
                "Explorez comment shadcn/ui a révolutionné les bibliothèques de composants React en offrant une approche unique de distribution et de personnalisation des composants, facilitant la création d'applications belles et accessibles.",
              href: "https://ui.shadcn.com",
              image:
                "https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
            },
            {
              id: "tailwind",
              title: "Tailwind CSS : La révolution utility-first",
              description:
                "Découvrez comment Tailwind CSS a transformé la façon dont les développeurs stylisent leurs applications, offrant une approche utility-first qui accélère le développement tout en maintenant une flexibilité de design complète.",
              href: "https://tailwindcss.com",
              image:
                "https://images.unsplash.com/photo-1551250928-e4a05afaed1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjR8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
            },
            {
              id: "astro",
              title: "Astro : Le framework web tout-en-un",
              description:
                "Apprenez comment l'architecture 'Islands Architecture' innovante d'Astro et son approche zéro-JS par défaut aident les développeurs à construire des sites web plus rapides tout en maintenant une interactivité riche là où c'est nécessaire.",
              href: "https://astro.build",
              image:
                "https://images.unsplash.com/photo-1536735561749-fc87494598cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&ixlib=rb-4.0.3&q=80&w=1080",
            },
            {
              id: "react",
              title: "React : Pionnier de l'interface utilisateur basée sur les composants",
              description:
                "Voyez comment React continue de façonner le développement web moderne avec son architecture basée sur les composants, permettant aux développeurs de construire des interfaces utilisateur complexes avec du code réutilisable et maintenable.",
              href: "https://react.dev",
              image:
                "https://images.unsplash.com/photo-1548324215-9133768e4094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMzF8fHx8fHwyfHwxNzIzNDM1MzA1fA&lib=rb-4.0.3&q=80&w=1080",
            },
            {
              id: "nextjs",
              title: "Next.js : Le framework React pour la production",
              description:
                "Explorez comment Next.js est devenu le framework incontournable pour construire des applications React full-stack, offrant des fonctionnalités comme les composants serveur, le routage basé sur les fichiers et l'optimisation automatique.",
              href: "https://nextjs.org",
              image:
                "https://images.unsplash.com/photo-1550070881-a5d71eda5800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjV8fHx8fHwyfHwxNzIzNDM1Mjk4fA&lib=rb-4.0.3&q=80&w=1080",
            },
          ]
        }
      }
    ]
  },
  {
    type: "footer",
    components: [
      {
        id: "footer",
        component: "Footer",
        props: {
          callToAction: {
            badge: "🚀 Prêt à commencer ?",
            title: "Transformez vos idées en succès",
            description: "Rejoignez des milliers d'entrepreneurs qui utilisent notre plateforme pour valider et développer leurs projets.",
            primaryButtonText: "Commencer gratuitement",
            secondaryButtonText: "Voir la démo"
          },
          footerLinks: {
            product: {
              title: "Produit",
              links: [
                { name: "Fonctionnalités", href: "#features" },
                { name: "Tarifs", href: "#pricing" },
                { name: "Documentation", href: "#docs" },
                { name: "API", href: "#api" }
              ]
            },
            company: {
              title: "Entreprise",
              links: [
                { name: "À propos", href: "#about" },
                { name: "Blog", href: "#blog" },
                { name: "Carrières", href: "#careers" },
                { name: "Contact", href: "#contact" }
              ]
            },
            support: {
              title: "Support",
              links: [
                { name: "Centre d'aide", href: "#help" },
                { name: "Communauté", href: "#community" },
                { name: "Statut", href: "#status" },
                { name: "Feedback", href: "#feedback" }
              ]
            },
            legal: {
              title: "Légal",
              links: [
                { name: "Conditions d'utilisation", href: "/terms" },
                { name: "Politique de confidentialité", href: "/privacy" },
                { name: "Cookies", href: "/cookies" },
                { name: "RGPD", href: "/gdpr" }
              ]
            }
          },
          socialLinks: [
            { name: "Twitter", href: "#" },
            { name: "Facebook", href: "#" },
            { name: "LinkedIn", href: "#" },
            { name: "Instagram", href: "#" },
            { name: "GitHub", href: "#" }
          ],
          companyInfo: {
            name: "Foundation",
            logo: "F",
            copyright: "Foundation Builder. Tous droits réservés."
          }
        }
      }
    ]
  }
];
