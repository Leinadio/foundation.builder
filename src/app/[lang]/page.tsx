import { LayoutDashboard } from "lucide-react";
import FAQ from "@/components/FAQ";
import {
  Dictionary,
  getDictionary,
} from "@/app/[lang]/dictionaries";
import {
  Header,
  UserSectionItem,
} from "@/components/organisms/Header";
import { Hero } from "@/components/organisms/Hero";
import { VideoMockup } from "@/components/atoms/VideoMockup";
import { HowItWorks } from "@/components/organisms/HowItWorks";
import { WhatYouWillGet } from "@/components/organisms/WhatYouWillGet";
import { Features } from "@/components/organisms/Features";
import { ProfileTarget } from "@/components/organisms/ProfileTarget";
import { WaveLine } from "@/components/atoms/WaveLine";
import { ArrowDown } from "@/components/atoms/ArrowDown";
import { Plans } from "@/components/organisms/Plans";
import { PlanDecisionHelper } from "@/components/organisms/PlanDecisionHelper";
import { FounderStory } from "@/components/organisms/FounderStory";
import { FinalCta } from "@/components/organisms/FinalCta";
import { Footer } from "@/components/organisms/Footer";

export interface AlertInfo {
  message: string;
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "en" | "fr" }>;
}) {
  const { lang } = await params;
  const dict: Dictionary = await getDictionary(lang);

  const menuItems = [
    {
      title: dict.navbar.howItWorks,
      sectionId: "howItWorks",
    },
    {
      title: dict.navbar.whatYouGet,
      sectionId: "whatYouGet",
    },
    { title: dict.navbar.pricing, sectionId: "pricing" },
    { title: dict.navbar.faq, sectionId: "faq" },
  ];

  const userSectionItems: UserSectionItem[] = [
    {
      title: dict.appSidebar.dashboard,
      href: `/${lang}/app`,
      icon: <LayoutDashboard className="mr-2 h-5 w-5" />,
    },
  ];

  const steps = [
    {
      label: dict.howItWorks.steps.step1.label,
      title: dict.howItWorks.steps.step1.title,
      description: dict.howItWorks.steps.step1.description1,
      objective: dict.howItWorks.steps.step1.objective,
    },
    {
      label: dict.howItWorks.steps.step2.label,
      title: dict.howItWorks.steps.step2.title,
      description: dict.howItWorks.steps.step2.description1,
      objective: dict.howItWorks.steps.step2.objective,
    },
    {
      label: dict.howItWorks.steps.step3.label,
      title: dict.howItWorks.steps.step3.title,
      description: dict.howItWorks.steps.step3.description1,
      objective: dict.howItWorks.steps.step3.objective,
    },
  ];

  return (
    <main>
      <Header
        logoUrl="/icon/logo.svg"
        menuItems={menuItems}
        userSectionItems={userSectionItems}
      />
      <Hero
        title={dict.hero.title}
        description={dict.hero.description}
        ctaText={dict.hero.ctaText}
        lang={lang}
      />
      <VideoMockup lang={lang} />
      <HowItWorks lang={lang} steps={steps} />
      <WhatYouWillGet
        title={dict.whatYouGet.title}
        subtitle={dict.whatYouGet.subtitle}
        description={dict.whatYouGet.description}
        listTitle={dict.whatYouGet.listTitle}
        items={dict.whatYouGet.items}
      />
      <WaveLine />
      <Features
        title={dict.features.title}
        items={dict.features.items}
      />
      <WaveLine />
      <ProfileTarget
        title={dict.targetProfiles.title}
        description={dict.targetProfiles.description}
        profiles={dict.targetProfiles.profiles}
      />
      <ArrowDown />
      <Plans
        lang={lang}
        title={dict.pricing.title}
        subtitle={dict.pricing.subtitle}
        completeReport={dict.pricing.completeReport}
        ctaText={dict.hero.ctaText}
        nonRefundable={dict.pricing.nonRefundable}
        orChooseSubscription={
          dict.pricing.orChooseSubscription
        }
        startingPlan={dict.pricing.startingPlan}
        subscriptionPlan={dict.pricing.subscriptionPlan}
        featuresIncluded={dict.pricing.featuresIncluded}
        discoveryFeatures={dict.pricing.discoveryFeatures}
        plusFeatures={dict.pricing.plusFeatures}
        proFeatures={dict.pricing.proFeatures}
        discoveryDescription={
          dict.pricing.discoveryDescription
        }
        plusDescription={dict.pricing.plusDescription}
        proDescription={dict.pricing.proDescription}
        startFree={dict.pricing.startFree}
        noCard={dict.pricing.noCard}
        subscribe={dict.pricing.subscribe}
        plans={dict.pricing.plans}
      />
      <PlanDecisionHelper
        title={dict.planChoice.title}
        options={dict.planChoice.options}
      />
      <FounderStory
        intro={dict.story.intro}
        title={dict.story.title}
        content={dict.story.content}
      />
      <FAQ dict={dict} />
      <FinalCta
        title={dict.cta.title}
        description={dict.cta.description}
        ctaText={dict.hero.ctaText}
        lang={lang}
      />
      <Footer
        contact={dict.footer.contact}
        legal={dict.footer.legal}
        lang={lang}
      />
    </main>
  );
}
