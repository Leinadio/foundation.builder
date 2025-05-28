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
          {/* Item 1 */}
          <div className="border-2 border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4">🎯</div>
            <h4 className="text-xl font-bold mb-3">
              {items.audience.title}
            </h4>
            <p className="text-gray-600">
              {items.audience.description}
            </p>
          </div>

          {/* Item 2 */}
          <div className="border-2 border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4">📈</div>
            <h4 className="text-xl font-bold mb-3">
              {items.marketAnalysis.title}
            </h4>
            <p className="text-gray-600">
              {items.marketAnalysis.description}
            </p>
          </div>

          {/* Item 3 */}
          <div className="border-2 border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4">🧠</div>
            <h4 className="text-xl font-bold mb-3">
              {items.realProblem.title}
            </h4>
            <p className="text-gray-600">
              {items.realProblem.description}
            </p>
          </div>

          {/* Item 4 */}
          <div className="border-2 border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4">💡</div>
            <h4 className="text-xl font-bold mb-3">
              {items.adaptedSolution.title}
            </h4>
            <p className="text-gray-600">
              {items.adaptedSolution.description}
            </p>
          </div>

          {/* Item 5 */}
          <div className="border-2 border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4">💰</div>
            <h4 className="text-xl font-bold mb-3">
              {items.businessModel.title}
            </h4>
            <p className="text-gray-600">
              {items.businessModel.description}
            </p>
          </div>

          {/* Item 6 */}
          <div className="border-2 border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4">🧲</div>
            <h4 className="text-xl font-bold mb-3">
              {items.acquisition.title}
            </h4>
            <p className="text-gray-600">
              {items.acquisition.description}
            </p>
          </div>

          {/* Item 7 */}
          <div className="border-2 border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4">🔥</div>
            <h4 className="text-xl font-bold mb-3">
              {items.valueProposition.title}
            </h4>
            <p className="text-gray-600">
              {items.valueProposition.description}
            </p>
          </div>

          {/* Item 8 */}
          <div className="border-2 border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4">⚔️</div>
            <h4 className="text-xl font-bold mb-3">
              {items.competition.title}
            </h4>
            <p className="text-gray-600">
              {items.competition.description}
            </p>
          </div>

          {/* Item 9 */}
          <div className="border-2 border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4">⚠️</div>
            <h4 className="text-xl font-bold mb-3">
              {items.risks.title}
            </h4>
            <p className="text-gray-600">
              {items.risks.description}
            </p>
          </div>

          {/* Item 10 */}
          <div className="border-2 border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4">📊</div>
            <h4 className="text-xl font-bold mb-3">
              {items.validationScore.title}
            </h4>
            <p className="text-gray-600">
              {items.validationScore.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
