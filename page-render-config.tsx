import { SectionConfig } from "@/components/config/dynamic-renderer";
import {
  Clock,
  Frown,
  AlertTriangle,
  TrendingDown,
  Users,
  Eye,
  PenTool,
  CheckCircle,
  Heart,
  Camera,
  Share2,
  Download,
  Frame,
  Sparkles,
  Gift,
} from "lucide-react";
import { IconPhoto, IconMessage, IconShare, IconFrame, IconStar } from "@tabler/icons-react";
import { Highlighter } from "@/components/magicui/highlighter";

export const pageRenderConfig: SectionConfig[] = [
  {
    type: "header",
    components: [
      {
        component: "HeaderContainer",
        props: {
          navigationLinks: [
            { id: "fonctionnalites", label: "Fonctionnalités", href: "#fonctionnalites" },
            { id: "tarifs", label: "Tarifs", href: "#tarifs" },
            { id: "faq", label: "FAQ", href: "#faq" },
          ],
        },
      },
      {
        component: "HeroContainer",
        props: {
          badge: "💕 Pour les couples et amis",
          title: (
            <span className="inline-block">
              <Highlighter action="underline" color="var(--primary)">
                Transformez{" "}
              </Highlighter>{" "}
              vos conversations en souvenirs{" "}
              <Highlighter action="highlight" color="var(--primary)">
                <span className="text-white">précieux</span>
              </Highlighter>{" "}
            </span>
          ),
          description:
            "Capturez les moments drôles, touchants ou mémorables de vos conversations et affichez-les dans de magnifiques cadres photo personnalisés. Gardez vos échanges les plus précieux pour toujours.",
        },
      },
    ],
  },
  {
    type: "section",
    components: [
      {
        id: "video",
        component: "HeroVideoContainer",
        props: {
          videoSrc: "/videos/hero_conversation_frame.mp4",
          thumbnailSrc: "/videos/hero_conversation_frame_thumbnail.png",
          thumbnailAlt: "Démo du service de cadre photo conversations",
        },
      },
    ],
  },
  {
    type: "section-full-width",
    components: [
      {
        id: "problem-overview",
        component: "ProblemContainer",
        props: {
          title: "Le problème",
          description:
            "Les plus beaux moments de nos relations se perdent dans le flux infini des messages. Ces petites phrases qui nous font sourire, ces déclarations d'amour, ces blagues entre amis... ils méritent mieux qu'un simple screenshot oublié dans la galerie.",
          badgeText: "MOMENTS PERDUS",
          steps: [
            {
              title: "Conversations oubliées dans le téléphone",
              description: "Messages précieux perdus dans le scroll infini",
              emoji: "📱",
            },
            {
              title: "Screenshots sans vie stockés",
              description: "Photos brutes qui ne rendent pas justice aux moments",
              emoji: "📸",
            },
            {
              title: "Souvenirs non valorisés",
              description: "Aucun moyen de célébrer ces petits bonheurs du quotidien",
              emoji: "💔",
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
        id: "with-without",
        component: "WithWithoutContainer",
        props: {
          title: "Donnez vie à vos conversations",
          description: "Découvrez comment transformer vos messages en véritables œuvres d'art à exposer",
          badgeText: "Donnez vie à vos conversations",
          beforeScenarios: [
            {
              icon: Clock,
              title: "Messages qui se perdent",
              description: "Conversations importantes noyées dans le flux quotidien des messages",
            },
            {
              icon: Frown,
              title: "Screenshots sans âme",
              description: "Captures d'écran brutes qui ne rendent pas justice à vos moments précieux",
            },
            {
              icon: AlertTriangle,
              title: "Souvenirs oubliés",
              description: "Mémoires numériques qui restent cachées dans votre téléphone",
            },
            {
              icon: TrendingDown,
              title: "Pas de valorisation",
              description: "Aucun moyen de célébrer et partager ces moments spéciaux",
            },
            {
              icon: Users,
              title: "Expérience dispersée",
              description: "Difficile de retrouver et organiser vos échanges favoris",
            },
          ],
          afterScenarios: [
            {
              icon: Sparkles,
              title: "Conversations sublimées",
              description: "Transformez vos messages en magnifiques créations artistiques à encadrer",
            },
            {
              icon: Heart,
              title: "Souvenirs précieux",
              description: "Créez des objets tangibles qui célèrent vos relations les plus chères",
            },
            {
              icon: Frame,
              title: "Décoration personnelle",
              description: "Exposez chez vous les moments qui vous font sourire au quotidien",
            },
            {
              icon: Gift,
              title: "Cadeaux uniques",
              description: "Offrez des présents personnalisés qui touchent vraiment le cœur",
            },
            {
              icon: Share2,
              title: "Partage facilité",
              description: "Partagez vos créations sur les réseaux ou gardez-les pour vous",
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
        component: "SuccessPathContainer",
        props: {
          title: (
            <>
              Capturez vos <span className="text-primary">conversations</span>, créez vos{" "}
              <span className="text-primary">souvenirs</span>
            </>
          ),
          description:
            "Notre service transforme vos messages en magnifiques cadres photo personnalisés, prêts à être exposés ou offerts.",
          badgeText: "LA SOLUTION",
          data: [
            {
              title: "Capture intelligente",
              paragraphs: [
                "Uploadez une capture d'écran de votre conversation et notre IA analyse automatiquement le contenu pour créer une mise en page optimale.",
              ],
              features: [
                { icon: <Camera className="w-5 h-5 text-primary" />, text: "Reconnaissance automatique des messages" },
                { icon: <Eye className="w-5 h-5 text-primary" />, text: "Analyse du contexte et des émotions" },
              ],
              summary: {
                icon: <Sparkles className="w-5 h-5 text-primary-foreground" />,
                label: "Intelligence",
                text: "Transformation automatique en 10 secondes",
              },
            },
            {
              title: "Personnalisation créative",
              paragraphs: [
                "Choisissez parmi nos templates exclusifs, personnalisez les couleurs, polices et ajoutez des éléments décoratifs pour un rendu unique.",
              ],
              features: [
                { icon: <Frame className="w-5 h-5 text-primary" />, text: "50+ templates artistiques" },
                { icon: <PenTool className="w-5 h-5 text-primary" />, text: "Personnalisation complète" },
              ],
              summary: {
                icon: <Heart className="w-5 h-5 text-primary-foreground" />,
                label: "Créativité",
                text: "Designs uniques adaptés à votre style",
              },
            },
            {
              title: "Impression haute qualité",
              paragraphs: [
                "Recevez votre cadre imprimé en haute définition sur papier photo premium, prêt à accrocher ou à offrir.",
              ],
              features: [
                { icon: <Download className="w-5 h-5 text-primary" />, text: "Fichiers HD téléchargeables" },
                { icon: <Gift className="w-5 h-5 text-primary" />, text: "Service d'impression et livraison" },
                { icon: <Share2 className="w-5 h-5 text-primary" />, text: "Partage sur réseaux sociaux" },
              ],
              summary: {
                icon: <CheckCircle className="w-5 h-5 text-primary-foreground" />,
                label: "Qualité",
                text: "Rendu professionnel garanti, livraison en 3-5 jours",
              },
            },
          ],
        },
      },
      {
        id: "fonctionnement",
        component: "HowItWorkContainer",
        props: {
          title: "Comment ça marche",
          description: "3 étapes simples pour créer votre cadre photo conversation",
          badgeText: "PROCESSUS",
          steps: [
            {
              step: "1",
              title: "Uploadez votre conversation",
              description:
                "Prenez une capture d'écran de votre conversation favorite et uploadez-la sur notre plateforme. Formats acceptés : PNG, JPG, HEIC.",
              objective: "📱 Compatible avec tous les types de messages",
              image: {
                src: "/images/upload_conversation.png",
                alt: "Upload de conversation",
              },
              layout: "text-image",
            },
            {
              step: "2",
              title: "Personnalisez votre design",
              description:
                "Choisissez un template, ajustez les couleurs, polices et décorations. Prévisualisez le rendu final en temps réel.",
              objective: "🎨 Créativité illimitée",
              image: {
                src: "/images/customize_design.png",
                alt: "Personnalisation du design",
              },
              layout: "image-text",
            },
            {
              step: "3",
              title: "Commandez votre cadre",
              description:
                "Téléchargez votre création en HD ou commandez l'impression sur papier premium avec cadre inclus. Livraison à domicile.",
              objective: "🎁 Souvenir tangible prêt à offrir",
              image: {
                src: "/images/final_frame.png",
                alt: "Cadre photo final",
              },
              layout: "text-image",
            },
          ],
        },
      },
      {
        id: "fonctionnalites",
        component: "BentoGridContainer",
        props: {
          title: "Tout pour créer le cadre parfait",
          description: "Des outils puissants pour transformer vos conversations en œuvres d'art",
          badgeText: "FONCTIONNALITÉS",
          bentoItems: [
            {
              title: "IA de mise en page",
              description: "Analyse automatique et optimisation de la présentation de vos messages",
              className: "md:col-span-1",
              header: (
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-purple-200 dark:from-purple-900 dark:to-purple-800 to-purple-100"></div>
              ),
              icon: <IconMessage />,
            },
            {
              title: "Templates artistiques",
              description: "Plus de 50 designs créés par des artistes professionnels",
              className: "md:col-span-1",
              header: (
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-pink-200 dark:from-pink-900 dark:to-pink-800 to-pink-100"></div>
              ),
              icon: <IconFrame />,
            },
            {
              title: "Partage instantané",
              description: "Partagez vos créations sur les réseaux sociaux en un clic",
              className: "md:col-span-1",
              header: (
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-200 dark:from-blue-900 dark:to-blue-800 to-blue-100"></div>
              ),
              icon: <IconShare />,
            },
            {
              title: "Galerie personnelle",
              description: "Sauvegardez toutes vos créations dans votre espace personnel",
              className: "md:col-span-2",
              header: (
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-green-200 dark:from-green-900 dark:to-green-800 to-green-100"></div>
              ),
              icon: <IconPhoto />,
            },
            {
              title: "Impression premium",
              description: "Service d'impression haute qualité avec livraison incluse",
              className: "md:col-span-1",
              header: (
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-orange-200 dark:from-orange-900 dark:to-orange-800 to-orange-100"></div>
              ),
              icon: <IconStar />,
            },
          ],
        },
      },
      {
        id: "services",
        component: "ServicesContainer",
        props: {
          title: "Solutions numériques complètes",
          description:
            "Tarification transparente pour des solutions numériques de classe mondiale adaptées à vos besoins spécifiques et objectifs de croissance.",
          badgeText: "Nos Services",
          services: [
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ),
              title: "Stratégie Produit",
              timeline: "2-4 semaines",
              description:
                "De la recherche de marché aux personas utilisateurs, nous vous aidons à créer des produits qui comptent. Notre approche stratégique garantit que votre produit répond aux vrais besoins des utilisateurs.",
              features: [
                { text: "Recherche & Analyse de marché" },
                { text: "Personas & Cartographie du parcours utilisateur" },
                { text: "Analyse concurrentielle" },
                { text: "Développement de roadmap produit" },
              ],
              deliverables: [
                { text: "Document de stratégie" },
                { text: "Rapport de recherche utilisateur" },
                { text: "Roadmap & Planning" },
              ],
              price: "À partir de 5 000€",
              priceNote: "Devis personnalisés disponibles",
              buttonText: "Commencer",
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3h18v18H3zM7 7h10v10H7z" />
                </svg>
              ),
              title: "Design",
              timeline: "3-6 semaines",
              description:
                "Des designs beaux et fonctionnels qui créent des expériences utilisateur mémorables. Nous nous concentrons sur l'esthétique et l'utilisabilité pour créer des designs qui convertissent.",
              features: [
                { text: "Design UI/UX" },
                { text: "Prototypage interactif" },
                { text: "Création de système de design" },
                { text: "Tests d'utilisabilité" },
              ],
              deliverables: [
                { text: "Système de design" },
                { text: "Prototypes interactifs" },
                { text: "Spécifications de design" },
              ],
              price: "À partir de 8 000€",
              priceNote: "Devis personnalisés disponibles",
              buttonText: "Commencer →",
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4" />
                  <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
                </svg>
              ),
              title: "Développement Web",
              timeline: "6-12 semaines",
              description:
                "Applications robustes et évolutives construites avec des technologies et frameworks modernes. Nous nous assurons que votre application est rapide, sécurisée et maintenable.",
              features: [
                { text: "Développement Frontend" },
                { text: "Développement Backend" },
                { text: "Intégration API" },
                { text: "Optimisation des performances" },
              ],
              deliverables: [
                { text: "Code source" },
                { text: "Documentation technique" },
                { text: "Guide de déploiement" },
              ],
              price: "À partir de 15 000€",
              priceNote: "Devis personnalisés disponibles",
              buttonText: "Commencer →",
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3h18v18H3zM7 7h10v10H7z" />
                </svg>
              ),
              title: "Marketing",
              timeline: "En continu",
              description:
                "Initiatives de croissance stratégiques pour faire évoluer votre produit et maximiser l'impact. Nous utilisons des approches basées sur les données pour optimiser vos efforts marketing.",
              features: [
                { text: "Stratégie & Implémentation SEO" },
                { text: "Analytics & Suivi des performances" },
                { text: "Tests A/B & Optimisation" },
                { text: "Stratégie de marketing de contenu" },
              ],
              deliverables: [
                { text: "Plan marketing" },
                { text: "Tableau de bord Analytics" },
                { text: "Rapports de performance" },
              ],
              price: "À partir de 3 000€/mois",
              priceNote: "Devis personnalisés disponibles",
              buttonText: "Commencer →",
            },
          ],
          customSolutionTitle: "Besoin d'une solution personnalisée ?",
          customSolutionDescription:
            "Nous proposons des packages sur mesure combinant plusieurs services pour une transformation numérique complète.",
          customSolutionButtonText: "Planifier une consultation →",
        },
      },
    ],
  },
  {
    type: "section-full-width",
    components: [
      {
        id: "testimonials",
        component: "TestimonialsContainer",
        props: {
          title: "Rencontrez nos clients satisfaits",
          description: "Tous nos 1000+ clients sont satisfaits de nos services",
          badgeText: "TÉMOIGNAGES",
          ctaText: "Commencer gratuitement",
          ctaHref: "/app",
          testimonials: [
            {
              id: "1",
              name: "Marie Dubois",
              role: "CEO",
              company: "TechStart",
              content:
                "Foundation Builder a révolutionné notre façon de développer nos produits. L'approche structurée nous a fait gagner des mois de développement.",
              rating: 5,
            },
            {
              id: "2",
              name: "Jean Martin",
              role: "CTO",
              company: "InnovateLab",
              content:
                "Un outil exceptionnel qui nous permet de valider nos idées rapidement et efficacement. L'interface est intuitive et les résultats sont précis.",
              rating: 5,
            },
            {
              id: "3",
              name: "Sophie Laurent",
              role: "Product Manager",
              company: "DigitalFlow",
              content:
                "Grâce à Foundation Builder, nous avons pu lancer notre produit 3 mois plus tôt que prévu. La qualité du code généré est impressionnante.",
              rating: 5,
            },
            {
              id: "4",
              name: "Pierre Moreau",
              role: "Développeur Senior",
              company: "CodeCraft",
              content:
                "L'architecture hexagonale implémentée par Foundation Builder est parfaite. Le code est maintenable et évolutif.",
              rating: 5,
            },
            {
              id: "5",
              name: "Emma Rousseau",
              role: "Designer UX",
              company: "CreativeStudio",
              content:
                "Les composants UI sont magnifiques et parfaitement intégrés. Foundation Builder respecte les meilleures pratiques de design.",
              rating: 5,
            },
            {
              id: "6",
              name: "Thomas Bernard",
              role: "Fondateur",
              company: "StartupX",
              content:
                "Un boilerplate complet qui nous a fait économiser des semaines de configuration. Tout est prêt pour la production.",
              rating: 5,
            },
            {
              id: "7",
              name: "Léa Petit",
              role: "Lead Developer",
              company: "WebAgency",
              content:
                "Foundation Builder nous a permis de livrer des projets de qualité professionnelle en un temps record. Je le recommande vivement.",
              rating: 5,
            },
            {
              id: "8",
              name: "Alexandre Durand",
              role: "Directeur Technique",
              company: "TechCorp",
              content:
                "L'approche Clean Architecture est parfaitement implémentée. Nos développeurs sont plus productifs et le code est plus robuste.",
              rating: 5,
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
        component: "ForWhoContainer",
        props: {
          title: "Pour tous ceux qui chérissent leurs relations",
          description:
            "Que vous soyez en couple, entre amis ou en famille, gardez vos plus beaux échanges pour l'éternité.",
          badgeText: "POUR QUI",
          companySizes: [
            {
              id: "couples",
              title: "Couples amoureux",
              description:
                "Immortalisez vos déclarations d'amour, vos petits mots doux et vos moments de complicité quotidienne.",
            },
            {
              id: "amis",
              title: "Groupes d'amis",
              description:
                "Capturez vos blagues internes, vos souvenirs partagés et ces conversations qui vous font pleurer de rire.",
            },
            {
              id: "famille",
              title: "Familles unies",
              description:
                "Préservez les échanges touchants avec vos proches, les premiers mots de bébé ou les conseils des grands-parents.",
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
        component: "PricingContainer",
        props: {
          title: "Des créations à la portée de tous",
          description: "Créez gratuitement, imprimez quand vous voulez",
          pricingPlans: [
            {
              name: "Gratuit",
              monthlyPrice: "0",
              yearlyPrice: "0",
              description: "Créez et téléchargez vos designs",
              features: [
                "3 créations gratuites par mois",
                "Téléchargement HD",
                "10 templates de base",
                "Partage sur réseaux sociaux",
              ],
              limitations: ["Filigrane sur les téléchargements", "Templates premium non inclus"],
              buttonText: "Commencer gratuitement",
              popular: false,
              priceId: {
                monthly: "",
                yearly: "",
              },
            },
            {
              name: "Premium",
              monthlyPrice: "9",
              yearlyPrice: "90",
              description: "L'accès complet à tous nos outils",
              features: [
                "Créations illimitées",
                "Tous les templates premium",
                "Téléchargement HD sans filigrane",
                "Impression haute qualité",
                "Livraison à domicile",
                "Support prioritaire",
              ],
              limitations: [],
              buttonText: "Passer à Premium",
              popular: true,
              priceId: {
                monthly: "price_1S2YxmGqH2dPvOOj4yzU2265",
                yearly: "price_1S2YxmGqH2dPvOOj4yzU2265",
              },
            },
          ],
        },
      },
      {
        id: "faq",
        component: "FaqContainer",
        props: {
          badge: "FAQ",
          heading: "Des questions ?",
          headingHighlight: "On vous répond",
          description: "Si vous ne trouvez pas votre réponse ici, contactez-nous à support@cadreconversation.fr",
          items: [
            {
              id: "faq-1",
              question: "Quels types de conversations puis-je transformer ?",
              answer:
                "Nous supportons tous les formats : SMS, WhatsApp, Messenger, Instagram DM, Telegram, et bien d'autres. Il suffit d'une capture d'écran.",
            },
            {
              id: "faq-2",
              question: "Mes conversations restent-elles privées ?",
              answer:
                "Absolument ! Vos conversations ne sont jamais stockées. Elles sont traitées temporairement pour créer votre design puis supprimées immédiatement.",
            },
            {
              id: "faq-3",
              question: "Puis-je modifier ma création après l'avoir générée ?",
              answer:
                "Oui, vous pouvez modifier les couleurs, polices, décorations et même changer de template à tout moment avant la commande finale.",
            },
            {
              id: "faq-4",
              question: "Quels sont les délais de livraison ?",
              answer:
                "Pour l'impression, comptez 3-5 jours ouvrés en France métropolitaine. Le téléchargement HD est instantané.",
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
        component: "FooterContainer",
        props: {
          callToAction: {
            badge: "💕 Prêt à créer votre premier cadre ?",
            title: "Transformez vos conversations en souvenirs",
            description:
              "Ne laissez plus vos plus beaux échanges se perdre dans l'oubli. Créez dès maintenant votre première œuvre d'art personnalisée.",
            primaryButtonText: "Créer mon cadre",
            secondaryButtonText: "Voir des exemples",
          },
          footerLinks: {
            product: {
              title: "Produit",
              links: [
                { name: "Fonctionnalités", href: "#fonctionnalites" },
                { name: "Templates", href: "#templates" },
                { name: "Tarifs", href: "#tarifs" },
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
                { name: "Centre d'aide", href: "#faq" },
                { name: "Tutoriels", href: "#tutorials" },
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
            { name: "Instagram", href: "#" },
            { name: "Pinterest", href: "#" },
            { name: "TikTok", href: "#" },
          ],
          companyInfo: {
            name: "CadreConversation",
            logo: "CC",
            copyright: "© 2025 CadreConversation. Tous droits réservés.",
          },
        },
      },
    ],
  },
];
