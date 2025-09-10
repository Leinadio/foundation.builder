import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Check, LucideIcon, MoveDown, MoveUp } from "lucide-react";
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
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-lg flex items-center gap-2 justify-center">
              <X className="w-7 h-7 text-red-600 dark:text-red-300" />
              Sans notre solution
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {beforeScenarios.map((scenario) => {
              return (
                <div key={scenario.title} className="flex items-center gap-4">
                  <MoveDown size={24} className="text-red-600" />
                  <p className="text-lg">{scenario.description}</p>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Avec le produit */}
        <Card className="border-primary bg-primary/10">
          <CardHeader className="text-center">
            <CardTitle className="text-lg flex items-center gap-2 justify-center">
              <Check className="w-7 h-7 text-green-600 dark:text-green-300" />
              Avec notre solution
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {afterScenarios.map((scenario, index) => {
              return (
                <div key={index} className="flex items-start gap-4">
                  <MoveUp size={24} className="text-green-600" />
                  <p className="text-lg ">{scenario.description}</p>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
