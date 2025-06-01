import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface WhatYouWillGetProps {
  title: string;
  subtitle: string;
  description: string;
  listTitle: string;
  items: {
    audience: {
      title: string;
      description: string;
    };
    marketAnalysis: {
      title: string;
      description: string;
    };
    realProblem: {
      title: string;
      description: string;
    };
    adaptedSolution: {
      title: string;
      description: string;
    };
    businessModel: {
      title: string;
      description: string;
    };
    acquisition: {
      title: string;
      description: string;
    };
    valueProposition: {
      title: string;
      description: string;
    };
    competition: {
      title: string;
      description: string;
    };
    risks: {
      title: string;
      description: string;
    };
    validationScore: {
      title: string;
      description: string;
    };
  };
}

export const WhatYouWillGet = ({
  title,
  subtitle,
  description,
  listTitle,
  items,
}: WhatYouWillGetProps) => {
  const itemsArray = [
    { ...items.audience, icon: "🎯" },
    { ...items.marketAnalysis, icon: "📈" },
    { ...items.realProblem, icon: "🧠" },
    { ...items.adaptedSolution, icon: "💡" },
    { ...items.businessModel, icon: "💰" },
    { ...items.acquisition, icon: "🧲" },
    { ...items.valueProposition, icon: "🔥" },
    { ...items.competition, icon: "⚔️" },
    { ...items.risks, icon: "⚠️" },
    { ...items.validationScore, icon: "📊" },
  ];

  return (
    <section className="pb-32" id="whatYouGet">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-4">
          {title}
        </h2>

        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-3xl font-bold text-center mb-6">
            {subtitle}
          </h3>
          <p className="text-xl text-center mb-10">
            {description}
          </p>
          <p className="text-2xl font-bold text-center">
            {listTitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {itemsArray.map((item, index) => (
            <Card
              key={index}
              // className="border-2 border-gray-100 rounded-xl p-8 shadow-xs hover:shadow-md transition-shadow"
            >
              <CardHeader>
                <div className="text-3xl mb-4">
                  {item.icon}
                </div>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>
                  {item.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
