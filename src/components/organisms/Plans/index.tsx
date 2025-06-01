import CheckoutButton from "@/components/atoms/CheckoutButton";

interface PlansProps {
  lang: string;
  title: string;
  subtitle: string;
  ctaText: string;
  nonRefundable: string;
  orChooseSubscription: string;
  startingPlan: string;
  subscriptionPlan: string;
  featuresIncluded: string;
  discoveryFeatures: string[];
  plusFeatures: string[];
  proFeatures: string[];
  discoveryDescription: string;
  plusDescription: string;
  proDescription: string;
  startFree: string;
  noCard: string;
  subscribe: string;
  plans: {
    discovery: {
      title: string;
      price: string;
      period: string;
    };
    plus: {
      title: string;
      price: string;
      period: string;
    };
    pro: {
      title: string;
      price: string;
      period: string;
    };
  };
  completeReport: {
    popular: string;
    oneTimePayment: string;
    title: string;
    price: string;
    period: string;
    description: string;
    benefits: {
      title: string;
      items: string[];
    };
  };
}

export const Plans = ({
  title,
  subtitle,
  ctaText,
  orChooseSubscription,
  startingPlan,
  subscriptionPlan,
  featuresIncluded,
  discoveryFeatures,
  plusFeatures,
  proFeatures,
  nonRefundable,
  completeReport,
  discoveryDescription,
  plusDescription,
  proDescription,
  startFree,
  noCard,
  subscribe,
  plans,
}: PlansProps) => {
  const cancelUrl = "/";
  return (
    <section className="py-16" id="pricing">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-6">
          {title}
        </h2>
        <p className="text-xl text-center max-w-3xl mx-auto mb-16">
          {subtitle}
        </p>

        {/* Rapport Complet - Mise en avant */}
        <div className="max-w-2xl mx-auto mb-16 rounded-xl border-2 border-primary relative transition-all duration-300 hover:shadow-xl">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-sm font-bold px-4 py-1 rounded-full">
            {completeReport.popular}
          </div>
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="bg-primary-light text-primary text-xs font-medium px-3 py-1 rounded-full self-start inline-block mb-4">
                  {completeReport.oneTimePayment}
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  {completeReport.title}
                </h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold">
                    {completeReport.price}
                  </span>
                  <span className="ml-2">
                    {completeReport.period}
                  </span>
                </div>
                <p className="mb-6">
                  {completeReport.description}
                </p>

                <CheckoutButton
                  priceId={
                    (process.env
                      .NEXT_PUBLIC_STRIPE_PRICE_RAPPORT_UNIQUE as string) ||
                    "price_12345"
                  }
                  mode="payment"
                  cancelUrl={cancelUrl}
                  className="w-full md:w-auto bg-primary"
                >
                  {ctaText}
                </CheckoutButton>
                <p className="text-xs text-center md:text-left mt-3">
                  {nonRefundable}
                </p>
              </div>

              <div className="flex-1 md:border-l md:border-gray-200 md:pl-6">
                <h4 className="font-medium mb-4">
                  {completeReport.benefits.title}
                </h4>
                <ul className="space-y-3">
                  {completeReport.benefits.items.map(
                    (item, index) => (
                      <li
                        key={index}
                        className="flex items-start"
                      >
                        <span className="text-primary mr-2">
                          ✓
                        </span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: item,
                          }}
                        ></span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-center mb-8">
          {orChooseSubscription}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Plan Découverte */}
          <div className="flex flex-col h-full rounded-xl border transition-all duration-300 hover:border-primary hover:shadow-lg">
            <div className="p-6 flex flex-col grow">
              <div className="bg-primary-lightest text-primary text-xs font-medium px-3 py-1 rounded-full self-start mb-4">
                {startingPlan}
              </div>
              <h3 className="text-2xl font-bold mb-2">
                {plans.discovery.title}
              </h3>
              <div className="flex items-baseline mb-6">
                <span className="text-3xl font-bold">
                  {plans.discovery.price}
                </span>
                <span className="ml-2">
                  {plans.discovery.period}
                </span>
              </div>
              <p className="mb-6">{discoveryDescription}</p>

              <p className="text-sm font-medium mb-2 mt-4 border-t border-gray-100 pt-4">
                {featuresIncluded}
              </p>
              <ul className="space-y-3 mb-8 grow">
                {discoveryFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start"
                  >
                    <span className="text-primary mr-2">
                      ✓
                    </span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: feature,
                      }}
                    ></span>
                  </li>
                ))}
              </ul>

              {/* <p className="text-sm font-medium mb-2 mt-4 border-t border-gray-100 pt-4">
              {lang === 'fr' ? 'Fonctionnalités non incluses:' : 'Features not included:'}
            </p>
            <ul className="space-y-3 mb-8 grow">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span>{lang === 'fr' ? 'Rapports complets' : 'Complete reports'}</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span>{lang === 'fr' ? 'Analyses de marché approfondies' : 'In-depth market analysis'}</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span>{lang === 'fr' ? 'Support prioritaire' : 'Priority support'}</span>
              </li>
            </ul> */}
            </div>

            <div className="p-6 border-t border-gray-200">
              <CheckoutButton
                priceId={"price_12345"}
                mode="free"
                cancelUrl={cancelUrl}
                variant="outline"
                className="w-full"
              >
                {startFree}
              </CheckoutButton>
              <p className="text-xs text-center text-gray-500 mt-3">
                {noCard}
              </p>
            </div>
          </div>

          {/* Bundle Standard (anciennement Plan Plus) */}
          <div className="flex flex-col h-full rounded-xl border-2 border-primary transition-all duration-300 hover:shadow-xl relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-sm font-bold px-4 py-1 rounded-full">
              {completeReport.popular}
            </div>
            <div className="p-6 flex flex-col grow">
              <div className="bg-primary-light text-primary text-xs font-medium px-3 py-1 rounded-full self-start mb-4">
                {subscriptionPlan}
              </div>
              <h3 className="text-2xl font-bold mb-2">
                {plans.plus.title}
              </h3>
              <div className="flex items-baseline mb-6">
                <span className="text-3xl font-bold">
                  {plans.plus.price}
                </span>
                <span className="text-gray-500 ml-2">
                  {plans.plus.period}
                </span>
              </div>
              <p className="text-gray-600 mb-6">
                {plusDescription}
              </p>

              <p className="text-sm font-medium mb-2 mt-4 border-t border-gray-100 pt-4">
                {featuresIncluded}
              </p>
              <ul className="space-y-3 mb-8 grow">
                {plusFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start"
                  >
                    <span className="text-primary mr-2">
                      ✓
                    </span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: feature,
                      }}
                    ></span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 border-t border-gray-200">
              <CheckoutButton
                priceId={
                  (process.env
                    .NEXT_PUBLIC_STRIPE_PRICE_STANDARD_BUNDLE as string) ||
                  "price_23456"
                }
                mode="payment"
                cancelUrl={cancelUrl}
                variant="outline"
                className="w-full bg-primary text-primary-foreground"
              >
                {subscribe}
              </CheckoutButton>
              <p className="text-xs text-center text-gray-500 mt-3">
                {nonRefundable}
              </p>
            </div>
          </div>

          {/* Bundle Premium (anciennement Plan Pro) */}
          <div className="flex flex-col h-full rounded-xl border-2 border-secondary transition-all duration-300 hover:border-primary hover:shadow-lg relative">
            <div className="p-6 flex flex-col grow">
              <div className="bg-primary-light text-primary text-xs font-medium px-3 py-1 rounded-full self-start mb-4">
                {subscriptionPlan}
              </div>
              <h3 className="text-2xl font-bold mb-2">
                {plans.pro.title}
              </h3>
              <div className="flex items-baseline mb-6">
                <span className="text-3xl font-bold">
                  {plans.pro.price}
                </span>
                <span className="text-gray-500 ml-2">
                  {plans.pro.period}
                </span>
              </div>
              <p className="text-gray-600 mb-6">
                {proDescription}
              </p>

              <p className="text-sm font-medium mb-2 mt-4 border-t border-gray-100 pt-4">
                {featuresIncluded}
              </p>
              <ul className="space-y-3 mb-8 grow">
                {proFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start"
                  >
                    <span className="text-primary mr-2">
                      ✓
                    </span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: feature,
                      }}
                    ></span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 border-t border-gray-200">
              <CheckoutButton
                priceId={
                  (process.env
                    .NEXT_PUBLIC_STRIPE_PRICE_PLAN_PREMIUM_BUNDLE as string) ||
                  "price_45678"
                }
                mode="payment"
                cancelUrl={cancelUrl}
                variant="outline"
                className="w-full "
              >
                {subscribe}
              </CheckoutButton>
              <p className="text-xs text-center text-gray-500 mt-3">
                {nonRefundable}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
