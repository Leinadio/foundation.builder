import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CircleChevronRight, Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react";
import { AuthDialog } from "@/components/common/AuthDialog";

const footerLinks = {
  product: {
    title: "Produit",
    links: [
      { name: "Fonctionnalités", href: "#features" },
      { name: "Tarifs", href: "#pricing" },
      { name: "Documentation", href: "#docs" },
      { name: "API", href: "#api" },
    ],
  },
  company: {
    title: "Entreprise",
    links: [
      { name: "À propos", href: "#about" },
      { name: "Blog", href: "#blog" },
      { name: "Carrières", href: "#careers" },
      { name: "Contact", href: "#contact" },
    ],
  },
  support: {
    title: "Support",
    links: [
      { name: "Centre d'aide", href: "#help" },
      { name: "Communauté", href: "#community" },
      { name: "Statut", href: "#status" },
      { name: "Feedback", href: "#feedback" },
    ],
  },
  legal: {
    title: "Légal",
    links: [
      { name: "Conditions d'utilisation", href: "/terms" },
      { name: "Politique de confidentialité", href: "/privacy" },
      { name: "Cookies", href: "/cookies" },
      { name: "RGPD", href: "/gdpr" },
    ],
  },
};

const socialLinks = [
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "GitHub", href: "#", icon: Github },
];

function CallToActionSection() {
  return (
    <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <Badge variant="default" className="mb-4">
            🚀 Prêt à commencer ?
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Transformez vos idées en succès</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Rejoignez des milliers d'entrepreneurs qui utilisent notre plateforme pour valider et développer leurs
            projets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <AuthDialog>
              <Button size="lg" className="px-8">
                Commencer gratuitement
                <CircleChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </AuthDialog>
            <Button variant="outline" size="lg" className="px-8">
              Voir la démo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {Object.entries(footerLinks).map(([key, section]) => (
          <div key={key}>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">{section.title}</h3>
            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="flex space-x-6">
      {socialLinks.map((social) => {
        const IconComponent = social.icon;
        return (
          <a
            key={social.name}
            href={social.href}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label={social.name}
          >
            <IconComponent className="w-5 h-5" />
          </a>
        );
      })}
    </div>
  );
}

function FooterBottom() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">F</span>
              </div>
              <span className="font-semibold text-foreground">Foundation</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="/terms" className="hover:text-foreground transition-colors">
                {"Conditions d'utilisation"}
              </a>
              <a href="/privacy" className="hover:text-foreground transition-colors">
                Politique de confidentialité
              </a>
            </div>
            <SocialLinks />
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">© {currentYear} Foundation Builder. Tous droits réservés.</p>
        </div>
      </div>
    </div>
  );
}

export function Component() {
  return (
    <footer className="bg-background">
      <CallToActionSection />
      <FooterLinks />
      <FooterBottom />
    </footer>
  );
}
