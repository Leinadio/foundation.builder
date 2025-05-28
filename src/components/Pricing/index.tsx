import React from "react";
import { getDictionary } from "@/app/[lang]/dictionaries";
import CheckoutButton from "@/components/atoms/CheckoutButton";

export const Pricing = async ({
  lang,
}: {
  lang: string;
}) => {
  console.log("Pricing");
  const dict = await getDictionary(lang);
  const cancelUrl = "/app/pricing";

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Plan Découverte */}
          <div className="flex flex-col h-full rounded-xl border-2 border-gray-200 transition-all duration-300 hover:border-primary hover:shadow-lg">
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex flex-col">
                <div className="bg-primary-lightest text-primary text-xs font-medium px-3 py-1 rounded-full self-start mb-4">
                  {
                    dict.pricing.completeReport
                      .oneTimePayment
                  }
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  {dict.pricing.completeReport.title}
                </h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold">
                    {dict.pricing.completeReport.price}
                  </span>
                  <span className="text-gray-500 ml-2">
                    {dict.pricing.completeReport.period}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  {dict.pricing.completeReport.description}
                </p>
              </div>

              <div className="flex flex-col">
                <p className="text-sm font-medium mb-2 mt-4 border-t border-gray-100 pt-4">
                  {dict.pricing.featuresIncluded}
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {dict.pricing.completeReport.benefits.items.map(
                    (feature, index) => (
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
                    )
                  )}
                </ul>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200">
              <CheckoutButton
                priceId={
                  (process.env
                    .NEXT_PUBLIC_STRIPE_PRICE_RAPPORT_UNIQUE as string) ||
                  "price_12345"
                }
                mode="payment"
                cancelUrl={cancelUrl}
                variant="outline"
                className="w-full"
              >
                {dict.pricing.subscribeOneTimePayment}
              </CheckoutButton>
              <p className="text-xs text-center text-gray-500 mt-3">
                {dict.pricing.nonRefundable}
              </p>
            </div>
          </div>

          {/* Bundle Standard (anciennement Plan Plus) */}
          <div className="flex flex-col h-full rounded-xl border-2 border-primary bg-white transition-all duration-300 hover:shadow-xl relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-sm font-bold px-4 py-1 rounded-full">
              {dict.pricing.completeReport.popular}
            </div>
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div className="flex flex-col">
                <div className="bg-primary-light text-primary text-xs font-medium px-3 py-1 rounded-full self-start mb-4">
                  {dict.pricing.subscriptionPlan}
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  {dict.pricing.plans.plus.title}
                </h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold">
                    {dict.pricing.plans.plus.price}
                  </span>
                  <span className="text-gray-500 ml-2">
                    {dict.pricing.plans.plus.period}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  {dict.pricing.plusDescription}
                </p>
              </div>

              <div className="flex flex-col">
                <p className="text-sm font-medium mb-2 mt-4 border-t border-gray-100 pt-4">
                  {dict.pricing.featuresIncluded}
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {dict.pricing.plusFeatures.map(
                    (feature, index) => (
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
                    )
                  )}
                </ul>
              </div>
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
                className="w-full bg-primary hover:bg-amber-200"
              >
                {dict.pricing.subscribe}
              </CheckoutButton>
              <p className="text-xs text-center text-gray-500 mt-3">
                {dict.pricing.nonRefundable}
              </p>
            </div>
          </div>

          {/* Bundle Premium (anciennement Plan Pro) */}
          <div className="flex flex-col h-full rounded-xl border-2 bg-white transition-all duration-300 hover:shadow-xl relative">
            {/* <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-sm font-bold px-4 py-1 rounded-full">
              {dict.pricing.completeReport.popular}
            </div> */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="bg-primary-light text-primary text-xs font-medium px-3 py-1 rounded-full self-start mb-4">
                {dict.pricing.subscriptionPlan}
              </div>
              <h3 className="text-2xl font-bold mb-2">
                {dict.pricing.plans.pro.title}
              </h3>
              <div className="flex items-baseline mb-6">
                <span className="text-3xl font-bold">
                  {dict.pricing.plans.pro.price}
                </span>
                <span className="text-gray-500 ml-2">
                  {dict.pricing.plans.pro.period}
                </span>
              </div>
              <p className="text-gray-600 mb-6">
                {dict.pricing.proDescription}
              </p>

              <p className="text-sm font-medium mb-2 mt-4 border-t border-gray-100 pt-4">
                {dict.pricing.featuresIncluded}
              </p>
              <ul className="space-y-3 mb-8 flex-grow">
                {dict.pricing.proFeatures.map(
                  (feature, index) => (
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
                  )
                )}
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
                className="w-full"
              >
                {dict.pricing.subscribe}
              </CheckoutButton>
              <p className="text-xs text-center text-gray-500 mt-3">
                {dict.pricing.nonRefundable}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
