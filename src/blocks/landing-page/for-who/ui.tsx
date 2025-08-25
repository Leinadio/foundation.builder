import { Headline } from "@/components/shared/headline";
import { ReactNode } from "react";

export interface CompanySize {
  id: string;
  title: string;
  description: string;
}

export interface ForWhoProps {
  title?: string | ReactNode;
  description?: string;
  badgeText?: string;
  companySizes?: CompanySize[];
}

const defaultCompanySizes: CompanySize[] = [
  {
    id: "startups",
    title: "Pour les startups & scaleups",
    description:
      "Validation d'idées simplifiée. Testez vos concepts rapidement et validez votre marché avant d'investir.",
  },
  {
    id: "agencies",
    title: "Pour les agences",
    description:
      "Gérez facilement la validation d'idées pour plusieurs clients et créez des rapports professionnels qui impressionnent.",
  },
  {
    id: "ecommerce",
    title: "Pour l'e-commerce",
    description:
      "Boostez vos campagnes marketing avec une validation d'idées claire pour vos nouveaux produits et services.",
  },
];

export function ForWho({
  title = "Conçu pour toutes les tailles d'entreprise",
  description = "Donnez à toute votre équipe le pouvoir de valider des idées en 3 minutes ou moins. Aucune compétence en business plan requise.",
  badgeText = "POUR QUI",
  companySizes = defaultCompanySizes,
}: ForWhoProps) {
  return (
    <section className="flex flex-col gap-8 md:gap-10">
      <Headline title={title} description={description} badge={{ text: badgeText, isBadge: false }} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image à gauche */}
        <div className="relative">
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 relative overflow-hidden">
            {/* Interface mockup */}
            <div className="bg-white rounded-lg shadow-lg p-6 relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>

              {/* Search bar */}
              <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg mb-4">
                <span className="text-slate-400">+</span>
                <span className="text-slate-500 text-sm">Search within organization</span>
              </div>

              {/* Organization info */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-slate-400">▼</span>
                <span className="text-slate-500 text-sm">25 people in this organization</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">DR</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Dylan Roberts</div>
                    <div className="text-xs text-slate-500">dylan@tulado.com</div>
                  </div>
                  <div className="text-xs bg-slate-200 text-slate-700 px-2 py-1 rounded">Administrator</div>
                  <div className="w-4 h-4 text-slate-400">✏️</div>
                </div>

                <div className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">OW</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Olivia Williams</div>
                    <div className="text-xs text-slate-500">olivia@tulado.com</div>
                  </div>
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-lg">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">IJ</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Isabella Johnson</div>
                    <div className="text-xs text-slate-500">isabella@tulado.com</div>
                  </div>
                  <div className="w-6 h-6 border-2 border-slate-300 rounded-full flex items-center justify-center">
                    <span className="text-slate-400 text-xs">+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Avatars flottants */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-blue-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
              <span className="text-white font-semibold text-sm">JS</span>
            </div>
            <div className="absolute bottom-4 left-4 w-10 h-10 bg-slate-400 rounded-full border-4 border-white shadow-lg"></div>
            <div className="absolute top-20 left-8 w-8 h-8 bg-slate-300 rounded-full border-4 border-white shadow-lg"></div>
            <div className="absolute bottom-20 right-8 w-10 h-10 bg-slate-600 rounded-full border-4 border-white shadow-lg"></div>
            <div className="absolute bottom-32 right-16 w-12 h-12 bg-orange-400 rounded-full border-4 border-white shadow-lg"></div>
          </div>
        </div>

        {/* Contenu à droite */}
        <div className="space-y-8">
          {companySizes.map((size) => (
            <div key={size.id} className="flex gap-4">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{size.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{size.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
