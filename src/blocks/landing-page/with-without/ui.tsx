import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Check, LucideIcon } from "lucide-react";
import { Headline } from "@/components/shared/headline";

export interface Scenario {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface WithWithoutProps {
  title: string;
  description: string;
  badgeText: string;
  beforeScenarios: Scenario[];
  afterScenarios: Scenario[];
}

export function WithWithout({
  title,
  description,
  badgeText,
  beforeScenarios = [],
  afterScenarios = [],
}: WithWithoutProps) {
  return (
    <div className="w-full mx-auto">
      <div className="text-center mb-12">
        <Headline title={title} description={description} badge={{ text: badgeText, isBadge: false }} />
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Sans le produit */}
        <Card className="border-red-900 rounded-4xl bg-red-50/50 dark:bg-red-950/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-red-800 dark:text-red-100 flex items-center gap-2 justify-center">
              <div className="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
                <X className="w-6 h-6 text-red-600 dark:text-red-300" />
              </div>
              Sans notre solution
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {beforeScenarios.map((scenario) => {
              const IconComponent = scenario.icon;
              return (
                <div key={scenario.title} className="flex items-center gap-4">
                  <IconComponent className="w-8 h-8 text-red-600 dark:text-red-300" />
                  <p className="text-lg text-red-700 dark:text-red-300">{scenario.description}</p>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Avec le produit */}
        <Card className="border-green-900 rounded-4xl bg-green-50/50 dark:bg-green-950/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-green-800 dark:text-green-100 flex items-center gap-2 justify-center">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 text-green-600 dark:text-green-300" />
              </div>
              Avec notre solution
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {afterScenarios.map((scenario, index) => {
              const IconComponent = scenario.icon;
              return (
                <div key={index} className="flex items-center gap-4">
                  <IconComponent className="w-8 h-8 text-green-600 dark:text-green-300" />
                  <p className="text-lg text-green-700 dark:text-green-300">{scenario.description}</p>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
