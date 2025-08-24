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
            { id: "faq", label: "FAQ", href: "#faq" },
          ],
        },
      },
      {
        component: "Hero",
        props: {
          badge: "💼 Pour les freelances",
          title: "Envoyez un devis automatiquement dès qu’un client vous contacte",
          description:
            "Notre extension Chrome détecte les demandes entrantes et génère un devis instantanément, prêt à être envoyé. Gagnez du temps, professionnalisez vos échanges, et ne ratez plus jamais une opportunité.",
        },
      },
    ],
  },
  {
    type: "section",
    components: [
      {
        id: "video",
        component: "Video",
        props: {
          // Vidéo de démo de l'extension
        },
      },
    ],
  },
  {
    type: "section-full-width",
    components: [
      {
        id: "problem-overview",
        component: "Problem",
        props: {
          title: "Le problème",
          description:
            "En tant que freelance, répondre rapidement et professionnellement aux demandes clients est essentiel, mais chronophage. Chaque minute compte.",
          badge: { text: "RÉALITÉ DU TERRAIN", isBadge: false },
          steps: [
            {
              step: "1",
              title: "Temps perdu à créer des devis manuellement",
              description: "Risque d'oublier de répondre",
              emoji: "😰",
            },
            {
              step: "2",
              title: "Risque d'oublier de répondre",
              description: "Manque de professionnalisme perçu",
              emoji: "😔",
            },

            {
              step: "3",
              title: "Manque de professionnalisme perçu",
              description: "Perte de clients potentiels",
              emoji: "😰",
            },
          ],
        },
      },
    ],
  },
  {
    type: "section",
    components: [
      {
        id: "solution",
        component: "SuccessPath",
        props: {
          title: (
            <>
              Automatisez vos <span className="text-primary">devis</span>, boostez votre{" "}
              <span className="text-primary">réactivité</span>
            </>
          ),
          description:
            "L’extension détecte automatiquement les emails de prospection et crée un devis professionnel en quelques secondes.",
          badgeText: "LA SOLUTION",
          color: "primary",
          fromColor: "from-primary",
          viaColor: "via-primary",
          data: [
            {
              type: "task-list",
              title: "Détection intelligente",
              paragraphs: [
                "L'extension lit les nouveaux emails et reconnaît automatiquement les demandes de prestation.",
              ],
              features: [
                { icon: "Eye", text: "Analyse automatique de l'email" },
                { icon: "Inbox", text: "Déclenchement contextuel" },
              ],
              summary: {
                icon: "Bell",
                label: "Gain de temps",
                text: "-80% de temps passé à trier et répondre",
              },
            },
            {
              type: "task-list",
              title: "Devis instantané",
              paragraphs: [
                "Un devis est généré sur la base de vos tarifs pré-enregistrés, personnalisable en un clic avant envoi.",
              ],
              features: [
                { icon: "FileText", text: "Devis PDF prêt à être envoyé" },
                { icon: "PenTool", text: "Templates configurables" },
              ],
              summary: {
                icon: "Send",
                label: "Conversion",
                text: "+40% de réponses client obtenues",
              },
            },
            {
              type: "task-list",
              title: "Suivi intégré",
              paragraphs: ["Gardez une trace de vos demandes, devis envoyés et relances automatiques possibles."],
              features: [
                { icon: "Table", text: "Tableau de bord" },
                { icon: "Bell", text: "Notifications de lecture" },
                { icon: "Clock", text: "Relance automatique après X jours" },
              ],
              summary: {
                icon: "CheckCircle",
                label: "Impact",
                text: "Réduction de 80% des réunions inutiles et des emails de suivi",
              },
            },
          ],
        },
      },
      {
        id: "fonctionnement",
        component: "HowItWork",
        props: {
          title: "Comment ça marche",
          description: "3 étapes simples pour automatiser votre prospection",
          color: "primary",
          badgeText: "PROCESS",
          steps: [
            {
              step: "1",
              title: "Installez l’extension",
              description: "Disponible sur le Chrome Web Store. L’installation prend moins d’une minute.",
              objective: "🚀 Démarrage rapide et sans friction",
              image: { src: "/images/step1_fr.png", alt: "Installation de l'extension" },
              layout: "text-image",
            },
            {
              step: "2",
              title: "Connectez votre email",
              description:
                "L’extension lit uniquement les emails entrants contenant des mots-clés liés aux prestations (ex : devis, freelance, mission...).",
              objective: "🔐 Respect total de votre vie privée",
              image: { src: "/images/step2_fr.png", alt: "Connexion à Gmail" },
              layout: "image-text",
            },
            {
              step: "3",
              title: "Envoyez un devis automatiquement",
              description:
                "Vous recevez une notification et pouvez valider ou ajuster le devis avant l’envoi automatique.",
              objective: "📄 Gain de temps & plus de clients",
              image: { src: "/images/step3_fr.png", alt: "Création de devis automatique" },
              layout: "text-image",
            },
          ],
        },
      },
      {
        id: "fonctionnalites",
        component: "FeatureBentoGrid",
        props: {
          title: "Ce que l’extension peut faire pour vous",
          description: "Tout ce qu’il vous faut pour faire bonne impression, sans effort.",
          badge: { text: "FONCTIONNALITÉS", isBadge: false },
          color: "primary",
          bentoItems: [
            {
              title: "Détection intelligente d’email",
              description: "Comprend automatiquement les demandes client",
              skeleton: "SkeletonOne",
              className: "md:col-span-1",
              icon: "IconMailSearch",
            },
            {
              title: "Génération de devis",
              description: "Créez un devis PDF à partir de modèles personnalisés",
              skeleton: "SkeletonTwo",
              className: "md:col-span-1",
              icon: "IconFileDescription",
            },
            {
              title: "Réponse en 1 clic",
              description: "Un bouton intégré dans Gmail pour envoyer le devis",
              skeleton: "SkeletonThree",
              className: "md:col-span-1",
              icon: "IconSend",
            },
            {
              title: "Dashboard de suivi",
              description: "Visualisez vos prospects, devis envoyés, relances à faire",
              skeleton: "SkeletonFour",
              className: "md:col-span-2",
              icon: "IconLayoutDashboard",
            },
            {
              title: "Relance automatique",
              description: "Relance configurable après 2, 3 ou 5 jours",
              skeleton: "SkeletonFive",
              className: "md:col-span-1",
              icon: "IconAlarm",
            },
          ],
          hoverFeatures: [
            {
              title: "Pensé pour les freelances",
              description: "Gérez votre prospection sans perdre de temps",
              icon: "IconBriefcase",
            },
            {
              title: "Simple & rapide",
              description: "Pas de formation requise. C’est plug & play.",
              icon: "IconBolt",
            },
            {
              title: "Extension légère",
              description: "Aucun ralentissement de votre navigateur",
              icon: "IconFeather",
            },
            {
              title: "Support en ligne 24/7",
              description: "Une équipe (ou un bot) à votre écoute",
              icon: "IconHeadphones",
            },
          ],
        },
      },
    ],
  },
  {
    type: "section-full-width-with-background",
    components: [
      {
        id: "for-who",
        component: "ForWho",
        props: {
          title: "Conçu pour les freelances, consultants et indépendants",
          description: "Vous échangez avec des clients par email ? L’extension est faite pour vous.",
          badge: { text: "POUR QUI", isBadge: false },
          color: "primary",
          companySizes: [
            {
              id: "freelances",
              title: "Développeurs, designers, rédacteurs…",
              description: "Automatisez vos devis sans créer un CRM complet ou perdre du temps à chaque échange.",
            },
            {
              id: "consultants",
              title: "Consultants et experts métiers",
              description: "Montrez votre professionnalisme dès le premier mail avec des devis soignés et rapides.",
            },
            {
              id: "agences",
              title: "Petites agences ou collectifs",
              description: "Standardisez vos devis et gagnez du temps sur la gestion client.",
            },
          ],
        },
      },
    ],
  },
  {
    type: "section",
    components: [
      {
        id: "tarifs",
        component: "Pricing",
        props: {
          title: "Des tarifs simples, sans surprise",
          description: "Commencez gratuitement, puis passez à Pro quand vous êtes prêt.",
          pricingPlans: [
            {
              name: "Gratuit",
              monthlyPrice: "0",
              yearlyPrice: "0",
              description: "Testez l’extension sans engagement",
              features: ["Jusqu'à 5 devis / mois", "1 modèle de devis", "Support email"],
              limitations: ["Pas de relance automatique", "Dashboard limité"],
              buttonText: "Commencer gratuitement",
              popular: false,
            },
            {
              name: "Pro",
              monthlyPrice: "12",
              yearlyPrice: "120",
              description: "Le pack parfait pour les freelances",
              features: [
                "Devis illimités",
                "Dashboard complet",
                "Relances automatiques",
                "Modèles personnalisés",
                "Support prioritaire",
              ],
              limitations: [],
              buttonText: "Passer à Pro",
              popular: true,
            },
          ],
        },
      },
      {
        id: "faq",
        component: "FAQ",
        props: {
          badge: "FAQ",
          heading: "Des questions ?",
          headingHighlight: "On vous répond",
          description: "Si vous ne trouvez pas votre réponse ici, contactez-nous à support@devisauto.app",
          items: [
            {
              id: "faq-1",
              question: "Comment l'extension détecte-t-elle les emails pertinents ?",
              answer:
                "Elle utilise des mots-clés et des patterns pour repérer les emails clients qui nécessitent un devis.",
            },
            {
              id: "faq-2",
              question: "Puis-je modifier un devis avant de l’envoyer ?",
              answer: "Oui, chaque devis est généré mais peut être modifié avant envoi.",
            },
            {
              id: "faq-3",
              question: "Est-ce que l’extension lit tous mes emails ?",
              answer:
                "Non. Elle ne lit que les emails entrants dans Gmail et n’analyse que ceux nécessaires à son fonctionnement.",
            },
          ],
        },
      },
    ],
  },
  {
    type: "footer",
    components: [
      {
        id: "footer",
        component: "Footer",
        props: {
          callToAction: {
            badge: "🚀 Prêt à automatiser vos devis ?",
            title: "Ne perdez plus une minute sur vos devis",
            description:
              "Laissez l’extension s’en occuper pour vous. Vos prospects n’ont jamais été aussi bien traités.",
            primaryButtonText: "Installer l’extension",
            secondaryButtonText: "Voir une démo",
          },
          footerLinks: {
            product: {
              title: "Produit",
              links: [
                { name: "Fonctionnalités", href: "#fonctionnalites" },
                { name: "Tarifs", href: "#tarifs" },
                { name: "Télécharger", href: "#download" },
              ],
            },
            company: {
              title: "Entreprise",
              links: [
                { name: "À propos", href: "#about" },
                { name: "Blog", href: "#blog" },
                { name: "Presse", href: "#press" },
              ],
            },
            support: {
              title: "Support",
              links: [
                { name: "Contact", href: "#contact" },
                { name: "Centre d’aide", href: "#faq" },
              ],
            },
            legal: {
              title: "Légal",
              links: [
                { name: "Conditions", href: "/terms" },
                { name: "Confidentialité", href: "/privacy" },
              ],
            },
          },
          socialLinks: [
            { name: "Twitter", href: "#" },
            { name: "LinkedIn", href: "#" },
            { name: "GitHub", href: "#" },
          ],
          companyInfo: {
            name: "DevisAuto",
            logo: "DA",
            copyright: "© 2025 DevisAuto. Tous droits réservés.",
          },
        },
      },
    ],
  },
];
