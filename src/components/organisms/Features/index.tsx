import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  Lightbulb,
  Rocket,
  BarChart3,
  LineChart,
  Zap,
  AlertTriangle,
  Award,
} from "lucide-react";

interface FeaturesProps {
  title: string;
  items: {
    marketSegment: string;
    problem: string;
    solution: string;
    businessModel: string;
    acquisition: string;
    valueProposition: string;
    risks: string;
    validationScore: string;
  };
}

export const Features = ({
  title,
  items,
}: FeaturesProps) => {
  return (
    <section className="py-16 bg-[#FDF8F6]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          {title}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          <Card className="bg-transparent border-none shadow-none text-center">
            <CardContent className="pt-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="w-10 h-10 text-primary" />
              </div>
              <p className="text-sm text-gray-600">
                {items.marketSegment}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-transparent border-none shadow-none text-center">
            <CardContent className="pt-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Lightbulb className="w-10 h-10 text-primary" />
              </div>
              <p className="text-sm text-gray-600">
                {items.problem}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-transparent border-none shadow-none text-center">
            <CardContent className="pt-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Rocket className="w-10 h-10 text-primary" />
              </div>
              <p className="text-sm text-gray-600">
                {items.solution}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-transparent border-none shadow-none text-center">
            <CardContent className="pt-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <BarChart3 className="w-10 h-10 text-primary" />
              </div>
              <p className="text-sm text-gray-600">
                {items.businessModel}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-transparent border-none shadow-none text-center">
            <CardContent className="pt-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <LineChart className="w-10 h-10 text-primary" />
              </div>
              <p className="text-sm text-gray-600">
                {items.acquisition}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-transparent border-none shadow-none text-center">
            <CardContent className="pt-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-10 h-10 text-primary" />
              </div>
              <p className="text-sm text-gray-600">
                {items.valueProposition}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-transparent border-none shadow-none text-center">
            <CardContent className="pt-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <AlertTriangle className="w-10 h-10 text-primary" />
              </div>
              <p className="text-sm text-gray-600">
                {items.risks}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-transparent border-none shadow-none text-center">
            <CardContent className="pt-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <p className="text-sm text-gray-600">
                {items.validationScore}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
