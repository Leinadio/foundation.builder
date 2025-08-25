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
        <Card className="border-none bg-red-50/50">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-red-800 flex items-center gap-2 justify-center">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <X className="w-6 h-6 text-red-600" />
              </div>
              Sans notre solution
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {beforeScenarios.map((scenario, index) => {
              const IconComponent = scenario.icon;
              return (
                <div key={index} className="flex gap-4 p-4 bg-white rounded-lg border border-red-100">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-red-600" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-semibold text-red-800">{scenario.title}</h4>
                    <p className="text-sm text-red-700">{scenario.description}</p>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Avec le produit */}
        <Card className="border-none bg-green-50/50">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-green-800 flex items-center gap-2 justify-center">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              Avec notre solution
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {afterScenarios.map((scenario, index) => {
              const IconComponent = scenario.icon;
              return (
                <div key={index} className="flex gap-4 p-4 bg-white rounded-lg border border-green-100">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-semibold text-green-800">{scenario.title}</h4>
                    <p className="text-sm text-green-700">{scenario.description}</p>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
