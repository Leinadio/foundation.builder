import { ReactNode } from "react";
import { Github, Twitter } from "lucide-react";
import Image from "next/image";

export interface CompanySize {
  id: string;
  name: string;
  role: string;
  description: string;
  avatar?: string;
  socialLinks?: {
    twitter?: string;
    github?: string;
  };
}

export interface ForWhoProps {
  title?: string | ReactNode;
  description?: string;
  badgeText?: string;
  companies?: CompanySize[];
}

const defaultCompanies: CompanySize[] = [
  {
    id: "startups",
    name: "Startups & Scale-ups",
    role: "Entrepreneurs innovants",
    description:
      "Validez rapidement vos idées produit et testez vos concepts avant d'investir massivement. Gagnez du temps et réduisez les risques.",
    socialLinks: {
      twitter: "#",
      github: "#",
    },
  },
  {
    id: "agencies",
    name: "Agences digitales",
    role: "Professionnels du web",
    description:
      "Gérez facilement la validation d'idées pour plusieurs clients et créez des rapports professionnels qui impressionnent vos prospects.",
    socialLinks: {
      twitter: "#",
    },
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    role: "Vendeurs en ligne",
    description:
      "Boostez vos campagnes marketing avec une validation d'idées claire pour vos nouveaux produits et services avant leur lancement.",
    socialLinks: {
      twitter: "#",
      github: "#",
    },
  },
  {
    id: "consultants",
    name: "Consultants",
    role: "Experts métier",
    description:
      "Aidez vos clients à prendre des décisions éclairées grâce à des analyses rapides et des validations métier structurées.",
    socialLinks: {
      twitter: "#",
    },
  },
];

function TeamMemberCard({ member }: { member: CompanySize }) {
  return (
    <div className="flex flex-col space-y-6">
      {/* Avatar */}
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
        {member.avatar ? (
          <Image
            src={member.avatar}
            alt={member.name}
            width={80}
            height={80}
            className="w-full h-full rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-black dark:bg-white flex items-center justify-center">
            <span className="text-white dark:text-black font-bold text-lg">
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
          <p className="text-sm text-muted-foreground font-medium">{member.role}</p>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>

        {/* Social Links */}
        {member.socialLinks && (
          <div className="flex items-center gap-3">
            {member.socialLinks.twitter && (
              <a
                href={member.socialLinks.twitter}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={`${member.name} Twitter`}
              >
                <Twitter className="w-4 h-4" />
              </a>
            )}
            {member.socialLinks.github && (
              <a
                href={member.socialLinks.github}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={`${member.name} GitHub`}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export function ForWho({
  title = "Conçu pour toutes les tailles d'entreprise",
  description = "Donnez à toute votre équipe le pouvoir de valider des idées en 3 minutes ou moins. Aucune compétence en business plan requise.",
  badgeText = "POUR QUI",
  companies = defaultCompanies,
}: ForWhoProps) {
  return (
    <section className="flex flex-col gap-8 md:gap-16 px-4 md:px-0">
      <div className="text-left max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted rounded-full text-sm font-medium text-muted-foreground mb-6">
          👥 {badgeText}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {companies.map((company) => (
          <TeamMemberCard key={company.id} member={company} />
        ))}
      </div>
    </section>
  );
}
